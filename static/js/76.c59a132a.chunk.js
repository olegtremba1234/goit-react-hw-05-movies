"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[76],{383:function(e,t,r){var n=r(861),a=r(757),s=r.n(a),c=r(388);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i="4b8864cf5207c2132295f1e95f786e7c",u=function(){var e=(0,n.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("trending/movie/day?api_key=".concat(i));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("search/movie?api_key=".concat(i,"&language=en-US&page=1&include_adult=false&query=").concat(t));case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(t,"?api_key=").concat(i,"&language=en-US"));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(t,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return r=e.sent,e.abrupt("return",r.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=(0,n.Z)(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(t,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d={fetchTrendings:u,fetchByKeyword:o,fetchMovieDetails:l,fetchCast:p,fetchReviews:h};t.Z=d},76:function(e,t,r){r.r(t),r.d(t,{default:function(){return v}});var n=r(861),a=r(439),s=r(757),c=r.n(s),i=r(791),u=r(87),o=r(689),l=r(383),p=r(854),h="MovieDetails_movieDetails__eqthc",d="MovieDetails_genreList__d9HIM",f=r(184),v=function(){var e,t,r=(0,o.UO)().movieId,s=(0,i.useState)(null),v=(0,a.Z)(s,2),x=v[0],g=v[1],m=(0,i.useState)(!1),w=(0,a.Z)(m,2),j=w[0],k=w[1],y=(0,o.TH)();return(0,i.useEffect)((function(){var e=function(){var e=(0,n.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return k(!0),e.prev=1,e.next=4,l.Z.fetchMovieDetails(r);case 4:t=e.sent,g(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:return e.prev=11,k(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})));return function(){return e.apply(this,arguments)}}();e()}),[r]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(u.rU,{to:null!==(e=null===y||void 0===y||null===(t=y.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/",children:(0,f.jsx)("button",{type:"button",children:"Go back"})}),j&&(0,f.jsx)(p.Z,{}),x&&(0,f.jsxs)("div",{className:h,children:[(0,f.jsx)("img",{width:"300px",src:"https://image.tmdb.org/t/p/w500"+x.poster_path,alt:x.original_title}),(0,f.jsxs)("div",{children:[(0,f.jsxs)("h1",{children:[x.title," (",x.release_date.slice(0,4),")"]}),(0,f.jsxs)("p",{children:["User score: ",x.popularity]}),(0,f.jsx)("h2",{children:"Overview"}),(0,f.jsx)("p",{children:x.overview}),(0,f.jsx)("h2",{children:"Genres"}),(0,f.jsx)("ul",{className:d,children:x.genres.map((function(e){return(0,f.jsx)("li",{children:e.name},e.id)}))})]})]}),(0,f.jsx)("hr",{}),(0,f.jsxs)("div",{children:[(0,f.jsx)("h3",{children:"Additional information"}),(0,f.jsxs)("ul",{children:[(0,f.jsx)("li",{children:(0,f.jsx)(u.rU,{to:"cast",state:{from:y},children:"Cast"})}),(0,f.jsx)("li",{children:(0,f.jsx)(u.rU,{to:"reviews",state:{from:y},children:"Reviews"})})]}),(0,f.jsx)("hr",{}),(0,f.jsx)(o.j3,{})]})]})}},854:function(e,t,r){var n=r(691),a=r(184);t.Z=function(){return(0,a.jsx)(n.VL,{visible:!0,height:"80",width:"80",ariaLabel:"vortex-loading",wrapperStyle:{},wrapperClass:"vortex-wrapper",colors:["red","green","blue","yellow","orange","purple"]})}}}]);
//# sourceMappingURL=76.c59a132a.chunk.js.map