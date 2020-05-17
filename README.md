# server express
Разработка бэкенда для проекта (Mesto)

# description
Подключение к базе данных MongoDB

# API 
* запрос GET /users возвращает всех пользователей из базы
* запрос GET /users/:userId возвращает конкретного пользователя
* запрос POST /users создаёт пользователя
* запрос GET /cards возвращает все карточки всех пользователей
* запрос POST /cards создаёт карточку
* запрос DELETE /cards/:cardsId удаляет карточку

## How to install
1. Склонировать проект
* git clone git@github.com:RA404/backend13.git
2. Установите экпресс и пакеты
* npm init -y
* npm install express
* npm i body-parser
* npm install validator
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
[https://github.com/RA404/backend13](https://github.com/RA404/backend13)

## Version v0.0.1
v0.0.1 - первая версия проекта