document.addEventListener('DOMContentLoaded', function () {
    const burger = document.getElementById('burger');
    const menu = document.getElementById('menu');

    burger.addEventListener('click', function () {
        menu.classList.toggle('open');
        menu.classList.toggle('closed');
    });
});

// Function to count up the numbers
function animateCount(element, target, isYearsInBusiness = false) {
    let count = 0;
    let speed = 20;  // Adjust speed here
    const updateCount = () => {
        const current = parseInt(element.innerText);
        const increment = target / speed;

        if (current < target) {
            element.innerText = Math.ceil(current + increment);
            setTimeout(updateCount, 10);  // Speed of the counting animation
        } else {
            // Add "+" for "Years in Business" only
            element.innerText = isYearsInBusiness ? target + "+" : target;
        }
    };

    updateCount();
}

// Function to start counting when section is visible
function handleIntersection(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counters = document.querySelectorAll('.count');
            counters.forEach(counter => {
                const target = +counter.getAttribute('data-target');
                
                // Check if the parent div has the "years-in-business" class
                const isYearsInBusiness = counter.parentElement.classList.contains('years-in-business');
                
                // Animate count, passing the flag for years-in-business
                animateCount(counter, target, isYearsInBusiness);
            });

            // Unobserve the section once counting starts
            observer.unobserve(entry.target);
        }
    });
}

// Creating an IntersectionObserver
const observer = new IntersectionObserver(handleIntersection, {
    root: null,        // Observes relative to the viewport
    threshold: 0.2     // Start animation when 20% of the section is visible
});

// Observe the stats section
const statsSection = document.querySelector('.stats');
observer.observe(statsSection);
