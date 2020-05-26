# server express
Разработка бэкенда для проекта (Mesto)

# description
Финальная доработка бэкенда для проекта место.

Добавлено:
* Централизованная обработка ошибок
* Логирование запросов и ошибок
* Использование среды разработки NODE_ENV

Домены проекта:
* https://api.ra404.ru
* https://www.api.ra404.ru
* http://api.ra404.ru
* http://www.api.ra404.ru

# API 
* запрос GET /users возвращает всех пользователей из базы
* запрос GET /users/:userId возвращает конкретного пользователя
* запрос POST /users/signup создаёт пользователя (необходимо передать логин и пароль)
* запрос POST /users/signin осуществляет авторизацию пользователя
* запрос GET /users/crash-test роняет сервер :)
* запрос GET /cards возвращает все карточки всех пользователей
* запрос POST /cards создаёт карточку
* запрос DELETE /cards/:cardsId удаляет карточку

## How to install
1. Склонировать проект
* git clone git@github.com:RA404/backend14.git
2. Установите экпресс и пакеты
* npm init -y
* npm install express
* npm i body-parser
* npm install validator
* npm install bcryptjs
* npm install jsonwebtoken
* npm install cookie-parser
* npm install --save joi
* npm install --save helmet
* npm install dotenv
* npm install winston
* npm install express-winston
3. Установить зависимости для разработчика
* npm install nodemon -D
* npm install eslint --save-dev   
* npm i eslint-config-airbnb-base --save-dev
* npm i eslint-plugin-import --save-dev
4. Установить mongodb
5. Установить mongoose для взаимодействия с mongodb
* npm i mongoose
6. Запустить mongo
* Зайти в папку bin mongodb
* В терминале запустить команду $ mongod --dbpath <путь к базе данных>
* В новом окне терминала запустить команду mongo
7. Запустить сервер в среде для разработки
* Из папки с проектом запустить команду npm run dev
8. Запустить продакшн версию
* Из папки с проектом запустить команду npm run start

# Project link 
[https://github.com/RA404/backend14](https://github.com/RA404/backend14)

## Version v0.0.1
v0.0.1 - первая версия проекта

v0.0.2 - добавлены централизованная обработка ошибок, запись логов запросов и ошибок 