let loginData = {
    
    email: 'df4029@gmail.com',
    password: 'godfather',}

let godFather ={
    godList: 'Godfather Movies',
    god1: 'The Godfather',
    god2: 'The Godfather Part II',
    god3: 'The Godfather Part III',
}
    

let IMDb = {}
module.exports = {
    before: browser => {
        IMDb = browser.page.pageObject()
        IMDb.navigate()
    },
    after: browser => {
        browser.end()
    },
    
    //using Bryen's code to login
    'Sign In, Go to Lists, Make List of Godfather Movies. DF': browser => {
        IMDb
        //Sign In
        .waitForElementVisible('@signInButton', 10000, 'sign in good')
        .click('@signInButton')
        .waitForElementVisible('@IMDbSignIn', 10000)
        .click('@IMDbSignIn')
        .waitForElementVisible('@IMDbEmailInput', 10000)
        .setValue('@IMDbEmailInput', loginData.email)
        .setValue('@IMDbPasswordInput', loginData.password)
        .click('@IMDbSubmit')
        // click the lists element. 
        .waitForElementVisible('@dropDown', 10000)
        .moveToElement('@dropDown', 5, 5)
        .waitForElementVisible('@lists1', 10000)
        .click('@lists1')
        browser.pause(10000)
        IMDb
        //create list
        .waitForElementVisible('@createList', 10000)
        .click('@createList')
        browser.pause(10000)
        IMDb
        .waitForElementVisible('@listTitle', 10000)
        .setValue('@listTitle', godFather.godList)
        .setValue('@listDescrip', godFather.godList)
        .click('@createLbut')
        //add movies
        browser.pause(5000)
        IMDb
        .waitForElementVisible('@addListsearch', 10000)
        .setValue('@addListsearch', godFather.god1)
        .waitForElementVisible('@godF1', 10000)
        .click('@godF1')
        browser.pause(5000)
        IMDb
        .waitForElementVisible('@addListsearch', 10000)
        .setValue('@addListsearch', godFather.god2)
        .click('@godF2')
        browser.pause(5000)
        IMDb
        .waitForElementVisible('@addListsearch', 10000)
        .setValue('@addListsearch', godFather.god3)
        .click('@godF3')
        browser.pause(5000)
        .click('@listDone')
        








}}