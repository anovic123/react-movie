# О проекте

Данный проект был разработан на React JS с использованием шаблона "npm create vite@latest".

## Запуск проекта

Для запуска проекта необходимо выполнить следующие команды в терминале: **npm install**, затем **npm start**

## Использованные библиотеки и технологии:

React, Axios, @reduxjs/toolkit, React-Redux, Classnames, React-Content-Loader, React-Icons, React-Lazy-Load-Image-Component, React-Player, React-Router-Dom, Sass, Swiper, UUID.

## Как работает проект

Проект состоит из шести страниц: Главной, ТВ Шоу, Фильмы, Новое и Популярное, Не Найдено, Страница с детальным описание.

## Функциональность:

Приложение "React-Movies" представляет собой каталог фильмов, где вы сможете легко подобрать фильм для просмотра вечером. Вот основные функции приложения:

### Просмотр каталогов фильма

На главной странице присутствует баннер, который каждый раз при перезагрузке страницы выдает новый фильм, который находится в топ-рейтинге. Нажав на кнопку "Play", вы откроете модальное окно с кастомным плеером трейлера данного фильма. Также на главной странице присутствуют 5 категорий фильмов в виде слайдеров.

### Страница с детальным описанием

У каждого фильма, ТВ-шоу и т.д. присутствует страница с детальным описанием, рейтингом, актерами и возможностью просмотреть трейлер нажав на кнопку "Play".

### Адаптивность

Приложение полностью адаптивно и корректно отображается на устройствах различных размеров.

### Анимация слайдеров

Для просмотра каталога фильмов на странице "Фильмы" и "ТВ Шоу" используются слайдеры, которые анимированно переключаются при нажатии на соответствующие кнопки.

### Lazy loading

Для более быстрой загрузки приложения используется lazy loading изображений.

### Skeleton loading

Пока данные загружаются, пользователю будет отображен скелетон карточки фильма.

### Пагинация

На страницах "Фильмы", "ТВ Шоу", "Новое и Популярное" присутствует пагинация для удобного перехода между страницами с большим количеством элементов.
