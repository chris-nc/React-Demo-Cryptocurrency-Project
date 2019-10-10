export const apiParams = {
    url: "https://bravenewcoin-v1.p.rapidapi.com/ticker",
    queryParams: {
        show: 'USD'
    },
    apiRequestHeaders: {
        'method': 'GET',
        'headers': {
        'x-rapidapi-host': 'bravenewcoin-v1.p.rapidapi.com',
        'x-rapidapi-key': '3ce47e950amsh3c2eed18696ee92p168fd4jsn4e7c4e127272'
        }
    }
}

export const apiUrlString = (coinId) => `${apiParams.url}?show=${apiParams.queryParams.show}&coin=${coinId}`

export const currencyFormat = (unformattedAmount) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(unformattedAmount)