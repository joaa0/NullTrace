document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lenis for global smooth scrolling
    const lenis = new Lenis({
        duration: 1.5,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        direction: 'vertical',
        gestureDirection: 'vertical',
        smooth: true,
        mouseMultiplier: 1,
        smoothTouch: false,
        touchMultiplier: 2,
        infinite: false,
    });

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Existing Intersection Observer for Nav Highlighting
    const elementsToAnimate = document.querySelectorAll('section, header'); 
    const sectionsToObserve = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    const observerOptions = {
        root: null,
        rootMargin: '-50% 0px -50% 0px',
        threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(link => {
                    link.classList.remove('text-blue-500', 'font-semibold', 'border-blue-600');
                    link.classList.add('text-slate-400', 'hover:text-white', 'border-transparent');
                });

                const activeId = entry.target.getAttribute('id');
                if (activeId) {
                    const activeLink = document.querySelector(`.nav-link[href="#${activeId}"]`);
                    if (activeLink) {
                        activeLink.classList.remove('text-slate-400', 'hover:text-white', 'border-transparent');
                        activeLink.classList.add('text-blue-500', 'font-semibold', 'border-blue-600');
                    }
                }
            }
        });
    }, observerOptions);

    sectionsToObserve.forEach(section => {
        observer.observe(section);
    });

    // Setup initial default styles for transition — only transform+opacity (GPU-composited, no repaints)
    elementsToAnimate.forEach(el => {
        el.style.willChange = 'transform, opacity';
        el.style.transition = 'transform 0.9s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.9s ease';
    });

    // Handle smooth nav click with lightweight parallax
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                // Nudge non-target sections slightly down and fade them
                elementsToAnimate.forEach(el => {
                    if (el !== targetSection) {
                        el.style.transform = 'translateY(30px)';
                        el.style.opacity = '0.4';
                    } else {
                        el.style.transform = 'translateY(-20px)';
                        el.style.opacity = '1';
                    }
                });

                // Scroll via Lenis
                lenis.scrollTo(targetSection, {
                    duration: 1.6,
                    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                    onComplete: () => {
                        // Reset all elements
                        elementsToAnimate.forEach(el => {
                            el.style.transform = 'translateY(0)';
                            el.style.opacity = '1';
                        });
                    }
                });
            }
        });
    });
});
