# Deployment Guide - Shale Petro Academy

## 🚀 Deploy to Netlify

### Method 1: Deploy via Netlify Website (Easiest - Drag & Drop)

1. **Go to Netlify:**
   - Visit [https://www.netlify.com](https://www.netlify.com)
   - Sign up or log in (you can use GitHub, GitLab, Bitbucket, or Email)

2. **Deploy your site:**
   - Click on **"Add new site"** → **"Deploy manually"**
   - Drag and drop your entire `shale-petro-careers` folder
   - Wait for deployment (usually takes 30 seconds to 1 minute)
   - Your site will be live! 🎉

3. **Get your URL:**
   - Netlify will give you a random URL like: `random-name-123.netlify.app`
   - You can change this in **Site settings** → **Domain management** → **Options** → **Edit site name**

4. **Custom Domain (Optional):**
   - Go to **Domain settings** → **Add custom domain**
   - Follow the instructions to connect your own domain

### Method 2: Deploy via Netlify CLI

1. **Install Netlify CLI:**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify:**
   ```bash
   netlify login
   ```

3. **Deploy from your project folder:**
   ```bash
   cd /Users/seethaprince/project/shale-petro-careers
   netlify deploy
   ```

4. **Follow the prompts:**
   - Create & configure a new site
   - Publish directory: `.` (current directory)

5. **Deploy to production:**
   ```bash
   netlify deploy --prod
   ```

### Method 3: Deploy via Git (Continuous Deployment)

1. **Create a GitHub repository:**
   ```bash
   cd /Users/seethaprince/project/shale-petro-careers
   git init
   git add .
   git commit -m "Initial commit - Shale Petro Academy website"
   ```

2. **Push to GitHub:**
   - Create a new repository on [GitHub](https://github.com/new)
   - Follow GitHub's instructions to push your code

3. **Connect to Netlify:**
   - On Netlify, click **"Add new site"** → **"Import an existing project"**
   - Choose **GitHub** and select your repository
   - Build settings:
     - Build command: (leave empty)
     - Publish directory: `.`
   - Click **"Deploy site"**

4. **Automatic deployments:**
   - Every time you push to GitHub, Netlify will automatically redeploy!

## 📧 Setting Up Email Functionality

Your website has enrollment and download forms. To make them work:

### Option 1: Netlify Forms (Free)

1. **Update your forms in `index.html`:**
   Add `netlify` attribute to both forms:
   ```html
   <form name="enrollment" method="POST" data-netlify="true" netlify-honeypot="bot-field">
   <form name="download" method="POST" data-netlify="true" netlify-honeypot="bot-field">
   ```

2. **View submissions:**
   - Go to your Netlify dashboard → **Forms**
   - You'll receive email notifications for each submission

### Option 2: EmailJS Integration

1. **Sign up at [EmailJS](https://www.emailjs.com)**
2. **Get your credentials:**
   - Service ID
   - Template ID
   - Public Key

3. **Add to your website:**
   ```html
   <script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
   <script>
     emailjs.init("YOUR_PUBLIC_KEY");
   </script>
   ```

### Option 3: Backend API (Advanced)

Create a serverless function using:
- Netlify Functions (serverless)
- Vercel Functions
- AWS Lambda

## 🎨 Custom Domain Setup

1. **Buy a domain** (from GoDaddy, Namecheap, Google Domains, etc.)

2. **In Netlify:**
   - Go to **Domain settings** → **Add custom domain**
   - Enter your domain name

3. **Update DNS settings:**
   - In your domain registrar, add these DNS records:
   ```
   Type: A
   Name: @
   Value: 75.2.60.5

   Type: CNAME
   Name: www
   Value: your-site-name.netlify.app
   ```

4. **SSL Certificate:**
   - Netlify automatically provides free HTTPS
   - Certificate is auto-generated and renewed

## 📊 Performance Optimization

Your site is already optimized, but you can:

1. **Enable Asset Optimization:**
   - In Netlify → **Build & deploy** → **Post processing**
   - Enable: Bundle CSS, Minify CSS, Minify JS

2. **Add Performance Headers:**
   - Already configured in `netlify.toml`

## 🔧 Environment Variables

If you add API keys or secrets:

1. **In Netlify Dashboard:**
   - Go to **Site settings** → **Environment variables**
   - Add your variables (never commit these to Git!)

## 📱 Testing Your Deployed Site

After deployment:
- ✅ Test all navigation links
- ✅ Test enrollment form
- ✅ Test download form
- ✅ Check mobile responsiveness
- ✅ Verify all images load
- ✅ Test on different browsers

## 🐛 Troubleshooting

**Site not loading:**
- Check Netlify deploy logs for errors
- Verify all file paths are correct

**Forms not working:**
- Ensure `netlify` attribute is added
- Check Netlify Forms section in dashboard

**Images not showing:**
- Verify image URLs are correct
- Check if external images are accessible

## 📞 Support

- **Netlify Docs:** https://docs.netlify.com
- **Netlify Community:** https://answers.netlify.com
- **Status Page:** https://www.netlifystatus.com

## 🎉 Your Site Will Be Live At:

After deployment, your site will be accessible at:
- **Netlify subdomain:** `your-site-name.netlify.app`
- **Custom domain:** (if configured)

**Next Steps:**
1. Deploy using one of the methods above
2. Test all functionality
3. Set up email forms
4. Add custom domain (optional)
5. Share your link! 🚀

---

Good luck with your deployment! 🎊

