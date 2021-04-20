ymaps.ready(init);

const listOfPlaces = [
    {
        position: [52.408544, 30.949182],
        name: 'Стадион "Луч"',
        description: 'Беговые тренировки и работа с мячом. Тренировки заключаются игрой.'
    },
    {
        position: [52.416235, 30.979251],
        name: 'ДЮСШОР',
        description: 'Борцовая тренировка. Отработка контакта.'
    },
    {
        position: [52.423955, 30.996715],
        name: 'ФК "Адренилин"',
        description: 'Силовая тренировка. Работа со свободными весами.'
    },
    {
        position: [52.455705, 30.996515],
        name: 'Стадион школы №8',
        description: 'Беговые тренировки и работа с мячом. Тренировки заключаются игрой.'
    },
]

const id = 'map-addresses-list';

function init () {
    const myMap = new ymaps.Map("map", {
            center: [52.429316, 30.987001],
            zoom: 12
        }, {
            searchControlProvider: 'yandex#search',
            controls: ['zoomControl'],
        });
    const placesMaps = listOfPlaces.map(place => {
        return new ymaps.Placemark(place.position, {
            // In order for the balloon and hint to open on the placemark, you need to set certain properties.
            balloonContentHeader: place.name,
            balloonContentBody: place.description,
            hintContent: place.name,
        });
    })

    placesMaps.forEach(placeMap => myMap.geoObjects.add(placeMap));


    myMap.hint.open(myMap.getCenter(), "Места где тренируется наша команда", {
        // Option: delay before opening.
        openTimeout: 1500
    });
}

const listWrapper = document.querySelector('#map-addresses-list');

listOfPlaces.forEach((place, index) => {
    const li = document.createElement('li');
    li.classList.add('map-address');
    if (index === 0) li.classList.add('active');
    li.innerText = place.name;
    listWrapper.appendChild(li);
})
