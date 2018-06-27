process.env.CHROME_BIN = require('puppeteer').executablePath();

module.exports = function(config) {
    config.set({
        frameworks: ["mocha", "karma-typescript"],
        basePath: '.',
        preprocessors: {
            "**/*.ts": "karma-typescript"
        },
        files: [
            { pattern: 'spec/**/*.spec.ts' },
        ],
        karmaTypescriptConfig: {
            "compilerOptions": {
                "target": "es6",
                "module": "commonjs",
                 "lib": [
                   "dom",
                   "es6"
                 ]
            },
        },
        singleRun:true,
        mime: {
            'text/x-typescript': ['ts']
        },
        reporters: ["progress", "karma-typescript"],
        browsers: ["ChromeHeadless"],
        plugins: [
            'karma-mocha',
            'karma-chrome-launcher',
            'karma-typescript'
        ]
    });
};

process.on('exit',()=>{
    console.log('END')
});