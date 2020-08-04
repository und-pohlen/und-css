'use strict';
const fractal = module.exports = require('@frctl/fractal').create();

fractal.set('project.title', 'und CSS');
fractal.components.set('path', __dirname + '/styleguide/components');
fractal.web.set('static.path', __dirname + '/dist');
fractal.web.set('builder.dest', __dirname + '/dist');
fractal.docs.set('path', __dirname + '/styleguide/docs');
