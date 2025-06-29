# 📝 Task Manager App

A simple full-stack Task Manager application built with **React**, **Node.js**, **Express**, and **MongoDB**. You can create, edit, delete, and filter tasks by status.

---

## 🔧 Tech Stack

- **Frontend:** React  
- **Backend:** Node.js + Express  
- **Database:** MongoDB  
- **HTTP Client:** Axios  
- **Tools:** CORS, Mongoose  

---

## 📁 Project Structure

```

task-manager/
├── client/       # React frontend
│   └── src/
│       └── App.js
├── server/       # Express backend
│   └── server.js

````

---

## 🚀 Getting Started

### 1️⃣ Clone the Project

```bash
git clone https://github.com/YOUR_USERNAME/task-manager.git
cd task-manager
````

### 2️⃣ Install Dependencies

```bash
# Backend
cd server
npm install

# Frontend
cd ../client
npm install
```

### 3️⃣ Start MongoDB

```bash
mongod
```

⚠️ If `mongod` is not recognized, make sure MongoDB is installed and its `/bin` folder is added to your system’s `PATH`.

### 4️⃣ Run the Project

```bash
# In one terminal (Backend)
cd server
node server.js

# In another terminal (Frontend)
cd client
npm start
```

* Frontend: [http://localhost:3000](http://localhost:3000)
* Backend: [http://localhost:5000](http://localhost:5000)

---

## 📦 API Endpoints

| Method | Endpoint     | Description   |
| ------ | ------------ | ------------- |
| GET    | `/tasks`     | Get all tasks |
| POST   | `/tasks`     | Create a task |
| PUT    | `/tasks/:id` | Update a task |
| DELETE | `/tasks/:id` | Delete a task |

---

## 🖥 UI Features

* ✅ Add new tasks (title, description, date, status)
* 📝 Edit tasks
* ❌ Delete tasks
* 🔍 Filter by status (`all`, `pending`, `completed`)
* 🔄 Auto-refresh task list after CRUD

---

## 🧠 Learnings

* `useState` for form & task list handling
* `useEffect` for fetching data on load
* `Axios` for making HTTP requests
* CRUD operations with MongoDB using Mongoose

---

## 🚧 Future Enhancements

* 🔐 User authentication
* 📊 Task priority & sorting
* 📱 Responsive mobile design
* 🔔 Reminders & notifications

---

## 📃 License

Open-source and free to use for learning or production. Contributions welcome!

