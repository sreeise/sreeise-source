# sreeise-source
Source code for sreeise.me. This is my personal portfolio site.

### Dependencies:

Clone Repo: git clone https://github.com/sreeise/sreeise-source.git

If you have node, just clone the repo and run <code>npm install</code>

Then, in the top level directory of the site run <code>webpack-cli</code> to build with Webpack.

Running npm install is much easier but it if issues arise,
Get dependencies individually:

html5-boilerplate: <code>npm install html5-boilerplate</code>

or go their website at https://html5boilerplate.com

Webpack: <code>npm i --save-dev webpack</code>

Webpack-cli <code>npm i --save-de webpack-cli</code>

or go to the Webpack site at https://webpack.js.org/



### Directories

src will hold any custom and vendor JavaScript unless it is a node module. Webpack will all of the JS in dist/js which
has been configured in webpack.config.js

The dist directory holds all the site contents including any css and html. It is my intention
to prevent using webpack plugins to convert html and css, but this may change in the future.
