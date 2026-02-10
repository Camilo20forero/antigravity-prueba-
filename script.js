document.addEventListener('DOMContentLoaded', () => {
    const infoPanel = document.getElementById('info-panel');
    const closeBtn = document.getElementById('close-btn');
    const itemTitle = document.getElementById('item-title');
    const itemDescription = document.getElementById('item-description');
    const itemFabrication = document.getElementById('item-fabrication');

    // Exhibit data
    const exhibits = {
        'exhibit-central': {
            title: 'Traje de Gala Afro-Colombiano',
            description: 'Este traje es una pieza fundamental de la colección. Representa la fusión de materiales tradicionales con técnicas de costura heredadas de generaciones en el Pacífico colombiano.',
            fabrication: 'Confeccionado en lino de alta calidad con bordados hechos a mano que simbolizan elementos de la naturaleza y la espiritualidad afro.'
        }
    };

    // Interaction logic
    const scene = document.querySelector('a-scene');

    scene.addEventListener('click', (evt) => {
        const target = evt.detail.intersectedEl;

        if (target && target.classList.contains('interactive')) {
            const data = exhibits[target.id];
            if (data) {
                showInfo(data);
            }
        }
    });

    function showInfo(data) {
        itemTitle.textContent = data.title;
        itemDescription.textContent = data.description;
        itemFabrication.textContent = data.fabrication;
        infoPanel.classList.remove('hidden');
    }

    closeBtn.addEventListener('click', () => {
        infoPanel.classList.add('hidden');
    });

    // Hover sound or visual effect logic can be added here
});
