CREATE DATABASE restartocean;

\c restartocean;

CREATE TABLE usuarios (
  id SERIAL PRIMARY KEY,
  nombre VARCHAR(25),
  apellido VARCHAR(25),
  email VARCHAR(50) UNIQUE NOT NULL,
  password VARCHAR(60) NOT NULL,
  add column is_admin boolean not null default false;
);

SELECT * FROM usuarios;

CREATE TABLE calendario (
  id SERIAL PRIMARY KEY,
  titulo_evento VARCHAR (100) NOT NULL,
  descripcion TEXT,
  fecha_inicio TIMESTAMP NOT NULL,
  fecha_final TIMESTAMP NOT NULL,
  usuario_id INTEGER REFERENCES usuarios(id) ON DELETE CASCADE
);

SELECT * FROM calendario;

create table posts (
  id SERIAL PRIMARY KEY,
  titulo TEXT NOT NULL,
  contenido TEXT NOT NULL,
  fecha_creacion TIMESTAMP with time zone default now(),
  usuario_id INTEGER REFERENCES usuarios(id)
);

SELECT * FROM posts;

