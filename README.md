# Pavan Adhitya Bollam - Portfolio Website

A world-class, production-ready personal portfolio website built with React, Vite, Tailwind CSS, and Framer Motion. Features a premium glassmorphism UI with dark/light mode support and smooth animations.

## 🚀 Tech Stack

- **React.js** - UI library
- **Vite** - Build tool and dev server
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React Icons** - Icon library
- **EmailJS** - Contact form functionality

## ✨ Features

- 🌙 **Dark/Light Mode** - Toggle between themes with smooth transitions
- 🎨 **Premium UI** - Glassmorphism design with green + black color palette
- 📱 **Fully Responsive** - Optimized for all devices
- ✨ **Smooth Animations** - Framer Motion animations throughout
- ⌨️ **Typing Effect** - Dynamic text animation in hero section
- 🎯 **Scroll Reveal** - Elements animate as you scroll
- 📧 **Contact Form** - Functional EmailJS integration
- 🔗 **Social Links** - GitHub, LinkedIn, LeetCode integration
- 📊 **Animated Counters** - Achievement statistics
- 🎴 **Project Cards** - Premium project showcase with live demos

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── ui/              # Reusable UI components
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Section.tsx
│   │   │   └── SectionTitle.tsx
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Achievements.tsx
│   │   ├── Certifications.tsx
│   │   ├── CodingProfiles.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── context/
│   │   └── ThemeContext.tsx  # Theme management
│   ├── App.tsx              # Main app component
│   ├── main.tsx             # Entry point
│   ├── index.css            # Global styles
│   └── vite-env.d.ts        # TypeScript declarations
├── public/                  # Static assets
├── index.html               # HTML template
├── package.json             # Dependencies
├── tailwind.config.js       # Tailwind configuration
├── tsconfig.json            # TypeScript configuration
└── vite.config.ts           # Vite configuration
```

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` and add your EmailJS credentials:
   ```
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

   To get EmailJS credentials:
   - Sign up at [https://www.emailjs.com/](https://www.emailjs.com/)
   - Create an email service
   - Create an email template
   - Get your public key from account settings

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

6. **Preview production build**
   ```bash
   npm run preview
   ```

## 📝 Customization

### Update Personal Information

Edit the following files to customize the portfolio:

- **Hero Section**: `src/components/Hero.tsx` - Update name, tagline, and social links
- **About Section**: `src/components/About.tsx` - Update bio, education, and contact info
- **Skills Section**: `src/components/Skills.tsx` - Add/remove skills and technologies
- **Projects Section**: `src/components/Projects.tsx` - Update project details and links
- **Achievements Section**: `src/components/Achievements.tsx` - Update achievements and stats
- **Certifications Section**: `src/components/Certifications.tsx` - Add certifications
- **Coding Profiles Section**: `src/components/CodingProfiles.tsx` - Update profile links
- **Contact Section**: `src/components/Contact.tsx` - Update contact information
- **Footer**: `src/components/Footer.tsx` - Update footer content

### Customize Theme

Edit `tailwind.config.js` to modify the color scheme and theme settings.

## 🎨 Design Features

- **Glassmorphism UI** - Frosted glass effect on cards and components
- **Gradient Text** - Beautiful gradient text effects
- **Glow Effects** - Green glowing hover effects
- **Smooth Transitions** - All interactions have smooth transitions
- **Premium Animations** - Scroll reveal, hover effects, and typing animations
- **Responsive Design** - Mobile-first approach with breakpoints

## 📱 Sections

1. **Hero** - Introduction with typing animation and CTAs
2. **About** - Professional story and education
3. **Skills** - Categorized skills with animated cards
4. **Projects** - Premium project cards with live demos
5. **Achievements** - Animated counters and hackathon experience
6. **Certifications** - Professional certifications
7. **Coding Profiles** - GitHub, LinkedIn, LeetCode profiles
8. **Contact** - Functional contact form with EmailJS
9. **Footer** - Social links and copyright

## 🔧 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

### Netlify

1. Push your code to GitHub
2. Import project in Netlify
3. Add environment variables in Netlify dashboard
4. Deploy

### Other Platforms

The build output is in the `dist` folder. You can deploy this folder to any static hosting service.

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Pavan Adhitya Bollam**
- LinkedIn: [https://www.linkedin.com/in/pavan-adhitya/](https://www.linkedin.com/in/pavan-adhitya/)
- GitHub: [https://github.com/pavan-adhitya-bollam](https://github.com/pavan-adhitya-bollam)
- Email: pavanadhityabollam@gmail.com

## 🙏 Acknowledgments

- Built with React and Vite
- Styled with Tailwind CSS
- Animated with Framer Motion
- Icons from React Icons
- Contact form powered by EmailJS
