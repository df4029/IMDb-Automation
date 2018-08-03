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
        createLbut: {
            selector:'//button[text()="CREATE"]',
            locateStrategy:'xpath'},
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
        auxWidget: 'div.aux-content-widget-2',

        //Homepage
        showtimes: 'a[href="/showtimes/?ref_=nv_tp_sh_3"]',
        signInButton: 'a[id="nblogin"]',
        dropDown: 'a[id="nbusername"]',
        siteSettings: 'a[href="/registration/accountsettings?ref_=nv_usr_pers_1"]',
        logout: 'a[id="nblogout"]',

        //Login Options Screen
        IMDbSignIn: {
            selector: '(//span[@class="auth-provider-text"])[4]',
            locateStrategy: 'xpath',
        },
        //IMDb Sign in Page
        IMDbEmailInput: 'input[type="email"]',
        IMDbPasswordInput: 'input[type="password"]',
        IMDbSubmit: 'input[id="signInSubmit"]',
        //siteSettings and lists
        changeYourName: 'a[href="/registration/changename"]',
        changeYourEmail: 'a[href="/registration/changeemail"]',
        changeYourPassword: 'a[href="/registration/changepassword"]',
        //dans buttons
        lists1: 'a[href="/user/ur90651178/lists?ref_=nv_usr_lst_3"]',
        createList: 'a[href="/list/create?ref_=uspf_cr_ls_wdg"]',
        listTitle: '#list-create-name',
        listDescrip: '#list-create-description',
        addListsearch: '#add-to-list-search',
        godF1: 'a[data-const="tt0068646"]',
        godF2: 'a[data-const="tt0071562"]',
        godF3: 'a[data-const="tt0099674"]',
        listDone: '//button[text()="Done"]',
        Godfather1: 'a[href="/title/tt0068646/?ref_=ttls_li_tt"]',
        //Godfather2:
       // Godfather3:

        //Change your Name page
        changeNameInput: 'input[name="realName"]',
        changeNameButton: 'input[class="pretty_btn"]',
        success: 'div[class="success"]',
        //Change your Password page
        currentPassword: 'input[id="ap_password"]',
        newPassword: 'input[id="ap_password_new"]',
        reenterPassword: 'input[id="ap_password_new_check"]',
        passwordSaveButton: 'input[class="a-button-input"]',
        //Showtimes
        pooh: 'img[src="https://m.media-amazon.com/images/G/01/IMDb/design/a/2018/aerec/000-5-day-prototype/close._V488906979_.png"]',
        changeShowtime: 'span[class="edit-show"]',
        zipCode: 'input[name="zipcode"]',
        go: 'input[type="submit"]',
        localTheater: {
            selector: '(//a[@itemprop="url"])[1]',
            locateStrategy: 'xpath',
        },
        localTheaterInfo: {
            selector: '(//div[@class="address"])[1]',
            locateStrategy: 'xpath',
        },










         

    }
}