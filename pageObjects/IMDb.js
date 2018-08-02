module.exports = {
    url: 'https://www.imdb.com/',
    elements: {
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
        //siteSettings
        changeYourName: 'a[href="/registration/changename"]',
        changeYourEmail: 'a[href="/registration/changeemail"]',
        changeYourPassword: 'a[href="/registration/changepassword"]',
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
//813/.54 22
    }
}