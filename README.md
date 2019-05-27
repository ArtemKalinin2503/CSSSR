# webpackBundlers
Сборка проекта на webpack 4

Данная сборка позволяет запускать проект на webpack 4:
- Работа с JS (JS минимизируется и складывается в один файл)
- Работа со стилями (Css, Less, Sass)
- Babel
- Webpack dev-server (локальный сервер)

!Если проблема с node-sass:
sudo npm install --save-dev  --unsafe-perm node-sass

!Если после повторного запуска webpack-web-server
Тогда нужно изменить порт в webpack.config.js

Ссылка на уроки:
https://webformyself.com/category/premium/javascript-premium/webpackpremium/

Ссылка на документацию:
https://webpack.js.org/

Команды для запуска проекта:
- npm run dev (сборка для разработчиков)
- npm run dev:watch (вотчинг за изменениями в проекте)
- npm run build (сборка билда)
- npm run start (запуск сервера)
