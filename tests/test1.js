let inputData = {
    zip: '90001'
}

let IMDb = {}
module.exports = {
    before: browser => {
        IMDb = browser.page.IMDb()
        IMDb.navigate()
    },
    after: browser => {
        browser.end()
    },
    // https://dmutah.atlassian.net/browse/IMDB-40
    'Test and Retrieve Showtimes': browser => {
        IMDb
        .waitForElementVisible('@showtimes', 10000)
        .click('@showtimes')
        browser.pause(8000)
        IMDb
        .waitForElementVisible('@changeShowtime', 10000)
        .click('@changeShowtime')
        .clearValue('@zipCode')
        .setValue('@zipCode', inputData.zip)
        .waitForElementVisible('@go', 10000)
        .click('@go')
        .waitForElementVisible('@localTheater', 10000)
        .getText('@localTheater', function(result) {
            console.log(result.value)
        })
        .getText('@localTheaterInfo', function(result) {
            console.log(result.value)
        })
        //NARF Blaster
    }
}