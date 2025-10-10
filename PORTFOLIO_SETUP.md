# Software Engineering Portfolio Setup Guide

## 🚀 Your Portfolio is Ready!

Your professional software engineering portfolio is now complete and ready to customize! Here's what has been built for you:

## ✨ Features Included

### 🏠 **Homepage**

- Hero section with your name and title
- Skills showcase (Frontend, Backend, Tools & DevOps)
- Featured projects section
- Contact information with social links

### 👨‍💻 **About Page**

- Professional bio and story
- Experience timeline
- Education section
- Personal values and what drives you

### 🚀 **Projects Page**

- Project showcase with filtering options
- Project cards with descriptions and tech stacks
- Live demo and GitHub links
- Featured project highlighting

### 📧 **Contact Page**

- Contact form with validation
- Multiple contact methods
- Social media links

### 🎨 **Design Features**

- Dark/Light theme toggle
- Fully responsive design
- Smooth animations and transitions
- Modern gradient designs
- Professional typography

## 🛠️ Customization Guide

### 1. **Update Personal Information**

#### Replace Placeholder Content:

- **Name**: Update "Joshua Jeyaranjan" throughout the files
- **Email**: Replace "your.email@example.com" with your actual email
- **LinkedIn**: Replace "linkedin.com/in/yourprofile" with your LinkedIn URL
- **GitHub**: Replace "github.com/yourusername" with your GitHub URL

#### Files to Update:

- `src/Pages/HomePage/HomePage.jsx` - Hero section and contact links
- `src/Pages/AboutPage/AboutPage.jsx` - Bio, experience, and education
- `src/Components/Footer/Footer.jsx` - Footer information
- `src/Pages/ContactPage/ContactPage.jsx` - Contact information

### 2. **Update Projects**

#### Edit Project Data:

- Open `src/Pages/ShowcasePage/ShowcasePage.jsx`
- Update the `projects` array with your actual projects
- Replace placeholder URLs with your real project links
- Update project descriptions and technologies

#### Project Object Structure:

```javascript
{
  id: 1,
  title: "Your Project Name",
  description: "Detailed project description...",
  image: "🚀", // Emoji or you can replace with actual images
  technologies: ["React", "Node.js", "PostgreSQL"],
  liveUrl: "https://your-project-demo.com",
  githubUrl: "https://github.com/yourusername/project-name",
  featured: true // Set to true for featured projects
}
```

### 3. **Update Skills**

#### Edit Skills Section:

- Open `src/Pages/HomePage/HomePage.jsx`
- Update the skills arrays in the skills section
- Add or remove technologies as needed
- Organize by Frontend, Backend, and Tools & DevOps

### 4. **Update Experience & Education**

#### Edit About Page:

- Open `src/Pages/AboutPage/AboutPage.jsx`
- Update the timeline section with your actual experience
- Replace company names, dates, and descriptions
- Update education information

### 5. **Customize Colors & Styling**

#### Theme Colors:

- Open `src/styles/partials/_variables.scss`
- Update the CSS custom properties for colors
- Modify `--color-primary` and `--color-secondary` for your brand colors

### 6. **Add Real Images**

#### Replace Emoji Placeholders:

- Replace emoji placeholders with actual project screenshots
- Add a professional headshot for the about section
- Update the hero section image

## 🚀 Deployment Options

### 1. **Vercel (Recommended)**

```bash
npm run build
# Deploy to Vercel
```

### 2. **Netlify**

```bash
npm run build
# Deploy to Netlify
```

### 3. **GitHub Pages**

```bash
npm run build
# Deploy to GitHub Pages
```

## 📱 Mobile Responsiveness

The portfolio is fully responsive and works great on:

- Desktop computers
- Tablets
- Mobile phones
- All screen sizes

## 🎨 Theme Support

- **Light Theme**: Clean, professional look
- **Dark Theme**: Modern, easy on the eyes
- **Auto-detection**: Respects user's system preference
- **Manual Toggle**: Users can switch themes

## 🔧 Development

### Start Development Server:

```bash
npm run dev
```

### Build for Production:

```bash
npm run build
```

### Preview Production Build:

```bash
npm run preview
```

## 📝 Next Steps

1. **Replace all placeholder content** with your actual information
2. **Add your real projects** with descriptions and links
3. **Update your experience** and education details
4. **Customize colors** to match your personal brand
5. **Add real images** for projects and profile
6. **Test on different devices** to ensure responsiveness
7. **Deploy to your preferred platform**

## 🎯 Tips for Success

- **Keep it updated**: Regularly update projects and experience
- **Use real metrics**: Include specific achievements and numbers
- **Quality over quantity**: Showcase your best work
- **Mobile-first**: Ensure it looks great on all devices
- **Fast loading**: Optimize images and code
- **SEO friendly**: Use descriptive titles and meta tags

## 🆘 Need Help?

If you need help customizing any part of your portfolio, feel free to ask! The code is well-commented and organized for easy modification.

---

**Happy coding! 🚀**
