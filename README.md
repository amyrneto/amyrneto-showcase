# Amyr Neto - Professional Portfolio Showcase

A comprehensive React-based portfolio website showcasing my professional skills, projects, and expertise in software development. This project demonstrates modern web development practices, responsive design, and full-stack capabilities.

## 🎯 Purpose

This project serves as a practical demonstration of my technical abilities, including:
- **React & TypeScript** development
- **Responsive web design** with CSS modules
- **Dynamic theming system** with light/dark mode toggle
- **API integration** with Vercel serverless functions
- **Email functionality** using Nodemailer
- **Video integration** with custom video player components
- **Modern deployment** practices
- **Clean code architecture** and component organization

## 🌐 Live Demo

Visit the live portfolio at: [https://amyrneto-showcase.vercel.app](https://amyrneto-showcase.vercel.app)

## 📄 License & Usage

This project is **completely free and open source**. You are welcome to:
- ✅ Use this code for your own portfolio
- ✅ Modify it to fit your needs
- ✅ Learn from the implementation
- ✅ Share it with others

**No payment required, no restrictions.** 

While not required, **credit would be appreciated** if you use this code as a foundation for your own projects.

## 🚀 Getting Started

### Prerequisites

- **Node.js** (version 14 or higher)
- **npm** or **yarn** package manager
- **Git** for cloning the repository

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/amyrneto/amyrneto-showcase.git
   cd amyrneto-showcase
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env.local` file in the root directory with the following structure:
   ```bash
   # Email configuration for contact form
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-gmail-app-password
   EMAIL_TO=your-email@gmail.com
   ```
   
   **Note:** For Gmail, you'll need to:
   - Enable 2-Factor Authentication
   - Generate an App Password (not your regular password)
   - Use the App Password in `EMAIL_PASS`

4. **Run the development server:**
   ```bash
   # For basic React development (contact form won't work)
   npm start
   
   # For full functionality including API routes
   npm install -g vercel
   vercel dev
   ```

5. **Open your browser:**
   - React dev server: `http://localhost:3000` (if using npm start)
   - Vercel dev server: `http://localhost:3000` (if using vercel dev)

## 🏗️ Building for Production

```bash
# Create production build
npm run build

# Test production build locally
npm install -g serve
serve -s build
```

## 📧 Contact Form Setup

The contact form uses **Vercel serverless functions** and **Nodemailer** for email functionality:

- **API Route:** `/api/contact.js`
- **Email Service:** Gmail SMTP
- **Dependencies:** `nodemailer` for email sending

### Local Development

- Use `vercel dev` instead of `npm start` to test the contact form locally
- The contact form will show a mock success message when using `npm start`

### Deployment

When deployed to Vercel, add your environment variables in:
**Project Settings → Environment Variables**

## 🛠️ Technologies Used

- **Frontend:** React 18, TypeScript, CSS Modules
- **Backend:** Vercel Serverless Functions, Node.js
- **Email:** Nodemailer with Gmail SMTP
- **Deployment:** Vercel
- **Development:** Create React App, ESLint, VS Code

## 📁 Project Structure

```
amyrneto-showcase/
├── api/                    # Vercel serverless functions
│   └── contact.js         # Contact form API endpoint
├── public/                # Static assets
├── src/
│   ├── components/        # Reusable React components
│   ├── pages/            # Page components
│   ├── assets/           # Images, fonts, etc.
│   └── App.tsx           # Main application component
├── .env.local            # Environment variables (create this)
└── package.json          # Dependencies and scripts
```

## 🎨 Customization

To adapt this portfolio for your own use:

1. **Replace content** in the page components (`src/pages/`)
2. **Update images** in `src/assets/`
3. **Modify styling** in the CSS module files
4. **Update contact information** in the relevant components
5. **Configure your own email** in the environment variables

## 🤝 Contributing

While this is primarily a personal portfolio, suggestions and improvements are welcome! Feel free to:
- Open issues for bugs or suggestions
- Submit pull requests for improvements
- Fork the project and make it your own

## 📞 Contact

**Amyr Borges Fortes Neto**
- Email: amyrneto@gmail.com
- LinkedIn: [Your LinkedIn Profile]
- GitHub: [@amyrneto](https://github.com/amyrneto)

---

*This README was written to help developers understand and use this portfolio template. Happy coding! 🚀*
