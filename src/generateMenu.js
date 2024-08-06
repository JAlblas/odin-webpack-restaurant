const generateMenu = () => {
    let div = document.createElement('div');
    div.className = 'menu-page';

    // Menu title
    let menuTitle = document.createElement('h1');
    menuTitle.textContent = 'Our Menu';
    div.appendChild(menuTitle);

    // Create a section for a menu category
    const createMenuSection = (title, items) => {
        let section = document.createElement('div');
        section.className = 'menu-section';

        let sectionTitle = document.createElement('h2');
        sectionTitle.textContent = title;
        section.appendChild(sectionTitle);

        items.forEach(item => {
            let menuItem = document.createElement('div');
            menuItem.className = 'menu-item';

            let itemName = document.createElement('span');
            itemName.className = 'item-name';
            itemName.textContent = item.name;

            let itemPrice = document.createElement('span');
            itemPrice.className = 'item-price';
            itemPrice.textContent = item.price;

            menuItem.appendChild(itemName);
            menuItem.appendChild(itemPrice);
            section.appendChild(menuItem);
        });

        return section;
    };

    // Sample menu items for each category
    let appetizers = [
        { name: 'Bruschetta', price: '$8' },
        { name: 'Stuffed Mushrooms', price: '$10' }
    ];

    let mainCourses = [
        { name: 'Grilled Salmon', price: '$25' },
        { name: 'Steak au Poivre', price: '$30' }
    ];

    let desserts = [
        { name: 'Cheesecake', price: '$12' },
        { name: 'Chocolate Mousse', price: '$10' }
    ];

    // Create and append sections to the menu page
    div.appendChild(createMenuSection('Appetizers', appetizers));
    div.appendChild(createMenuSection('Main Courses', mainCourses));
    div.appendChild(createMenuSection('Desserts', desserts));

    return div;
};

export { generateMenu };