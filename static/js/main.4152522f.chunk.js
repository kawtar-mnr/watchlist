(this.webpackJsonpwatchlist=this.webpackJsonpwatchlist||[]).push([[0],{12:function(e,t,i){},14:function(e,t,i){},16:function(e,t,i){"use strict";i.r(t);var n=i(1),r=i.n(n),a=i(7),c=i.n(a),s=(i(12),i(2)),o=i(3),d=i(5),l=i(4),h=i(0),m=function(e){var t=e.id,i=e.title;e.description;return Object(h.jsxs)("div",{className:"tc bg-light-pink br3 dib pa3 ma2 grow bw2 shadow-5",children:[Object(h.jsx)("img",{alt:"movie",src:"./img/".concat(t,".jpg")}),Object(h.jsx)("div",{children:Object(h.jsx)("h2",{children:i})})]})},j=function(e){var t=e.drama;return Object(h.jsx)("div",{children:t.map((function(e,i){return Object(h.jsx)(m,{id:t[i].id,title:t[i].title},i)}))})},u=function(e){var t=e.searchChange;return Object(h.jsx)("div",{className:"pa2",children:Object(h.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"What type of movies/TV shows do you like?",onChange:t,size:"42"})})},b=[{id:1,title:"kara para ask",name:"test1",description:" Action, Crime, Drama "},{id:2,title:"pretty little liars",name:"test2",description:"Drama, Mystery, Romance "},{id:3,title:"HTGAWM",name:"test3",description:"Crime, Drama, Mystery"},{id:4,title:"Suits",name:"test4",description:" Comedy, Drama"},{id:5,title:"Breaking Bad",name:"test5",description:"  Crime, Drama, Thriller "},{id:6,title:"UFAK TEFEK CINAYETLER",name:"test6",description:"Action, Crime, Drama, Mystery"},{id:7,title:"NCIS",name:"test7",description:" Action, Crime, Drama"},{id:8,title:"\xe7ukur",name:"test8",description:" Action, Crime, Thriller "},{id:9,title:"i\xe7erde",name:"test9",description:" Action, Crime, Drama"},{id:10,title:"erkenci kus",name:"test10",description:" Comedy, Romance "},{id:11,title:"EZEL",name:"test11",description:" Crime, Drama, Thriller"},{id:12,title:"Medcezir",name:"test12",description:" Comedy, Drama, Romance"}],p=function(e){return Object(h.jsx)("div",{style:{overflowY:"scroll",boarder:"5px solid black",height:"800px"},children:e.children})},O=function(e){Object(d.a)(i,e);var t=Object(l.a)(i);function i(e){var n;return Object(s.a)(this,i),(n=t.call(this,e)).state={hasError:!1},n}return Object(o.a)(i,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(h.jsx)("h1",{children:"Oooops!something went wrong "}):this.props.children}}]),i}(n.Component),g=(i(14),function(e){Object(d.a)(i,e);var t=Object(l.a)(i);function i(){var e;return Object(s.a)(this,i),(e=t.call(this)).onSearchChange=function(t){e.setState({searchField:t.target.value})},e.state={drama:b,searchField:""},e}return Object(o.a)(i,[{key:"render",value:function(){var e=this.state,t=e.drama,i=e.searchField,n=t.filter((function(e){return e.description.toLowerCase().includes(i.toLowerCase())}));return t.length?Object(h.jsxs)("div",{className:"tc",children:[Object(h.jsx)("h1",{className:"f1",children:"watchlist"}),Object(h.jsx)("h2",{className:"f4",children:"Need a TV show/movie recommendation ? Check these out and enjoy :)"}),Object(h.jsx)(u,{searchChange:this.onSearchChange}),Object(h.jsx)(p,{children:Object(h.jsx)(O,{children:Object(h.jsx)(j,{drama:n})})})]}):Object(h.jsx)("h1",{className:"tc pa5",children:"Loading"})}}]),i}(n.Component)),C=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,17)).then((function(t){var i=t.getCLS,n=t.getFID,r=t.getFCP,a=t.getLCP,c=t.getTTFB;i(e),n(e),r(e),a(e),c(e)}))};i(15);c.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(g,{})}),document.getElementById("root")),C()}},[[16,1,2]]]);
//# sourceMappingURL=main.4152522f.chunk.js.map