<!-- Footer -->
<footer class="footer">
    <div class="container-custom">
        <div class="footer-content">
            <p class="footer-text">
                <?php echo get_theme_mod('footer_text', '© Cube Network – All rights reserved.'); ?>
            </p>
            
            <?php if (get_theme_mod('footer_links_enabled', true)) : ?>
                <div class="footer-links">
                    <?php
                    wp_nav_menu(array(
                        'theme_location' => 'footer',
                        'menu_class' => 'footer-menu',
                        'container' => false,
                        'fallback_cb' => false,
                        'depth' => 1,
                    ));
                    ?>
                </div>
            <?php endif; ?>
            
            <?php if (get_theme_mod('social_links_enabled', true)) : ?>
                <div class="footer-social">
                    <?php if (get_theme_mod('discord_link')) : ?>
                        <a href="<?php echo esc_url(get_theme_mod('discord_link')); ?>" target="_blank" rel="noopener noreferrer" aria-label="Discord">
                            <span class="social-icon">💬</span>
                        </a>
                    <?php endif; ?>
                    
                    <?php if (get_theme_mod('twitter_link')) : ?>
                        <a href="<?php echo esc_url(get_theme_mod('twitter_link')); ?>" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                            <span class="social-icon">🐦</span>
                        </a>
                    <?php endif; ?>
                    
                    <?php if (get_theme_mod('youtube_link')) : ?>
                        <a href="<?php echo esc_url(get_theme_mod('youtube_link')); ?>" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                            <span class="social-icon">📺</span>
                        </a>
                    <?php endif; ?>
                </div>
            <?php endif; ?>
        </div>
    </div>
</footer>

<?php wp_footer(); ?>
</body>
</html>