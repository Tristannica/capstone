import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

          <head>
            <meta charset="utf-8" />
            <title>SiteSpy</title>0

            <script src="http://use.typekit.com/bqa1ehi.js"></script>
            <script>try{Typekit.load()}catch(e){}</script>

            <style media="screen">


              body {
                font-family: 'Proxima Nova','proxima-nova-1','proxima-nova-2', 'Helvetica Neue', Arial, sans-serif;
                margin: 0;
                padding: 0;
              }

              section, header {
                display: block;
              }

              #container {
                position: relative;
                width: 900px;
                margin: 10px auto;
              }

              section {
                width: 900px;
                height: 540px;
                margin-bottom: 80px;
                position: relative;
                z-index: 1;
              }

              #grid {
                width: 900px;
                height: 540px;
                position: absolute;
                display: none;
              }

              #grid div {
                float: left;
                width: 99px;
                height: 59px;
                border-left: 1px solid #DDD;
                border-bottom: 1px solid #DDD;
              }

              #grid .target {
                width: 300px;
                height: 180px;
                background: hsla( 0, 100%, 50%, 0.2 );
                position: absolute;
                left: 300px;
                top: 180px;
              }

              h1, h2, p {
                margin: 0 0 15px;
              }

              section header {
                padding: 0 10px;
              }

              section h2 {
                font-size: 28px;
                line-height: 30px;
              }

              p {
                background: hsla( 0, 0%, 0%, 0.3 );
                height: 15px;
              }

              .w3, .w6, .w2 {
                position: absolute;
                margin: 0 10px;
                padding-top: 15px;
              }

              .w2 { width: 140px; }

              .w3 { width: 280px; }
              .w3.box { width: 250px; }

              .h3.box { height: 150px; }
              .h3.box .img { line-height: 150px; }

              .h6.box { height: 315px; }
              .h6.box .img { line-height: 315px; }

              .w6 { width: 580px; }
              .w6.box { width: 550px; }

              .x3 { left: 300px; }
              .x6 { left: 600px; }

              .z3 { right: 300px; }
              .z6 { right: 600px; }

              .q3 { bottom: 180px; }
              .q6 { bottom: 360px; }

              .y3 { top: 180px; }
              .y6 { top: 360px; }

              .box {
                padding-top: 0;
                border: 5px solid;
                padding: 10px;
              }

              .img {
                /*background: hsla( 0, 0%, 0%, 0.3 );*/
                color: white;
                text-align: center;
                height: 100%;
                font-size: 100px;
              }

              /* nav */

              #nav {
                padding: 0;
                margin: 0 auto 10px;
                overflow: auto;
                width: 880px;
                position: relative;
                z-index: 100;
              }

              #nav li {
                list-style: none;
                float: left;
                font-weight: bold;
              }

              #nav li a {
                text-decoration: none;
                display: block;
                background: #EEF;
                background: hsla( 0, 0%, 90%, 0.85 );
                color: blue;
                padding: 8px 15px;
              }

              #nav li a:hover {
                background: red;
                color: white;
              }



              /* Section-specific layout */

              #web-dev h1 {
                font-size: 100px;
                font-weight: 600;
                line-height: 105px;
              }

              #front-end header,
              #css header,
              #css3 header { padding-top: 0;}

              #front-end h1 {
                line-height: 85px;
                font-size: 92px;
              }

              #css header,
              #css3 header { padding: 0;}

              #css h1 {
                font-size: 150px;
                line-height: 180px;
              }

              #css3 h1 {
                font-size: 110px;
                line-height: 105px;
              }

              #transforms h1 {
                font-size: 160px;
                line-height: 180px;
              }

              /* Section colors */

              #web-dev { color: hsl(336, 100%, 50%); }
              #web-dev p, #web-dev .img { background: hsla(0, 0%, 100%, 0); }

              #front-end { color: hsl(37, 94%, 56%); }
              #front-end p, #front-end .img { background: hsla(0, 0%, 100%, 0); }

              #css { color: hsl(298, 90%, 44%); }
              #css p, #css .img { background: hsla(0, 0%, 100%, 0); }

              #css3 { color: hsl(178, 100%, 50%); }
              #css3 p, #css3 .img { background: hsla(0, 0%, 100%, 0); }

              #transforms { color: hsl(120, 100%, 50%); }
              #transforms p, #transforms .img { background: hsla(0, 0%, 100%, 0); }




              /* step 2 */

              .csstransforms #content {
                position: absolute;
                width: 900px;
                height: 540px;
              }

              .csstransforms section {
                position: absolute;
              }

              .csstransforms #front-end {
                -webkit-transform: scale(0.3333);
                   -moz-transform: scale(0.3333);
                     -o-transform: scale(0.3333);
                        transform: scale(0.3333);
              }

              .csstransforms #css {
                -webkit-transform: scale(0.1111);
                   -moz-transform: scale(0.1111);
                     -o-transform: scale(0.1111);
                        transform: scale(0.1111);
              }

              .csstransforms #css3 {
                -webkit-transform: scale(0.037);
                   -moz-transform: scale(0.037);
                     -o-transform: scale(0.037);
                        transform: scale(0.037);
              }

              .csstransforms #transforms {
                -webkit-transform: scale(0.0123456);
                   -moz-transform: scale(0.0123456);
                     -o-transform: scale(0.0123456);
                        transform: scale(0.0123456);
              }



              /* step 3 */

              /* set arbitrary height on proxy scroller */
              .csstransforms #scroller { height: 4000px; }

              /* prevent content from scrolling */
              .csstransforms #wrap {
                position: fixed;
                width: 100%;
              }



            </style>

            <script>



              /* Modernizr custom build of 1.7: csstransforms | csstransitions | iepp */
              window.Modernizr=function(a,b,c){function G(){}function F(a,b){var c=a.charAt(0).toUpperCase()+a.substr(1),d=(a+" "+p.join(c+" ")+c).split(" ");return!!E(d,b)}function E(a,b){for(var d in a)if(k[a[d]]!==c&&(!b||b(a[d],j)))return!0}function D(a,b){return(""+a).indexOf(b)!==-1}function C(a,b){return typeof a===b}function B(a,b){return A(o.join(a+";")+(b||""))}function A(a){k.cssText=a}var d="1.7",e={},f=!0,g=b.documentElement,h=b.head||b.getElementsByTagName("head")[0],i="modernizr",j=b.createElement(i),k=j.style,l=b.createElement("input"),m=":)",n=Object.prototype.toString,o=" -webkit- -moz- -o- -ms- -khtml- ".split(" "),p="Webkit Moz O ms Khtml".split(" "),q={svg:"http://www.w3.org/2000/svg"},r={},s={},t={},u=[],v,w=function(a){var c=b.createElement("style"),d=b.createElement("div"),e;c.textContent=a+"{#modernizr{height:3px}}",h.appendChild(c),d.id="modernizr",g.appendChild(d),e=d.offsetHeight===3,c.parentNode.removeChild(c),d.parentNode.removeChild(d);return!!e},x=function(){function d(d,e){e=e||b.createElement(a[d]||"div");var f=(d="on"+d)in e;f||(e.setAttribute||(e=b.createElement("div")),e.setAttribute&&e.removeAttribute&&(e.setAttribute(d,""),f=C(e[d],"function"),C(e[d],c)||(e[d]=c),e.removeAttribute(d))),e=null;return f}var a={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return d}(),y=({}).hasOwnProperty,z;C(y,c)||C(y.call,c)?z=function(a,b){return b in a&&C(a.constructor.prototype[b],c)}:z=function(a,b){return y.call(a,b)},r.csstransforms=function(){return!!E(["transformProperty","WebkitTransform","MozTransform","OTransform","msTransform"])},r.csstransitions=function(){return F("transitionProperty")};for(var H in r)z(r,H)&&(v=H.toLowerCase(),e[v]=r[H](),u.push((e[v]?"":"no-")+v));e.input||G(),e.crosswindowmessaging=e.postmessage,e.historymanagement=e.history,e.addTest=function(a,b){a=a.toLowerCase();if(!e[a]){b=!!b(),g.className+=" "+(b?"":"no-")+a,e[a]=b;return e}},A(""),j=l=null,f&&a.attachEvent&&function(){var a=b.createElement("div");a.innerHTML="<elem></elem>";return a.childNodes.length!==1}()&&function(a,b){function p(a,b){var c=-1,d=a.length,e,f=[];while(++c<d)e=a[c],(b=e.media||b)!="screen"&&f.push(p(e.imports,b),e.cssText);return f.join("")}function o(a){var b=-1;while(++b<e)a.createElement(d[b])}var c="abbr|article|aside|audio|canvas|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",d=c.split("|"),e=d.length,f=new RegExp("(^|\\s)("+c+")","gi"),g=new RegExp("<(/*)("+c+")","gi"),h=new RegExp("(^|[^\\n]*?\\s)("+c+")([^\\n]*)({[\\n\\w\\W]*?})","gi"),i=b.createDocumentFragment(),j=b.documentElement,k=j.firstChild,l=b.createElement("body"),m=b.createElement("style"),n;o(b),o(i),k.insertBefore(m,k.firstChild),m.media="print",a.attachEvent("onbeforeprint",function(){var a=-1,c=p(b.styleSheets,"all"),k=[],o;n=n||b.body;while((o=h.exec(c))!=null)k.push((o[1]+o[2]+o[3]).replace(f,"$1.iepp_$2")+o[4]);m.styleSheet.cssText=k.join("\n");while(++a<e){var q=b.getElementsByTagName(d[a]),r=q.length,s=-1;while(++s<r)q[s].className.indexOf("iepp_")<0&&(q[s].className+=" iepp_"+d[a])}i.appendChild(n),j.appendChild(l),l.className=n.className,l.innerHTML=n.innerHTML.replace(g,"<$1font")}),a.attachEvent("onafterprint",function(){l.innerHTML="",j.removeChild(l),j.appendChild(n),m.styleSheet.cssText=""})}(a,b),e._enableHTML5=f,e._version=d,g.className=g.className.replace(/\bno-js\b/,"")+" js "+u.join(" ");return e}(this,this.document);

              (function(){

                // only proceed if CSS transforms are supported
                if ( !Modernizr.csstransforms ) {
                  return;
                }

                // the constructor that will do all the work
                function Zoomer( content ) {
                  // keep track of DOM
                  this.content = content;

                  // position of vertical scroll
                  this.scrolled = 0;
                  // zero-based number of sections
                  this.levels = 4;
                  // height of document
                  this.docHeight = document.documentElement.offsetHeight;

                  // bind Zoomer to scroll event
                  window.addEventListener( 'scroll', this, false);

                }

                // enables constructor to be used within event listener
                // like obj.addEventListener( eventName, this, false )
                Zoomer.prototype.handleEvent = function( event ) {
                  if ( this[event.type] ) {
                    this[event.type](event);
                  }
                };

                // triggered every time window scrolls
                Zoomer.prototype.scroll = function( event ) {
                  // normalize scroll value from 0 to 1
                  this.scrolled = window.scrollY / ( this.docHeight - window.innerHeight );

                  var scale = Math.pow( 3, this.scrolled * this.levels ),
                      transformValue = 'scale('+scale+')';

                  this.content.style.WebkitTransform = transformValue;
                  this.content.style.MozTransform = transformValue;
                  this.content.style.OTransform = transformValue;
                  this.content.style.transform = transformValue;
                };

                function init() {
                  var content = document.getElementById('content'),

                      // init Zoomer constructor
                      ZUI = new Zoomer( content );

                }

                window.addEventListener( 'DOMContentLoaded', init, false );

              })();
            </script>

          </head>

          <!-- <body> -->

          <!-- <body background="Images/circuit1.gif"> -->
          <!-- <body background="Images/circuit2.jpg"> -->
          <!-- <body background="Images/circuit3.jpg"> -->
          <!-- <body background="Images/dark_blue.png"> -->
          <!-- <body background="Images/light_blue.jpg"> -->
          <!-- <body background="Images/red.jpg"> -->
          <body background="Images/circuit2.jpg">
          <!-- <body background="Images/background_alt.svg"> -->





            <div id="wrap">

              <div id="container">

                <ul id="nav">
                  <li><a href="#web-dev"><input type="button" value="Layer 1" /></a></li>
                  <li><a href="#front-end"><input type="button" value="Layer 2" /></a></li>
                  <li><a href="#css"><input type="button" value="Layer 3" /></a></li>
                  <li><a href="#css3"><input type="button" value="Layer 4" /></a></li>
                  <li><a href="#transforms"><input type="button" value="Layer 5" /></a></li>
                </ul>

                <div id="content">

                  <div id="grid">
                    <div className="target"></div>
                    <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                    <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                    <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                    <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                    <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                    <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                    <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                    <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                    <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                  </div>

                  <section id="web-dev">
                    <!-- <header>
                      <h1>Placeholder URL</h1>
                    </header> -->

                    <div className="box w2 y6 x3">
                      <div className="img"><img src="d3js-original.svg" alt="d3"></div>
                    </div>

                    <div className="box w2 z3 q3">
                        <!-- <p></p>
                        <p></p>
                        <p></p>
                        <p></p> -->
                        <div className="img"><img src="icons/drupal/drupal-original-wordmark.svg" alt="drupal"></div>
                    </div>

                    <div className="box w2 y3 x6">
                      <div className="img"><img src="icons/angularjs/angularjs-original.svg" alt="angular"></div>
                    </div>

                    <div className="box w2 y6 z6">
                      <div className="img"><img src="icons/debian/debian-original.svg" alt="debian"></div>
                    </div>

                  </section>

                  <section id="front-end">
                    <!-- <header className="w6">
                      <h2>Client/Server-Side Languages</h2>
                    </header> -->

                    <div className="box w3 -x6 y3">
                        <div className="img"><img src="icons/jquery/jquery-original.svg" alt="jquery"></div>
                    </div>

                    <div className="box w2 y6 x3">
                      <!-- <h3>Site Info Box-D</h3>
                      <p></p>
                      <p></p>
                      <p></p>
                      <p></p>
                      <p></p>
                      <p></p>
                      <p></p>
                      <p></p>
                      <p></p>
                      <p></p> -->
                      <div className="img"><img src="icons/javascript/javascript-original.svg" alt="js"></div>
                    </div>

                    <div className="box w6 x6 y6">
                      <div className="img"><image src="icons/nginx/nginx-original.svg" alt="nginx"</div>
                    </div>

                  </section>

                  <section id="css">
                    <!-- <header className="w3">
                      <h2>Site Analytics</h2>
                    </header> -->

                    <div className="box w3 x3 y6">
                      <!-- <h3>Site Info Box-E</h3>
                      <p></p>
                      <p></p>
                      <p></p>
                      <p></p> -->
                      <div className="img"><img src="icons/gulp/gulp-plain.svg" alt="gulp"></div>
                    </div>

                    <div className="box w6 q6 z3">
                      <!-- <h3>Site Info Box-F</h3>
                      <p></p>
                      <p></p>
                      <p></p>
                      <p></p> -->
                      <div className="img"><img src="icons/nodejs/nodejs-original.svg" alt="nodejs"></div>
                    </div>

                    <div className="box w3 y3 z6 h6">
                      <div className="img"><img src="icons/postgresql/postgresql-original-wordmark.svg" alt="psql"></div>
                    </div>

                    <div className="box w2 -x6 -y3">
                      <div className="img"><img src="icons/react/react-original-wordmark.svg" alt="react"></div>
                    </div>

                  </section>

                  <section id="css3">
                    <!-- <header className="x3 w3">
                      <h2>Placeholder</h2>
                      <p></p>
                      <p></p>
                    </header> -->

                    <div className="box w3 x3 z3 h3">
                      <div className="img"><img src="icons/python/python-original-wordmark.svg" alt="python"></div>
                    </div>

                    <div className="box w3 x6 h3">
                      <div className="img"><img src="icons/sass/sass-original.svg" alt="sass"></div>
                    </div>

                    <div className="box w3 y3">
                      <!-- <h2>Placeholder</h2>
                      <p></p>
                      <p></p>
                      <p></p>
                      <p></p>
                      <p></p> -->
                      <div className="img"><img src="icons/vim/vim-original.svg" alt="vim"></div>
                    </div>

                    <div className="box w3 y6 x3">
                      <!-- <h2>Placeholder</h2>
                      <p></p>
                      <p></p>
                      <p></p>
                      <p></p>
                      <p></p>
                      <p></p>
                      <p></p>
                      <p></p>
                      <p></p>
                      <p></p> -->
                      <div className="img"><img src="icons/ubuntu/ubuntu-plain-wordmark.svg" alt="ubuntu"></div>
                    </div>

                    <div className="box w6 y6 x3" style="margin-top: 15px;">
                      <!-- <p></p>
                      <p></p>
                      <p></p>
                      <p></p>
                      <p></p> -->
                      <div className="img"><img src="icons/vuejs/vuejs-original-wordmark.svg" alt="vue"></div>
                    </div>

                  </section>

                  <section id="transforms">
                    <!-- <header>
                      <h2>Placeholder</h2>
                    </header> -->

                    <div className="box w3 y3">
                      <!-- <h3>Placeholder</h3>
                      <p></p>
                      <p></p>
                      <p></p>
                      <p></p>
                      <p></p>
                      <p></p>
                      <p></p>
                      <p></p>
                      <p></p>
                      <p></p> -->
                      <div className="img"><img src="icons/webpack/webpack-original-wordmark.svg" alt="webpack"></div>
                    </div>

                    <div className="box w2 y6 x3">
                      <!-- <h3>Placeholder</h3>
                      <p></p>
                      <p></p>
                      <p></p>
                      <p></p> -->
                      <div className="img"><img src="icons/docker/docker-original-wordmark.svg" alt="docker"></div>
                    </div>

                    <div className="box w3 y3 x6">
                      <!-- <h3>Placeholder</h3>
                      <p></p>
                      <p></p>
                      <p></p>
                      <p></p> -->
                      <div className="img"><img src="icons/django/django-original.svg" alt="django"></div>
                    </div>

                    <div className="box w2 h3 y3 x3">
                      <div className="img"><img src="icons/css3/css3-original-wordmark.svg" alt="css3"></div>
                    </div>

                    <div className="box w3 h6 y6 x6">
                      <div className="img"><img src="icons/babel/babel-original.svg" alt="babel"></div>
                    </div>

                  </section>

                </div> <!-- #content -->

              </div> <!-- #container -->

            </div> <!-- #wrap -->

            <div id="scroller"></div>

          </body>
          </html>

      </div>
    );
  }
}

export default App;
