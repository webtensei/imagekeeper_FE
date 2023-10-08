# ImageKeeper FRONTEND
HOSTED: https://imagekeeper.webtensei.ru </br>  (попробуйте учетку webtensei@gmail.com / создайте новую)
BACKEND: https://github.com/webtensei/imagekeeper_BE

## Запуск

Два варианта
1. `yarn` && `yarn dev`
2. `yarn` && `yarn build` && `yarn start`
###### _порт по умолчанию 5001_

## Настройка

* Указать API_URL в http/index.ts
* next.config.js изменить domains на Ваш
</br>

###### Возможно использование без указания API_URL и domains Вашего сервера. На моём хосте запущен сервер, крутится в pm2, ручка проксируется nginx. CORS общий, работа только по https:
###### https://imagekeeper.webtensei.ru/api _Свагер не настроен_



## TODO

Отдельный файл лежит в папке проекта. Он показался мне интересным, хочу доделать и переделать некоторые моменты


