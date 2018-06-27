#!/usr/bin/env node
const { argv } = require("yargs");
const { spawn } = require("child_process");
const { join } = require('path');
const { cyan, red } = require('colors');

//process
process.env.FORCE_COLOR = true;
//config
const automationPattern = join(process.cwd(),'src/','/**/*.auto.ts');
const automationConfig = {
    env: process.env
}
//message utils
const log = console.log;
const buildFailedMessage = (nthErrors)=> `
------------------------------------------------------------------------
TESTS FAILED ${nthErrors ? "with "+nthErrors+" errors!" : ""}
------------------------------------------------------------------------
`.red;
const buildSuccessMessage = `
------------------------------------------------------------------------
TESTS SUCCESS
------------------------------------------------------------------------
`.green;


//build status
const build = {
    automatedTests: true,
    unitTests: true
}

if( argv.test === 'automation' ){
    log(cyan('Starting automated test suite.'));
    const sscAutomationTests = spawn(`mocha`,["-r",'ts-node/register',automationPattern], automationConfig);
    
    sscAutomationTests.stdout.on('data', data => console.log(`${data}`.trim()) );
    sscAutomationTests.stderr.on('data', data => console.log(red(data.toString())) );
    sscAutomationTests.on('close', code => {
        if(code > 0){
            build.automatedTests = false;
            if(build.automatedTests){
                console.log(buildSuccessMessage);
            }
            else{
                console.log(buildFailedMessage(code));
            }
            
        }
    });
    
};

if( argv.test === 'unitTest' ){
    log(cyan('Starting unit test suite.'));
    //const unitTest = spawnSync(`karma`,['start','karma.conf.js'], {stdio:'inherit'});
};