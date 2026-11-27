const DEFAULT_WATER_EVERY_DAYS = 7;

const isNonEmptyString = (value) => typeof value === 'string' && value.trim() !== '';

function validateId(req, res, next) {
  const id = Number(req.params.id);
  if (!Number.isSafeInteger(id) || id < 1) {
    return res.status(400).json({ error: 'El id debe ser un entero positivo' });
  }
  next();
}

function validatePlant(req, res, next) {
  const { name, species, water_every_days = DEFAULT_WATER_EVERY_DAYS } = req.body;
  const details = [];

  if (!isNonEmptyString(name)) {
    details.push('name es obligatorio y debe ser texto');
  }
  if (!isNonEmptyString(species)) {
    details.push('species es obligatorio y debe ser texto');
  }
  if (!Number.isSafeInteger(water_every_days) || water_every_days < 1) {
    details.push('water_every_days debe ser un entero mayor o igual a 1');
  }

  if (details.length > 0) {
    return res.status(400).json({ error: 'Datos inválidos', details });
  }

  // El controlador recibe los textos ya sin espacios sobrantes
  req.body = { name: name.trim(), species: species.trim(), water_every_days };
  next();
}

module.exports = { validateId, validatePlant };