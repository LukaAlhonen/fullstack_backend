(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{41:function(t,n,e){},42:function(t,n,e){"use strict";e.r(n);var c=e(17),r=e.n(c),o=e(8),a=e(6),i=e(2),u=e(0),s=function(t){var n=t.note,e=t.toggleImportant,c=t.removeNote,r=n.important?"make not important":"make important";return Object(u.jsxs)("li",{className:"note",children:[n.content," ",Object(u.jsx)("button",{className:"important",onClick:e,children:r})," ",Object(u.jsx)("button",{className:"important",onClick:c,children:"remove"})]})},f=e(3),l=e.n(f),d="/api/notes",j={getAll:function(){return l.a.get(d).then((function(t){return t.data}))},create:function(t){return l.a.post(d,t).then((function(t){return t.data}))},update:function(t,n){return l.a.put("".concat(d,"/").concat(t),n).then((function(t){return t.data}))},remove:function(t){return l.a.delete("".concat(d,"/").concat(t)).then((function(t){return t.data}))}},m=(e(41),function(t){var n=Object(i.useState)([]),e=Object(a.a)(n,2),c=e[0],r=e[1],f=Object(i.useState)(""),l=Object(a.a)(f,2),d=l[0],m=l[1],b=Object(i.useState)(!0),h=Object(a.a)(b,2),p=h[0],O=h[1];Object(i.useEffect)((function(){j.getAll().then((function(t){r(t)}))}),[]);var v=p?c:c.filter((function(t){return t.important}));return Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"Notes"}),Object(u.jsxs)("button",{onClick:function(){return O(!p)},children:["show ",p?"important":"all"]}),Object(u.jsx)("ul",{children:v.map((function(t){return Object(u.jsx)(s,{note:t,toggleImportant:function(){return function(t){var n=c.find((function(n){return n.id===t})),e=Object(o.a)(Object(o.a)({},n),{},{important:!n.important});j.update(t,e).then((function(n){r(c.map((function(e){return e.id!==t?e:n})))})).catch((function(e){alert("the note '".concat(n.content,"' has been deleted from the server")),r(c.filter((function(n){return n.id!==t})))}))}(t.id)},removeNote:function(){return n=t.id,void j.remove(n).then((function(t){r(c.filter((function(t){return t.id!==n})))}));var n}},t.id)}))}),Object(u.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n={content:d,date:(new Date).toISOString(),important:Math.random()>.5,id:c.length+1};j.create(n).then((function(t){r(c.concat(t)),m("")}))},children:[Object(u.jsx)("input",{className:"newNote",value:d,onChange:function(t){m(t.target.value)}}),Object(u.jsx)("button",{className:"save",type:"submit",children:"save"})]})]})});r.a.render(Object(u.jsx)(m,{}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.e4d11da6.chunk.js.map