(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"5H7b":function(t,e,n){"use strict";n.r(e);var o=n("dI71"),r=n("q1tI"),a=n.n(r),u=n("Bl7J"),c=n("vrFN"),i=function(t){function e(){for(var e,n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))||this).state={quoteList:[],hasError:!1},e}Object(o.a)(e,t);var n=e.prototype;return n.componentDidMount=function(){var t=this;fetch("http://my-json-server.typicode.com/WomenWhoCodeCincy/wwcode-cincy-database/quotes").then((function(t){return t.json()})).then((function(e){t.setState({quoteList:e})}),(function(e){t.setState({hasError:!0})}))},n.render=function(){var t=this.state.quoteList.map((function(t,e){return a.a.createElement("li",{key:e},t.quote," ",t.author)}));return a.a.createElement(u.a,null,a.a.createElement(c.a,{title:"Quotes"}),a.a.createElement("h1",null,"Quotes"),a.a.createElement("ul",null,t))},e}(r.Component);e.default=i}}]);
//# sourceMappingURL=component---src-pages-quotes-js-771abe85bc0fdf232c40.js.map