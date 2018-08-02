module.exports = {
   
    url: 'https://www.imdb.com/', 
    elements: {
        //Sign-In Selectors
        signInLink: 'a.signin-other-options-text', 
        IMDBSignLink: 'span.auth-sprite imdb-logo retina ', 
        eInp: 'input[type="email"]', 
        pInp: 'input[type="password"]', 
        signingIn: 'input#signInSubmit', 
        watchList: 'li#navWatchlistMenu', 

        tester: {
            selector:'(//span[@class="auth-provider-text"])[4]', 
            locateStrategy: 'xpath'
        }, 
        //Watchlist Side-Pane Selectors
        //ad tests hit wall; ads do not show in automation. 
        //As though IMDB 'knows' it's automated
        adThumbnail: 'iframe#top_rhs.yesScript', 
        adFeedback: 'a.yesScript', 
        adFeedbackII: 'iframe#ad_feedback_container', 
        closeAdFeedback: {
            selector: '//span[text()="X"]', 
            locateStrategy: 'xpath'
        }, 
        createNewList: 'span.oneline', 
        form: 'form#list-create-form',
        listName: 'textarea#list-create-name', 
        listDescription: 'textarea#list-create-description', 
        createButton: {
            selector: '//button[text()="CREATE"]', 
            locateStrategy: 'xpath'
        }, 
        addSearch: 'input#add-to-list-search', 
        firstResult: {
            selector: '//span[text()="A.I. Artificial Intelligence"]', 
            locateStrategy: 'xpath'
        }, 
        filmIsThere: 'div.lister-item-content', 
        doneBtn: {
            selector: '//button[text()="Done"]', 
            locateStrategy: 'xpath'
        }, 
        auxWidget: 'div.aux-content-widget-2'










         

    }
}