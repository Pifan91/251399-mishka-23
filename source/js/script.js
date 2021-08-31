const mainHeader = document.querySelector('.main-header');
const mapImage = document.querySelector('.map__image');

mainHeader.classList.remove('main-header--no-js');
mapImage.remove();


ymaps.ready(function () {
  var myMap = new ymaps.Map('map', {
    center: [59.938635, 30.323118],
    zoom: 17
  }, {
    searchControlProvider: 'yandex#search'
  }),

    myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
      hintContent: 'Собственный значок метки',
      balloonContent: 'Это красивая метка'
    }, {
      // Опции.
      // Необходимо указать данный тип макета.
      iconLayout: 'default#image',
      // Своё изображение иконки метки.
      iconImageHref: 'img/map-pin.svg',
      // Размеры метки.
      iconImageSize: [67, 100],
      // Смещение левого верхнего угла иконки относительно
      // её "ножки" (точки привязки).
      iconImageOffset: [-30, -100]
    });

  myMap.geoObjects
    .add(myPlacemark)
    .add(myPlacemarkWithContent);
});
