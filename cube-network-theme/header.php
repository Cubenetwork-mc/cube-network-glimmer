<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <?php if (is_front_page()) : ?>
        <title><?php echo get_theme_mod('site_title', 'Cube Network - Premium Minecraft Server'); ?></title>
        <meta name="description" content="<?php echo get_theme_mod('site_description', 'Join Cube Network - The ultimate Minecraft server experience with custom ranks, amazing gameplay, and an active community. Server IP: play.cubenetwork.fun'); ?>">
    <?php else : ?>
        <title><?php wp_title(' | ', true, 'right'); ?><?php bloginfo('name'); ?></title>
        <meta name="description" content="<?php echo get_the_excerpt() ?: get_theme_mod('site_description', 'Join Cube Network - The ultimate Minecraft server experience'); ?>">
    <?php endif; ?>
    
    <meta name="author" content="<?php echo get_theme_mod('site_author', 'Cube Network'); ?>">
    
    <!-- Open Graph Meta Tags -->
    <meta property="og:title" content="<?php echo is_front_page() ? get_theme_mod('site_title', 'Cube Network - Premium Minecraft Server') : wp_title(' | ', false, 'right') . get_bloginfo('name'); ?>">
    <meta property="og:description" content="<?php echo get_theme_mod('og_description', 'Join Cube Network - The ultimate Minecraft server experience with custom ranks, amazing gameplay, and an active community.'); ?>">
    <meta property="og:type" content="website">
    <meta property="og:url" content="<?php echo home_url(); ?>">
    <?php if (get_theme_mod('og_image')) : ?>
        <meta property="og:image" content="<?php echo get_theme_mod('og_image'); ?>">
    <?php endif; ?>
    
    <!-- Twitter Card Meta Tags -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="<?php echo get_theme_mod('twitter_title', 'Cube Network'); ?>">
    <meta name="twitter:description" content="<?php echo get_theme_mod('twitter_description', 'Join the ultimate Minecraft server experience'); ?>">
    <?php if (get_theme_mod('twitter_image')) : ?>
        <meta name="twitter:image" content="<?php echo get_theme_mod('twitter_image'); ?>">
    <?php endif; ?>
    
    <!-- Canonical URL -->
    <link rel="canonical" href="<?php echo is_front_page() ? home_url() : get_permalink(); ?>">
    
    <!-- Favicon -->
    <?php if (get_theme_mod('favicon')) : ?>
        <link rel="icon" type="image/x-icon" href="<?php echo get_theme_mod('favicon'); ?>">
    <?php endif; ?>
    
    <!-- Preconnect to Google Fonts for performance -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    
    <!-- WordPress head hook -->
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<!-- Navigation -->
<nav id="navbar" class="nav-container">
    <div class="nav-content">
        <div class="nav-logo">
            <?php if (get_theme_mod('logo_image')) : ?>
                <img src="<?php echo get_theme_mod('logo_image'); ?>" alt="<?php bloginfo('name'); ?>" class="logo-image">
            <?php else : ?>
                <span class="logo-text"><?php echo get_theme_mod('logo_text', 'CUBE'); ?></span>
            <?php endif; ?>
        </div>
        
        <div class="nav-links">
            <?php
            wp_nav_menu(array(
                'theme_location' => 'primary',
                'menu_class' => 'nav-menu',
                'container' => false,
                'fallback_cb' => 'cube_network_fallback_menu',
                'link_before' => '',
                'link_after' => '',
            ));
            ?>
        </div>
        
        <button class="mobile-menu-btn" id="mobileMenuBtn" aria-label="Toggle mobile menu">
            <span></span>
            <span></span>
            <span></span>
        </button>
    </div>
    
    <div class="mobile-menu" id="mobileMenu">
        <?php
        wp_nav_menu(array(
            'theme_location' => 'mobile',
            'menu_class' => 'mobile-nav-menu',
            'container' => false,
            'fallback_cb' => 'cube_network_fallback_mobile_menu',
            'link_before' => '',
            'link_after' => '',
        ));
        ?>
    </div>
</nav>