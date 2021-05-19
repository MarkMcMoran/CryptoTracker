async function getCryptoPrice() {
    fetch = jest.fn(() => Promise.resolve());

    const data = await fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest');

    if (!data || Object.keys(data).length < 1) {
        return false;
    }

}

describe('Calling the GetCryptoPrice function', () => {
    it('Returns false ', async () => {
        const value = await getCryptoPrice();

        expect(value).toBe(false);
    })
});
