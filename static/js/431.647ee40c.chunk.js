"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[431],{383:function(e,t,r){var n=r(861),a=r(757),c=r.n(a),u=r(388);u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s="4b8864cf5207c2132295f1e95f786e7c",i=function(){var e=(0,n.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("trending/movie/day?api_key=".concat(s));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("search/movie?api_key=".concat(s,"&language=en-US&page=1&include_adult=false&query=").concat(t));case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("movie/".concat(t,"?api_key=").concat(s,"&language=en-US"));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("movie/".concat(t,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return r=e.sent,e.abrupt("return",r.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("movie/".concat(t,"/reviews?api_key=").concat(s,"&language=en-US&page=1"));case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h={fetchTrendings:i,fetchByKeyword:o,fetchMovieDetails:p,fetchCast:f,fetchReviews:l};t.Z=h},431:function(e,t,r){r.r(t);var n=r(861),a=r(439),c=r(757),u=r.n(c),s=r(689),i=r(791),o=r(383),p=r(854),f=r(184);t.default=function(){var e=(0,s.UO)().movieId,t=(0,i.useState)([]),r=(0,a.Z)(t,2),c=r[0],l=r[1],h=(0,i.useState)(!1),v=(0,a.Z)(h,2),d=v[0],g=v[1];return(0,i.useEffect)((function(){var t=function(){var t=(0,n.Z)(u().mark((function t(){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return g(!0),t.prev=1,t.next=4,o.Z.fetchCast(e);case 4:r=t.sent,l(r),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),console.log(t.t0);case 11:return t.prev=11,g(!1),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[1,8,11,14]])})));return function(){return t.apply(this,arguments)}}();t()}),[e]),(0,f.jsxs)("div",{children:[d&&(0,f.jsx)(p.Z,{}),(0,f.jsx)("ul",{children:c.map((function(e){return(0,f.jsxs)("li",{children:[(0,f.jsx)("img",{width:"200px",src:"https://image.tmdb.org/t/p/w500"+e.profile_path,alt:e.original_name}),(0,f.jsx)("p",{children:e.name}),(0,f.jsxs)("p",{children:["Character: ",e.character]})]},e.id)}))})]})}},854:function(e,t,r){var n=r(691),a=r(184);t.Z=function(){return(0,a.jsx)(n.VL,{visible:!0,height:"80",width:"80",ariaLabel:"vortex-loading",wrapperStyle:{},wrapperClass:"vortex-wrapper",colors:["red","green","blue","yellow","orange","purple"]})}}}]);
//# sourceMappingURL=431.647ee40c.chunk.js.map