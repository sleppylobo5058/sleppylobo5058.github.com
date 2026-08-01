# CodeWolf — Landing Page

Sitio web (React + FastAPI + MongoDB) para el estudio de software CodeWolf.
Software que impulsa tu negocio: páginas web y apps de ventas, inventario y recolección de datos.

## Estructura
- `frontend/` — React (CRACO), Tailwind, framer-motion, lenis, react-fast-marquee.
- `backend/` — FastAPI, MongoDB (motor), integración de correo (Resend proxy).

## Configuración
1. Backend: copia `backend/.env.example` a `backend/.env` y completa los valores.
2. Frontend: copia `frontend/.env.example` a `frontend/.env` y ajusta `REACT_APP_BACKEND_URL`.

## Instalación y ejecución (local)
### Backend
```
cd backend
pip install -r requirements.txt
uvicorn server:app --host 0.0.0.0 --port 8001 --reload
```
### Frontend
```
cd frontend
yarn install
yarn start
```

## Datos de marca
Edita `frontend/src/lib/site.js` para cambiar nombre, eslogan, correo, WhatsApp, teléfono y ciudad.

## Endpoints
- `POST /api/contact` — guarda el mensaje en MongoDB y lo envía por correo al dueño.
- `GET /api/contact` — lista los mensajes recibidos.
