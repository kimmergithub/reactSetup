NOTES:
==============

1. npm init
2. npm install the dependencies
  DevDependencies
    - babel-core
    - babel-loader
    - babel-preset-es2015
    - babel-preset-react
    - webpack
    - webpack-dev-server

  Dependencies
    - react
    - react-dom

  3. change start === npm run build
  4. Package.json === add BUILD after "Start"
    - "build": "webpack -d && webpack-dev-server --content-base src/ --inline --hot --port 1234"

  5. build your webpack.config.js file === root level
    - make sure you have the file contents below:

  6. npm start








BELOW

    webpack.config.js file content

    const path = require('path');
  //gives path module provided by node.js allowing us to grab the correct paths
  module.exports = {

   entry: path.resolve(__dirname, 'src') + '/app/index.js',
    //providing entry js file and path. Using path module required above, saying look in current directory, then in the src folder then give index.js file (seems like an over complicated way to write a file path??)
    output: {
      path: path.resolve(__dirname, 'dist') + '/app',
      filename: 'bundle.js',
      publicPath: '/app/'
    },
    module: {
      loaders: [
        {
          test:/\.js$/,
          include: path.resolve(__dirname, 'src'),
          loader: 'babel-loader',
          query: {
            presets: ['react', 'es2015']
          }
        },
        {
          test: /\.css$/,
          loader:'style-loader!css-loader'
        }
      ]
    }
  };
  //we are exporting this module object, it's going to translate
  //Path
  //Windows vs. POSIX(Operating system for unix)
       //When working on a windows machine your path results will
       //differ than when working with POSIX
       //to achieve consistent result for linux use path.posix.basename('filepaths')
       //for windows use path.win32.basname(path)
  //path.basename(path[, ext])
      //refer above. path.basename(path[, ext]) ;
      //path.basename('/foo/bar/baz/asdf/quux.html');
      // Returns: 'quux.html'
      //path.basename('/foo/bar/baz/asdf/quux.html', '.hmtl');
      //Returns: 'quux'
  //path.delimiter
      //console.log(process.env.PATH);
      // Prints: 'C:\Windows\system32;C:\Windows;C:\Program Files\node\'
      //process.env.PATH.split(path.delimiter);
      // Returns ['C:\\Windows\\system32', 'C:\\Windows', 'C:\\Program Files\\node\\']
  //path.dirname(path)
      //path.dirname('/foo/bar/baz/asdf/quux');
      // Returns: '/foo/bar/baz/asdf'
  //path.extname(path)
     //path.extname('index.html');
     // Returns: '.html'
     //path.extname('index.coffee.md');
     // Returns: '.md'

    //path.extname('index.');
     // Returns: '.'

    //path.extname('index');
     // Returns: ''

    //path.extname('.index');
     // Returns: ''
  //path.format(pathObject)
     //the opposite of path.parse();
     //returns a path string from an object
  //path.isAbsolute(path)
     //returns a boolean value
     //returns true or false as to whether the path is absolute
  //path.join([...paths])
     //joins all the path segments
     //path.join('/foo', 'bar', 'baz/asdf', 'quux', '..');
     // Returns: '/foo/bar/baz/asdf'
  //path.normalize(path)
     //gets rid of trailing separators
  //path.parse(path)
     //path.parse('/home/user/dir/file.txt');
     // Returns:
       // { root: '/',
       //   dir: '/home/user/dir',
       //   base: 'file.txt',
       //   ext: '.txt',
       //   name: 'file' }
  //path.posix
       //not for windows - specific to POSIX
  //path.relative(from, to)
      //path.relative('C:\\orandea\\test\\aaa', 'C:\\orandea\\impl\\bbb');
      // Returns: '..\\..\\impl\\bbb'
  //path.resolve([...paths])
      //resolves 2 paths into an absolute path
  //path.sep
      //'foo\\bar\\baz'.split(path.sep);
      // Returns: ['foo', 'bar', 'baz']
  //path.win32
      //specific to windows.
