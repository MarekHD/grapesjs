(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{253:function(t,s,a){"use strict";a.r(s);var n=a(1),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"block-manager"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#block-manager","aria-hidden":"true"}},[t._v("#")]),t._v(" Block Manager")]),a("p",{attrs:{align:"center"}},[a("img",{attrs:{src:"http://grapesjs.com/img/sc-grapesjs-blocks-prp.jpg",alt:"GrapesJS - Block Manager",height:"400",align:"center"}})]),a("p",[t._v("The Block is a group of "),a("a",{attrs:{href:"Components"}},[t._v("Components")]),t._v(" and can be easily reused inside templates.")]),a("p",[t._v("To better understand the difference between components and blocks, the component is more atomic so, for example, a single image,  a text box or a map fits perfectly in this concept. The block is what the end user will drag inside the canvas, so it could contain a single image (single Component) or the entire section like, for example, the footer with a lot of components inside (texts, images, inputs, etc).")]),a("p",[t._v("Check "),a("a",{attrs:{href:"Components"}},[t._v("Components")]),t._v(" page to see the list of built-in components and how to create your own.")]),a("p",[t._v("Let's see how to add a new block to the editor using the "),a("a",{attrs:{href:"API-Block-Manager"}},[t._v("Blocks API")])]),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" editor "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" grapesjs"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("init")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token operator"}},[t._v("...")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" blockManager "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" editor"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("BlockManager"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 'my-first-block' is the ID of the block")]),t._v("\nblockManager"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("add")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'my-first-block'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  label"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'Simple block'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  content"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'<div class=\"my-block\">This is a simple block</div>'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("With this snippet a new block will be added to the collection. You can also update existent blocks")]),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("blockManager"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token keyword"}},[t._v("get")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'my-first-block'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token keyword"}},[t._v("set")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  label"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'Updated simple block'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  attributes"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    title"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'My title'")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("As you see a simple HTML string is enough to create a block, the editor will do the rest.\nIf you want you could also pass an object representing the "),a("a",{attrs:{href:"Component"}},[t._v("Component")]),t._v(".")]),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("blockManager"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("add")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'my-map-block'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  label"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'Simple map block'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  content"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    type"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'map'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// Built-in 'map' component")]),t._v("\n    style"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      height"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'350px'")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    removable"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("false")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// Once inserted it can't be removed")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("From the v0.3.70 it's also possible to pass the HTML string with Component's properties as attributes.")]),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("blockManager"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("add")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'the-row-block'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  label"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'2 Columns'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  content"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('\'<div class="row" data-gjs-droppable=".row-cell" data-gjs-custom-name="Row">\'')]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v("\n      "),a("span",{attrs:{class:"token string"}},[t._v('\'<div class="row-cell" data-gjs-draggable=".row"></div>\'')]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v("\n      "),a("span",{attrs:{class:"token string"}},[t._v('\'<div class="row-cell" data-gjs-draggable=".row"></div>\'')]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v("\n    "),a("span",{attrs:{class:"token string"}},[t._v("'</div>'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("In the example above you're defining a row component which will accept only elements which match '.row-cell' selector and cells which could be dragged only inside '.row' elements. We're also defining the custom name which will be seen inside the Layers panel.\nIf you want to check the complete list of available Component's properties, check directly the Component model source:\nhttps://github.com/artf/grapesjs/blob/dev/src/dom_components/model/Component.js")])])}],!1,null,null,null);e.options.__file="Blocks.md";s.default=e.exports}}]);