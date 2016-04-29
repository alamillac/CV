var Handlebars = require('handlebars/runtime');
Handlebars.registerHelper('isIndexEven', function(conditional, options) {
    if(((conditional + 1) % 2) === 0) {
        return options.fn(this);
    } else {
        return options.inverse(this);
    }
});
var templates = require("./templates.js")(Handlebars),
    $ = require("jquery"),
    userData = {
        es: require("json!../../data/user_es.json"),
        en: require("json!../../data/user_en.json")
    },
    appConfig = require("./appConfig.js");

var LANGUAGES = {es: "en", en: "es"},
    DEFAULT_LANG = appConfig.defaultLangCode || "es";

function changeLanguage(lang) {
    //validate lang
    nextLanguage = LANGUAGES[lang];
    if(!nextLanguage) {
        lang = "en";
        nextLanguage = LANGUAGES[lang];
    }
    var data = userData[lang] || {};
    console.log("Se ha cambiado el idioma a "+lang);

    //GET the hbs template
    data.nextLanguage = nextLanguage;
    var contentTpl = templates["views/index.hbs"](data);

    //Render the template
    $('body').html(contentTpl);
}

function setLanguageChangeEvent() {
    $('._change_language').one('click', function(event) {
        event.preventDefault();
        var lang = $(this).attr('href');
        changeLanguage(lang);

        //update the url
        window.history.pushState({lang: lang}, "", lang);

        setLanguageChangeEvent();
    });
}

//SET EVENTS
window.onpopstate = function(event) {
    var lang = event.state && event.state.lang;
    lang = lang || DEFAULT_LANG;
    changeLanguage(lang);
};

//MAIN
setLanguageChangeEvent();
