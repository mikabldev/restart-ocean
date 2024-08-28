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

create table posts (
  id SERIAL PRIMARY KEY,
  titulo TEXT NOT NULL,
  contenido TEXT NOT NULL,
  fecha_creacion TIMESTAMP with time zone default now(),
  usuario_id INTEGER REFERENCES usuarios(id)
);

SELECT * FROM posts;
