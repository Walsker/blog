(window.webpackJsonp = window.webpackJsonp || []).push([
  [5],
  {
    "0zXP": function (e, t, i) {
      "use strict";
      var r = i("Fe6i"),
        a = i("b+id")(6),
        n = "findIndex",
        s = !0;
      n in [] &&
        Array(1)[n](function () {
          s = !1;
        }),
        r(r.P + r.F * s, "Array", {
          findIndex: function (e) {
            return a(this, e, arguments.length > 1 ? arguments[1] : void 0);
          },
        }),
        i("Hd8C")(n);
    },
    "7YBW": function (e, t, i) {
      "use strict";
      var r,
        a = i("sEBd"),
        n = i("b+id")(0),
        s = i("Ry+5"),
        o = i("db6v"),
        d = i("8SDu"),
        l = i("j9sm"),
        u = i("nGhD"),
        c = i("T20X"),
        f = i("T20X"),
        h = !a.ActiveXObject && "ActiveXObject" in a,
        g = o.getWeak,
        p = Object.isExtensible,
        m = l.ufstore,
        b = function (e) {
          return function () {
            return e(this, arguments.length > 0 ? arguments[0] : void 0);
          };
        },
        v = {
          get: function (e) {
            if (u(e)) {
              var t = g(e);
              return !0 === t
                ? m(c(this, "WeakMap")).get(e)
                : t
                ? t[this._i]
                : void 0;
            }
          },
          set: function (e, t) {
            return l.def(c(this, "WeakMap"), e, t);
          },
        },
        y = (e.exports = i("Y5xr")("WeakMap", b, v, l, !0, !0));
      f &&
        h &&
        (d((r = l.getConstructor(b, "WeakMap")).prototype, v),
        (o.NEED = !0),
        n(["delete", "has", "get", "set"], function (e) {
          var t = y.prototype,
            i = t[e];
          s(t, e, function (t, a) {
            if (u(t) && !p(t)) {
              this._f || (this._f = new r());
              var n = this._f[e](t, a);
              return "set" == e ? this : n;
            }
            return i.call(this, t, a);
          });
        }));
    },
    EfEe: function (e, t, i) {
      "use strict";
      i("acUJ"),
        i("uG1i"),
        i("vqrR"),
        i("6/6d"),
        i("7YBW"),
        i("0zXP"),
        i("L5Lv");
      var r = i("AL4u");
      (t.__esModule = !0), (t.default = void 0);
      var a,
        n = r(i("dhmA")),
        s = r(i("7Ckq")),
        o = r(i("Z8zD")),
        d = r(i("KNJF")),
        l = r(i("PEXJ")),
        u = r(i("xRJz")),
        c = function (e) {
          var t = (0, d.default)({}, e),
            i = t.resolutions,
            r = t.sizes,
            a = t.critical;
          return (
            i && ((t.fixed = i), delete t.resolutions),
            r && ((t.fluid = r), delete t.sizes),
            a && (t.loading = "eager"),
            t.fluid && (t.fluid = w([].concat(t.fluid))),
            t.fixed && (t.fixed = w([].concat(t.fixed))),
            t
          );
        },
        f = function (e) {
          var t = e.media;
          return !!t && v && !!window.matchMedia(t).matches;
        },
        h = function (e) {
          var t = e.fluid,
            i = e.fixed;
          return g(t || i).src;
        },
        g = function (e) {
          if (
            v &&
            (function (e) {
              return (
                !!e &&
                Array.isArray(e) &&
                e.some(function (e) {
                  return void 0 !== e.media;
                })
              );
            })(e)
          ) {
            var t = e.findIndex(f);
            if (-1 !== t) return e[t];
            var i = e.findIndex(function (e) {
              return void 0 === e.media;
            });
            if (-1 !== i) return e[i];
          }
          return e[0];
        },
        p = Object.create({}),
        m = function (e) {
          var t = c(e),
            i = h(t);
          return p[i] || !1;
        },
        b =
          "undefined" != typeof HTMLImageElement &&
          "loading" in HTMLImageElement.prototype,
        v = "undefined" != typeof window,
        y = v && window.IntersectionObserver,
        S = new WeakMap();
      function E(e) {
        return e.map(function (e) {
          var t = e.src,
            i = e.srcSet,
            r = e.srcSetWebp,
            a = e.media,
            n = e.sizes;
          return l.default.createElement(
            l.default.Fragment,
            { key: t },
            r &&
              l.default.createElement("source", {
                type: "image/webp",
                media: a,
                srcSet: r,
                sizes: n,
              }),
            l.default.createElement("source", { media: a, srcSet: i, sizes: n })
          );
        });
      }
      function w(e) {
        var t = [],
          i = [];
        return (
          e.forEach(function (e) {
            return (e.media ? t : i).push(e);
          }),
          [].concat(t, i)
        );
      }
      function L(e) {
        return e.map(function (e) {
          var t = e.src,
            i = e.media,
            r = e.tracedSVG;
          return l.default.createElement("source", {
            key: t,
            media: i,
            srcSet: r,
          });
        });
      }
      function R(e) {
        return e.map(function (e) {
          var t = e.src,
            i = e.media,
            r = e.base64;
          return l.default.createElement("source", {
            key: t,
            media: i,
            srcSet: r,
          });
        });
      }
      function x(e, t) {
        var i = e.srcSet,
          r = e.srcSetWebp,
          a = e.media,
          n = e.sizes;
        return (
          "<source " +
          (t ? "type='image/webp' " : "") +
          (a ? 'media="' + a + '" ' : "") +
          'srcset="' +
          (t ? r : i) +
          '" ' +
          (n ? 'sizes="' + n + '" ' : "") +
          "/>"
        );
      }
      var I = function (e, t) {
          var i =
            (void 0 === a &&
              "undefined" != typeof window &&
              window.IntersectionObserver &&
              (a = new window.IntersectionObserver(
                function (e) {
                  e.forEach(function (e) {
                    if (S.has(e.target)) {
                      var t = S.get(e.target);
                      (e.isIntersecting || e.intersectionRatio > 0) &&
                        (a.unobserve(e.target), S.delete(e.target), t());
                    }
                  });
                },
                { rootMargin: "200px" }
              )),
            a);
          return (
            i && (i.observe(e), S.set(e, t)),
            function () {
              i.unobserve(e), S.delete(e);
            }
          );
        },
        O = function (e) {
          var t = e.src ? 'src="' + e.src + '" ' : 'src="" ',
            i = e.sizes ? 'sizes="' + e.sizes + '" ' : "",
            r = e.srcSet ? 'srcset="' + e.srcSet + '" ' : "",
            a = e.title ? 'title="' + e.title + '" ' : "",
            n = e.alt ? 'alt="' + e.alt + '" ' : 'alt="" ',
            s = e.width ? 'width="' + e.width + '" ' : "",
            o = e.height ? 'height="' + e.height + '" ' : "",
            d = e.crossOrigin ? 'crossorigin="' + e.crossOrigin + '" ' : "",
            l = e.loading ? 'loading="' + e.loading + '" ' : "",
            u = e.draggable ? 'draggable="' + e.draggable + '" ' : "";
          return (
            "<picture>" +
            e.imageVariants
              .map(function (e) {
                return (e.srcSetWebp ? x(e, !0) : "") + x(e);
              })
              .join("") +
            "<img " +
            l +
            s +
            o +
            i +
            r +
            t +
            n +
            a +
            d +
            u +
            'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'
          );
        },
        z = l.default.forwardRef(function (e, t) {
          var i = e.src,
            r = e.imageVariants,
            a = e.generateSources,
            n = e.spreadProps,
            s = e.ariaHidden,
            o = l.default.createElement(
              _,
              (0, d.default)({ ref: t, src: i }, n, { ariaHidden: s })
            );
          return r.length > 1
            ? l.default.createElement("picture", null, a(r), o)
            : o;
        }),
        _ = l.default.forwardRef(function (e, t) {
          var i = e.sizes,
            r = e.srcSet,
            a = e.src,
            n = e.style,
            s = e.onLoad,
            u = e.onError,
            c = e.loading,
            f = e.draggable,
            h = e.ariaHidden,
            g = (0, o.default)(e, [
              "sizes",
              "srcSet",
              "src",
              "style",
              "onLoad",
              "onError",
              "loading",
              "draggable",
              "ariaHidden",
            ]);
          return l.default.createElement(
            "img",
            (0, d.default)(
              { "aria-hidden": h, sizes: i, srcSet: r, src: a },
              g,
              {
                onLoad: s,
                onError: u,
                ref: t,
                loading: c,
                draggable: f,
                style: (0, d.default)(
                  {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                  },
                  n
                ),
              }
            )
          );
        });
      _.propTypes = {
        style: u.default.object,
        onError: u.default.func,
        onLoad: u.default.func,
      };
      var C = (function (e) {
        function t(t) {
          var i;
          ((i = e.call(this, t) || this).seenBefore = v && m(t)),
            (i.isCritical = "eager" === t.loading || t.critical),
            (i.addNoScript = !(i.isCritical && !t.fadeIn)),
            (i.useIOSupport = !b && y && !i.isCritical && !i.seenBefore);
          var r = i.isCritical || (v && (b || !i.useIOSupport));
          return (
            (i.state = {
              isVisible: r,
              imgLoaded: !1,
              imgCached: !1,
              fadeIn: !i.seenBefore && t.fadeIn,
            }),
            (i.imageRef = l.default.createRef()),
            (i.placeholderRef = t.placeholderRef || l.default.createRef()),
            (i.handleImageLoaded = i.handleImageLoaded.bind((0, n.default)(i))),
            (i.handleRef = i.handleRef.bind((0, n.default)(i))),
            i
          );
        }
        (0, s.default)(t, e);
        var i = t.prototype;
        return (
          (i.componentDidMount = function () {
            if (
              (this.state.isVisible &&
                "function" == typeof this.props.onStartLoad &&
                this.props.onStartLoad({ wasCached: m(this.props) }),
              this.isCritical)
            ) {
              var e = this.imageRef.current;
              e && e.complete && this.handleImageLoaded();
            }
          }),
          (i.componentWillUnmount = function () {
            this.cleanUpListeners && this.cleanUpListeners();
          }),
          (i.handleRef = function (e) {
            var t = this;
            this.useIOSupport &&
              e &&
              (this.cleanUpListeners = I(e, function () {
                var e = m(t.props);
                t.state.isVisible ||
                  "function" != typeof t.props.onStartLoad ||
                  t.props.onStartLoad({ wasCached: e }),
                  t.setState({ isVisible: !0 }, function () {
                    t.setState({
                      imgLoaded: e,
                      imgCached: !(
                        !t.imageRef.current || !t.imageRef.current.currentSrc
                      ),
                    });
                  });
              }));
          }),
          (i.handleImageLoaded = function () {
            var e, t, i;
            (e = this.props),
              (t = c(e)),
              (i = h(t)),
              (p[i] = !0),
              this.setState({ imgLoaded: !0 }),
              this.props.onLoad && this.props.onLoad();
          }),
          (i.render = function () {
            var e = c(this.props),
              t = e.title,
              i = e.alt,
              r = e.className,
              a = e.style,
              n = void 0 === a ? {} : a,
              s = e.imgStyle,
              o = void 0 === s ? {} : s,
              u = e.placeholderStyle,
              f = void 0 === u ? {} : u,
              h = e.placeholderClassName,
              p = e.fluid,
              m = e.fixed,
              b = e.backgroundColor,
              v = e.durationFadeIn,
              y = e.Tag,
              S = e.itemProp,
              w = e.loading,
              x = e.draggable,
              I = !1 === this.state.fadeIn || this.state.imgLoaded,
              C = !0 === this.state.fadeIn && !this.state.imgCached,
              V = (0, d.default)(
                {
                  opacity: I ? 1 : 0,
                  transition: C ? "opacity " + v + "ms" : "none",
                },
                o
              ),
              k = "boolean" == typeof b ? "lightgray" : b,
              W = { transitionDelay: v + "ms" },
              j = (0, d.default)(
                { opacity: this.state.imgLoaded ? 0 : 1 },
                C && W,
                o,
                f
              ),
              H = {
                title: t,
                alt: this.state.isVisible ? "" : i,
                style: j,
                className: h,
                itemProp: S,
              };
            if (p) {
              var P = p,
                T = g(p);
              return l.default.createElement(
                y,
                {
                  className: (r || "") + " gatsby-image-wrapper",
                  style: (0, d.default)(
                    {
                      position: "relative",
                      overflow: "hidden",
                      maxWidth: T.maxWidth ? T.maxWidth + "px" : null,
                      maxHeight: T.maxHeight ? T.maxHeight + "px" : null,
                    },
                    n
                  ),
                  ref: this.handleRef,
                  key: "fluid-" + JSON.stringify(T.srcSet),
                },
                l.default.createElement(y, {
                  "aria-hidden": !0,
                  style: {
                    width: "100%",
                    paddingBottom: 100 / T.aspectRatio + "%",
                  },
                }),
                k &&
                  l.default.createElement(y, {
                    "aria-hidden": !0,
                    title: t,
                    style: (0, d.default)(
                      {
                        backgroundColor: k,
                        position: "absolute",
                        top: 0,
                        bottom: 0,
                        opacity: this.state.imgLoaded ? 0 : 1,
                        right: 0,
                        left: 0,
                      },
                      C && W
                    ),
                  }),
                T.base64 &&
                  l.default.createElement(z, {
                    ariaHidden: !0,
                    ref: this.placeholderRef,
                    src: T.base64,
                    spreadProps: H,
                    imageVariants: P,
                    generateSources: R,
                  }),
                T.tracedSVG &&
                  l.default.createElement(z, {
                    ariaHidden: !0,
                    ref: this.placeholderRef,
                    src: T.tracedSVG,
                    spreadProps: H,
                    imageVariants: P,
                    generateSources: L,
                  }),
                this.state.isVisible &&
                  l.default.createElement(
                    "picture",
                    null,
                    E(P),
                    l.default.createElement(_, {
                      alt: i,
                      title: t,
                      sizes: T.sizes,
                      src: T.src,
                      crossOrigin: this.props.crossOrigin,
                      srcSet: T.srcSet,
                      style: V,
                      ref: this.imageRef,
                      onLoad: this.handleImageLoaded,
                      onError: this.props.onError,
                      itemProp: S,
                      loading: w,
                      draggable: x,
                    })
                  ),
                this.addNoScript &&
                  l.default.createElement("noscript", {
                    dangerouslySetInnerHTML: {
                      __html: O(
                        (0, d.default)({ alt: i, title: t, loading: w }, T, {
                          imageVariants: P,
                        })
                      ),
                    },
                  })
              );
            }
            if (m) {
              var N = m,
                M = g(m),
                A = (0, d.default)(
                  {
                    position: "relative",
                    overflow: "hidden",
                    display: "inline-block",
                    width: M.width,
                    height: M.height,
                  },
                  n
                );
              return (
                "inherit" === n.display && delete A.display,
                l.default.createElement(
                  y,
                  {
                    className: (r || "") + " gatsby-image-wrapper",
                    style: A,
                    ref: this.handleRef,
                    key: "fixed-" + JSON.stringify(M.srcSet),
                  },
                  k &&
                    l.default.createElement(y, {
                      "aria-hidden": !0,
                      title: t,
                      style: (0, d.default)(
                        {
                          backgroundColor: k,
                          width: M.width,
                          opacity: this.state.imgLoaded ? 0 : 1,
                          height: M.height,
                        },
                        C && W
                      ),
                    }),
                  M.base64 &&
                    l.default.createElement(z, {
                      ariaHidden: !0,
                      ref: this.placeholderRef,
                      src: M.base64,
                      spreadProps: H,
                      imageVariants: N,
                      generateSources: R,
                    }),
                  M.tracedSVG &&
                    l.default.createElement(z, {
                      ariaHidden: !0,
                      ref: this.placeholderRef,
                      src: M.tracedSVG,
                      spreadProps: H,
                      imageVariants: N,
                      generateSources: L,
                    }),
                  this.state.isVisible &&
                    l.default.createElement(
                      "picture",
                      null,
                      E(N),
                      l.default.createElement(_, {
                        alt: i,
                        title: t,
                        width: M.width,
                        height: M.height,
                        sizes: M.sizes,
                        src: M.src,
                        crossOrigin: this.props.crossOrigin,
                        srcSet: M.srcSet,
                        style: V,
                        ref: this.imageRef,
                        onLoad: this.handleImageLoaded,
                        onError: this.props.onError,
                        itemProp: S,
                        loading: w,
                        draggable: x,
                      })
                    ),
                  this.addNoScript &&
                    l.default.createElement("noscript", {
                      dangerouslySetInnerHTML: {
                        __html: O(
                          (0, d.default)({ alt: i, title: t, loading: w }, M, {
                            imageVariants: N,
                          })
                        ),
                      },
                    })
                )
              );
            }
            return null;
          }),
          t
        );
      })(l.default.Component);
      C.defaultProps = {
        fadeIn: !0,
        durationFadeIn: 500,
        alt: "",
        Tag: "div",
        loading: "lazy",
      };
      var V = u.default.shape({
          width: u.default.number.isRequired,
          height: u.default.number.isRequired,
          src: u.default.string.isRequired,
          srcSet: u.default.string.isRequired,
          base64: u.default.string,
          tracedSVG: u.default.string,
          srcWebp: u.default.string,
          srcSetWebp: u.default.string,
          media: u.default.string,
        }),
        k = u.default.shape({
          aspectRatio: u.default.number.isRequired,
          src: u.default.string.isRequired,
          srcSet: u.default.string.isRequired,
          sizes: u.default.string.isRequired,
          base64: u.default.string,
          tracedSVG: u.default.string,
          srcWebp: u.default.string,
          srcSetWebp: u.default.string,
          media: u.default.string,
          maxWidth: u.default.number,
          maxHeight: u.default.number,
        });
      C.propTypes = {
        resolutions: V,
        sizes: k,
        fixed: u.default.oneOfType([V, u.default.arrayOf(V)]),
        fluid: u.default.oneOfType([k, u.default.arrayOf(k)]),
        fadeIn: u.default.bool,
        durationFadeIn: u.default.number,
        title: u.default.string,
        alt: u.default.string,
        className: u.default.oneOfType([u.default.string, u.default.object]),
        critical: u.default.bool,
        crossOrigin: u.default.oneOfType([u.default.string, u.default.bool]),
        style: u.default.object,
        imgStyle: u.default.object,
        placeholderStyle: u.default.object,
        placeholderClassName: u.default.string,
        backgroundColor: u.default.oneOfType([
          u.default.string,
          u.default.bool,
        ]),
        onLoad: u.default.func,
        onError: u.default.func,
        onStartLoad: u.default.func,
        Tag: u.default.string,
        itemProp: u.default.string,
        loading: u.default.oneOf(["auto", "lazy", "eager"]),
        draggable: u.default.bool,
      };
      var W = C;
      t.default = W;
    },
    L5Lv: function (e, t, i) {
      "use strict";
      i("rOb9")("fixed", function (e) {
        return function () {
          return e(this, "tt", "", "");
        };
      });
    },
    LFLF: function (e, t, i) {
      "use strict";
      i("+6po"), i("J1ZC");
      var r = i("PEXJ"),
        a = i.n(r),
        n = i("S2pg"),
        s = i("mSV1"),
        o = i("lgG8"),
        d = n.b.a.withConfig({
          displayName: "inlineExternalAnchor__StyledAnchor",
          componentId: "z6fzvo-0",
        })(["text-decoration:underline;font-style:italic;"]),
        l = Object(n.b)(s.a).withConfig({
          displayName: "inlineExternalAnchor__StyledIcon",
          componentId: "z6fzvo-1",
        })(["margin-left:0.25rem;"]);
      t.a = function (e) {
        return a.a.createElement(
          d,
          Object.assign(
            {
              style: e.style,
              target: "_blank",
              rel: "noopener noreferrer external",
              href: e.link,
            },
            e
          ),
          e.children,
          a.a.createElement(l, { icon: o.b, size: "1x" })
        );
      };
    },
    j9sm: function (e, t, i) {
      "use strict";
      var r = i("j3fA"),
        a = i("db6v").getWeak,
        n = i("hZS5"),
        s = i("nGhD"),
        o = i("5rqO"),
        d = i("fQ47"),
        l = i("b+id"),
        u = i("Zsry"),
        c = i("T20X"),
        f = l(5),
        h = l(6),
        g = 0,
        p = function (e) {
          return e._l || (e._l = new m());
        },
        m = function () {
          this.a = [];
        },
        b = function (e, t) {
          return f(e.a, function (e) {
            return e[0] === t;
          });
        };
      (m.prototype = {
        get: function (e) {
          var t = b(this, e);
          if (t) return t[1];
        },
        has: function (e) {
          return !!b(this, e);
        },
        set: function (e, t) {
          var i = b(this, e);
          i ? (i[1] = t) : this.a.push([e, t]);
        },
        delete: function (e) {
          var t = h(this.a, function (t) {
            return t[0] === e;
          });
          return ~t && this.a.splice(t, 1), !!~t;
        },
      }),
        (e.exports = {
          getConstructor: function (e, t, i, n) {
            var l = e(function (e, r) {
              o(e, l, t, "_i"),
                (e._t = t),
                (e._i = g++),
                (e._l = void 0),
                null != r && d(r, i, e[n], e);
            });
            return (
              r(l.prototype, {
                delete: function (e) {
                  if (!s(e)) return !1;
                  var i = a(e);
                  return !0 === i
                    ? p(c(this, t)).delete(e)
                    : i && u(i, this._i) && delete i[this._i];
                },
                has: function (e) {
                  if (!s(e)) return !1;
                  var i = a(e);
                  return !0 === i ? p(c(this, t)).has(e) : i && u(i, this._i);
                },
              }),
              l
            );
          },
          def: function (e, t, i) {
            var r = a(n(t), !0);
            return !0 === r ? p(e).set(t, i) : (r[e._i] = i), e;
          },
          ufstore: p,
        });
    },
  },
]);
//# sourceMappingURL=67f0ee990682d9d33bd1e2853851c6bb072f8cc2-6c8b18f57c35925a0d1c.js.map
