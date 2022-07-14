import { openBlock as l, createElementBlock as m } from "vue";
const p = { name: "cdmTest" }, d = (t, n) => {
  const e = t.__vccOpts || t;
  for (const [o, c] of n)
    e[o] = c;
  return e;
};
function f(t, n, e, o, c, u) {
  return l(), m("div", null, " cdm-test ");
}
const r = /* @__PURE__ */ d(p, [["render", f]]), b = {
  install(t) {
    t.component(r.name, r);
  }
}, $ = "cdmTest", T = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  cdmTest: b,
  name: $
}, Symbol.toStringTag, { value: "Module" })), g = { name: "cdmTest2" };
function v(t, n, e, o, c, u) {
  return l(), m("div", null, " cdm-test2 ");
}
const _ = /* @__PURE__ */ d(g, [["render", v]]), x = {
  install(t) {
    t.component(_.name, _);
  }
}, E = "cdmTest2", O = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  cdmTest2: x,
  name: E
}, Symbol.toStringTag, { value: "Module" })), s = Object.assign({ "./cdm-test1/index.ts": T, "./cdm-test2/index.ts": O });
let i = [];
Object.keys(s).forEach((t) => {
  const n = s[t].name;
  i.push(s[t][n]);
});
const a = Symbol("INSTALLED_KEY"), S = (t = []) => ({
  install: (e) => {
    e[a] || (e[a] = !0, t.forEach((o) => e.use(o)));
  }
}), y = S([...i]);
export {
  y as default,
  S as makeInstaller
};
