// Cube Network - JavaScript functionality

// Navigation scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
});

// Smooth scrolling for navigation links
function smoothScroll(targetId) {
    const target = document.querySelector(targetId);
    if (target) {
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
        // Close mobile menu after clicking
        mobileMenu.classList.remove('open');
    }
}

// Add click listeners to all navigation links
document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        smoothScroll(targetId);
    });
});

// Copy server IP functionality
const copyServerIPBtn = document.getElementById('copyServerIP');
const toast = document.getElementById('toast');

copyServerIPBtn.addEventListener('click', async () => {
    const serverIP = 'play.cubenetwork.fun';
    
    try {
        if (navigator.clipboard && window.isSecureContext) {
            // Use modern clipboard API
            await navigator.clipboard.writeText(serverIP);
        } else {
            // Fallback for older browsers
            const textArea = document.createElement('textarea');
            textArea.value = serverIP;
            textArea.style.position = 'fixed';
            textArea.style.left = '-999999px';
            textArea.style.top = '-999999px';
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();
            document.execCommand('copy');
            textArea.remove();
        }
        
        // Show toast notification
        showToast();
    } catch (err) {
        console.error('Failed to copy: ', err);
        // Fallback: show an alert
        alert('Server IP: ' + serverIP);
    }
});

// Show toast notification
function showToast() {
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Floating particles animation
function createParticle() {
    const particlesContainer = document.getElementById('particlesContainer');
    const particle = document.createElement('div');
    
    // Random Minecraft-themed characters
    const chars = ['⚡', '💎', '⚔️', '🏆', '🔥', '⭐', '👑', '💫', '🌟', '✨'];
    particle.textContent = chars[Math.floor(Math.random() * chars.length)];
    particle.className = 'particle';
    
    // Random starting position
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    
    // Random animation duration
    particle.style.animationDuration = (Math.random() * 4 + 4) + 's';
    particle.style.animationDelay = Math.random() * 2 + 's';
    
    // Random size
    const size = Math.random() * 0.5 + 0.8;
    particle.style.fontSize = size + 'rem';
    
    // Random color from neon palette
    const colors = ['var(--neon-blue)', 'var(--neon-green)', 'var(--neon-purple)', 'var(--neon-gold)'];
    particle.style.color = colors[Math.floor(Math.random() * colors.length)];
    
    particlesContainer.appendChild(particle);
    
    // Remove particle after animation
    setTimeout(() => {
        if (particlesContainer.contains(particle)) {
            particlesContainer.removeChild(particle);
        }
    }, 8000);
}

// Create particles at intervals
let particleInterval;

function startParticles() {
    // Only create particles if container exists and is visible
    const particlesContainer = document.getElementById('particlesContainer');
    if (particlesContainer) {
        particleInterval = setInterval(createParticle, 800);
    }
}

function stopParticles() {
    if (particleInterval) {
        clearInterval(particleInterval);
    }
}

// Start particles when page loads
document.addEventListener('DOMContentLoaded', () => {
    startParticles();
});

// Pause particles when page is not visible (performance optimization)
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        stopParticles();
    } else {
        startParticles();
    }
});

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections for scroll animations
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
});

// Add subtle hover effects to cards
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.feature-card, .vote-card, .rules-category, .rank-card, .discord-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'scale(1.05) translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'scale(1) translateY(0)';
        });
    });
});

// Enhanced cube logo interaction
document.addEventListener('DOMContentLoaded', () => {
    const cubeLogoContainer = document.querySelector('.logo-container');
    const cubeOuter = document.querySelector('.cube-outer');
    const cubeInner = document.querySelector('.cube-inner');
    
    if (cubeLogoContainer && cubeOuter && cubeInner) {
        cubeLogoContainer.addEventListener('mouseenter', () => {
            cubeOuter.style.animationDuration = '8s';
            cubeInner.style.animationDuration = '4s';
        });
        
        cubeLogoContainer.addEventListener('mouseleave', () => {
            cubeOuter.style.animationDuration = '15s';
            cubeInner.style.animationDuration = '8s';
        });
    }
});

// Performance optimization: Reduce particles on smaller screens
function checkScreenSize() {
    const isMobile = window.innerWidth <= 768;
    if (isMobile) {
        // Reduce particle frequency on mobile
        stopParticles();
        particleInterval = setInterval(createParticle, 1600);
    } else {
        stopParticles();
        startParticles();
    }
}

window.addEventListener('resize', checkScreenSize);
window.addEventListener('load', checkScreenSize);

// Add loading animation
document.addEventListener('DOMContentLoaded', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileMenu.classList.contains('open')) {
        mobileMenu.classList.remove('open');
    }
});

// Add focus management for accessibility
document.addEventListener('DOMContentLoaded', () => {
    const focusableElements = document.querySelectorAll('button, a, input, textarea, select, [tabindex]:not([tabindex="-1"])');
    
    focusableElements.forEach(element => {
        element.addEventListener('focus', () => {
            element.style.outline = '2px solid var(--primary)';
            element.style.outlineOffset = '2px';
        });
        
        element.addEventListener('blur', () => {
            element.style.outline = 'none';
        });
    });
});

console.log('🎮 Cube Network - Welcome to the ultimate Minecraft experience!');
console.log('🚀 Website loaded successfully with world\'s best 3D cube logo!');