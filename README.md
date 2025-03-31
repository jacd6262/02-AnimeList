# 📺 Gestión de Animes por Temporada

Este proyecto es una **web para gestionar los animes** que veré cada temporada. Incluye un **frontend con TailwindCSS y Heroicons**, y un **backend con Node.js y MongoDB**.

---

## 🚀 Configuración del Proyecto

### 🛠️ **1. Inicializar Git y subir a GitHub**
Ejecuta los siguientes comandos para conectar el proyecto con GitHub:

```sh
git remote add origin git@github.com:jacd6262/02-AnimeList.git
git push -u origin main
```

🎨 Frontend
El frontend utiliza TailwindCSS y Heroicons.

📦 Instalar dependencias
```sh
    npm i -D @tailwindcss/vite
    npm install @heroicons/react
```

📌 Importar Heroicons
Puedes importar los iconos en tu componente de React así:
```sh
    import { BeakerIcon } from '@heroicons/react/24/solid'
```

🖥 Backend
El backend usa Node.js, Express y MongoDB.

📦 Instalar dependencias
```sh
    npm i express mongoose cors dotenv
    npm i -D nodemon
```

📌 Explicación de cada paquete:

- **express** → Framework para manejar rutas y solicitudes HTTP.
- **mongoose** → ODM para manejar bases de datos MongoDB.
- **cors** → Permite que el backend acepte peticiones desde otros dominios.
- **dotenv** → Para manejar variables de entorno (.env).
- **nodemon** → Para reiniciar automáticamente el servidor en cada cambio.

---

## 🏗 Estructura del Proyecto

```
📂 02-AnimeList 
│── 📂 frontend/ # Interfaz de usuario (React + Tailwind) 
│── 📂 backend/ # Servidor (Node.js + Express + MongoDB) 
│── 📄 README.md # Documentación del proyecto 
│── 📄 .gitignore # Archivos a ignorar en Git 
│── 📄 package.json # Dependencias y scripts
```

📌 Desarrollado por: Tengen