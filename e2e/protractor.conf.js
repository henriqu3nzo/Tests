module.exports.config = {
    seleniumAdress: 'https://localhost:4444/wd/hub',

    capabilities: {
        'browserName': 'chrome'
    },

    specs: ['specs/*.spec.js'],

    baseUrl: 'https://www.protractortest.org/'
}