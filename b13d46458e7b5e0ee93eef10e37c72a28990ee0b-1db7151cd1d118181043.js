(window.webpackJsonp = window.webpackJsonp || []).push([
  [4],
  {
    "51K9": function (e) {
      e.exports = JSON.parse(
        '{"data":{"site":{"siteMetadata":{"title":"Wal Wal","description":"Wal is a fullstack developer who loves collaborating with others to create solutions that solve real-world and everyday problems.","author":"@walsquared"}}}}'
      );
    },
    Nhdc: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return y;
      }),
        n.d(t, "b", function () {
          return j;
        }),
        n.d(t, "c", function () {
          return I.a;
        }),
        n.d(t, "d", function () {
          return P.a;
        });
      n("J1ZC");
      var r = n("PEXJ"),
        o = n.n(r),
        a = n("S2pg"),
        i = n("Wbzz"),
        c = n("mSV1"),
        l = n("lgG8"),
        s = Object(a.a)([
          "border:2px solid var(--grey);background-color:var(--bkg);color:var(--grey);font-family:'Open Sans',sans-serif;font-size:1.125rem;font-weight:600;display:flex;justify-content:center;align-items:center;padding:0.75rem 1rem;user-select:none;",
        ]),
        u = a.b.div.withConfig({
          displayName: "button__DisabledButton",
          componentId: "sc-1y5yaws-0",
        })(["", ""], s),
        f = Object(a.a)(
          [
            "",
            " color:var(--text);border-color:var(--text);transition:0.1s ease-in;",
          ],
          s
        ),
        d = a.b.button.withConfig({
          displayName: "button__StyledButton",
          componentId: "sc-1y5yaws-1",
        })(
          [
            "",
            " @media only screen and (min-width:700px){&:hover{background-color:",
            ";color:",
            ";cursor:pointer;}}",
          ],
          f,
          function (e) {
            return e.color;
          },
          function (e) {
            return "var(--black)" === e.color ? "var(--white)" : "var(--black)";
          }
        ),
        p = Object(a.b)(i.a).withConfig({
          displayName: "button__StyledLink",
          componentId: "sc-1y5yaws-2",
        })(
          [
            "",
            " @media only screen and (min-width:700px){&:hover{background-color:",
            ";color:",
            ";}}",
          ],
          f,
          function (e) {
            return e.color;
          },
          function (e) {
            return "var(--black)" === e.color ? "var(--white)" : "var(--black)";
          }
        ),
        m = a.b.a.withConfig({
          displayName: "button__StyledAnchor",
          componentId: "sc-1y5yaws-3",
        })(
          [
            "",
            " @media only screen and (min-width:700px){&:hover{background-color:",
            ";color:",
            ";}}",
          ],
          f,
          function (e) {
            return e.color;
          },
          function (e) {
            return "var(--black)" === e.color ? "var(--white)" : "var(--black)";
          }
        ),
        h = Object(a.b)(c.a).withConfig({
          displayName: "button__StyledIcon",
          componentId: "sc-1y5yaws-4",
        })(["margin-left:10px;margin-top:-2px;margin-right:-5px;"]),
        y = function (e) {
          return e.disabled
            ? o.a.createElement(u, null, e.label)
            : e.link
            ? e.external || e.download
              ? o.a.createElement(
                  m,
                  {
                    className: e.className,
                    target: "_blank",
                    rel: "noopener noreferrer external",
                    href: e.link,
                    color: e.color,
                    download: e.download,
                  },
                  e.label,
                  o.a.createElement(h, {
                    icon: e.download ? l.a : l.b,
                    size: "1x",
                  })
                )
              : o.a.createElement(
                  p,
                  { className: e.className, to: e.link, color: e.color },
                  e.label
                )
            : o.a.createElement(
                d,
                { className: e.className, color: e.color, onClick: e.action },
                e.label
              );
        },
        b =
          (n("+6po"),
          function (e) {
            return o.a.createElement(
              "svg",
              Object.assign(
                { width: 44, height: 44, viewBox: "0 0 44 44", stroke: "#fff" },
                e
              ),
              o.a.createElement(
                "g",
                {
                  fill: "none",
                  fillRule: "evenodd",
                  stroke: e.color,
                  strokeWidth: 2,
                },
                o.a.createElement(
                  "circle",
                  { cx: 22, cy: 22, r: 1 },
                  o.a.createElement("animate", {
                    attributeName: "r",
                    begin: "0s",
                    dur: "1.8s",
                    values: "1; 20",
                    calcMode: "spline",
                    keyTimes: "0; 1",
                    keySplines: "0.165, 0.84, 0.44, 1",
                    repeatCount: "indefinite",
                  }),
                  o.a.createElement("animate", {
                    attributeName: "stroke-opacity",
                    begin: "0s",
                    dur: "1.8s",
                    values: "1; 0",
                    calcMode: "spline",
                    keyTimes: "0; 1",
                    keySplines: "0.3, 0.61, 0.355, 1",
                    repeatCount: "indefinite",
                  })
                ),
                o.a.createElement(
                  "circle",
                  { cx: 22, cy: 22, r: 1 },
                  o.a.createElement("animate", {
                    attributeName: "r",
                    begin: "-0.9s",
                    dur: "1.8s",
                    values: "1; 20",
                    calcMode: "spline",
                    keyTimes: "0; 1",
                    keySplines: "0.165, 0.84, 0.44, 1",
                    repeatCount: "indefinite",
                  }),
                  o.a.createElement("animate", {
                    attributeName: "stroke-opacity",
                    begin: "-0.9s",
                    dur: "1.8s",
                    values: "1; 0",
                    calcMode: "spline",
                    keyTimes: "0; 1",
                    keySplines: "0.3, 0.61, 0.355, 1",
                    repeatCount: "indefinite",
                  })
                )
              )
            );
          }),
        g = Object(a.a)([
          "display:flex;flex-direction:column;flex-shrink:0;padding:5vw;width:calc(var(--mobile-width) - 10vw);min-height:420px;@media only screen and (min-width:700px){padding:35px 40px;width:300px;min-height:460px;}@media only screen and (min-width:1200px){width:355px;}",
        ]),
        v = a.b.form.withConfig({
          displayName: "form__FormContainer",
          componentId: "sc-1hberzp-0",
        })(
          [
            "",
            " align-items:flex-start;justify-content:space-between;background-color:",
            ";",
          ],
          g,
          function (e) {
            return e.color;
          }
        ),
        w = a.b.form.withConfig({
          displayName: "form__RegularContainer",
          componentId: "sc-1hberzp-1",
        })(
          [
            "",
            " align-items:center;justify-content:center;background-color:",
            ";color:",
            ";",
          ],
          g,
          function (e) {
            return e.color;
          },
          function (e) {
            return "var(--yellow)" === e.color
              ? "var(--black)"
              : "var(--white)";
          }
        ),
        T = a.b.label.withConfig({
          displayName: "form__Field",
          componentId: "sc-1hberzp-2",
        })([
          "display:flex;flex-direction:column;margin-bottom:5px;width:100%;font-family:'Inter',sans-serif;font-size:1rem;font-weight:600;",
        ]),
        x = a.b.input.withConfig({
          displayName: "form__Input",
          componentId: "sc-1hberzp-3",
        })([
          "margin:5px 0;padding:0.5rem;border:2px solid var(--black);background-color:#ffffff;font-family:'Open Sans',sans-serif;font-size:1.125rem;",
        ]),
        E = a.b.textarea.withConfig({
          displayName: "form__TextArea",
          componentId: "sc-1hberzp-4",
        })([
          "resize:none;margin-top:5px;margin-bottom:-5px;padding:0.5rem;border:2px solid var(--black);background-color:#ffffff;font-family:'Inter',sans-serif;font-size:1.125rem;",
        ]),
        C = a.b.button.withConfig({
          displayName: "form__Button",
          componentId: "sc-1hberzp-5",
        })(
          [
            "margin-top:5vw;padding:0.75rem 1rem;border:2px solid var(--text);background-color:var(--bkg);color:var(--text);font-family:'Open Sans',sans-serif;font-size:1.125rem;font-weight:600;transition:0.1s ease;&:hover{cursor:pointer;background-color:",
            ";}@media only screen and (min-width:700px){margin-top:35px;}",
          ],
          function (e) {
            return e.color;
          }
        ),
        O = a.b.p.withConfig({
          displayName: "form__FormMessage",
          componentId: "sc-1hberzp-6",
        })([
          "text-align:center;font-size:1.125rem;@media only screen and (min-width:700px){font-size:1.4rem;}",
        ]),
        S = function (e) {
          var t = Object(r.useState)("idle"),
            n = t[0],
            a = t[1];
          switch (n) {
            case "idle":
              return o.a.createElement(
                v,
                {
                  color: "var(--" + e.theme + ")",
                  action: "https://usebasin.com/f/9d85adb927f2",
                  method: "POST",
                  onSubmit: function (e) {
                    e.preventDefault(), a("loading");
                    var t = e.currentTarget,
                      n = new FormData(t),
                      r = new XMLHttpRequest();
                    console.log("data:", n),
                      r.open("POST", t.action, !0),
                      (r.onload = function () {
                        200 === r.status
                          ? (a("submitted"), t.reset())
                          : a("failed");
                      }),
                      r.send(n);
                  },
                  id: "blog-contact-form",
                },
                o.a.createElement(
                  T,
                  null,
                  "Name",
                  o.a.createElement(x, {
                    required: !0,
                    name: "name",
                    type: "text",
                  })
                ),
                o.a.createElement(
                  T,
                  null,
                  "Email",
                  o.a.createElement(x, {
                    required: !0,
                    name: "email",
                    type: "email",
                  })
                ),
                o.a.createElement(
                  T,
                  null,
                  "Message",
                  o.a.createElement(E, {
                    required: !0,
                    name: "message",
                    rows: 7,
                  })
                ),
                o.a.createElement(
                  C,
                  { type: "submit", color: "var(--" + e.theme + ")" },
                  "Send Message"
                )
              );
            case "loading":
              return o.a.createElement(
                w,
                { color: "var(--" + e.theme + ")" },
                o.a.createElement(b, {
                  color: "yellow" === e.theme ? "var(--black)" : "var(--white)",
                })
              );
            case "submitted":
              return o.a.createElement(
                w,
                { color: "var(--" + e.theme + ")" },
                o.a.createElement(
                  O,
                  null,
                  "Thanks!",
                  o.a.createElement("br", null),
                  "We'll be in touch. 🙂"
                )
              );
            case "failed":
              return o.a.createElement(
                w,
                { color: "var(--" + e.theme + ")" },
                o.a.createElement(
                  O,
                  null,
                  "Something went wrong. 😶",
                  o.a.createElement("br", null),
                  "Please try again later."
                )
              );
          }
        },
        k = a.b.div.withConfig({
          displayName: "contactPrompt__StyledDiv",
          componentId: "xoxggy-0",
        })([
          "display:flex;flex-direction:column;align-items:flex-start;width:var(--mobile-width);margin-top:75px;margin-bottom:50px;@media only screen and (min-width:700px){flex-direction:row;align-items:center;justify-content:space-between;margin-top:150px;}@media only screen and (min-width:1200px){max-width:var(--desktop-width);}",
        ]),
        A = a.b.div.withConfig({
          displayName: "contactPrompt__Dialogue",
          componentId: "xoxggy-1",
        })([
          "display:flex;flex-direction:column;align-items:flex-start;margin-bottom:50px;h1{margin:0;}p{margin:20px 0;font-family:'Open Sans',sans-serif;font-size:1.25rem;}@media only screen and (min-width:700px){margin-right:5vw;p{margin:10px 0 30px;font-size:1.5rem;}}",
        ]),
        j = function (e) {
          return o.a.createElement(
            k,
            null,
            o.a.createElement(A, null, e.children),
            o.a.createElement(S, { theme: e.theme })
          );
        },
        I = n("9Dj+"),
        P = n("vrFN");
    },
    "Zr+g": function (e, t, n) {
      "use strict";
      n("7hzD"), n("Zv3x"), n("KjoO"), n("wX7z"), n("J6Iv");
      var r,
        o = n("PEXJ"),
        a = (r = o) && "object" == typeof r && "default" in r ? r.default : r;
      function i(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var c = !(
        "undefined" == typeof window ||
        !window.document ||
        !window.document.createElement
      );
      e.exports = function (e, t, n) {
        if ("function" != typeof e)
          throw new Error("Expected reducePropsToState to be a function.");
        if ("function" != typeof t)
          throw new Error(
            "Expected handleStateChangeOnClient to be a function."
          );
        if (void 0 !== n && "function" != typeof n)
          throw new Error(
            "Expected mapStateOnServer to either be undefined or a function."
          );
        return function (r) {
          if ("function" != typeof r)
            throw new Error(
              "Expected WrappedComponent to be a React component."
            );
          var l,
            s = [];
          function u() {
            (l = e(
              s.map(function (e) {
                return e.props;
              })
            )),
              f.canUseDOM ? t(l) : n && (l = n(l));
          }
          var f = (function (e) {
            var t, n;
            function o() {
              return e.apply(this, arguments) || this;
            }
            (n = e),
              ((t = o).prototype = Object.create(n.prototype)),
              (t.prototype.constructor = t),
              (t.__proto__ = n),
              (o.peek = function () {
                return l;
              }),
              (o.rewind = function () {
                if (o.canUseDOM)
                  throw new Error(
                    "You may only call rewind() on the server. Call peek() to read the current state."
                  );
                var e = l;
                return (l = void 0), (s = []), e;
              });
            var i = o.prototype;
            return (
              (i.UNSAFE_componentWillMount = function () {
                s.push(this), u();
              }),
              (i.componentDidUpdate = function () {
                u();
              }),
              (i.componentWillUnmount = function () {
                var e = s.indexOf(this);
                s.splice(e, 1), u();
              }),
              (i.render = function () {
                return a.createElement(r, this.props);
              }),
              o
            );
          })(o.PureComponent);
          return (
            i(
              f,
              "displayName",
              "SideEffect(" +
                (function (e) {
                  return e.displayName || e.name || "Component";
                })(r) +
                ")"
            ),
            i(f, "canUseDOM", c),
            f
          );
        };
      };
    },
    eSDs: function (e, t, n) {
      "use strict";
      (function (e) {
        n.d(t, "a", function () {
          return he;
        });
        n("F/MA"),
          n("h94r"),
          n("QAmW"),
          n("HhuL"),
          n("qoc9"),
          n("1U3A"),
          n("RdHt"),
          n("swxd"),
          n("7hzD"),
          n("u4T+"),
          n("wX7z"),
          n("+6po"),
          n("J6Iv"),
          n("4S+F"),
          n("YPMR"),
          n("ZX0R"),
          n("acUJ"),
          n("uG1i"),
          n("vqrR"),
          n("Wd1V"),
          n("Zv3x");
        var r,
          o,
          a,
          i,
          c = n("xRJz"),
          l = n.n(c),
          s = n("Zr+g"),
          u = n.n(s),
          f = n("rGIa"),
          d = n.n(f),
          p = n("PEXJ"),
          m = n.n(p),
          h = n("WBZ9"),
          y = n.n(h),
          b = "bodyAttributes",
          g = "htmlAttributes",
          v = "titleAttributes",
          w = {
            BASE: "base",
            BODY: "body",
            HEAD: "head",
            HTML: "html",
            LINK: "link",
            META: "meta",
            NOSCRIPT: "noscript",
            SCRIPT: "script",
            STYLE: "style",
            TITLE: "title",
          },
          T =
            (Object.keys(w).map(function (e) {
              return w[e];
            }),
            "charset"),
          x = "cssText",
          E = "href",
          C = "http-equiv",
          O = "innerHTML",
          S = "itemprop",
          k = "name",
          A = "property",
          j = "rel",
          I = "src",
          P = "target",
          N = {
            accesskey: "accessKey",
            charset: "charSet",
            class: "className",
            contenteditable: "contentEditable",
            contextmenu: "contextMenu",
            "http-equiv": "httpEquiv",
            itemprop: "itemProp",
            tabindex: "tabIndex",
          },
          _ = "defaultTitle",
          M = "defer",
          L = "encodeSpecialCharacters",
          z = "onChangeClientState",
          R = "titleTemplate",
          D = Object.keys(N).reduce(function (e, t) {
            return (e[N[t]] = t), e;
          }, {}),
          q = [w.NOSCRIPT, w.SCRIPT, w.STYLE],
          H =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                },
          B = function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          },
          F = (function () {
            function e(e, t) {
              for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (r.enumerable = r.enumerable || !1),
                  (r.configurable = !0),
                  "value" in r && (r.writable = !0),
                  Object.defineProperty(e, r.key, r);
              }
            }
            return function (t, n, r) {
              return n && e(t.prototype, n), r && e(t, r), t;
            };
          })(),
          J =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            },
          U = function (e, t) {
            var n = {};
            for (var r in e)
              t.indexOf(r) >= 0 ||
                (Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]));
            return n;
          },
          W = function (e, t) {
            if (!e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return !t || ("object" != typeof t && "function" != typeof t)
              ? e
              : t;
          },
          Y = function (e) {
            var t =
              !(arguments.length > 1 && void 0 !== arguments[1]) ||
              arguments[1];
            return !1 === t
              ? String(e)
              : String(e)
                  .replace(/&/g, "&amp;")
                  .replace(/</g, "&lt;")
                  .replace(/>/g, "&gt;")
                  .replace(/"/g, "&quot;")
                  .replace(/'/g, "&#x27;");
          },
          K = function (e) {
            var t = $(e, w.TITLE),
              n = $(e, R);
            if (n && t)
              return n.replace(/%s/g, function () {
                return Array.isArray(t) ? t.join("") : t;
              });
            var r = $(e, _);
            return t || r || void 0;
          },
          X = function (e) {
            return $(e, z) || function () {};
          },
          Z = function (e, t) {
            return t
              .filter(function (t) {
                return void 0 !== t[e];
              })
              .map(function (t) {
                return t[e];
              })
              .reduce(function (e, t) {
                return J({}, e, t);
              }, {});
          },
          V = function (e, t) {
            return t
              .filter(function (e) {
                return void 0 !== e[w.BASE];
              })
              .map(function (e) {
                return e[w.BASE];
              })
              .reverse()
              .reduce(function (t, n) {
                if (!t.length)
                  for (var r = Object.keys(n), o = 0; o < r.length; o++) {
                    var a = r[o].toLowerCase();
                    if (-1 !== e.indexOf(a) && n[a]) return t.concat(n);
                  }
                return t;
              }, []);
          },
          G = function (e, t, n) {
            var r = {};
            return n
              .filter(function (t) {
                return (
                  !!Array.isArray(t[e]) ||
                  (void 0 !== t[e] &&
                    re(
                      "Helmet: " +
                        e +
                        ' should be of type "Array". Instead found type "' +
                        H(t[e]) +
                        '"'
                    ),
                  !1)
                );
              })
              .map(function (t) {
                return t[e];
              })
              .reverse()
              .reduce(function (e, n) {
                var o = {};
                n.filter(function (e) {
                  for (
                    var n = void 0, a = Object.keys(e), i = 0;
                    i < a.length;
                    i++
                  ) {
                    var c = a[i],
                      l = c.toLowerCase();
                    -1 === t.indexOf(l) ||
                      (n === j && "canonical" === e[n].toLowerCase()) ||
                      (l === j && "stylesheet" === e[l].toLowerCase()) ||
                      (n = l),
                      -1 === t.indexOf(c) ||
                        (c !== O && c !== x && c !== S) ||
                        (n = c);
                  }
                  if (!n || !e[n]) return !1;
                  var s = e[n].toLowerCase();
                  return (
                    r[n] || (r[n] = {}),
                    o[n] || (o[n] = {}),
                    !r[n][s] && ((o[n][s] = !0), !0)
                  );
                })
                  .reverse()
                  .forEach(function (t) {
                    return e.push(t);
                  });
                for (var a = Object.keys(o), i = 0; i < a.length; i++) {
                  var c = a[i],
                    l = y()({}, r[c], o[c]);
                  r[c] = l;
                }
                return e;
              }, [])
              .reverse();
          },
          $ = function (e, t) {
            for (var n = e.length - 1; n >= 0; n--) {
              var r = e[n];
              if (r.hasOwnProperty(t)) return r[t];
            }
            return null;
          },
          Q =
            ((r = Date.now()),
            function (e) {
              var t = Date.now();
              t - r > 16
                ? ((r = t), e(t))
                : setTimeout(function () {
                    Q(e);
                  }, 0);
            }),
          ee = function (e) {
            return clearTimeout(e);
          },
          te =
            "undefined" != typeof window
              ? (window.requestAnimationFrame &&
                  window.requestAnimationFrame.bind(window)) ||
                window.webkitRequestAnimationFrame ||
                window.mozRequestAnimationFrame ||
                Q
              : e.requestAnimationFrame || Q,
          ne =
            "undefined" != typeof window
              ? window.cancelAnimationFrame ||
                window.webkitCancelAnimationFrame ||
                window.mozCancelAnimationFrame ||
                ee
              : e.cancelAnimationFrame || ee,
          re = function (e) {
            return (
              console && "function" == typeof console.warn && console.warn(e)
            );
          },
          oe = null,
          ae = function (e, t) {
            var n = e.baseTag,
              r = e.bodyAttributes,
              o = e.htmlAttributes,
              a = e.linkTags,
              i = e.metaTags,
              c = e.noscriptTags,
              l = e.onChangeClientState,
              s = e.scriptTags,
              u = e.styleTags,
              f = e.title,
              d = e.titleAttributes;
            le(w.BODY, r), le(w.HTML, o), ce(f, d);
            var p = {
                baseTag: se(w.BASE, n),
                linkTags: se(w.LINK, a),
                metaTags: se(w.META, i),
                noscriptTags: se(w.NOSCRIPT, c),
                scriptTags: se(w.SCRIPT, s),
                styleTags: se(w.STYLE, u),
              },
              m = {},
              h = {};
            Object.keys(p).forEach(function (e) {
              var t = p[e],
                n = t.newTags,
                r = t.oldTags;
              n.length && (m[e] = n), r.length && (h[e] = p[e].oldTags);
            }),
              t && t(),
              l(e, m, h);
          },
          ie = function (e) {
            return Array.isArray(e) ? e.join("") : e;
          },
          ce = function (e, t) {
            void 0 !== e && document.title !== e && (document.title = ie(e)),
              le(w.TITLE, t);
          },
          le = function (e, t) {
            var n = document.getElementsByTagName(e)[0];
            if (n) {
              for (
                var r = n.getAttribute("data-react-helmet"),
                  o = r ? r.split(",") : [],
                  a = [].concat(o),
                  i = Object.keys(t),
                  c = 0;
                c < i.length;
                c++
              ) {
                var l = i[c],
                  s = t[l] || "";
                n.getAttribute(l) !== s && n.setAttribute(l, s),
                  -1 === o.indexOf(l) && o.push(l);
                var u = a.indexOf(l);
                -1 !== u && a.splice(u, 1);
              }
              for (var f = a.length - 1; f >= 0; f--) n.removeAttribute(a[f]);
              o.length === a.length
                ? n.removeAttribute("data-react-helmet")
                : n.getAttribute("data-react-helmet") !== i.join(",") &&
                  n.setAttribute("data-react-helmet", i.join(","));
            }
          },
          se = function (e, t) {
            var n = document.head || document.querySelector(w.HEAD),
              r = n.querySelectorAll(e + "[data-react-helmet]"),
              o = Array.prototype.slice.call(r),
              a = [],
              i = void 0;
            return (
              t &&
                t.length &&
                t.forEach(function (t) {
                  var n = document.createElement(e);
                  for (var r in t)
                    if (t.hasOwnProperty(r))
                      if (r === O) n.innerHTML = t.innerHTML;
                      else if (r === x)
                        n.styleSheet
                          ? (n.styleSheet.cssText = t.cssText)
                          : n.appendChild(document.createTextNode(t.cssText));
                      else {
                        var c = void 0 === t[r] ? "" : t[r];
                        n.setAttribute(r, c);
                      }
                  n.setAttribute("data-react-helmet", "true"),
                    o.some(function (e, t) {
                      return (i = t), n.isEqualNode(e);
                    })
                      ? o.splice(i, 1)
                      : a.push(n);
                }),
              o.forEach(function (e) {
                return e.parentNode.removeChild(e);
              }),
              a.forEach(function (e) {
                return n.appendChild(e);
              }),
              { oldTags: o, newTags: a }
            );
          },
          ue = function (e) {
            return Object.keys(e).reduce(function (t, n) {
              var r = void 0 !== e[n] ? n + '="' + e[n] + '"' : "" + n;
              return t ? t + " " + r : r;
            }, "");
          },
          fe = function (e) {
            var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            return Object.keys(e).reduce(function (t, n) {
              return (t[N[n] || n] = e[n]), t;
            }, t);
          },
          de = function (e, t, n) {
            switch (e) {
              case w.TITLE:
                return {
                  toComponent: function () {
                    return (
                      (e = t.title),
                      (n = t.titleAttributes),
                      ((r = { key: e })["data-react-helmet"] = !0),
                      (o = fe(n, r)),
                      [m.a.createElement(w.TITLE, o, e)]
                    );
                    var e, n, r, o;
                  },
                  toString: function () {
                    return (function (e, t, n, r) {
                      var o = ue(n),
                        a = ie(t);
                      return o
                        ? "<" +
                            e +
                            ' data-react-helmet="true" ' +
                            o +
                            ">" +
                            Y(a, r) +
                            "</" +
                            e +
                            ">"
                        : "<" +
                            e +
                            ' data-react-helmet="true">' +
                            Y(a, r) +
                            "</" +
                            e +
                            ">";
                    })(e, t.title, t.titleAttributes, n);
                  },
                };
              case b:
              case g:
                return {
                  toComponent: function () {
                    return fe(t);
                  },
                  toString: function () {
                    return ue(t);
                  },
                };
              default:
                return {
                  toComponent: function () {
                    return (function (e, t) {
                      return t.map(function (t, n) {
                        var r,
                          o = (((r = { key: n })["data-react-helmet"] = !0), r);
                        return (
                          Object.keys(t).forEach(function (e) {
                            var n = N[e] || e;
                            if (n === O || n === x) {
                              var r = t.innerHTML || t.cssText;
                              o.dangerouslySetInnerHTML = { __html: r };
                            } else o[n] = t[e];
                          }),
                          m.a.createElement(e, o)
                        );
                      });
                    })(e, t);
                  },
                  toString: function () {
                    return (function (e, t, n) {
                      return t.reduce(function (t, r) {
                        var o = Object.keys(r)
                            .filter(function (e) {
                              return !(e === O || e === x);
                            })
                            .reduce(function (e, t) {
                              var o =
                                void 0 === r[t]
                                  ? t
                                  : t + '="' + Y(r[t], n) + '"';
                              return e ? e + " " + o : o;
                            }, ""),
                          a = r.innerHTML || r.cssText || "",
                          i = -1 === q.indexOf(e);
                        return (
                          t +
                          "<" +
                          e +
                          ' data-react-helmet="true" ' +
                          o +
                          (i ? "/>" : ">" + a + "</" + e + ">")
                        );
                      }, "");
                    })(e, t, n);
                  },
                };
            }
          },
          pe = function (e) {
            var t = e.baseTag,
              n = e.bodyAttributes,
              r = e.encode,
              o = e.htmlAttributes,
              a = e.linkTags,
              i = e.metaTags,
              c = e.noscriptTags,
              l = e.scriptTags,
              s = e.styleTags,
              u = e.title,
              f = void 0 === u ? "" : u,
              d = e.titleAttributes;
            return {
              base: de(w.BASE, t, r),
              bodyAttributes: de(b, n, r),
              htmlAttributes: de(g, o, r),
              link: de(w.LINK, a, r),
              meta: de(w.META, i, r),
              noscript: de(w.NOSCRIPT, c, r),
              script: de(w.SCRIPT, l, r),
              style: de(w.STYLE, s, r),
              title: de(w.TITLE, { title: f, titleAttributes: d }, r),
            };
          },
          me = u()(
            function (e) {
              return {
                baseTag: V([E, P], e),
                bodyAttributes: Z(b, e),
                defer: $(e, M),
                encode: $(e, L),
                htmlAttributes: Z(g, e),
                linkTags: G(w.LINK, [j, E], e),
                metaTags: G(w.META, [k, T, C, A, S], e),
                noscriptTags: G(w.NOSCRIPT, [O], e),
                onChangeClientState: X(e),
                scriptTags: G(w.SCRIPT, [I, O], e),
                styleTags: G(w.STYLE, [x], e),
                title: K(e),
                titleAttributes: Z(v, e),
              };
            },
            function (e) {
              oe && ne(oe),
                e.defer
                  ? (oe = te(function () {
                      ae(e, function () {
                        oe = null;
                      });
                    }))
                  : (ae(e), (oe = null));
            },
            pe
          )(function () {
            return null;
          }),
          he =
            ((o = me),
            (i = a = (function (e) {
              function t() {
                return B(this, t), W(this, e.apply(this, arguments));
              }
              return (
                (function (e, t) {
                  if ("function" != typeof t && null !== t)
                    throw new TypeError(
                      "Super expression must either be null or a function, not " +
                        typeof t
                    );
                  (e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                      value: e,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0,
                    },
                  })),
                    t &&
                      (Object.setPrototypeOf
                        ? Object.setPrototypeOf(e, t)
                        : (e.__proto__ = t));
                })(t, e),
                (t.prototype.shouldComponentUpdate = function (e) {
                  return !d()(this.props, e);
                }),
                (t.prototype.mapNestedChildrenToProps = function (e, t) {
                  if (!t) return null;
                  switch (e.type) {
                    case w.SCRIPT:
                    case w.NOSCRIPT:
                      return { innerHTML: t };
                    case w.STYLE:
                      return { cssText: t };
                  }
                  throw new Error(
                    "<" +
                      e.type +
                      " /> elements are self-closing and can not contain children. Refer to our API for more information."
                  );
                }),
                (t.prototype.flattenArrayTypeChildren = function (e) {
                  var t,
                    n = e.child,
                    r = e.arrayTypeChildren,
                    o = e.newChildProps,
                    a = e.nestedChildren;
                  return J(
                    {},
                    r,
                    (((t = {})[n.type] = [].concat(r[n.type] || [], [
                      J({}, o, this.mapNestedChildrenToProps(n, a)),
                    ])),
                    t)
                  );
                }),
                (t.prototype.mapObjectTypeChildren = function (e) {
                  var t,
                    n,
                    r = e.child,
                    o = e.newProps,
                    a = e.newChildProps,
                    i = e.nestedChildren;
                  switch (r.type) {
                    case w.TITLE:
                      return J(
                        {},
                        o,
                        (((t = {})[r.type] = i),
                        (t.titleAttributes = J({}, a)),
                        t)
                      );
                    case w.BODY:
                      return J({}, o, { bodyAttributes: J({}, a) });
                    case w.HTML:
                      return J({}, o, { htmlAttributes: J({}, a) });
                  }
                  return J({}, o, (((n = {})[r.type] = J({}, a)), n));
                }),
                (t.prototype.mapArrayTypeChildrenToProps = function (e, t) {
                  var n = J({}, t);
                  return (
                    Object.keys(e).forEach(function (t) {
                      var r;
                      n = J({}, n, (((r = {})[t] = e[t]), r));
                    }),
                    n
                  );
                }),
                (t.prototype.warnOnInvalidChildren = function (e, t) {
                  return !0;
                }),
                (t.prototype.mapChildrenToProps = function (e, t) {
                  var n = this,
                    r = {};
                  return (
                    m.a.Children.forEach(e, function (e) {
                      if (e && e.props) {
                        var o = e.props,
                          a = o.children,
                          i = (function (e) {
                            var t =
                              arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : {};
                            return Object.keys(e).reduce(function (t, n) {
                              return (t[D[n] || n] = e[n]), t;
                            }, t);
                          })(U(o, ["children"]));
                        switch ((n.warnOnInvalidChildren(e, a), e.type)) {
                          case w.LINK:
                          case w.META:
                          case w.NOSCRIPT:
                          case w.SCRIPT:
                          case w.STYLE:
                            r = n.flattenArrayTypeChildren({
                              child: e,
                              arrayTypeChildren: r,
                              newChildProps: i,
                              nestedChildren: a,
                            });
                            break;
                          default:
                            t = n.mapObjectTypeChildren({
                              child: e,
                              newProps: t,
                              newChildProps: i,
                              nestedChildren: a,
                            });
                        }
                      }
                    }),
                    (t = this.mapArrayTypeChildrenToProps(r, t))
                  );
                }),
                (t.prototype.render = function () {
                  var e = this.props,
                    t = e.children,
                    n = U(e, ["children"]),
                    r = J({}, n);
                  return (
                    t && (r = this.mapChildrenToProps(t, r)),
                    m.a.createElement(o, r)
                  );
                }),
                F(t, null, [
                  {
                    key: "canUseDOM",
                    set: function (e) {
                      o.canUseDOM = e;
                    },
                  },
                ]),
                t
              );
            })(m.a.Component)),
            (a.propTypes = {
              base: l.a.object,
              bodyAttributes: l.a.object,
              children: l.a.oneOfType([l.a.arrayOf(l.a.node), l.a.node]),
              defaultTitle: l.a.string,
              defer: l.a.bool,
              encodeSpecialCharacters: l.a.bool,
              htmlAttributes: l.a.object,
              link: l.a.arrayOf(l.a.object),
              meta: l.a.arrayOf(l.a.object),
              noscript: l.a.arrayOf(l.a.object),
              onChangeClientState: l.a.func,
              script: l.a.arrayOf(l.a.object),
              style: l.a.arrayOf(l.a.object),
              title: l.a.string,
              titleAttributes: l.a.object,
              titleTemplate: l.a.string,
            }),
            (a.defaultProps = { defer: !0, encodeSpecialCharacters: !0 }),
            (a.peek = o.peek),
            (a.rewind = function () {
              var e = o.rewind();
              return (
                e ||
                  (e = pe({
                    baseTag: [],
                    bodyAttributes: {},
                    encodeSpecialCharacters: !0,
                    htmlAttributes: {},
                    linkTags: [],
                    metaTags: [],
                    noscriptTags: [],
                    scriptTags: [],
                    styleTags: [],
                    title: "",
                    titleAttributes: {},
                  })),
                e
              );
            }),
            i);
        he.renderStatic = he.rewind;
      }.call(this, n("PnTs")));
    },
    rGIa: function (e, t, n) {
      n("kyHX"),
        n("Wd1V"),
        n("PTpO"),
        n("1a1p"),
        n("EUHx"),
        n("zI7f"),
        n("RdHt"),
        n("OLef"),
        n("acUJ"),
        n("uG1i"),
        n("vqrR"),
        n("6/6d"),
        n("ZThR");
      var r = "undefined" != typeof Element,
        o = "function" == typeof Map,
        a = "function" == typeof Set,
        i = "function" == typeof ArrayBuffer && !!ArrayBuffer.isView;
      e.exports = function (e, t) {
        try {
          return (function e(t, n) {
            if (t === n) return !0;
            if (t && n && "object" == typeof t && "object" == typeof n) {
              if (t.constructor !== n.constructor) return !1;
              var c, l, s, u;
              if (Array.isArray(t)) {
                if ((c = t.length) != n.length) return !1;
                for (l = c; 0 != l--; ) if (!e(t[l], n[l])) return !1;
                return !0;
              }
              if (o && t instanceof Map && n instanceof Map) {
                if (t.size !== n.size) return !1;
                for (u = t.entries(); !(l = u.next()).done; )
                  if (!n.has(l.value[0])) return !1;
                for (u = t.entries(); !(l = u.next()).done; )
                  if (!e(l.value[1], n.get(l.value[0]))) return !1;
                return !0;
              }
              if (a && t instanceof Set && n instanceof Set) {
                if (t.size !== n.size) return !1;
                for (u = t.entries(); !(l = u.next()).done; )
                  if (!n.has(l.value[0])) return !1;
                return !0;
              }
              if (i && ArrayBuffer.isView(t) && ArrayBuffer.isView(n)) {
                if ((c = t.length) != n.length) return !1;
                for (l = c; 0 != l--; ) if (t[l] !== n[l]) return !1;
                return !0;
              }
              if (t.constructor === RegExp)
                return t.source === n.source && t.flags === n.flags;
              if (t.valueOf !== Object.prototype.valueOf)
                return t.valueOf() === n.valueOf();
              if (t.toString !== Object.prototype.toString)
                return t.toString() === n.toString();
              if ((c = (s = Object.keys(t)).length) !== Object.keys(n).length)
                return !1;
              for (l = c; 0 != l--; )
                if (!Object.prototype.hasOwnProperty.call(n, s[l])) return !1;
              if (r && t instanceof Element) return !1;
              for (l = c; 0 != l--; )
                if (
                  (("_owner" !== s[l] && "__v" !== s[l] && "__o" !== s[l]) ||
                    !t.$$typeof) &&
                  !e(t[s[l]], n[s[l]])
                )
                  return !1;
              return !0;
            }
            return t != t && n != n;
          })(e, t);
        } catch (n) {
          if ((n.message || "").match(/stack|recursion/i))
            return (
              console.warn("react-fast-compare cannot handle circular refs"), !1
            );
          throw n;
        }
      };
    },
    vrFN: function (e, t, n) {
      "use strict";
      var r = n("51K9"),
        o = n("PEXJ"),
        a = n.n(o),
        i = n("eSDs");
      function c(e) {
        var t = e.description,
          n = e.lang,
          o = e.meta,
          c = e.title,
          l = r.data.site,
          s = t || l.siteMetadata.description;
        return a.a.createElement(i.a, {
          htmlAttributes: { lang: n },
          title: c,
          titleTemplate: "%s | " + l.siteMetadata.title,
          meta: [
            { name: "description", content: s },
            { property: "og:title", content: c },
            { property: "og:description", content: s },
            { property: "og:type", content: "website" },
            { name: "twitter:card", content: "summary" },
            { name: "twitter:creator", content: l.siteMetadata.author },
            { name: "twitter:title", content: c },
            { name: "twitter:description", content: s },
          ].concat(o),
        });
      }
      (c.defaultProps = { lang: "en", meta: [], description: "" }), (t.a = c);
    },
  },
]);
//# sourceMappingURL=b13d46458e7b5e0ee93eef10e37c72a28990ee0b-1db7151cd1d118181043.js.map
