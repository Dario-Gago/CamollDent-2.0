CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password TEXT NOT NULL
);

INSERT INTO users (email, password)
VALUES ('gagodario1@gmail.com', '123456');

SELECT * FROM users

CREATE TABLE appointments (
  id SERIAL PRIMARY KEY,
  date DATE NOT NULL,
  time TIME NOT NULL,
  client_name VARCHAR(100) NOT NULL,
  client_email VARCHAR(100) NOT NULL,
  rut VARCHAR(15) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  service VARCHAR(50) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


SELECT * FROM appointments

INSERT INTO appointments (
  date, time, client_name, client_email, rut, phone, service
) VALUES (
  CURRENT_DATE, '19:00:00', 'Julian Pérez', 'juan@example.com', '12.345.678-9', '+56912345678', 'Limpieza'
);

