// karma.conf.js
process.env.CHROME_BIN = require('puppeteer').executablePath()

module.exports = function KarmaConfig(config) {
    config.set({
        basePath: '.',
        frameworks: ["jasmine", "karma-typescript"],
        files: [
            "test/**/*.ts" // *.tsx for React Jsx
        ],
        preprocessors: {
            "**/*.ts": "karma-typescript" // *.tsx for React Jsx
        },
        reporters: ["progress", "karma-typescript"],
        browsers:[
            "ChromeHeadless"
        ],
        karmaTypescriptConfig: {
            compilerOptions: {
                lib: ["ES2015", "DOM"],
                target: "es6"
            }
        },
    });
};