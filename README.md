<div align="center">
  <img src="public/logo2.png" alt="CodeTrack Logo" width="120" height="120">
  
  # 🚀 CodeTrack Frontend
  
  **Track your competitive programming journey with style**
  
  [![React](https://img.shields.io/badge/React-18.x-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
  [![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)](https://vitejs.dev/)
  [![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)
  
  [🌟 Live Demo](https://codetrack-rosy.vercel.app/) • [📖 Documentation](#documentation) • [🐛 Report Bug](https://forms.gle/fvUhcbL7WSUY4UE37) • [💡 Request Feature](https://forms.gle/fvUhcbL7WSUY4UE37)
  
</div>

---

## ✨ Features

### 🎯 Core Features
- **🏆 Personal Leaderboard** - Track your progress against friends and competitors
- **📊 Competitor Management** - Add and monitor Codeforces usernames
- **📚 CP Sheets** - Curated problem sets with difficulty progression (CP31 Sheet)
- **📅 Contest Tracking** - Stay updated with upcoming programming contests
- **👤 Profile Management** - Detailed user profiles with statistics and achievements

### 🔥 Advanced Features
- **📈 Progress Analytics** - Detailed charts and statistics using Recharts
- **🎨 Beautiful UI** - Modern dark theme with gradient effects and animations
- **📱 Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **⚡ Real-time Updates** - Live data from Codeforces API
- **🔗 Platform Integration** - Connect with Codeforces, LeetCode, and GitHub
- **🎪 Interactive Components** - Smooth animations and hover effects

---

## 🛠️ Tech Stack

<div align="center">

| Frontend | Styling | Tools | APIs |
|----------|---------|-------|------|
| ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) | ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white) | ![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E) | ![Codeforces](https://img.shields.io/badge/Codeforces-1F8ACB?style=for-the-badge&logo=codeforces&logoColor=white) |
| ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black) | ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white) | ![ESLint](https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white) | ![REST API](https://img.shields.io/badge/REST-02569B?style=for-the-badge&logo=rest&logoColor=white) |

</div>

### 📦 Key Dependencies
- **React Router** - Client-side routing
- **Recharts** - Data visualization and charts
- **Lucide React** - Beautiful icons
- **Axios** - HTTP client for API calls

---

## 🚀 Quick Start

### Prerequisites
- **Node.js** (v18.0.0 or higher)
- **npm** or **yarn** package manager
- **Git** for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/codetrack-frontend.git
   cd codetrack-frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Edit `.env.local` and add your configuration:
   ```env
   VITE_API_BASE_URL=http://localhost:5000/api
   VITE_CODEFORCES_API_URL=https://codeforces.com/api
   ```

4. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

### 🏗️ Build for Production

```bash
npm run build
npm run preview
```

---

## 📱 Screenshots

<div align="center">

### 🏠 Dashboard
![Dashboard](docs/images/dashboard.png)
*Beautiful gradient dashboard with quick access to all features*

### 🏆 Leaderboard
![Leaderboard](docs/images/leaderboard.png)
*Track your progress against competitors with detailed statistics*

### 📚 CP Sheets
![CP Sheets](docs/images/cp-sheets.png)
*Structured problem sets for skill improvement*

### 👤 Profile Management
![Profile](docs/images/profile.png)
*Comprehensive user profiles with platform integration*

</div>

---

## 🎯 Usage Examples

### Adding Competitors
```javascript
// Navigate to competitor management
navigate(`/username-management/${email}`);

// Add a new competitor
const response = await add(userId, username.trim());
if (response.success) {
  // Competitor added successfully
  setUsernames(prev => [...prev, response.user]);
}
```

### Fetching User Data
```javascript
// Get user statistics from Codeforces
const userResponse = await fetch(
  `https://codeforces.com/api/user.info?handles=${username}`
);
const userData = await userResponse.json();
```

---

## 🌟 Key Components

### 🧩 Reusable Components
- **`CodeTrackLogo`** - Animated logo component
- **`ProfileCard`** - User profile display with editing capabilities
- **`AchievementCard`** - Achievement display with progress tracking
- **`UsernameAdder`** - Add competitors with validation

### 📄 Main Pages
- **`AuthPage`** - User authentication (login/register)
- **`Dashboard`** - Main application dashboard
- **`UsernameManagement`** - Competitor management interface
- **`ProfilePage`** - User profile with tabs and statistics
- **`CoursePage`** - CP sheets and contest information
- **`UserDetailsPage`** - Detailed Codeforces profile analysis

---

## 🤝 Contributing

We love contributions! Here's how you can help:

### 🐛 Reporting Bugs
1. Check if the bug is already reported in [Issues](https://github.com/your-username/codetrack-frontend/issues)
2. Create a new issue with detailed description
3. Include screenshots and error messages

### 💡 Suggesting Features
1. Open a [Feature Request](https://forms.gle/fvUhcbL7WSUY4UE37)
2. Describe the feature and its benefits
3. Add mockups or examples if possible

### 🔧 Development Workflow
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### 📝 Code Style
- Use **ESLint** configuration provided
- Follow **React** best practices
- Write meaningful commit messages
- Add comments for complex logic

---

## 📊 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ProfileCard.jsx
│   ├── AchievementCard.jsx
│   └── ...
├── pages/              # Main application pages
│   ├── authpage.jsx
│   ├── dashboard.jsx
│   ├── username_management.jsx
│   └── cp_sheets/
├── utils/              # Utility functions
│   ├── auth.js
│   ├── user.js
│   └── api.js
├── assets/             # Static assets
└── styles/             # Global styles
```

---

## 🔗 API Integration

### Codeforces API
- **User Information**: `/api/user.info`
- **User Submissions**: `/api/user.status`
- **Contest List**: `/api/contest.list`

### Backend API
- **Authentication**: `/api/auth/login`, `/api/auth/register`
- **User Management**: `/api/user/add`, `/api/user/remove`
- **Data Fetching**: `/api/user/fetch`

---

## 🌐 Deployment

### Vercel Deployment
1. Connect your GitHub repository to Vercel
2. Configure build settings:
   ```json
   {
     "buildCommand": "npm run build",
     "outputDirectory": "dist",
     "installCommand": "npm install"
   }
   ```
3. Set environment variables in Vercel dashboard
4. Deploy automatically on push to main branch

### Other Platforms
- **Netlify**: Use `npm run build` and deploy `dist` folder
- **GitHub Pages**: Use `npm run build` and deploy to `gh-pages` branch
- **Firebase Hosting**: Use Firebase CLI with `firebase deploy`

---

## 📈 Performance Features

- ⚡ **Vite** for fast development and building
- 🎨 **Tailwind CSS** for optimized styling
- 📦 **Code Splitting** with React.lazy
- 🔄 **Efficient Re-rendering** with React optimizations
- 📱 **Responsive Images** with proper sizing
- 🚀 **Progressive Loading** for better UX

---

## 🔒 Security Features

- 🛡️ **Input Validation** for all user inputs
- 🔐 **Authentication** with JWT tokens
- 🌐 **CORS Configuration** for API security
- 📝 **Form Sanitization** to prevent XSS
- 🔒 **Environment Variables** for sensitive data

---

## 🎨 Design System

### Color Palette
```css
/* Primary Colors */
--blue-600: #2563eb;
--indigo-600: #4f46e5;
--purple-600: #9333ea;

/* Background */
--gray-900: #111827;
--gray-800: #1f2937;

/* Accents */
--green-500: #10b981;
--yellow-400: #f59e0b;
--red-500: #ef4444;
```

### Typography
- **Headings**: Inter, sans-serif
- **Body**: System fonts for performance
- **Code**: JetBrains Mono, monospace

---

## 📞 Support & Community

- 🐛 [Bug Reports](https://forms.gle/fvUhcbL7WSUY4UE37)
- 💡 [Feature Requests](https://forms.gle/fvUhcbL7WSUY4UE37)
- 📧 Email: support@codetrack.dev
- 💬 Discord: [Join our community](https://discord.gg/codetrack)

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **Codeforces** for providing the comprehensive API
- **React Team** for the amazing framework
- **Tailwind CSS** for the utility-first styling
- **Vercel** for seamless deployment
- **Contributors** who helped improve this project

---

## 🚀 What's Next?

### 🔜 Upcoming Features
- [ ] **LeetCode Integration** - Full support for LeetCode statistics
- [ ] **Team Competitions** - Create and join programming teams
- [ ] **Achievement System** - Unlock badges and rewards
- [ ] **Practice Recommendations** - AI-powered problem suggestions
- [ ] **Mobile App** - React Native mobile application
- [ ] **Dark/Light Theme** - Theme switching capability

### 🎯 Roadmap
- **Q1 2024**: Mobile responsiveness improvements
- **Q2 2024**: Advanced analytics dashboard
- **Q3 2024**: Social features and community
- **Q4 2024**: AI-powered recommendations

---

<div align="center">

### ⭐ Star this repository if you found it helpful!

**Made with ❤️ by the CodeTrack team**

[🌟 Star](https://github.com/your-username/codetrack-frontend) • [🍴 Fork](https://github.com/your-username/codetrack-frontend/fork) • [📝 Contribute](CONTRIBUTING.md) • [🐛 Issues](https://github.com/your-username/codetrack-frontend/issues)

</div>
