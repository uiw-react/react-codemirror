(this["webpackJsonp@uiw/react-codemirror"]=this["webpackJsonp@uiw/react-codemirror"]||[]).push([[50],{635:function(e,t,r){!function(e){"use strict";e.defineMode("eiffel",(function(){function e(e){for(var t={},r=0,n=e.length;r<n;++r)t[e[r]]=!0;return t}var t=e(["note","across","when","variant","until","unique","undefine","then","strip","select","retry","rescue","require","rename","reference","redefine","prefix","once","old","obsolete","loop","local","like","is","inspect","infix","include","if","frozen","from","external","export","ensure","end","elseif","else","do","creation","create","check","alias","agent","separate","invariant","inherit","indexing","feature","expanded","deferred","class","Void","True","Result","Precursor","False","Current","create","attached","detachable","as","and","implies","not","or"]),r=e([":=","and then","and","or","<<",">>"]);function n(e,t,r){return r.tokenize.push(e),e(t,r)}function i(e,t){if(e.eatSpace())return null;var r=e.next();return'"'==r||"'"==r?n(a(r,"string"),e,t):"-"==r&&e.eat("-")?(e.skipToEnd(),"comment"):":"==r&&e.eat("=")?"operator":/[0-9]/.test(r)?(e.eatWhile(/[xXbBCc0-9\.]/),e.eat(/[\?\!]/),"ident"):/[a-zA-Z_0-9]/.test(r)?(e.eatWhile(/[a-zA-Z_0-9]/),e.eat(/[\?\!]/),"ident"):/[=+\-\/*^%<>~]/.test(r)?(e.eatWhile(/[=+\-\/*^%<>~]/),"operator"):null}function a(e,t,r){return function(n,i){for(var a,o=!1;null!=(a=n.next());){if(a==e&&(r||!o)){i.tokenize.pop();break}o=!o&&"%"==a}return t}}return{startState:function(){return{tokenize:[i]}},token:function(e,n){var i=n.tokenize[n.tokenize.length-1](e,n);if("ident"==i){var a=e.current();i=t.propertyIsEnumerable(e.current())?"keyword":r.propertyIsEnumerable(e.current())?"operator":/^[A-Z][A-Z_0-9]*$/g.test(a)?"tag":/^0[bB][0-1]+$/g.test(a)||/^0[cC][0-7]+$/g.test(a)||/^0[xX][a-fA-F0-9]+$/g.test(a)||/^([0-9]+\.[0-9]*)|([0-9]*\.[0-9]+)$/g.test(a)||/^[0-9]+$/g.test(a)?"number":"variable"}return i},lineComment:"--"}})),e.defineMIME("text/x-eiffel","eiffel")}(r(11))}}]);
//# sourceMappingURL=50.e9ccc554.chunk.js.map