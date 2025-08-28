// Cube Network - WordPress Theme JavaScript functionality

(function($) {
    'use strict';

    // Check if we're in WordPress environment
    const isWordPress = typeof cubeNetwork !== 'undefined';
    
    // Get server IP from WordPress or fallback
    const serverIP = isWordPress ? cubeNetwork.serverIP : 'play.cubenetwork.fun';
    
    // Navigation scroll effect
    $(window).on('scroll', function() {
        const navbar = $('#navbar');
        if ($(window).scrollTop() > 50) {
            navbar.addClass('scrolled');
        } else {
            navbar.removeClass('scrolled');
        }
    });

    // Mobile menu toggle
    $('#mobileMenuBtn').on('click', function() {
        $('#mobileMenu').toggleClass('open');
        $(this).toggleClass('active');
    });

    // Smooth scrolling for navigation links
    function smoothScroll(targetId) {
        const target = $(targetId);
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top - 80
            }, 800, 'easeInOutQuad');
            // Close mobile menu after clicking
            $('#mobileMenu').removeClass('open');
            $('#mobileMenuBtn').removeClass('active');
        }
    }

    // Add click listeners to all navigation links
    $(document).on('click', '.nav-link, .mobile-nav-link', function(e) {
        const href = $(this).attr('href');
        if (href && href.startsWith('#')) {
            e.preventDefault();
            smoothScroll(href);
        }
    });

    // Copy server IP functionality
    $('#copyServerIP').on('click', async function() {
        try {
            if (navigator.clipboard && window.isSecureContext) {
                // Use modern clipboard API
                await navigator.clipboard.writeText(serverIP);
            } else {
                // Fallback for older browsers
                const textArea = $('<textarea>')
                    .val(serverIP)
                    .css({
                        position: 'fixed',
                        left: '-999999px',
                        top: '-999999px'
                    })
                    .appendTo('body');
                
                textArea[0].focus();
                textArea[0].select();
                document.execCommand('copy');
                textArea.remove();
            }
            
            // Show toast notification
            showToast(isWordPress ? cubeNetwork.copySuccessMessage : 'Server IP copied to clipboard!');
        } catch (err) {
            console.error('Failed to copy: ', err);
            // Fallback: show an alert
            const errorMsg = isWordPress ? cubeNetwork.copyErrorMessage : 'Failed to copy. Please copy manually: ';
            alert(errorMsg + serverIP);
        }
    });

    // Show toast notification
    function showToast(message) {
        const toast = $('#toast');
        const toastMessage = toast.find('.toast-message');
        
        if (message && toastMessage.length) {
            toastMessage.text(message);
        }
        
        toast.addClass('show');
        setTimeout(function() {
            toast.removeClass('show');
        }, 3000);
    }

    // Floating particles animation
    function createParticle() {
        const particlesContainer = $('#particlesContainer');
        if (!particlesContainer.length) return;
        
        const particle = $('<div class="particle"></div>');
        
        // Random Minecraft-themed characters
        const chars = ['⚡', '💎', '⚔️', '🏆', '🔥', '⭐', '👑', '💫', '🌟', '✨'];
        particle.text(chars[Math.floor(Math.random() * chars.length)]);
        
        // Random starting position
        particle.css({
            left: Math.random() * 100 + '%',
            top: Math.random() * 100 + '%',
            animationDuration: (Math.random() * 4 + 4) + 's',
            animationDelay: Math.random() * 2 + 's',
            fontSize: (Math.random() * 0.5 + 0.8) + 'rem'
        });
        
        // Random color from neon palette
        const colors = ['var(--neon-blue)', 'var(--neon-green)', 'var(--neon-purple)', 'var(--neon-gold)'];
        particle.css('color', colors[Math.floor(Math.random() * colors.length)]);
        
        particlesContainer.append(particle);
        
        // Remove particle after animation
        setTimeout(function() {
            particle.remove();
        }, 8000);
    }

    // Create particles at intervals
    let particleInterval;

    function startParticles() {
        // Only create particles if container exists and is visible
        const particlesContainer = $('#particlesContainer');
        if (particlesContainer.length && particlesContainer.is(':visible')) {
            particleInterval = setInterval(createParticle, 800);
        }
    }

    function stopParticles() {
        if (particleInterval) {
            clearInterval(particleInterval);
        }
    }

    // Intersection Observer for scroll animations
    if ('IntersectionObserver' in window) {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    $(entry.target).css({
                        opacity: '1',
                        transform: 'translateY(0)'
                    });
                }
            });
        }, observerOptions);

        // Observe all sections for scroll animations
        $('.section').each(function() {
            $(this).css({
                opacity: '0',
                transform: 'translateY(30px)',
                transition: 'opacity 0.6s ease, transform 0.6s ease'
            });
            observer.observe(this);
        });
    }

    // Add subtle hover effects to cards
    $('.feature-card, .vote-card, .rules-category, .rank-card, .discord-card').hover(
        function() {
            $(this).css('transform', 'scale(1.05) translateY(-5px)');
        },
        function() {
            $(this).css('transform', 'scale(1) translateY(0)');
        }
    );

    // Enhanced cube logo interaction
    $('.logo-container').hover(
        function() {
            $('.cube-outer').css('animation-duration', '8s');
            $('.cube-inner').css('animation-duration', '4s');
        },
        function() {
            $('.cube-outer').css('animation-duration', '15s');
            $('.cube-inner').css('animation-duration', '8s');
        }
    );

    // Performance optimization: Reduce particles on smaller screens
    function checkScreenSize() {
        const isMobile = $(window).width() <= 768;
        if (isMobile) {
            // Reduce particle frequency on mobile
            stopParticles();
            particleInterval = setInterval(createParticle, 1600);
        } else {
            stopParticles();
            startParticles();
        }
    }

    // Keyboard navigation support
    $(document).on('keydown', function(e) {
        if (e.key === 'Escape' && $('#mobileMenu').hasClass('open')) {
            $('#mobileMenu').removeClass('open');
            $('#mobileMenuBtn').removeClass('active');
        }
    });

    // Add focus management for accessibility
    $('button, a, input, textarea, select, [tabindex]:not([tabindex="-1"])').on('focus', function() {
        $(this).css({
            outline: '2px solid var(--primary)',
            outlineOffset: '2px'
        });
    }).on('blur', function() {
        $(this).css('outline', 'none');
    });

    // Initialize everything when document is ready
    $(document).ready(function() {
        // Add loading animation
        $('body').css({
            opacity: '0',
            transition: 'opacity 0.5s ease'
        });
        
        setTimeout(function() {
            $('body').css('opacity', '1');
        }, 100);
        
        // Start particles
        startParticles();
        
        // Check screen size
        checkScreenSize();
        
        console.log('🎮 Cube Network WordPress Theme - Welcome to the ultimate Minecraft experience!');
        console.log('🚀 Theme loaded successfully with world\'s best 3D cube logo!');
    });

    // Handle window events
    $(window).on('resize', checkScreenSize);
    
    // Pause particles when page is not visible (performance optimization)
    $(document).on('visibilitychange', function() {
        if (document.hidden) {
            stopParticles();
        } else {
            startParticles();
        }
    });

    // Custom easing function for smooth scrolling
    $.easing.easeInOutQuad = function(x, t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t + b;
        return -c / 2 * ((--t) * (t - 2) - 1) + b;
    };

    // WordPress specific functionality
    if (isWordPress) {
        // Handle WordPress menu items
        $('.menu-item a').addClass('nav-link');
        
        // AJAX functionality for WordPress (if needed)
        function wpAjaxRequest(action, data, callback) {
            $.ajax({
                url: cubeNetwork.ajaxurl,
                type: 'POST',
                data: {
                    action: action,
                    nonce: cubeNetwork.nonce,
                    ...data
                },
                success: callback,
                error: function(xhr, status, error) {
                    console.error('AJAX Error:', error);
                }
            });
        }
        
        // Expose WordPress AJAX function globally if needed
        window.cubeNetworkAjax = wpAjaxRequest;
    }

})(jQuery);