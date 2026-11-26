const repository = require('../repositories/plants.repository');

function list(req, res) {
  res.json(repository.findAll());
}

function getById(req, res) {
  const plant = repository.findById(Number(req.params.id));
  if (!plant) {
    return res.status(404).json({ error: 'Planta no encontrada' });
  }
  res.json(plant);
}

function create(req, res) {
  const { name, species, water_every_days = 7 } = req.body;
  const plant = repository.create({ name, species, water_every_days });
  res.status(201).json(plant);
}

function update(req, res) {
  const { name, species, water_every_days = 7 } = req.body;
  const plant = repository.update(Number(req.params.id), { name, species, water_every_days });
  if (!plant) {
    return res.status(404).json({ error: 'Planta no encontrada' });
  }
  res.json(plant);
}

function remove(req, res) {
  if (!repository.remove(Number(req.params.id))) {
    return res.status(404).json({ error: 'Planta no encontrada' });
  }
  res.status(204).send();
}

module.exports = { list, getById, create, update, remove };