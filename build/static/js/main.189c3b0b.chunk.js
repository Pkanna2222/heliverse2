(this.webpackJsonpheliverse=this.webpackJsonpheliverse||[]).push([[0],{37:function(e,s,t){},62:function(e,s,t){},63:function(e,s,t){"use strict";t.r(s);var c=t(1),n=t.n(c),a=t(27),i=t.n(a),r=t(3),o=t(14),l=t.n(o),j=t(28),d=t(5),b=(t(37),t(29)),u=t.n(b),v=t(71),h=t(72),O=t(73),m=t(0),f=function(){var e=Object(c.useState)([]),s=Object(d.a)(e,2),t=s[0],n=s[1],a=Object(c.useState)(!0),i=Object(d.a)(a,2),o=i[0],b=i[1],f=Object(c.useState)(null),x=Object(d.a)(f,2),p=x[0],N=x[1],w=["http://www.mocky.io/v2/59b3f0b0100000e30b236b7e","http://www.mocky.io/v2/59ac28a9100000ce0bf9c236","http://www.mocky.io/v2/59ac293b100000d60bf9c239"],k=function(){var e=Object(j.a)(l.a.mark((function e(s){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.get(s).catch((function(e){b(!1),N(e.message)}));case 2:t=e.sent,n(t.data.posts),b(!1),N(null);case 6:case"end":return e.stop()}}),e)})));return function(s){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){k(w[0])}),[]);return Object(m.jsxs)("div",{children:[Object(m.jsxs)("div",{className:"sortVideos",children:[Object(m.jsx)("span",{className:"sortTitle",children:"Sort By"}),Object(m.jsxs)("select",{name:"sortOptions",className:"sortOptions",onChange:function(e){return function(e){if("event_date"===e){var s=Object(r.a)(t).sort((function(e,s){return e.event_data>s.event_data?1:-1}));n(s)}else if("views"===e){var c=Object(r.a)(t).sort((function(e,s){return e.views>s.views?1:-1}));n(c),console.log(c)}else if("likes"===e){var a=Object(r.a)(t).sort((function(e,s){return e.likes>s.likes?1:-1}));n(a)}else if("shares"===e){var i=Object(r.a)(t).sort((function(e,s){return e.shares>s.shares?1:-1}));n(i)}}(e.target.value)},children:[Object(m.jsx)("option",{value:"event_date",children:"event_date"}),Object(m.jsx)("option",{value:"views",children:"views"}),Object(m.jsx)("option",{value:"likes",children:"likes"}),Object(m.jsx)("option",{value:"shares",children:"shares"})]})]}),Object(m.jsxs)("div",{className:"feedpage",children:[p&&Object(m.jsx)("div",{children:p}),o&&Object(m.jsx)("div",{children:"Loading..."}),t.map((function(e){return Object(m.jsxs)("div",{className:"feedVideos",children:[Object(m.jsx)("img",{src:e.thumbnail_image,alt:"",className:"videoThumbnail"}),Object(m.jsx)("h2",{className:"videoName",children:e.event_name}),Object(m.jsxs)("div",{className:"videoDetails",children:[Object(m.jsxs)("span",{className:"videoDate",children:[" Date: ",e.event_date]}),Object(m.jsxs)("div",{className:"videoMoreInfo",children:[Object(m.jsxs)("span",{className:"videoViews",children:[" ",Object(m.jsx)(v.a,{className:"icon"})," ",e.views]}),Object(m.jsxs)("span",{className:"videoLikes",children:[" ",Object(m.jsx)(h.a,{className:"icon"})," ",e.likes]}),Object(m.jsxs)("span",{className:"videoShares",children:[" ",Object(m.jsx)(O.a,{className:"icon"})," ",e.shares]})]})]})]},e.event_date)}))]}),Object(m.jsx)("div",{className:"pageBtns",children:w.map((function(e,s){return Object(m.jsx)("button",{className:"btn1",onClick:function(){return k(e)},children:s+1})}))})]})},x=(t(62),function(){return Object(m.jsx)("div",{className:"header",children:Object(m.jsx)("h1",{className:"videosHeader",children:"VIDEOS LIST"})})});var p=function(){return Object(m.jsxs)("div",{className:"app",children:[Object(m.jsx)(x,{}),Object(m.jsx)(f,{})]})};i.a.render(Object(m.jsx)(n.a.StrictMode,{children:Object(m.jsx)(p,{})}),document.getElementById("root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.189c3b0b.chunk.js.map