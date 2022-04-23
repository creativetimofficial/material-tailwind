const webpack = require('webpack');
const path = require('path');

module.exports = {  
  entry: './src/index.js',  
 output: {  
    filename: 'main.js',  
 path: path.resolve(__dirname, 'dist'),  
 },  
 module: {  
   rules: [  
      {  
        test: /\.m?js$/,  
        exclude: /(node_modules|bower_components)/,  
         use: {  
          // `.swcrc` can be used to configure swc  
             loader: "swc-loader"  
         }  
      }  
    ],  
 },  
};