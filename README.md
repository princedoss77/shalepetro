# Shale Petro Academy - Website

Welcome to the official website of **Shale Petro Academy Private Limited**, a premier training institute for mechanical and chemical engineering undergraduates aspiring to build successful careers in the Middle East Oil & Gas industry.

## 🌟 About

Shale Petro Academy provides:
- **Professional Training** for mechanical and chemical engineers
- **Mock Interview Sessions** with industry experts
- **End-to-End Placement Guidance** for Middle East oil & gas companies
- **Industry-Aligned Curriculum** designed by experienced professionals
- **Free Course Materials** for career development

## 🚀 Features

- **Modern & Responsive Design**: Beautiful UI that works on all devices
- **User-Friendly Navigation**: Easy-to-use interface with smooth scrolling
- **Interactive Elements**: Engaging animations and hover effects
- **Enrollment System**: Integrated course enrollment with payment flow (₹9,500 per course)
- **Free Resources**: Downloadable career materials with lead capture
- **Contact Form**: Simple inquiry form for prospective students
- **Program Information**: Detailed breakdown of training tracks

## 🚀 Quick Deploy to Netlify

### Method 1: Drag & Drop (Easiest - 2 Minutes)

1. Go to [https://app.netlify.com/drop](https://app.netlify.com/drop)
2. Drag your entire `shale-petro-careers` folder onto the page
3. Done! Your site is live! 🎉

### Method 2: Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
cd /Users/seethaprince/project/shale-petro-careers
netlify deploy --prod
```

### Method 3: GitHub + Netlify (Continuous Deployment)

```bash
# Initialize Git
git init
git add .
git commit -m "Initial commit"

# Push to GitHub (create repo first on GitHub)
git remote add origin YOUR_GITHUB_URL
git push -u origin main

# Connect to Netlify
# Go to Netlify → New site → Import from Git → Choose your repo
```

**📖 For detailed deployment instructions, see [DEPLOYMENT.md](DEPLOYMENT.md)**

## 📁 Project Structure

```
shale-petro-careers/
│
├── index.html          # Main HTML file
├── styles.css          # CSS styles and responsive design
├── script.js           # JavaScript for interactivity
├── netlify.toml        # Netlify configuration
├── .gitignore          # Git ignore file
├── README.md           # This file
└── DEPLOYMENT.md       # Detailed deployment guide
```

## 🛠️ Installation & Setup

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No special software or server required!

### Running the Website

1. **Download/Clone the project**
   ```bash
   git clone <repository-url>
   cd shale-petro-careers
   ```

2. **Open in browser**
   - Simply double-click `index.html` file, or
   - Right-click `index.html` and select "Open with" → Your preferred browser

3. **Using a local server (optional)**
   
   If you prefer using a local server:
   
   **Using Python:**
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Python 2
   python -m SimpleHTTPServer 8000
   ```
   
   **Using Node.js (with http-server):**
   ```bash
   npx http-server -p 8000
   ```
   
   Then visit: `http://localhost:8000`

## 🎨 Customization

### Colors
Edit the CSS variables in `styles.css` to change the color scheme:

```css
:root {
    --primary-color: #1e5a8e;      /* Main brand color */
    --secondary-color: #e67e22;    /* Accent color */
    --dark-color: #2c3e50;         /* Dark backgrounds */
    --light-color: #ecf0f1;        /* Light backgrounds */
}
```

### Content
- **Company Information**: Update contact details in `index.html` (Contact Section)
- **Programs**: Modify training programs in the Programs Section
- **Statistics**: Update the numbers in the Hero Section stats
- **Social Media**: Add your social media links in the footer

### Images
Replace the placeholder elements with actual images:
- Add your logo in place of the icon in the navigation
- Replace the `.image-placeholder` div in the About section with actual images
- Add relevant background images for sections

## 📱 Responsive Design

The website is fully responsive and optimized for:
- 📱 Mobile devices (phones)
- 📱 Tablets
- 💻 Laptops
- 🖥️ Desktop monitors

## 🌐 Browser Compatibility

Tested and working on:
- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)

## 📧 Contact Form

The contact form currently logs data to the console. To make it functional:

1. **Using a backend service:**
   - Implement server-side form handling (PHP, Node.js, etc.)
   - Use services like Formspree, EmailJS, or Netlify Forms

2. **Example with EmailJS:**
   ```javascript
   // Add EmailJS script in index.html
   // Configure in script.js
   emailjs.send("service_id", "template_id", formData)
     .then(() => alert("Message sent!"))
     .catch(err => console.error(err));
   ```

## 🚀 Deployment

### Deploy to GitHub Pages:
1. Push code to GitHub repository
2. Go to Settings → Pages
3. Select main branch
4. Your site will be live at `https://yourusername.github.io/shale-petro-careers`

### Deploy to Netlify:
1. Create account on [Netlify](https://netlify.com)
2. Drag and drop your project folder
3. Site goes live instantly with custom domain option

### Deploy to Vercel:
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

## 📈 Performance

- ✅ Fast loading times
- ✅ Optimized animations
- ✅ Minimal dependencies (only Font Awesome and Google Fonts)
- ✅ Clean, semantic HTML
- ✅ Efficient CSS

## 🔧 Technologies Used

- **HTML5** - Structure and content
- **CSS3** - Styling and animations
- **JavaScript (ES6)** - Interactivity and dynamic features
- **Font Awesome** - Icons
- **Google Fonts (Poppins)** - Typography

## 🎯 Key Sections

1. **Hero Section**: Eye-catching introduction with key statistics
2. **About Section**: Company overview and features
3. **Services Section**: Training, mock interviews, and placement guidance
4. **Programs Section**: Detailed training tracks for mechanical and chemical engineers
5. **Why Choose Us**: Unique value propositions
6. **Contact Section**: Contact form and company information
7. **Footer**: Quick links and social media

## 💡 Tips for Success

1. **Update regularly**: Keep content fresh with latest achievements
2. **Add testimonials**: Include success stories from placed students
3. **Include gallery**: Add photos from training sessions and events
4. **Blog section**: Consider adding a blog for industry insights
5. **SEO optimization**: Add meta tags and descriptions for better search visibility

## 📝 License

© 2025 Shale Petro Academy Private Limited. All rights reserved.

**Address:**
No.268, IInd Floor, Kaveri Complex,
96/104 Nungambakkam High Road,
Nungambakkam, Chennai,
Tamil Nadu, India - 600034

## 🤝 Support

For questions or support, please contact:
- **Email**: info@shalepetro.com
- **Phone**: +91 XXXX XXXXXX
- **Website**: [Your live URL after deployment]

---

Built with ❤️ for Shale Petro Academy Private Limited

## 🎯 Post-Deployment Checklist

After deploying to Netlify:

- [ ] Test enrollment form functionality
- [ ] Test free resources download forms
- [ ] Verify all navigation links work
- [ ] Check mobile responsiveness
- [ ] Update contact email/phone numbers
- [ ] Set up form notifications
- [ ] Add custom domain (optional)
- [ ] Enable HTTPS (automatic on Netlify)
- [ ] Test on multiple browsers
- [ ] Share your live link! 🎉

