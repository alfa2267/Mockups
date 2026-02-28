# Mockups Portfolio

A modern portfolio website showcasing 2D and 3D design mockups, accessible at **mockups.ainaeco.uk**.

## 🚀 Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **Filter System**: Easy navigation between 2D and 3D mockups
- **Modern UI**: Clean, professional layout with smooth animations
- **Easy Updates**: Simple structure for adding new mockups

## 📁 Project Structure

```
Mockups/
├── index.html          # Main HTML structure
├── styles.css          # Styling and responsive design
├── script.js           # Interactive functionality
├── mockups/
│   ├── 2d/            # 2D mockup images
│   └── 3d/            # 3D mockup images
└── README.md          # This file
```

## 🛠 Adding Your Mockups

1. **Add Images**: Place your mockup images in the appropriate folder (`mockups/2d/` or `mockups/3d/`)
2. **Update Data**: Edit the `mockups` array in `script.js` to include your new mockups
3. **Push Changes**: Commit and push to update the live site

### Example Mockup Entry:
```javascript
{
    id: 1,
    title: "Your Mockup Title",
    type: "2d", // or "3d"
    image: "mockups/2d/your-image.jpg",
    description: "Brief description of your work"
}
```

## 🌐 Deployment

This site is designed to be deployed on static hosting services:
- **Netlify**: Connect your GitHub repo for automatic deployments
- **Vercel**: Import from GitHub for seamless hosting
- **GitHub Pages**: Enable in repository settings

## 🎨 Customization

- **Colors**: Modify CSS variables in `styles.css`
- **Typography**: Update font imports in `index.html`
- **Layout**: Adjust grid settings in the CSS

## 📱 Local Development

Simply open `index.html` in your browser to preview the site locally.
