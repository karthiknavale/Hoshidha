/* ==========================================================================
   Hoshidha Fusing Machines - Global JS Functionality
   Company: Aprameya Enterprises
   Author: Antigravity AI
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Sticky Navigation ---
    const header = document.querySelector('.header');
    const handleScroll = () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Run once in case page loads scrolled

    // --- 2. Mobile Menu Toggle ---
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
            // Disable scroll when mobile menu is open
            document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
        });

        // Close menu when clicking link
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }

    // --- 3. Hero Image Slider (Home Page) ---
    const slides = document.querySelectorAll('.slide');
    const dotsContainer = document.querySelector('.slider-dots');
    const prevBtn = document.querySelector('.slider-prev');
    const nextBtn = document.querySelector('.slider-next');
    
    if (slides.length > 0) {
        let currentSlide = 0;
        let slideInterval;
        const intervalTime = 6000; // 6 seconds

        // Create dot navigation
        slides.forEach((_, idx) => {
            const dot = document.createElement('div');
            dot.classList.add('slider-dot');
            if (idx === 0) dot.classList.add('active');
            dot.addEventListener('click', () => goToSlide(idx));
            if (dotsContainer) dotsContainer.appendChild(dot);
        });

        const dots = document.querySelectorAll('.slider-dot');

        const updateDots = (index) => {
            if (dots.length > 0) {
                dots.forEach(dot => dot.classList.remove('active'));
                dots[index].classList.add('active');
            }
        };

        const showSlide = (index) => {
            slides.forEach(slide => slide.classList.remove('active'));
            slides[index].classList.add('active');
            currentSlide = index;
            updateDots(index);
        };

        const nextSlide = () => {
            let next = (currentSlide + 1) % slides.length;
            showSlide(next);
        };

        const prevSlide = () => {
            let prev = (currentSlide - 1 + slides.length) % slides.length;
            showSlide(prev);
        };

        const startSlideShow = () => {
            slideInterval = setInterval(nextSlide, intervalTime);
        };

        const stopSlideShow = () => {
            clearInterval(slideInterval);
        };

        const goToSlide = (index) => {
            showSlide(index);
            stopSlideShow();
            startSlideShow();
        };

        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                nextSlide();
                stopSlideShow();
                startSlideShow();
            });
        }

        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                prevSlide();
                stopSlideShow();
                startSlideShow();
            });
        }

        // Start slider
        showSlide(0);
        startSlideShow();

        // Pause on hover
        const heroSlider = document.querySelector('.hero-slider');
        if (heroSlider) {
            heroSlider.addEventListener('mouseenter', stopSlideShow);
            heroSlider.addEventListener('mouseleave', startSlideShow);
        }
    }

    // --- 4. Statistics Counter Animation ---
    const statNumbers = document.querySelectorAll('.stat-number');
    
    if (statNumbers.length > 0) {
        const countUp = (el) => {
            const target = parseInt(el.getAttribute('data-target'), 10);
            const duration = 2000; // 2 seconds
            const stepTime = 20;
            const steps = duration / stepTime;
            const increment = target / steps;
            let current = 0;
            
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    el.textContent = target;
                    clearInterval(timer);
                    // Append "+" if configured
                    if (el.getAttribute('data-suffix')) {
                        el.innerHTML = target + `<span class='text-primary-yellow'>` + el.getAttribute('data-suffix') + `</span>`;
                    }
                } else {
                    el.innerHTML = Math.floor(current) + (el.getAttribute('data-suffix') ? `<span class='text-primary-yellow'>` + el.getAttribute('data-suffix') + `</span>` : '');
                }
            }, stepTime);
        };

        // Scroll Observer for Stats
        const statsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const el = entry.target;
                    if (!el.classList.contains('counted')) {
                        el.classList.add('counted');
                        countUp(el);
                    }
                }
            });
        }, { threshold: 0.5 });

        statNumbers.forEach(num => statsObserver.observe(num));
    }

    // --- 5. Scroll Reveal Animation ---
    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    if (revealElements.length > 0) {
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

        revealElements.forEach(el => revealObserver.observe(el));
    }

    // --- 6. Product Filter Logic (Products Page) ---
    const tabButtons = document.querySelectorAll('.tab-btn');
    const productCards = document.querySelectorAll('.product-card');

    if (tabButtons.length > 0 && productCards.length > 0) {
        tabButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                // Active tab class
                tabButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const filterValue = btn.getAttribute('data-filter');

                productCards.forEach(card => {
                    const category = card.getAttribute('data-category');
                    if (filterValue === 'all' || category === filterValue) {
                        card.style.display = 'flex';
                        // Trigger tiny animation refresh
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'scale(1)';
                        }, 50);
                    } else {
                        card.style.opacity = '0';
                        card.style.transform = 'scale(0.95)';
                        setTimeout(() => {
                            card.style.display = 'none';
                        }, 300);
                    }
                });
            });
        });
    }

    // --- 7. Product Modal Details (Products Page) ---
    const openModalButtons = document.querySelectorAll('.open-product-modal');
    const modalOverlay = document.getElementById('productModal');
    const modalClose = document.querySelector('.modal-close');

    if (modalOverlay) {
        openModalButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const card = btn.closest('.machine-card');
                const title = card.querySelector('.machine-title').innerText;
                const desc = card.querySelector('.machine-desc').innerText;
                const imgSrc = card.querySelector('.machine-img-container img').src;
                const specsHTML = card.querySelector('.machine-specs').innerHTML;

                // Populate modal contents
                modalOverlay.querySelector('.modal-title').innerText = title;
                modalOverlay.querySelector('.modal-image').src = imgSrc;
                modalOverlay.querySelector('.modal-image').alt = title;
                modalOverlay.querySelector('.modal-desc').innerText = desc;
                modalOverlay.querySelector('.modal-specs-list').innerHTML = specsHTML;

                // Show modal
                modalOverlay.style.display = 'flex';
                setTimeout(() => {
                    modalOverlay.classList.add('active');
                    document.body.style.overflow = 'hidden';
                }, 50);
            });
        });

        const closeModal = () => {
            modalOverlay.classList.remove('active');
            setTimeout(() => {
                modalOverlay.style.display = 'none';
                document.body.style.overflow = '';
            }, 300);
        };

        if (modalClose) {
            modalClose.addEventListener('click', closeModal);
        }

        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) {
                closeModal();
            }
        });

        // Close on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
                closeModal();
            }
        });
    }

    // --- 8. Custom Lightbox Gallery (Gallery Page) ---
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.querySelector('.lightbox-img');
    const lightboxCaption = document.querySelector('.lightbox-caption');
    const lightboxCategory = document.querySelector('.lightbox-category');
    const lightboxClose = document.querySelector('.lightbox-close');
    const lightboxPrev = document.querySelector('.lightbox-prev');
    const lightboxNext = document.querySelector('.lightbox-next');

    if (galleryItems.length > 0 && lightbox) {
        let activeIdx = 0;
        const galleryImages = [];

        // Build internal array of images to allow prev/next traversal
        galleryItems.forEach((item, idx) => {
            const img = item.querySelector('img');
            const title = item.querySelector('h4') ? item.querySelector('h4').innerText : 'Hoshidha Fusing Machine';
            const cat = item.querySelector('span') ? item.querySelector('span').innerText : 'Machinery';
            
            galleryImages.push({
                src: img.src,
                title: title,
                category: cat
            });

            item.addEventListener('click', () => {
                openLightbox(idx);
            });
        });

        const openLightbox = (index) => {
            activeIdx = index;
            updateLightbox();
            lightbox.style.display = 'flex';
            setTimeout(() => {
                lightbox.classList.add('active');
                document.body.style.overflow = 'hidden';
            }, 50);
        };

        const updateLightbox = () => {
            const data = galleryImages[activeIdx];
            lightboxImg.src = data.src;
            lightboxImg.alt = data.title;
            lightboxCaption.innerText = data.title;
            lightboxCategory.innerText = data.category;
        };

        const nextImage = () => {
            activeIdx = (activeIdx + 1) % galleryImages.length;
            updateLightbox();
        };

        const prevImage = () => {
            activeIdx = (activeIdx - 1 + galleryImages.length) % galleryImages.length;
            updateLightbox();
        };

        const closeLightbox = () => {
            lightbox.classList.remove('active');
            setTimeout(() => {
                lightbox.style.display = 'none';
                document.body.style.overflow = '';
            }, 300);
        };

        if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
        if (lightboxNext) lightboxNext.addEventListener('click', nextImage);
        if (lightboxPrev) lightboxPrev.addEventListener('click', prevImage);

        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });

        document.addEventListener('keydown', (e) => {
            if (!lightbox.classList.contains('active')) return;
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowRight') nextImage();
            if (e.key === 'ArrowLeft') prevImage();
        });
    }

    // --- 9. Gallery Category Filtering (Gallery Page) ---
    const filterBtns = document.querySelectorAll('.gallery-filter-btn');
    const items = document.querySelectorAll('.gallery-item');

    if (filterBtns.length > 0 && items.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const filter = btn.getAttribute('data-filter');

                items.forEach(item => {
                    const category = item.getAttribute('data-category');
                    if (filter === 'all' || category === filter) {
                        item.style.display = 'block';
                        setTimeout(() => {
                            item.style.opacity = '1';
                            item.style.transform = 'scale(1)';
                        }, 50);
                    } else {
                        item.style.opacity = '0';
                        item.style.transform = 'scale(0.95)';
                        setTimeout(() => {
                            item.style.display = 'none';
                        }, 300);
                    }
                });
            });
        });
    }

    // --- 10. Contact Form Submit Mock Validation ---
    const contactForm = document.getElementById('contactForm');
    const toast = document.getElementById('toastMsg');

    if (contactForm && toast) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Simulating API loading state
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn.innerText;
            submitBtn.disabled = true;
            submitBtn.innerText = 'Sending Inquiry...';

            setTimeout(() => {
                // Restore Button
                submitBtn.disabled = false;
                submitBtn.innerText = originalBtnText;

                // Reset form
                contactForm.reset();

                // Show success toast
                toast.style.display = 'flex';
                setTimeout(() => {
                    toast.classList.add('active');
                }, 50);

                // Auto hide toast after 4 seconds
                setTimeout(() => {
                    toast.classList.remove('active');
                    setTimeout(() => {
                        toast.style.display = 'none';
                    }, 300);
                }, 4000);

            }, 1500); // 1.5 second delay mock network call
        });
    }

    // --- 11. Auto-select machinery dropdown from URL query ---
    const urlParams = new URLSearchParams(window.location.search);
    const productParam = urlParams.get('product');
    const selectEl = document.getElementById('machinerySelect');
    if (productParam && selectEl) {
        selectEl.value = productParam;
    }
});
