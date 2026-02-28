# 3D Mockups

Place your 3D mockup images in this folder.

## Supported Formats
- JPG, JPEG, PNG (renders from 3D software)
- Recommended size: 1200x800px or similar aspect ratio

## Naming Convention
Use descriptive names like:
- product-model.jpg
- interior-space.jpg
- architectural-visualization.png

## Adding to the Site
Update the `mockups` array in `script.js` to include your new 3D mockups:

```javascript
{
    id: unique_number,
    title: "Your Mockup Title",
    type: "3d",
    image: "mockups/3d/your-image.jpg",
    description: "Brief description of the mockup"
}
```
