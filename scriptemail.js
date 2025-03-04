// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Initialize
  initNavigation();
  initProductCarousel();
  initTestimonials();
  initFeatures();
  initContactForm();
  initBackToTop();
  initLazyLoading();
  initAnimationOnScroll();
  initLucideIcons();
  initRippleEffect();
  setCurrentYear();

  // Navigation functionality
  function initNavigation() {
    const header = document.querySelector('.header');
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.querySelector('.icon-menu');
    const closeIcon = document.querySelector('.icon-close');
    
    // Handle scroll for fixed header
    window.addEventListener('scroll', function() {
      if (window.scrollY > 10) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
    
    // Mobile menu toggle
    menuToggle.addEventListener('click', function() {
      mobileMenu.classList.toggle('hidden');
      menuIcon.classList.toggle('hidden');
      closeIcon.classList.toggle('hidden');
    });

    // Close mobile menu when clicking a link
    const mobileLinks = document.querySelectorAll('.mobile-link');
    mobileLinks.forEach(link => {
      link.addEventListener('click', function() {
        mobileMenu.classList.add('hidden');
        menuIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
      });
    });
  }

  // Products section
  function initProductCarousel() {
    const products = [
      {
        id: 1,
        name: "Essential Pure",
        volume: "300ml",
        price: 24.99,
        description: "Perfect for everyday hydration. Our signature water in a portable size.",
        image: "download (1).jpeg",
        badge: "Bestseller"
      },
      {
        id: 2,
        name: "Pure Flow Plus",
        volume: "500ml",
        price: 34.99,
        description: "Enhanced with essential minerals for optimal hydration and wellness.",
        image: "download (3).jpeg",
        badge: "New"
      },
      {
        id: 3,
        name: "Crystal Clear",
        volume: "1L",
        price: 29.99,
        description: "Ultra-filtered water with a smooth, refreshing taste and perfect pH balance.",
        image: "2l.jpeg",
        badge: ""
      },
      {
        id: 4,
        name: "Mountain Spring",
        volume: "2L",
        price: 39.99,
        description: "Sourced from pristine mountain springs for an extraordinary taste experience.",
        image: "https://images.unsplash.com/photo-1626379953822-baec19c3accd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        badge: "Premium"
      }
    ];
    
    const carousel = document.getElementById('product-carousel');
    const prevButton = document.getElementById('prev-button');
    const nextButton = document.getElementById('next-button');
    const modal = document.getElementById('product-modal');
    
    // Render products
    products.forEach(product => {
      const productCard = document.createElement('div');
      productCard.className = 'product-card animate-on-scroll';
      
      const badge = product.badge 
        ? `<span class="product-badge">${product.badge}</span>` 
        : '';
      
      productCard.innerHTML = `
        <div class="product-image-container">
          ${badge}
          <img 
            src="${product.image}" 
            alt="${product.name}" 
            class="product-image"
          />
        </div>
        <div class="product-header">
          <h3>${product.name}</h3>
          <span class="product-price">$${product.price}</span>
        </div>
        <p class="product-volume">${product.volume}</p>
        <p class="product-description">${product.description}</p>
        <div class="product-actions">
          <button class="view-button" data-id="${product.id}">View Details</button>
          <button class="cart-button">
            <i data-lucide="shopping-cart"></i>
          </button>
        </div>
      `;
      
      carousel.appendChild(productCard);
    });
    
    // Carousel navigation
    prevButton.addEventListener('click', function() {
      carousel.scrollBy({ left: -carousel.offsetWidth / 2, behavior: 'smooth' });
    });
    
    nextButton.addEventListener('click', function() {
      carousel.scrollBy({ left: carousel.offsetWidth / 2, behavior: 'smooth' });
    });
    
    // View details modal
    document.addEventListener('click', function(e) {
      if (e.target.classList.contains('view-button') || e.target.closest('.view-button')) {
        const button = e.target.classList.contains('view-button') ? e.target : e.target.closest('.view-button');
        const productId = parseInt(button.dataset.id);
        const product = products.find(p => p.id === productId);
        
        if (product) {
          const badge = product.badge 
            ? `<span class="product-badge">${product.badge}</span>` 
            : '';
          
          modal.innerHTML = `
            <div class="modal-content">
              <div class="modal-image-container">
                ${badge}
                <img src="${product.image}" alt="${product.name}" class="modal-image">
              </div>
              <div class="modal-details">
                <div class="modal-header">
                  <div>
                    <h3>${product.name}</h3>
                    <p class="product-volume">${product.volume}</p>
                  </div>
                  <span class="modal-price">$${product.price}</span>
                </div>
                <p class="modal-description">${product.description}</p>
                <div class="modal-actions">
                  <button class="button-water primary-button">
                    <i data-lucide="shopping-cart"></i>
                    Add to Cart
                  </button>
                  <button class="close-button">Close</button>
                </div>
              </div>
            </div>
          `;
          
          modal.classList.remove('hidden');
          initLucideIcons(); // Reinitialize icons for the modal
          
          // Close modal functionality
          const closeBtn = modal.querySelector('.close-button');
          closeBtn.addEventListener('click', function() {
            modal.classList.add('hidden');
          });

          // Close when clicking outside the modal content
          modal.addEventListener('click', function(e) {
            if (e.target === modal) {
              modal.classList.add('hidden');
            }
          });
        }
      }
    });
  }

  // Testimonials section
  function initTestimonials() {
    const testimonials = [
      {
        id: 1,
        name: "Jeeva",
        role: "Fitness Instructor",
        testimonial: "The quality of JAGATH aQua water is exceptional. As a fitness instructor, I recommend it to all my clients for optimal hydration. The subscription service is incredibly convenient!",
        rating: 5,
       image: "20210501_165017_Original.jpeg"
      },
      {
        id: 2,
        name: "Thirumurugan",
        role: "Office Manager",
        testimonial: "We switched to JAGATH aQua for our collage office  water needs and the difference is remarkable. Delivery is always on time, and the staff ans students loves the taste. Their customer service is top-notch!",
        rating: 5,
        image: "1699948294.jpeg"
      },
      {
        id: 3,
        name: "Divya",
        role: "Busy Parent",
        testimonial: "As a parent of three, I don't have time to worry about our water supply. JAGATH aQua's subscription has been a lifesaver - reliable delivery and excellent quality water my kids love.",
        rating: 5,
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
      },
      {
        id: 4,
        name: "Wilson",
        role: "Restaurant Owner",
        testimonial: "The consistency and purity of JAGATH aQua water has made it our exclusive choice for our restaurant. Our customers notice the difference, and it enhances our dining experience.",
        rating: 4,
        image: "AMP03079.JPG"
      }
    ];
    
    const testimonialGrid = document.getElementById('testimonial-grid');
    
    // Render testimonials
    testimonials.forEach(testimonial => {
      const testimonialCard = document.createElement('div');
      testimonialCard.className = 'testimonial-card animate-on-scroll';
      
      // Generate rating stars
      let starsHTML = '';
      for (let i = 1; i <= 5; i++) {
        if (i <= testimonial.rating) {
          starsHTML += '<i data-lucide="star" class="star-filled"></i>';
        } else {
          starsHTML += '<i data-lucide="star"></i>';
        }
      }
      
      testimonialCard.innerHTML = `
        <div class="testimonial-header">
          <img 
            src="${testimonial.image}" 
            alt="${testimonial.name}" 
            class="testimonial-image"
          />
          <div class="testimonial-author">
            <h3>${testimonial.name}</h3>
            <p>${testimonial.role}</p>
          </div>
        </div>
        <div class="rating">
          ${starsHTML}
        </div>
        <p class="testimonial-text">"${testimonial.testimonial}"</p>
      `;
      
      testimonialGrid.appendChild(testimonialCard);
    });
    
    // Rating scroller
    const ratingsContent = document.getElementById('ratings-scroll-content');
    
    // Generate rating items
    for (let i = 0; i < 20; i++) {
      const rating = 4 + (i % 2) * 0.5;
      const ratingItem = document.createElement('div');
      ratingItem.className = 'rating-item';
      ratingItem.innerHTML = `<span class="rating-value">★ ${rating} / 5</span>`;
      ratingsContent.appendChild(ratingItem);
    }
  }

  // Features section
  function initFeatures() {
    const features = [
      {
        icon: "droplet",
        title: "Pure & Fresh",
        description: "Our water is sourced from pristine natural springs and undergoes rigorous filtration to ensure exceptional purity and taste."
      },
      {
        icon: "package",
        title: "Eco-Friendly Packaging",
        description: "We use sustainable materials for all our bottles and packaging, minimizing environmental impact while maximizing quality."
      },
      {
        icon: "clock",
        title: "Convenient Delivery",
        description: "Enjoy hassle-free scheduled deliveries straight to your doorstep, ensuring you never run out of refreshing water."
      },
      {
        icon: "shield",
        title: "Quality Guaranteed",
        description: "Every bottle undergoes strict quality control measures to guarantee perfect taste, purity, and freshness with every sip."
      }
    ];
    
    const featuresGrid = document.querySelector('.features-grid');
    
    // Render features
    features.forEach(feature => {
      const featureCard = document.createElement('div');
      featureCard.className = 'feature-card animate-on-scroll';
      
      featureCard.innerHTML = `
        <div class="feature-icon">
          <i data-lucide="${feature.icon}"></i>
        </div>
        <h3>${feature.title}</h3>
        <p>${feature.description}</p>
      `;
      
      featuresGrid.appendChild(featureCard);
    });
  }

//Direction 
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('direction-button').addEventListener('click', function() {
    const destination = encodeURIComponent('1600 Amphitheatre Parkway, Mountain View, CA');
    window.open(`https://g.co/kgs/Sw7xqHR`, '_blank');
  });
});

  // Contact form
  function initContactForm() {
    const form = document.getElementById('contact-form');
    const formSuccess = document.getElementById('form-success');
    const formError = document.getElementById('form-error');
    const resetFormBtn = document.getElementById('reset-form');
    
    if (form) {
      form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        if (name && email && message) {
          // Simulate form submission
          console.log('Form submitted:', { name, email, message });
          
          // Show toast notification
          showToast({
            title: 'Message Sent!',
            description: 'Thanks for contacting PureFlow. We\'ll get back to you soon.',
            type: 'success'
          });
          
          // Simulate sending notification email to owner
          console.log('Sending notification email to owner with form data:', {
            customerName: name,
            customerEmail: email,
            customerMessage: message,
            timestamp: new Date().toISOString()
          });
          
          // Show success message
          form.classList.add('hidden');
          formSuccess.classList.remove('hidden');
          
          // Reset form
          form.reset();
        } else {
          formError.classList.remove('hidden');
          
          setTimeout(() => {
            formError.classList.add('hidden');
          }, 3000);
        }
      });
      
      // Reset form button
      if (resetFormBtn) {
        resetFormBtn.addEventListener('click', function() {
          formSuccess.classList.add('hidden');
          form.classList.remove('hidden');
        });
      }
    }
  }

  // Back to top button
  function initBackToTop() {
    const backToTopBtn = document.getElementById('back-to-top');
    
    window.addEventListener('scroll', function() {
      if (window.scrollY > 500) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    });
    
    backToTopBtn.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // Lazy loading
  function initLazyLoading() {
    const lazyImages = document.querySelectorAll('.image-lazy-load');
    
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.classList.add('loaded');
            imageObserver.unobserve(img);
          }
        });
      });
      
      lazyImages.forEach(img => {
        imageObserver.observe(img);
      });
    } else {
      // Fallback for browsers without IntersectionObserver
      lazyImages.forEach(img => {
        img.classList.add('loaded');
      });
    }
  }

  // Animation on scroll
  function initAnimationOnScroll() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      }, { threshold: 0.1 });
      
      elements.forEach(element => {
        observer.observe(element);
      });
    } else {
      // Fallback
      elements.forEach(element => {
        element.classList.add('in-view');
      });
    }
  }

  // Initialize Lucide Icons
  function initLucideIcons() {
    if (typeof lucide !== 'undefined') {
      lucide.createIcons();
    }
  }

  // Ripple effect for buttons
  function initRippleEffect() {
    const buttons = document.querySelectorAll('.button-water');
    
    buttons.forEach(button => {
      button.addEventListener('click', function(e) {
        const x = e.clientX - this.getBoundingClientRect().left;
        const y = e.clientY - this.getBoundingClientRect().top;
        
        const ripple = document.createElement('span');
        ripple.className = 'ripple';
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        
        this.appendChild(ripple);
        
        setTimeout(() => {
          ripple.remove();
        }, 600);
      });
    });
  }

  // Set current year for footer copyright
  function setCurrentYear() {
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
      yearElement.textContent = new Date().getFullYear();
    }
  }

  // Toast notification system
  function showToast(options) {
    const { title, description, type = 'success', duration = 5000 } = options;
    const toastContainer = document.getElementById('toast-container');
    
    // Create toast element
    const toast = document.createElement('div');
    toast.className = 'toast';
    
    // Set icon based on type
    let iconName;
    switch (type) {
      case 'success':
        iconName = 'check';
        break;
      case 'error':
        iconName = 'alert-circle';
        break;
      case 'warning':
        iconName = 'alert-triangle';
        break;
      case 'info':
        iconName = 'info';
        break;
      default:
        iconName = 'check';
    }
    
    toast.innerHTML = `
      <div class="toast-icon">
        <i data-lucide="${iconName}"></i>
      </div>
      <div class="toast-content">
        <div class="toast-title">${title}</div>
        <div class="toast-description">${description}</div>
      </div>
      <button class="toast-close">
        <i data-lucide="x"></i>
      </button>
      <div class="toast-progress"></div>
    `;
    
    // Add to container
    toastContainer.appendChild(toast);
    
    // Initialize icons
    initLucideIcons();
    
    // Close button functionality
    const closeBtn = toast.querySelector('.toast-close');
    closeBtn.addEventListener('click', function() {
      removeToast(toast);
    });
    
    // Auto remove after duration
    setTimeout(() => {
      removeToast(toast);
    }, duration);
    
    function removeToast(toast) {
      toast.style.animation = 'toast-out 0.3s forwards';
      
      toast.addEventListener('animationend', function() {
        toast.remove();
      });
    }
  }
});
