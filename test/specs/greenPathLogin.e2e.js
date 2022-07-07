// Чтобы выделить весь файл - ctrl + A
// Чтобы закоментировать - ctrl + /

const assert = require('node:assert')

describe("My Login application", () => {
  it("should login with valid credentials", async () => {
    await browser.url(`/login`);
    await browser.pause(1000)

    let username = await browser.$('#username');
    await username.setValue('tomsmith');

    let password = await browser.$('#password');
    await password.setValue('SuperSecretPassword!');

    let loginButton = await browser.$('#login > button');
    await loginButton.click();

    let flash = await browser.$('#flash')
    await browser.waitUntil(async () => {
        return flash.isDisplayed();
    });

    let flashStyle = await flash.getAttribute('class')
    if (flashStyle !== 'flash success') {
        throw new Error('flash no success!')
    }

    let expectedText = 'You logged into a secure area!\n×';
    let actualText = await flash.getText();

    await browser.pause(5000)
    assert.equal(actualText, expectedText, "Текст не равняется!!")
  });
});

