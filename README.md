# MERN Stack E-Commerce Application

A production-ready single-page e-commerce application built with MongoDB, Express, React, and Node.js.

## Features

- **Product Catalog**: Browse products with image galleries, size, and color options
- **Shopping Cart**: Add items, adjust quantities, and remove items
- **Responsive Design**: Modern dark theme UI optimized for all devices
- **Production Ready**: Configured for deployment on Render.com

## Tech Stack

- **Frontend**: React 18 + Vite
- **Backend**: Node.js + Express
- **Database**: MongoDB (Mongoose)
- **Styling**: CSS with CSS Variables
- **HTTP Client**: Axios

## Project Structure

```
ECommerce App/
├── client/          # React frontend (Vite)
│   ├── src/
│   │   ├── components/
│   │   ├── api/
│   │   └── App.jsx
│   └── package.json
├── server/          # Express backend
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── middleware/
│   │   └── config/
│   └── package.json
└── render.yaml      # Render.com deployment config
```

## Environment Variables

### Server (`server/.env`)

- `PORT` — Server port (default: 5000)
- `NODE_ENV` — Environment (development/production)
- `MONGODB_URI` — MongoDB Atlas connection string
- `CORS_ORIGIN` — Allowed origin(s), e.g. `http://localhost:5173` or your frontend URL

### Client (`client/.env`)

- `VITE_API_URL` — Backend API URL (e.g. `http://localhost:5000` for dev, or your Render API URL in prod)

## Local Development

### Prerequisites

- Node.js 18+
- MongoDB Atlas account (or local MongoDB)

### Setup

1. Clone the repository
2. Install dependencies:

```bash
cd server && npm install
cd ../client && npm install
```

3. Set up environment variables:

```bash
# Copy env.example to .env files
cp env.example server/.env
cp env.example client/.env
```

Edit `server/.env` and `client/.env` with your values.

4. Seed the database (optional):

```bash
cd server && npm run seed
```

5. Start the backend:

```bash
cd server && npm run dev
```

6. Start the frontend (in a new terminal):

```bash
cd client && npm run dev
```

7. Open the URL shown by Vite (e.g. http://localhost:5173). The dev server proxies `/api` to the backend when `VITE_API_URL` is unset.

## Deployment to Render.com

### Backend (Web Service)

1. Create a new Web Service on Render
2. Connect your repository
3. Set the following:
   - **Root Directory**: `server`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
4. Add environment variables:
   - `MONGODB_URI` — Your MongoDB Atlas connection string
   - `CORS_ORIGIN` — Your frontend URL (e.g., `https://your-app.onrender.com`)
   - `NODE_ENV` — `production`

### Frontend (Static Site)

1. Create a new Static Site on Render
2. Connect your repository
3. Set the following:
   - **Root Directory**: `client`
   - **Build Command**: `npm install && npm run build`
   - **Publish Directory**: `dist`
4. Add environment variable:
   - `VITE_API_URL` — Your backend API URL (e.g., `https://your-api.onrender.com`)

### Using render.yaml

Alternatively, you can use the included `render.yaml` file for automatic deployment configuration.

## API Endpoints

- `GET /api/products` — Get all products
- `GET /api/health` — Health check

## License

MIT
