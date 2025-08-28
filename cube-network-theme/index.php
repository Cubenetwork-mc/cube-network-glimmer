<?php
/**
 * The main template file
 *
 * @package Cube_Network
 */

get_header(); ?>

<main>
    <!-- Hero Section -->
    <section id="home" class="hero-section">
        <div class="particles-container" id="particlesContainer"></div>
        
        <div class="hero-content">
            <!-- 3D Holographic Cube Logo -->
            <div class="logo-container">
                <div class="perspective-1000">
                    <div class="cube-logo">
                        <!-- Outer holographic cube -->
                        <div class="cube-outer">
                            <div class="cube-face-outer front-outer">C</div>
                            <div class="cube-face-outer back-outer">U</div>
                            <div class="cube-face-outer right-outer">B</div>
                            <div class="cube-face-outer left-outer">E</div>
                            <div class="cube-face-outer top-outer">⚡</div>
                            <div class="cube-face-outer bottom-outer">💎</div>
                        </div>
                        
                        <!-- Inner solid cube -->
                        <div class="cube-inner">
                            <div class="cube-face-inner front-inner">⚔️</div>
                            <div class="cube-face-inner back-inner">🏆</div>
                            <div class="cube-face-inner right-inner">🔥</div>
                            <div class="cube-face-inner left-inner">⭐</div>
                            <div class="cube-face-inner top-inner">👑</div>
                            <div class="cube-face-inner bottom-inner">💫</div>
                        </div>
                    </div>
                </div>
            </div>

            <h1 class="hero-title"><?php echo get_theme_mod('hero_title', 'CUBE NETWORK'); ?></h1>
            <p class="hero-subtitle"><?php echo get_theme_mod('hero_subtitle', 'The Ultimate Minecraft Experience'); ?></p>
            
            <div class="hero-buttons">
                <button class="btn-neon" id="copyServerIP">
                    <?php echo get_theme_mod('copy_button_text', 'Copy Server IP'); ?>
                </button>
                <button class="btn-neon-green" onclick="window.open('<?php echo get_theme_mod('discord_link', 'https://discord.gg/cubenetwork'); ?>', '_blank')">
                    <?php echo get_theme_mod('discord_button_text', 'Join Discord'); ?>
                </button>
            </div>
            
            <div class="server-info">
                <div class="server-ip">
                    <span class="server-label"><?php echo get_theme_mod('server_label', 'Server IP:'); ?></span>
                    <span class="server-address"><?php echo get_theme_mod('server_ip', 'play.cubenetwork.fun'); ?></span>
                </div>
            </div>
        </div>
        
        <div class="scroll-indicator">
            <div class="scroll-arrow"></div>
        </div>
    </section>

    <!-- About Section -->
    <section id="about" class="section section-bg">
        <div class="container-custom section-padding">
            <h2 class="section-title"><?php echo get_theme_mod('about_title', 'About Cube Network'); ?></h2>
            <div class="about-content">
                <p class="about-description">
                    <?php echo get_theme_mod('about_description', 'Welcome to Cube Network, where adventure meets innovation in the world of Minecraft. Our server offers a unique blend of survival gameplay, custom features, and an incredible community that makes every moment unforgettable.'); ?>
                </p>
                
                <div class="features-grid">
                    <div class="feature-card">
                        <h3><?php echo get_theme_mod('feature_1_title', 'Custom Gameplay'); ?></h3>
                        <p><?php echo get_theme_mod('feature_1_desc', 'Experience unique game modes and custom features designed to enhance your Minecraft journey.'); ?></p>
                    </div>
                    <div class="feature-card">
                        <h3><?php echo get_theme_mod('feature_2_title', 'Active Community'); ?></h3>
                        <p><?php echo get_theme_mod('feature_2_desc', 'Join thousands of players in our vibrant community with regular events and competitions.'); ?></p>
                    </div>
                    <div class="feature-card">
                        <h3><?php echo get_theme_mod('feature_3_title', '24/7 Support'); ?></h3>
                        <p><?php echo get_theme_mod('feature_3_desc', 'Our dedicated staff team ensures the server runs smoothly and provides help when needed.'); ?></p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Vote Section -->
    <section id="vote" class="section section-bg">
        <div class="container-custom section-padding">
            <h2 class="section-title"><?php echo get_theme_mod('vote_title', 'Vote for Cube Network'); ?></h2>
            <p class="section-subtitle"><?php echo get_theme_mod('vote_subtitle', 'Support our server by voting on these platforms and earn amazing rewards!'); ?></p>
            
            <div class="vote-grid">
                <div class="vote-card">
                    <div class="vote-icon">⭐</div>
                    <h3><?php echo get_theme_mod('vote_1_name', 'MinecraftServers.org'); ?></h3>
                    <button class="vote-btn" onclick="window.open('<?php echo get_theme_mod('vote_1_link', 'https://minecraftservers.org/vote/123456'); ?>', '_blank')">
                        Vote Now
                    </button>
                </div>
                <div class="vote-card">
                    <div class="vote-icon">⭐</div>
                    <h3><?php echo get_theme_mod('vote_2_name', 'TopG.org'); ?></h3>
                    <button class="vote-btn" onclick="window.open('<?php echo get_theme_mod('vote_2_link', 'https://topg.org/minecraft-servers/vote/123456'); ?>', '_blank')">
                        Vote Now
                    </button>
                </div>
                <div class="vote-card">
                    <div class="vote-icon">⭐</div>
                    <h3><?php echo get_theme_mod('vote_3_name', 'Minecraft-Server-List'); ?></h3>
                    <button class="vote-btn" onclick="window.open('<?php echo get_theme_mod('vote_3_link', 'https://minecraft-server-list.com/vote/123456'); ?>', '_blank')">
                        Vote Now
                    </button>
                </div>
            </div>
            
            <p class="vote-thanks">
                <?php echo get_theme_mod('vote_thanks', 'Thank you for supporting Cube Network! Your votes help us grow and improve.'); ?>
            </p>
        </div>
    </section>

    <!-- Rules Section -->
    <section id="rules" class="section section-bg">
        <div class="container-custom section-padding">
            <h2 class="section-title"><?php echo get_theme_mod('rules_title', 'Server Rules'); ?></h2>
            <p class="section-subtitle"><?php echo get_theme_mod('rules_subtitle', 'Please read and follow these rules to ensure a positive experience for everyone.'); ?></p>
            
            <div class="rules-grid">
                <div class="rules-category">
                    <div class="rules-header">
                        <span class="rules-icon">⚖️</span>
                        <h3>General Rules</h3>
                    </div>
                    <div class="rules-list">
                        <div class="rule-item">• Be respectful to all players and staff</div>
                        <div class="rule-item">• No griefing or destroying other players' builds</div>
                        <div class="rule-item">• Keep chat family-friendly and appropriate</div>
                        <div class="rule-item">• No advertising other servers</div>
                    </div>
                </div>
                
                <div class="rules-category">
                    <div class="rules-header">
                        <span class="rules-icon">🎮</span>
                        <h3>Gameplay Rules</h3>
                    </div>
                    <div class="rules-list">
                        <div class="rule-item">• No cheating, hacking, or exploiting</div>
                        <div class="rule-item">• No duplication of items or resources</div>
                        <div class="rule-item">• Play fair and don't abuse game mechanics</div>
                        <div class="rule-item">• Report bugs instead of exploiting them</div>
                    </div>
                </div>
                
                <div class="rules-category">
                    <div class="rules-header">
                        <span class="rules-icon">👥</span>
                        <h3>Community Guidelines</h3>
                    </div>
                    <div class="rules-list">
                        <div class="rule-item">• Help new players learn the server</div>
                        <div class="rule-item">• Participate in community events</div>
                        <div class="rule-item">• Use common areas responsibly</div>
                        <div class="rule-item">• Follow staff instructions at all times</div>
                    </div>
                </div>
            </div>
            
            <div class="rules-notice">
                <h4>Important Notice</h4>
                <p>Violations of these rules may result in warnings, temporary bans, or permanent removal from the server depending on the severity of the offense.</p>
            </div>
        </div>
    </section>

    <!-- Store Section -->
    <section id="store" class="section section-bg">
        <div class="container-custom section-padding">
            <h2 class="section-title"><?php echo get_theme_mod('store_title', 'Ranks & Perks'); ?></h2>
            <p class="section-subtitle"><?php echo get_theme_mod('store_subtitle', 'Unlock exclusive features and support the server with our premium ranks!'); ?></p>
            
            <div class="store-grid">
                <div class="rank-card">
                    <div class="rank-header">
                        <span class="rank-icon">⭐</span>
                        <h3 class="rank-name">VIP</h3>
                        <div class="rank-price">$4.99</div>
                    </div>
                    <div class="rank-features">
                        <div class="feature">• VIP Chat Tag</div>
                        <div class="feature">• Access to VIP Areas</div>
                        <div class="feature">• 2x Vote Rewards</div>
                        <div class="feature">• Priority Support</div>
                    </div>
                </div>
                
                <div class="rank-card popular">
                    <div class="popular-badge">Most Popular</div>
                    <div class="rank-header">
                        <span class="rank-icon">💎</span>
                        <h3 class="rank-name">VIP+</h3>
                        <div class="rank-price">$9.99</div>
                    </div>
                    <div class="rank-features">
                        <div class="feature">• All VIP Features</div>
                        <div class="feature">• Colored Chat</div>
                        <div class="feature">• /fly Command</div>
                        <div class="feature">• 3x Vote Rewards</div>
                        <div class="feature">• Exclusive Kits</div>
                    </div>
                </div>
                
                <div class="rank-card">
                    <div class="rank-header">
                        <span class="rank-icon">👑</span>
                        <h3 class="rank-name">Custom Rank</h3>
                        <div class="rank-price">$19.99</div>
                    </div>
                    <div class="rank-features">
                        <div class="feature">• Choose Your Rank Name</div>
                        <div class="feature">• Custom Chat Color</div>
                        <div class="feature">• All VIP+ Features</div>
                        <div class="feature">• Special Permissions</div>
                    </div>
                </div>
                
                <div class="rank-card">
                    <div class="rank-header">
                        <span class="rank-icon">✨</span>
                        <h3 class="rank-name">Custom Suffix</h3>
                        <div class="rank-price">$4.99</div>
                        <div class="rank-duration">30 Days</div>
                    </div>
                    <div class="rank-features">
                        <div class="feature">• Custom Chat Suffix</div>
                        <div class="feature">• Stand Out in Chat</div>
                        <div class="feature">• Renewable Monthly</div>
                    </div>
                </div>
            </div>
            
            <div class="store-actions">
                <button class="btn-neon" onclick="window.open('<?php echo get_theme_mod('store_link', 'https://store.cubenetwork.fun'); ?>', '_blank')">
                    Visit Store
                </button>
                <button class="btn-neon-green" onclick="window.open('<?php echo get_theme_mod('discord_link', 'https://discord.gg/cubenetwork'); ?>', '_blank')">
                    Open Discord Ticket
                </button>
            </div>
            
            <p class="store-note">
                All payments are processed securely. For support or questions, please contact us on Discord.
            </p>
        </div>
    </section>

    <!-- Discord Section -->
    <section id="discord" class="section section-bg">
        <div class="container-custom section-padding">
            <h2 class="section-title"><?php echo get_theme_mod('discord_title', 'Join Our Community'); ?></h2>
            <p class="section-subtitle"><?php echo get_theme_mod('discord_subtitle', 'Connect with thousands of players, get support, and stay updated!'); ?></p>
            
            <div class="discord-features">
                <div class="discord-card">
                    <div class="discord-icon">💬</div>
                    <h3>Active Community</h3>
                    <p>Chat with players, share builds, and make new friends in our active Discord server.</p>
                </div>
                <div class="discord-card">
                    <div class="discord-icon">📢</div>
                    <h3>Server Updates</h3>
                    <p>Stay informed about server updates, events, and important announcements.</p>
                </div>
                <div class="discord-card">
                    <div class="discord-icon">🎉</div>
                    <h3>Events & Giveaways</h3>
                    <p>Participate in exclusive events, competitions, and win amazing prizes.</p>
                </div>
                <div class="discord-card">
                    <div class="discord-icon">🛠️</div>
                    <h3>24/7 Support</h3>
                    <p>Get help from our friendly staff team anytime you need assistance.</p>
                </div>
            </div>
            
            <div class="discord-action">
                <button class="btn-neon discord-btn" onclick="window.open('<?php echo get_theme_mod('discord_link', 'https://discord.gg/cubenetwork'); ?>', '_blank')">
                    Join Discord Server
                </button>
            </div>
            
            <div class="discord-stats">
                <div class="stat">
                    <div class="stat-number"><?php echo get_theme_mod('discord_members', '5,000+'); ?></div>
                    <div class="stat-label">Members</div>
                </div>
                <div class="stat">
                    <div class="stat-number">24/7</div>
                    <div class="stat-label">Online</div>
                </div>
                <div class="stat">
                    <div class="stat-number"><?php echo get_theme_mod('discord_staff', '50+'); ?></div>
                    <div class="stat-label">Staff</div>
                </div>
            </div>
            
            <div class="discord-channels">
                <h4>Quick Access</h4>
                <div class="channel-links">
                    <span class="channel">#general</span>
                    <span class="channel">#support</span>
                    <span class="channel">#events</span>
                    <span class="channel">#builds</span>
                </div>
            </div>
        </div>
    </section>
</main>

<!-- Toast notification -->
<div id="toast" class="toast">
    <div class="toast-content">
        <span class="toast-icon">✓</span>
        <span class="toast-message">Server IP copied to clipboard!</span>
    </div>
</div>

<?php get_footer(); ?>