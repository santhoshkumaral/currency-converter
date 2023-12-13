// Mock API function to simulate fetching currency rates
const fetchCurrencyRates = () => {
    return new Promise((resolve) => {
        const mockRates = {
            USD: 1,
            EUR: 0.85,
            GBP: 0.73,
            AUD: 1.37,
            INR: 0.83,
            // Add more currencies as needed...
        };

        setTimeout(() => {
            resolve(mockRates);
        }, 100); // 1-second delay
    });
};

export default fetchCurrencyRates;
