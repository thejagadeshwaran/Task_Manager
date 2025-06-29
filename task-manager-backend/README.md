________________________________________
📝 Task Manager App
A simple full-stack Task Manager application built with React, Node.js, Express, and MongoDB. You can create, edit, delete, and filter tasks by status.
________________________________________
🔧 Tech Stack
•	Frontend: React
•	Backend: Node.js + Express
•	Database: MongoDB
•	HTTP Client: Axios
•	Tools: CORS, Mongoose
________________________________________
📁 Project Structure
task-manager/
├── client/        # React frontend
│   └── src/
│       └── App.js
├── server/        # Express backend
│   └── server.js
________________________________________
🚀 Getting Started
1️⃣ Clone the Project
git clone https://github.com//task-manager.git
cd task-manager
2️⃣ Install Dependencies
Backend
cd server
npm install
Frontend
cd ../client
npm install
3️⃣ Start MongoDB
mongod
⚠️ If mongod is not recognized, add MongoDB to your system's PATH.
4️⃣ Run the Project
Backend
cd server
node server.js
Frontend
cd ../client
npm start
•	Frontend: http://localhost:3000
•	Backend: http://localhost:5000
________________________________________
📦 API Endpoints
Method	Endpoint	Description
GET	/tasks	Get all tasks
POST	/tasks	Create a task
PUT	/tasks/:id	Update a task
DELETE	/tasks/:id	Delete a task
________________________________________
🖥 UI Features
•	✅ Add new tasks (title, description, date, status)
•	📝 Edit tasks
•	❌ Delete tasks
•	🔍 Filter by status (all, pending, completed)
•	🔄 Auto-refresh task list
________________________________________
🧠 Learnings
•	useState for state handling
•	useEffect for side effects
•	Axios for API calls
•	CRUD with Mongoose
________________________________________
🚧 Future Enhancements
•	🔐 User authentication
•	📊 Task priority & sorting
•	📱 Responsive mobile design
•	🔔 Reminders/notifications
________________________________________
📃 License
Open-source and free to use.

