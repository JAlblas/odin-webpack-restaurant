// homePageModule.js

import Restaurant from './restaurant.jpg'

const generateHome = () => {
    let div = document.createElement('div');
    div.className = 'page';

    // Restaurant name
    let restaurantName = document.createElement('h1');
    restaurantName.textContent = 'Gourmet Delights';
    div.appendChild(restaurantName);

    const restaurant = new Image();
    restaurant.src = Restaurant;

    div.appendChild(restaurant);

    // Welcome message
    let welcomeMessage = document.createElement('p');
    welcomeMessage.textContent = 'Welcome to Gourmet Delights! We are excited to offer you a unique dining experience where fine dining meets the comfort of home. Enjoy our carefully crafted dishes and excellent service.';
    div.appendChild(welcomeMessage);

    // Featured Dish
    let featuredDishSection = document.createElement('div');
    featuredDishSection.className = 'featured-dish-section';

    let featuredDishTitle = document.createElement('h2');
    featuredDishTitle.textContent = 'Featured Dish';
    featuredDishSection.appendChild(featuredDishTitle);

    let featuredDishContent = document.createElement('p');
    featuredDishContent.textContent = 'Our featured dish this month is the exquisite Grilled Salmon with Lemon Butter Sauce, served with a side of roasted vegetables. A perfect blend of flavors that will delight your taste buds!';
    featuredDishSection.appendChild(featuredDishContent);

    div.appendChild(featuredDishSection);

    // Customer Testimonials
    let testimonialsSection = document.createElement('div');
    testimonialsSection.className = 'testimonials-section';

    let testimonialsTitle = document.createElement('h2');
    testimonialsTitle.textContent = 'Customer Testimonials';
    testimonialsSection.appendChild(testimonialsTitle);

    let testimonials = [
        { name: 'Alice', comment: 'Absolutely loved the ambiance and the food was amazing!' },
        { name: 'Bob', comment: 'A wonderful dining experience with friendly staff and delicious dishes.' }
    ];

    testimonials.forEach(testimonial => {
        let testimonialDiv = document.createElement('div');
        testimonialDiv.className = 'testimonial';

        let testimonialName = document.createElement('span');
        testimonialName.className = 'testimonial-name';
        testimonialName.textContent = testimonial.name;

        let testimonialComment = document.createElement('p');
        testimonialComment.className = 'testimonial-comment';
        testimonialComment.textContent = testimonial.comment;

        testimonialDiv.appendChild(testimonialName);
        testimonialDiv.appendChild(testimonialComment);
        testimonialsSection.appendChild(testimonialDiv);
    });

    div.appendChild(testimonialsSection);

    // Contact Information
    let contactSection = document.createElement('div');
    contactSection.className = 'contact-section';

    let contactTitle = document.createElement('h2');
    contactTitle.textContent = 'Contact Us';
    contactSection.appendChild(contactTitle);

    let contactContent = document.createElement('p');
    contactContent.innerHTML = '123 Culinary Lane, Flavor Town, USA<br>Phone: (123) 456-7890<br>Email: info@gourmetdelights.com';
    contactSection.appendChild(contactContent);

    div.appendChild(contactSection);

    return div;
};

export { generateHome };
