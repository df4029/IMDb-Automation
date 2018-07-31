let inputData = {
    newName: 'Prince Philionel El Di Saillune',
    defaultName: 'Bryen North',
    email: 'bryen.north@gmail.com',
    password: 'imdbimdb',
    currentpw: 'x',
    newpw: '12345678',
//REMEMBER!! Whenever you run this test, the password has been changed, and the test needs to be altered.
// Replace all instances of inputData.password with inputData.newpw and vice versa
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
    // https://dmutah.atlassian.net/browse/IMDB-25
    'Sign In, Change Name, Change Password': browser => {
        IMDb
        //Sign In
        .waitForElementVisible('@signInButton', 10000)
        .click('@signInButton')
        .waitForElementVisible('@IMDbSignIn', 10000)
        .click('@IMDbSignIn')
        .waitForElementVisible('@IMDbEmailInput', 10000)
        .setValue('@IMDbEmailInput', inputData.email)
        .setValue('@IMDbPasswordInput', inputData.password)
        .click('@IMDbSubmit')
        .waitForElementVisible('@dropDown', 10000)
        //Change Name
        .moveToElement('@dropDown', 5, 5)
        .waitForElementVisible('@siteSettings', 10000)
        .click('@siteSettings')
        .waitForElementVisible('@changeYourName', 10000)
        .click('@changeYourName')
        .waitForElementVisible('@changeNameInput', 10000)
        .clearValue('@changeNameInput')
        .setValue('@changeNameInput', inputData.newName)
        .click('@changeNameButton')
        .waitForElementVisible('@success', 10000)
        .moveToElement('@dropDown', 5, 5)
        .waitForElementVisible('@siteSettings', 10000)
        .click('@siteSettings')
        .waitForElementVisible('@changeYourName', 10000)
        .verify.containsText('@dropDown', inputData.newName)
        .click('@changeYourName')
        .waitForElementVisible('@changeNameInput', 10000)
        .clearValue('@changeNameInput')
        .setValue('@changeNameInput', inputData.defaultName)
        .click('@changeNameButton')
        .waitForElementVisible('@success', 10000)
        .moveToElement('@dropDown', 5, 5)
        .waitForElementVisible('@siteSettings', 10000)
        .click('@siteSettings')
        .waitForElementVisible('@changeYourName', 10000)
        .verify.containsText('@dropDown', inputData.defaultName)
        //Change Password
        .click('@changeYourPassword')
        .waitForElementVisible('@currentPassword', 10000)
        .setValue('@currentPassword', inputData.password)
        .setValue('@newPassword', inputData.newpw)
        .setValue('@reenterPassword', inputData.newpw)
        .click('@passwordSaveButton')
        .waitForElementVisible('@success', 10000)
        .moveToElement('@dropDown', 5, 5)
        .waitForElementVisible('@logout', 10000)
        .click('@logout')
        .waitForElementVisible('@signInButton', 10000)
        .click('@signInButton')
        .waitForElementVisible('@IMDbSignIn', 10000)
        .click('@IMDbSignIn')
        .waitForElementVisible('@IMDbEmailInput', 10000)
        .setValue('@IMDbEmailInput', inputData.email)
        .setValue('@IMDbPasswordInput', inputData.newpw)
        .click('@IMDbSubmit')
        .waitForElementVisible('@dropDown', 10000)
    }
}