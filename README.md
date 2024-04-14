## Getting Started

Тестовое задание React Developer (Next.js)

- Проект полностью адаптирован под мобильные устройства и планшеты, благодаря использованию брейкпоинтов в тейлвинде.

- Отзывы и товары наполнены реквестами по API, но на момент написания этого редми я не сделал инфинит скрол при скроле товаров, хотя у меня уже и бывали его реализации в других проектах.

- В консоли могут быть ошибки об одинаковых значениях ключей, но это проблема бэкенда, ибо ревью приходят с одинаковым айди.

- Вся логика связанная с добавлением и изменением товаров в корзине сделана, с использованием редакса. Еще следовало бы добавить возможность удалить товар из корзины или посмотреть стоимость за все товары в ней. Подобное я уже реализовывал в другом своем проекте [здесь](https://github.com/Kadgar782/ChocolateLanding/blob/main/app/components/cart/cartProduct.tsx)
- Все набранные товары сохраняются при обновление страницы, а вот про телефон я не заметил, но сделать его можно так же через стейт в редаксе, либо хранить локально в локальном или сессионом хранилище, что менее надежно.

- Маска для телефона реализована через тип поля input.

- Сделаны вся логика связанная с отправкой POST реквеста и отображениями уведомлений.

- Из личный мыслей по поводу улучшения проекта, можно было бы как минимум вынести корзину в отдельную страницу, потому что листать к ней после добавления товара в нее как-то странно и не удобно. Туда же перенести все манипуляции с количеством товара в корзине.
  Сделать какую-то авторизацию и регистрацию не помешало бы, иначе это абсолютно не безопасно.
  Добавить систему рейтинга для товаров, а так же фильтрацию и поиск.
  Из мелочей добавить в отзывы изображение тех, кто их оставил.

Запустить все это можно командой

```bash
npm run dev


```
