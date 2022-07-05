# Webdriver.IO Lesson

Создать папку для проекта

Открыть ее через терминал и VS Code

В терминале прописать команду из этой инструкции - https://webdriver.io/docs/gettingstarted

`npm init wdio .`

(точка в конце обязательна)

Программа задаст пару вопросов:
```
? Where is your automation backend located? On my local machine
? Which framework do you want to use? mocha
? Do you want to use a compiler? No!
? Where are your test specs located? ./test/specs/**/*.js (здесь просто нажать Enter)
? Do you want WebdriverIO to autogenerate some test files? Yes
? Do you want to use page objects (https://martinfowler.com/bliki/PageObject.html)? No
? Which reporter do you want to use? spec
? Do you want to add a plugin to your test setup? (здесь просто нажать Enter)
? Do you want to add a service to your test setup? chromedriver
? What is the base url? http://localhost (здесь просто нажать Enter)
? Do you want me to run `npm install` Yes 
```
После этого должно сгенерироваться тестовые файлы.

В файле `example.e2e.js`, нужно зазделить один тест на 3 мелких шага и запустить тесты командой `npm run wdio`

Дополнительно - решение можно загрузить в отдельный репозиторий в гитхабе и скинуть ссылку. 


Доп. материалы:

https://www.youtube.com/playlist?list=PLP1-M5OhC7yjAZ1-llDH45nxLfKKbcxGe

[Как работает Selenium WebDriver](https://blog.skillfactory.ru/glossary/selenium-webdriver/)

[Локаторы](https://software-testing.ru/library/testing/testing-for-beginners/3420-poisk-optimalnyh-lokatorov-dlya-nachinayushchih)