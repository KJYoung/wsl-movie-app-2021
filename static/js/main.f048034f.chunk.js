(this["webpackJsonpwsl-movie-app-2021"]=this["webpackJsonpwsl-movie-app-2021"]||[]).push([[0],{46:function(e,t,s){},48:function(e,t,s){},49:function(e,t,s){"use strict";s.r(t);var r=s(3),n=s.n(r),a=s(15),i=s.n(a),c=s(4),o=s.n(c),u=s(6),d=s(16),m=s(17),l=s(20),p=s(19),v=s(18),j=s.n(v),h=s(2),b=s.n(h),g=(s(46),s(0));function f(e){e.id;var t=e.year,s=e.title,r=e.summary,n=e.poster,a=e.genres;return Object(g.jsxs)("div",{className:"movies__movie",children:[Object(g.jsx)("img",{src:n,alt:s,title:s,onError:function(e){e.target.onError=null,e.target.src="https://search.pstatic.net/sunny/?src=https%3A%2F%2Fcdn0.iconfinder.com%2Fdata%2Ficons%2Fbrands-colored-1%2F60%2Fdropbox-storage-drive-share-brand-512.png&type=sc960_832"}}),Object(g.jsxs)("div",{className:"movie__data",children:[Object(g.jsx)("h3",{className:"movie__title",children:s}),Object(g.jsx)("h5",{className:"movie__year",children:t}),Object(g.jsx)("ul",{className:"movie__genres",children:a.map((function(e,t){return Object(g.jsx)("li",{className:"genres__genre",children:e},t)}))}),Object(g.jsxs)("p",{className:"movie__summary",children:[r.slice(0,200)," ..."]})]})]})}f.proptype={id:b.a.number.isRequired,year:b.a.number.isRequired,title:b.a.string.isRequired,summary:b.a.string.isRequired,poster:b.a.string.isRequired,genres:b.a.arrayOf(b.a.string).isRequired};var y=f,O=(s(48),function(e){Object(l.a)(s,e);var t=Object(p.a)(s);function s(){var e;Object(d.a)(this,s);for(var r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return(e=t.call.apply(t,[this].concat(n))).state={isLoading:!0,movies:[]},e.fetchMovies=Object(u.a)(o.a.mark((function t(){var s,r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j.a.get("https://yts-proxy.now.sh/list_movies.json?sort-by=rating");case 2:s=t.sent,r=s.data.data.movies,e.setState({isLoading:!1,movies:r});case 5:case"end":return t.stop()}}),t)}))),e}return Object(m.a)(s,[{key:"componentDidMount",value:function(){var e=Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.fetchMovies();case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.isLoading,s=e.movies;return Object(g.jsx)("section",{className:"container",children:t?Object(g.jsx)("div",{className:"loader",children:Object(g.jsx)("span",{className:"loader__text",children:"Loading..."})}):Object(g.jsx)("div",{className:"movies",children:s.map((function(e){return Object(g.jsx)(y,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))})})}}]),s}(n.a.Component));i.a.render(Object(g.jsx)(O,{}),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.f048034f.chunk.js.map