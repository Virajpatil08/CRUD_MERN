
# CRUD using MERN

## 📌 Overview
This is a **CRUD using MERN** built with **Node.js, Express, EJS, and Tailwind CSS**. The application allows users to:

- View all registered users
- Edit user details
- Delete users with confirmation prompts
- Display user profiles with images

## 🛠 Tech Stack
- **Backend:** Node.js, Express.js
- **Frontend:** EJS (Embedded JavaScript)
- **Styling:** Tailwind CSS
- **Database:** MongoDB (Mongoose ORM)
- **Alerts:** SweetAlert2 (For delete confirmation)

## 🚀 Features
- Responsive UI using Tailwind CSS
- Fetch and display user data dynamically
- Edit user details via a dedicated form
- Delete users with a confirmation prompt
- Smooth UI enhancements with animations

## 📂 Folder Structure
```
├── public/
│   ├── stylesheets/
│   │   ├── style.css
├── views/
│   ├── index.ejs
│   ├── read.ejs
│   ├── edit.ejs
├── routes/
│   ├── users.js
├── models/
│   ├── User.js
├── server.js
├── package.json
├── README.md
```
## 🔗 Routes
| Method | Route | Description |
|--------|------------|-------------|
| GET | `/` | Home Page |
| GET | `/users` | List All Users |
| GET | `/edit/:id` | Edit User |
| POST | `/delete/:id` | Delete User |

## 🎨 UI Enhancements
- Modern and clean design with **Tailwind CSS**
- **SweetAlert2** for stylish alerts & confirmations
- Hover effects and smooth transitions


---

🔥 **Enjoy Coding!** 😃

