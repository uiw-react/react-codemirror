(this["webpackJsonp@uiw/react-codemirror"]=this["webpackJsonp@uiw/react-codemirror"]||[]).push([[481,693],{664:function(t,e,n){!function(t){"use strict";var e={autoSelfClosers:{area:!0,base:!0,br:!0,col:!0,command:!0,embed:!0,frame:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0,menuitem:!0},implicitlyClosed:{dd:!0,li:!0,optgroup:!0,option:!0,p:!0,rp:!0,rt:!0,tbody:!0,td:!0,tfoot:!0,th:!0,tr:!0},contextGrabbers:{dd:{dd:!0,dt:!0},dt:{dd:!0,dt:!0},li:{li:!0},option:{option:!0,optgroup:!0},optgroup:{optgroup:!0},p:{address:!0,article:!0,aside:!0,blockquote:!0,dir:!0,div:!0,dl:!0,fieldset:!0,footer:!0,form:!0,h1:!0,h2:!0,h3:!0,h4:!0,h5:!0,h6:!0,header:!0,hgroup:!0,hr:!0,menu:!0,nav:!0,ol:!0,p:!0,pre:!0,section:!0,table:!0,ul:!0},rp:{rp:!0,rt:!0},rt:{rp:!0,rt:!0},tbody:{tbody:!0,tfoot:!0},td:{td:!0,th:!0},tfoot:{tbody:!0},th:{td:!0,th:!0},thead:{tbody:!0,tfoot:!0},tr:{tr:!0}},doNotIndent:{pre:!0},allowUnquoted:!0,allowMissing:!0,caseFold:!0},n={autoSelfClosers:{},implicitlyClosed:{},contextGrabbers:{},doNotIndent:{},allowUnquoted:!1,allowMissing:!1,allowMissingTagName:!1,caseFold:!1};t.defineMode("xml",(function(r,a){var o,i,u=r.indentUnit,s={},l=a.htmlMode?e:n;for(var c in l)s[c]=l[c];for(var c in a)s[c]=a[c];function d(t,e){function n(n){return e.tokenize=n,n(t,e)}var r=t.next();return"<"==r?t.eat("!")?t.eat("[")?t.match("CDATA[")?n(p("atom","]]>")):null:t.match("--")?n(p("comment","--\x3e")):t.match("DOCTYPE",!0,!0)?(t.eatWhile(/[\w\._\-]/),n(g(1))):null:t.eat("?")?(t.eatWhile(/[\w\._\-]/),e.tokenize=p("meta","?>"),"meta"):(o=t.eat("/")?"closeTag":"openTag",e.tokenize=f,"tag bracket"):"&"==r?(t.eat("#")?t.eat("x")?t.eatWhile(/[a-fA-F\d]/)&&t.eat(";"):t.eatWhile(/[\d]/)&&t.eat(";"):t.eatWhile(/[\w\.\-:]/)&&t.eat(";"))?"atom":"error":(t.eatWhile(/[^&<]/),null)}function f(t,e){var n=t.next();if(">"==n||"/"==n&&t.eat(">"))return e.tokenize=d,o=">"==n?"endTag":"selfcloseTag","tag bracket";if("="==n)return o="equals",null;if("<"==n){e.tokenize=d,e.state=b,e.tagName=e.tagStart=null;var r=e.tokenize(t,e);return r?r+" tag error":"tag error"}return/[\'\"]/.test(n)?(e.tokenize=m(n),e.stringStartCol=t.column(),e.tokenize(t,e)):(t.match(/^[^\s\u00a0=<>\"\']*[^\s\u00a0=<>\"\'\/]/),"word")}function m(t){var e=function(e,n){for(;!e.eol();)if(e.next()==t){n.tokenize=f;break}return"string"};return e.isInAttribute=!0,e}function p(t,e){return function(n,r){for(;!n.eol();){if(n.match(e)){r.tokenize=d;break}n.next()}return t}}function g(t){return function(e,n){for(var r;null!=(r=e.next());){if("<"==r)return n.tokenize=g(t+1),n.tokenize(e,n);if(">"==r){if(1==t){n.tokenize=d;break}return n.tokenize=g(t-1),n.tokenize(e,n)}}return"meta"}}function x(t,e,n){this.prev=t.context,this.tagName=e,this.indent=t.indented,this.startOfLine=n,(s.doNotIndent.hasOwnProperty(e)||t.context&&t.context.noIndent)&&(this.noIndent=!0)}function h(t){t.context&&(t.context=t.context.prev)}function k(t,e){for(var n;;){if(!t.context)return;if(n=t.context.tagName,!s.contextGrabbers.hasOwnProperty(n)||!s.contextGrabbers[n].hasOwnProperty(e))return;h(t)}}function b(t,e,n){return"openTag"==t?(n.tagStart=e.column(),v):"closeTag"==t?w:b}function v(t,e,n){return"word"==t?(n.tagName=e.current(),i="tag",M):s.allowMissingTagName&&"endTag"==t?(i="tag bracket",M(t,e,n)):(i="error",v)}function w(t,e,n){if("word"==t){var r=e.current();return n.context&&n.context.tagName!=r&&s.implicitlyClosed.hasOwnProperty(n.context.tagName)&&h(n),n.context&&n.context.tagName==r||!1===s.matchClosing?(i="tag",T):(i="tag error",N)}return s.allowMissingTagName&&"endTag"==t?(i="tag bracket",T(t,e,n)):(i="error",N)}function T(t,e,n){return"endTag"!=t?(i="error",T):(h(n),b)}function N(t,e,n){return i="error",T(t,e,n)}function M(t,e,n){if("word"==t)return i="attribute",y;if("endTag"==t||"selfcloseTag"==t){var r=n.tagName,a=n.tagStart;return n.tagName=n.tagStart=null,"selfcloseTag"==t||s.autoSelfClosers.hasOwnProperty(r)?k(n,r):(k(n,r),n.context=new x(n,r,a==n.indented)),b}return i="error",M}function y(t,e,n){return"equals"==t?S:(s.allowMissing||(i="error"),M(t,e,n))}function S(t,e,n){return"string"==t?z:"word"==t&&s.allowUnquoted?(i="string",M):(i="error",M(t,e,n))}function z(t,e,n){return"string"==t?z:M(t,e,n)}return d.isInText=!0,{startState:function(t){var e={tokenize:d,state:b,indented:t||0,tagName:null,tagStart:null,context:null};return null!=t&&(e.baseIndent=t),e},token:function(t,e){if(!e.tagName&&t.sol()&&(e.indented=t.indentation()),t.eatSpace())return null;o=null;var n=e.tokenize(t,e);return(n||o)&&"comment"!=n&&(i=null,e.state=e.state(o||n,t,e),i&&(n="error"==i?n+" error":i)),n},indent:function(e,n,r){var a=e.context;if(e.tokenize.isInAttribute)return e.tagStart==e.indented?e.stringStartCol+1:e.indented+u;if(a&&a.noIndent)return t.Pass;if(e.tokenize!=f&&e.tokenize!=d)return r?r.match(/^(\s*)/)[0].length:0;if(e.tagName)return!1!==s.multilineTagIndentPastTag?e.tagStart+e.tagName.length+2:e.tagStart+u*(s.multilineTagIndentFactor||1);if(s.alignCDATA&&/<!\[CDATA\[/.test(n))return 0;var o=n&&/^<(\/)?([\w_:\.-]*)/.exec(n);if(o&&o[1])for(;a;){if(a.tagName==o[2]){a=a.prev;break}if(!s.implicitlyClosed.hasOwnProperty(a.tagName))break;a=a.prev}else if(o)for(;a;){var i=s.contextGrabbers[a.tagName];if(!i||!i.hasOwnProperty(o[2]))break;a=a.prev}for(;a&&a.prev&&!a.startOfLine;)a=a.prev;return a?a.indent+u:e.baseIndent||0},electricInput:/<\/[\s\w:]+>$/,blockCommentStart:"\x3c!--",blockCommentEnd:"--\x3e",configuration:s.htmlMode?"html":"xml",helperType:s.htmlMode?"html":"xml",skipAttribute:function(t){t.state==S&&(t.state=M)},xmlCurrentTag:function(t){return t.tagName?{name:t.tagName,close:"closeTag"==t.type}:null},xmlCurrentContext:function(t){for(var e=[],n=t.context;n;n=n.prev)n.tagName&&e.push(n.tagName);return e.reverse()}}})),t.defineMIME("text/xml","xml"),t.defineMIME("application/xml","xml"),t.mimeModes.hasOwnProperty("text/html")||t.defineMIME("text/html",{name:"xml",htmlMode:!0})}(n(8))},719:function(t,e,n){!function(t){"use strict";function e(t,e,n,r){this.state=t,this.mode=e,this.depth=n,this.prev=r}function n(r){return new e(t.copyState(r.mode,r.state),r.mode,r.depth,r.prev&&n(r.prev))}t.defineMode("jsx",(function(r,a){var o=t.getMode(r,{name:"xml",allowMissing:!0,multilineTagIndentPastTag:!1,allowMissingTagName:!0}),i=t.getMode(r,a&&a.base||"javascript");function u(t){var e=t.tagName;t.tagName=null;var n=o.indent(t,"","");return t.tagName=e,n}function s(t,e){return e.context.mode==o?l(t,e,e.context):c(t,e,e.context)}function l(n,a,l){if(2==l.depth)return n.match(/^.*?\*\//)?l.depth=1:n.skipToEnd(),"comment";if("{"==n.peek()){o.skipAttribute(l.state);var c=u(l.state),d=l.state.context;if(d&&n.match(/^[^>]*>\s*$/,!1)){for(;d.prev&&!d.startOfLine;)d=d.prev;d.startOfLine?c-=r.indentUnit:l.prev.state.lexical&&(c=l.prev.state.lexical.indented)}else 1==l.depth&&(c+=r.indentUnit);return a.context=new e(t.startState(i,c),i,0,a.context),null}if(1==l.depth){if("<"==n.peek())return o.skipAttribute(l.state),a.context=new e(t.startState(o,u(l.state)),o,0,a.context),null;if(n.match("//"))return n.skipToEnd(),"comment";if(n.match("/*"))return l.depth=2,s(n,a)}var f,m=o.token(n,l.state),p=n.current();return/\btag\b/.test(m)?/>$/.test(p)?l.state.context?l.depth=0:a.context=a.context.prev:/^</.test(p)&&(l.depth=1):!m&&(f=p.indexOf("{"))>-1&&n.backUp(p.length-f),m}function c(n,r,a){if("<"==n.peek()&&i.expressionAllowed(n,a.state))return i.skipExpression(a.state),r.context=new e(t.startState(o,i.indent(a.state,"","")),o,0,r.context),null;var u=i.token(n,a.state);if(!u&&null!=a.depth){var s=n.current();"{"==s?a.depth++:"}"==s&&0==--a.depth&&(r.context=r.context.prev)}return u}return{startState:function(){return{context:new e(t.startState(i),i)}},copyState:function(t){return{context:n(t.context)}},token:s,indent:function(t,e,n){return t.context.mode.indent(t.context.state,e,n)},innerMode:function(t){return t.context}}}),"xml","javascript"),t.defineMIME("text/jsx","jsx"),t.defineMIME("text/typescript-jsx",{name:"jsx",base:{name:"javascript",typescript:!0}})}(n(8),n(664),n(667))}}]);
//# sourceMappingURL=481.c0779d30.chunk.js.map