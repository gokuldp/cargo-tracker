# Cargo Shipment Tracker – Backend

This is the backend server for the Cargo Shipment Tracker web application, built using **Node.js**, **Express**, and **MongoDB**.

---

##  Features

- Add new shipments
- Get all shipments
- Get a shipment by ID
- Update the current location of a shipment
- (Optional) Get ETA for a shipment

---

##  Technologies Used

- Node.js
- Express.js
- MongoDB with Mongoose
- dotenv
- CORS
- nodemon (dev)

---

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/shipments` | Get all shipments |
| `GET` | `/api/shipments/:id` | Get a specific shipment by MongoDB `_id` |
| `POST` | `/api/shipments` | Create a new shipment |
| `POST` | `/api/shipments/:id/update-location` | Update current location |
| `GET` | `/api/shipments/:id/eta` | (Optional) Get ETA for a shipment |

---

How to run backend :

git clone https://github.com/your-username/cargo-tracker-backend.git
cd cargo-tracker-backend
npm install
npx nodemon server.js



# Cargo Shipment Tracker – Backend
Cargo Shipment(`cargo-tracker-frontend/`)

##  Features

- View all shipments in a table
- Add new shipment (ID, container, route, ETA, etc.)
- View individual shipment details with map
- Update current location
- Visualize full shipment route and current location on a map


Technologies Used

- React.js
- Bootstrap
- React Router
- React Leaflet + Leaflet.js (map support)
- Axios (API requests)


 How to Run

bash
git clone https://github.com/your-username/cargo-tracker-frontend.git
cd cargo-tracker-frontend
npm install
npm start



##  Environment Variables

Create a `.env` file in the root directory:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/cargo-tracker

How to run backend :

git clone https://github.com/your-username/cargo-tracker-backend.git
cd cargo-tracker-backend
npm install
npx nodemon server.js


How to Run

bash
git clone https://github.com/your-username/cargo-tracker-frontend.git
cd cargo-tracker-frontend
npm install
npm start







