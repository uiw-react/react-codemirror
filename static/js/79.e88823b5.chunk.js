(this["webpackJsonp@uiw/react-codemirror"]=this["webpackJsonp@uiw/react-codemirror"]||[]).push([[79],{670:function(e,r,t){!function(e){"use strict";e.defineMode("pascal",(function(){function e(e){for(var r={},t=e.split(" "),n=0;n<t.length;++n)r[t[n]]=!0;return r}var r=e("absolute and array asm begin case const constructor destructor div do downto else end file for function goto if implementation in inherited inline interface label mod nil not object of operator or packed procedure program record reintroduce repeat self set shl shr string then to type unit until uses var while with xor as class dispinterface except exports finalization finally initialization inline is library on out packed property raise resourcestring threadvar try absolute abstract alias assembler bitpacked break cdecl continue cppdecl cvar default deprecated dynamic enumerator experimental export external far far16 forward generic helper implements index interrupt iocheck local message name near nodefault noreturn nostackframe oldfpccall otherwise overload override pascal platform private protected public published read register reintroduce result safecall saveregisters softfloat specialize static stdcall stored strict unaligned unimplemented varargs virtual write"),t={null:!0},n=/[+\-*&%=<>!?|\/]/;function i(e,i){var c=e.next();if("#"==c&&i.startOfLine)return e.skipToEnd(),"meta";if('"'==c||"'"==c)return i.tokenize=a(c),i.tokenize(e,i);if("("==c&&e.eat("*"))return i.tokenize=o,o(e,i);if("{"==c)return i.tokenize=l,l(e,i);if(/[\[\]\(\),;\:\.]/.test(c))return null;if(/\d/.test(c))return e.eatWhile(/[\w\.]/),"number";if("/"==c&&e.eat("/"))return e.skipToEnd(),"comment";if(n.test(c))return e.eatWhile(n),"operator";e.eatWhile(/[\w\$_]/);var s=e.current();return r.propertyIsEnumerable(s)?"keyword":t.propertyIsEnumerable(s)?"atom":"variable"}function a(e){return function(r,t){for(var n,i=!1,a=!1;null!=(n=r.next());){if(n==e&&!i){a=!0;break}i=!i&&"\\"==n}return!a&&i||(t.tokenize=null),"string"}}function o(e,r){for(var t,n=!1;t=e.next();){if(")"==t&&n){r.tokenize=null;break}n="*"==t}return"comment"}function l(e,r){for(var t;t=e.next();)if("}"==t){r.tokenize=null;break}return"comment"}return{startState:function(){return{tokenize:null}},token:function(e,r){if(e.eatSpace())return null;var t=(r.tokenize||i)(e,r);return t},electricChars:"{}"}})),e.defineMIME("text/x-pascal","pascal")}(t(11))}}]);
//# sourceMappingURL=79.e88823b5.chunk.js.map