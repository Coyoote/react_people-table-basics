(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{22:function(e,t,c){},24:function(e,t,c){},25:function(e,t,c){"use strict";c.r(t);var n=c(10),a=c(5),s=(c(20),c(21),c(2)),r=(c(22),c(1)),j=c(6),i=c.n(j),l=c(0),o=function(e){var t=e.to,c=e.title;return Object(l.jsx)(a.b,{to:t,className:function(e){var t=e.isActive;return i()("navbar-item",{"has-background-grey-lighter":t})},children:c})},b=function(){return Object(l.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("div",{className:"navbar-brand",children:[Object(l.jsx)(o,{to:"/",title:"Home"}),Object(l.jsx)(o,{to:"/people",title:"People"})]})})})},d=c(8),h=c(11),O=c(4),x="https://mate-academy.github.io/react_people-table/api/people.json";function u(){return(e=500,new Promise((function(t){return setTimeout(t,e)}))).then((function(){return fetch(x)})).then((function(e){return e.json()}));var e}c(24);var p=function(){return Object(l.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(l.jsx)("div",{className:"Loader__content"})})},m=function(e){var t=e.person;return Object(l.jsx)(a.b,{to:"../".concat(t.slug),className:i()({"has-text-danger":"f"===t.sex}),children:t.name})},f=function(e){var t=e.person,c=e.slug,n=e.personMother,a=e.personFather,s=t.motherName||"-",r=t.fatherName||"-";return Object(l.jsxs)("tr",{"data-cy":"person",className:i()({"has-background-warning":t.slug===c}),children:[Object(l.jsx)("td",{children:Object(l.jsx)(m,{person:t})}),Object(l.jsx)("td",{children:t.sex}),Object(l.jsx)("td",{children:t.born}),Object(l.jsx)("td",{children:t.died}),Object(l.jsx)("td",{children:n?Object(l.jsx)(m,{person:n}):s}),Object(l.jsx)("td",{children:a?Object(l.jsx)(m,{person:a}):r})]},t.slug)},v=function(e){var t=e.people,c=e.slug;return t.length?Object(l.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"Name"}),Object(l.jsx)("th",{children:"Sex"}),Object(l.jsx)("th",{children:"Born"}),Object(l.jsx)("th",{children:"Died"}),Object(l.jsx)("th",{children:"Mother"}),Object(l.jsx)("th",{children:"Father"})]})}),Object(l.jsx)("tbody",{children:t.map((function(e){var n=t.find((function(t){return t.name===e.motherName})),a=t.find((function(t){return t.name===e.fatherName}));return Object(l.jsx)(f,{person:e,slug:c,personMother:n,personFather:a})}))})]}):Object(l.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"})},g=function(){var e=Object(r.useState)([]),t=Object(O.a)(e,2),c=t[0],n=t[1],a=Object(r.useState)(!1),j=Object(O.a)(a,2),i=j[0],o=j[1],b=Object(r.useState)(!1),x=Object(O.a)(b,2),m=x[0],f=x[1],g=Object(s.h)().slug,N=void 0===g?"":g,w=Object(r.useCallback)(Object(h.a)(Object(d.a)().mark((function e(){var t;return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o(!0),e.prev=1,e.next=4,u();case 4:t=e.sent,o(!1),n(t),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),f(!0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])}))),[]);return Object(r.useEffect)((function(){w()}),[]),Object(l.jsxs)("div",{className:"block",children:[Object(l.jsx)("h1",{className:"title",children:"People Page"}),Object(l.jsx)("div",{className:"box table-container",children:m?Object(l.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"}):Object(l.jsx)(l.Fragment,{children:i?Object(l.jsx)(p,{}):Object(l.jsx)(v,{people:c,slug:N})})})]})},N=function(){return Object(l.jsxs)("div",{"data-cy":"app",children:[Object(l.jsx)(b,{}),Object(l.jsx)("main",{className:"section",children:Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)(s.d,{children:[Object(l.jsx)(s.b,{path:"*",element:Object(l.jsx)("h1",{className:"title",children:"Page not found"})}),Object(l.jsx)(s.b,{path:"/",element:Object(l.jsx)("h1",{className:"title",children:"Home Page"})}),Object(l.jsx)(s.b,{path:"/home",element:Object(l.jsx)(s.a,{to:"/",replace:!0})}),Object(l.jsxs)(s.b,{path:"/people",children:[Object(l.jsx)(s.b,{index:!0,element:Object(l.jsx)(g,{})}),Object(l.jsx)(s.b,{path:":slug",element:Object(l.jsx)(g,{})})]})]})})})]})};Object(n.createRoot)(document.getElementById("root")).render(Object(l.jsx)(a.a,{children:Object(l.jsx)(N,{})}))}},[[25,1,2]]]);
//# sourceMappingURL=main.b67e3e99.chunk.js.map