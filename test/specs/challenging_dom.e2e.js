describe('challenging_dom', () => {
    it('challenging_dom', async () => {
        await browser.url(`/challenging_dom`);

        // css selector example
        // let element = await browser.$('table tbody > tr:nth-child(3) > td:nth-child(2)')
        
        // xpath example
        let element = await browser.$('//table/tbody/tr[3]/td[2]')

        let text = await element.getText();
        expect(text).toBe('Apeirian2');
    });
});

