(this["webpackJsonp@uiw/react-codemirror"]=this["webpackJsonp@uiw/react-codemirror"]||[]).push([[538],{836:function(e,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;n.default='model BouncingBall\n  parameter Real e = 0.7;\n  parameter Real g = 9.81;\n  Real h(start=1);\n  Real v;\n  Boolean flying(start=true);\n  Boolean impact;\n  Real v_new;\nequation\n  impact = h <= 0.0;\n  der(v) = if flying then -g else 0;\n  der(h) = v;\n  when {h <= 0.0 and v <= 0.0, impact} then\n    v_new = if edge(impact) then -e*pre(v) else 0;\n    flying = v_new > 0;\n    reinit(v, v_new);\n  end when;\n  annotation (uses(Modelica(version="3.2")));\nend BouncingBall;\n\n'}}]);
//# sourceMappingURL=538.e30dd970.chunk.js.map