(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{12:function(t,n,e){},14:function(t,n,e){"use strict";e.r(n);var o=e(3),r=e.n(o),c=e(4),a=e(5),i=e(7),s=e(6),u=e(1),d=e.n(u),l=(e(12),e(0)),h=function(t){var n=t.goods;return Object(l.jsx)("ul",{children:n.map((function(t){return Object(l.jsx)("li",{style:{color:t.color},children:t.name},t.id)}))})};function f(){return fetch("https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json").then((function(t){return t.json()}))}var g=function(){return f().then((function(t){return t.sort((function(t,n){return t.name.localeCompare(n.name)})).splice(0,5)}))},j=function(){return f().then((function(t){return t.filter((function(t){return"red"===t.color}))}))},b=function(t){Object(i.a)(e,t);var n=Object(s.a)(e);function e(){var t;Object(c.a)(this,e);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return(t=n.call.apply(n,[this].concat(r))).state={goods:[]},t.handleChange=function(n){n().then((function(n){return t.setState({goods:n})}))},t}return Object(a.a)(e,[{key:"render",value:function(){var t=this;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h1",{children:"Dynamic list of goods"}),Object(l.jsx)("button",{type:"button",name:"getAll",onClick:function(){return t.handleChange(f)},children:"Load All goods"}),Object(l.jsx)("button",{type:"button",name:"get5First",onClick:function(){return t.handleChange(g)},children:"Load 5 first goods"}),Object(l.jsx)("button",{type:"button",name:"getRed",onClick:function(){return t.handleChange(j)},children:"Load red goods"}),Object(l.jsx)(h,{goods:this.state.goods})]})}}]),e}(d.a.Component),m=b;r.a.render(Object(l.jsx)(m,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.684e4a86.chunk.js.map