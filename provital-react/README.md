# ProVital React Application

A modern, responsive React application for a lifestyle medicine platform, converted from the original HTML/CSS/JavaScript implementation.

## 🚀 Features

### ✅ Implemented Components

- **Header Component**
  - Responsive navigation with mobile menu
  - ProVital logo with FontAwesome heart icon
  - Authentication dropdown for doctors and patients
  - Mobile-first hamburger menu

- **Hero Section**
  - Dynamic image grid with 4 lifestyle images
  - Interactive search form with FontAwesome icons
  - Responsive design with mobile optimization
  - Animated gradient background

- **How It Works Section**
  - Interactive pillar navigation (6 pillars)
  - Smooth slider transitions with Framer Motion
  - Touch/swipe support for mobile devices
  - Auto-sliding functionality (5-second intervals)
  - Ripple effect on button clicks

### 🎨 Design Features

- **Responsive Design**: Mobile-first approach with breakpoints at 768px and 480px
- **Modern Animations**: Smooth transitions using Framer Motion
- **Interactive Elements**: Hover effects, click animations, and touch gestures
- **Accessibility**: Proper ARIA labels and keyboard navigation support
- **Performance Optimized**: Lazy loading and optimized re-renders

## 🛠️ Technology Stack

- **React 18** - Modern React with hooks
- **Framer Motion** - Animation library for smooth transitions
- **FontAwesome** - Icon library for consistent iconography
- **CSS3** - Modern CSS with flexbox and grid layouts
- **JavaScript ES6+** - Modern JavaScript features

## 📁 Project Structure

```
provital-react/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Header/
│   │   │   ├── Header.jsx
│   │   │   └── AuthDropdown.jsx
│   │   ├── Hero/
│   │   │   ├── Hero.jsx
│   │   │   ├── ImageGrid.jsx
│   │   │   └── SearchForm.jsx
│   │   └── HowItWorks/
│   │       ├── HowItWorks.jsx
│   │       └── PillarCard.jsx
│   ├── assets/
│   │   └── images/
│   │       ├── hero-cooking.jpg
│   │       ├── hero-yoga.jpg
│   │       ├── hero-beach.jpg
│   │       ├── hero-doctor.jpg
│   │       ├── nutrition.jpg
│   │       ├── physical-activity.jpg
│   │       ├── sleep.jpg
│   │       ├── stress-management.jpg
│   │       ├── social-connection.jpg
│   │       └── substance-abuse.jpg
│   ├── styles/
│   │   └── App.css
│   ├── App.js
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd provital-react
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px
- **Small Mobile**: Below 480px

## 🎯 Interactive Features

### Pillar Navigation
- Click on any pillar button to view its content
- Smooth sliding animation between pillars
- Auto-advance every 5 seconds
- Touch/swipe support on mobile devices
- Navigation arrows for desktop users

### Search Form
- Three input fields with FontAwesome icons
- Responsive form layout
- Click animation on submit button
- Mobile-optimized input fields

### Mobile Menu
- Hamburger menu for mobile devices
- Smooth slide-down animation
- Click outside to close functionality
- Responsive navigation links

## 🔧 Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)

## 🎨 Styling Approach

- **CSS Modules**: Component-scoped styling
- **Mobile-First**: Responsive design starting from mobile
- **Flexbox & Grid**: Modern layout techniques
- **CSS Variables**: Consistent color scheme
- **Animations**: Smooth transitions and hover effects

## 🚀 Performance Optimizations

- **React.memo**: Preventing unnecessary re-renders
- **useCallback & useMemo**: Optimizing expensive operations
- **Lazy Loading**: Images loaded as needed
- **Code Splitting**: Automatic with Create React App

## 🔮 Future Enhancements

- [ ] Add more sections (testimonials, pricing, footer)
- [ ] Implement routing with React Router
- [ ] Add form validation and submission
- [ ] Integrate with backend API
- [ ] Add unit and integration tests
- [ ] Implement dark mode theme
- [ ] Add internationalization (i18n)
- [ ] Progressive Web App (PWA) features

## 🐛 Known Issues

- None currently identified

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

For support, email support@provital.com or create an issue in the repository.

---

**Built with ❤️ using React and modern web technologies**
