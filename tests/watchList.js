let surf = {};

//login data will be provided upon request
let letMeIn = {
    mail: '',
    pass: ''
};



let fillMeIn = {
    title: 'Movies for Robots',
    description: 'Does not Compute...',
    filmOne: 'A.I.',
    filmTwo: 'Terminator 2'
};

module.exports = {
    beforeEach: browser => {
        surf = browser.page.IMDB_Max()
        surf.navigate()
    },
    after: browser => {
        browser.end()
    },

    'logIn': browser => {
        surf
            .waitForElementVisible('@signInLink', 2000)
            .click('@signInLink')
            .waitForElementVisible('@tester', 5000)
            .click('@tester')
            .waitForElementVisible('@eInp', 2000)
            .setValue('@eInp', letMeIn.mail)
            .setValue('@pInp', letMeIn.pass)
            .click('@signingIn')


    },
    'SidePane create a new list': browser => {
        surf
            .waitForElementVisible('@watchList', 2000)
            .click('@watchList')
            .waitForElementVisible('@createNewList', 2000)
            .click('@createNewList')
            .verify.visible('@form')
            .setValue('@listName', fillMeIn.title)
            .setValue('@listDescription', fillMeIn.description)
            .api.pause(1000)
        surf
            .moveToElement('@createButton', 2, 2)
            .click('@createButton')
            .waitForElementVisible('@addSearch', 3000)
            .setValue('@addSearch', fillMeIn.filmOne)

            .click('@addSearch')

        surf
            //first result varies, IMDB throws a curveball, just 
            //run this test a few times extra, first result is 'usually'
            //A.I. Artificial Intelligence as intended. 
            .click('@firstResult')
            .waitForElementVisible('@filmIsThere', 3000)
            .click('@doneBtn')
            .api.pause(1000)
        surf
            .click('@watchList')

    },
  }