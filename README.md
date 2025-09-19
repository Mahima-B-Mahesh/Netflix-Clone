🎬 Netflix Clone

A Netflix-inspired web application built with React for the frontend and Firebase for authentication and backend services.

This project replicates the core features of Netflix, including browsing movies, viewing details, and secure user authentication.

🚀 Features

🔐 User Authentication (Sign Up, Login, Logout) using Firebase Auth

🎥 Movie Lists & Categories (Trending, Popular, Top Rated, etc.)

📺 Dynamic Movie Rows with posters and details

🔍 Search Functionality for finding movies

❤️ User Profiles with the ability to save favorite shows/movies

⚡ Responsive UI – works on mobile, tablet, and desktop

🛠️ Tech Stack

Frontend: React, React Router, Axios, CSS

Backend & Auth: Firebase (Authentication, Firestore Database, Hosting)

API: TMDB (The Movie Database API) for movie data

Version Control: Git & GitHub

⚙️ Installation & Setup

Clone the repo and install dependencies:

git clone https://github.com/Mahima-B-Mahesh/Netflix-Clone.git
cd netflix-clone
npm install


Create a Firebase project and add your Firebase config.

Make a .env file in the root:

Run the development server:

npm start

📂 Project Structure
netflix-clone/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable UI components
│   ├── pages/           # Page components (Login, Home, Profile, etc.)
│   ├── context/         # Auth context for Firebase
│   ├── api/             # Axios TMDB API requests
│   ├── App.js           # Main app entry
│   └── index.js         # React DOM rendering
├── .env                 # API keys (not pushed to GitHub)
├── .gitignore           # Ignored files
├── package.json
└── README.md

🚢 Deployment

You can deploy this app on Firebase Hosting, Vercel, or Netlify.

For Firebase Hosting:

npm run build
firebase deploy

🤝 Contributing

Feel free to fork this repo, create a new branch, and submit a pull request with improvements!

📜 License

This project is for educational purposes only. All movie data and images are provided by TMDB
