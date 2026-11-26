# CRUD de Plantas

API REST sencilla para gestionar plantas de interior (se utiliza Node.js + Express + SQLite).

## Requisitos

- Node.js 22.13 o superior

## Instalación

```bash
npm install
cp .env.example .env
```

## Uso

```bash
npm start
```

La API queda en `http://localhost:3000`. Para comprobarla: `GET /health`.

## Base de datos

Se usa SQLite mediante el módulo `node:sqlite` incluido en Node, sin
dependencias externas. El archivo `data/plantas.db` se crea al iniciar el
servidor y no se sube al repositorio. El esquema está definido en
`src/db/schema.sql`.

Tabla `plants`:

| Campo            | Tipo    | Descripción                       |
| ---------------- | ------- | --------------------------------- |
| id               | INTEGER | Clave primaria autoincremental    |
| name             | TEXT    | Nombre de la planta               |
| species          | TEXT    | Especie (por ejemplo, Aloe vera)  |
| water_every_days | INTEGER | Días entre riegos (por defecto 7) |
| created_at       | TEXT    | Fecha de registro                 |

## Endpoints

| Método | Ruta              | Descripción               |
| ------ | ----------------- | ------------------------- |
| GET    | `/api/plants`     | Lista todas las plantas   |
| GET    | `/api/plants/:id` | Obtiene una planta por id |
| POST   | `/api/plants`     | Registra una planta       |

Ejemplo de cuerpo para `POST /api/plants`:

```json
{ "name": "Monstera de la sala", "species": "Monstera deliciosa", "water_every_days": 10 }
```