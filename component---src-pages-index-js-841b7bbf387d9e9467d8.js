(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{145:function(t,e,n){"use strict";n.r(e),n.d(e,"query",function(){return s});var a=n(8),r=(n(0),n(150)),o=n(151),i=n(152),c={name:"nn640c",styles:"text-decoration:none;color:inherit;"},u={name:"qp4dny",styles:"color:#bbb;"},s="413260344";e.default=function(t){var e=t.data;return Object(a.b)(i.a,null,Object(a.b)("h4",null,e.allMarkdownRemark.totalCount," Posts"),e.allMarkdownRemark.edges.map(function(t){var e=t.node;return Object(a.b)("div",{key:e.id},Object(a.b)(r.Link,{to:e.fields.slug,css:c},Object(a.b)("h3",{css:Object(a.a)("margin-bottom:",Object(o.a)(.25),";")},e.frontmatter.title," ",Object(a.b)("span",{css:u},"— ",e.frontmatter.date)),Object(a.b)("p",null,e.excerpt)))}))}},149:function(t,e,n){var a;t.exports=(a=n(153))&&a.default||a},150:function(t,e,n){"use strict";n.r(e),n.d(e,"graphql",function(){return m}),n.d(e,"StaticQueryContext",function(){return f}),n.d(e,"StaticQuery",function(){return p});var a=n(8),r=n(0),o=n.n(r),i=n(4),c=n.n(i),u=n(148),s=n.n(u);n.d(e,"Link",function(){return s.a}),n.d(e,"withPrefix",function(){return u.withPrefix}),n.d(e,"navigate",function(){return u.navigate}),n.d(e,"push",function(){return u.push}),n.d(e,"replace",function(){return u.replace}),n.d(e,"navigateTo",function(){return u.navigateTo});var l=n(149),d=n.n(l);n.d(e,"PageRenderer",function(){return d.a});var b=n(33);n.d(e,"parsePath",function(){return b.a});var f=o.a.createContext({}),p=function(t){return Object(a.b)(f.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):Object(a.b)("div",null,"Loading (StaticQuery)")})};function m(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},151:function(t,e,n){"use strict";n.d(e,"a",function(){return u});var a=n(154),r=n.n(a),o=n(155),i=n.n(o),c=new r.a(i.a),u=c.rhythm},152:function(t,e,n){"use strict";var a=n(8),r=(n(0),n(150)),o=n(151),i={name:"180pfyr",styles:"display:inline-block;margin-right:1rem;"},c=function(t){return Object(a.b)("li",{css:i},Object(a.b)(r.Link,{to:t.to},t.children))},u={name:"1fobf8d",styles:"margin-bottom:1.5rem;"},s={name:"1vofbp7",styles:"list-style:none;float:right;"};e.a=function(t){var e=t.children;return Object(a.b)("div",{css:Object(a.a)("margin:0 auto;max-width:700px;padding:",Object(o.a)(2),";padding-top:",Object(o.a)(1.5),";")},Object(a.b)("header",{css:u},Object(a.b)(r.Link,{to:"/"},Object(a.b)("h3",{css:Object(a.a)("margin-bottom:",Object(o.a)(2),";display:inline-block;font-style:normal;")},"Home")),Object(a.b)("ul",{css:s},Object(a.b)(c,{to:"/about/"},"About"),Object(a.b)(c,{to:"/contact/"},"Contact"))),e)}},153:function(t,e,n){"use strict";n.r(e);n(51);var a=n(0),r=n.n(a),o=n(4),i=n.n(o),c=n(52),u=n(2),s=function(t){var e=t.location,n=u.default.getResourcesForPathnameSync(e.pathname);return r.a.createElement(c.a,Object.assign({location:e,pageResources:n},n.json))};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},e.default=s}}]);
//# sourceMappingURL=component---src-pages-index-js-841b7bbf387d9e9467d8.js.map