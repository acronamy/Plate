
const { join } = require('path');
const { resolve } = require('path');

function buildBackend(args){
    return {
        mode: "development",
        resolve: {
            extensions: ['.ts', '.js'],
            alias: {
                "@plate/core": resolve(__dirname, 'node_modules/@plate/core/main.ts'),
            }
        },
        devtool: 'source-map',
        entry: './src/root.module.ts',
        target: 'node',
        output: {
            libraryTarget: 'commonjs',
            path: join(__dirname, 'build'),
            filename: 'plate.server.js'
        },
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    loader: 'awesome-typescript-loader'
                }
            ]
        },
    };
}

function buildFrontend(){

}

module.exports = function main(env){
    if(env.target === "backend"){
        return buildBackend(env);
    }
    if(env.target === "frontend"){
        return buildFrontend(env);
    }
}