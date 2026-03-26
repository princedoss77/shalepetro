// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu if open
            navLinks.classList.remove('active');
        }
    });
});

// Navbar scroll effect
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 0) {
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 2px 30px rgba(0, 0, 0, 0.15)';
    }

    lastScroll = currentScroll;
});

// Active navigation link on scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinksContainer = document.getElementById('navLinks');

mobileMenuBtn.addEventListener('click', () => {
    navLinksContainer.classList.toggle('active');
    const icon = mobileMenuBtn.querySelector('i');
    if (navLinksContainer.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Scroll to top button
const scrollTopBtn = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards and sections
const animatedElements = document.querySelectorAll('.service-card, .program-card, .why-card, .about-content, .contact-content');
animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease-out';
    observer.observe(el);
});

// Form submission
const contactForm = document.getElementById('contactForm');
const ENROLLMENT_EMAIL = 'sethuramalingam.r@shalepetroacademy.in';

// Route "Enroll Now" clicks to contact form and preselect program.
const enrollNowButtons = document.querySelectorAll('.enroll-now-btn');
enrollNowButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const selectedProgramValue = button.dataset.program || '';
        const programSelect = document.getElementById('program');
        if (programSelect && selectedProgramValue) {
            programSelect.value = selectedProgramValue;
        }
    });
});

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Get form values
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        program: document.getElementById('program').value,
        message: document.getElementById('message').value
    };

    // Show loading state
    const submitBtn = contactForm.querySelector('.btn-submit');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitBtn.disabled = true;

    try {
        const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(ENROLLMENT_EMAIL)}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                program: formData.program,
                message: formData.message,
                _subject: `New Enquiry - ${formData.program || 'General'} - Shale Petro Academy`,
                _template: 'table',
                _captcha: 'false'
            })
        });

        if (!response.ok) {
            throw new Error('Failed to submit contact form');
        }

        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        contactForm.reset();

        showSuccessPopup({
            type: 'contact',
            title: 'Message Sent Successfully!',
            message: `Thank you for your interest, ${formData.name}! We have received your inquiry and will get back to you within 24 hours.`,
            details: [
                { label: 'Name', value: formData.name },
                { label: 'Email', value: formData.email },
                { label: 'Phone', value: formData.phone },
                { label: 'Program', value: formData.program || 'General Inquiry' }
            ]
        });
    } catch (error) {
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        alert('Unable to send your message right now. Please try again in a moment.');
        console.error('Contact form submission failed:', error);
    }
});

// Counter animation for stats
const animateCounter = (element, target, duration = 2000) => {
    let start = 0;
    const increment = target / (duration / 16);
    
    const updateCounter = () => {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start) + '+';
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target + '+';
        }
    };
    
    updateCounter();
};

// Trigger counter animation when stats section is visible
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const stats = entry.target.querySelectorAll('.stat-item h3');
            stats.forEach(stat => {
                const target = parseInt(stat.textContent);
                animateCounter(stat, target);
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const heroStats = document.querySelector('.hero-stats');
if (heroStats) {
    statsObserver.observe(heroStats);
}

// Add hover effect to cards
const cards = document.querySelectorAll('.service-card, .program-card');
cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero-content');
    if (hero && scrolled < window.innerHeight) {
        hero.style.transform = `translateY(${scrolled * 0.3}px)`;
        hero.style.opacity = 1 - (scrolled / 600);
    }
});

// Dynamic year in footer
const currentYear = new Date().getFullYear();
const footerText = document.querySelector('.footer-bottom p');
if (footerText) {
    footerText.innerHTML = `&copy; ${currentYear} Shale Petro Academy Private Limited. All rights reserved.`;
}

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Form validation
const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
};

const validatePhone = (phone) => {
    const re = /^[\d\s\-\+\(\)]+$/;
    return re.test(phone) && phone.replace(/\D/g, '').length >= 10;
};

// Real-time form validation
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');

emailInput.addEventListener('blur', function() {
    if (!validateEmail(this.value) && this.value !== '') {
        this.style.borderColor = 'red';
    } else {
        this.style.borderColor = '#ddd';
    }
});

phoneInput.addEventListener('blur', function() {
    if (!validatePhone(this.value) && this.value !== '') {
        this.style.borderColor = 'red';
    } else {
        this.style.borderColor = '#ddd';
    }
});

// Add smooth transitions to all links
document.querySelectorAll('a').forEach(link => {
    link.style.transition = 'all 0.3s ease';
});

// Console message
console.log('%c Welcome to Shale Petro Academy! ', 'background: #1e5a8e; color: white; font-size: 16px; padding: 10px;');
console.log('%c Building careers in Oil & Gas Industry ', 'background: #e67e22; color: white; font-size: 14px; padding: 8px;');

// Enrollment Modal Functions
let selectedProgram = '';
let selectedPrice = 0;

function openEnrollmentModal(programName, price) {
    selectedProgram = programName;
    selectedPrice = price;
    
    document.getElementById('modalProgramName').textContent = programName;
    document.getElementById('modalPrice').textContent = '₹' + price.toLocaleString();
    document.getElementById('summaryPrice').textContent = '₹' + price.toLocaleString();
    document.getElementById('totalAmount').textContent = '₹' + price.toLocaleString();
    
    const modal = document.getElementById('enrollmentModal');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeEnrollmentModal() {
    const modal = document.getElementById('enrollmentModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
    document.getElementById('enrollmentForm').reset();
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('enrollmentModal');
    if (event.target === modal) {
        closeEnrollmentModal();
    }
}

// Handle Enrollment Form Submission
const enrollmentForm = document.getElementById('enrollmentForm');
if (enrollmentForm) {
    enrollmentForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const formData = {
            program: selectedProgram,
            price: selectedPrice,
            name: document.getElementById('enrollName').value,
            email: document.getElementById('enrollEmail').value,
            phone: document.getElementById('enrollPhone').value,
            qualification: document.getElementById('enrollQualification').value,
            date: new Date().toLocaleDateString('en-IN')
        };

        // Here you would typically:
        // 1. Process the payment through a payment gateway (Razorpay, Stripe, etc.)
        // 2. Send the data to your backend server
        // 3. Generate and send receipt via email
        
        // For now, we'll simulate the process
        processEnrollment(formData);
    });
}

function processEnrollment(data) {
    // Show loading state
    const submitBtn = enrollmentForm.querySelector('.btn-submit');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
    submitBtn.disabled = true;

    // Simulate payment processing (replace with actual payment gateway integration)
    setTimeout(() => {
        // Generate receipt number
        const receiptNumber = 'SPA' + Date.now();
        
        // Log enrollment data (in production, this would be sent to your server)
        console.log('Enrollment Data:', data);
        console.log('Receipt Number:', receiptNumber);
        
        // Reset and close modal
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        closeEnrollmentModal();
        
        // Show beautiful success popup
        showSuccessPopup({
            type: 'enrollment',
            title: 'Enrollment Successful!',
            message: `Congratulations ${data.name}! Your enrollment has been confirmed. A payment receipt and course details have been sent to your email.`,
            details: [
                { label: 'Receipt No', value: receiptNumber },
                { label: 'Program', value: data.program },
                { label: 'Amount', value: `₹${data.price.toLocaleString()}` },
                { label: 'Email', value: data.email }
            ]
        });
        
    }, 2000); // Simulated delay
}

// Email sending function (to be implemented with backend)
function sendReceiptEmail(enrollmentData, receiptNumber) {
    // This would be handled by your backend server
    // Example structure for the email:
    const emailData = {
        to: enrollmentData.email,
        subject: 'Enrollment Confirmation - Shale Petro Academy',
        receiptNumber: receiptNumber,
        programName: enrollmentData.program,
        amount: enrollmentData.price,
        studentName: enrollmentData.name,
        phone: enrollmentData.phone,
        date: enrollmentData.date
    };
    
    // Send to your backend API
    // fetch('/api/send-receipt', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(emailData)
    // });
    
    console.log('Email would be sent with data:', emailData);
}

// Success Popup Functions
function showSuccessPopup(config) {
    const popup = document.getElementById('successPopup');
    const header = document.getElementById('successHeader');
    const icon = document.getElementById('successIcon');
    const title = document.getElementById('successTitle');
    const message = document.getElementById('successMessage');
    const details = document.getElementById('successDetails');
    
    // Reset classes
    header.classList.remove('download-type', 'contact-type');
    icon.classList.remove('download-icon', 'contact-icon');
    details.classList.remove('download-details-box', 'contact-details-box');
    
    // Set type-specific styling
    if (config.type === 'download') {
        header.classList.add('download-type');
        icon.classList.add('download-icon');
        icon.innerHTML = '<i class="fas fa-download"></i>';
        details.classList.add('download-details-box');
    } else if (config.type === 'contact') {
        header.classList.add('contact-type');
        icon.classList.add('contact-icon');
        icon.innerHTML = '<i class="fas fa-envelope-open-text"></i>';
        details.classList.add('contact-details-box');
    } else {
        icon.innerHTML = '<i class="fas fa-check-circle"></i>';
    }
    
    // Set content
    title.textContent = config.title;
    message.innerHTML = `<p>${config.message}</p>`;
    
    // Build details HTML
    let detailsHTML = '';
    config.details.forEach(detail => {
        detailsHTML += `
            <div class="detail-row">
                <span class="detail-label">${detail.label}:</span>
                <span class="detail-value">${detail.value}</span>
            </div>
        `;
    });
    details.innerHTML = detailsHTML;
    
    // Create confetti effect
    createConfetti();
    
    // Show popup
    popup.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeSuccessPopup() {
    const popup = document.getElementById('successPopup');
    popup.classList.remove('active');
    document.body.style.overflow = 'auto';
    
    // Clear confetti
    document.getElementById('confettiContainer').innerHTML = '';
}

function createConfetti() {
    const container = document.getElementById('confettiContainer');
    container.innerHTML = ''; // Clear existing confetti
    
    const colors = ['#1e5a8e', '#e67e22', '#28a745', '#ffc107', '#dc3545'];
    
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDelay = Math.random() * 3 + 's';
        confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
        container.appendChild(confetti);
    }
}

// Close success popup when clicking outside
window.addEventListener('click', function(event) {
    const popup = document.getElementById('successPopup');
    if (event.target === popup) {
        closeSuccessPopup();
    }
});

// Download Modal Functions
let selectedResource = '';
let selectedFileName = '';

function openDownloadModal(resourceName, fileName) {
    selectedResource = resourceName;
    selectedFileName = fileName;
    
    document.getElementById('downloadResourceName').textContent = resourceName;
    
    const modal = document.getElementById('downloadModal');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeDownloadModal() {
    const modal = document.getElementById('downloadModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
    document.getElementById('downloadForm').reset();
}

// Handle Download Form Submission
const downloadForm = document.getElementById('downloadForm');
if (downloadForm) {
    downloadForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const downloadData = {
            resource: selectedResource,
            fileName: selectedFileName,
            name: document.getElementById('downloadName').value,
            email: document.getElementById('downloadEmail').value,
            phone: document.getElementById('downloadPhone').value,
            date: new Date().toLocaleString('en-IN'),
            ipAddress: 'User IP' // You can get this from backend
        };

        // Process the download
        processDownload(downloadData);
    });
}

function processDownload(data) {
    // Show loading state
    const submitBtn = downloadForm.querySelector('.btn-submit');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
    submitBtn.disabled = true;

    // Simulate processing (replace with actual API call)
    setTimeout(() => {
        // Send notification to company email
        sendDownloadNotification(data);
        
        // Log download data
        console.log('Download Data:', data);
        console.log('Notification sent to company email with user details');
        
        // Reset and close modal
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        closeDownloadModal();
        
        // Show beautiful success popup
        showSuccessPopup({
            type: 'download',
            title: 'Download Ready!',
            message: `Thank you ${data.name}! We've sent the download link to your email. The file will be available in your inbox shortly.`,
            details: [
                { label: 'Resource', value: data.resource },
                { label: 'Email', value: data.email },
                { label: 'File', value: data.fileName }
            ]
        });
        
    }, 2000);
}

function sendDownloadNotification(downloadData) {
    // This sends the user's details to company email
    // To be implemented with your backend
    
    const notificationData = {
        to: 'info@shalepetro.com', // Company email
        subject: `New Resource Download - ${downloadData.resource}`,
        body: `
            New user has downloaded a free resource:
            
            Resource: ${downloadData.resource}
            File: ${downloadData.fileName}
            
            User Details:
            Name: ${downloadData.name}
            Email: ${downloadData.email}
            Phone: ${downloadData.phone}
            Date: ${downloadData.date}
            
            Follow up with this lead for potential enrollment!
        `
    };
    
    // Send to your backend API
    // fetch('/api/send-download-notification', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(notificationData)
    // });
    
    console.log('Download notification to be sent:', notificationData);
}

function initiateDownload(fileName) {
    // This would trigger the actual file download
    // In production, you'd have actual files hosted
    console.log('Initiating download for:', fileName);
    
    // Example: Create a download link
    // const link = document.createElement('a');
    // link.href = '/resources/' + fileName;
    // link.download = fileName;
    // link.click();
}

