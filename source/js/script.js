const mainHeader = document.querySelector('.main-header');
const mapImage = document.querySelector('.map__image');
const headerBurgerButton = document.querySelector('.main-header__burger-button');
const headerNavList = document.querySelector('.main-header__nav-list');
const headerUserList = document.querySelector('.main-header__user-list');

mainHeader.classList.remove('main-header--no-js');
mapImage.remove();

headerBurgerButton.addEventListener('click', function () {
  headerBurgerButton.classList.toggle('burger-button--open');
  headerNavList.classList.toggle('main-header__nav-list--open');
  headerUserList.classList.toggle('main-header__user-list--open');
  headerUserList.style.top = mainHeader.offsetHeight + headerNavList.offsetHeight + 'px';
});

if (typeof ymaps === 'object') {
  //Вставка Яндекс карты.
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
      .add(myPlacemark);
  });
}
