window.onload = () => {
    let places = staticLoadPlaces();
    renderPlaces(places);
};

function staticLoadPlaces() {
    return [
        {
            name: 'Magnemite',
            location: {
                lat: 37.802202,
                lng: -122.425098,
            }
        },
        {
            name: 'Magnemite 2',
            location: {
                lat: 37.8018264,
                lng: -122.4250028,
            }
        },
        {
            name: 'Magnemite 3',
            location: {
                lat: 37.802078,
                lng: -122.424867,
            }
        },
        {
            name: 'Magnemite 4',
            location: {
                lat: 37.8019859,
                lng: -122.4247614,
            }
        },
        {
            name: 'Magnemite 5',
            location: {
                lat: 37.801961,
                lng: -122.424832,
            }
        },
    ];
}

function renderPlaces(places) {
    let scene = document.querySelector('a-scene');

    places.forEach((place) => {
        let latitude = place.location.lat;
        let longitude = place.location.lng;

        let model = document.createElement('a-entity');
        model.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);
        model.setAttribute('gltf-model', './assets/magnemite/scene.gltf');
        model.setAttribute('rotation', '0 180 0');
        model.setAttribute('animation-mixer', '');
        model.setAttribute('scale', '0.5 0.5 0.5');

        model.addEventListener('loaded', () => {
            window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'))
        });

        scene.appendChild(model);
    });
}
