# Cube Network WordPress Theme

A cyberpunk Minecraft server theme featuring a revolutionary 3D holographic cube logo with neon effects and dark theme design.

## Features

- **Revolutionary 3D Holographic Cube Logo** - World's best animated cube with dual-layer rotation
- **Dark Cyberpunk Design** - Minecraft-inspired with neon blue, green, and purple accents
- **Fully Responsive** - Optimized for all devices and screen sizes
- **WordPress Customizer Support** - Easy customization through WordPress admin
- **SEO Optimized** - Built-in SEO features and structured data
- **Performance Optimized** - Fast loading with optimized assets
- **Accessibility Ready** - WCAG compliant with keyboard navigation
- **Security Enhanced** - Multiple security features implemented

## Installation

### Manual Installation

1. Download the theme files
2. Upload the `cube-network-theme` folder to `/wp-content/themes/`
3. Activate the theme through the WordPress admin panel
4. Go to Appearance > Customize to configure theme settings

### Via WordPress Admin

1. Go to Appearance > Themes > Add New
2. Click "Upload Theme"
3. Choose the theme ZIP file
4. Click "Install Now" and then "Activate"

## Theme Structure

```
cube-network-theme/
├── style.css                 # Main stylesheet with theme header
├── index.php                 # Main template file
├── header.php               # Header template
├── footer.php               # Footer template
├── functions.php            # Theme functions and features
├── page.php                 # Page template
├── single.php               # Single post template
├── assets/
│   ├── js/
│   │   ├── cube-network.js  # Main JavaScript file
│   │   └── admin.js         # Admin JavaScript
│   └── css/
│       └── editor-style.css # WordPress editor styles
└── README.md               # This file
```

## Customization

### WordPress Customizer

The theme includes extensive customizer options:

- **Site Identity**: Logo, title, description
- **Hero Section**: Title, subtitle, server IP
- **Social Links**: Discord, store, and other links
- **Footer Settings**: Footer text and links

### Theme Options

Access theme options through:
`Appearance > Customize > [Section Name]`

Available sections:
- Site Identity
- Hero Section
- Social Links
- Footer Settings

### Custom CSS

Add custom CSS through:
`Appearance > Customize > Additional CSS`

## Navigation Menus

The theme supports three menu locations:

1. **Primary Menu** - Main navigation bar
2. **Mobile Menu** - Mobile navigation
3. **Footer Menu** - Footer links

Configure menus at:
`Appearance > Menus`

## Widget Areas

The theme includes widget areas:

1. **Sidebar** - Main sidebar (if needed)
2. **Footer Widget Area** - Footer widgets

## Custom Post Types

The theme includes custom post types for Minecraft servers:

- **Server Events** - Manage server events
- **Server Rules** - Manage server rules

## Performance Features

- **Optimized Assets** - Minified CSS and deferred JavaScript
- **Lazy Loading** - Images load on demand
- **Particle Animation Optimization** - Reduced particles on mobile
- **Caching Support** - Compatible with WordPress caching plugins

## SEO Features

- **Canonical URLs** - Prevents duplicate content
- **Open Graph Tags** - Social media optimization
- **Twitter Cards** - Twitter sharing optimization
- **Structured Data** - Enhanced search results
- **Meta Descriptions** - Customizable page descriptions

## Security Features

- **Header Security** - Removes WordPress version info
- **XML-RPC Disabled** - Prevents brute force attacks
- **Query String Removal** - Cleaner URLs
- **Content Security** - XSS protection measures

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Mobile)

## WordPress Requirements

- WordPress 5.0 or higher
- PHP 7.4 or higher
- MySQL 5.6 or higher

## Accessibility

The theme is built with accessibility in mind:

- **Keyboard Navigation** - Full keyboard support
- **Screen Reader Support** - Proper ARIA labels
- **Focus Management** - Visible focus indicators
- **High Contrast Support** - Respects user preferences
- **Reduced Motion** - Respects user motion preferences

## Development

### Local Development

1. Set up a local WordPress installation
2. Clone/download the theme to `wp-content/themes/`
3. Activate the theme
4. Install recommended plugins for development

### Recommended Plugins

- **Advanced Custom Fields** - For additional custom fields
- **Yoast SEO** - Enhanced SEO features
- **W3 Total Cache** - Performance optimization
- **Wordfence Security** - Additional security

## Troubleshooting

### Common Issues

**Theme not activating:**
- Check PHP version (7.4+ required)
- Verify all theme files are uploaded
- Check file permissions

**Styles not loading:**
- Clear cache (browser and WordPress)
- Check if style.css has proper theme header
- Verify file paths in functions.php

**JavaScript not working:**
- Check browser console for errors
- Ensure jQuery is loaded
- Verify script paths in functions.php

### Debug Mode

Enable WordPress debug mode by adding to `wp-config.php`:

```php
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
define('WP_DEBUG_DISPLAY', false);
```

## Support

For theme support:

1. Check this README file
2. Review WordPress documentation
3. Check browser console for errors
4. Contact theme developer

## Changelog

### Version 1.0
- Initial release
- 3D holographic cube logo
- Dark cyberpunk design
- Full WordPress integration
- Responsive design
- SEO optimization
- Performance optimization
- Security enhancements

## License

This theme is licensed under GPL v2 or later.

## Credits

- **Fonts**: Google Fonts (Orbitron, JetBrains Mono)
- **Icons**: Emoji icons for cross-platform compatibility
- **Framework**: WordPress theme development standards
- **Design**: Custom cyberpunk Minecraft-inspired design

---

**Theme Name**: Cube Network  
**Version**: 1.0  
**Author**: Cube Network Team  
**Tested**: WordPress 6.4  
**License**: GPL v2 or later