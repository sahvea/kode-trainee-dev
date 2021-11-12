# kode-trainee-dev
[![wakatime](https://wakatime.com/badge/user/b5c7ce6c-3494-4300-a39b-cb93931f8283/project/b6c1c254-c85c-4600-b55c-4d5c3355c089.svg)](https://wakatime.com/badge/user/b5c7ce6c-3494-4300-a39b-cb93931f8283/project/b6c1c254-c85c-4600-b55c-4d5c3355c089)

Тестовое задание для [KODE](https://kode.ru/) в виде небольшого приложения, в котором есть всего по чуть-чуть: верстки, работы с API, преобразование данных и т.д.

## Ссылки
* [Задание и требования](https://github.com/appKODE/trainee-test-frontend)
* [Макет](https://www.figma.com/file/GRRKONipVClULsfdCAuVs1/KODE-Trainee-Dev-%D0%9E%D1%81%D0%B5%D0%BD%D1%8C'21?node-id=11%3A14414)
* [Спецификация метода API](https://kode-education.stoplight.io/docs/trainee-test/b3A6MjUxNDM5Mjg-get-users)

## План задач
В скобках указано (ожидаемое время | фактическое время) выполнения задачи.

### Этап 1: Подготовка
- [x] составить план всей работы (~60 мин | 82 мин)
- [x] подготовить репозиторий:
  * [x] добавить инфраструктурные файлы: .gitignore, .editorconfig (~2 мин | 2 мин)
  * [x] установить CRA (~15 мин | 10 мин)
- [x] подготовить файловую структуру: (~2 мин | 5 мин)
  * [x] для Реакт-компонентов - `components/`
  * [x] для вспомогательных функций, а также для запросов к API - `utils/`
  * [x] для изображений - `images/`
  * [x] для вспомогательных файлов стилей - `style/`
  * [x] для кода или файлов сторонних разработчиков, например шрифтов - `vendor/`
<br>

### Этап 2: Верстка
- [x] добавить normalize (~2 мин | 2 мин)
- [x] подключить шрифты (~5 мин | 10 мин)
- [x] вытащить из макета необходимые изображения, оптимизировать их (~5 мин | 15 мин)
- [x] добавить фавиконку (~10 мин | 10 мин)
- [x] установить необходимые пакеты, например [skeleton loading](https://www.npmjs.com/package/react-loading-skeletonhttps://www.npmjs.com/package/react-loading-skeleton) (~5 мин | 5 мин)
- [x] сверстать блоки:
  * [x] интуп поиска с кнопкой "сортировка" (~100 мин | 90 мин)
  * [x] панель вкладок (~90 мин | 130 мин)
  * [x] список работников (~10 мин | 10 мин)
  * [x] карточка работника (~40 мин | 40 мин)
  * [x] модальное окно "сортировка" (~30 мин | 20 мин)
  * [x] форма в модальном окне (~40 мин | 40 мин)
  * [x] разделитель по годам (~20 мин | 20 мин)
  * [x] ошибка поиска (~20 мин | 35 мин)
  * [x] критическая ошибка (~20 мин | 25 мин)
  * [x] страница 404 (~10 мин | 35 мин)
  * [x] профиль человека (~90 мин | 120 мин)
<br>

### Этап 3: JS и React
- [x] написать запросы к API (~20 мин | 30 мин)
- [x] обработать ошибки от API (~10 мин | 10 мин)
- [x] создать роуты, наладить работу всех ссылок (~20 мин | 20 мин)
- [x] настроить фильтрацию при переключении между вкладками (~30 мин | 30 мин)
- [x] настроить сортировку: (~60 мин | пара вечеров :D)
  * [x] по алфавиту (по умолчанию)
  * [x] по дню рождения (список отображается от ближайшей даты дня рождения вниз) 
- [x] настроить поиск по имени, фамилии и никнейму (~40 мин | 80 мин)
- [ ] настроить отображение данных в профиле (~90мин)
- [x] создать кнопку назад в профиле (~15 мин | 15 мин)
<br>

### Этап 4: Дополнительное задание
- [ ] реализовать real-time отслеживание состояния сети устройства (~120 мин)
<br>

## Стек
* Create React App
* React Router
* Axios