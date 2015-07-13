#Input type="range" sass

This is a sass snippet to style the beloved input type="range" a little easier.

##Why
When it comes to styling an input[type="range"] the fix is not to vendor-prefix the properties but to vendor-prefix the selectors. 

This snippet should provide an easier approach. 

##How To 

@include the range.sass in your project.

Adjust the variables to match your project. 

use the mixin "input-type-range" on your input[type=range]


##Demo Setup

You need node & npm for this, if you don't have it just follow the steps [here](http://blog.nodeknockout.com/post/65463770933/how-to-install-node-js-and-npm)


####Throw this at your console

    $ npm install
    $ webpack-dev-server
    

http://localhost:8080/webpack-dev-server/ is the place to go after that.



inspired by https://css-tricks.com/styling-cross-browser-compatible-range-inputs-css/