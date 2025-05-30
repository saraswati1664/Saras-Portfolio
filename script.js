// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const nav = document.getElementById('nav');

mobileMenuBtn.addEventListener('click', () => {
  nav.classList.toggle('active');
  mobileMenuBtn.innerHTML = nav.classList.contains('active') 
    ? '<i class="fas fa-times"></i>' 
    : '<i class="fas fa-bars"></i>';
});

// Close mobile menu when clicking a link
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('active');
    mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
  });
});

// Header scroll effect
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Back to top button
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTop.classList.add('active');
  } else {
    backToTop.classList.remove('active');
  }
});

// Form submission
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // Create a colorful confetti effect on form submission
  for (let i = 0; i < 100; i++) {
    createConfetti();
  }
  
  setTimeout(() => {
    alert('Thank you for your message! I will get back to you soon.');
    contactForm.reset();
  }, 1000);
});

function createConfetti() {
  const colors = ['#FF4D4D', '#FFAF40', '#6C5CE7', '#00B894', '#F5F6FA'];
  const confetti = document.createElement('div');
  confetti.style.position = 'fixed';
  confetti.style.width = '10px';
  confetti.style.height = '10px';
  confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
  confetti.style.borderRadius = '50%';
  confetti.style.left = Math.random() * window.innerWidth + 'px';
  confetti.style.top = '-10px';
  confetti.style.zIndex = '1000';
  confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
  confetti.style.animation = `fall ${Math.random() * 3 + 2}s linear forwards`;
  
  document.body.appendChild(confetti);
  
  setTimeout(() => {
    confetti.remove();
  }, 3000);
}

// Add animation to skills on scroll
const skills = document.querySelectorAll('.skill');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      entry.target.style.animation = `fadeInUp 0.5s ease ${index * 0.1}s both`;
    }
  });
}, { threshold: 0.1 });

skills.forEach(skill => {
  observer.observe(skill);
});

// Create floating particles
const particlesContainer = document.getElementById('particles');
const particleCount = 30;

for (let i = 0; i < particleCount; i++) {
  const particle = document.createElement('div');
  particle.classList.add('particle');
  particle.style.left = Math.random() * 100 + '%';
  particle.style.top = Math.random() * 100 + '%';
  particle.style.width = Math.random() * 15 + 5 + 'px';
  particle.style.height = particle.style.width;
  particle.style.background = `rgba(255, 255, 255, ${Math.random() * 0.5 + 0.3})`;
  particle.style.position = 'absolute';
  particle.style.borderRadius = '50%';
  particle.style.animation = `float ${Math.random() * 10 + 10}s infinite ease-in-out`;
  particle.style.animationDelay = `${Math.random() * 5}s`;
  particlesContainer.appendChild(particle);
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  });
});

// Add style for confetti and float animation
const style = document.createElement('style');
style.innerHTML = `
  @keyframes fall {
    to {
      transform: translateY(100vh) rotate(360deg);
      opacity: 0;
    }
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes float {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-20px);
    }
    100% {
      transform: translateY(0px);
    }
  }
`;
document.head.appendChild(style);