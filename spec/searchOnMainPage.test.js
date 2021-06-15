let detailsPage = require("../pages/details.page.js");
let mainPage = require("../pages/main.page.js");
let searchResultsPage = require("../pages/searchResults.page.js");


describe('Search on Main Page', () => {
    it('Search for dress', async () => {
        await mainPage.open();
        await mainPage.searchMain('Dress');
        expect(await searchResultsPage.searchResultsCount()).toBeGreaterThan(0);

        await searchResultsPage.selectFirstResult();
        expect(await detailsPage.getItemName()).toContain('Dress');
    });
});