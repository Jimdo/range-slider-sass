#Input type="range" sass mixin

This is a sass snippet to style the beloved input type="range" a little easier.

[demo](http://jimdo.github.io/range-slider-sass/)

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


##Contributing

Issues and pull requests are absolutely welcome!

##Credits

When you like this please give [Daniel Stern](https://twitter.com/danieljackstern) a follow as he has done the awesome things to improve range-css styling:
 * [range.css](https://github.com/danielstern/range.css)
 * [css-tricks article ](https://css-tricks.com/styling-cross-browser-compatible-range-inputs-css/)
 * [neat range css generator](http://danielstern.ca/range.css/#/)


##License

> The MIT License
> 
> Copyright (c) 2015 Jimdo GmbH http://jimdo.com
> 
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
> 
> The above copyright notice and this permission notice shall be included in
> all copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
> THE SOFTWARE.
