NOTES:
==============

1. npm init
2. npm install the dependencies
  -npm install webpack --save-dev


3. create app.js file inside the src folder

4. in TERMINAL
  - webpack ./src/app.js ./dist/app.bundle.js
  - THIS CREATES THE app.bundle.js file with appropriate stuff in it!

5. PRODUCTION MODE:
  - webpack ./src/app.js ./dist/app.bundle.js -p
  - this will minify the app.bundle.js file!

6. Watch MODE
  - webpack ./src/app.js ./dist/app.bundle.js -p --watch
  - this will watch for any changes in the app.js! and automatically save it to the bundle.js.

7. Create === webpack.config.js file at the root level!
      - this will mimic the terminal webpack command
      -
      - module.exports = {
        // This mirrors the webpack watch terminal command
        entry: './src/app.js',
        output: {
          filename: './dist/app.bundle.js'
        }
      };

9. Package.json script:
   - "dev": "webpack -d --watch"
   - now === npm run dev
  === to put in watch mode!

10. Package.json script:
  - "prod": "webpack -p"
  - puts it in production mode.

================================================
https://www.youtube.com/watch?v=cKTDYSK0ArI&index=2&list=PLkEZWD8wbltnRp6nRR8kv97RbpcUdNawY
  ================================
  1. index.html inside the dist folder.

  2. TERMINAL COMMMAND
    === npm install html-webpack-plugin --save-dev

  3. Bring in configurations for the html webpack file === which you are going to use to create your new html file!!!
  https://github.com/jantimon/html-webpack-plugin

  4. npm run dev
    - This will create the app.bundle.js if it doesn't exists
    - And the index.html     w/ the script for the app.bundle.js already linked.

  5. delete old index.html file.

  6. CUSTOMIZE your index.html template @ https://github.com/jantimon/html-webpack-plugin
  - learn more about that by rewatching this: https://www.youtube.com/watch?v=cKTDYSK0ArI&index=2&list=PLkEZWD8wbltnRp6nRR8kv97RbpcUdNawY

  7. Minification of the HTML is also possible in the video above.

================================================================================================
  https://www.youtube.com/watch?v=m7V0OackwxY&index=3&list=PLkEZWD8wbltnRp6nRR8kv97RbpcUdNawY
  ======================================================================================================
  CSS and Loaders
  1. npm install css-loader --save-dev

  2. Webpack.config.js
    - include the css configuration

    module: {
      rules: [
        // test for any .css files
        {test: /\.css$/, use: 'css-loader'}
      ]
    },

  3. require in the css file on the app.js file
  - const css = require('./app.css');

  4. npm run dev and check it in open in browser.
    -- nothing should happen because you need the style-loader

  5. npm install style-loader --save-dev

  6. go to webpack.config.js
    - add the style-loader!

    module: {
      rules: [
        // test for any .css files
        {test: /\.css$/, loaders: 'style-loader!css-loader'}
      ]
    },

    more appropriate

    module: {
      rules: [
        // test for any .css files
        {test: /\.css$/, use: ['style-loader','css-loader']}
      ]
    },

    - this makes sure that the js css can knew be understood in the index.html!
    - find information about this in the blogs - migrating v1 to v2

    7. npm install sass-loader node-sass --save-dev

    8. webpack.config.js
      -
      module: {
        rules: [
          // test for any .css files
          {test: /\.css$/, use: ['style-loader','css-loader', 'sass-loader']}
        ]
      },


    9. changs app.css to app.scss
    - now you can write scss.

    10. make sure you change all required .css to scss and webpack.config.js to .scss

    11. use the extract-text-webpack-plugin
    12. npm install extract-text-webpack-plugin --save-dev
good note in this video when you have capatability issues https://www.youtube.com/watch?v=m7V0OackwxY&index=3&list=PLkEZWD8wbltnRp6nRR8kv97RbpcUdNawY

make sure that you check the capatability guides if you have any problems on configuration with projects!  ALWAYS CHECK THE DOCS.

good thing to check if you have errors
https://webpack.js.org/guides/migrating/#extracttextplugin-extract


================================================================================================
https://www.youtube.com/watch?v=gH4LxB6NkNc&list=PLkEZWD8wbltnRp6nRR8kv97RbpcUdNawY&index=4
  webpack-dev-server
================================================================================================
1.  npm install webpack-dev-server --save-dev

2. package.json ===
'dev ' === "dev": "webpack-dev-server",

3. now npm run dev
 - it should work!

4. webpack-dev-server is quick and awesome on localhost:8080

5. WEBPACK DEV SERVER serves from memory and in dev mode it saves it to the dist.

6. dev server configurations

devServer: {
  contentBase: path.join(__dirname, "dist"),
  compress: true,
  port: 9000,
  stats: "errors-only",
  open: true
}

  7,


================================================================================================
  https://www.youtube.com/watch?v=zhA5LNA3MxE&list=PLkEZWD8wbltnRp6nRR8kv97RbpcUdNawY&index=6
  REACT && BABEL
================================================================================================

1. npm install react react-dom --save-dev

2. enable ES6 and JSX
-- npm install babel babel-preset-react babel-preset-es2015 --save-dev

3. create your .babelrc file

4. app.js
- import react from 'react';
- import reactDOM from 'reactDOM';

5. install babell
-- npm install babel-loader babel-core --save-dev

6. define rule in webpack.config.js
- 
