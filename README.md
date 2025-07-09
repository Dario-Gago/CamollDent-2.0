# 🦷 CamollDent

**CamollDent** es una plataforma web moderna diseñada para clínicas dentales, desarrollada por **Darío Gago**. Ofrece una experiencia fluida tanto para profesionales como para pacientes, permitiendo la gestión eficiente de citas, usuarios y comunicaciones.

---

## 🚀 Tecnologías Utilizadas

### 🛠️ Backend

- **Node.js** – Motor principal del servidor
- **Express** – Framework ligero para el backend
- **PostgreSQL** – Base de datos relacional
- **JWT (JSON Web Tokens)** – Autenticación segura
- **Nodemailer** – Envío de correos electrónicos (notificaciones, confirmaciones)

### 🌐 Frontend

- **React 19** – Librería para la interfaz de usuario
- **React Router DOM 7** – Navegación dinámica entre vistas
- **Axios** – Cliente HTTP para consumir la API
- **SweetAlert2** – Alertas modernas y personalizables
- **Keen Slider** – Carruseles e interfaces deslizables
- **React Icons** & **Lucide React** – Íconos visuales y elegantes

---

## 📦 Instalación

1.  Clona el repositorio:
    ```bash
    git clone https://github.com/tu_usuario/camolldent.git
    ```
2.  Instala las dependencias del servidor:

    ```bash
    cd backend
    npm install
    ```

3.  Configura tus variables de entorno (.env):

```bash
PORT=3000
DB_HOST=localhost
DB_USER=postgres
DB_PASSWORD=tu_clave
DB_NAME=camolldent
JWT_SECRET=tu_clave_secreta
EMAIL_USER=tu_correo
EMAIL_PASS=tu_contraseña
```

Inicia el servidor:

```bash
npm start
```

5. Instala las dependencias del frontend:

```bash
cd ../frontend
npm install
```

6. Ejecuta el cliente:

```bash
npm run dev
```

---

🧑‍💻 Autor
Desarrollado con 💙 por Darío Gago
