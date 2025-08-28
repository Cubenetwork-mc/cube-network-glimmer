<?php
/**
 * Cube Network Theme Functions
 *
 * @package Cube_Network
 */

// Prevent direct access
if (!defined('ABSPATH')) {
    exit;
}

/**
 * Theme setup
 */
function cube_network_setup() {
    // Add theme support for various features
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('custom-logo');
    add_theme_support('html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
    ));
    add_theme_support('customize-selective-refresh-widgets');
    
    // Register navigation menus
    register_nav_menus(array(
        'primary' => esc_html__('Primary Menu', 'cube-network'),
        'mobile' => esc_html__('Mobile Menu', 'cube-network'),
        'footer' => esc_html__('Footer Menu', 'cube-network'),
    ));
    
    // Set content width
    $GLOBALS['content_width'] = 1200;
}
add_action('after_setup_theme', 'cube_network_setup');

/**
 * Enqueue scripts and styles
 */
function cube_network_scripts() {
    // Enqueue main stylesheet
    wp_enqueue_style(
        'cube-network-style',
        get_stylesheet_uri(),
        array(),
        wp_get_theme()->get('Version')
    );
    
    // Enqueue main JavaScript file
    wp_enqueue_script(
        'cube-network-script',
        get_template_directory_uri() . '/assets/js/cube-network.js',
        array(),
        wp_get_theme()->get('Version'),
        true
    );
    
    // Localize script for AJAX and other dynamic data
    wp_localize_script('cube-network-script', 'cubeNetwork', array(
        'ajaxurl' => admin_url('admin-ajax.php'),
        'nonce' => wp_create_nonce('cube_network_nonce'),
        'serverIP' => get_theme_mod('server_ip', 'play.cubenetwork.fun'),
        'copySuccessMessage' => esc_html__('Server IP copied to clipboard!', 'cube-network'),
        'copyErrorMessage' => esc_html__('Failed to copy. Please copy manually: ', 'cube-network'),
    ));
    
    // Conditional scripts for admin
    if (is_admin()) {
        wp_enqueue_script(
            'cube-network-admin',
            get_template_directory_uri() . '/assets/js/admin.js',
            array('jquery'),
            wp_get_theme()->get('Version'),
            true
        );
    }
}
add_action('wp_enqueue_scripts', 'cube_network_scripts');

/**
 * Fallback menu for primary navigation
 */
function cube_network_fallback_menu() {
    echo '<div class="nav-menu">';
    echo '<a href="#home" class="nav-link">Home</a>';
    echo '<a href="#about" class="nav-link">About</a>';
    echo '<a href="#vote" class="nav-link">Vote</a>';
    echo '<a href="#rules" class="nav-link">Rules</a>';
    echo '<a href="#store" class="nav-link">Store</a>';
    echo '<a href="#discord" class="nav-link">Discord</a>';
    echo '</div>';
}

/**
 * Fallback menu for mobile navigation
 */
function cube_network_fallback_mobile_menu() {
    echo '<a href="#home" class="mobile-nav-link">Home</a>';
    echo '<a href="#about" class="mobile-nav-link">About</a>';
    echo '<a href="#vote" class="mobile-nav-link">Vote</a>';
    echo '<a href="#rules" class="mobile-nav-link">Rules</a>';
    echo '<a href="#store" class="mobile-nav-link">Store</a>';
    echo '<a href="#discord" class="mobile-nav-link">Discord</a>';
}

/**
 * Customizer settings
 */
function cube_network_customize_register($wp_customize) {
    // Site Identity Section
    $wp_customize->add_setting('site_title', array(
        'default' => 'Cube Network - Premium Minecraft Server',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    $wp_customize->add_control('site_title', array(
        'label' => 'Site Title',
        'section' => 'title_tagline',
        'type' => 'text',
    ));
    
    $wp_customize->add_setting('site_description', array(
        'default' => 'Join Cube Network - The ultimate Minecraft server experience with custom ranks, amazing gameplay, and an active community. Server IP: play.cubenetwork.fun',
        'sanitize_callback' => 'sanitize_textarea_field',
    ));
    $wp_customize->add_control('site_description', array(
        'label' => 'Site Description',
        'section' => 'title_tagline',
        'type' => 'textarea',
    ));
    
    // Logo Settings
    $wp_customize->add_setting('logo_text', array(
        'default' => 'CUBE',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    $wp_customize->add_control('logo_text', array(
        'label' => 'Logo Text',
        'section' => 'title_tagline',
        'type' => 'text',
    ));
    
    // Hero Section
    $wp_customize->add_section('hero_section', array(
        'title' => 'Hero Section',
        'priority' => 30,
    ));
    
    $wp_customize->add_setting('hero_title', array(
        'default' => 'CUBE NETWORK',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    $wp_customize->add_control('hero_title', array(
        'label' => 'Hero Title',
        'section' => 'hero_section',
        'type' => 'text',
    ));
    
    $wp_customize->add_setting('hero_subtitle', array(
        'default' => 'The Ultimate Minecraft Experience',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    $wp_customize->add_control('hero_subtitle', array(
        'label' => 'Hero Subtitle',
        'section' => 'hero_section',
        'type' => 'text',
    ));
    
    $wp_customize->add_setting('server_ip', array(
        'default' => 'play.cubenetwork.fun',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    $wp_customize->add_control('server_ip', array(
        'label' => 'Server IP',
        'section' => 'hero_section',
        'type' => 'text',
    ));
    
    // Social Links Section
    $wp_customize->add_section('social_links', array(
        'title' => 'Social Links',
        'priority' => 40,
    ));
    
    $wp_customize->add_setting('discord_link', array(
        'default' => 'https://discord.gg/cubenetwork',
        'sanitize_callback' => 'esc_url_raw',
    ));
    $wp_customize->add_control('discord_link', array(
        'label' => 'Discord Link',
        'section' => 'social_links',
        'type' => 'url',
    ));
    
    $wp_customize->add_setting('store_link', array(
        'default' => 'https://store.cubenetwork.fun',
        'sanitize_callback' => 'esc_url_raw',
    ));
    $wp_customize->add_control('store_link', array(
        'label' => 'Store Link',
        'section' => 'social_links',
        'type' => 'url',
    ));
    
    // Footer Section
    $wp_customize->add_section('footer_settings', array(
        'title' => 'Footer Settings',
        'priority' => 50,
    ));
    
    $wp_customize->add_setting('footer_text', array(
        'default' => '© Cube Network – All rights reserved.',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    $wp_customize->add_control('footer_text', array(
        'label' => 'Footer Text',
        'section' => 'footer_settings',
        'type' => 'text',
    ));
}
add_action('customize_register', 'cube_network_customize_register');

/**
 * Custom walker for navigation menus
 */
class Cube_Network_Nav_Walker extends Walker_Nav_Menu {
    function start_el(&$output, $item, $depth = 0, $args = null, $id = 0) {
        $classes = empty($item->classes) ? array() : (array) $item->classes;
        $classes[] = 'nav-link';
        
        $class_names = join(' ', apply_filters('nav_menu_css_class', array_filter($classes), $item, $args));
        $class_names = $class_names ? ' class="' . esc_attr($class_names) . '"' : '';
        
        $output .= '<a href="' . esc_attr($item->url) . '"' . $class_names . '>';
        $output .= apply_filters('the_title', $item->title, $item->ID);
        $output .= '</a>';
    }
}

/**
 * Security enhancements
 */
function cube_network_security() {
    // Remove WordPress version from head
    remove_action('wp_head', 'wp_generator');
    
    // Remove WLW manifest link
    remove_action('wp_head', 'wlwmanifest_link');
    
    // Remove RSD link
    remove_action('wp_head', 'rsd_link');
    
    // Remove shortlink
    remove_action('wp_head', 'wp_shortlink_wp_head');
    
    // Disable XML-RPC
    add_filter('xmlrpc_enabled', '__return_false');
}
add_action('init', 'cube_network_security');

/**
 * SEO optimizations
 */
function cube_network_seo() {
    // Add canonical URLs
    if (!is_admin()) {
        add_action('wp_head', 'cube_network_canonical_url');
    }
}
add_action('init', 'cube_network_seo');

function cube_network_canonical_url() {
    if (is_home() || is_front_page()) {
        echo '<link rel="canonical" href="' . home_url() . '">' . "\n";
    } elseif (is_single() || is_page()) {
        echo '<link rel="canonical" href="' . get_permalink() . '">' . "\n";
    }
}

/**
 * Performance optimizations
 */
function cube_network_performance() {
    // Remove query strings from static resources
    add_filter('script_loader_src', 'cube_network_remove_query_strings', 15, 1);
    add_filter('style_loader_src', 'cube_network_remove_query_strings', 15, 1);
    
    // Defer JavaScript loading
    add_filter('script_loader_tag', 'cube_network_defer_scripts', 10, 3);
}
add_action('init', 'cube_network_performance');

function cube_network_remove_query_strings($src) {
    if (strpos($src, 'ver=')) {
        $src = remove_query_arg('ver', $src);
    }
    return $src;
}

function cube_network_defer_scripts($tag, $handle, $src) {
    // Defer non-critical scripts
    $defer_scripts = array('cube-network-script');
    
    if (in_array($handle, $defer_scripts)) {
        return str_replace('<script ', '<script defer ', $tag);
    }
    
    return $tag;
}

/**
 * Admin customizations
 */
function cube_network_admin_init() {
    // Add theme support for editor styles
    add_theme_support('editor-styles');
    add_editor_style('assets/css/editor-style.css');
}
add_action('admin_init', 'cube_network_admin_init');

/**
 * Custom post types (if needed for future features)
 */
function cube_network_custom_post_types() {
    // Server Events
    register_post_type('server_events', array(
        'labels' => array(
            'name' => 'Server Events',
            'singular_name' => 'Server Event',
        ),
        'public' => true,
        'has_archive' => true,
        'supports' => array('title', 'editor', 'thumbnail', 'excerpt'),
        'menu_icon' => 'dashicons-calendar-alt',
    ));
    
    // Server Rules
    register_post_type('server_rules', array(
        'labels' => array(
            'name' => 'Server Rules',
            'singular_name' => 'Server Rule',
        ),
        'public' => true,
        'has_archive' => false,
        'supports' => array('title', 'editor', 'page-attributes'),
        'menu_icon' => 'dashicons-shield',
    ));
}
add_action('init', 'cube_network_custom_post_types');

/**
 * Widget areas
 */
function cube_network_widgets_init() {
    register_sidebar(array(
        'name' => 'Sidebar',
        'id' => 'sidebar-1',
        'description' => 'Add widgets here to appear in your sidebar.',
        'before_widget' => '<section id="%1$s" class="widget %2$s">',
        'after_widget' => '</section>',
        'before_title' => '<h3 class="widget-title">',
        'after_title' => '</h3>',
    ));
    
    register_sidebar(array(
        'name' => 'Footer Widget Area',
        'id' => 'footer-1',
        'description' => 'Add widgets here to appear in your footer.',
        'before_widget' => '<div id="%1$s" class="footer-widget %2$s">',
        'after_widget' => '</div>',
        'before_title' => '<h4 class="footer-widget-title">',
        'after_title' => '</h4>',
    ));
}
add_action('widgets_init', 'cube_network_widgets_init');

/**
 * Theme activation hook
 */
function cube_network_activation() {
    // Set default theme options
    set_theme_mod('hero_title', 'CUBE NETWORK');
    set_theme_mod('hero_subtitle', 'The Ultimate Minecraft Experience');
    set_theme_mod('server_ip', 'play.cubenetwork.fun');
    set_theme_mod('discord_link', 'https://discord.gg/cubenetwork');
    
    // Flush rewrite rules
    flush_rewrite_rules();
}
add_action('after_switch_theme', 'cube_network_activation');