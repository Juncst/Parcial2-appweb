
CREATE DATABASE parcial2_appweb;

-- Tabla usuarios
CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,
    usuario VARCHAR(50) NOT NULL,
    correo VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL
);

-- Tabla perfil
CREATE TABLE perfil (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    apellido VARCHAR(50) NOT NULL,
    edad INTEGER NOT NULL,
    telefono VARCHAR(8) NOT NULL,
    usuario_id INTEGER NOT NULL,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);

-- Datos de prueba
INSERT INTO usuarios (usuario, correo, password) VALUES
('admin', 'admin@gmail.com', '1234'),
('josecastaneda', 'jose@gmail.com', '1234');

INSERT INTO perfil (nombre, apellido, edad, telefono, usuario_id) VALUES
('Admin', 'Sistema', 35, '11111111', 1),
('Jose', 'Castaneda', 25, '22222222', 2);