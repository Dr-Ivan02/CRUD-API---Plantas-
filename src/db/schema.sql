CREATE TABLE IF NOT EXISTS plants (
  id               INTEGER PRIMARY KEY AUTOINCREMENT,
  name             TEXT    NOT NULL,
  species          TEXT    NOT NULL,
  water_every_days INTEGER NOT NULL DEFAULT 7,
  created_at       TEXT    NOT NULL DEFAULT (datetime('now'))
);

