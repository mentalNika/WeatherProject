(function() {
    try {
        (function() {
            function fe(a, c, b, d) {
                var e = this;
                return A(window, "c.i", function() {
                    function f(w) {
                        (w = ge(k, l, "", w)(k, l)) && (S(w.then) ? w.then(g) : g(w));
                        return w
                    }

                    function g(w) {
                        w && (S(w) ? m.push(w) : Da(w) && C(function(J) {
                            var P = J[0];
                            J = J[1];
                            S(J) && ("u" === P ? m.push(J) : h(J, P))
                        }, Ea(w)))
                    }

                    function h(w, J, P) {
                        e[J] = ik(k, l, P || p, J, w)
                    }
                    var k = window;
                    (!k || isNaN(a) && !a) && Wf();
                    var l = jk(a, he, c, b, d),
                        m = [],
                        p = [Xf, ge, Yf];
                    p.unshift(kk);
                    var r = z(O, ub),
                        v = M(l);
                    l.id || Wa(fc("Invalid Metrika id: " + l.id, !0));
                    var x = Dc.o("counters", {});
                    if (x[v]) return vb(k,
                        v, "Duplicate counter " + v + " initialization"), x[v];
                    x[v] = e;
                    Dc.C("counters", x);
                    Dc.sa("counter", e);
                    C(function(w) {
                        w(k, l)
                    }, ld);
                    C(f, Ec);
                    f(lk);
                    h(mk(k, l, m), "destruct", [Xf, Yf]);
                    Wb(k, D([k, r, f, 1, "a.i"], nk));
                    C(f, T)
                })()
            }

            function ok(a, c) {
                var b = pk(a),
                    d = [qk(a) || rk(a)];
                Zf(a) && d.push(b);
                var e = Y(a);
                b = Ja(a);
                var f = b.o("synced", {});
                d = U(function(g) {
                    if (c[g]) {
                        var h = (f[g] || 1) + 1440 < e($a);
                        h && delete f[g];
                        return h
                    }
                }, d);
                b.C("synced", f);
                return z(function(g) {
                    return {
                        Be: c[g],
                        ke: g
                    }
                }, d)
            }

            function rk(a) {
                a = sk(a);
                return tk[a] || a
            }

            function pk(a) {
                a =
                    $f(a);
                return uk[a] || "ru"
            }

            function vk(a, c, b, d) {
                var e = b.G;
                if (c.Pe || !e) d();
                else {
                    var f = md(a),
                        g = gc(a, "");
                    e = function() {
                        var x = ag(f);
                        x = "" + x + wk(x, g);
                        nd(b, "gdpr", x);
                        d()
                    };
                    if (3 === c.id) e();
                    else {
                        var h = G(a),
                            k = h.o("f1");
                        if (k) k(e);
                        else if (k = (k = ag(f)) ? z(u(od, n), k.split(",")) : [], bg(k)) e();
                        else {
                            var l = pd(a),
                                m = Q(a);
                            var p = /(^|\w+\.)yango(\.yandex)?\.com$/.test(m.hostname) ? {
                                url: "https://yastatic.net/s3/taxi-front/yango-gdpr-popup/",
                                Lc: "ar az be en es et fi fr he hy ka kk ky lt lv no pt ro ru sl sr tg tr uk uz zh".split(" "),
                                Qc: "_inversed_buttons"
                            } : void 0;
                            var r = (l = l || !!p) && (-1 !== m.href.indexOf("yagdprcheck=1") || g.o("yaGdprCheck"));
                            m = g.o("gdpr");
                            g.o("yandex_login") ? (k.push("13"), g.C("gdpr", hc, 525600)) : l ? K(m, Ib) ? m === ie ? k.push("12") : k.push("3") : je(a) || xk(a) ? k.push("17") : yk(a) && k.push("28") : k.push("14");
                            var v = u(f, zk);
                            bg(k) ? (C(v, k), e()) : (qd.push(e), h.C("f1", function(x, w) {
                                var J = 0;
                                if (w) {
                                    var P = hb(a, w) || "";
                                    J += P.length
                                }
                                qd.push(x);
                                1E6 >= J && qd.push(x)
                            }), (0, ke[0])(a).then(R("params.eu")).then(function(x) {
                                if (x || r) {
                                    g.C("gdpr_popup",
                                        ie);
                                    Ak(a, c);
                                    if (wb(a)) return Bk(a, v, c);
                                    var w = cg(a, f);
                                    if (w) return x = Ck(a, v, w, c, p), x.then(D([a, c], Dk)), x
                                }
                                x || v("8");
                                return H.resolve({
                                    value: hc,
                                    Nb: !0
                                })
                            }).then(function(x) {
                                g.eb("gdpr_popup");
                                if (x) {
                                    var w = x.value;
                                    x = x.Nb;
                                    K(w, Ib) && g.C("gdpr", w, x ? void 0 : 525600)
                                }
                                w = le(qd, ea);
                                dg(a, w, 20)(ib(A(a, "gdr"), E));
                                h.C("f1", ea)
                            })["catch"](A(a, "gdp.a")))
                        }
                    }
                }
            }

            function Dk(a, c) {
                if (pd(a)) {
                    var b = md(a),
                        d = wa(a, c);
                    d = d && d.params;
                    b = z(u(Ek, n), me(b));
                    d && b.length && d("gdpr", U(Boolean, b))
                }
            }

            function Bk(a, c, b) {
                var d = rd(a, b);
                return new H(function(e) {
                    var f;
                    if (d) {
                        var g = d.V,
                            h = q(u("4", c), u(null, e)),
                            k = ca(a, h, 2E3, "gdp.f.t");
                        d.$c((f = {}, f.type = "isYandex", f)).then(function(l) {
                            l.isYandex ? (c("5"), g.F(Z(["GDPR-ok-view-default", "GDPR-ok-view-detailed"], ne), function(m) {
                                e({
                                    value: eg(m[1].type)
                                })
                            })) : (c("6"), e(null))
                        })["catch"](h).then(D([a, k], Sa))
                    } else e({
                        value: ie,
                        Nb: !0
                    })
                })
            }

            function Ak(a, c) {
                var b = rd(a, c);
                b && b.V.F(["isYandex"], function() {
                    var d;
                    return d = {
                        type: "isYandex"
                    }, d.isYandex = pd(a), d
                });
                return b
            }

            function Ck(a, c, b, d, e) {
                var f = void 0 === e ? Fk : e;
                e = f.url;
                var g = f.Qc;
                f =
                    Gk(a, f.Lc, d.Qe);
                var h = rd(a, d);
                if (!h) return H.resolve({
                    value: hc,
                    Nb: !0
                });
                var k = ic(a, {
                    src: "" + e + f + g + ".js"
                });
                return new H(function(l, m) {
                    k ? (c("7"), k.onerror = function() {
                        var p;
                        c("9");
                        h.Zc((p = {}, p.type = "GDPR-ok-view-default", p));
                        l(null)
                    }, k.onload = function() {
                        c("10");
                        b.F(Z(["GDPR-ok-view-default", "GDPR-ok-view-detailed"], ne), function(p) {
                            var r;
                            p = p.type;
                            h.Zc((r = {}, r.type = p, r));
                            l({
                                value: eg(p)
                            })
                        })
                    }) : (c("9"), m(Na("gdp.e")))
                })
            }

            function Gk(a, c, b) {
                a = b || $f(a);
                return K(a, c) ? a : "en"
            }

            function eg(a) {
                if (K(a, ["GDPR-ok-view-default",
                        "GDPR-ok-view-detailed"
                    ])) return hc;
                a = a.replace("GDPR-ok-view-detailed-", "");
                return K(a, Ib) ? a : hc
            }

            function fg(a, c, b) {
                var d = n(a, "AppMetricaInitializer"),
                    e = n(d, "init");
                if (e) try {
                    L(e, d)(hb(a, c))
                } catch (f) {} else gg = ca(a, D([a, c, 2 * b], fg), b, "ai.d");
                return function() {
                    return Sa(a, gg)
                }
            }

            function Hk(a) {
                var c = n(a, "speechSynthesis.getVoices");
                if (!c) return "";
                a = L(c, a.speechSynthesis);
                return Jb(function(b) {
                    return z(u(b, n), Ik)
                }, a())
            }

            function Jk(a, c, b) {
                return I("x", z(q(O, na("concat", "" + a), u(b, n)), c))
            }

            function Kk(a, c) {
                var b =
                    c.Ed;
                if (!Lk(a, b)) return "";
                var d = [];
                a: {
                    var e = Mk(a, b);
                    try {
                        var f = D(e, q)()();
                        break a
                    } catch (J) {
                        if ("ccf" === J.message) {
                            f = null;
                            break a
                        }
                        Wa(J)
                    }
                    f = void 0
                }
                if (ab(f)) var g = "";
                else try {
                    g = f.toDataURL()
                } catch (J) {
                    g = ""
                }(f = g) && d.push(f);
                var h = b.getContextAttributes();
                try {
                    var k = xa(b.getSupportedExtensions, "getSupportedExtensions") ? b.getSupportedExtensions() || [] : []
                } catch (J) {
                    k = []
                }
                k = I(";", k);
                f = oe(b.getParameter(b.ALIASED_LINE_WIDTH_RANGE), b);
                e = oe(b.getParameter(b.ALIASED_POINT_SIZE_RANGE), b);
                g = b.getParameter(b.ALPHA_BITS);
                h = h && h.antialias ? "yes" : "no";
                var l = b.getParameter(b.BLUE_BITS),
                    m = b.getParameter(b.DEPTH_BITS),
                    p = b.getParameter(b.GREEN_BITS),
                    r = b.getExtension("EXT_texture_filter_anisotropic") || b.getExtension("WEBKIT_EXT_texture_filter_anisotropic") || b.getExtension("MOZ_EXT_texture_filter_anisotropic");
                if (r) {
                    var v = b.getParameter(r.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
                    0 === v && (v = 2)
                }
                v = {
                    lf: k,
                    "webgl aliased line width range": f,
                    "webgl aliased point size range": e,
                    "webgl alpha bits": g,
                    "webgl antialiasing": h,
                    "webgl blue bits": l,
                    "webgl depth bits": m,
                    "webgl green bits": p,
                    "webgl max anisotropy": r ? v : null,
                    "webgl max combined texture image units": b.getParameter(b.MAX_COMBINED_TEXTURE_IMAGE_UNITS),
                    "webgl max cube map texture size": b.getParameter(b.MAX_CUBE_MAP_TEXTURE_SIZE),
                    "webgl max fragment uniform vectors": b.getParameter(b.MAX_FRAGMENT_UNIFORM_VECTORS),
                    "webgl max render buffer size": b.getParameter(b.MAX_RENDERBUFFER_SIZE),
                    "webgl max texture image units": b.getParameter(b.MAX_TEXTURE_IMAGE_UNITS),
                    "webgl max texture size": b.getParameter(b.MAX_TEXTURE_SIZE),
                    "webgl max varying vectors": b.getParameter(b.MAX_VARYING_VECTORS),
                    "webgl max vertex attribs": b.getParameter(b.MAX_VERTEX_ATTRIBS),
                    "webgl max vertex texture image units": b.getParameter(b.MAX_VERTEX_TEXTURE_IMAGE_UNITS),
                    "webgl max vertex uniform vectors": b.getParameter(b.MAX_VERTEX_UNIFORM_VECTORS),
                    "webgl max viewport dims": oe(b.getParameter(b.MAX_VIEWPORT_DIMS), b),
                    "webgl red bits": b.getParameter(b.RED_BITS),
                    "webgl renderer": b.getParameter(b.RENDERER),
                    "webgl shading language version": b.getParameter(b.SHADING_LANGUAGE_VERSION),
                    "webgl stencil bits": b.getParameter(b.STENCIL_BITS),
                    "webgl vendor": b.getParameter(b.VENDOR),
                    "webgl version": b.getParameter(b.VERSION)
                };
                pe(d, v, ": ");
                a: {
                    try {
                        var x = b.getExtension("WEBGL_debug_renderer_info");
                        if (x) {
                            var w = {
                                "webgl unmasked vendor": b.getParameter(x.UNMASKED_VENDOR_WEBGL),
                                "webgl unmasked renderer": b.getParameter(x.UNMASKED_RENDERER_WEBGL)
                            };
                            break a
                        }
                    } catch (J) {}
                    w = {}
                }
                pe(d, w);
                if (!b.getShaderPrecisionFormat) return I("~", d);
                pe(d, Nk(b));
                return I("~", d)
            }

            function pe(a, c, b) {
                void 0 === b && (b = ":");
                C(function(d) {
                    return a.push("" +
                        d[0] + b + d[1])
                }, Ea(c))
            }

            function Ok(a, c, b, d) {
                c = d.o("cc");
                d = D(["cc", ""], d.C);
                if (c) {
                    var e = c.split("&");
                    c = e[0];
                    if ((e = (e = e[1]) && Ka(e)) && 1440 < Y(a)($a) - e) return d();
                    b.C("cc", c)
                } else oa(0)(c) || d()
            }

            function Pk(a, c, b, d) {
                return pa(c, function(e) {
                    if ("0" === n(e, "settings.pcs") && !sd(a))
                        if (e = d.o("zzlc"), X(e) || ab(e) || "na" === e) {
                            e = "ru";
                            var f = qe(a, 68),
                                g = re(a, 79);
                            if (f || g) e = "md";
                            if (f = jb(a)) {
                                var h = f("iframe");
                                y(h.style, {
                                    display: "none",
                                    width: "1px",
                                    height: "1px",
                                    visibility: "hidden"
                                });
                                h.src = "https://mc.yandex." + e + hg("L21ldHJpa2EvenpsYy5odG1s");
                                if (e = Kb(a)) {
                                    e.appendChild(h);
                                    var k = 0,
                                        l = fa(a).F(a, ["message"], A(a, "zz.m", function(m) {
                                            (m = n(m, "data")) && m.substr && "__ym__zz" === m.substr(0, 8) && (Xb(h), m = m.substr(8), d.C("zzlc", m), b.C("zzlc", m), l(), Sa(a, k))
                                        }));
                                    k = ca(a, q(l, u(h, Xb)), 3E3)
                                }
                            }
                        } else b.C("zzlc", e)
                })
            }

            function Qk(a, c, b) {
                var d, e;
                c = Lb(u(a, n), Rk);
                c = X(c) ? null : n(a, c);
                if (n(a, "navigator.onLine") && c && c && n(c, "prototype.constructor.name")) {
                    var f = new c((d = {}, d.iceServers = [], d));
                    a = n(f, "createDataChannel");
                    S(a) && (L(a, f, "y.metrika")(), a = n(f, "createOffer"), S(a) &&
                        !a.length && (a = L(a, f)(), d = n(a, "then"), S(d) && L(d, a, function(g) {
                            var h = n(f, "setLocalDescription");
                            S(h) && L(h, f, g, E, E)()
                        })(), y(f, (e = {}, e.onicecandidate = function() {
                            var g, h = n(f, "close");
                            if (S(h)) {
                                h = L(h, f);
                                try {
                                    var k = (g = n(f, "localDescription.sdp")) && g.match(/c=IN\s[\w\d]+\s([\w\d:.]+)/)
                                } catch (l) {
                                    f.onicecandidate = E;
                                    "closed" !== f.iceConnectionState && h();
                                    return
                                }
                                k && 0 < k.length && (g = Yb(k[1]), b.C("pp", g));
                                f.onicecandidate = E;
                                h()
                            }
                        }, e))))
                }
            }

            function Sk(a, c, b) {
                var d, e = Fc(a, c);
                if (e) {
                    e.V.F(["gpu-get"], function() {
                        var h;
                        return h = {}, h.type = "gpu-get", h.pu = b.o("pu"), h
                    });
                    var f = n(a, "opener");
                    if (f) {
                        var g = ca(a, D([a, c, b], ig), 200, "pu.m");
                        e.$b(f, (d = {}, d.type = "gpu-get", d), function(h, k) {
                            var l = n(k, "pu");
                            l && (Sa(a, g), b.C("pu", l))
                        })
                    } else ig(a, c, b)
                }
            }

            function ig(a, c, b) {
                var d = n(a, "location.host");
                a = td(a, c);
                b.C("pu", "" + Yb(d) + a)
            }

            function jg(a, c, b) {
                c = gc(a, void 0, c);
                c = kg(a, c.o("phc_settings") || "");
                var d = n(c, "clientId"),
                    e = n(c, "orderId"),
                    f = n(c, "service_id"),
                    g = n(c, "phones") || [];
                return d && e && g ? Tk(a, b.sc, {
                    hd: Uk
                }).Uc(g).then(function(h) {
                    return Vk(b, {
                        Ma: d,
                        Ta: e,
                        cd: f
                    }, h.Z, g, h.ea)
                })["catch"](function() {}) : H.resolve()
            }

            function Uk(a, c, b) {
                a = Wk(b.sb);
                if ("href" === b.Yb) {
                    var d = b.Ea;
                    c = d.href;
                    b = c.replace(a, b.xa);
                    if (c !== b) return d.href = b, !0
                } else if ((a = null === (d = b.Ea.textContent) || void 0 === d ? void 0 : d.replace(a, b.xa)) && a !== b.Ea.textContent) return b.Ea.textContent = a, !0;
                return !1
            }

            function Vk(a, c, b, d, e) {
                var f;
                c.Ma && c.Ta && (c.Ma === a.Ma && c.Ta === a.Ta || y(a, c, {
                    Z: {},
                    Fb: !0
                }), 0 < e && ya(a.ea, [e]), C(function(g) {
                    var h, k, l = g[0];
                    g = g[1];
                    var m = +(a.Z[l] && a.Z[l][g] ? a.Z[l][g] : 0);
                    y(a.Z,
                        (h = {}, h[l] = (k = {}, k[g] = m, k), h))
                }, d), C(function(g) {
                    var h, k, l = g[0];
                    g = g[1];
                    var m = 1 + (a.Z[l] ? a.Z[l][g] : 0);
                    y(a.Z, (h = {}, h[l] = (k = {}, k[g] = m, k), h))
                }, b), a.Ic && (a.Fb || b.length) && ((c = wa(a.l, a.sc)) && c.params("__ym", "phc", (f = {}, f.clientId = a.Ma, f.orderId = a.Ta, f.service_id = a.cd, f.phones = a.Z, f.performance = a.ea, f)), a.Fb = !1))
            }

            function Xk(a) {
                a = jb(a);
                if (!a) return "";
                a = a("video");
                try {
                    var c = na("canPlayType", a),
                        b = Jb(function(d) {
                            return z(q(O, na("concat", d + "; codecs=")), Yk)
                        }, lg);
                    return z(c, [].concat(lg, b))
                } catch (d) {
                    return "canPlayType"
                }
            }

            function Zk(a) {
                var c = n(a, "matchMedia");
                if (c && za("matchMedia", c)) {
                    var b = na("matchMedia", a);
                    return N(function(d, e) {
                        d[e] = b("(" + e + ")");
                        return d
                    }, {}, $k)
                }
            }

            function Nk(a) {
                return N(function(c, b) {
                    var d = b[0],
                        e = b[1];
                    c[d + " precision"] = n(e, "precision") || "n";
                    c[d + " precision rangeMin"] = n(e, "rangeMin") || "n";
                    c[d + " precision rangeMax"] = n(e, "rangeMax") || "n";
                    return c
                }, {}, [
                    ["webgl vertex shader high float", a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.HIGH_FLOAT)],
                    ["webgl vertex shader medium", a.getShaderPrecisionFormat(a.VERTEX_SHADER,
                        a.MEDIUM_FLOAT)],
                    ["webgl vertex shader low float", a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.LOW_FLOAT)],
                    ["webgl fragment shader high float", a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.HIGH_FLOAT)],
                    ["webgl fragment shader medium float", a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.MEDIUM_FLOAT)],
                    ["webgl fragment shader low float", a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.LOW_FLOAT)],
                    ["webgl vertex shader high int", a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.HIGH_INT)],
                    ["webgl vertex shader medium int",
                        a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.MEDIUM_INT)
                    ],
                    ["webgl vertex shader low int", a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.LOW_INT)],
                    ["webgl fragment shader high int", a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.HIGH_INT)],
                    ["webgl fragment shader medium int", a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.MEDIUM_INT)],
                    ["webgl fragment shader low int precision", a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.LOW_INT)]
                ])
            }

            function Mk(a, c) {
                return [function() {
                    var b = c.createBuffer();
                    b && c.getParameter &&
                        za("getParameter", c.getParameter) || se();
                    c.bindBuffer(c.ARRAY_BUFFER, b);
                    var d = new a.Float32Array(al);
                    c.bufferData(c.ARRAY_BUFFER, d, c.STATIC_DRAW);
                    b.ie = 3;
                    b.ne = 3;
                    d = c.createProgram();
                    var e = c.createShader(c.VERTEX_SHADER);
                    d && e || se();
                    return {
                        Xb: d,
                        Oe: e,
                        Ne: b
                    }
                }, function(b) {
                    var d = b.Xb,
                        e = b.Oe;
                    c.shaderSource(e, "attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}");
                    c.compileShader(e);
                    c.attachShader(d,
                        e);
                    (d = c.createShader(c.FRAGMENT_SHADER)) || se();
                    return y(b, {
                        Ud: d
                    })
                }, function(b) {
                    var d = b.Xb,
                        e = b.Ud;
                    c.shaderSource(e, "precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}");
                    c.compileShader(e);
                    c.attachShader(d, e);
                    c.linkProgram(d);
                    c.useProgram(d);
                    return b
                }, function(b) {
                    var d = b.Xb;
                    b = b.Ne;
                    d.Me = c.getAttribLocation(d, "attrVertex");
                    d.pe = c.getUniformLocation(d, "uniformOffset");
                    c.enableVertexAttribArray(d.Yf);
                    c.vertexAttribPointer(d.Me, b.ie, c.FLOAT,
                        !1, 0, 0);
                    c.uniform2f(d.pe, 1, 1);
                    c.drawArrays(c.TRIANGLE_STRIP, 0, b.ne);
                    return c.canvas
                }]
            }

            function Lk(a, c) {
                if (!S(a.Float32Array)) return !1;
                var b = n(c, "canvas");
                if (!b || !za("toDataUrl", b.toDataURL)) return !1;
                try {
                    c.createBuffer()
                } catch (d) {
                    return !1
                }
                return !0
            }

            function oe(a, c) {
                c.clearColor(0, 0, 0, 1);
                c.enable(c.DEPTH_TEST);
                c.depthFunc(c.LEQUAL);
                c.clear(c.COLOR_BUFFER_BIT | c.DEPTH_BUFFER_BIT);
                return "[" + n(a, "0") + ", " + n(a, "1") + "]"
            }

            function bl(a) {
                try {
                    var c = Aa(a) ? a : [];
                    return I(",", [a.name, a.description, q(Fa, jc(Boolean),
                        bb(cl), Gc(","))(c)])
                } catch (b) {
                    return ""
                }
            }

            function cl(a) {
                return I(",", [a.description, a.suffixes, a.type])
            }

            function dl(a, c, b) {
                function d(r) {
                    return function() {
                        var v = b.o("scip", "") + r;
                        b.C("scip", v)
                    }
                }
                var e, f = Hc(a, "ci");
                f = pb(a, f);
                var g = te(a),
                    h = Y(a)($a),
                    k = ["sync.cook.int"],
                    l = el(g.o("sci"));
                if (!l || 1440 < h - l) {
                    b.C("scip", "0");
                    var m = d("a"),
                        p = kc(a, c);
                    return f({
                        M: {
                            ga: k,
                            Ia: 1500,
                            yb: !0
                        },
                        D: (e = {}, e.duid = p, e.hid = "" + xb(a), e)
                    }, ["https://an.yandex.ru/sync_cookie"]).then(function(r) {
                        r = n(r.tb, "CookieMatchUrls");
                        aa(r) || (r = []);
                        Aa(r) ? d("1")() : m();
                        var v = Hc(a, "c"),
                            x = pb(a, v);
                        r = z(function(w, J) {
                            var P = "" + w + (lc(w, "?") ? "&" : "?") + "duid=" + p;
                            return x({
                                M: {
                                    ga: k,
                                    Ia: 1500
                                }
                            }, ["https://" + P]).then(E, q(d("b"), d("" + J)))
                        }, U(Ga, r));
                        return H.all(r)
                    }, m).then(function() {
                        var r = b.o("scip");
                        !r || lc(r, "a") || lc(r, "b") || (g.C("sci", h), d("2")())
                    }, E)
                }
                return H.resolve()
            }

            function mg(a) {
                return {
                    N: function(c, b) {
                        if (!c.G) return b();
                        var d = G(a).o("fid");
                        !ng && d && (nd(c, "fid", d), ng = !0);
                        return b()
                    }
                }
            }

            function fl(a, c) {
                var b = a.document;
                if (K(b.readyState, ["interactive", "complete"])) Wb(a,
                    c);
                else {
                    var d = fa(a),
                        e = d.F,
                        f = d.Wa,
                        g = function() {
                            f(b, ["DOMContentLoaded"], g);
                            f(a, ["load"], g);
                            c()
                        };
                    e(b, ["DOMContentLoaded"], g);
                    e(a, ["load"], g)
                }
            }

            function ue(a) {
                return {
                    N: function(c, b) {
                        var d = c.G;
                        if (d) {
                            var e = G(a).o("adBlockEnabled");
                            e && d.C("adb", e)
                        }
                        b()
                    }
                }
            }

            function gl(a) {
                var c = A(a, "i.clch", hl);
                fa(a).F(a.document, ["click"], L(c, null, a), {
                    passive: !1
                });
                return function(b) {
                    var d = qa.ua,
                        e = a.Ya[qa.Bb],
                        f = !!e._informer;
                    e._informer = y({
                        domain: "informer.yandex.ru"
                    }, b);
                    f || ic(a, {
                        src: d + "//informer.yandex.ru/metrika/informer.js"
                    })
                }
            }

            function mc(a, c) {
                return {
                    N: function(b, d) {
                        ve(b) ? d() : pa(c, function(e) {
                            var f;
                            if (e = n(e, "settings.hittoken")) e = (f = {}, f.hittoken = e, f), b.D = y(b.D || {}, e);
                            d()
                        })
                    }
                }
            }

            function il(a, c) {
                var b = Ja(a);
                if ("" === b.o("cc")) {
                    var d = u("cc", b.C);
                    d(0);
                    var e = Y(a),
                        f = G(a);
                    f = q(R(jl({
                        tb: 1
                    }) + ".c"), Ic(function(g) {
                        d(g + "&" + e($a))
                    }), u("cc", f.C));
                    ra(a, "6", c)({
                        M: {
                            yb: !0,
                            pd: !1
                        }
                    }, ["https://mc.yandex.md/cc"]).then(f)["catch"](q(Ic(function() {
                        var g = e($a);
                        b.C("cc", "&" + g)
                    }), A(a, "cc")))
                }
            }

            function ud(a, c) {
                if (!c) return !1;
                var b = Q(a);
                return (new RegExp(c)).test("" +
                    b.pathname + b.hash + b.search)
            }

            function kl(a, c) {
                return pa(c, function(b) {
                    var d = n(b, "settings.dr");
                    return {
                        Md: ll(a, d),
                        isEnabled: n(b, "settings.auto_goals")
                    }
                })
            }

            function ml(a, c, b, d, e) {
                b = we(a.document.body, b);
                d = we(a.document.body, d);
                K(e.target, [b, d]) && xe(a, c)
            }

            function og(a, c, b, d) {
                (b = nl(a, d, b)) && xe(a, c, b)
            }

            function pg(a, c) {
                var b = qg(a, c);
                return ol(a, b)
            }

            function qg(a, c) {
                var b = we(a.document.body, c);
                return b ? pl(a, b) : ""
            }

            function xe(a, c, b) {
                if (c = wa(a, c)) a = nc(["dr", b || "" + Xa(a, 10, 99)]), c.params(nc(["__ym", a]))
            }

            function we(a,
                c) {
                var b = null;
                try {
                    b = c ? oc(c, a) : b
                } catch (d) {}
                return b
            }

            function rg(a) {
                a = Fa(hg(a));
                return z(function(c) {
                    c = c.charCodeAt(0).toString(2);
                    return sg("0", 8, c)
                }, a)
            }

            function pl(a, c) {
                if (!c) return "";
                var b = [],
                    d = n(a, "document");
                tg(a, c, function(e) {
                    if (e.nodeType === d.TEXT_NODE) var f = e.textContent;
                    else e instanceof a.HTMLImageElement ? f = e.alt : e instanceof a.HTMLInputElement && (f = e.value);
                    (f = f && f.trim()) && b.push(f)
                });
                return 0 === b.length ? "" : b.join(" ")
            }

            function ql(a, c, b) {
                a = va(b);
                b = a[1];
                "track" === a[0] && c({
                    version: "0",
                    fb: b
                })
            }

            function rl(a, c, b) {
                if (b) {
                    var d = b.version;
                    (b = n(sl, d + "." + b.fb)) && (c && K(b, tl) || a("ym-" + b + "-" + d))
                }
            }

            function ug(a, c, b) {
                var d;
                a = [vg(a, c, function(e) {
                    d = e;
                    e.pb.F(b)
                }), function() {
                    d && d.unsubscribe()
                }];
                return D([wg, a], C)
            }

            function ul(a, c, b, d) {
                var e, f;
                if (b) {
                    a: {
                        c = n(d, "ecommerce") || {};
                        var g = n(d, "event") || "";
                        if (Da(c) && Ga(g) && (g = xg[g])) {
                            c = ye(g, c, "items");
                            break a
                        }
                        c = void 0
                    }
                    if (!c) a: {
                        c = d;!aa(d) && vd(a, Aa(d)) && (c = va(c));
                        if (aa(c) && (a = c[0], g = c[1], c = c[2], Ga(g) && Da(c) && (g = xg[g], "event" === a && g))) {
                            c = ye(g, c, "items");
                            break a
                        }
                        c =
                        void 0
                    }(d = c || vl(d)) && b((e = {}, e.__ym = (f = {}, f.ecommerce = [d], f), e))
                }
            }

            function vl(a) {
                var c = n(a, "ecommerce");
                if (Da(c)) return a = U(Zb(wl), da(c)), a = N(function(b, d) {
                    b[d] = c[d];
                    return b
                }, {}, a), 0 === da(a).length ? void 0 : a
            }

            function xl(a, c, b) {
                var d, e = yg(a, c),
                    f = Q(a);
                f = wd(f.protocol + "//" + f.hostname + f.pathname);
                c = td(a, c);
                var g = "";
                do g += Xa(a); while (g.length < c.length);
                g = g.slice(0, c.length);
                a = "";
                for (var h = 0; h < c.length; h += 1) a += (c.charCodeAt(h) + g.charCodeAt(h) - 96) % 10;
                c = [g, a];
                a = c[0];
                c = c[1];
                return (d = {}, d.mf = "https://adstat.yandex.ru/track?service=metrika&id=" +
                    c + "&mask=" + a + "&ref=" + f, d.rt = "https://" + e + ".mc.yandex.ru/watch/3/1?browser-info=rt:1", d)[b]
            }

            function yl(a, c, b, d) {
                a = n(d, "data");
                if (Ga(a)) {
                    var e = a.split("*");
                    a = e[0];
                    var f = e[1];
                    e = e[2];
                    "sc.frame" === a ? d.source.postMessage("sc.images*" + c, "*") : "sc.image" === a && f === c && b(e)
                }
            }

            function zl(a) {
                var c = a.l,
                    b = qb(a.X);
                if (b) {
                    var d = Math.random();
                    a = {
                        x: b.scrollLeft,
                        y: b.scrollTop
                    };
                    if (b.Rb) {
                        if (d = ze[b.Rb], !d || 10 > Math.abs(a.x - d.x) && 10 > Math.abs(a.y - d.y)) return
                    } else {
                        for (; ze[d];) d = Math.random();
                        b.Rb = d
                    }
                    ze[b.Rb] = a;
                    if (b !== c.document) {
                        d =
                            rb(c, b);
                        c = La(c);
                        var e = [];
                        b = b[Ba];
                        !b || 0 > b ? a = [] : (Ma(e, 16), F(e, c), F(e, a.x), F(e, a.y), F(e, b), a = e);
                        a = Z(d, a)
                    } else a = [];
                    return a
                }
            }

            function zg(a) {
                var c = a.l,
                    b = a.X;
                Ag(a);
                if (b.touches && b.touches.length) {
                    var d = qb(b);
                    if (d && d !== c.document) return Z(rb(c, d), Jb(function(e) {
                        return Bg(c, La(c), "touch", d, [e.pageX, e.pageY], 0, 0)
                    }, Fa(b.touches)))
                }
            }

            function Al(a) {
                var c = a.l;
                a = La(c);
                var b = xd(c),
                    d = Cg(c);
                c = [];
                var e = b[0];
                b = b[1];
                var f = d[0];
                d = d[1];
                Ma(c, 28);
                F(c, a);
                F(c, e);
                F(c, b);
                F(c, f);
                F(c, d);
                return c
            }

            function Dg(a) {
                var c = [];
                return Ta(a.l,
                    c, 13) ? [] : c
            }

            function Bl(a) {
                var c = a.l;
                a = a.X;
                var b = qb(a);
                if (b) {
                    var d;
                    "wheel" === a.type ? d = 0 < a.deltaY ? 1 : 0 > a.deltaY ? 2 : 0 : "mousewheel" === a.type && a.wheelDelta && (d = 0 < a.wheelDelta ? 2 : 0 > a.wheelDelta ? 1 : 0);
                    if (d) {
                        var e = yd(c, a);
                        a = rb(c, b);
                        c = La(c);
                        e = [e.x, e.y];
                        b = b[Ba];
                        if (!b || 0 > b) b = [];
                        else {
                            var f = [];
                            Ma(f, 31);
                            F(f, c);
                            F(f, b);
                            F(f, e[0]);
                            F(f, e[1]);
                            Ma(f, 0);
                            Ma(f, 0);
                            Ma(f, d);
                            b = f
                        }
                        return Z(a, b)
                    }
                }
            }

            function Ag(a) {
                var c = a.l;
                a = Ae(c);
                var b = Y(c)(ba);
                if (!(10 > b - Eg || 10 > Math.abs(a.x - Be.x) && 10 > Math.abs(a.y - Be.y))) return Eg = b, Be = a, c = La(c), b = [],
                    Ma(b, 3), F(b, c), F(b, a.x), F(b, a.y), b
            }

            function Cl(a) {
                var c = a.l,
                    b = a.X,
                    d = Y(c)(ba),
                    e = d - Fg;
                if (!(10 > e)) {
                    c = yd(c, b);
                    b = Ce.x - c.x;
                    var f = Ce.y - c.y;
                    b = b * b + f * f;
                    if (!(0 >= b || 16 > b && 100 > e || 20 > e && 256 > b)) return Fg = d, Ce = c, Jc(a)
                }
            }

            function Dl(a, c, b, d, e) {
                function f() {
                    k && k.stop()
                }
                if (!c.od) return H.resolve(E);
                var g = ra(a, "4", c),
                    h = {
                        G: sa()
                    };
                b = new El(a, b, function(l, m, p) {
                    var r;
                    if (!g) return H.resolve();
                    m = "wv-data=" + Gg(l, !0);
                    return g(y({}, h, {
                        M: {
                            W: m
                        },
                        D: (r = {}, r["wv-check"] = "" + Fl(l), r["wv-type"] = "0", r)
                    }), c, p)["catch"](A(a, "m.n.m.s"))
                });
                var k = Gl(a, b, d, e);
                return pa(c, function(l) {
                    l && G(a).C("isEU", n(l, "settings.eu"));
                    if (!G(a).o("oo") && k) {
                        var m = $b(a),
                            p = m.o("visorc");
                        K(p, ["w", "b"]) || (p = "");
                        Hg(a) && Ig(a, zd, "visorc") && !Hl.test(cb(a) || "") || (p = "b");
                        l = n(l, "settings.webvisor.recp");
                        if (!a.isFinite(l) || 0 > l || 1 < l) p = "w";
                        p || (p = G(a).o("hitId") % 1E4 / 1E4 < l ? "w" : "b");
                        m.C("visorc", p, 30);
                        "w" === p && k.start()
                    }
                    return f
                })
            }

            function Gl(a, c, b, d) {
                var e = a.document,
                    f = [],
                    g = fa(a),
                    h = ":submit" + Math.random(),
                    k = [],
                    l = L(c.flush, c),
                    m = ja(function(v, x) {
                        A(a, "hfv." + v, function() {
                            try {
                                var w =
                                    x.type
                            } catch (J) {
                                return
                            }
                            w = K(w, d);
                            c.push(x, {
                                type: v
                            });
                            w && l()
                        })()
                    }),
                    p = A(a, "sfv", function() {
                        var v = b(a),
                            x = Il(a);
                        C(function(w) {
                            f.push(g.F(w.target, [w.event], m(w.type)))
                        }, v);
                        C(function(w) {
                            f.push(g.F(w.target, [w.event], A(a, "hff." + w.type + "." + w.event, function(J) {
                                C(Ha({
                                    l: a,
                                    X: J,
                                    flush: l
                                }), w.H)
                            })))
                        }, x);
                        k = Jg(a, "form", e);
                        e.attachEvent && (v = Jg(a, "form *", e), C(function(w) {
                            f.push(g.F(w, ["submit"], m("form")))
                        }, k), C(function(w) {
                            De(w) && f.push(g.F(w, ["change"], m("formInput")))
                        }, v));
                        C(function(w) {
                            var J = w.submit;
                            if (S(J) || "object" ===
                                typeof J && Jl.test("" + J)) w[h] = J, w.submit = A(a, "fv", function() {
                                var P = {
                                    target: w,
                                    type: "submit"
                                };
                                m("document")(P);
                                return w[h]()
                            })
                        }, k)
                    }),
                    r = A(a, "ufv", function() {
                        C(ea, f);
                        C(function(v) {
                            v && (v.submit = v[h])
                        }, k);
                        c.flush()
                    });
                return {
                    start: p,
                    stop: r
                }
            }

            function Kg(a, c) {
                var b = U(function(e) {
                        return 0 < e.H.length
                    }, c),
                    d = Lg({
                        target: a.document,
                        type: "document"
                    });
                return z(q(O, d, Kl(a)), b)
            }

            function Mg(a, c) {
                var b = a.l,
                    d = [],
                    e = c.form;
                if (!c[Ba] && e) {
                    var f = e.elements;
                    e = e.length;
                    for (var g = 0; g < e; g += 1) {
                        var h = f[g];
                        Ad(h) && !h[Ba] && ya(d, rb(b,
                            h))
                    }
                } else ya(d, rb(b, c));
                return d
            }

            function Ee(a) {
                if (Kc) {
                    Kc = !1;
                    var c = La(a.l),
                        b = [];
                    Ta(a.l, b, 15) ? a = [] : (F(b, c), a = b);
                    return a
                }
            }

            function Ng(a) {
                if (!Kc) {
                    Kc = !0;
                    a = La(a.l);
                    var c = [];
                    Ma(c, 14);
                    F(c, a);
                    return c
                }
            }

            function Ll(a, c, b) {
                var d = c[Ba];
                if (d) {
                    a: {
                        var e = La(a),
                            f = c[Ba];
                        if (0 < f) {
                            var g = [];
                            c = Fe(a, c);
                            var h = ac[f],
                                k = c[0] + "x" + c[1],
                                l = c[2] + "x" + c[3];
                            if (k !== h.Pc) {
                                h.Pc = k;
                                if (Ta(a, g, 9)) {
                                    a = [];
                                    break a
                                }
                                F(g, e);
                                F(g, f);
                                F(g, c[0]);
                                F(g, c[1])
                            }
                            if (l !== h.size) {
                                h.size = l;
                                if (Ta(a, g, 10)) {
                                    a = [];
                                    break a
                                }
                                F(g, e);
                                F(g, f);
                                F(g, c[2]);
                                F(g, c[3])
                            }
                            if (g.length) {
                                a =
                                    g;
                                break a
                            }
                        }
                        a = []
                    }
                    ya(b, a)
                }
                return d
            }

            function Bd(a, c, b) {
                void 0 === b && (b = !1);
                if ("button" === c.getAttribute("type")) return {
                    Sa: !1,
                    yc: !1,
                    Hc: !1
                };
                var d = c && Mb("ym-record-keys", c),
                    e = Og(c);
                a = Ge(a, c) || b && e;
                return {
                    Sa: !(d || !a),
                    yc: d,
                    Hc: e
                }
            }

            function Ge(a, c) {
                return Pg(a, c) || Lc(a, c) ? !0 : Qg(a, c)
            }

            function Og(a) {
                if (!a) return !1;
                var c = a.placeholder,
                    b = a.type;
                a = U(Rg, [a.className, a.id, a.name]);
                return b && K(b, Ml) || Oa(Pa(Nl), a) || Rg(c) && Ol.test(c)
            }

            function Rg(a) {
                return !!(a && 2 < a.length)
            }

            function Sg(a, c) {
                return c && Mb("(ym-disable-submit|-metrika-noform)",
                    c)
            }

            function Qg(a, c) {
                if (ta(c)) return !1;
                if (Tg(c)) {
                    var b = c.parentNode;
                    return (ta(b) ? 0 : 11 === b.nodeType) ? !1 : Qg(a, c.parentNode)
                }
                if (Pl.test(c.className)) return !0;
                b = Ug(a);
                if (!b) return !1;
                var d = b.call(c, ".ym-hide-content *");
                return d && (Ql.test(c.className) || b.call(c, ".ym-hide-content .ym-show-content *")) ? !1 : d
            }

            function Cd(a) {
                return aa(a) ? z(Cd, a) : ta(a) || "object" !== typeof a ? a : N(function(c, b) {
                    var d = b[0],
                        e = b[1],
                        f = Rl[d];
                    X(f) && (f = d);
                    e = K(f, Sl) ? e : Cd(e);
                    f ? c[f] = e : c[d] = e;
                    return c
                }, {}, Ea(a))
            }

            function Tl(a, c) {
                return pa(c,
                    function(b) {
                        var d = G(a);
                        M(c);
                        if (!d.o("dSync", !1)) return d.C("dSync", !0), Vg(a, b, {
                            za: c,
                            rb: "s",
                            Pb: "ds",
                            Ae: function(e, f, g) {
                                var h = e.tb;
                                e = e.host;
                                if (n(h, "settings")) return Wa(Na("ds.e"));
                                f = f(ba) - g;
                                g = e[1];
                                var k, l;
                                h = sa((k = {}, k.di = h, k.dit = f, k.dip = g, k));
                                k = (l = {}, l["page-url"] = Q(a).href, l);
                                return ra(a, "S", Wg)({
                                    G: h,
                                    D: k
                                }, Wg)["catch"](A(a, "ds.rs"))
                            }
                        })
                    })
            }

            function Vg(a, c, b) {
                var d = b.za,
                    e = Y(a),
                    f = Ul(a, c.userData, d),
                    g = Vl(a);
                return g.length ? Wl(a, e, f, c, b).then(function() {
                    return Xl(a, g, f, e, b)
                }, E) : H.resolve()
            }

            function Vl(a) {
                var c =
                    Dd(a);
                a = q(He, Zb(["iPhone", "iPad"]))(a);
                return c ? Yl : a ? Zl : []
            }

            function Xl(a, c, b, d, e) {
                var f = e.Ae,
                    g = void 0 === f ? E : f,
                    h = e.Pb,
                    k = d(ba);
                return $l(a, c, e)(ib(function(l) {
                    C(function(m) {
                        m && Ed(a, h + ".s", m)
                    }, l);
                    l = d($a);
                    b.C(h, l)
                }, function(l) {
                    b.C(h, d($a));
                    g(l, d, k)
                }))
            }

            function Wl(a, c, b, d, e) {
                var f = e.Pb,
                    g = e.za;
                return new H(function(h, k) {
                    var l = b.o(f, 0);
                    l = parseInt("" + l, 10);
                    return 60 >= c($a) - l ? k() : am(a) ? h(void 0) : Xg(d) ? k() : h(bm(a, g))
                })
            }

            function $l(a, c, b) {
                var d = b.rb,
                    e = b.data,
                    f = ra(a, d, b.za);
                a = y({}, Yg);
                e && y(a.D, e);
                return cm(z(function(g) {
                    return dm(f(y({
                        M: {
                            pd: !1,
                            xe: !0
                        }
                    }, Yg), z(function(h) {
                        var k = h[1],
                            l = h[2];
                        h = I("", z(function(m) {
                            return String.fromCharCode(m.charCodeAt(0) + 10)
                        }, h[0].split("")));
                        return "http" + (l ? "s" : "") + "://" + h + ":" + k + "/" + em[d]
                    }, g)).then(function(h) {
                        return y({}, h, {
                            host: g[h.ld]
                        })
                    }))
                }, c))
            }

            function Ul(a, c, b) {
                var d = c || {},
                    e = ra(a, "u", b),
                    f = Ja(a);
                return {
                    o: function(g, h) {
                        return X(d[g]) ? f.o(g, h) : d[g]
                    },
                    C: function(g, h) {
                        var k, l = "" + h;
                        d[g] = l;
                        f.C(g, l);
                        return e({
                            D: (k = {}, k.key = g, k.value = l, k)
                        }, [qa.ua + "//" + Nb + "/user_storage_set"], {})["catch"](A(a, "u.d.s.s"))
                    }
                }
            }

            function fm(a) {
                return {
                    N: function(c,
                        b) {
                        G(a).o("oo") || b()
                    }
                }
            }

            function gm(a, c) {
                try {
                    var b = c[0];
                    var d = b[1]
                } catch (e) {
                    return function() {
                        return H.resolve()
                    }
                }
                return function(e) {
                    var f, g = (f = {}, f["browser-info"] = hm, f["page-url"] = a.location && "" + a.location.href, f);
                    return d && (e = hb(a, e)) ? d(im, {
                        Ua: g,
                        ga: [],
                        W: "site-info=" + wd(e)
                    })["catch"](E) : H.resolve()
                }
            }

            function jm(a, c) {
                if (a["disableYaCounter" + c.id]) {
                    var b = M(c);
                    delete G(a).o("counters", {})[b];
                    Wa(Na("oo.e"))
                }
            }

            function km(a) {
                if (Mc(a)) return null;
                var c = lm(a),
                    b = c.Sc;
                X(b) && (c.Sc = null, mm(a).then(function(d) {
                    c.Sc =
                        d
                }));
                return b ? 1 : null
            }

            function nm(a, c, b) {
                c = M(c);
                a = Zg(a);
                b = b.D;
                if ((void 0 === b ? {} : b).nohit) return null;
                var d = b = null;
                n(a, "getEntriesByType") && (d = n(a.getEntriesByType("navigation"), "0")) && (b = om);
                if (!b) {
                    var e = n(a, "timing");
                    e && (b = pm, d = e)
                }
                if (!b) return null;
                a = qm(a, d, b);
                c = rm(c);
                return (c = sm(c, a)) && I(",", c)
            }

            function sm(a, c) {
                var b = a.length ? z(function(d, e) {
                    var f = c[e];
                    return f === d ? null : f
                }, a) : c;
                a.length = 0;
                C(q(O, na("push", a)), c);
                return U(oa(null), b).length === a.length ? null : b
            }

            function qm(a, c, b) {
                return z(function(d) {
                    var e =
                        d[0],
                        f = d[1];
                    if (S(e)) return e(a, c) || null;
                    if (S(f)) return null;
                    var g = !(!c[e] || !c[f]);
                    !g && 2 === d.length && (g = 0 === c[e] && 0 === c[f]) && (g = d[1], g = !($g[d[0]] || $g[g]));
                    return g ? (d = Math.round(c[e]) - Math.round(c[f]), 0 > d || 36E5 < d ? null : d) : 1 === d.length && c[e] ? Math.round(c[e]) : null
                }, b)
            }

            function Gg(a, c) {
                void 0 === c && (c = !1);
                for (var b = a.length, d = b - b % 3, e = [], f = 0; f < d; f += 3) {
                    var g = (a[f] << 16) + (a[f + 1] << 8) + a[f + 2];
                    e.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" [g >> 18 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" [g >>
                        12 & 63
                    ], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" [g >> 6 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" [g & 63])
                }
                switch (b - d) {
                    case 1:
                        b = a[d] << 4;
                        e.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" [b >> 6 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" [b & 63], "=", "=");
                        break;
                    case 2:
                        b = (a[d] << 10) + (a[d + 1] << 2), e.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" [b >> 12 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" [b >>
                            6 & 63
                        ], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" [b & 63], "=")
                }
                e = e.join("");
                return c ? ah(e, !0) : e
            }

            function hg(a, c) {
                void 0 === c && (c = !1);
                var b = a,
                    d = "",
                    e = 0;
                if (!b) return "";
                for (c && (b = ah(b)); b.length % 4;) b += "=";
                do {
                    var f = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(b.charAt(e++)),
                        g = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(b.charAt(e++)),
                        h = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(b.charAt(e++)),
                        k = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(b.charAt(e++));
                    if (0 > f || 0 > g || 0 > h || 0 > k) return "";
                    var l = f << 18 | g << 12 | h << 6 | k;
                    f = l >> 16 & 255;
                    g = l >> 8 & 255;
                    l &= 255;
                    d = 64 === h ? d + String.fromCharCode(f) : 64 === k ? d + String.fromCharCode(f, g) : d + String.fromCharCode(f, g, l)
                } while (e < b.length);
                return d
            }

            function ah(a, c) {
                void 0 === c && (c = !1);
                return a ? a.replace(c ? /[+/=]/g : /[-*_]/g, function(b) {
                    return tm[b] || b
                }) : ""
            }

            function um(a, c) {
                for (var b = "", d = 0; d < c; d += 1) b += a;
                return b
            }

            function vm(a, c, b, d, e, f, g, h) {
                var k =
                    b.o(f);
                ta(k) && (b.C(f, g), e(a, c, b, d), k = b.o(f, g));
                X(h) || h.wb(f, "" + k);
                return k
            }

            function wm(a, c) {
                if (Nc(a)) {
                    var b = cb(a).match(xm);
                    if (b && b.length) return b[1] === c
                }
                return !1
            }

            function Fd(a, c, b) {
                return function(d) {
                    var e, f, g = wa(c, b);
                    g && zm(a, d, c) && (g = L(g.params, g), (d = ye(a, d, "goods")) && g && g((e = {}, e.__ym = (f = {}, f.ecommerce = [d], f), e)))
                }
            }

            function zm(a, c, b) {
                var d = !1,
                    e = "";
                if (!Da(c)) return vb(b, "", "Ecommerce data should be an object"), d;
                var f = c.goods;
                switch (a) {
                    case "detail":
                    case "add":
                    case "remove":
                        aa(f) && f.length ? (d =
                            bh(function(g) {
                                return Da(g) && (Ga(g.id) || vd(b, g.id) || Ga(g.name))
                            }, f)) || (e = "All items in 'goods' should be objects and contain 'id' or 'name' field") : e = "Ecommerce data should contain 'goods' non-empty array";
                        break;
                    case "purchase":
                        vd(b, c.id) || Ga(c.id) ? d = !0 : e = "Purchase object should contain string or number 'id' field"
                }
                vb(b, "", e);
                return d
            }

            function ye(a, c, b) {
                var d, e;
                if (c) {
                    var f = c.purchase || c;
                    c = da(f);
                    var g = f[b];
                    if (g) {
                        var h = (d = {}, d[a] = (e = {}, e.products = z(Am, g), e), d);
                        1 < c.length && (h[a].actionField = N(function(k,
                            l) {
                            if (l === b) return k;
                            if ("currency" === l) return h.currencyCode = f.currency, k;
                            k[Ie[l] || l] = f[l];
                            return k
                        }, {}, c));
                        return h
                    }
                }
            }

            function Am(a) {
                var c = {};
                C(function(b) {
                    var d = Ie[b] || b; - 1 !== b.indexOf("item_category") ? (d = Ie.item_category, c[d] = c[d] ? c[d] + ("/" + a[b]) : a[b]) : c[d] = a[b]
                }, da(a));
                return c
            }

            function Bm(a, c) {
                try {
                    var b = c.origin
                } catch (d) {}
                b && Oa(q(Pa, Ha(b)), [/^http:\/\/([\w\-.]+\.)?webvisor\.com\/?$/, /^https:\/\/([\w\-.]+\.)?metri[kc]a\.yandex\.(ru|ua|by|kz|com|com\.tr)\/?$/]) && (b = sb(a, c.data), "appendremote" ===
                    n(b, "action") && Cm(a, c, b))
            }

            function ch(a, c, b, d) {
                var e, f, g, h;
                void 0 === b && (b = "");
                void 0 === d && (d = "");
                var k = G(a),
                    l = {};
                l.getCachedTags = Je;
                l.form = (e = {}, e.closest = u(a, dh), e.select = Dm, e.getData = u(a, eh), e);
                l.button = (f = {}, f.closest = u(a, Ke), f.select = Le, f.getData = u(a, Me), f);
                l.phone = (g = {}, g.hidePhones = D([a, null, [d]], fh), g);
                l.status = (h = {}, h.checkStatus = D([a, Ka(b)], Em), h);
                k.C("_u", l);
                c && ic(a, {
                    src: c
                })
            }

            function gh(a) {
                var c = a.lang;
                c = void 0 === c ? "" : c;
                var b = a.appVersion;
                b = void 0 === b ? "" : b;
                var d = a.fileId;
                d = void 0 === d ? "" :
                    d;
                a = a.beta;
                a = void 0 === a ? !1 : a;
                b = I(".", q(bb(q(O, Ka)), jc(Boolean))(b.split(".")));
                if (!K(d, Fm) || !K(c, ["ru", "en", "tr"])) return "";
                c = (a ? "https://s3.mds.yandex.net/internal-metrika-betas" : "https://yastatic.net/s3/metrika") + (b ? "/" + b : "") + "/form-selector/" + (d + "_" + c + ".js");
                return hh(c) ? c : ""
            }

            function Gm(a, c) {
                var b = jb(a);
                if (b) {
                    var d = b("div"),
                        e = Kb(a);
                    if (e) {
                        d.innerHTML = '<iframe name="RemoteIframe" allowtransparency="true" style="position: absolute; left: -999px; top: -999px; width: 1px; height: 1px;"></iframe>';
                        var f = d.firstChild;
                        f.onload = function() {
                            var h = b("meta");
                            h.setAttribute("http-equiv", "Content-Security-Policy");
                            h.setAttribute("content", "script-src *");
                            f.contentWindow.document.head.appendChild(h);
                            ic(f.contentWindow, {
                                src: c
                            })
                        };
                        a._ym__remoteIframeEl = f;
                        e.appendChild(d);
                        d.removeChild(f);
                        var g = null;
                        d.attachShadow ? g = d.attachShadow({
                            mode: "open"
                        }) : d.createShadowRoot ? g = d.createShadowRoot() : d.webkitCreateShadowRoot && (g = d.webkitCreateShadowRoot());
                        g ? g.appendChild(f) : (e.appendChild(f), a._ym__remoteIframeContainer =
                            f)
                    }
                }
            }

            function Em(a) {
                var c, b = ih(a);
                a = G(a).o("getCounters", Gd)();
                a = z(R("id"), a);
                return c = {
                    id: b
                }, c.counterFound = !!b && K(b, a), c
            }

            function fh(a, c, b) {
                var d;
                c = jh(a, c, {
                    hd: Hm,
                    le: (d = {}, d.href = !0, d)
                });
                b = U(Boolean, z(function(f) {
                    return "*" === f ? f : yb(f)
                }, b));
                var e = z(q(O, na("concat", [""]), kh("reverse"), ea), b);
                b = Oc(a);
                d = lh(a, b, 1E3);
                c = L(c.Uc, c, e);
                d.F(c);
                Im(a, b);
                mh(a, b);
                c()
            }

            function Hm(a, c, b) {
                var d = jb(a),
                    e = b.Ea,
                    f = b.sb,
                    g = e.parentNode,
                    h = e.textContent;
                if ("text" === b.Yb && h && d && g) {
                    b = d("small");
                    nh(b);
                    var k = h.split(""),
                        l = oh(h).length;
                    C(na("appendChild", b), N(function(m, p) {
                        var r = m.Ub,
                            v = m.nd,
                            x = d("small");
                        x.innerHTML = p;
                        var w = Jm.test(p);
                        nh(x);
                        w && (x.style.opacity = "" + (l - v - 1) / l);
                        r.push(x);
                        return {
                            Ub: r,
                            nd: v + (w ? 1 : 0)
                        }
                    }, {
                        Ub: [],
                        nd: 0
                    }, k).Ub);
                    Km(a, c, b, f);
                    g.insertBefore(b, e);
                    e.textContent = "";
                    return !0
                }
                return !1
            }

            function Km(a, c, b, d) {
                function e() {
                    C(u(["style", "opacity", ""], nc), Fa(b.childNodes));
                    if (c) {
                        var k = wa(a, c);
                        k && k.extLink("tel:" + d, {})
                    }
                    g();
                    h()
                }
                var f = fa(a),
                    g = E,
                    h = E;
                g = f.F(b, ["mouseenter"], function(k) {
                    if (k.target === b) {
                        var l = ca(a, e, 200, "ph.h.e");
                        (h ||
                            E)();
                        h = f.F(b, ["mouseleave"], function(m) {
                            m.target === b && Sa(a, l)
                        })
                    }
                })
            }

            function mh(a, c) {
                Pc(a)(ib(E, function() {
                    var b, d = a.document.body,
                        e = (b = {}, b.attributes = !0, b.childList = !0, b.subtree = !0, b);
                    za("MutationObserver", a.MutationObserver) && (new MutationObserver(c.T)).observe(d, e)
                }))
            }

            function Im(a, c) {
                return fa(a).F(a, ["load"], c.T)
            }

            function jh(a, c, b) {
                function d(k) {
                    var l;
                    return f(a, c, k) ? null === (l = h[k.sb]) || void 0 === l ? void 0 : l.xb : null
                }
                var e, f = b.hd;
                b = b.le;
                var g = void 0 === b ? (e = {}, e.href = !0, e.text = !0, e) : b,
                    h;
                return {
                    Uc: function(k) {
                        return new H(function(l,
                            m) {
                            k && k.length || m();
                            h = ph()(k);
                            Pc(a)(ib(u({
                                Z: [],
                                ea: 0
                            }, l), function() {
                                var p = Y(a),
                                    r = p(ba),
                                    v = g.href ? Lm(a, h) : [],
                                    x = g.text ? qh(a, h) : [];
                                l({
                                    Z: U(aa, U(Boolean, z(d, v.concat(x)))),
                                    ea: p(ba) - r
                                })
                            }))
                        })
                    }
                }
            }

            function Lm(a, c) {
                var b = a.document.body;
                if (!b) return [];
                var d = rh(c);
                return N(function(e, f) {
                    var g = n(f, "href");
                    try {
                        var h = decodeURI(g || "")
                    } catch (p) {
                        h = ""
                    }
                    if ("tel:" === h.slice(0, 4)) {
                        var k = (d.exec(h) || [])[0],
                            l = k ? yb(k) : "",
                            m = c[l];
                        X(m) || !l && "*" !== m.xb[0] || (e.push({
                                Yb: "href",
                                Ea: f,
                                sb: l,
                                xa: sh(k, c[l].xa),
                                Ce: g
                            }), g = yb(h.slice(4)), l =
                            ph()([l ? m.xb : [g, ""]]), e.push.apply(e, qh(a, l, f)))
                    }
                    return e
                }, [], Fa(b.querySelectorAll("a")))
            }

            function qh(a, c, b) {
                void 0 === b && (b = a.document.body);
                if (!b) return [];
                var d = [],
                    e = rh(c);
                tg(a, b, function(f) {
                    if (f !== b && "script" !== (n(f, "parentNode.nodeName") || "").toLowerCase()) {
                        var g = U(Boolean, e.exec(f.textContent || "") || []);
                        C(function(h) {
                            var k = yb(h);
                            X(c[k]) || d.push({
                                Yb: "text",
                                Ea: f,
                                sb: k,
                                xa: sh(h, c[k].xa),
                                Ce: f.textContent || ""
                            })
                        }, g)
                    }
                }, function(f) {
                    return e.test(f.textContent || "") ? 1 : 0
                }, a.NodeFilter.SHOW_TEXT);
                return d
            }

            function ph() {
                return Ne(function(a, c) {
                    var b = z(yb, c),
                        d = b[0];
                    b = b[1];
                    a[d] = {
                        xa: b,
                        xb: c
                    };
                    var e = th(d);
                    e !== d && (a[e] = {
                        xa: th(b),
                        xb: c
                    });
                    return a
                }, {})
            }

            function sh(a, c) {
                for (var b = [], d = a.split(""), e = c.split(""), f = 0, g = 0; g < a.length && !(f >= e.length); g += 1) {
                    var h = d[g];
                    "0" <= h && "9" >= h ? (b.push(e[f]), f += 1) : b.push(d[g])
                }
                return I("", b) + c.slice(f + 1)
            }

            function th(a) {
                var c = {
                    7: "8",
                    8: "7"
                };
                return 11 === a.length && c[a[0]] ? "" + c[a[0]] + a.slice(1) : a
            }

            function rh(a) {
                return new RegExp("(?:" + I("|", z(uh, da(a))) + ")")
            }

            function tg(a, c, b, d, e) {
                function f(g) {
                    return S(d) ?
                        d(g) ? a.NodeFilter.FILTER_ACCEPT : a.NodeFilter.FILTER_REJECT : a.NodeFilter.FILTER_ACCEPT
                }
                void 0 === e && (e = -1);
                if (S(b) && f(c) === a.NodeFilter.FILTER_ACCEPT && (b(c), !Tg(c)))
                    for (c = a.document.createTreeWalker(c, e, d ? {
                            acceptNode: f
                        } : null, !1); c.nextNode() && !1 !== b(c.currentNode););
            }

            function Mm(a, c, b) {
                if (b && (b = Ke(a, b), b = Me(a, b))) {
                    b = "?" + Qc(b);
                    var d = tb(a, c, "Button goal. Counter " + c.id + ". Button: " + b + ".");
                    Hd(a, c, "btn", d).reachGoal(b)
                }
            }

            function Nm(a, c, b, d) {
                d = n(d, "target");
                (d = Ob("button,input", a, d)) && "submit" === d.type &&
                    (d = dh(a, d)) && (b.push(d), ca(a, D([!1, a, c, b, d], vh), 300))
            }

            function vh(a, c, b, d, e) {
                var f = bc(c)(e, d),
                    g = -1 !== f;
                if (a || g) g && d.splice(f, 1), a = eh(c, e), a = "?" + Qc(a), d = D([c, b, "Form goal. Counter " + b.id + ". Form: " + a + "."], wh), Hd(c, b, "form", d).reachGoal(a)
            }

            function wh(a, c, b) {
                return Om(a, c).then(function(d) {
                    d && tb(a, c, b)()
                })
            }

            function eh(a, c, b) {
                return xh(a, c, ["i", "n", "p"], void 0, b)
            }

            function Pm(a, c) {
                var b;
                a((b = {}, b.clickmap = X(c) ? !0 : c, b))
            }

            function Qm(a, c, b, d, e) {
                var f;
                c = {
                    G: sa(),
                    D: (f = {}, f["page-url"] = c, f["pointer-click"] =
                        b, f)
                };
                d(c, e)["catch"](A(a, "c.s.c"))
            }

            function Rm(a, c, b, d, e) {
                if (Rc(a, "ymDisabledClickmap") || !c || !c.element) return !1;
                a = Ya(c.element);
                if (e && !e(c.element, a) || K(c.button, [2, 3]) && "A" !== a || Oa(oa(a), d)) return !1;
                d = c.element;
                if (c && b) {
                    if (50 > c.time - b.time) return !1;
                    e = Math.abs(b.position.x - c.position.x);
                    a = Math.abs(b.position.y - c.position.y);
                    c = c.time - b.time;
                    if (b.element === d && 2 > e && 2 > a && 1E3 > c) return !1
                }
                for (; d;) {
                    if (Sm(d)) return !1;
                    d = d.parentElement
                }
                return !0
            }

            function Tm(a, c) {
                var b = null;
                try {
                    if (b = c.target || c.srcElement) !b.ownerDocument &&
                        b.documentElement ? b = b.documentElement : b.ownerDocument !== a.document && (b = null)
                } catch (d) {}
                return b
            }

            function Um(a) {
                var c = a.which;
                a = a.button;
                return c || void 0 === a ? c : 1 === a || 3 === a ? 1 : 2 === a ? 3 : 4 === a ? 2 : 0
            }

            function yd(a, c) {
                var b = Kb(a),
                    d = Ae(a);
                return {
                    x: c.pageX || c.clientX + d.x - (b.clientLeft || 0) || 0,
                    y: c.pageY || c.clientY + d.y - (b.clientTop || 0) || 0
                }
            }

            function Vm(a, c) {
                if (a.Ge()) {
                    var b = yh(c);
                    if (b && !Mb("ym-disable-tracklink", b)) {
                        var d = a.l,
                            e = a.Jd,
                            f = a.za,
                            g = a.sender,
                            h = a.Qd,
                            k = f.ib,
                            l = b.href;
                        var m = db(b.innerHTML && b.innerHTML.replace(/<\/?[^>]+>/gi,
                            ""));
                        m || (m = (m = b.querySelector("img")) ? db(m.getAttribute("title") || m.getAttribute("alt")) : "");
                        m = l === m ? "" : m;
                        if (Mb("ym-external-link", b)) Id(d, f, {
                            url: l,
                            Qa: !0,
                            title: m,
                            sender: g
                        });
                        else {
                            k = k ? Jd(d, k).hostname : Q(d).hostname;
                            h = RegExp("\\.(" + I("|", z(Wm, h)) + ")$", "i");
                            var p = b.protocol + "//" + b.hostname + b.pathname;
                            h = zh.test(p) || zh.test(l) || h.test(l) || h.test(p);
                            b = b.hostname;
                            Kd(k) === Kd(b) ? h ? Id(d, f, {
                                url: l,
                                kb: !0,
                                title: m,
                                sender: g
                            }) : m && e.C("il", db(m).slice(0, 100)) : l && Xm.test(l) || Id(d, f, {
                                url: l,
                                ob: !0,
                                Qa: !0,
                                kb: h,
                                title: m,
                                sender: g
                            })
                        }
                    }
                }
            }

            function Id(a, c, b, d) {
                var e, f = sa();
                b.kb && f.C("dl", 1);
                b.Qa && f.C("ln", 1);
                f = {
                    G: f,
                    L: {
                        title: b.title,
                        ob: !!b.ob,
                        O: b.O
                    },
                    D: (e = {}, e["page-url"] = b.url, e["page-ref"] = c.ib || Q(a).href, e)
                };
                e = "Link";
                b.kb ? e = b.Qa ? "Ext link - File" : "File" : b.Qa && (e = "Ext link");
                c = b.sender(f, c).then(d || E).then(tb(a, c, e + ". Counter " + c.id + ". Url: " + b.url, b));
                return pc(a, "cl.p.s", c, b.ya || E, b.l)
            }

            function Ym(a, c) {
                var b, d, e = (b = {}, b.string = !0, b.object = !0, b["boolean"] = c, b)[typeof c] || !1;
                a((d = {}, d.trackLinks = e, d))
            }

            function Zm(a, c, b, d) {
                var e = Q(a),
                    f = e.hostname;
                e = e.href;
                if (c = Sc(c).url) a = Jd(a, c), f = a.hostname, e = a.href;
                return [d + "://" + f + "/" + b, e || ""]
            }

            function Ah(a) {
                return (a.split(":")[1] || "").replace(/^\/*/, "").replace(/^www\./, "").split("/")[0]
            }

            function $m(a, c, b, d) {
                var e;
                if (a = wa(a, b)) {
                    var f = d.data;
                    b = "" + b.id;
                    var g = d.sended || [];
                    d.sended || (d.sended = g);
                    K(b, g) || !a.params || d.counter && "" + d.counter !== b || (a.params(f), g.push(b), d.parent && c.$c((e = {}, e.type = "params", e.data = f, e)))
                }
            }

            function cg(a, c, b) {
                void 0 === b && (b = O);
                var d = Oe(a);
                b(d);
                var e = u(d, an);
                Pe(a, c, function(f) {
                    f.pb.F(e)
                });
                return d
            }

            function an(a, c) {
                var b = n(c, "ymetrikaEvent");
                b && a.T(n(b, "type"), b)
            }

            function Pe(a, c, b, d) {
                void 0 === b && (b = E);
                void 0 === d && (d = !1);
                var e = Oc(a);
                if (c && S(c.push)) {
                    var f = c.push;
                    c.push = function() {
                        var g = va(arguments),
                            h = g[0];
                        d && e.T(h);
                        g = f.apply(c, g);
                        d || e.T(h);
                        return g
                    };
                    a = {
                        pb: e,
                        unsubscribe: function() {
                            c.push = f
                        }
                    };
                    b(a);
                    C(e.T, c);
                    return a
                }
            }

            function md(a) {
                a = G(a);
                var c = a.o("dataLayer", []);
                a.C("dataLayer", c);
                return c
            }

            function zk(a, c) {
                var b, d;
                a.push((b = {}, b.ymetrikaEvent = (d = {}, d.type = c, d), b))
            }

            function Bh(a, c) {
                var b =
                    Fc(a, c),
                    d = [],
                    e = [];
                if (!b) return null;
                var f = D([a, b.$b], bn),
                    g = u(f, cn);
                b.V.F(["initToParent"], function(h) {
                    g(d, b.children[h[1].counterId])
                }).F(["parentConnect"], function(h) {
                    g(e, b.ja[h[1].counterId])
                });
                return {
                    V: b.V,
                    Tf: function(h, k) {
                        return new H(function(l, m) {
                            b.$b(h, k, function(p, r) {
                                l([p, r])
                            });
                            ca(a, u(Na(), m), 5100, "is.o")
                        })
                    },
                    Zc: function(h) {
                        var k = {
                            bd: [],
                            hc: [],
                            data: h
                        };
                        d.push(k);
                        return f(b.children, k, h)
                    },
                    $c: function(h) {
                        var k = {
                            bd: [],
                            hc: [],
                            data: h
                        };
                        e.push(k);
                        return f(b.ja, k, h)
                    }
                }
            }

            function cn(a, c, b) {
                c = U(function(d) {
                    return !K(b.info.counterId,
                        d.hc)
                }, c);
                C(function(d) {
                    var e;
                    b.info.counterId && a((e = {}, e[b.info.counterId] = b, e), d, d.data)
                }, c)
            }

            function bn(a, c, b, d, e) {
                return (new H(function(f, g) {
                    var h = da(b),
                        k = q(d.resolve ? d.resolve : O, Ic(f)),
                        l = q(d.reject ? d.reject : O, Ic(g));
                    d.resolve = k;
                    d.reject = l;
                    C(function(m) {
                        var p;
                        d.hc.push(+m);
                        var r = b[m],
                            v = ca(a, u(Na(), l), 5100, "is.m");
                        c(r.window, y(e, (p = {}, p.toCounter = Ka(m), p)), function(x, w) {
                            Sa(a, v);
                            d.bd.push(m);
                            d.resolve && d.resolve(w)
                        })
                    }, h)
                }))["catch"](A(a, "if.b"))
            }

            function dn(a) {
                var c = E,
                    b = null,
                    d = a.length;
                if (0 !== a.length &&
                    a[0]) {
                    var e = a.slice(-1)[0];
                    S(e) && (c = e, d = a.length + -1);
                    var f = a.slice(-2)[0];
                    S(f) && (c = f, b = e, d = a.length + -2);
                    d = a.slice(0, d);
                    return {
                        Kd: b,
                        ya: c,
                        O: 1 === d.length ? a[0] : nc(d)
                    }
                }
            }

            function pc(a, c, b, d, e) {
                var f = D([a, d, e], Qe);
                return b.then(f, function(g) {
                    f();
                    Ed(a, c, g)
                })
            }

            function Ch(a, c) {
                return {
                    N: function(b, d) {
                        var e = (b.L || {}).O,
                            f = b.M;
                        f = void 0 === f ? {} : f;
                        if (e && (Dh(c, e), !f.W && b.G && b.D)) {
                            var g = hb(a, e),
                                h = Eh(a),
                                k = b.G.o("pv");
                            g && !b.D.nohit && (k ? encodeURIComponent(g).length > qa.ud ? h.push([b.G, e]) : b.D["site-info"] = g : (f.W = g, b.M = f,
                                b.va || (b.va = {}), b.va.me = !0))
                        }
                        d()
                    },
                    fa: function(b, d) {
                        var e = Eh(a),
                            f = wa(a, c),
                            g = f && f.params;
                        g && (f = U(q(Tc, oa(b.G)), e), C(function(h) {
                            g(h[1]);
                            h = Re(a)(h, e);
                            e.splice(h, 1)
                        }, f));
                        d()
                    }
                }
            }

            function Ld(a, c) {
                return function(b) {
                    Fh(a, c, b)
                }
            }

            function en(a, c) {
                Se(a)(function(b) {
                    delete b[c]
                })
            }

            function Fh(a, c, b) {
                Se(a)(function(d) {
                    d[c] = y(d[c] || {}, b)
                })
            }

            function Se(a) {
                a = G(a);
                var c = a.o("dsjf") || Ha({});
                a.sa("dsjf", c);
                return c
            }

            function fn(a, c) {
                return function(b) {
                    var d, e, f = wa(a, c);
                    f && (Da(b) ? Aa(da(b)) ? (b = Gh(b)) && Aa(b) && f.params((d = {}, d.__ym = (e = {}, e.fpmh = b, e), d)) : tb(a, c, "First party params error. Empty object.")() : tb(a, c, "First party params error. Not an object.")())
                }
            }

            function Gh(a) {
                a = Ea(a);
                return N(function(c, b) {
                    var d = b[0],
                        e = b[1],
                        f = Da(e);
                    if (!Ga(e) && !f) return c;
                    e = f ? Gh(e) : e;
                    Aa(e) && c.push([d, e]);
                    return c
                }, [], a)
            }

            function Hh(a, c, b) {
                void 0 === b && (b = 0);
                c = Ea(c);
                c = N(function(d, e) {
                    var f = e[0],
                        g = e[1],
                        h = Da(g);
                    if (!Ga(g) && !h) return d;
                    h ? g = Hh(a, g, b + 1) : b || "yandex_cid" !== f ? ("phone_number" === f ? g = gn(g) : "email" === f && (g = hn(g)), g = Ih(a, g)) : g = H.resolve(g);
                    d.push(g.then(function(k) {
                        return [f, k]
                    }));
                    return d
                }, [], c);
                return H.all(c)
            }

            function hn(a) {
                var c = db(a).toLowerCase().split("@"),
                    b = c[0];
                c = c[1];
                if (!c) return a;
                c = c.replace("googlemail.com", "gmail.com");
                Jh(c) && (c = "yandex.ru");
                "yandex.ru" === c ? b = b.replace(Te, "-") : "gmail.com" === c && (b = b.replace(Te, ""));
                a = Kh(b, "+"); - 1 !== a && (b = b.slice(0, a));
                return b + "@" + c
            }

            function gn(a) {
                a = yb(a);
                return "8" === a[0] ? "7" + a.slice(1) : a
            }

            function Ih(a, c) {
                return new H(function(b, d) {
                    var e = (new a.TextEncoder).encode(c);
                    a.crypto.subtle.digest("SHA-256",
                        e).then(function(f) {
                        f = new a.Blob([f], {
                            type: "application/octet-binary"
                        });
                        var g = new a.FileReader;
                        g.onload = function(h) {
                            h = n(h, "target.result");
                            var k = (h || "").indexOf(","); - 1 !== k ? b(h.substring(k + 1)) : d(fc("fpm.i"))
                        };
                        g.readAsDataURL(f)
                    }, d)
                })
            }

            function wa(a, c) {
                var b = G(a).o("counters", {}),
                    d = M(c);
                return b[d]
            }

            function Lh(a, c) {
                G(a).C("dce:" + c, !0);
                var b = G(a).o("dclq:" + c);
                b && (C(function(d) {
                    var e = d[0];
                    d = d[1];
                    ea.apply(void 0, Z([Md(a, c)[e]], d))
                }, b), Ue(b))
            }

            function tb(a, c, b, d) {
                return Mh(c) ? E : u(D(Z([a, M(c)], d ? [b + ". Params:",
                    d
                ] : [b]), vb), ea)
            }

            function vb() {
                var a = va(arguments),
                    c = a.slice(2);
                Md(a[0], a[1]).log.apply(vb, c)
            }

            function Nh(a) {
                var c = "1" === $b(a).o("debug"),
                    b = -1 < Q(a).href.indexOf("_ym_debug=1");
                a = a._ym_debug;
                return {
                    Zd: c,
                    de: a || b,
                    isEnabled: Oa(Boolean, [c, a, b])
                }
            }

            function pa(a, c) {
                var b = M(a);
                return Oh()(jn(b)).then(c)
            }

            function kn(a, c, b) {
                c = M(c);
                a = Ph(a);
                b = y({
                    Sd: a(ba)
                }, b);
                return Oh()(ln(c, b))
            }

            function ln(a, c) {
                return function(b) {
                    var d = b[a];
                    d ? (d.ve = c, d.Wc = !0, d.Vc ? d.Vc(c) : d.wa = H.resolve(c)) : b[a] = {
                        wa: H.resolve(c),
                        ve: c,
                        Wc: !0
                    }
                }
            }

            function zb(a) {
                return z(function(c) {
                    return !c ||
                        K(c, a) ? c : 0
                }, Pb)
            }

            function Qh(a) {
                return !Mc(a) && Rh(a)
            }

            function Ve(a) {
                return jb(a) ? u(a, mn) : !1
            }

            function Rh(a) {
                var c = n(a, "navigator.sendBeacon");
                return c && za("sendBeacon", c) ? D([a, L(c, n(a, "navigator"))], nn) : !1
            }

            function nn(a, c, b, d) {
                return new H(function(e, f) {
                    var g;
                    if (!n(a, "navigator.onLine")) return f();
                    var h = y(d.Ua, (g = {}, g["force-urlencoded"] = 1, g));
                    g = b + "?" + Qc(h) + (d.W ? "&" + d.W : "");
                    return 2E3 < g.length ? f(Na("sb.tlq")) : c(g) ? e("") : f()
                })
            }

            function mn(a, c, b) {
                return new H(function(d, e) {
                    var f, g, h = "_ymjsp" + Xa(a),
                        k = y((f = {}, f.callback = h, f), b.Ua),
                        l = D([a, h], on);
                    a[h] = function(p) {
                        try {
                            l(), Xb(m), d(p)
                        } catch (r) {
                            e(r)
                        }
                    };
                    k.wmode = "5";
                    var m = ic(a, (g = {}, g.src = Sh(c, b, k), g));
                    if (!m) return l(), e(fc("jp.s"));
                    f = u(m, Xb);
                    f = q(f, u(Na(b.ga), e));
                    g = Nd(a, f, b.Ia || 1E4);
                    g = D([a, g], Sa);
                    m.onload = g;
                    m.onerror = q(l, g, f)
                })
            }

            function on(a, c) {
                try {
                    delete a[c]
                } catch (b) {
                    a[c] = void 0
                }
            }

            function Uc(a) {
                var c = jb(a);
                return c ? D([a, c], pn) : !1
            }

            function pn(a, c, b, d) {
                return new H(function(e, f) {
                    var g = Kb(a),
                        h = c("img"),
                        k = q(u(h, Xb), u(Na(d.ga), f)),
                        l = Nd(a, k, d.Ia || 3E3);
                    h.onerror =
                        k;
                    h.onload = q(u(h, Xb), u(null, e), D([a, l], Sa));
                    k = y({}, d.Ua);
                    delete k.wmode;
                    h.src = Sh(b, d, k);
                    Nc(a) && (y(h.style, {
                        position: "absolute",
                        visibility: "hidden",
                        width: "0px",
                        height: "0px"
                    }), g.appendChild(h))
                })
            }

            function Qb(a) {
                var c;
                if (c = n(a, "XMLHttpRequest"))
                    if (c = "withCredentials" in new a.XMLHttpRequest) {
                        a: {
                            if (qn.test(a.location.host) && a.opera && S(a.opera.version) && (c = a.opera.version(), "string" === typeof c && "12" === c.split(".")[0])) {
                                c = !0;
                                break a
                            }
                            c = !1
                        }
                        c = !c
                    } return c ? u(a, rn) : !1
            }

            function rn(a, c, b) {
                var d, e = new a.XMLHttpRequest,
                    f = b.W,
                    g = y(b.yb ? (d = {}, d.wmode = "7", d) : {}, b.Ua);
                return new H(function(h, k) {
                    e.open(b.nc || "GET", c + "?" + Qc(g), !0);
                    e.withCredentials = !1 !== b.pd;
                    b.Ia && (e.timeout = b.Ia);
                    Th(Ea, bb(function(m) {
                        e.setRequestHeader(m[0], m[1])
                    }))(b.Da);
                    var l = D([a, e, Na(b.ga), b.yb, b.xe, h, k], sn);
                    e.onreadystatechange = l;
                    try {
                        e.send(f)
                    } catch (m) {}
                })
            }

            function sn(a, c, b, d, e, f, g, h) {
                if (4 === c.readyState)
                    if (200 === c.status || e || g(b), e) 200 === c.status ? f(c.responseText) : g(fc("http." + c.status + ".st." + c.statusText + ".rt." + ("" + c.responseText).substring(0,
                        50)));
                    else {
                        e = null;
                        if (d) try {
                            (e = sb(a, c.responseText)) || g(b)
                        } catch (k) {
                            g(b)
                        }
                        f(e)
                    } return h
            }

            function Sh(a, c, b) {
                (b = Qc(b)) && (a += "?" + b);
                c.W && (a += (b ? "&" : "?") + c.W);
                return a
            }

            function tn(a, c, b) {
                var d = z(Tc, Ab[c] || Bb);
                C(function(e) {
                    return d.unshift(e)
                }, Od);
                return z(q(qc([a, b]), ea), d)
            }

            function Uh(a, c) {
                var b = Q(a),
                    d = b.href,
                    e = b.host,
                    f = -1;
                if (!Ga(c) || X(c)) return d;
                b = c.replace(Vh, "");
                if (-1 !== b.search(un)) return b;
                var g = b.charAt(0);
                if ("?" === g && (f = d.search(/\?/), -1 === f) || "#" === g && (f = d.search(/#/), -1 === f)) return d + b;
                if (-1 !==
                    f) return d.substr(0, f) + b;
                if ("/" === g) {
                    if (f = d.indexOf(e), -1 !== f) return d.substr(0, f + e.length) + b
                } else return d = d.split("/"), d[d.length - 1] = b, I("/", d);
                return ""
            }

            function We(a, c) {
                return {
                    N: function(b, d) {
                        var e, f = b.G,
                            g = b.Ha,
                            h = b.D,
                            k = b.M;
                        k = void 0 === k ? {} : k;
                        if (f && h) {
                            var l = Y(a);
                            f.wb("rqnl", 1);
                            for (var m = Vc(a), p = 1; m[p];) p += 1;
                            b.L || (b.L = {});
                            b.L.Va = p;
                            m[p] = (e = {}, e.protocol = qa.ua, e.host = Nb, e.resource = "watch", e.postParams = k.W, e.time = l(ba), e.counterType = c.R, e.params = h, e.browserInfo = f.l(), e.counterId = c.id, e.ghid = xb(a), e);
                            g && (m[p].telemetry = g.l());
                            Xe(a)
                        }
                        d()
                    },
                    fa: function(b, d) {
                        Wh(a, b);
                        d()
                    }
                }
            }

            function Wh(a, c) {
                var b = Vc(a);
                c.G && !ab(b) && c.L && (delete b[c.L.Va], Xe(a))
            }

            function Xe(a) {
                var c = Vc(a);
                Ja(a).C("retryReqs", c)
            }

            function Wc(a, c) {
                return {
                    N: function(b, d) {
                        var e = Xh(c);
                        e = D([b, e, d], vn);
                        wn(a, c, e)
                    },
                    fa: function(b, d) {
                        var e = b.G,
                            f = Xh(c);
                        if (e) {
                            var g = f.ca;
                            f.xc === e && g && (C(ea, g), f.ca = null)
                        }
                        d()
                    }
                }
            }

            function vn(a, c, b) {
                var d = a.G;
                d ? ve(a) ? (c.xc = d, b()) : c.ca ? c.ca.push(b) : b() : b()
            }

            function ve(a) {
                return (a = a.G) && a.o("pv") && !a.o("ar")
            }

            function wn(a,
                c, b) {
                if (Ye(a) && wb(a)) {
                    var d = xn(c);
                    if (!d.ee) {
                        d.ee = !0;
                        c = Fc(a, c);
                        if (!c) {
                            b();
                            return
                        }
                        d.ca = [];
                        var e = function() {
                            d.ca && (C(ea, d.ca), d.ca = null)
                        };
                        ca(a, e, 3E3);
                        c.V.F(["initToChild"], e)
                    }
                    d.ca ? d.ca.push(b) : b()
                } else b()
            }

            function Yh(a, c) {
                return {
                    N: function(b, d) {
                        var e = b.G;
                        if (e && (!c || c.Yc)) {
                            var f = a.document.title;
                            b.L && b.L.title && (f = b.L.title);
                            var g = Rb("getElementsByTagName", a.document);
                            "string" !== typeof f && g && (f = g("title"), f = (f = n(f, "0.innerHtml")) ? f : "");
                            f = f.slice(0, qa.vd);
                            e.C("t", f)
                        }
                        d()
                    }
                }
            }

            function Cb(a) {
                return function(c,
                    b) {
                    return {
                        N: function(d, e) {
                            var f = d.G,
                                g = d.D;
                            f && g && C(function(h) {
                                var k = Ze[h],
                                    l = "bi",
                                    m = f;
                                k || (k = $e[h], l = "tel", m = nd(d));
                                k && (k = B(l + ":" + h, k, null)(c, b, d), m.wb(h, k))
                            }, a || yn());
                            e()
                        }
                    }
                }
            }

            function zn(a, c) {
                var b = Xc(a);
                c.F(["initToParent"], function(d) {
                    var e = d[0];
                    d = d[1];
                    window.window && (b.children[d.counterId] = {
                        info: d,
                        window: e.source
                    })
                }).F(["initToChild"], function(d) {
                    var e = d[0];
                    d = d[1];
                    e.source === a.parent && c.T("parentConnect", [e, d])
                }).F(["parentConnect"], function(d) {
                    var e = d[1];
                    e.counterId && (b.ja[e.counterId] = {
                        info: e,
                        window: d[0].source
                    })
                })
            }

            function An(a) {
                if (za("MutationObserver", a.MutationObserver)) {
                    var c = Xc(a).children,
                        b = new a.MutationObserver(function() {
                            C(function(d) {
                                n(c[d], "window.window") || delete c[d]
                            }, da(c))
                        });
                    Pc(a)(ib(E, function() {
                        b.observe(a.document.body, {
                            subtree: !0,
                            childList: !0
                        })
                    }))
                }
            }

            function Bn(a, c) {
                return function(b, d) {
                    var e, f = {
                        cb: Y(a)(ba),
                        key: a.Math.random(),
                        dir: 0
                    };
                    b.length && (f.cb = Ka(b[0]), f.key = parseFloat(b[1]), f.dir = Ka(b[2]));
                    y(d, c);
                    var g = (e = {
                            data: d
                        }, e.__yminfo = I(":", ["__yminfo", f.cb, f.key, f.dir]),
                        e);
                    return {
                        ia: f,
                        ed: hb(a, g) || ""
                    }
                }
            }

            function Pc(a, c) {
                function b(e) {
                    n(c, d) ? e() : ca(a, u(e, b), 100)
                }
                void 0 === c && (c = a);
                var d = (c.nodeType ? "contentWindow." : "") + "document.body";
                return Ha(function(e, f) {
                    b(f)
                })
            }

            function kc(a, c) {
                var b = c.Qb,
                    d = b || "uid";
                b = b ? a.location.hostname : void 0;
                var e = $b(a),
                    f = Ja(a),
                    g = Y(a),
                    h = g(Pd),
                    k = Zh(a, c),
                    l = k[0];
                k = k[1];
                var m = e.o("d");
                $h(a, c);
                var p = !1;
                !k && l && (k = l, p = !0);
                if (!k) k = I("", [g(Pd), Xa(a)]), p = !0;
                else if (!m || 15768E3 < h - Ka(m)) p = !0;
                p && !c.Ba && (e.C(d, k, 525600, b), e.C("d", "" + h, 525600, b));
                f.C(d, k);
                return k
            }

            function Cn(a, c) {
                return !c.Ba && $h(a, c)
            }

            function Zh(a, c) {
                var b = Ja(a),
                    d = $b(a),
                    e = c.Qb || "uid";
                return [b.o(e), d.o(e)]
            }

            function Hg(a, c, b) {
                af(a, "metrika_enabled", "1", 0, c, b, !0);
                var d = ai(a);
                (d = d && d.metrika_enabled) && bi(a, "metrika_enabled", c, b, !0);
                return !!d
            }

            function af(a, c, b, d, e, f, g) {
                void 0 === g && (g = !1);
                if (Ig(a, zd, c)) {
                    var h = c + "=" + encodeURIComponent(b) + ";";
                    h += "" + Dn(a);
                    if (d) {
                        var k = new Date;
                        k.setTime(k.getTime() + 6E4 * d);
                        h += "expires=" + k.toUTCString() + ";"
                    }
                    e && (d = e.replace(En, ""), h += "domain=" + d + ";");
                    try {
                        a.document.cookie =
                            h + ("path=" + (f || "/")), g || (ci(a)[c] = b)
                    } catch (l) {}
                }
            }

            function zd(a, c) {
                var b = ci(a);
                return b ? b[c] || null : null
            }

            function ai(a) {
                try {
                    var c = a.document.cookie;
                    if (!ta(c)) {
                        var b = {};
                        C(function(d) {
                            d = d.split("=");
                            var e = d[1];
                            b[db(d[0])] = db(di(e))
                        }, (c || "").split(";"));
                        return b
                    }
                } catch (d) {}
                return null
            }

            function Ig(a, c, b) {
                return !bf.length || K(b, ei) ? !0 : N(function(d, e) {
                    return d && e(a, c, b)
                }, !0, bf)
            }

            function xb(a) {
                var c = G(a),
                    b = c.o("hitId");
                b || (b = Xa(a), c.C("hitId", b));
                return b
            }

            function Q(a) {
                return N(function(c, b) {
                    var d = n(a, "location." +
                        b);
                    c[b] = d ? "" + d : "";
                    return c
                }, {}, Fn)
            }

            function Jh(a) {
                var c = a.match(fi);
                if (c) {
                    a = c[1];
                    if (c = c[2]) return K(c, cf) ? c : !1;
                    if (a) return cf[0]
                }
                return !1
            }

            function Me(a, c, b) {
                var d = Ya(c);
                return d && xh(a, c, U(Boolean, ["p", Gn[d], "c"]), Le, b)
            }

            function Ke(a, c) {
                var b = Ob(df, a, c);
                if (!b) {
                    var d = Ob("div", a, c);
                    d && (kb(df + ",div", d).length || (b = d))
                }
                return b
            }

            function xh(a, c, b, d, e) {
                return N(function(f, g) {
                    var h = null;
                    g in gi ? h = c.getAttribute && c.getAttribute(gi[g]) : g in rc && (h = "p" === g ? rc[g](a, c, e) : "c" === g ? rc[g](a, c, d) : rc[g](a, c));
                    h && (h =
                        h.slice(0, hi[g] || 100), f[g] = ef[g] ? "" + Yb(h) : h);
                    return f
                }, {}, b)
            }

            function Jg(a, c, b) {
                if (Yc(a)) return Fa(b.querySelectorAll(c));
                var d = ii(c.split(" "), b);
                return U(function(e, f) {
                    return bc(a)(e, d) === f
                }, d)
            }

            function ii(a, c) {
                var b = Z(a),
                    d = b.shift();
                if (!d) return [];
                d = c.getElementsByTagName(d);
                return b.length ? Jb(u(b, ii), Fa(d)) : Fa(d)
            }

            function oc(a, c) {
                if (c.querySelector) return c.querySelector(a);
                var b = kb(a, c);
                return b && b.length ? b[0] : null
            }

            function kb(a, c) {
                if (!c) return [];
                var b = c.querySelectorAll(a);
                return b ? Fa(b) : []
            }

            function yh(a) {
                var c = null;
                try {
                    c = a.target || a.srcElement
                } catch (b) {}
                if (c) {
                    3 === c.nodeType && (c = c.parentNode);
                    for (a = c && c.nodeName && ("" + c.nodeName).toLowerCase(); n(c, "parentNode.nodeName") && ("a" !== a && "area" !== a || !c.href && !c.getAttribute("xlink:href"));) a = (c = c.parentNode) && c.nodeName && ("" + c.nodeName).toLowerCase();
                    return c.href ? c : null
                }
                return null
            }

            function ic(a, c) {
                var b = a.document,
                    d = y({
                        type: "text/javascript",
                        charset: "utf-8",
                        async: !0
                    }, c),
                    e = jb(a);
                if (e) {
                    var f = e("script");
                    Th(Ea, bb(function(l) {
                        var m = l[0];
                        l = l[1];
                        "async" === m && l ? f.async = !0 : f[m] = l
                    }))(d);
                    try {
                        var g = Rb("getElementsByTagName", b),
                            h = g("head")[0];
                        if (!h) {
                            var k = g("html")[0];
                            h = e("head");
                            k && k.appendChild(h)
                        }
                        h.insertBefore(f, h.firstChild);
                        return f
                    } catch (l) {}
                }
            }

            function Hn(a, c, b) {
                var d = ji(c);
                K(b, d.Ca) || d.Ca.push(b);
                if (ab(d.Aa)) {
                    b = jb(a);
                    if (!b) return null;
                    b = b("iframe");
                    y(b.style, {
                        display: "none",
                        width: "1px",
                        height: "1px",
                        visibility: "hidden"
                    });
                    b.src = c;
                    a = Kb(a);
                    if (!a) return null;
                    a.appendChild(b);
                    d.Aa = b
                } else(a = n(d.Aa, "contentWindow")) && a.postMessage("frameReinit",
                    "*");
                return d.Aa
            }

            function In(a, c) {
                var b = aa(a) ? a : [a];
                c = c || document;
                if (c.querySelectorAll) {
                    var d = I(", ", z(function(e) {
                        return "." + e
                    }, b));
                    return Fa(c.querySelectorAll(d))
                }
                if (c.getElementsByClassName) return Jb(q(na("getElementsByClassName", c), Fa), b);
                d = c.getElementsByTagName("*");
                b = "(" + I("|", b) + ")";
                return U(u(b, Mb), Fa(d))
            }

            function ff(a, c, b) {
                for (var d = "", e = Je(), f = Ya(c) || "*"; c && c.parentNode && !K(f, ["BODY", "HTML"]);) d += e[f] || "*", d += ki(a, c, b) || "", c = c.parentElement, f = Ya(c) || "*";
                return db(d, 128)
            }

            function ki(a,
                c, b) {
                if (a = Qd(a, c)) {
                    a = a.childNodes;
                    for (var d = c && c.nodeName, e = 0, f = 0; f < a.length; f += 1)
                        if (d === (a[f] && a[f].nodeName)) {
                            if (c === a[f]) return e;
                            b && a[f] === b || (e += 1)
                        }
                }
                return 0
            }

            function Qd(a, c) {
                var b = n(a, "document");
                if (!c || c === b.documentElement) return null;
                if (c === cc(a)) return b.documentElement;
                b = null;
                try {
                    b = c.parentNode
                } catch (d) {}
                return b
            }

            function Fe(a, c) {
                var b = gf(a, c),
                    d = b.left;
                b = b.top;
                var e = Rd(a, c);
                return [d, b, e[0], e[1]]
            }

            function Rd(a, c) {
                var b = n(a, "document");
                return c === cc(a) || c === b.documentElement ? Cg(a) : (b = Sd(c)) ? [b.width, b.height] : [c.offsetWidth, c.offsetHeight]
            }

            function gf(a, c) {
                var b = c,
                    d = n(a, "document"),
                    e = Ya(b);
                if (!b || !b.ownerDocument || "PARAM" === e || b === cc(a) || b === d.documentElement) return {
                    left: 0,
                    top: 0
                };
                if (d = Sd(b)) return b = Ae(a), {
                    left: Math.round(d.left + b.x),
                    top: Math.round(d.top + b.y)
                };
                for (e = d = 0; b;) d += b.offsetLeft, e += b.offsetTop, b = b.offsetParent;
                return {
                    left: d,
                    top: e
                }
            }

            function db(a, c) {
                if (a) {
                    var b = li ? li.call(a) : ("" + a).replace(Vh, "");
                    return c && b.length > c ? b.substring(0, c) : b
                }
                return ""
            }

            function Ob(a, c, b) {
                if (!(c && c.Element &&
                        c.Element.prototype && c.document && b)) return null;
                if (c.Element.prototype.closest && za("closest", c.Element.prototype.closest) && b.closest) return b.closest(a);
                var d = Ug(c);
                if (d) {
                    for (; b && 1 === b.nodeType && !d.call(b, a);) b = b.parentElement || b.parentNode;
                    return b && 1 === b.nodeType ? b : null
                }
                if (Yc(c)) {
                    for (a = Fa((c.document || c.ownerDocument).querySelectorAll(a)); b && 1 === b.nodeType && -1 === bc(c)(b, a);) b = b.parentElement || b.parentNode;
                    return b && 1 === b.nodeType ? b : null
                }
                return null
            }

            function Yc(a) {
                return !(!za("querySelectorAll",
                    n(a, "Element.prototype.querySelectorAll")) || !a.document.querySelectorAll)
            }

            function mi(a) {
                return Td(a) && !Oa(oa(a.type), Jn) ? ni(a) ? !a.checked : !a.value : Kn(a) ? !a.value : Ln(a) ? 0 > a.selectedIndex : !0
            }

            function Ya(a) {
                if (a) try {
                    var c = a.nodeName;
                    if (Ga(c)) return c;
                    c = a.tagName;
                    if (Ga(c)) return c
                } catch (b) {}
            }

            function oi(a, c) {
                var b = a.document.getElementsByTagName("form");
                return bc(a)(c, Fa(b))
            }

            function Mn(a, c, b) {
                b = Rb("dispatchEvent", b || a.document);
                var d = null,
                    e = n(a, "Event.prototype.constructor");
                if (e && (za("(Event|Object|constructor)",
                        e) || hf(a) && "[object Event]" === "" + e)) try {
                    d = new a.Event(c)
                } catch (f) {
                    if ((a = Rb("createEvent", n(a, "document"))) && S(a)) {
                        try {
                            d = a(c)
                        } catch (g) {}
                        d && d.initEvent && d.initEvent(c, !1, !1)
                    }
                }
                d && b(d)
            }

            function Sd(a) {
                try {
                    return a.getBoundingClientRect && a.getBoundingClientRect()
                } catch (c) {
                    return "object" === typeof c && null !== c && 16389 === (c.Nc && c.Nc & 65535) ? {
                        top: 0,
                        bottom: 0,
                        left: 0,
                        width: 0,
                        height: 0,
                        right: 0
                    } : null
                }
            }

            function Cg(a) {
                var c = Kb(a);
                a = xd(a);
                return [Math.max(c.scrollWidth, a[0]), Math.max(c.scrollHeight, a[1])]
            }

            function Ae(a) {
                var c =
                    cc(a),
                    b = n(a, "document");
                return {
                    x: a.pageXOffset || b.documentElement && b.documentElement.scrollLeft || c && c.scrollLeft || 0,
                    y: a.pageYOffset || b.documentElement && b.documentElement.scrollTop || c && c.scrollTop || 0
                }
            }

            function xd(a) {
                var c = pi(a);
                if (c) {
                    var b = c[2];
                    return [a.Math.round(c[0] * b), a.Math.round(c[1] * b)]
                }
                c = Kb(a);
                return [n(c, "clientWidth") || a.innerWidth, n(c, "clientHeight") || a.innerHeight]
            }

            function pi(a) {
                var c = n(a, "visualViewport.width"),
                    b = n(a, "visualViewport.height");
                a = n(a, "visualViewport.scale");
                return ta(c) ||
                    ta(b) ? null : [Math.floor(c), Math.floor(b), a]
            }

            function Kb(a) {
                var c = n(a, "document") || {},
                    b = c.documentElement;
                return "CSS1Compat" === c.compatMode ? b : cc(a) || b
            }

            function cc(a) {
                a = n(a, "document");
                try {
                    return a.getElementsByTagName("body")[0]
                } catch (c) {
                    return null
                }
            }

            function Mb(a, c) {
                try {
                    return (new RegExp("(?:^|\\s)" + a + "(?:\\s|$)")).test(c.className)
                } catch (b) {
                    return !1
                }
            }

            function qb(a) {
                var c;
                try {
                    if (c = a.target || a.srcElement) !c.ownerDocument && c.documentElement ? c = c.documentElement : c.ownerDocument !== document && (c = null)
                } catch (b) {}
                return c
            }

            function Xb(a) {
                var c = a && a.parentNode;
                c && c.removeChild(a)
            }

            function Db(a) {
                return a ? a.innerText || "" : ""
            }

            function Tg(a) {
                if (ta(a)) return !1;
                a = a.nodeType;
                return 3 === a || 8 === a
            }

            function te(a, c, b) {
                void 0 === c && (c = "");
                void 0 === b && (b = "_ym");
                var d = "" + b + c + "_";
                return {
                    Mb: Nn(a),
                    o: function(e, f) {
                        var g = qi(a, "" + d + e);
                        return ab(g) && !X(f) ? f : g
                    },
                    C: function(e, f) {
                        ri(a, "" + d + e, f);
                        return this
                    },
                    eb: function(e) {
                        si(a, "" + d + e);
                        return this
                    }
                }
            }

            function ri(a, c, b) {
                var d = jf(a);
                a = hb(a, b);
                if (!ab(a)) try {
                    d.setItem(c, a)
                } catch (e) {}
            }

            function qi(a, c) {
                var b =
                    jf(a);
                try {
                    return sb(a, b.getItem(c))
                } catch (d) {}
                return null
            }

            function si(a, c) {
                var b = jf(a);
                try {
                    b.removeItem(c)
                } catch (d) {}
            }

            function jf(a) {
                try {
                    return a.localStorage
                } catch (c) {}
                return null
            }

            function hb(a, c, b) {
                try {
                    return a.JSON.stringify(c, null, b)
                } catch (d) {
                    return null
                }
            }

            function nd(a, c, b) {
                void 0 === b && (b = null);
                a.Ha || (a.Ha = ti());
                c && a.Ha.wb(c, b);
                return a.Ha
            }

            function Ud(a) {
                return {
                    N: function(c, b) {
                        var d = a.document,
                            e = c.G;
                        if (e && kf(a)) {
                            var f = fa(a),
                                g = function(h) {
                                    kf(a) || (f.Wa(d, ui, g), b());
                                    return h
                                };
                            f.F(d, ui, g);
                            e.C("pr",
                                "1")
                        } else b()
                    }
                }
            }

            function Qa(a, c, b) {
                return function(d, e) {
                    var f = ya(Vd(a, "w", e), b);
                    return Zc(a, c, f)(d)
                }
            }

            function Zc(a, c, b) {
                var d = pb(a, c);
                return function(e) {
                    return vi(b, e, !0).then(function() {
                        var f = e.ba || {},
                            g = f.$d,
                            h = void 0 === g ? "" : g;
                        g = f.qa;
                        var k = void 0 === g ? "" : g;
                        f = f.ae;
                        f = z(function(l) {
                            return qa.ua + "//" + ("" + h + l || Nb) + "/" + k
                        }, void 0 === f ? [Nb] : f);
                        return d(e, f)
                    }).then(function(f) {
                        var g = f.tb;
                        f = f.ld;
                        e.we = g;
                        e.Sf = f;
                        return vi(b, e).then(u(g, O))
                    })
                }
            }

            function pb(a, c) {
                return function(b, d) {
                    return wi(a, c, d, b)
                }
            }

            function wi(a,
                c, b, d, e, f) {
                var g;
                void 0 === e && (e = 0);
                void 0 === f && (f = 0);
                var h = y({
                        ga: []
                    }, d.M),
                    k = c[f],
                    l = k[0];
                k = k[1];
                var m = b[e];
                h.Da && h.Da["Content-Type"] || !h.W || (h.Da = y({}, h.Da, (g = {}, g["Content-Type"] = "application/x-www-form-urlencoded", g)), h.W = "site-info=" + wd(h.W));
                h.nc = h.W ? "POST" : "GET";
                h.Ua = On(a, d, l);
                h.ga.push(l);
                y(d.M, h);
                return k("" + m + (d.va && d.va.me ? "/1" : ""), h).then(function(p) {
                    return {
                        tb: p,
                        ld: e
                    }
                })["catch"](function(p) {
                    var r = f + 1 >= c.length,
                        v = e + 1 >= b.length;
                    r && v && Wa(p);
                    return wi(a, c, b, d, !v && r ? e + 1 : e, r ? 0 : f + 1)
                })
            }

            function On(a,
                c, b) {
                var d = y({}, c.D);
                a = Y(a);
                c.G && (d["browser-info"] = sa(c.G.l()).C("st", a(Pd)).ra());
                !d.t && (c = c.Ha) && (c.C("ti", b), d.t = c.ra());
                return d
            }

            function Qc(a) {
                return a ? q(Ea, Ne(function(c, b) {
                    var d = b[0],
                        e = b[1];
                    X(e) || ta(e) || c.push(d + "=" + wd(e));
                    return c
                }, []), Gc("&"))(a) : ""
            }

            function Pn(a) {
                return a ? q(bb(function(c) {
                    c = c.split("=");
                    var b = c[1];
                    return [c[0], ta(b) ? void 0 : di(b)]
                }), Ne(function(c, b) {
                    c[b[0]] = b[1];
                    return c
                }, {}))(a.split("&")) : {}
            }

            function di(a) {
                var c = "";
                try {
                    c = decodeURIComponent(a)
                } catch (b) {}
                return c
            }

            function wd(a) {
                try {
                    return encodeURIComponent(a)
                } catch (c) {}
                a =
                    I("", U(function(c) {
                        return 55296 >= c.charCodeAt(0)
                    }, a.split("")));
                return encodeURIComponent(a)
            }

            function vi(a, c, b) {
                void 0 === b && (b = !1);
                return new H(function(d, e) {
                    function f(k, l) {
                        l();
                        d()
                    }
                    var g = a.slice();
                    g.push({
                        N: f,
                        fa: f
                    });
                    var h = le(g, function(k, l) {
                        var m = b ? k.N : k.fa;
                        if (m) try {
                            m(c, l)
                        } catch (p) {
                            h(Qn), e(p)
                        } else l()
                    });
                    h(xi)
                })
            }

            function Wb(a, c, b) {
                var d = b || "as";
                if (a.postMessage && !a.attachEvent) {
                    b = fa(a);
                    var e = "__ym__promise_" + Xa(a) + "_" + Xa(a),
                        f = E;
                    d = A(a, d, function(g) {
                        try {
                            var h = g.data
                        } catch (k) {
                            return
                        }
                        h === e && (f(), g.stopPropagation &&
                            g.stopPropagation(), c())
                    });
                    f = b.F(a, ["message"], d);
                    a.postMessage(e, "*")
                } else ca(a, c, 0, d)
            }

            function nk(a, c, b, d, e) {
                void 0 === d && (d = 1);
                void 0 === e && (e = "itc");
                c = le(c, b);
                dg(a, c, d)(ib(A(a, e), E))
            }

            function dg(a, c, b, d) {
                void 0 === b && (b = 1);
                void 0 === d && (d = Rn);
                lf = Infinity === b;
                return Ha(function(e, f) {
                    function g() {
                        try {
                            var k = c(d(a, b));
                            h = h.concat(k)
                        } catch (l) {
                            return e(l)
                        }
                        c(Sn);
                        if (c(Wd)) return f(h), yi(a);
                        lf ? (c(d(a, 1E4)), f(h), yi(a)) : ca(a, g, 100)
                    }
                    var h = [];
                    Tn(g)
                })
            }

            function yi(a) {
                if (mf.length) {
                    var c = mf.shift();
                    lf ? c() : ca(a, c,
                        100)
                } else nf = !1
            }

            function Tn(a) {
                nf ? mf.push(a) : (nf = !0, a())
            }

            function zi(a) {
                return Ha(function(c, b) {
                    b(a)
                })
            }

            function dm(a) {
                return Ha(function(c, b) {
                    a.then(b, c)
                })
            }

            function cm(a) {
                var c = [],
                    b = !1;
                return Ha(function(d, e) {
                    function f(g) {
                        c.push(g) === a.length && d(c)
                    }
                    C(function(g) {
                        g(ib(f, function(h) {
                            if (!b) try {
                                e(h), b = !0
                            } catch (k) {
                                f(k)
                            }
                        }))
                    }, a)
                })
            }

            function ib(a, c) {
                return function(b) {
                    return b(a, c)
                }
            }

            function le(a, c) {
                void 0 === c && (c = O);
                return Ha({
                    mb: a,
                    Kc: c,
                    cc: !1,
                    da: 0
                })
            }

            function xi(a) {
                function c() {
                    function d() {
                        b = !0;
                        a.da += 1
                    }
                    b = !1;
                    a.Kc(a.mb[a.da], function() {
                        d()
                    });
                    b || (a.da += 1, d = u(a, xi))
                }
                for (var b = !0; !Wd(a) && b;) c()
            }

            function Rn(a, c) {
                return function(b) {
                    var d = Y(a),
                        e = d(ba);
                    return Un(function(f, g) {
                        d(ba) - e >= c && g(Vn)
                    })(b)
                }
            }

            function Wn(a) {
                Wd(a) && Wa(fc("i"));
                var c = a.Kc(a.mb[a.da]);
                a.da += 1;
                return c
            }

            function Sn(a) {
                a.cc = !1
            }

            function Vn(a) {
                a.cc = !0
            }

            function Qn(a) {
                a.da = a.mb.length
            }

            function Wd(a) {
                return a.cc || a.mb.length <= a.da
            }

            function La(a) {
                a = Y(a);
                return Math.round(a(Ai) / 50)
            }

            function Ai(a) {
                var c = a.ea,
                    b = c[1];
                a = c[0] && b ? b() : ba(a) - a.ce;
                return Math.round(a)
            }

            function Pd(a) {
                return Math.round(ba(a) / 1E3)
            }

            function $a(a) {
                return Math.floor(ba(a) / 1E3 / 60)
            }

            function ba(a) {
                var c = a.jc;
                return 0 !== c ? c : of(a.l, a.ea)
            }

            function Ph(a) {
                var c = fa(a),
                    b = Bi(a),
                    d = {
                        l: a,
                        jc: 0,
                        ea: b,
                        ce: of(a, b)
                    },
                    e = b[1];
                b[0] && e || c.F(a, ["beforeunload", "unload"], function() {
                    0 === d.jc && (d.jc = of(a, d.ea))
                });
                return Ha(d)
            }

            function Xn(a) {
                return (10 > a ? "0" : "") + a
            }

            function lh(a, c, b) {
                function d() {
                    f = 0;
                    g && (g = !1, f = ca(a, d, b), e.T(h))
                }
                var e = Oc(a),
                    f, g = !1,
                    h;
                c.F(function(k) {
                    g = !0;
                    h = k;
                    f || d();
                    return E
                });
                return e
            }

            function Yn(a, c) {
                return a.clearInterval(c)
            }

            function Zn(a, c, b, d) {
                return a.setInterval(A(a, "i.err." + (d || "def"), c), b)
            }

            function ca(a, c, b, d) {
                return Nd(a, A(a, "d.err." + (d || "def"), c), b)
            }

            function Oe(a) {
                var c = {};
                return {
                    F: function(b, d) {
                        C(function(e) {
                            n(c, e) || (c[e] = Oc(a));
                            c[e].F(d)
                        }, b);
                        return this
                    },
                    qb: function(b, d) {
                        C(function(e) {
                            n(c, e) && c[e].qb(d)
                        }, b);
                        return this
                    },
                    T: function(b, d) {
                        return n(c, b) ? A(a, "e." + d, c[b].T)(d) : []
                    }
                }
            }

            function Oc(a) {
                var c = [],
                    b = {};
                b.Bf = c;
                b.F = q(na("push", c), u(b, O));
                b.qb = q(Eb(bc(a))(c), Eb(na("splice", c))(1), u(b, O));
                b.T = q(O, Eb(ea), $n(c));
                return b
            }

            function Ci(a, c, b, d, e) {
                var f = a.addEventListener && a.removeEventListener,
                    g = !f && a.attachEvent && a.detachEvent;
                if (f || g)
                    if (e = e ? f ? "removeEventListener" : "detachEvent" : f ? "addEventListener" : "attachEvent", f) a[e](c, b, d);
                    else a[e]("on" + c, b)
            }

            function B(a, c, b) {
                return function() {
                    return A(arguments[0], a, c, b).apply(this, arguments)
                }
            }

            function A(a, c, b, d, e) {
                var f = Wa,
                    g = b || f;
                return function() {
                    var h = d;
                    try {
                        h = g.apply(e || null, arguments)
                    } catch (k) {
                        Ed(a, c, k)
                    }
                    return h
                }
            }

            function of(a, c) {
                var b = c || Bi(a),
                    d = b[0];
                b = b[1];
                return !isNaN(d) &&
                    S(b) ? Math.round(b() + d) : a.Date.now ? a.Date.now() : (new a.Date).getTime()
            }

            function Bi(a) {
                a = Zg(a);
                var c = n(a, "timing.navigationStart"),
                    b = n(a, "now");
                b && (b = L(b, a));
                return [c, b]
            }

            function Zg(a) {
                return n(a, "performance") || n(a, "webkitPerformance")
            }

            function Ed(a, c, b) {
                var d = "u.a.e",
                    e = "";
                b && ("object" === typeof b ? (b.unk && Wa(b), d = b.message, e = "string" === typeof b.stack && b.stack.replace(/\n/g, "\\n") || "n.s.e.s") : d = "" + b);
                ao(d) || Oa(q(na("indexOf", d), oa(-1), Sb), bo) || co(d) && .1 <= a.Math.random() || C(q(O, qc(["jserrs", d, c, e]), ea),
                    Di)
            }

            function Wf() {
                var a = va(arguments);
                return Wa(Na(a))
            }

            function Na(a) {
                var c = "";
                aa(a) ? c = I(".", a) : Ga(a) && (c = a);
                return fc("err.kn(" + qa.Za + ")" + c)
            }

            function eo(a) {
                this.message = a
            }

            function Vd(a, c, b) {
                return z(q(Tc, qc([a, b]), ea), Ei[c] || [])
            }

            function Fi(a, c, b, d) {
                a[c] || (a[c] = []);
                b && !ta(d) && Gi(a[c], b, d)
            }

            function Gi(a, c, b) {
                for (var d = [c, b], e = -1E4, f = 0; f < a.length; f += 1) {
                    var g = a[f],
                        h = g[0];
                    g = g[1];
                    if (b === g && h === c) return;
                    if (b < g && b >= e) {
                        a.splice(f, 0, d);
                        return
                    }
                    e = g
                }
                a.push(d)
            }

            function sc(a) {
                C(function(c) {
                    var b = c[1];
                    he[c[0]] = {
                        aa: b.aa,
                        Ra: b.Ra
                    }
                }, Ea(a))
            }

            function jk(a, c, b, d, e) {
                var f = "object" === typeof a ? a : {
                    id: a,
                    R: d,
                    bb: e,
                    O: b
                };
                a = N(function(g, h) {
                    var k = h[1],
                        l = k.Ra;
                    k = f[k.aa];
                    g[h[0]] = l ? l(k) : k;
                    return g
                }, {}, Ea(c));
                Dh(a, a.O || {});
                return a
            }

            function fo(a, c) {
                return N(function(b, d) {
                    b[c[d[0]].aa] = d[1];
                    return b
                }, {}, Ea(a))
            }

            function Hi(a) {
                a = M(a);
                return Tb[a] && Tb[a].Ee
            }

            function Dh(a, c) {
                var b = M(a),
                    d = n(c, "__ym.turbo_page"),
                    e = n(c, "__ym.turbo_page_id");
                Tb[b] || (Tb[b] = {});
                if (d || e) Tb[b].Ee = d, Tb[b].Fe = e
            }

            function go(a) {
                return pf(a) || Dd(a) || /mobile/i.test(cb(a)) ||
                    !X(n(a, "orientation"))
            }

            function qe(a, c) {
                if ($c(a) && c) {
                    var b = cb(a).match(ho);
                    if (b && b.length) return +b[1] >= c
                }
                return !1
            }

            function re(a, c) {
                var b = cb(a);
                return b && (b = b.match(io)) && 1 < b.length ? Ka(b[1]) >= c : !1
            }

            function kf(a) {
                return K("prerender", z(u(n(a, "document"), n), ["webkitVisibilityState", "visibilityState"]))
            }

            function Xa(a, c, b) {
                var d = X(b);
                X(c) && d ? (d = 1, c = 1073741824) : d ? d = 1 : (d = c, c = b);
                return a.Math.floor(a.Math.random() * (c - d)) + d
            }

            function jo() {
                var a = va(arguments),
                    c = a[0];
                for (a = a.slice(1); a.length;) {
                    var b = a.shift(),
                        d;
                    for (d in b) Rc(b, d) && (c[d] = b[d]);
                    Rc(b, "toString") && (c.toString = b.toString)
                }
                return c
            }

            function Ii(a) {
                return X(a) ? [] : ad(function(c, b) {
                    c.push([b, a[b]]);
                    return c
                }, [], Ji(a))
            }

            function Ji(a) {
                var c = [],
                    b;
                for (b in a) Rc(a, b) && c.push(b);
                return c
            }

            function el(a) {
                try {
                    return parseInt(a, 10)
                } catch (c) {
                    return null
                }
            }

            function vd(a, c) {
                return a.isFinite(c) && !a.isNaN(c) && "[object Number]" === qf(c)
            }

            function ko(a) {
                for (var c = [], b = a.length - 1; 0 <= b; --b) c[a.length - 1 - b] = a[b];
                return c
            }

            function ya(a, c) {
                C(q(O, na("push", a)), c);
                return a
            }

            function Ue(a) {
                return a.splice(0, a.length)
            }

            function Fa(a) {
                return a ? aa(a) ? a : Xd ? Xd(a) : "number" === typeof a.length && 0 <= a.length ? Ki(a) : [] : []
            }

            function rf(a, c, b) {
                return b ? a : c
            }

            function lo(a, c) {
                return ad(function(b, d, e) {
                    d = a(d, e);
                    return b.concat(aa(d) ? d : [d])
                }, [], c)
            }

            function Li(a, c) {
                return ad(function(b, d, e) {
                    b.push(a(d, e));
                    return b
                }, [], c)
            }

            function mo(a, c) {
                if (!$c(a)) return !0;
                try {
                    c.call({
                        0: !0,
                        length: -Math.pow(2, 32) + 1
                    }, function() {
                        throw 1;
                    })
                } catch (b) {
                    return !1
                }
                return !0
            }

            function aa(a) {
                if (bd) return bd(a);
                (bd = xa(Array.isArray,
                    "isArray")) || (bd = no);
                return bd(a)
            }

            function oo(a, c) {
                return 1 <= Mi(oa(a), c).length
            }

            function po(a, c) {
                for (var b = 0; b < c.length; b += 1)
                    if (a.call(c, c[b], b)) return c[b]
            }

            function Mi(a, c) {
                return ad(function(b, d, e) {
                    a(d, e) && b.push(d);
                    return b
                }, [], c)
            }

            function Qe(a, c, b) {
                try {
                    if (S(c)) {
                        var d = va(arguments).slice(3);
                        ta(b) ? c.apply(void 0, d) : L.apply(void 0, Z([c, b], d))()
                    }
                } catch (e) {
                    Nd(a, u(e, Wa), 0)
                }
            }

            function Wa(a) {
                throw a;
            }

            function Nd(a, c, b) {
                return Rb("setTimeout", a)(c, b)
            }

            function Sa(a, c) {
                return Rb("clearTimeout", a)(c)
            }

            function Gd() {
                return []
            }

            function tc() {
                return {}
            }

            function Rb(a, c) {
                var b = n(c, a),
                    d = n(c, "constructor.prototype." + a) || b;
                try {
                    if (d && d.apply) return function() {
                        return d.apply(c, arguments)
                    }
                } catch (e) {
                    return b
                }
                return d
            }

            function Ub(a, c) {
                return function() {
                    var b = va(arguments),
                        d = b[0];
                    b = b.slice(1);
                    var e = G(d),
                        f = e.o("m960", {}),
                        g = n(f, a);
                    g || (g = t(c), f[a] = g, e.C("m960", f));
                    return g.apply(void 0, Z([d], b))
                }
            }

            function nc(a, c) {
                void 0 === c && (c = {});
                if (!a || 1 > a.length) return c;
                N(function(b, d, e) {
                    if (e === a.length - 1) return b;
                    e === a.length - 2 ? b[d] = a[e + 1] : b[d] ||
                        (b[d] = {});
                    return b[d]
                }, c, a);
                return c
            }

            function n(a, c) {
                return a ? N(function(b, d) {
                    if (ta(b)) return b;
                    try {
                        return b[d]
                    } catch (e) {}
                    return null
                }, a, c.split(".")) : null
            }

            function cd(a) {
                a = a.Ya = a.Ya || {};
                var c = a._metrika = a._metrika || {};
                return {
                    sa: function(b, d) {
                        sf.call(c, b) || (c[b] = d);
                        return this
                    },
                    C: function(b, d) {
                        c[b] = d;
                        return this
                    },
                    o: function(b, d) {
                        var e = c[b];
                        return sf.call(c, b) || X(d) ? e : d
                    }
                }
            }

            function Rc(a, c) {
                return ta(a) ? !1 : sf.call(a, c)
            }

            function t(a, c) {
                var b = [],
                    d = [];
                var e = c ? c : O;
                return function() {
                    var f = va(arguments),
                        g =
                        e.apply(void 0, f),
                        h = Ni(g, d);
                    if (-1 !== h) return b[h];
                    f = a.apply(void 0, f);
                    b.push(f);
                    d.push(g);
                    return f
                }
            }

            function bc(a) {
                if (tf) return tf;
                var c = !1;
                try {
                    c = [].indexOf && 0 === [void 0].indexOf(void 0)
                } catch (d) {}
                var b = a.Array && a.Array.prototype && xa(a.Array.prototype.indexOf, "indexOf");
                return tf = a = c && b ? function(d, e) {
                    return b.call(e, d)
                } : qo
            }

            function qo(a, c) {
                for (var b = 0; b < c.length; b += 1)
                    if (c[b] === a) return b;
                return -1
            }

            function ea(a, c) {
                return c ? a(c) : a()
            }

            function q() {
                var a = va(arguments),
                    c = a.shift();
                return function() {
                    var b =
                        c.apply(void 0, arguments);
                    return N(Oi, b, a)
                }
            }

            function Ne(a, c) {
                return D([a, c], N)
            }

            function ad(a, c, b) {
                for (var d = 0, e = b.length; d < e;) c = a(c, b[d], d), d += 1;
                return c
            }

            function Pa(a) {
                return na("test", a)
            }

            function na(a, c) {
                return L(c[a], c)
            }

            function u(a, c) {
                return L(c, null, a)
            }

            function D(a, c) {
                return L.apply(void 0, Z([c, null], a))
            }

            function ro() {
                var a = va(arguments),
                    c = a[0],
                    b = a[1],
                    d = a.slice(2);
                return function() {
                    var e = Z(d, va(arguments));
                    if (Function.prototype.call) return Function.prototype.call.apply(c, Z([b], e));
                    if (b) {
                        for (var f =
                                "_b"; b[f];) f += "_" + f.length;
                        b[f] = c;
                        e = b[f] && Pi(f, e, b);
                        delete b[f];
                        return e
                    }
                    return Pi(c, e)
                }
            }

            function Pi(a, c, b) {
                void 0 === c && (c = []);
                b = b || {};
                var d = c.length,
                    e = a;
                S(e) && (e = "d", b[e] = a);
                var f;
                d ? 1 === d ? f = b[e](c[0]) : 2 === d ? f = b[e](c[0], c[1]) : 3 === d ? f = b[e](c[0], c[1], c[2]) : 4 === d && (f = b[e](c[0], c[1], c[2], c[3])) : f = b[e]();
                return f
            }

            function va(a) {
                if (Xd) try {
                    return Xd(a)
                } catch (c) {}
                return Ki(a)
            }

            function Ki(a) {
                for (var c = a.length, b = [], d = 0; d < c; d += 1) b.push(a[d]);
                return b
            }

            function Da(a) {
                return !ab(a) && !X(a) && "[object Object]" ===
                    qf(a)
            }

            function ta(a) {
                return X(a) || ab(a)
            }

            function S(a) {
                return "function" === typeof a
            }

            function Eb(a) {
                return function(c) {
                    return function(b) {
                        return a(b, c)
                    }
                }
            }

            function ja(a) {
                return function(c) {
                    return function(b) {
                        return a(c, b)
                    }
                }
            }

            function Oi(a, c) {
                return c(a)
            }

            function so(a, c) {
                for (var b = "", d = 0; d < c.length; d += 1) b += "" + (d ? a : "") + c[d];
                return b
            }

            function Wm(a) {
                return a.replace(/\^/g, "\\^").replace(/\$/g, "\\$").replace(Te, "\\.").replace(/\[/g, "\\[").replace(/\]/g, "\\]").replace(/\|/g, "\\|").replace(/\(/g, "\\(").replace(/\)/g,
                    "\\)").replace(/\?/g, "\\?").replace(/\*/g, "\\*").replace(/\+/g, "\\+").replace(/\{/g, "\\{").replace(/\}/g, "\\}")
            }

            function to(a) {
                return "" + a
            }

            function lc(a, c) {
                return !(!a || -1 === Kh(a, c))
            }

            function Kh(a, c) {
                if (Qi) var b = Qi.call(a, c);
                else a: {
                    b = 0;
                    for (var d = a.length - c.length, e = 0; e < a.length; e += 1) {
                        b = a[e] === c[b] ? b + 1 : 0;
                        if (b === c.length) {
                            b = e - c.length + 1;
                            break a
                        }
                        if (!b && e > d) break
                    }
                    b = -1
                }
                return b
            }

            function Ga(a) {
                return "string" === typeof a
            }

            function qf(a) {
                return Object.prototype.toString.call(a)
            }

            function uf(a, c) {
                uf = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(b, d) {
                    b.__proto__ = d
                } || function(b, d) {
                    for (var e in d) d.hasOwnProperty(e) && (b[e] = d[e])
                };
                return uf(a, c)
            }

            function xa(a, c) {
                return za(c, a) && a
            }

            function za(a, c) {
                var b = Yd(a, c);
                c && !b && vf.push([a, c]);
                return b
            }

            function Yd(a, c) {
                if (!c || "function" !== typeof c) return !1;
                try {
                    var b = "" + c
                } catch (h) {
                    return !1
                }
                var d = b.length;
                if (d > 35 + a.length) return !1;
                for (var e = d - 13, f = 0, g = 8; g < d; g += 1) {
                    f = "[native code]" [f] === b[g] || 7 === f && "-" === b[g] ? f + 1 : 0;
                    if (12 === f) return !0;
                    if (!f && g > e) break
                }
                return !1
            }

            function E() {}

            function Sb(a) {
                return !a
            }

            function lb(a, c) {
                return c
            }

            function O(a) {
                return a
            }

            function dd(a, c) {
                function b() {
                    this.constructor = a
                }
                uf(a, c);
                a.prototype = null === c ? Object.create(c) : (b.prototype = c.prototype, new b)
            }

            function Z() {
                for (var a = 0, c = 0, b = arguments.length; c < b; c++) a += arguments[c].length;
                a = Array(a);
                var d = 0;
                for (c = 0; c < b; c++)
                    for (var e = arguments[c], f = 0, g = e.length; f < g; f++, d++) a[d] = e[f];
                return a
            }

            function uo() {}

            function vo(a, c) {
                return function() {
                    a.apply(c, arguments)
                }
            }

            function ua(a) {
                if (!(this instanceof ua)) throw new TypeError("Promises must be constructed via new");
                if ("function" !== typeof a) throw new TypeError("not a function");
                this.ma = 0;
                this.pc = !1;
                this.ta = void 0;
                this.Ka = [];
                Ri(a, this)
            }

            function Si(a, c) {
                for (; 3 === a.ma;) a = a.ta;
                0 === a.ma ? a.Ka.push(c) : (a.pc = !0, ua.qc(function() {
                    var b = 1 === a.ma ? c.qe : c.se;
                    if (null === b)(1 === a.ma ? wf : ed)(c.wa, a.ta);
                    else {
                        try {
                            var d = b(a.ta)
                        } catch (e) {
                            ed(c.wa, e);
                            return
                        }
                        wf(c.wa, d)
                    }
                }))
            }

            function wf(a, c) {
                try {
                    if (c === a) throw new TypeError("A promise cannot be resolved with itself.");
                    if (c && ("object" === typeof c || "function" === typeof c)) {
                        var b = c.then;
                        if (c instanceof ua) {
                            a.ma = 3;
                            a.ta = c;
                            xf(a);
                            return
                        }
                        if ("function" === typeof b) {
                            Ri(vo(b, c), a);
                            return
                        }
                    }
                    a.ma = 1;
                    a.ta = c;
                    xf(a)
                } catch (d) {
                    ed(a, d)
                }
            }

            function ed(a, c) {
                a.ma = 2;
                a.ta = c;
                xf(a)
            }

            function xf(a) {
                2 === a.ma && 0 === a.Ka.length && ua.qc(function() {
                    a.pc || ua.Bd(a.ta)
                });
                for (var c = 0, b = a.Ka.length; c < b; c++) Si(a, a.Ka[c]);
                a.Ka = null
            }

            function wo(a, c, b) {
                this.qe = "function" === typeof a ? a : null;
                this.se = "function" === typeof c ? c : null;
                this.wa = b
            }

            function Ri(a, c) {
                var b = !1;
                try {
                    a(function(d) {
                        b || (b = !0, wf(c, d))
                    }, function(d) {
                        b || (b = !0, ed(c, d))
                    })
                } catch (d) {
                    b ||
                        (b = !0, ed(c, d))
                }
            }

            function Fl(a) {
                for (var c = a.length, b = 0, d = 255, e = 255, f, g, h; c;) {
                    f = 21 < c ? 21 : c;
                    c -= f;
                    do g = "string" === typeof a ? a.charCodeAt(b) : a[b], b += 1, 255 < g && (h = g >> 8, g &= 255, g ^= h), d += g, e += d; while (--f);
                    d = (d & 255) + (d >> 8);
                    e = (e & 255) + (e >> 8)
                }
                a = (d & 255) + (d >> 8) << 8 | (e & 255) + (e >> 8);
                return 65535 === a ? 0 : a
            }

            function sb(a, c) {
                if (!c) return null;
                try {
                    return a.JSON.parse(c)
                } catch (b) {
                    return null
                }
            }

            function Yb(a) {
                a = "" + a;
                for (var c = 2166136261, b = a.length, d = 0; d < b; d += 1) c ^= a.charCodeAt(d), c += (c << 1) + (c << 4) + (c << 7) + (c << 8) + (c << 24);
                return c >>>
                    0
            }

            function bi(a, c, b, d, e) {
                void 0 === e && (e = !1);
                return af(a, c, "", -100, b, d, e)
            }

            function gc(a, c, b) {
                void 0 === c && (c = "_ym_");
                void 0 === b && (b = "");
                var d = xo(a),
                    e = 1 === (d || "").split(".").length ? d : "." + d,
                    f = b ? "_" + b : "";
                return {
                    eb: function(g, h, k) {
                        bi(a, "" + c + g + f, h || e, k);
                        return this
                    },
                    o: function(g) {
                        return zd(a, "" + c + g + f)
                    },
                    C: function(g, h, k, l, m) {
                        af(a, "" + c + g + f, h, k, l || e, m);
                        return this
                    }
                }
            }

            function kk(a, c, b, d) {
                var e = Ti[b];
                return e ? function() {
                    var f = va(arguments);
                    try {
                        var g = d.apply(void 0, f);
                        var h = G(a);
                        h.sa("mt", {});
                        var k = h.o("mt"),
                            l = k[e];
                        k[e] = l ? l + 1 : 1
                    } catch (m) {
                        Wa(m)
                    }
                    return g
                } : d
            }

            function Jd(a, c) {
                var b = yo(a);
                return b ? (b.href = c, {
                    protocol: b.protocol,
                    host: b.host,
                    port: b.port,
                    hostname: b.hostname,
                    hash: b.hash,
                    search: b.search,
                    query: b.search.replace(/^\?/, ""),
                    pathname: b.pathname || "/",
                    path: (b.pathname || "/") + b.search,
                    href: b.href
                }) : {}
            }

            function Ui(a) {
                return (a = Q(a).hash.split("#")[1]) ? a.split("?")[0] : ""
            }

            function zo(a, c) {
                var b = Ui(a);
                Vi = Zn(a, function() {
                    var d = Ui(a);
                    d !== b && (c(), b = d)
                }, 200, "t.h");
                return L(Yn, null, a, Vi)
            }

            function Ao(a, c, b) {
                var d, e,
                    f = c.R,
                    g = c.lc,
                    h = c.ib,
                    k = G(a),
                    l = sa((d = {}, d.wh = 1, d.pv = 1, d));
                Wi(f) && a.Ad && a.Ad.Re && l.C("ad", "1");
                g && l.C("ut", "1");
                f = k.o("lastReferrer");
                d = Q(a).href;
                h = {
                    D: (e = {}, e["page-url"] = h || d, e["page-ref"] = f, e),
                    G: l
                };
                b(h, c)["catch"](A(a, "g.s"));
                k.C("lastReferrer", d)
            }

            function Bo(a, c, b) {
                function d() {
                    Sa(a, h);
                    g(!1)
                }

                function e() {
                    k = !0;
                    g(!1);
                    c()
                }

                function f() {
                    Sa(a, h);
                    if (k) g(!1);
                    else {
                        var P = Math.max(0, b - (r ? v : v + l(ba) - x));
                        P ? h = ca(a, e, P, "u.t.d.c") : e()
                    }
                }

                function g(P) {
                    C(function(ha) {
                        var Ia = ha[0],
                            ma = ha[1];
                        ha = ha[2];
                        P ? w.F(Ia, ma, ha) : w.Wa(Ia,
                            ma, ha)
                    }, J)
                }
                var h = 0,
                    k = !1;
                if (hf(a)) return h = ca(a, c, b, "u.t.d"), d;
                var l = Y(a),
                    m = !1,
                    p = !1,
                    r = !0,
                    v = 0,
                    x = l(ba),
                    w = fa(a),
                    J = [
                        [a, ["blur"], function() {
                            r = m = p = !0;
                            v += l(ba) - x;
                            x = l(ba);
                            f()
                        }],
                        [a, ["focus"], function() {
                            m || p || (v = 0);
                            x = l(ba);
                            m = p = !0;
                            r = !1;
                            f()
                        }],
                        [a.document, ["click", "mousemove", "keydown", "scroll"], function() {
                            p || (m = !0, r = !1, p = !0, f())
                        }]
                    ];
                g(!0);
                f();
                return d
            }

            function ge(a, c, b, d) {
                return function() {
                    if (wa(a, c)) {
                        var e = va(arguments);
                        return d.apply(void 0, e)
                    }
                }
            }

            function eb(a, c) {
                a = [a[0] >>> 16, a[0] & 65535, a[1] >>> 16, a[1] & 65535];
                c = [c[0] >>> 16, c[0] & 65535, c[1] >>> 16, c[1] & 65535];
                var b = [0, 0, 0, 0];
                b[3] += a[3] * c[3];
                b[2] += b[3] >>> 16;
                b[3] &= 65535;
                b[2] += a[2] * c[3];
                b[1] += b[2] >>> 16;
                b[2] &= 65535;
                b[2] += a[3] * c[2];
                b[1] += b[2] >>> 16;
                b[2] &= 65535;
                b[1] += a[1] * c[3];
                b[0] += b[1] >>> 16;
                b[1] &= 65535;
                b[1] += a[2] * c[2];
                b[0] += b[1] >>> 16;
                b[1] &= 65535;
                b[1] += a[3] * c[1];
                b[0] += b[1] >>> 16;
                b[1] &= 65535;
                b[0] += a[0] * c[3] + a[1] * c[2] + a[2] * c[1] + a[3] * c[0];
                b[0] &= 65535;
                return [b[0] << 16 | b[1], b[2] << 16 | b[3]]
            }

            function Vb(a, c) {
                a = [a[0] >>> 16, a[0] & 65535, a[1] >>> 16, a[1] & 65535];
                c = [c[0] >>> 16, c[0] &
                    65535, c[1] >>> 16, c[1] & 65535
                ];
                var b = [0, 0, 0, 0];
                b[3] += a[3] + c[3];
                b[2] += b[3] >>> 16;
                b[3] &= 65535;
                b[2] += a[2] + c[2];
                b[1] += b[2] >>> 16;
                b[2] &= 65535;
                b[1] += a[1] + c[1];
                b[0] += b[1] >>> 16;
                b[1] &= 65535;
                b[0] += a[0] + c[0];
                b[0] &= 65535;
                return [b[0] << 16 | b[1], b[2] << 16 | b[3]]
            }

            function uc(a, c) {
                c %= 64;
                if (32 === c) return [a[1], a[0]];
                if (32 > c) return [a[0] << c | a[1] >>> 32 - c, a[1] << c | a[0] >>> 32 - c];
                c -= 32;
                return [a[1] << c | a[0] >>> 32 - c, a[0] << c | a[1] >>> 32 - c]
            }

            function Za(a, c) {
                c %= 64;
                return 0 === c ? a : 32 > c ? [a[0] << c | a[1] >>> 32 - c, a[1] << c] : [a[1] << c - 32, 0]
            }

            function ia(a,
                c) {
                return [a[0] ^ c[0], a[1] ^ c[1]]
            }

            function Xi(a) {
                a = ia(a, [0, a[0] >>> 1]);
                a = eb(a, [4283543511, 3981806797]);
                a = ia(a, [0, a[0] >>> 1]);
                a = eb(a, [3301882366, 444984403]);
                return a = ia(a, [0, a[0] >>> 1])
            }

            function Co(a, c) {
                void 0 === c && (c = 210);
                var b = a || "",
                    d = c || 0,
                    e = b.length - b.length % 16;
                d = {
                    J: [0, d],
                    K: [0, d]
                };
                for (var f = 0; f < e; f += 16) {
                    var g = d,
                        h = [a.charCodeAt(f + 4) & 255 | (a.charCodeAt(f + 5) & 255) << 8 | (a.charCodeAt(f + 6) & 255) << 16 | (a.charCodeAt(f + 7) & 255) << 24, a.charCodeAt(f) & 255 | (a.charCodeAt(f + 1) & 255) << 8 | (a.charCodeAt(f + 2) & 255) << 16 | (a.charCodeAt(f +
                            3) & 255) << 24],
                        k = [a.charCodeAt(f + 12) & 255 | (a.charCodeAt(f + 13) & 255) << 8 | (a.charCodeAt(f + 14) & 255) << 16 | (a.charCodeAt(f + 15) & 255) << 24, a.charCodeAt(f + 8) & 255 | (a.charCodeAt(f + 9) & 255) << 8 | (a.charCodeAt(f + 10) & 255) << 16 | (a.charCodeAt(f + 11) & 255) << 24];
                    h = eb(h, Zd);
                    h = uc(h, 31);
                    h = eb(h, $d);
                    g.J = ia(g.J, h);
                    g.J = uc(g.J, 27);
                    g.J = Vb(g.J, g.K);
                    g.J = Vb(eb(g.J, [0, 5]), [0, 1390208809]);
                    k = eb(k, $d);
                    k = uc(k, 33);
                    k = eb(k, Zd);
                    g.K = ia(g.K, k);
                    g.K = uc(g.K, 31);
                    g.K = Vb(g.K, g.J);
                    g.K = Vb(eb(g.K, [0, 5]), [0, 944331445])
                }
                e = b.length % 16;
                f = b.length - e;
                g = [0, 0];
                h = [0,
                    0
                ];
                switch (e) {
                    case 15:
                        h = ia(h, Za([0, b.charCodeAt(f + 14)], 48));
                    case 14:
                        h = ia(h, Za([0, b.charCodeAt(f + 13)], 40));
                    case 13:
                        h = ia(h, Za([0, b.charCodeAt(f + 12)], 32));
                    case 12:
                        h = ia(h, Za([0, b.charCodeAt(f + 11)], 24));
                    case 11:
                        h = ia(h, Za([0, b.charCodeAt(f + 10)], 16));
                    case 10:
                        h = ia(h, Za([0, b.charCodeAt(f + 9)], 8));
                    case 9:
                        h = ia(h, [0, b.charCodeAt(f + 8)]), h = eb(h, $d), h = uc(h, 33), h = eb(h, Zd), d.K = ia(d.K, h);
                    case 8:
                        g = ia(g, Za([0, b.charCodeAt(f + 7)], 56));
                    case 7:
                        g = ia(g, Za([0, b.charCodeAt(f + 6)], 48));
                    case 6:
                        g = ia(g, Za([0, b.charCodeAt(f + 5)], 40));
                    case 5:
                        g = ia(g, Za([0, b.charCodeAt(f + 4)], 32));
                    case 4:
                        g = ia(g, Za([0, b.charCodeAt(f + 3)], 24));
                    case 3:
                        g = ia(g, Za([0, b.charCodeAt(f + 2)], 16));
                    case 2:
                        g = ia(g, Za([0, b.charCodeAt(f + 1)], 8));
                    case 1:
                        g = ia(g, [0, b.charCodeAt(f)]), g = eb(g, Zd), g = uc(g, 31), g = eb(g, $d), d.J = ia(d.J, g)
                }
                d.J = ia(d.J, [0, b.length]);
                d.K = ia(d.K, [0, b.length]);
                d.J = Vb(d.J, d.K);
                d.K = Vb(d.K, d.J);
                d.J = Xi(d.J);
                d.K = Xi(d.K);
                d.J = Vb(d.J, d.K);
                d.K = Vb(d.K, d.J);
                return ("00000000" + (d.J[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (d.J[1] >>> 0).toString(16)).slice(-8) + ("00000000" +
                    (d.K[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (d.K[1] >>> 0).toString(16)).slice(-8)
            }

            function fd(a, c, b) {
                var d = c.getAttribute("itemtype");
                b = kb('[itemprop~="' + b + '"]', c);
                return d ? U(function(e) {
                    return e.parentNode && Ob("[itemtype]", a, e.parentNode) === c
                }, b) : b
            }

            function Ua(a, c, b) {
                return (a = fd(a, c, b)) && a.length ? a[0] : null
            }

            function Ra(a) {
                if (!a) return "";
                a = aa(a) ? a : [a];
                return a.length ? a[0].getAttribute("content") || Db(a[0]) : ""
            }

            function Yi(a) {
                return a ? a.attributes && a.getAttribute("datetime") ? a.getAttribute("datetime") :
                    Ra(a) : ""
            }

            function Lc(a, c, b) {
                a = c && (lc(c.className, "ym-disable-keys") || lc(c.className, "-metrika-nokeys"));
                return b && c ? a || !!In(["ym-disable-keys", "-metrika-nokeys"], c).length : a
            }

            function Pg(a, c) {
                return Td(c) ? "password" === c.type || c.name && K(c.name.toLowerCase(), Zi) || c.id && K(c.id.toLowerCase(), Zi) : !1
            }

            function $i(a, c) {
                var b = Math.max(0, Math.min(c, 65535));
                ya(a, [b >> 8, b & 255])
            }

            function Ma(a, c) {
                ya(a, [c & 255])
            }

            function Ta(a, c, b) {
                Ma(c, b);
                return !1
            }

            function F(a, c) {
                for (var b = Math.max(0, c | 0); 127 < b;) ya(a, [b & 127 | 128]),
                    b >>= 7;
                ya(a, [b])
            }

            function yf(a, c) {
                F(a, c.length);
                for (var b = 0; b < c.length; b += 1) F(a, c.charCodeAt(b))
            }

            function zf(a, c) {
                var b = c;
                255 < b.length && (b = b.substr(0, 255));
                a.push(b.length);
                for (var d = 0; d < b.length; d += 1) $i(a, b.charCodeAt(d))
            }

            function Do(a, c) {
                var b = [];
                if (Ta(a, b, 27)) return [];
                F(b, c);
                return b
            }

            function Eo(a, c) {
                var b = Ya(c);
                if (!b) return c[Ba] = -1, null;
                var d = +c[Ba];
                if (!isFinite(d) || 0 >= d) return null;
                if (c.attributes)
                    for (var e = c; e;) {
                        if (e.attributes.Xe) return null;
                        e = e.parentElement
                    }
                e = 64;
                var f = Qd(a, c),
                    g = f && f[Ba] ?
                    f[Ba] : 0;
                0 > g && (g = 0);
                b = (b || "").toUpperCase();
                var h = Fo()[b];
                h || (e |= 2);
                var k = ki(a, c);
                k || (e |= 4);
                var l = Fe(a, c);
                (f = f ? Fe(a, f) : null) && l[0] === f[0] && l[1] === f[1] && l[2] === f[2] && l[3] === f[3] && (e |= 8);
                ac[d].Pc = l[0] + "x" + l[1];
                ac[d].size = l[2] + "x" + l[3];
                c.id && "string" === typeof c.id && (e |= 32);
                f = [];
                if (Ta(a, f, 1)) return null;
                F(f, d);
                Ma(f, e);
                F(f, g);
                h ? Ma(f, h) : zf(f, b);
                k && F(f, k);
                e & 8 || (F(f, l[0]), F(f, l[1]), F(f, l[2]), F(f, l[3]));
                e & 32 && zf(f, c.id);
                Ma(f, 0);
                return f
            }

            function Go(a, c) {
                var b = c[Ba];
                if (!b || 0 > b || !De(c) || !c.form || Sg(a, c.form)) return [];
                var d = oi(a, c.form);
                if (0 > d) return [];
                if (Td(c)) {
                    var e = {
                        text: 0,
                        color: 0,
                        cb: 0,
                        jf: 0,
                        "datetime-local": 0,
                        email: 0,
                        Nc: 0,
                        Rf: 0,
                        search: 0,
                        Wf: 0,
                        time: 0,
                        url: 0,
                        month: 0,
                        Zf: 0,
                        password: 2,
                        Qf: 3,
                        ff: 4,
                        file: 6,
                        image: 7
                    };
                    e = e[c.type]
                } else {
                    e = {
                        Ue: 1,
                        Ve: 5
                    };
                    var f = Ya(c);
                    e = X(f) ? "" : e[f]
                }
                if ("number" !== typeof e) return [];
                f = -1;
                for (var g = c.form.elements, h = g.length, k = 0, l = 0; k < h; k += 1)
                    if (g[k].name === c.name) {
                        if (g[k] === c) {
                            f = l;
                            break
                        }
                        l += 1
                    } if (0 > f) return [];
                g = [];
                if (Ta(a, g, 7)) return [];
                F(g, b);
                F(g, d);
                F(g, e);
                yf(g, c.name || "");
                F(g, f);
                return g
            }

            function Bg(a,
                c, b, d, e, f, g) {
                var h;
                var k = Rd(a, d);
                var l = k[0];
                for (k = k[1]; d && (!l || !k);)
                    if (d = Qd(a, d)) k = Rd(a, d), l = k[0], k = k[1];
                if (!d) return [];
                l = d[Ba];
                if (!l || 0 > l) return [];
                k = (h = {}, h.mousemove = 2, h.click = 32, h.dblclick = 33, h.mousedown = 4, h.mouseup = 30, h.touch = 12, h)[b];
                if (!k) return [];
                h = [];
                d = gf(a, d);
                if (Ta(a, h, k)) return [];
                F(h, c);
                F(h, l);
                F(h, Math.max(0, e[0] - d.left));
                F(h, Math.max(0, e[1] - d.top));
                /^mouse(up|down)|click$/.test(b) && (a = f || g, Ma(h, 2 > a ? 1 : a === (f ? 2 : 4) ? 4 : 2));
                return h
            }

            function Ho(a, c, b) {
                var d = oi(a, b);
                if (0 > d) return [];
                var e = b.elements,
                    f = e.length;
                b = [];
                for (var g = 0; g < f; g += 1)
                    if (!mi(e[g])) {
                        var h = e[g][Ba];
                        h && 0 < h && b.push(h)
                    } e = [];
                if (Ta(a, e, 11)) return [];
                F(e, c);
                F(e, d);
                F(e, b.length);
                for (a = 0; a < b.length; a += 1) F(e, b[a]);
                return e
            }

            function rb(a, c, b) {
                void 0 === b && (b = []);
                for (var d = []; c && !Ll(a, c, b); c = Qd(a, c)) d.push(c);
                C(function(e) {
                    ac.Cb += 1;
                    var f = ac.Cb;
                    e[Ba] = f;
                    ac[f] = {};
                    f = Eo(a, e);
                    e = Go(a, e);
                    f && e && (ya(b, f), ya(b, e))
                }, Io(d));
                return b
            }

            function Jo(a) {
                var c = a.X;
                if (!Kc || c && !c.fromElement) return Ng(a)
            }

            function Ko(a) {
                var c = a.X;
                if (c && !c.toElement) return Ee(a)
            }

            function aj(a) {
                var c = qb(a.X);
                if (c && Ad(c)) {
                    var b = Mg(a, c);
                    var d = La(a.l),
                        e = [];
                    Ta(a.l, e, 17) ? a = [] : (F(e, d), F(e, c[Ba]), a = e);
                    return Z(b, a)
                }
            }

            function bj(a) {
                var c = a.l,
                    b = a.X.target;
                if (b && Ad(b)) {
                    c = rb(c, b);
                    var d = La(a.l),
                        e = [];
                    Ta(a.l, e, 18) ? a = [] : (F(e, d), F(e, b[Ba]), a = e);
                    return Z(c, a)
                }
            }

            function cj(a) {
                var c = a.l,
                    b = qb(a.X);
                if (!b || Pg(c, b) || Lc(c, b)) return [];
                if (De(b)) {
                    var d = G(c).o("isEU"),
                        e = Bd(c, b, d),
                        f = e.Sa;
                    d = e.Hc;
                    e = e.yc;
                    if (ni(b)) var g = b.checked;
                    else g = b.value, g = f ? I("", dj(g.split(""))) : g;
                    c = rb(c, b);
                    f = La(a.l);
                    d = d && !e;
                    e = [];
                    Ta(a.l, e, 39) ? a = [] : (F(e, f), F(e, b[Ba]), zf(e, String(g)), Ma(e, d ? 1 : 0), a = e);
                    return Z(c, a)
                }
            }

            function Jc(a) {
                var c = a.l,
                    b = a.X,
                    d = qb(b);
                if (!d || "SCROLLBAR" === d.nodeName) return [];
                var e = [],
                    f = u(e, ya);
                d && Ad(d) ? f(Mg(a, d)) : f(rb(c, d));
                f = yd(c, b);
                return Z(e, Bg(c, La(a.l), b.type, d, [f.x, f.y], b.which, b.button))
            }

            function Lo(a) {
                var c = null,
                    b = a.l,
                    d = b.document;
                if (b.getSelection) {
                    d = void 0;
                    try {
                        d = b.getSelection()
                    } catch (g) {
                        return []
                    }
                    if (ab(d)) return [];
                    var e = "" + d;
                    c = d.anchorNode
                } else d.selection && d.selection.createRange && (d = d.selection.createRange(),
                    e = d.text, c = d.parentElement());
                if ("string" !== typeof e) return [];
                try {
                    for (; c && 1 !== c.nodeType;) c = c.parentNode
                } catch (g) {
                    return []
                }
                if (!c) return [];
                d = Bd(b, c).Sa || Lc(b, c, !0);
                c = c.getElementsByTagName("*");
                for (var f = 0; f < c.length && !d;) d = c[f], d = Bd(b, d).Sa || Lc(b, d, !0), f += 1;
                if (e !== Af) return Af = e, d = d ? I("", dj(e.split(""))) : e, e = La(a.l), 0 === d.length ? d = b = "" : 100 >= d.length ? (b = d, d = "") : 200 >= d.length ? (b = d.substr(0, 100), d = d.substr(100)) : (b = d.substr(0, 97), d = d.substr(d.length - 97)), c = [], Ta(a.l, c, 29) ? a = [] : (F(c, e), yf(c, b), yf(c, d),
                    a = c), a
            }

            function Mo(a) {
                return Z(Jc(a), Lo(a) || [])
            }

            function ej(a) {
                return (a.shiftKey ? 2 : 0) | (a.ctrlKey ? 4 : 0) | (a.altKey ? 1 : 0) | (a.metaKey ? 8 : 0) | (a.ctrlKey || a.altKey ? 16 : 0)
            }

            function fj(a) {
                var c = [];
                Bf || (Bf = !0, Af && c.push.apply(c, Do(a.l, La(a.l))), Wb(a.l, function() {
                    Bf = !1
                }, "fv.c"));
                return c
            }

            function gj(a, c, b, d) {
                var e = qb(c);
                if (!e || Ge(a, e)) return [];
                var f = e && Mb("ym-record-keys", e),
                    g = Og(e);
                c = Bd(a, e).Sa;
                var h = G(a);
                if (!f && (g && h.o("isEU") || Lc(a, e))) a = [];
                else {
                    f = rb(a, e);
                    h = La(a);
                    g = [];
                    if (Ta(a, g, 38)) a = [];
                    else {
                        F(g, h);
                        $i(g, b);
                        Ma(g,
                            d);
                        a = e[Ba];
                        if (!a || 0 > a) a = 0;
                        F(g, a);
                        Ma(g, c ? 1 : 0);
                        a = g
                    }
                    a = Z(f, a)
                }
                return a
            }

            function No(a) {
                var c = a.l,
                    b = a.X,
                    d = b.keyCode,
                    e = ej(b),
                    f = [],
                    g = u(f, ya);
                if ({
                        3: 1,
                        8: 1,
                        9: 1,
                        13: 1,
                        16: 1,
                        17: 1,
                        18: 1,
                        19: 1,
                        20: 1,
                        27: 1,
                        33: 1,
                        34: 1,
                        35: 1,
                        36: 1,
                        37: 1,
                        38: 1,
                        39: 1,
                        40: 1,
                        45: 1,
                        46: 1,
                        91: 1,
                        92: 1,
                        93: 1,
                        106: 1,
                        110: 1,
                        111: 1,
                        144: 1,
                        145: 1
                    } [d] || 112 <= d && 123 >= d || 96 <= d && 105 >= d || e & 16) 19 === d && 4 === (e & -17) && (d = 144), g(gj(c, b, d, e | 16)), Cf = !1, Wb(c, function() {
                    Cf = !0
                }, "fv.kd"), !(67 === d && e & 4) || e & 1 || e & 2 || g(fj(a));
                return f
            }

            function Oo(a) {
                var c = a.l;
                a = a.X;
                var b = [];
                Cf && !Df && 0 !==
                    a.which && (b.push.apply(b, gj(c, a, a.charCode || a.keyCode, ej(a))), Df = !0, Wb(c, function() {
                        Df = !1
                    }, "fv.kp"));
                return b
            }

            function hj(a) {
                var c = a.l,
                    b = qb(a.X);
                if (!b || Sg(c, b)) return [];
                var d = [];
                if ("FORM" === b.nodeName) {
                    for (var e = b.elements, f = 0; f < e.length; f += 1) mi(e[f]) || d.push.apply(d, rb(c, e[f]));
                    d.push.apply(d, Ho(c, La(a.l), b))
                }
                return d
            }

            function Po(a) {
                var c = a.flush;
                a = qb(a.X);
                "BODY" === Ya(a) && c()
            }

            function hl(a, c) {
                var b, d = qb(c),
                    e = qa.Bb,
                    f = cd(a);
                if (d && Mb("ym-advanced-informer", d)) {
                    var g = f.o("ifc", 0) + 1;
                    f.C("ifc", g);
                    g = d.getAttribute("data-lang");
                    var h = Ka(d.getAttribute("data-cid") || "");
                    if (h || 0 === h)(e = n(a, "Ya." + e + ".informer")) ? e((b = {}, b.i = d, b.id = h, b.lang = g, b)) : f.C("ib", !0), b = c || window.event, b.preventDefault ? b.preventDefault() : b.returnValue = !1
                }
            }

            function Yf(a, c, b, d) {
                return function() {
                    var e = va(arguments);
                    e = d.apply(void 0, e);
                    return X(e) ? wa(a, c) : e
                }
            }

            function Xf(a, c, b, d) {
                return A(a, "cm." + b, d)
            }

            function ik(a, c, b, d, e) {
                return b.length && e ? D(N(function(f, g, h) {
                    return b[h] ? f.concat(D([a, c, d], g)) : f
                }, [], b), q)()(e) : e
            }
            var vc = {
                    construct: "Metrika",
                    callbackPostfix: "",
                    version: "3kqlg6e9sjiwxr6f2njdv",
                    host: "mc.yandex.ru"
                },
                vf = [],
                Te = /\./g,
                Qi = xa(String.prototype.indexOf, "indexOf"),
                ij = xa(Array.prototype.join, "join"),
                I = ij ? function(a, c) {
                    return ij.call(c, a)
                } : so,
                oa = ja(function(a, c) {
                    return a === c
                }),
                Ic = ja(function(a, c) {
                    a(c);
                    return c
                }),
                Gc = ja(I),
                Ha = ja(Oi),
                ab = oa(null),
                X = oa(void 0),
                Xd = xa(Array.from, "from"),
                jj = xa(Function.prototype.bind, "bind"),
                L = jj ? function() {
                    var a = va(arguments);
                    return jj.apply(a[0], Z([a[1]], a.slice(2)))
                } : ro,
                qc = ja(D),
                kh = ja(na),
                kj = xa(Array.prototype.reduce, "reduce"),
                N = kj ? function(a, c, b) {
                    return kj.call(b, a, c)
                } : ad,
                Th = q,
                wg = q(O, ea),
                tf, Ni = bc(window),
                Qo = Eb(Ni),
                sf = Object.prototype.hasOwnProperty,
                G = t(cd),
                R = Eb(n),
                Aa = R("length"),
                bh = Array.prototype.every ? function(a, c) {
                    return Array.prototype.every.call(c, a)
                } : function(a, c) {
                    return N(function(b, d) {
                        return b ? a(d) : !1
                    }, !0, c)
                },
                lj = xa(Array.prototype.filter, "filter"),
                U = lj ? function(a, c) {
                    return lj.call(c, a)
                } : Mi,
                jc = ja(U),
                Lb = za("find", Array.prototype.find) ? function(a, c) {
                    return Array.prototype.find.call(c, a)
                } : po,
                K = Array.prototype.includes ?
                function(a, c) {
                    return Array.prototype.includes.call(c, a)
                } : oo,
                Zb = Eb(K),
                mj = t(function(a) {
                    a = n(a, "navigator") || {};
                    var c = n(a, "userAgent") || "";
                    return {
                        Fc: -1 < (n(a, "vendor") || "").indexOf("Apple"),
                        md: c
                    }
                }),
                cb = t(R("navigator.userAgent")),
                nj = t(u(/gecko/, function(a, c) {
                    return -1 !== (n(c, "navigator.userAgent") || "").toLowerCase().search(a)
                })),
                $c = t(function(a) {
                    var c = n(a, "document.documentElement.style");
                    a = n(a, "InstallTrigger");
                    return !(!(c && "MozAppearance" in c) || ta(a))
                }),
                bd, no = q(qf, oa("[object Array]")),
                oj = xa(Array.prototype.map,
                    "map"),
                z = oj && mo(window, Array.prototype.map) ? function(a, c) {
                    return c && 0 < c.length ? oj.call(c, a) : []
                } : Li,
                C = z,
                Jb = Array.prototype.flatMap ? function(a, c) {
                    return Array.prototype.flatMap.call(c, a)
                } : lo,
                bb = ja(z),
                $n = Eb(z),
                Oa = rf(function(a, c) {
                    return Array.prototype.some.call(c, a)
                }, function(a, c) {
                    for (var b = 0; b < c.length; b += 1)
                        if (b in c && a.call(c, c[b], b)) return !0;
                    return !1
                }, za("some", Array.prototype.some)),
                Re = t(bc),
                Tc = R("0"),
                Ro = ja(function(a, c) {
                    return Array.prototype.sort.call(c, a)
                }),
                pj = xa(Array.prototype.reverse, "reverse"),
                Io = pj ? function(a) {
                    return pj.call(a)
                } : ko,
                qj = Eb(parseInt),
                Ka = qj(10),
                Ef = qj(2),
                Ea = Object.entries ? function(a) {
                    return a ? Object.entries(a) : []
                } : Ii,
                da = Object.keys ? Object.keys : Ji,
                So = q(Ii, u(R("1"), Li)),
                To = Object.values ? Object.values : So,
                y = Object.assign || jo,
                Lg = ja(function(a, c) {
                    return y({}, a, c)
                }),
                sd = t(q(R("String.fromCharCode"), u("fromCharCode", za), Sb)),
                pf = t(q(cb, Pa(/ipad|iphone|ipod/i))),
                He = t(function(a) {
                    return n(a, "navigator.platform") || ""
                }),
                Nc = t(function(a) {
                    a = mj(a);
                    var c = a.md;
                    return a.Fc && !c.match("CriOS")
                }),
                Uo = Pa(/Android.*Version\/[0-9][0-9.]*\sChrome\/[0-9][0-9.]|Android.*Version\/[0-9][0-9.]*\s(?:Mobile\s)?Safari\/[0-9][0-9.]*\sChrome\/[0-9][0-9.]*|; wv\).*Chrome\/[0-9][0-9.]*\sMobile/),
                Vo = Pa(/; wv\)/),
                Mc = t(function(a) {
                    a = cb(a);
                    return Vo(a) || Uo(a)
                }),
                Wo = /Chrome\/(\d+)\./,
                Xo = t(function(a) {
                    return (a = (n(a, "navigator.userAgent") || "").match(Wo)) && a.length ? 76 <= Ka(a[1]) : !1
                }),
                Dd = t(function(a) {
                    var c = (cb(a) || "").toLowerCase();
                    a = He(a);
                    return !(-1 === c.indexOf("android") || -1 === c.indexOf(c, "mobile") || !/^android|linux armv/i.test(a))
                }),
                Yo = "other none unknown wifi ethernet bluetooth cellular wimax mixed".split(" "),
                Zo = t(function(a) {
                    var c = n(a, "navigator.connection.type");
                    if (X(c)) return null;
                    a = Re(a)(c, Yo);
                    return -1 === a ? c : "" + a
                }),
                hf = t(q(R("document.addEventListener"), Sb)),
                rj = t(function(a) {
                    var c = n(a, "navigator") || {};
                    return N(function(b, d) {
                        return b || n(c, d)
                    }, "", ["language", "userLanguage", "browserLanguage", "systemLanguage"])
                }),
                $f = t(function(a) {
                    var c = n(a, "navigator") || {};
                    a = rj(a);
                    Ga(a) || (a = "", c = n(c, "languages.0"), Ga(c) && (a = c));
                    return a.toLowerCase().split("-")[0]
                }),
                wb = t(function(a) {
                    var c = !1;
                    try {
                        c = a.top !== a
                    } catch (b) {}
                    return c
                }),
                $o = t(function(a) {
                    var c = !1;
                    try {
                        c = a.top.contentWindow
                    } catch (b) {}
                    return c
                }),
                ap = t(function(a) {
                    var c = !1;
                    try {
                        c = a.navigator.javaEnabled()
                    } catch (b) {}
                    return c
                }),
                bp = t(function(a) {
                    var c = "__webdriver_evaluate __selenium_evaluate __webdriver_script_function __webdriver_script_func __webdriver_script_fn __fxdriver_evaluate __driver_unwrapped __webdriver_unwrapped __driver_evaluate __selenium_unwrapped __fxdriver_unwrapped".split(" "),
                        b = n(a, "external");
                    b = -1 !== (n(b, "toString") ? "" + b.toString() : "").indexOf("Sequentum");
                    var d = n(a, "document.documentElement"),
                        e = ["selenium", "webdriver", "driver"];
                    return !!(Oa(u(a, n), ["_selenium", "callSelenium", "_Selenium_IDE_Recorder"]) || Oa(u(n(a, "document"), n), c) || b || d && Oa(L(d.getAttribute, d), e))
                }),
                cp = t(function(a) {
                    return !!(Oa(u(a, n), ["_phantom", "__nightmare", "callPhantom"]) || /(PhantomJS)|(HeadlessChrome)/.test(cb(a)) || n(a, "navigator.webdriver") || n(a, "isChrome") && !n(a, "chrome"))
                }),
                dp = t(function(a) {
                    return bh(u(a, n), ["ia_document.shareURL",
                        "ia_document.referrer"
                    ])
                }),
                ep = t(function(a) {
                    a = n(a, "navigator.plugins");
                    return !!(a && Aa(a) && Oa(q(R("name"), Pa(/Chrome PDF Viewer/)), a))
                }),
                fp = new RegExp(I("|", "yandex.com/bots;Googlebot;APIs-Google;Mediapartners-Google;AdsBot-Google;FeedFetcher-Google;Google-Read-Aloud;DuplexWeb-Google;Google Favicon;googleweblight;Chrome-Lighthouse;Mail.RU_Bot;StackRambler;Slurp;msnbot;bingbot;www.baidu.com/search/spi_?der.htm".split(";")).replace(/[./]/g, "\\$&")),
                yk = t(q(R("navigator.userAgent"), Pa(fp))),
                gd = t(function(a) {
                    var c =
                        cb(a) || "",
                        b = c.match(/Mac OS X ([0-9]+)_([0-9]+)/);
                    b = b ? [+b[1], +b[2]] : [0, 0];
                    c = c.match(/iPhone OS ([1-9]+)_([0-9]+)/);
                    return 14 <= (c ? +c[1] : 0) ? !0 : (pf(a) || 10 < b[0] || 10 === b[0] && 13 <= b[1]) && Nc(a)
                }),
                io = /Edg\/(\d+)\./,
                ho = /Firefox\/([0-9]+)/,
                Ye = t(function(a) {
                    return gd(a) || qe(a, 68) || re(a, 79)
                }),
                gp = vc.construct,
                Nb = vc.host,
                Ff = hf(window),
                qa = {
                    xd: 24226447,
                    qd: 26302566,
                    zd: 51533966,
                    Se: 65446441,
                    ua: "https:",
                    Za: "960",
                    Bb: gp,
                    wd: Ff ? 512 : 2048,
                    ud: Ff ? 512 : 2048,
                    vd: Ff ? 100 : 400,
                    Te: 100,
                    yd: "noindex"
                },
                Tb = {},
                M = t(function(a) {
                    return a.id + ":" +
                        a.R
                }),
                Wi = oa("1"),
                Fb = {
                    id: "id",
                    lc: "ut",
                    R: "type",
                    Qb: "ldc",
                    Ba: "nck",
                    ib: "url",
                    Td: "referrer"
                },
                hp = /^\d+$/,
                wc = {
                    id: function(a) {
                        a = "" + (a || "0");
                        hp.test(a) || (a = "0");
                        try {
                            var c = Ka(a)
                        } catch (b) {
                            c = 0
                        }
                        return c
                    },
                    R: function(a) {
                        return "" + (a || 0 === a ? a : "0")
                    },
                    Ba: Boolean,
                    lc: Boolean
                };
            Fb.bb = "defer";
            wc.bb = Boolean;
            Fb.O = "params";
            wc.O = function(a) {
                return Da(a) || aa(a) ? a : null
            };
            Fb.kc = "userParams";
            Fb.jd = "triggerEvent";
            wc.jd = Boolean;
            Fb.Yc = "sendTitle";
            wc.Yc = function(a) {
                return !!a || X(a)
            };
            Fb.fc = "trackHash";
            wc.fc = Boolean;
            Fb.gd = "trackLinks";
            Fb.Nd =
                "enableAll";
            var he = N(function(a, c) {
                    var b = c[0];
                    a[b] = {
                        aa: c[1],
                        Ra: wc[b]
                    };
                    return a
                }, {}, Ea(Fb)),
                sj = ja(function(a, c) {
                    var b = c || {};
                    return {
                        l: u(b, O),
                        o: function(d, e) {
                            var f = b[d];
                            return X(f) && !X(e) ? e : f
                        },
                        C: function(d, e) {
                            b[d] = e;
                            return this
                        },
                        wb: function(d, e) {
                            return "" === e || ta(e) ? this : this.C(d, e)
                        },
                        ra: u(b, a)
                    }
                }),
                sa = sj(function(a) {
                    var c = "";
                    a = N(function(b, d) {
                        var e = d[0],
                            f = "" + e + ":" + d[1];
                        "t" === e ? c = f : b.push(f);
                        return b
                    }, [], Ea(a));
                    c && a.push(c);
                    return I(":", a)
                }),
                Gf, Ei = (Gf = {}, Gf.w = [
                    [function(a, c) {
                        return {
                            N: function(b, d) {
                                var e,
                                    f = b.D;
                                f = (e = {}, e["page-url"] = f && f["page-url"] || "", e.charset = "utf-8", e);
                                "0" !== c.R && (f["cnt-class"] = c.R);
                                b.G || (b.G = sa());
                                e = b.G;
                                var g = b.M;
                                f = {
                                    ba: {
                                        qa: "watch/" + c.id
                                    },
                                    M: y(void 0 === g ? {} : g, {
                                        yb: !(!e.o("pv") || e.o("ar") || e.o("wh"))
                                    }),
                                    D: y(b.D || {}, f)
                                };
                                y(b, f);
                                d()
                            }
                        }
                    }, 1]
                ], Gf),
                ip = u(Ei, Fi),
                jp = setTimeout;
            ua.prototype["catch"] = function(a) {
                return this.then(null, a)
            };
            ua.prototype.then = function(a, c) {
                var b = new this.constructor(uo);
                Si(this, new wo(a, c, b));
                return b
            };
            ua.prototype["finally"] = function(a) {
                var c = this.constructor;
                return this.then(function(b) {
                        return c.resolve(a()).then(function() {
                            return b
                        })
                    },
                    function(b) {
                        return c.resolve(a()).then(function() {
                            return c.reject(b)
                        })
                    })
            };
            ua.all = function(a) {
                return new ua(function(c, b) {
                    function d(h, k) {
                        try {
                            if (k && ("object" === typeof k || "function" === typeof k)) {
                                var l = k.then;
                                if ("function" === typeof l) {
                                    l.call(k, function(m) {
                                        d(h, m)
                                    }, b);
                                    return
                                }
                            }
                            e[h] = k;
                            0 === --f && c(e)
                        } catch (m) {
                            b(m)
                        }
                    }
                    if (!a || "undefined" === typeof a.length) return b(new TypeError("Promise.all accepts an array"));
                    var e = Array.prototype.slice.call(a);
                    if (0 === e.length) return c([]);
                    for (var f = e.length, g = 0; g < e.length; g++) d(g,
                        e[g])
                })
            };
            ua.resolve = function(a) {
                return a && "object" === typeof a && a.constructor === ua ? a : new ua(function(c) {
                    c(a)
                })
            };
            ua.reject = function(a) {
                return new ua(function(c, b) {
                    b(a)
                })
            };
            ua.race = function(a) {
                return new ua(function(c, b) {
                    if (!a || "undefined" === typeof a.length) return b(new TypeError("Promise.race accepts an array"));
                    for (var d = 0, e = a.length; d < e; d++) ua.resolve(a[d]).then(c, b)
                })
            };
            ua.qc = "function" === typeof setImmediate && function(a) {
                setImmediate(a)
            } || function(a) {
                jp(a, 0)
            };
            ua.Bd = function(a) {
                "undefined" !== typeof console &&
                    console && console.warn("Possible Unhandled Promise Rejection:", a)
            };
            var H = window.Promise,
                kp = xa(H, "Promise"),
                tj = xa(n(H, "resolve"), "resolve"),
                uj = xa(n(H, "reject"), "reject"),
                vj = xa(n(H, "all"), "all");
            if (K(!1, [kp, tj, uj, vj])) H = ua;
            else {
                var ae = function(a) {
                    return new Promise(a)
                };
                ae.resolve = L(tj, H);
                ae.reject = L(uj, H);
                ae.all = L(vj, H);
                H = ae
            }
            var lp = Zb([26812653]),
                Mh = t(q(R("id"), lp), M),
                ub = [],
                T = [],
                Ec = [],
                ld = [],
                Hf = [],
                If = [],
                bo = ["http.0.st..rt.", "network error occurred", "send beacon", "Content Security Policy", "DOM Exception 18"],
                hd, fc = function(a) {
                    return function(c, b) {
                        void 0 === b && (b = !1);
                        if (hd) var d = new hd(c);
                        else za("Error", a.Error) ? (hd = a.Error, d = new a.Error(c)) : (hd = eo, d = new hd(c));
                        b && (d.unk = !0);
                        return d
                    }
                }(window),
                co = Pa(/^http./),
                ao = Pa(/^err.kn/),
                Di = [],
                mp = t(function(a) {
                    var c = !1;
                    if (!a.addEventListener) return c;
                    try {
                        var b = Object.defineProperty({}, "passive", {
                            get: function() {
                                c = !0;
                                return 1
                            }
                        });
                        a.addEventListener("test", E, b)
                    } catch (d) {}
                    return c
                }),
                np = ja(function(a, c) {
                    return a ? y({
                        capture: !0,
                        passive: !0
                    }, c || {}) : !!c
                }),
                fa = t(function(a) {
                    a =
                        mp(a);
                    var c = np(a),
                        b = {};
                    return y(b, {
                        F: function(d, e, f, g) {
                            C(function(h) {
                                var k = c(g);
                                Ci(d, h, f, k, !1)
                            }, e);
                            return L(b.Wa, b, d, e, f, g)
                        },
                        Wa: function(d, e, f, g) {
                            C(function(h) {
                                var k = c(g);
                                Ci(d, h, f, k, !0)
                            }, e)
                        }
                    })
                }),
                Y = t(Ph),
                Un = ja(function(a, c) {
                    for (var b = []; !Wd(c);) {
                        var d = Wn(c);
                        a(d, function(e) {
                            return e(c)
                        });
                        b.push(d)
                    }
                    return b
                }),
                mf = [],
                nf = !1,
                lf = !1,
                ui = ["webkitvisibilitychange", "visibilitychange"],
                ti = sj(function(a) {
                    a = Ea(a);
                    return I("", z(function(c) {
                        var b = c[0];
                        c = c[1];
                        return ab(c) ? "" : b + "(" + c + ")"
                    }, a))
                }),
                wj = "A B BIG BODY BUTTON DD DIV DL DT EM FIELDSET FORM H1 H2 H3 H4 H5 H6 HR I IMG INPUT LI OL P PRE SELECT SMALL SPAN STRONG SUB SUP TABLE TBODY TD TEXTAREA TFOOT TH THEAD TR U UL ABBR AREA BLOCKQUOTE CAPTION CENTER CITE CODE CANVAS DFN EMBED FONT INS KBD LEGEND LABEL MAP OBJECT Q S SAMP STRIKE TT ARTICLE AUDIO ASIDE FOOTER HEADER MENU METER NAV PROGRESS SECTION TIME VIDEO NOINDEX NOBR MAIN svg circle clippath ellipse defs foreignobject g glyph glyphref image line lineargradient marker mask path pattern polygon polyline radialgradient rect set text textpath title".split(" "),
                Xm = /^ *(data|javascript):/i,
                zh = new RegExp(I("", ["\\.(" + I("|", "3gp 7z aac ac3 acs ai avi ape apk asf bmp bz2 cab cdr crc32 css csv cue divx dmg djvu? doc(x|m|b)? emf eps exe flac? flv iso swf gif t?gz jpe?g? js m3u8? m4a mp(3|4|e?g?) m4v md5 mkv mov msi ods og(g|m|v) psd rar rss rtf sea sfv sit sha1 svg tar tif?f torrent ts txt vob wave? wma wmv wmf webm ppt(x|m|b)? xls(x|m|b)? pdf phps png xpi g?zip".split(" ")) + ")$"]), "i"),
                Ca, Ti = (Ca = {}, Ca.hit = "h", Ca.params = "p", Ca.reachGoal = "g", Ca.userParams = "up",
                    Ca.trackHash = "th", Ca.accurateTrackBounce = "atb", Ca.notBounce = "nb", Ca.addFileExtension = "fe", Ca.extLink = "el", Ca.file = "fc", Ca.trackLinks = "tl", Ca.destruct = "d", Ca.setUserID = "ui", Ca.getClientID = "ci", Ca.clickmap = "cm", Ca.enableAll = "ea", Ca),
                op = t(function() {
                    var a = 0;
                    return function() {
                        return a += 1
                    }
                }),
                pp = q(M, op, ea),
                $e = {
                    mc: function(a) {
                        a = cd(a).o("mt", {});
                        a = Ea(a);
                        return a.length ? N(function(c, b, d) {
                            return "" + c + (d ? "-" : "") + b[0] + "-" + b[1]
                        }, "", a) : null
                    },
                    clc: function(a) {
                        var c = G(a).o("cls", {
                                $a: 0,
                                x: 0,
                                y: 0
                            }),
                            b = c.$a,
                            d = c.x;
                        c = c.y;
                        return b ? b + "-" + a.Math.floor(d / b) + "-" + a.Math.floor(c / b) : b + "-" + d + "-" + c
                    },
                    rqnt: function(a, c, b) {
                        a = b.D;
                        return !a || a.nohit ? null : pp(c)
                    }
                },
                Gb = D([1, null], rf),
                be = D([1, 0], rf),
                Nn = t(function(a) {
                    ri(a, "_ymBRC", "1");
                    var c = "1" !== qi(a, "_ymBRC");
                    c || si(a, "_ymBRC");
                    return c
                }),
                Ja = t(te),
                xc = t(te, function(a, c, b) {
                    return "" + c + b
                }),
                qp = t(function(a) {
                    a = n(a, "document") || {};
                    return ("" + (a.characterSet || a.charset || "")).toLowerCase()
                }),
                jb = t(q(R("document"), u("createElement", Rb))),
                Ug = t(function(a) {
                    var c = n(a, "Element.prototype");
                    return c ?
                        (a = Lb(function(b) {
                            return za(b, c[b])
                        }, ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"])) ? c[a] : null : null
                }),
                rp = oa("INPUT"),
                Td = q(Ya, rp),
                sp = oa("TEXTAREA"),
                Kn = q(Ya, sp),
                tp = oa("SELECT"),
                Ln = q(Ya, tp),
                ni = q(R("type"), Pa(/^(checkbox|radio)$/)),
                De = q(Ya, Pa(/^INPUT|SELECT|TEXTAREA$/)),
                Ad = q(Ya, Pa(/^INPUT|SELECT|TEXTAREA|BUTTON$/)),
                Jn = ["submit", "image", "hidden"],
                Vh = /^\s+|\s+$/g,
                li = xa(String.prototype.trim, "trim"),
                xj = ja(function(a, c) {
                    return c.replace(a, "")
                }),
                oh = xj(/\s/g),
                yb = xj(/\D/g),
                Je = t(function() {
                    for (var a = 59, c = {}, b = 0; b < wj.length; b += 1) c[wj[b]] = String.fromCharCode(a), a += 1;
                    return c
                }),
                ji = t(function(a) {
                    return {
                        qf: a,
                        Aa: null,
                        Ca: []
                    }
                }),
                hi = {},
                ef = {};
            hi.p = 500;
            var gi = {
                i: "id",
                n: "name",
                h: "href",
                ty: "type"
            };
            ef.h = !0;
            ef.c = !0;
            var rc = {};
            rc.p = ff;
            rc.c = function(a, c, b) {
                (a = db(n(c, "textContent"))) && b && (b = b(c), b.length && Oa(q(R("textContent"), db, oa(a)), b) && (a = ""));
                Td(c) && (a = db(c.getAttribute && c.getAttribute("value") || a));
                return a
            };
            var yc, df = "button," + z(function(a) {
                        return 'input[type="' + a + '"]'
                    },
                    ["button", "submit", "reset", "file"]).join(",") + ",a",
                Le = u(df, kb),
                Gn = (yc = {}, yc.A = "h", yc.BUTTON = "i", yc.DIV = "i", yc.INPUT = "ty", yc),
                Fn = "hash host hostname href pathname port protocol search".split(" "),
                cf = "ru ua by kz az kg lv md tj tm uz ee fr lt com co.il com.ge com.am com.tr com.ua com.ru".split(" "),
                fi = /(?:^|\.)(?:(ya\.ru)|(?:yandex)\.(\w+|com?\.\w+))$/,
                sk = t(function(a) {
                    a = Q(a).hostname.split(".");
                    return a[a.length - 1]
                }),
                Zf = t(function(a) {
                    return -1 !== Q(a).hostname.search(/(?:^|\.)(?:ya|yandex|beru|kinopoisk|edadeal)\.(?:\w+|com?\.\w+)$/)
                }),
                Kd = t(function(a) {
                    return (a ? a.replace(/^www\./, "") : "").toLowerCase()
                }),
                up = /^(.*\.)?((yandex(-team)?)\.(com?\.)?[a-z]+|(auto|kinopoisk|beru|bringly)\.ru|ya\.(ru|cc)|yadi\.sk|yastatic\.net|meteum\.(ai|es|io)|.*\.yandex|turbopages\.org|turbo\.site)$/,
                pd = t(function(a) {
                    a = Q(a).hostname;
                    var c = !1;
                    a && (c = -1 !== a.search(up));
                    return c
                }),
                vp = /^(.*\.)?((yandex(-team)?)\.(com?\.)?[a-z]+|(auto|kinopoisk|beru|bringly)\.ru|ya\.(ru|cc)|yadi\.sk|.*\.yandex|turbopages\.org|turbo\.site)$/,
                am = t(function(a) {
                    a = Q(a).hostname;
                    var c = !1;
                    a && (c = -1 !== a.search(vp));
                    return c
                }),
                wp = t(function(a) {
                    a = Q(a).hostname;
                    var c = !1;
                    a && (c = -1 !== a.search(fi));
                    return c
                }),
                yj = q(Q, R("protocol"), oa("https:")),
                zj = /\/$/,
                xp = t(q(Y, Ha(function(a) {
                    return -(new a.l.Date).getTimezoneOffset()
                }))),
                yp = q(Y, Ha(function(a) {
                    a = new a.l.Date;
                    return I("", z(Xn, [a.getFullYear(), a.getMonth() + 1, a.getDate(), a.getHours(), a.getMinutes(), a.getSeconds()]))
                })),
                zp = q(Y, Ha(Pd)),
                Aj = t(q(Y, Ha(function(a) {
                    return a.ea[0]
                }))),
                Ap = t(tc),
                Dn = t(function(a) {
                    return Xo(a) && yj(a) ? "SameSite=None;Secure;" :
                        ""
                }),
                ei = ["metrika_enabled"],
                bf = [],
                ci = Ub("gsc", ai),
                En = /:\d+$/,
                xo = t(function(a) {
                    var c = (Q(a).host || "").split(".");
                    return 1 === c.length ? c[0] : N(function(b, d, e) {
                        e += 1;
                        2 <= e && !b && (e = I(".", c.slice(-e)), Hg(a, e) && (b = e));
                        return b
                    }, "", c)
                }),
                $b = t(gc),
                $h = Ub("r", function(a, c) {
                    var b = Zh(a, c),
                        d = b[0];
                    return !b[1] && d
                }),
                Xc = t(function() {
                    return {
                        ja: {},
                        pending: {},
                        children: {}
                    }
                }),
                Jf = R("postMessage"),
                Bp = B("s.f", function(a, c, b, d, e) {
                    c = c(d);
                    var f = Xc(a),
                        g = I(":", [c.ia.cb, c.ia.key]);
                    if (Jf(b)) {
                        f.pending[g] = e;
                        try {
                            b.postMessage(c.ed, "*")
                        } catch (h) {
                            delete f.pending[g];
                            return
                        }
                        ca(a, function() {
                            delete f.pending[g]
                        }, 5E3, "if.s")
                    }
                }),
                Cp = B("s.fh", function(a, c, b, d, e, f) {
                    var g = null,
                        h = null,
                        k = Xc(a),
                        l = null;
                    try {
                        g = sb(a, f.data), h = g.__yminfo, l = g.data
                    } catch (m) {
                        return
                    }
                    if (!ta(h) && h.substring && "__yminfo" === h.substring(0, 8) && !ta(l) && (g = h.split(":"), 4 === g.length))
                        if (h = c.id, c = g[1], a = g[2], g = g[3], !aa(l) && l.type && "0" === g && l.counterId) {
                            if (!l.toCounter || l.toCounter == h) {
                                k = null;
                                try {
                                    k = f.source
                                } catch (m) {}!ab(k) && Jf(k) && (f = d.T(l.type, [f, l]), e = z(q(O, Lg(e)), f.concat([{}])), l = b([c, a, l.counterId], e),
                                    k.postMessage(l.ed, "*"))
                            }
                        } else g === "" + h && aa(l) && U(function(m) {
                            return !(!m.hid || !m.counterId)
                        }, l).length === l.length && (b = k.pending[I(":", [c, a])]) && b.apply(null, [f].concat(l))
                }),
                Fc = t(function(a, c) {
                    var b, d = Rb("getElementsByTagName", n(a, "document")),
                        e = Xc(a),
                        f = Jf(a),
                        g = Oe(a),
                        h = fa(a);
                    if (!d || !f) return null;
                    d = d.call(a.document, "iframe");
                    f = (b = {}, b.counterId = c.id, b.hid = "" + xb(a), b);
                    Ye(a) && (f.duid = kc(a, c));
                    zn(a, g);
                    An(a);
                    b = Bn(a, f);
                    var k = D([a, u([], b)], Bp);
                    C(function(l) {
                        var m = null;
                        try {
                            m = l.contentWindow
                        } catch (p) {}
                        m &&
                            k(m, {
                                type: "initToChild"
                            }, function(p, r) {
                                g.T("initToParent", [p, r])
                            })
                    }, d);
                    wb(a) && k(a.parent, {
                        type: "initToParent"
                    }, function(l, m) {
                        g.T("parentConnect", [l, m])
                    });
                    h.F(a, ["message"], D([a, c, b, g, f], Cp));
                    return {
                        V: g,
                        ja: e.ja,
                        children: e.children,
                        $b: k
                    }
                }, q(lb, M)),
                td = t(function(a, c) {
                    if (!Ye(a) || !wb(a)) return kc(a, c);
                    var b = Fc(a, c);
                    return b && b.ja[c.id] ? b.ja[c.id].info.duid || kc(a, c) : kc(a, c)
                }, function(a, c) {
                    return "{" + c.Qb + c.Ba
                }),
                Dp = t(function(a) {
                    a = G(a);
                    var c = a.o("counterNum", 0) + 1;
                    a.C("counterNum", c);
                    return c
                }, q(lb, M)),
                W,
                Ze = (W = {}, W.vf = u(vc.version, O), W.nt = Zo, W.fp = function(a, c, b) {
                    if (b.D && b.D.nohit) return null;
                    c = M(c);
                    b = Ap(a);
                    if (b[c]) return null;
                    a: {
                        var d = Aj(a),
                            e = n(a, "performance.getEntriesByType");
                        if (S(e)) {
                            if (a = U(q(O, R("name"), oa("first-contentful-paint")), e.call(a.performance, "paint")), a.length) {
                                a = a[0].startTime;
                                break a
                            }
                        } else {
                            e = n(a, "chrome.loadTimes");
                            if (S(e) && (e = e.call(a.chrome), e = n(e, "firstPaintTime"), d && e)) {
                                a = 1E3 * e - d;
                                break a
                            }
                            if (a = n(a, "performance.timing.msFirstPaint")) {
                                a -= d;
                                break a
                            }
                        }
                        a = void 0
                    }
                    return a ? (b[c] = a, Math.round(a)) :
                        null
                }, W.fu = function(a, c, b) {
                    var d = b.D;
                    if (!d) return null;
                    c = (n(a, "document.referrer") || "").replace(zj, "");
                    b = (d["page-ref"] || "").replace(zj, "");
                    d = d["page-url"];
                    a = Q(a).href !== d;
                    c = c !== b;
                    b = 0;
                    a && c ? b = 3 : c ? b = 1 : a && (b = 2);
                    return b
                }, W.en = qp, W.la = rj, W.ut = function(a, c, b) {
                    var d = b.L;
                    b = b.D;
                    d = d && d.ob;
                    b && (wp(a) || c.lc || d) && (b.ut = qa.yd);
                    return null
                }, W.v = u(qa.Za, O), W.cn = Dp, W.dp = function(a) {
                    var c = G(a),
                        b = c.o("bt", {});
                    if (X(c.o("bt"))) {
                        var d = n(a, "navigator.getBattery");
                        try {
                            b.p = d && d.call(a.navigator)
                        } catch (e) {}
                        c.C("bt", b);
                        b.p &&
                            b.p.then && b.p.then(A(a, "bi:dp.p", function(e) {
                                b.Le = n(e, "charging") && 0 === n(e, "chargingTime")
                            }))
                    }
                    return be(b.Le)
                }, W.ls = t(function(a, c) {
                    var b = xc(a, c.id),
                        d = Y(a),
                        e = b.o("lsid");
                    return +e ? e : (d = Xa(a, 0, d(ba)), b.C("lsid", d), d)
                }, lb), W.hid = xb, W.phid = function(a, c) {
                    if (!wb(a)) return null;
                    var b = Fc(a, c);
                    if (!b) return null;
                    var d = da(b.ja);
                    return d.length ? b.ja[d[0]].info.hid : null
                }, W.z = xp, W.i = yp, W.et = zp, W.c = q(R("navigator.cookieEnabled"), Gb), W.rn = q(O, Xa), W.rqn = function(a, c, b) {
                    b = b.D;
                    if (!b || b.nohit) return null;
                    c = M(c);
                    a = xc(a,
                        c);
                    c = (a.o("reqNum", 0) || 0) + 1;
                    a.C("reqNum", c);
                    if (a.o("reqNum") === c) return c;
                    a.eb("reqNum");
                    return null
                }, W.u = td, W.tp = q(lb, Hi, Gb), W.tpid = q(lb, function(a) {
                    a = M(a);
                    return Tb[a] && Tb[a].Fe || null
                }), W.w = function(a) {
                    a = xd(a);
                    return a[0] + "x" + a[1]
                }, W.s = function(a) {
                    var c = n(a, "screen");
                    if (c) {
                        a = n(c, "width");
                        var b = n(c, "height");
                        c = n(c, "colorDepth") || n(c, "pixelDepth");
                        return I("x", [a, b, c])
                    }
                    return null
                }, W.sk = R("devicePixelRatio"), W.ifr = q(wb, Gb), W.j = q(ap, Gb), W.sti = function(a) {
                    return wb(a) ? $o(a) ? "1" : null : null
                }, W),
                yn = t(function() {
                    return ya(da(Ze),
                        da($e))
                }),
                xn = t(tc, M),
                Xh = t(function() {
                    return {
                        xc: null,
                        ca: []
                    }
                }, M),
                Vc = Ub("retryReqs", function(a) {
                    return Ja(a).o("retryReqs", {})
                }),
                Ep = B("g.r", function(a) {
                    var c = Y(a),
                        b = Vc(a),
                        d = c(ba),
                        e = xb(a);
                    return N(function(f, g) {
                        var h = g[0],
                            k = g[1];
                        k && !k.d && k.ghid && k.ghid !== e && k.time && 500 < d - k.time && k.time + 864E5 > d && 2 >= k.browserInfo.rqnl && (k.d = 1, h = {
                                protocol: k.protocol,
                                host: k.host,
                                qa: k.resource,
                                te: k.postParams,
                                O: k.params,
                                Cd: k.browserInfo,
                                tf: k.ghid,
                                time: k.time,
                                Va: Ka(h),
                                Id: k.counterId,
                                R: k.counterType
                            }, k.telemetry && (h.Ha = k.telemetry),
                            f.push(h));
                        return f
                    }, [], Ea(b))
                }),
                un = /^[a-z][\w.+-]+:/i,
                Kf, Bb = [
                    [Ud, 1],
                    [Wc, 2],
                    [Cb(), 3],
                    [Yh, 4]
                ],
                Od = [],
                mb = u(Bb, Gi);
            mb(We, 100);
            var Ab = (Kf = {}, Kf.h = Bb, Kf),
                V = u(Ab, Fi);
            mb(function(a) {
                return {
                    N: function(c, b) {
                        var d = c.D;
                        if (!c.G || !d) return b();
                        var e = d["page-ref"],
                            f = d["page-url"];
                        e && f !== e ? d["page-ref"] = Uh(a, e) : delete d["page-ref"];
                        d["page-url"] = Uh(a, f).slice(0, qa.wd);
                        return b()
                    }
                }
            }, -100);
            V("r", Wc, 1);
            V("r", function(a) {
                return {
                    N: function(c, b) {
                        var d = c.G,
                            e = void 0 === d ? sa() : d,
                            f = c.L.Va,
                            g = Vc(a);
                        d = e.o("rqnl", 0) + 1;
                        e.C("rqnl",
                            d);
                        if (e = n(g, I(".", [f, "browserInfo"]))) e.rqnl = d, Xe(a);
                        b()
                    },
                    fa: function(c, b) {
                        Wh(a, c);
                        b()
                    }
                }
            }, 2);
            var qn = /[^a-z0-9.:-]/,
                Lf, Pb = [],
                Mf = {};
            Pb.push(Qh, 0, Qb, Ve, Uc);
            var Bj = [Qb];
            Bj.push(Ve);
            var Cj = zb(Bj),
                zc = zb([Uc]),
                Fp = zb([Qh, Uc]),
                ce = zb([0, Qb, Ve, Uc]),
                ka = (Lf = {}, Lf.h = Cj, Lf);
            ka.r = ce;
            var Hc = t(function(a, c) {
                    var b = Mf["*"] ? Mf["*"] : c && Mf[c];
                    b || (b = c ? ka[c] || [] : Pb);
                    b = N(function(d, e, f) {
                        (e = e && e(a)) && d.push([f, e]);
                        return d
                    }, [], b);
                    b.length || Wf();
                    return b
                }, lb),
                Nf, Gp = L(H.reject, H, Na()),
                la = (Nf = {}, Nf.h = Qa, Nf);
            la.r = Qa;
            var ra = B("g.sen",
                    function(a, c, b) {
                        var d = Hc(a, c);
                        b = b ? tn(a, c, b) : [];
                        var e = la[c],
                            f = e ? e(a, d, b) : Qa(a, d, b);
                        return function() {
                            var g = va(arguments),
                                h = g[0];
                            g = g.slice(1);
                            var k = h.M;
                            h = y(h, {
                                M: y(void 0 === k ? {} : k, {
                                    ga: [c]
                                })
                            });
                            return f.apply(void 0, Z([h], g))
                        }
                    }, Gp),
                jn = ja(function(a, c) {
                    if (!c[a]) {
                        var b, d = new H(function(e) {
                            b = e
                        });
                        c[a] = {
                            Vc: b,
                            wa: d,
                            Wc: !1
                        }
                    }
                    return c[a].wa
                }),
                Oh = t(q(tc, Ha)),
                id = t(function(a) {
                    a = n(a, "console");
                    var c = n(a, "log");
                    c = Yd("log", c) ? L(c, a) : E;
                    var b = n(a, "warn");
                    b = Yd("warn", b) ? L(b, a) : c;
                    var d = n(a, "error");
                    a = Yd("error", d) ? L(d, a) :
                        c;
                    return {
                        log: c,
                        error: a,
                        warn: b
                    }
                }),
                Hp = B("dc.init", function(a, c) {
                    function b(k) {
                        for (var l = [], m = 1; m < arguments.length; m++) l[m - 1] = arguments[m];
                        G(a).o("dce:" + c, !1) && e[k].apply(e, l);
                        G(a).o("dclq:" + c).push([k, l])
                    }
                    var d = Q(a),
                        e = id(a, c);
                    G(a).sa("dclq:" + c, []);
                    var f = $b(a),
                        g = Nh(a),
                        h = g.de;
                    g = g.Zd;
                    h && !g && f.C("debug", "1", void 0, d.host);
                    return h || g ? {
                        log: u("log", b),
                        warn: u("warn", b),
                        error: u("error", b)
                    } : {
                        log: E,
                        warn: E,
                        error: E
                    }
                }),
                Md = t(Hp, lb),
                Ip = B("p.dc", function(a, c) {
                    var b = M(c);
                    Lh(a, "");
                    Lh(a, b)
                }),
                lk = A(window, "h.p", function(a,
                    c) {
                    var b, d, e = ra(a, "h", c),
                        f = c.ib || "" + Q(a).href,
                        g = c.Td || a.document.referrer,
                        h = {
                            G: sa((b = {}, b.pv = 1, b)),
                            D: (d = {}, d["page-url"] = f, d["page-ref"] = g, d),
                            L: {}
                        };
                    h.L.O = c.O;
                    h.L.kc = c.kc;
                    c.bb && h.D && (h.D.nohit = "1");
                    return e(h, c).then(function(k) {
                        k && (c.bb || tb(a, c, "PageView. Counter " + c.id + ". URL: " + f + ". Referrer: " + g, c.O)(), Wb(a, D([a, c, k], kn)))
                    })["catch"](A(a, "h.g.s"))
                }),
                Of = ["yandex_metrika_callback" + vc.callbackPostfix, "yandex_metrika_callbacks" + vc.callbackPostfix],
                Jp = B("cb.i", function(a) {
                    var c = Of[0],
                        b = Of[1];
                    if (S(a[c])) a[c]();
                    "object" === typeof a[b] && C(function(d, e) {
                        a[b][e] = null;
                        Qe(a, d)
                    }, a[b]);
                    C(function(d) {
                        try {
                            delete a[d]
                        } catch (e) {
                            a[d] = void 0
                        }
                    }, Of)
                }),
                Dj = t(function(a) {
                    return n(a, "crypto.subtle.digest") && n(a, "TextEncoder") && n(a, "FileReader") && n(a, "Blob")
                }),
                Kp = B("fpm", function(a, c) {
                    if (!yj(a)) return E;
                    var b = M(c);
                    if (!Dj(a)) return vb(a, b, "Not supported"), E;
                    var d = wa(a, c);
                    return d ? function(e) {
                        return (new H(function(f, g) {
                            return Da(e) ? da(e).length ? f(Hh(a, e).then(function(h) {
                                var k, l;
                                h && h.length && d.params((k = {}, k.__ym = (l = {}, l.fpp =
                                    h, l), k))
                            }, E)) : g(Na("fpm.l")) : g(Na("fpm.o"))
                        }))["catch"](A(a, "fpm.en"))
                    } : E
                }),
                de = ja(function(a, c) {
                    var b = {};
                    Se(a)(function(d) {
                        b = d[c] || {}
                    });
                    return b
                }),
                Lp = B("c.c.cc", function(a) {
                    var c = G(a),
                        b = q(de(a), function(d) {
                            var e;
                            return y({}, d, (e = {}, e.oldCode = !!a.ya_cid, e.clickmap = !!d.clickmap, e))
                        });
                    return A(a, "g.c.cc", q(L(c.o, c, "counters", {}), da, bb(b)))
                }),
                Mp = B("gt.c.rs", function(a, c) {
                    var b, d = M(c),
                        e = c.id,
                        f = c.R,
                        g = c.Gd,
                        h = c.fc,
                        k = D([a, d], en);
                    Fh(a, d, (b = {}, b.id = e, b.type = +f, b.clickmap = g, b.trackHash = !!h, b));
                    return k
                }),
                Eh =
                t(Gd),
                Sc = t(tc, M),
                Np = ["ecommerce", "user_id", "fpp"],
                Op = B("pa.int", function(a, c) {
                    var b;
                    return b = {}, b.params = function() {
                        var d, e, f = va(arguments),
                            g = dn(f);
                        if (!g) return null;
                        f = g.Kd;
                        var h = g.O;
                        g = g.ya;
                        if (!Da(h) && !aa(h)) return null;
                        var k = ra(a, "1", c),
                            l = Sc(c).url,
                            m = n(h, "__ym.user_id"),
                            p = da(h),
                            r = K("__ymu", p),
                            v = K("__ym", p) && m;
                        p = !Mh(c);
                        var x = h;
                        x.__ym && (x = y({}, h), x.__ym = N(function(w, J) {
                            var P = n(h, "__ym." + J);
                            P && (w[J] = P);
                            return w
                        }, {}, Np), da(x.__ym).length || delete x.__ym, p = !!da(x).length);
                        m = tb(a, c, v ? "Set user id " + m : (r ?
                            "User p" : "P") + "arams. Counter " + c.id, v ? void 0 : JSON.stringify(x));
                        k = k({
                            L: {
                                O: h
                            },
                            G: sa((d = {}, d.pa = 1, d.ar = 1, d)),
                            D: (e = {}, e["page-url"] = l || Q(a).href, e)
                        }, c).then(p ? m : E);
                        return pc(a, "p.s", k, g, f)
                    }, b
                }),
                rd = t(Bh, q(lb, M)),
                Pp = B("y.p", function(a, c) {
                    var b = Bh(a, c);
                    if (b) {
                        var d = md(a),
                            e = D([a, b, c], $m);
                        cg(a, d, function(f) {
                            f.F(["params"], e)
                        });
                        b.V.F(["params"], q(R("1"), e))
                    }
                }),
                yo = t(function(a) {
                    if (a = jb(a)) return a("a")
                }),
                Ej = {
                    uf: Pa(/[/&=?#]/)
                },
                Hd = B("go.in", function(a, c, b, d) {
                    var e;
                    void 0 === b && (b = "goal");
                    return e = {}, e.reachGoal =
                        function(f, g, h, k) {
                            var l, m;
                            if (!f || Ej[b] && Ej[b](f)) return null;
                            var p = g,
                                r = h || E;
                            S(g) && (r = g, p = void 0, k = h);
                            var v = tb(a, c, "Reach goal. Counter: " + c.id + ". Goal id: " + f, p),
                                x = "goal" === b;
                            g = ra(a, "g", c);
                            h = Zm(a, c, f, b);
                            f = h[0];
                            h = h[1];
                            p = g({
                                L: {
                                    O: p
                                },
                                G: sa((l = {}, l.ar = 1, l)),
                                D: (m = {}, m["page-url"] = f, m["page-ref"] = h, m)
                            }, c).then(function() {
                                x && v();
                                d && d()
                            });
                            return pc(a, "g.s", p, r, k)
                        }, e
                }),
                Qp = B("guid.int", function(a, c) {
                    var b;
                    return b = {}, b.getClientID = function(d) {
                        var e = kc(a, c);
                        d && Qe(a, d, null, e);
                        return e
                    }, b
                }),
                Vi, Rp = B("th.e", function(a,
                    c) {
                    function b() {
                        g || (k = Rc(a, "onhashchange") ? fa(a).F(a, ["hashchange"], h) : zo(a, h))
                    }
                    var d, e = ra(a, "t", c),
                        f = Ld(a, M(c)),
                        g = !1,
                        h = A(a, "h.h.ch", L(Ao, null, a, c, e)),
                        k = E;
                    c.fc && (b(), g = !0);
                    e = A(a, "tr.hs.h", function(l) {
                        var m;
                        l ? b() : k();
                        g = !!l;
                        f((m = {}, m.trackHash = g, m))
                    });
                    return d = {}, d.trackHash = e, d.u = k, d
                }),
                Sp = ja(function(a, c) {
                    Ga(c) ? a.push(c) : C(q(O, na("push", a)), c)
                }),
                Tp = B("cl.p", function(a, c) {
                    function b(p, r, v, x) {
                        void 0 === x && (x = {});
                        v ? Id(a, c, {
                                url: v,
                                Qa: !0,
                                kb: p,
                                ob: r,
                                sender: e,
                                l: x.ctx,
                                ya: x.callback,
                                title: x.title,
                                O: x.params
                            }) :
                            g.warn("Empty link")
                    }
                    var d, e = ra(a, "2", c),
                        f = [],
                        g = id(a, M(c)),
                        h = M(c),
                        k = A(a, "s.s.tr", u(Ld(a, h), Ym));
                    h = {
                        l: a,
                        za: c,
                        Qd: f,
                        sender: e,
                        globalStorage: G(a),
                        Jd: xc(a, c.id),
                        xf: xb(a),
                        Ge: u(u(h, de(a)), q(ea, R("trackLinks")))
                    };
                    h = A(a, "cl.p.c", u(h, Vm));
                    h = fa(a).F(a, ["click"], h);
                    c.gd && k(c.gd);
                    var l = A(a, "file.clc", D([!0, !1], b)),
                        m = A(a, "e.l.l.clc", D([!1, !0], b));
                    f = A(a, "add.f.e.clc", Sp(f));
                    return d = {}, d.file = l, d.extLink = m, d.addFileExtension = f, d.trackLinks = k, d.u = h, d
                }),
                Up = B("nb.p", function(a, c) {
                    function b(J) {
                        l() || (J = "number" === typeof J ?
                            J : 15E3, w = Bo(a, d(!1), J), m())
                    }

                    function d(J) {
                        return function(P) {
                            var ha, Ia, ma;
                            void 0 === P && (P = (ha = {}, ha.ctx = {}, ha.callback = E, ha));
                            if (J || !v && !k.Mb) {
                                v = !0;
                                m();
                                w && w();
                                var Ac = p(ba);
                                ha = (Ka(k.o("lastHit")) || 0) < Ac - 18E5;
                                var Pf = .1 > Math.random();
                                k.C("lastHit", Ac);
                                Ac = sa((Ia = {}, Ia.nb = 1, Ia.cl = x, Ia.ar = 1, Ia));
                                Ia = Sc(c);
                                Ia = {
                                    D: (ma = {}, ma["page-url"] = Ia.url || Q(a).href, ma),
                                    G: Ac,
                                    L: {
                                        force: J
                                    }
                                };
                                ma = id(a, M(c)).warn;
                                !P.callback && P.ctx && ma('"callback" argument missing');
                                (ma = J || ha || Pf) || (ma = a.location.href, ha = a.document.referrer, ma = !(ma && ha ? Ah(ma) === Ah(ha) : !ma && !ha));
                                if (ma) return ma = g(Ia, c), pc(a, "l.o.l", ma, P.callback, P.ctx)
                            }
                            return null
                        }
                    }
                    var e, f, g = ra(a, "n", c),
                        h = M(c),
                        k = xc(a, c.id),
                        l = u(u(h, de(a)), q(ea, R("accurateTrackBounce"))),
                        m = u((e = {}, e.accurateTrackBounce = !0, e), Ld(a, h)),
                        p = Y(a),
                        r = p(ba),
                        v = !1,
                        x = 0,
                        w;
                    pa(c, function(J) {
                        x = J.Sd - r
                    });
                    c.rc && b(c.rc);
                    e = (f = {}, f.notBounce = d(!0), f.u = w, f);
                    e.accurateTrackBounce = b;
                    return e
                }),
                Sm = ja(Mb)("(ym-disable-clickmap|ym-clickmap-ignore)"),
                Vp = B("clm.p", function(a, c) {
                    if (sd(a)) return E;
                    var b = ra(a, "m", c),
                        d = M(c),
                        e = Y(a),
                        f = e(ba),
                        g = u(u(d, de(a)), q(ea, R("clickmap"))),
                        h, k = null;
                    d = A(a, "clm.p.c", function(l) {
                        var m = g();
                        if (m) {
                            var p = G(a),
                                r = p.o("cls", {
                                    $a: 0,
                                    x: 0,
                                    y: 0
                                });
                            p.C("cls", {
                                $a: r.$a + 1,
                                x: r.x + l.clientX,
                                y: r.y + l.clientY
                            });
                            p = "object" === typeof m ? m : {};
                            r = p.filter;
                            m = p.isTrackHash || !1;
                            var v = z(function(w) {
                                return ("" + w).toUpperCase()
                            }, p.ignoreTags || []);
                            X(h) && (h = p.quota || null);
                            var x = !!p.quota;
                            l = {
                                element: Tm(a, l),
                                position: yd(a, l),
                                button: Um(l),
                                time: e(ba)
                            };
                            p = Q(a).href;
                            if (Rm(a, l, k, v, r)) {
                                if (x) {
                                    if (!h) return;
                                    --h
                                }
                                v = Rd(a, l.element);
                                r = v[0];
                                v = v[1];
                                x = gf(a, l.element);
                                r = ["rn", Xa(a), "x", Math.floor(65535 * (l.position.x - x.left) / (r || 1)), "y", Math.floor(65535 * (l.position.y - x.top) / (v || 1)), "t", Math.floor((l.time - f) / 100), "p", ff(a, l.element), "X", l.position.x, "Y", l.position.y];
                                r = I(":", r);
                                m && (r += ":wh:1");
                                Qm(a, p, r, b, c);
                                k = l
                            }
                        }
                    });
                    return fa(a).F(n(a, "document"), ["click"], d)
                }),
                Wp = B("trigger.in", function(a, c) {
                    c.jd && Wb(a, D([a, "yacounter" + c.id + "inited"], Mn), "t.i")
                }),
                Xp = B("c.m.p", function(a, c) {
                    var b, d = M(c);
                    return b = {}, b.clickmap = u(Ld(a, d), Pm), b
                }),
                dh = u("form",
                    Ob),
                Dm = u("form", kb),
                Om = t(function(a, c) {
                    return pa(c, R("settings.form_goals"))
                }, lb),
                Yp = u(!0, vh),
                Zp = B("s.f.i", function(a, c) {
                    var b = [];
                    fa(a).F(a, ["click"], A(a, "s.f.c", D([a, c, b], Nm)));
                    fa(a).F(a, ["submit"], A(a, "s.f.e", q(R("target"), D([a, c, b], Yp))));
                    wh(a, c, "Form goal. Counter " + c.id + ". Init.")
                }),
                $p = B("s.f.i", function(a, c) {
                    return pa(c, function(b) {
                        if (n(b, "settings.button_goals") || -1 !== Q(a).href.indexOf("yagoalsbuttons=1")) fa(a).F(a, ["click"], A(a, "c.t.c", q(R("target"), D([a, c], ge(a, c, "", Mm))))), tb(a, c, "Button goal. Counter " +
                            c.id + ". Init.")()
                    })
                }),
                uh = t(function(a) {
                    return I("[^\\d<>]*", a.split(""))
                }),
                Wk = t(function(a) {
                    return new RegExp(uh(a), "g")
                }),
                Jm = /\S/,
                nh = u(["style", "display:inline;margin:0;padding:0;font-size:inherit;color:inherit;line-height:inherit"], nc),
                Fj = t(function(a) {
                    return sd(a) || !Yc(a)
                }),
                aq = B("phc.h", function(a, c) {
                    return go(a) || Fj(a) ? null : pa(c, function(b) {
                        if (!n(b, "settings.phchange")) {
                            var d = gc(a, "").o("yaHidePhones");
                            d = d ? sb(a, d) : "";
                            (b = n(b, "settings.phhide") || d) && fh(a, c, b)
                        }
                    })
                }),
                Gj = t(function(a) {
                    a = Q(a);
                    a = Pn(a.search.substring(1));
                    a["_ym_status-check"] = a["_ym_status-check"] || "";
                    a._ym_lang = a._ym_lang || "ru";
                    return a
                }),
                ih = q(Gj, R("_ym_status-check"), Ka),
                bq = q(Gj, R("_ym_lang")),
                hh = Pa(/^https:\/\/(yastatic\.net\/s3\/metrika|s3\.mds\.yandex\.net\/internal-metrika-betas|[\w-]+\.dev\.webvisor\.com|[\w-]+\.dev\.metrika\.yandex\.ru)\/(\w|-|\/|(\.)(?!\.))+\.js$/),
                Fm = ["form", "button", "phone", "status"],
                Hj = [],
                Cm = t(function(a, c, b) {
                    C(q(qc([a, c, b]), ea), Hj);
                    if (b.inline) {
                        c = gh(b);
                        var d = b.data;
                        b = b.id;
                        ch(a, c, void 0 === b ? "" : b, void 0 === d ? "" : d)
                    } else b.resource &&
                        hh(b.resource) && (a._ym__postMessageEvent = c, a._ym__inpageMode = b.inpageMode, a._ym__initMessage = b.initMessage, Gm(a, b.resource))
                }, function(a, c, b) {
                    return b.id
                }),
                cq = B("cs.init", function(a, c) {
                    var b, d = ih(a);
                    if (d && c.id === d && "0" === c.R) {
                        var e = gh((b = {}, b.lang = bq(a), b.fileId = "status", b));
                        ca(a, D([a, e, "" + d], ch), 0, "cs")
                    }
                }),
                dq = B("suid.int", function(a, c) {
                    var b;
                    return b = {}, b.setUserID = function(d, e, f) {
                            if (Ga(d) || vd(a, d)) {
                                var g = wa(a, c);
                                d = nc(["__ym", "user_id", d]);
                                g.params(d, e || E, f)
                            } else id(a, M(c)).error("Incorrect user ID")
                        },
                        b
                }),
                eq = B("up.int", function(a, c) {
                    var b;
                    return b = {}, b.userParams = A(a, "up.c", function(d, e, f) {
                        var g, h = wa(a, c),
                            k = Md(a, M(c)).warn;
                        h ? Da(d) ? (d = (g = {}, g.__ymu = d, g), (g = h.params) && g(d, e || E, f)) : k("Wrong user params") : k("No counter instance found")
                    }), b
                }),
                fq = /[\*\.\?\(\)]/g,
                gq = t(function(a, c, b) {
                    try {
                        var d = b.replace("\\s", " ").replace(fq, "");
                        Md(a, "").warn('Function "' + d + '" has been overridden, this may cause issues with Metrika counter')
                    } catch (e) {}
                }, lb),
                hq = B("r.nn", function(a) {
                    Nh(a).isEnabled && Pe(a, vf, function(c) {
                        c.pb.F(function(b) {
                            gq(a,
                                b[1], b[0]);
                            vf.splice(100)
                        })
                    })
                }),
                iq = B("e.a.p", function(a, c) {
                    var b, d = wa(a, c);
                    d = D([q(O, Ha(!0)), U(Boolean, z(u(d, n), ["clickmap", "trackLinks", "accurateTrackBounce"]))], z);
                    c.Nd && d();
                    return b = {}, b.enableAll = d, b
                }),
                nb, dc, Ie = (nb = {}, nb.transaction_id = "id", nb.item_id = "id", nb.item_name = "name", nb.item_brand = "brand", nb.promotion_name = "coupon", nb.index = "position", nb.item_variant = "variant", nb.value = "revenue", nb.item_category = "category", nb),
                xg = (dc = {}, dc.view_item = "detail", dc.add_to_cart = "add", dc.remove_from_cart = "remove",
                    dc.begin_checkout = "checkout", dc.purchase = "purchase", dc),
                wl = "currencyCode add delete remove purchase checkout detail".split(" "),
                vg = B("dl.w", function(a, c, b) {
                    function d() {
                        var g = n(a, c);
                        (e = aa(g) && Pe(a, g, b)) || (f = ca(a, d, 1E3, "ec.dl"))
                    }
                    var e, f = 0;
                    d();
                    return function() {
                        return Sa(a, f)
                    }
                }),
                jq = u("add", Fd),
                kq = u("remove", Fd),
                lq = u("detail", Fd),
                mq = u("purchase", Fd),
                nq = B("p.cd", function(a, c) {
                    if (Dd(a) || pf(a)) {
                        var b = Ja(a);
                        if (ta(b.o("jn"))) {
                            b.C("jn", !1);
                            var d = a.gf || Nc(a) ? function() {} : /./,
                                e = id(a, M(c));
                            d.toString = function() {
                                b.C("jn",
                                    !0);
                                return "Yandex.Metrika counter is initialized"
                            };
                            e.log("%c%s", "color: inherit", d)
                        }
                    }
                }),
                oq = "FB_IAB FBAV OKApp GSA/ yandex yango uber EatsKit YKeyboard iOSAppUslugi YangoEats".split(" "),
                je = t(function(a) {
                    var c = mj(a);
                    a = c.md;
                    if (!c.Fc) return !1;
                    c = na("indexOf", a);
                    c = Oa(q(c, oa(-1), Sb), oq);
                    var b = /CFNetwork\/[0-9][0-9.]*.*Darwin\/[0-9][0-9.]*/.test(a),
                        d = /YaBrowser\/[\d.]+/.test(a),
                        e = /Mobile/.test(a);
                    return c || b || d && e || !/Safari/.test(a) && e
                }),
                pq = ["YangoEats"],
                xk = t(function(a) {
                    var c = cb(a);
                    if (!c) return !1;
                    c = na("indexOf",
                        c);
                    return Oa(q(c, oa(-1), Sb), pq) || Mc(a)
                }),
                xm = /([0-9\\.]+) Safari/,
                qq = /\sYptp\/\d\.(\d+)\s/,
                Ij = t(function(a) {
                    var c;
                    a: {
                        if ((c = cb(a)) && (c = qq.exec(c)) && 1 < c.length) {
                            c = Ka(c[1]);
                            break a
                        }
                        c = 0
                    }
                    return 50 <= c && 99 >= c || re(a, 79) ? !1 : !gd(a) || je(a)
                }),
                Jj = "monospace;sans-serif;serif;Andale Mono;Arial;Arial Black;Arial Hebrew;Arial MT;Arial Narrow;Arial Rounded MT Bold;Arial Unicode MS;Bitstream Vera Sans Mono;Book Antiqua;Bookman Old Style;Calibri;Cambria;Cambria Math;Century;Century Gothic;Century Schoolbook;Comic Sans;Comic Sans MS;Consolas;Courier;Courier New;Garamond;Geneva;Georgia;Helvetica;Helvetica Neue;Impact;Lucida Bright;Lucida Calligraphy;Lucida Console;Lucida Fax;LUCIDA GRANDE;Lucida Handwriting;Lucida Sans;Lucida Sans Typewriter;Lucida Sans Unicode;Microsoft Sans Serif;Monaco;Monotype Corsiva;MS Gothic;MS Outlook;MS PGothic;MS Reference Sans Serif;MS Sans Serif;MS Serif;MYRIAD;MYRIAD PRO;Palatino;Palatino Linotype;Segoe Print;Segoe Script;Segoe UI;Segoe UI Light;Segoe UI Semibold;Segoe UI Symbol;Tahoma;Times;Times New Roman;Times New Roman PS;Trebuchet MS;Verdana;Wingdings;Wingdings 2;Wingdings 3".split(";"),
                rq = t(function(a) {
                    a = jb(a)("canvas");
                    var c = n(a, "getContext");
                    if (!c) return null;
                    try {
                        var b = L(c, a)("2d");
                        b.font = "72px mmmmmmmmmmlli";
                        var d = b.measureText("mmmmmmmmmmlli").width;
                        return function(e) {
                            b.font = "72px " + e;
                            return b.measureText("mmmmmmmmmmlli").width === d
                        }
                    } catch (e) {
                        return null
                    }
                }),
                Kj = xa(String.prototype.repeat, "repeat"),
                sq = Kj ? function(a, c) {
                    return Kj.call(a, c)
                } : um,
                sg = u(!0, function(a, c, b, d) {
                    b = c.length && (b - d.length) / c.length;
                    if (0 >= b) return d;
                    c = sq(c, b);
                    return a ? c + d : d + c
                }),
                Zd = [2277735313, 289559509],
                $d = [1291169091,
                    658871167
                ],
                tm = {
                    "*": "+",
                    "-": "/",
                    We: "=",
                    "+": "*",
                    "/": "-",
                    "=": "_"
                },
                ec = ja(function(a, c) {
                    return G(c).o(a, null)
                }),
                tq = /(\?|&)turbo_uid=([\w\d]+)($|&)/,
                uq = t(function(a, c) {
                    var b = $b(a),
                        d = Q(a).search.match(tq);
                    return d && 2 <= d.length ? (d = d[2], c.Ba || b.C("turbo_uid", d), d) : (b = b.o("turbo_uid")) ? b : ""
                }),
                pm = [
                    ["domainLookupEnd", "domainLookupStart"],
                    ["connectEnd", "connectStart"],
                    ["responseStart", "requestStart"],
                    ["responseEnd", "responseStart"],
                    ["fetchStart", "navigationStart"],
                    ["redirectEnd", "redirectStart"],
                    [function(a, c) {
                        return n(c,
                            "redirectCount") || n(a, "navigation.redirectCount")
                    }],
                    ["domInteractive", "domLoading"],
                    ["domContentLoadedEventEnd", "domContentLoadedEventStart"],
                    ["domComplete", "navigationStart"],
                    ["loadEventStart", "navigationStart"],
                    ["loadEventEnd", "loadEventStart"],
                    ["domContentLoadedEventStart", "navigationStart"]
                ],
                fb, om = [
                    ["domainLookupEnd", "domainLookupStart"],
                    ["connectEnd", "connectStart"],
                    ["responseStart", "requestStart"],
                    ["responseEnd", "responseStart"],
                    ["fetchStart"],
                    ["redirectEnd", "redirectStart"],
                    ["redirectCount"],
                    ["domInteractive", "responseEnd"],
                    ["domContentLoadedEventEnd", "domContentLoadedEventStart"],
                    ["domComplete"],
                    ["loadEventStart"],
                    ["loadEventEnd", "loadEventStart"],
                    ["domContentLoadedEventStart"]
                ],
                $g = (fb = {}, fb.responseEnd = 1, fb.domInteractive = 1, fb.domContentLoadedEventStart = 1, fb.domContentLoadedEventEnd = 1, fb.domComplete = 1, fb.loadEventStart = 1, fb.loadEventEnd = 1, fb.unloadEventStart = 1, fb.unloadEventEnd = 1, fb.secureConnectionStart = 1, fb),
                rm = t(Gd),
                lm = t(tc),
                mm = t(function(a) {
                    var c = n(a, "webkitRequestFileSystem");
                    if (S(c) && !Dd(a)) return (new H(L(c, a, 0, 0))).then(function() {
                        var d = n(a, "navigator.storage") || {};
                        return d.estimate ? d.estimate() : {}
                    }).then(function(d) {
                        return (d = d.quota) && 12E7 > d ? !0 : !1
                    })["catch"](u(!0, O));
                    if ($c(a)) return c = n(a, "navigator.serviceWorker"), H.resolve(X(c));
                    c = n(a, "openDatabase");
                    if (Nc(a) && S(c)) {
                        var b = !1;
                        try {
                            c(null, null, null, null)
                        } catch (d) {
                            b = !0
                        }
                        return H.resolve(b)
                    }
                    return H.resolve(!n(a, "indexedDB") && (n(a, "PointerEvent") || n(a, "MSPointerEvent")))
                }),
                vq = t(function(a) {
                    return S(n(a, "yandex.getSiteUid")) ?
                        a.yandex.getSiteUid() : null
                }),
                wq = B("pa.plgn", function(a, c) {
                    var b = rd(a, c);
                    b && b.V.F(["pluginInfo"], A(a, "c.plgn", function() {
                        var d = G(a);
                        d.C("cmc", d.o("cmc", 0) + 1);
                        return fo(c, he)
                    }))
                }),
                gb, Va, tk = (gb = {}, gb.am = "com.am", gb.tr = "com.tr", gb.ge = "com.ge", gb.il = "co.il", gb["\u0440\u0444"] = "ru", gb["xn--p1ai"] = "ru", gb["\u0443\u043a\u0440"] = "ua", gb["xn--j1amh"] = "ua", gb["\u0431\u0435\u043b"] = "by", gb["xn--90ais"] = "by", gb),
                Lj = {
                    "mc.edadeal.ru": /^([^/]+\.)?edadeal\.ru$/,
                    "mc.yandexsport.ru": /^([^/]+\.)?yandexsport\.ru$/,
                    "mc.kinopoisk.ru": /^([^/]+\.)?kinopoisk\.ru$/
                },
                uk = (Va = {}, Va.ka = "ge", Va.ro = "md", Va.tg = "tj", Va.tk = "tm", Va.et = "ee", Va.hy = "com.am", Va.he = "co.li", Va.ky = "kg", Va.uk = "ua", Va.be = "by", Va.tr = "com.tr", Va.kk = "kz", Va),
                hm = "ar:1:pv:1:v:" + qa.Za + ":vf:" + vc.version,
                im = qa.ua + "//" + Nb + "/watch/" + qa.qd,
                Mj = {},
                xq = B("exps.int", function(a, c) {
                    var b;
                    return b = {}, b.experiments = function(d, e, f) {
                            var g, h;
                            void 0 === e && (e = E);
                            if (d && 0 < d.length) {
                                var k = ra(a, "e", c),
                                    l = Sc(c).url;
                                d = k({
                                    G: sa((g = {}, g.ex = 1, g.ar = 1, g)),
                                    D: (h = {}, h["page-url"] = l || Q(a).href, h.exp = d, h)
                                }, c);
                                return pc(a, "exps.s", d, e, f)
                            }
                        },
                        b
                }),
                ke = [],
                yq = B("p.fh", function(a, c) {
                    var b, d;
                    void 0 === c && (c = !0);
                    var e = Ja(a),
                        f = Y(a),
                        g = e.o("wasSynced"),
                        h = {
                            id: 3,
                            R: "0"
                        };
                    return c && g && g.time + 864E5 > f(ba) ? H.resolve(g) : ra(a, "f", h)({
                        G: sa((b = {}, b.pv = 1, b)),
                        D: (d = {}, d["page-url"] = Q(a).href, d["page-ref"] = a.document.referrer, d)
                    }, h).then(function(k) {
                        var l;
                        k = (l = {}, l.time = f(ba), l.params = n(k, "settings"), l.bkParams = n(k, "userData"), l);
                        e.C("wasSynced", k);
                        return k
                    })["catch"](A(a, "f.h"))
                }),
                zq = ja(function(a, c) {
                    0 === parseFloat(n(c, "settings.c_recp")) && (a.Sb.C("ymoo" + a.na,
                        a.fd($a)), a.Db && a.Db.destruct && a.Db.destruct())
                }),
                Xg = q(R("settings.pcs"), oa("1")),
                Yl = [
                    [
                        ["'(-$&$&$'", 30102, 0],
                        ["'(-$&$&$'", 29009, 0]
                    ],
                    [
                        ["oWdZ[nc[jh_YW$Yec", 30103, 1],
                        ["oWdZ[nc[jh_YW$Yec", 29010, 1]
                    ]
                ],
                Zl = [
                    [
                        ["oWdZ[nc[jh_YW$Yec", 30103, 1]
                    ],
                    [
                        ["oWdZ[nc[jh_YW$Yec", 29010, 1]
                    ]
                ],
                Yg = {
                    D: {
                        t: 'UV|L7,!"T[rwe&D_>ZIb\\aW#98Y.PC6k'
                    }
                },
                Wg = {
                    id: 42822899,
                    R: "0"
                },
                ee, em = (ee = {}, ee.s = "p", ee["8"] = "i", ee),
                bm = Ub("csp", function(a, c) {
                    return ra(a, "s", c)({}, ["https://ymetrica1.com/watch/3/1"])
                }),
                Nj = "et w v z i u vf".split(" "),
                Rl = {
                    Uf: "stamp",
                    pf: "frameId",
                    ia: "meta",
                    cf: "base",
                    wf: "hasBase",
                    Ze: "address",
                    Xf: "ua",
                    Pf: "prev",
                    Df: "namespace",
                    Af: "keystrokes",
                    zf: "isMeta",
                    Cf: "modifier",
                    Mf: "pageWidth",
                    Lf: "pageHeight",
                    Vf: "startNode",
                    kf: "endNode",
                    $f: "zoomFrom",
                    ag: "zoomTo",
                    level: "level",
                    duration: "duration",
                    yf: "i",
                    Hf: "o",
                    n: "n",
                    r: "r",
                    hf: "ct",
                    af: "at",
                    Ef: "nm",
                    Ff: "ns",
                    Kf: "pa",
                    Of: "pr",
                    Gf: "nx",
                    Pa: "h",
                    ef: "changes",
                    Ye: "a",
                    bf: "b",
                    df: "c",
                    Jf: "op"
                },
                Sl = ["attributes", "attrs"],
                Oj = function() {
                    function a(c) {
                        this.l = c
                    }
                    a.prototype.ra = function(c) {
                        var b = Cd(c);
                        c = z(L(this.Ga,
                            this), b);
                        return zi(hb(this.l, z(function(d, e) {
                            var f;
                            return y({}, b[e], (f = {}, f.data = d, f))
                        }, c)))
                    };
                    a.prototype.Ga = function(c) {
                        var b = c.data;
                        "string" !== typeof b && (b = hb(this.l, Cd(c.data)));
                        return b
                    };
                    a.prototype.Oa = function(c) {
                        return encodeURIComponent(c).length
                    };
                    a.prototype.dd = function(c, b) {
                        for (var d = Math.ceil(c.length / b), e = [], f = 0; f < b; f += 1) e.push(c.slice(f * d, d * (f + 1)));
                        return e
                    };
                    a.prototype.isEnabled = function() {
                        return !!this.l.JSON
                    };
                    return a
                }(),
                jd, Qf = (jd = {}, jd[1] = 500, jd[2] = 500, jd[3] = 0, jd),
                Rf = function() {
                    function a(c,
                        b) {
                        var d, e = this;
                        this.id = "a";
                        this.Lb = !1;
                        this.Na = {};
                        this.Fa = {
                            "schema.org": "Article NewsArticle Movie BlogPosting Review Recipe Answer".split(" "),
                            Oc: ["article"]
                        };
                        this.ic = (d = {}, d.Answer = 3, d.Review = 2, d);
                        this.Hd = t(function(f, g) {
                            vb(e.l, e.na, "Warning: content has only " + g.chars + " chars. Required " + Qf[g.type], g)
                        });
                        this.l = c;
                        this.root = Kb(c);
                        this.na = b
                    }
                    a.prototype.oa = function(c) {
                        return c.element
                    };
                    a.prototype.Bc = function(c, b) {
                        var d = this,
                            e;
                        A(this.l, "P.s." + b, function() {
                            e = d.Na[b].call(d, c)
                        })();
                        return e
                    };
                    a.prototype.ue =
                        function(c) {
                            var b = y({}, c);
                            this.Lb && !b.id && K(c.type, [3, 2]) && (c = I(", ", z(R("name"), b.authors || [])), b.pageTitle = c + ": " + b.pageTitle);
                            b.pageTitle || (b.pageTitle = this.Yd(b.ab));
                            b.pageUrlCanonical || (c = b.id, b.pageUrlCanonical = ("string" !== typeof c ? 0 : /^(https?:)\/\//.test(c)) ? b.id : this.Xd());
                            b.id || (b.id = b.pageTitle || b.pageUrlCanonical);
                            return b
                        };
                    a.prototype.ha = function(c) {
                        var b = this,
                            d = {},
                            e = this.oa(c);
                        if (!e) return null;
                        d.type = c.type;
                        C(function(g) {
                            d[g] = b.Bc(c, g)
                        }, da(this.Na));
                        var f = Y(this.l);
                        d.stamp = f(Ai);
                        d.element =
                            c.element;
                        d.ab = e;
                        d = this.ue(d);
                        d.id = d.id ? Yb(d.id) : 1;
                        d.update = function(g) {
                            return b.oa(c) ? b.Bc(c, g) : void 0
                        };
                        return d
                    };
                    a.prototype.Yd = function(c) {
                        for (var b = 1; 5 >= b; b += 1) {
                            var d = Ra(oc("h" + b, c));
                            if (d) return d
                        }
                    };
                    a.prototype.Xd = function() {
                        var c = oc('[rel="canonical"]', this.root);
                        if (c) return c.href
                    };
                    a.prototype.Dc = function() {
                        return 1
                    };
                    a.prototype.hb = function() {
                        return []
                    };
                    a.prototype.Rd = function() {
                        var c = this,
                            b = this.hb(),
                            d = 1;
                        return N(function(e, f) {
                            var g = c.ha({
                                element: f,
                                type: c.Dc(f)
                            }) || [];
                            aa(g) || (g = [g]);
                            g = N(function(h,
                                k) {
                                var l = h.values,
                                    m = h.Ec;
                                k && k.chars > Qf[k.type] && !K(k.id, m) ? (l.push(k), m.push(k.id)) : k && k.chars <= Qf[k.type] && c.Hd(k.id, k);
                                return {
                                    values: l,
                                    Ec: m
                                }
                            }, {
                                values: [],
                                Ec: z(R("id"), e)
                            }, g).values;
                            return e.concat(z(function(h) {
                                var k;
                                h = y((k = {
                                    index: d,
                                    ad: !1
                                }, k.involvedTime = 0, k), h);
                                d += 1;
                                return h
                            }, g))
                        }, [], b)
                    };
                    return a
                }(),
                Pj = function(a) {
                    function c() {
                        var b, d = null !== a && a.apply(this, arguments) || this;
                        d.id = "j";
                        d.Lb = !0;
                        d.tc = I(",", ['script[type="application/ld+json"]', 'script[type="application/json+ld"]', 'script[type="ld+json"]',
                            'script[type="json+ld"]'
                        ]);
                        d.Na = (b = {}, b.id = function(e) {
                            var f = e.data["@id"];
                            e = e.data.mainEntity || e.data.mainEntityOfPage;
                            !f && e && (f = e["@id"]);
                            return f
                        }, b.chars = function(e) {
                            return "string" === typeof e.data.text ? e.data.text.length : Db(this.oa(e)).length
                        }, b.authors = function(e) {
                            var f = [];
                            f = f.concat(this.gb(e.data, "author"));
                            f = f.concat(this.gb(e.data.mainEntity, "author"));
                            return f.concat(this.gb(e.data.mainEntityOfPage, "author"))
                        }, b.pageTitle = function(e) {
                            var f = e.data.headline || "";
                            e.data.$e && (f += " " + e.data.alternativeHeadline);
                            "" === f && (e.data.name ? f = e.data.name : e.data.itemReviewed && (f = e.data.itemReviewed));
                            3 === e.type && e.data.parentItem && (f = e.data.parentItem.text);
                            return f
                        }, b.updateDate = function(e) {
                            return e.data.dateModified || ""
                        }, b.publicationDate = function(e) {
                            return e.data.datePublished || ""
                        }, b.pageUrlCanonical = function(e) {
                            return e.data.url
                        }, b.topics = function(e) {
                            return this.gb(e.data, "about", ["name", "alternateName"])
                        }, b.rubric = function(e) {
                            var f = this,
                                g = this.oa(e);
                            e = U(Boolean, z(function(h) {
                                if (h = sb(f.l, Db(h))) {
                                    var k = f.Cc(h);
                                    if (k) return N(function(l, m) {
                                        return l ? l : "BreadcrumbList" === m["@type"] ? m : l
                                    }, null, k);
                                    if ("BreadcrumbList" === h["@type"]) return h
                                }
                                return null
                            }, [e.element].concat(kb(this.tc, document.body === g ? document.documentElement : g))));
                            return e.length && (e = e[0].itemListElement, aa(e)) ? U(Boolean, z(function(h) {
                                return Da(h) && h.item && Da(h.item) && !f.l.isNaN(h.position) ? {
                                    name: h.item.name || h.name,
                                    position: h.position
                                } : null
                            }, e)) : []
                        }, b);
                        return d
                    }
                    dd(c, a);
                    c.prototype.gb = function(b, d, e) {
                        void 0 === e && (e = ["name"]);
                        if (!b || !b[d]) return [];
                        b = aa(b[d]) ? b[d] : [b[d]];
                        b = U(O, z(function(f) {
                            return f ? "string" === typeof f ? f : N(function(g, h) {
                                return g || "" + f[h]
                            }, "", e) : null
                        }, b));
                        return z(function(f) {
                            var g;
                            return g = {}, g.name = f, g
                        }, b)
                    };
                    c.prototype.oa = function(b) {
                        var d = b.element,
                            e = b.data["@id"],
                            f = b.data.url;
                        b = null;
                        f && "string" === typeof f && (b = this.wc(f));
                        !b && e && "string" === typeof e && (b = this.wc(e));
                        b || (b = e = d.parentNode, !Ob("head", this.l, d) && e && 0 !== Db(e).length) || (b = this.l.document.body);
                        return b
                    };
                    c.prototype.wc = function(b) {
                        try {
                            var d = Jd(this.l, b).hash;
                            if (d) {
                                var e =
                                    oc(d, this.l.document.body);
                                if (e) return e
                            }
                        } catch (f) {}
                        return null
                    };
                    c.prototype.Vb = function(b) {
                        return this.ic[b["@type"]] || 1
                    };
                    c.prototype.ha = function(b) {
                        var d = this,
                            e = b.element;
                        if (!b.data && (b.data = sb(this.l, Db(e)), !b.data || !/schema\.org/.test(b.data["@context"]) && !aa(b.data))) return null;
                        var f = this.Cc(b.data);
                        if (f) return z(function(h) {
                            if (!K(h["@type"], d.Fa["schema.org"])) return null;
                            h = {
                                element: e,
                                data: h,
                                type: d.Vb(h)
                            };
                            return a.prototype.ha.call(d, h)
                        }, f);
                        if ("QAPage" === b.data["@type"]) {
                            var g = b.data.mainEntity ||
                                b.data.mainEntityOfPage;
                            if (!g) return null
                        }
                        "Question" === b.data["@type"] && (g = b.data);
                        return g ? (b = Jb(u(g, n), ["acceptedAnswer", "suggestedAnswer"]), z(function(h) {
                            var k;
                            if (!h || !K(h["@type"], d.Fa["schema.org"])) return null;
                            h = {
                                element: e,
                                type: d.Vb(h),
                                data: y((k = {}, k.parentItem = g, k), h)
                            };
                            return a.prototype.ha.call(d, h)
                        }, b)) : K(b.data["@type"], this.Fa["schema.org"]) ? a.prototype.ha.call(this, y(b, {
                            type: this.Vb(b.data)
                        })) : null
                    };
                    c.prototype.hb = function() {
                        return kb(this.tc, this.root)
                    };
                    c.prototype.Cc = function(b) {
                        return aa(b) &&
                            b || b && aa(b["@graph"]) && b["@graph"]
                    };
                    return c
                }(Rf),
                Sf = function(a) {
                    function c() {
                        var b, d = null !== a && a.apply(this, arguments) || this;
                        d.id = "s";
                        d.Lb = !0;
                        d.He = na("exec", new RegExp("schema.org\\/(" + I("|", da(d.ic)) + ")$"));
                        d.Na = (b = {}, b.id = function(e) {
                            e = e.element;
                            var f = Ua(this.l, e, "identifier");
                            return f ? Ra(f) : (f = Ua(this.l, e, "mainEntityOfPage")) && f.getAttribute("itemid") ? f.getAttribute("itemid") : null
                        }, b.chars = function(e) {
                            var f = 0;
                            e = e.element;
                            for (var g = ["articleBody", "reviewBody", "recipeInstructions", "description",
                                    "text"
                                ], h = 0; h < g.length; h += 1) {
                                var k = Ua(this.l, e, g[h]);
                                if (k) {
                                    f = Ra(k).length;
                                    break
                                }
                            }
                            e = Db(e);
                            0 === f && e && (f += e.length);
                            return f
                        }, b.topics = function(e) {
                            var f = this,
                                g = fd(this.l, e.element, "about");
                            return z(function(h) {
                                var k = {
                                    name: Ra(h)
                                };
                                if (g = Ua(f.l, h, "name")) k.name = Ra(g);
                                return k
                            }, g)
                        }, b.rubric = function(e) {
                            var f = this;
                            (e = oc('[itemtype$="schema.org/BreadcrumbList"]', e.element)) || (e = oc('[itemtype$="schema.org/BreadcrumbList"]', this.root));
                            return e ? z(function(g) {
                                return {
                                    name: Ra(Ua(f.l, g, "name")),
                                    position: Ra(Ua(f.l,
                                        g, "position"))
                                }
                            }, fd(this.l, e, "itemListElement")) : []
                        }, b.updateDate = function(e) {
                            return (e = Ua(this.l, e.element, "dateModified")) ? Yi(e) : ""
                        }, b.publicationDate = function(e) {
                            return (e = Ua(this.l, e.element, "datePublished")) ? Yi(e) : ""
                        }, b.pageUrlCanonical = function(e) {
                            e = fd(this.l, e.element, "url");
                            if (e.length) {
                                var f = e[0];
                                return f.href ? f.href : Ra(e)
                            }
                            return null
                        }, b.pageTitle = function(e) {
                            var f = "",
                                g = e.element,
                                h = Ua(this.l, g, "headline");
                            h && (f += Ra(h));
                            (h = Ua(this.l, g, "alternativeHeadline")) && (f += " " + Ra(h));
                            "" === f && ((h = Ua(this.l,
                                g, "name")) || (h = Ua(this.l, g, "itemReviewed")), h && (f += Ra(h)));
                            3 === e.type && (e = Ob('[itemtype$="schema.org/Question"]', this.l, g)) && (e = Ua(this.l, e, "text")) && (f += Ra(e));
                            return f
                        }, b.authors = function(e) {
                            var f = this;
                            e = fd(this.l, e.element, "author");
                            return z(function(g) {
                                var h, k = (h = {}, h.name = "", h);
                                /.+schema.org\/(Person|Organization)/.test(g.getAttribute("itemtype") || "") && (h = Ua(f.l, g, "name")) && (k.name = Ra(h));
                                k.name || (k.name = g.getAttribute("content") || Db(g) || g.getAttribute("href"));
                                return k
                            }, e)
                        }, b);
                        return d
                    }
                    dd(c,
                        a);
                    c.prototype.Dc = function(b) {
                        b = b.getAttribute("itemtype") || "";
                        return (b = this.He(b)) ? this.ic[b[1]] : 1
                    };
                    c.prototype.ha = function(b) {
                        return b.element && Db(b.element).length ? a.prototype.ha.call(this, b) : null
                    };
                    c.prototype.hb = function() {
                        var b = I(",", z(function(d) {
                            return '[itemtype$="schema.org/' + d + '"]'
                        }, this.Fa["schema.org"]));
                        return kb(b, this.root)
                    };
                    return c
                }(Rf),
                Qj = function(a) {
                    function c(b, d) {
                        var e, f = a.call(this, b, d) || this;
                        f.id = "o";
                        f.Na = (e = {}, e.chars = function(g) {
                                g = this.oa(g);
                                return Db(g).length
                            }, e.authors =
                            function(g) {
                                return this.Gb(g.data.author)
                            }, e.pageTitle = function(g) {
                                return this.jb(g.data.title) || ""
                            }, e.updateDate = function(g) {
                                return this.jb(g.data.modified_time)
                            }, e.publicationDate = function(g) {
                                return this.jb(g.data.published_time)
                            }, e.pageUrlCanonical = function(g) {
                                return this.jb(g.data.url)
                            }, e.rubric = function(g) {
                                return this.Gb(g.data.section)
                            }, e.topics = function(g) {
                                return this.Gb(g.data.tag)
                            }, e);
                        f.Od = new RegExp("^(og:)?((" + I("|", f.Fa.Oc) + "):)?");
                        return f
                    }
                    dd(c, a);
                    c.prototype.Gb = function(b) {
                        var d;
                        return b ?
                            aa(b) ? z(function(e) {
                                var f;
                                return f = {}, f.name = e, f
                            }, b) : [(d = {}, d.name = b, d)] : []
                    };
                    c.prototype.jb = function(b) {
                        return aa(b) ? b.length ? b[0] : null : b
                    };
                    c.prototype.hb = function() {
                        var b = kb('meta[property="og:type"]', this.l.document.body);
                        return [this.l.document.head].concat(b)
                    };
                    c.prototype.Wd = function(b) {
                        var d = this,
                            e = b.element,
                            f = {},
                            g = this.oa(b);
                        e = kb("meta[property]", e === this.l.document.head ? e : g);
                        if (e.length) C(function(h) {
                            try {
                                if (h.parentNode === g || h.parentNode === d.l.document.head) {
                                    var k = h.getAttribute("property").replace(d.Od,
                                            ""),
                                        l = Ra(h);
                                    f[k] ? aa(f[k]) ? f[k].push(l) : f[k] = [f[k], l] : f[k] = l
                                }
                            } catch (m) {
                                Ed(d.l, "og.ed", m)
                            }
                        }, e);
                        else return null;
                        return K(f.type, this.Fa.Oc) ? y(b, {
                            data: f
                        }) : null
                    };
                    c.prototype.oa = function(b) {
                        b = b.element;
                        var d = this.l.document;
                        return b === d.head ? d.body : b.parentNode
                    };
                    c.prototype.ha = function(b) {
                        return (b = this.Wd(b)) ? a.prototype.ha.call(this, b) : null
                    };
                    return c
                }(Rf),
                Rj = "resize scroll mousemove mousedown click windowfocus keydown orientationchange change focus touchmove touchstart".split(" "),
                Aq = "id pageTitle stamp chars authors updateDate publicationDate pageUrlCanonical topics rubric".split(" "),
                Bq = function() {
                    function a(c, b, d, e, f) {
                        var g = this;
                        this.lb = !1;
                        this.ia = {};
                        this.scroll = {
                            x: 0,
                            y: 0
                        };
                        this.Kb = this.Mc = 0;
                        this.Tb = this.Rc = "";
                        this.Y = [];
                        this.bc = this.De = 0;
                        this.Ja = {
                            Pa: 0,
                            oc: 0
                        };
                        this.buffer = [];
                        this.rd = Aq;
                        this.flush = function() {
                            g.bc = ca(g.l, g.flush, 2500);
                            var h = g.Hb();
                            if (g.buffer.length || h) {
                                var k = Ue(g.buffer);
                                h && k.push(h);
                                g.Rc = g.Tb;
                                g.$.ra(k)(ib(A(g.l, "p.b.st"), function(l) {
                                    l && g.ac(l)
                                }))
                            }
                        };
                        this.ac = e;
                        this.$ = d;
                        this.Xa = L(this.Xa, this);
                        this.Hb = L(this.Hb, this);
                        this.flush = L(this.flush, this);
                        this.l = c;
                        this.na = f;
                        this.ub = b;
                        this.Ob = "pai" + b.id;
                        this.Ib();
                        this.vc = fa(this.l);
                        this.time = Y(this.l);
                        this.kd();
                        this.Jb = G(this.l)
                    }
                    a.prototype.start = function() {
                        var c = this;
                        this.bc = ca(this.l, this.flush, 2500);
                        if (!this.lb) {
                            this.ze();
                            var b = this.Jb.o(this.Ob, []),
                                d = !b.length;
                            b.push(L(this.je, this));
                            this.Jb.sa(this.Ob, b);
                            d && this.Xc();
                            var e = function(f, g) {
                                return (f.Zb || 0) <= (g.Zb || 0) ? g : f
                            };
                            fa(this.l).F(this.l, ["click"], function(f) {
                                if (c.Y.length) {
                                    f = yh(f);
                                    var g = Q(c.l).hostname,
                                        h;
                                    if (h = f) h = Kd(f.hostname) === Kd(g);
                                    h && (f = N(e, c.Y[0], c.Y).id,
                                        g = xb(c.l), xc(c.l, c.na.split(":")[0]).C("pai", f + "-" + g))
                                }
                            });
                            this.Xa({
                                type: "page",
                                target: this.l
                            })
                        }
                    };
                    a.prototype.stop = function() {
                        this.Ie();
                        this.lb = !0;
                        this.flush();
                        Sa(this.l, this.bc)
                    };
                    a.prototype.Jc = function(c) {
                        return Ob("html", this.l, c) !== this.l.document.documentElement
                    };
                    a.prototype.Xc = function() {
                        var c = this;
                        A(this.l, "p.ic" + this.ub.id, function() {
                            if (!c.lb) {
                                var b = c.Jb.o(c.Ob),
                                    d = c.ub.Rd();
                                C(function(e) {
                                    var f = z(function(g) {
                                        return y({}, g)
                                    }, d);
                                    S(e) && e(f)
                                }, b);
                                c.De = ca(c.l, L(c.Xc, c), 1E3, "p")
                            }
                        })()
                    };
                    a.prototype.je =
                        function(c) {
                            this.lb || (this.Je(c), this.Ke(), this.Fd())
                        };
                    a.prototype.Xa = function(c) {
                        var b = this;
                        A(this.l, "p.ec." + this.ub.id, function() {
                            try {
                                var d = c.type;
                                var e = c.target
                            } catch (l) {
                                return
                            }
                            var f = "page" === d;
                            if ("scroll" === d || f) {
                                var g = [b.l, b.l.document, b.l.document.documentElement, cc(b.l)];
                                K(e, g) && b.Ib()
                            }("resize" === d || f) && b.kd();
                            d = b.time(ba);
                            var h = Math.min(d - b.Mc, 5E3);
                            b.Kb += Math.round(h);
                            b.Mc = d;
                            if (b.ia && b.scroll && b.Ja) {
                                var k = b.Ja.Pa * b.Ja.oc;
                                b.Y = z(function(l) {
                                    var m = y({}, l),
                                        p = b.ia[m.id],
                                        r = Sd(l.ab);
                                    if (!p || b.Jc(m.element) ||
                                        !r) return m;
                                    l = b.l.Math;
                                    p = l.max((b.scroll.y + b.Ja.Pa - p.y) / p.height, 0);
                                    var v = r.height * r.width;
                                    r = b.Dd(r);
                                    m.Zb = r / k;
                                    m.visibility = r / v;
                                    if (.9 <= m.visibility || .1 <= m.Zb) m.involvedTime += h;
                                    m.maxScrolled = l.round(1E4 * p) / 1E4;
                                    return m
                                }, b.Y)
                            }
                        })()
                    };
                    a.prototype.Dd = function(c) {
                        var b = c.top,
                            d = c.bottom,
                            e = c.left,
                            f = this.Ja,
                            g = f.oc;
                        f = f.Pa;
                        var h = this.l.Math;
                        c = h.min(h.max(c.right, 0), g) - h.min(h.max(e, 0), g);
                        return (h.min(h.max(d, 0), f) - h.min(h.max(b, 0), f)) * c
                    };
                    a.prototype.Je = function(c) {
                        var b = z(function(d) {
                            return d.id
                        }, this.Y);
                        this.Y =
                            this.Y.concat(U(function(d) {
                                return !K(d.id, b)
                            }, c))
                    };
                    a.prototype.kd = function() {
                        var c = pi(this.l) || xd(this.l);
                        this.Ja = {
                            oc: c[0],
                            Pa: c[1]
                        }
                    };
                    a.prototype.Ke = function() {
                        var c = this;
                        A(this.l, "p.um." + this.ub.id, function() {
                            var b = [];
                            c.Ib();
                            c.ia = N(function(d, e) {
                                var f;
                                if (c.Jc(e.element)) b.push(e), delete d[e.id];
                                else {
                                    var g = (f = {}, f.id = e.id, f.involvedTime = Math.max(e.involvedTime, 0), f.maxScrolled = e.maxScrolled || 0, f.chars = e.update ? e.update("chars") || 0 : 0, f);
                                    e.ab && (f = Sd(e.ab)) && (g.x = Math.max(Math.round(f.left) + c.scroll.x,
                                        0), g.y = Math.max(Math.round(f.top) + c.scroll.y, 0), g.width = Math.round(f.width), g.height = Math.round(f.height));
                                    d[e.id] = g
                                }
                                return d
                            }, {}, c.Y);
                            C(function(d) {
                                d = Re(c.l)(d, c.Y);
                                c.Y.splice(d, 1)
                            }, b)
                        })()
                    };
                    a.prototype.Hb = function() {
                        var c, b, d = z(u(this.ia, n), da(this.ia));
                        return d.length && (this.Tb = hb(this.l, d), this.Rc !== this.Tb) ? (c = {}, c.type = "publishersHeader", c.data = (b = {}, b.articleMeta = d || [], b.involvedTime = this.Kb, b), c) : null
                    };
                    a.prototype.Fd = function() {
                        var c = this;
                        if (this.Y.length) {
                            var b = z(function(d) {
                                var e, f = N(function(g,
                                    h) {
                                    d[h] && (g[h] = d[h]);
                                    return g
                                }, {}, c.rd);
                                d.ad = !0;
                                return e = {}, e.type = "articleInfo", e.stamp = f.stamp, e.data = f, e
                            }, U(function(d) {
                                return !d.ad
                            }, this.Y));
                            b.length && (this.buffer = this.buffer.concat(b), vb(this.l, this.na, "Publisher content info found: ", b))
                        }
                    };
                    a.prototype.ze = function() {
                        this.vc.F(this.l, Rj, this.Xa)
                    };
                    a.prototype.Ie = function() {
                        this.vc.Wa(this.l, Rj, this.Xa)
                    };
                    a.prototype.Ib = function() {
                        this.scroll = {
                            x: this.l.pageXOffset || n(this.l, "document.documentElement.scrollLeft") || 0,
                            y: this.l.pageYOffset || n(this.l,
                                "document.documentElement.scrollLeft") || 0
                        }
                    };
                    return a
                }(),
                kd = {};
            Pj && (kd.json_ld = Pj);
            Sf && (kd.schema = Sf, kd.microdata = Sf);
            Qj && (kd.opengraph = Qj);
            var Cq = B("p.p", function(a, c) {
                    function b(l) {
                        var m = y({}, k);
                        m.M.W = l;
                        return e(m, c)["catch"](A(a, "s.ww.p"))
                    }
                    if (!za("querySelectorAll", a.document.querySelectorAll)) return H.resolve();
                    var d = [new Oj(a)],
                        e = ra(a, "p", c),
                        f = Lb(function(l) {
                            return l.isEnabled()
                        }, d);
                    d = sa();
                    var g = xc(a, c.id),
                        h = g.o("pai");
                    h && (g.eb("pai"), d.C("pai", h));
                    var k = {
                        D: {},
                        G: d,
                        va: {
                            Gc: !(f instanceof Oj)
                        },
                        M: {}
                    };
                    return pa(c, A(a, "ps.s", function(l) {
                        if (l = n(l, "settings.publisher.schema")) {
                            l = Hi(c) ? "microdata" : l;
                            var m = kd[l];
                            if (m && f) {
                                var p = M(c);
                                m = new m(a, p);
                                (new Bq(a, m, f, b, p)).start();
                                vb(a, p, 'Publishers analytics schema "' + l + '"')
                            }
                        }
                    }))
                }),
                Dq = function() {
                    function a(c, b) {
                        this.l = c;
                        this.Vd = b
                    }
                    a.prototype.ra = function(c) {
                        return zi(Jb(L(this.Ga, this), c))
                    };
                    a.prototype.Ga = function(c, b) {
                        var d = this,
                            e = [],
                            f = this.Vd(this.l, b && b.type, c.type);
                        f && (e = Jb(function(g) {
                            return g({
                                l: d.l,
                                X: c
                            }) || []
                        }, f));
                        return e
                    };
                    a.prototype.Oa = function(c) {
                        return c.length
                    };
                    a.prototype.dd = function(c) {
                        return [c]
                    };
                    a.prototype.isEnabled = function() {
                        return !0
                    };
                    return a
                }(),
                Sj = function() {
                    function a(c, b, d) {
                        this.uc = 0;
                        this.Wb = 1;
                        this.zb = 5E3;
                        this.l = c;
                        this.$ = b;
                        this.ac = d
                    }
                    a.prototype.vb = function() {
                        this.uc = ca(this.l, q(L(this.flush, this), L(this.vb, this)), this.zb, "b.f")
                    };
                    a.prototype.send = function(c, b) {
                        var d = this.ac(c, b || [], this.Wb);
                        this.Wb += 1;
                        return d
                    };
                    a.prototype.push = function() {};
                    a.prototype.flush = function() {};
                    return a
                }(),
                El = function(a) {
                    function c(b, d, e) {
                        b = a.call(this, b, d, e) || this;
                        b.buffer = [];
                        b.sd = 7500;
                        b.zb = 3E4;
                        b.vb();
                        return b
                    }
                    dd(c, a);
                    c.prototype.push = function(b, d) {
                        var e = this.$.Ga(b, d);
                        ya(this.buffer, e);
                        this.$.Oa(this.buffer) > this.sd && this.flush()
                    };
                    c.prototype.flush = function() {
                        var b = this.buffer;
                        b.length && (this.send(b), this.buffer = [])
                    };
                    return c
                }(Sj),
                Hl = /opera mini/i,
                Tj = "first(-|\\.|_|\\s){0,2}name last(-|\\.|_|\\s){0,2}name zip postal phone address passport (bank|credit)(-|\\.|_|\\s){0,2}card card(-|\\.|_|\\s){0,2}number card(-|\\.|_|\\s){0,2}holder cvv card(-|\\.|_|\\s){0,2}exp card(-|\\.|_|\\s){0,2}name card.*month card.*year card.*month card.*year password email birth(-|\\.|_|\\s){0,2}(day|date) second(-|\\.|_|\\s){0,2}name third(-|\\.|_|\\s){0,2}name patronymic middle(-|\\.|_|\\s){0,2}name birth(-|\\.|_|\\s){0,2}place house street city flat state contact.*".split(" "),
                Ml = ["email", "tel"],
                Pl = /ym-hide-content/,
                Ql = /ym-show-content/,
                Nl = new RegExp("(" + I("|", Tj) + ")", "i"),
                Zi = ["password", "passwd", "pswd"],
                Ol = new RegExp("(" + I("|", Tj.concat("\u0438\u043c\u044f \u0444\u0430\u043c\u0438\u043b\u0438\u044f \u043e\u0442\u0447\u0435\u0441\u0442\u0432\u043e \u0438\u043d\u0434\u0435\u043a\u0441 \u0442\u0435\u043b\u0435\u0444\u043e\u043d \u0430\u0434\u0440\u0435\u0441 \u043f\u0430\u0441\u043f\u043e\u0440\u0442 \u043d\u043e\u043c\u0435\u0440(-|\\.|_|\\s){0,2}\u043a\u0430\u0440\u0442\u044b \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u0430\u044f(-|\\.|_|\\s){0,2}\u043f\u043e\u0447\u0442\u0430 \u0434\u0430\u0442\u0430(-|\\.|_|\\s){0,2}\u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f \u0434\u043e\u043c \u0443\u043b\u0438\u0446\u0430 \u043a\u0432\u0430\u0440\u0442\u0438\u0440\u0430 \u0433\u043e\u0440\u043e\u0434 \u043e\u0431\u043b\u0430\u0441\u0442\u044c".split(" "))) +
                    ")", "i"),
                Ba = "metrikaId_" + Math.random(),
                ac = {
                    Cb: 0
                },
                Fo = t(function() {
                    var a;
                    return a = {}, a.A = 1, a.ABBR = 2, a.ACRONYM = 3, a.ADDRESS = 4, a.APPLET = 5, a.AREA = 6, a.B = 7, a.BASE = 8, a.BASEFONT = 9, a.BDO = 10, a.BIG = 11, a.BLOCKQUOTE = 12, a.BODY = 13, a.BR = 14, a.BUTTON = 15, a.CAPTION = 16, a.CENTER = 17, a.CITE = 18, a.CODE = 19, a.COL = 20, a.COLGROUP = 21, a.DD = 22, a.DEL = 23, a.DFN = 24, a.DIR = 25, a.DIV = 26, a.DL = 27, a.DT = 28, a.EM = 29, a.FIELDSET = 30, a.FONT = 31, a.FORM = 32, a.FRAME = 33, a.FRAMESET = 34, a.H1 = 35, a.H2 = 36, a.H3 = 37, a.H4 = 38, a.H5 = 39, a.H6 = 40, a.HEAD = 41, a.HR = 42, a.HTML =
                        43, a.I = 44, a.IFRAME = 45, a.IMG = 46, a.INPUT = 47, a.INS = 48, a.ISINDEX = 49, a.KBD = 50, a.LABEL = 51, a.LEGEND = 52, a.LI = 53, a.LINK = 54, a.MAP = 55, a.MENU = 56, a.META = 57, a.NOFRAMES = 58, a.NOSCRIPT = 59, a.OBJECT = 60, a.OL = 61, a.OPTGROUP = 62, a.OPTION = 63, a.P = 64, a.PARAM = 65, a.PRE = 66, a.Q = 67, a.S = 68, a.SAMP = 69, a.SCRIPT = 70, a.SELECT = 71, a.SMALL = 72, a.SPAN = 73, a.STRIKE = 74, a.STRONG = 75, a.STYLE = 76, a.SUB = 77, a.SUP = 78, a.TABLE = 79, a.TBODY = 80, a.TD = 81, a.TEXTAREA = 82, a.TFOOT = 83, a.TH = 84, a.THEAD = 85, a.TITLE = 86, a.TR = 87, a.TT = 88, a.U = 89, a.UL = 90, a.VAR = 91, a.NOINDEX =
                        100, a
                }),
                Eq = function() {
                    var a = "first(-|\\.|_|\\s){0,2}name last(-|\\.|_|\\s){0,2}name zip postal phone address passport (bank|credit)(-|\\.|_|\\s){0,2}card card(-|\\.|_|\\s){0,2}number card(-|\\.|_|\\s){0,2}holder cvv card(-|\\.|_|\\s){0,2}exp card(-|\\.|_|\\s){0,2}name card.*month card.*year card.*month card.*year password email birth(-|\\.|_|\\s){0,2}(day|date) second(-|\\.|_|\\s){0,2}name third(-|\\.|_|\\s){0,2}name patronymic middle(-|\\.|_|\\s){0,2}name birth(-|\\.|_|\\s){0,2}place house street city flat state".split(" ");
                    return {
                        rf: new RegExp("(" + I("|", a) + ")", "i"),
                        Nf: new RegExp("(" + I("|", a.concat("\u0438\u043c\u044f;\u0444\u0430\u043c\u0438\u043b\u0438\u044f;\u043e\u0442\u0447\u0435\u0441\u0442\u0432\u043e;\u0438\u043d\u0434\u0435\u043a\u0441;\u0442\u0435\u043b\u0435\u0444\u043e\u043d;\u0430\u0434\u0440\u0435\u0441;\u043f\u0430\u0441\u043f\u043e\u0440\u0442;\u041d\u043e\u043c\u0435\u0440(-|\\.|_|\\s){0,2}\u043a\u0430\u0440\u0442\u044b;\u0434\u0430\u0442\u0430(-|\\.|_|\\s){0,2} \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f;\u0434\u043e\u043c;\u0443\u043b\u0438\u0446\u0430;\u043a\u0432\u0430\u0440\u0442\u0438\u0440\u0430;\u0433\u043e\u0440\u043e\u0434;\u043e\u0431\u043b\u0430\u0441\u0442\u044c".split(";"))) +
                            ")", "i"),
                        nf: /ym-record-keys/i,
                        oe: "\u2022",
                        If: 88
                    }
                }(),
                dj = bb(u(Eq.oe, O)),
                Kc = !0,
                Af = "",
                Bf = !1,
                Cf = !0,
                Df = !1,
                Kl = ja(function(a, c) {
                    var b = D([a, "efv." + c.event], A);
                    c.H = z(q(O, b), c.H);
                    return c
                }),
                Fq = t(function(a) {
                    var c = [],
                        b = [],
                        d = [];
                    a.document.attachEvent && !a.opera && (c.push(Ee), b.push(Jo), b.push(Ko));
                    a.document.addEventListener ? c.push(bj) : (b.push(aj), d.push(bj));
                    c = Z([{
                        target: a,
                        type: "window",
                        event: "beforeunload",
                        H: [E]
                    }, {
                        target: a,
                        type: "window",
                        event: "unload",
                        H: [E]
                    }, {
                        event: "click",
                        H: [Jc]
                    }, {
                        event: "dblclick",
                        H: [Jc]
                    }, {
                        event: "mousedown",
                        H: [Jc]
                    }, {
                        event: "mouseup",
                        H: [Mo]
                    }, {
                        event: "keydown",
                        H: [No]
                    }, {
                        event: "keypress",
                        H: [Oo]
                    }, {
                        event: "copy",
                        H: [fj]
                    }, {
                        event: "blur",
                        H: c
                    }, {
                        event: "focusin",
                        H: b
                    }, {
                        event: "focusout",
                        H: d
                    }], !a.document.attachEvent || a.opera ? [{
                        target: a,
                        type: "window",
                        event: "focus",
                        H: [Ng]
                    }, {
                        target: a,
                        type: "window",
                        event: "blur",
                        H: [Ee]
                    }] : [], a.document.addEventListener ? [{
                        event: "focus",
                        H: [aj]
                    }, {
                        event: "change",
                        H: [cj]
                    }, {
                        event: "submit",
                        H: [hj]
                    }] : [{
                        type: "formInput",
                        event: "change",
                        H: [cj]
                    }, {
                        type: "form",
                        event: "submit",
                        H: [hj]
                    }]);
                    return Kg(a, c)
                }),
                Il =
                t(function(a) {
                    return Z(cc(a) ? [{
                        target: a,
                        type: "document",
                        event: "mouseleave",
                        H: [Po]
                    }] : [])
                }),
                Gq = ["submit", "beforeunload", "unload"],
                Hq = t(function(a, c) {
                    var b = c(a);
                    return N(function(d, e) {
                        d[e.type + ":" + e.event] = e.H;
                        return d
                    }, {}, b)
                }),
                Jl = /^\s*function submit\(\)/,
                Fg = 0,
                Ce = {
                    x: 0,
                    y: 0
                },
                Eg = 0,
                Be = {
                    x: 0,
                    y: 0
                },
                ze = {},
                Uj = t(function(a) {
                    var c = Z([{
                        event: "mousemove",
                        H: [Cl]
                    }, {
                        target: a,
                        type: "window",
                        event: "scroll",
                        H: [Ag]
                    }, {
                        event: "onmousewheel" in a.document ? "mousewheel" : "wheel",
                        H: [Bl]
                    }, {
                        target: a,
                        type: "window",
                        event: "beforeunload",
                        H: [Dg]
                    }], nj(a) ? [{
                        target: a,
                        type: "window",
                        event: "unload",
                        H: [Dg]
                    }] : [], [{
                        target: a,
                        type: "window",
                        event: "resize",
                        H: [Al]
                    }, {
                        event: "touchmove",
                        H: [zg]
                    }, {
                        event: "touchstart",
                        H: [zg]
                    }], a.document.addEventListener ? [{
                        event: "scroll",
                        H: [zl]
                    }] : []);
                    return Z(Fq(a), Kg(a, c))
                }),
                Iq = u(Uj, function(a, c, b, d) {
                    return Hq(c, a)[b + ":" + d] || []
                }),
                Jq = t(function(a) {
                    return Z(Gq, ["beforeunload"], nj(a) ? ["unload"] : [])
                }),
                Kq = B("wv.p", function(a, c) {
                    var b;
                    if (!(b = !c.od)) {
                        var d = G(a),
                            e = !1;
                        b = d.o("hitParam", {});
                        var f = M(c);
                        b[f] && (d = d.o("counters", {}),
                            e = !(!Wi(c.R) || d[f]));
                        b[f] = 1;
                        b = e
                    }
                    if (b) return H.resolve(E);
                    b = new Dq(a, Iq);
                    return Dl(a, c, b, Uj, Jq(a))
                });
            (function(a) {
                function c(b, d, e, f) {
                    void 0 === f && (f = 0);
                    d = a.call(this, b, d, e) || this;
                    d.ec = 0;
                    d.La = 0;
                    d.dc = 0;
                    d.buffer = [];
                    d.zb = 2E3;
                    d.V = Oe(b);
                    d.vb();
                    d.dc = f;
                    return d
                }
                dd(c, a);
                c.prototype.Ac = function(b) {
                    return U(Boolean, this.V.T("ag", b))
                };
                c.prototype.zc = function(b, d) {
                    var e = this;
                    b(ib(A(this.l, "wv2.b.st"), function(f) {
                        e.send(f, d)
                    }))
                };
                c.prototype.ye = function(b, d) {
                    var e = this;
                    Sa(this.l, this.uc);
                    var f = Math.ceil(this.$.Oa(d) /
                            63E4),
                        g = this.$.dd(d, f);
                    C(function(h, k) {
                        var l, m = y({}, b, (l = {}, l.data = h, l.partNum = k + 1, l.end = k + 1 === f, l));
                        l = e.$.ra([m], !1);
                        e.zc(l, [m])
                    }, g);
                    this.vb()
                };
                c.prototype.send = function(b, d) {
                    var e = this;
                    this.V.T("se", d);
                    return a.prototype.send.call(this, b, d).then(O, function() {
                        e.V.T("see", d)
                    })
                };
                c.sf = function(b, d, e, f, g) {
                    c.Ab["" + b + d] || (this.Ab[d] = new c(g, f, e, "m" === d ? 31457280 : 0));
                    return this.Ab[d]
                };
                c.prototype.fe = function() {
                    return this.dc && this.ec >= this.dc
                };
                c.prototype.push = function(b) {
                    var d = this;
                    if (!this.fe()) {
                        this.V.T("p",
                            b);
                        var e = this.$.Ga(b),
                            f = this.$.Oa(e);
                        7E5 < f ? this.ye(b, e) : (e = this.Ac(this.buffer.concat([b])), e = N(function(g, h) {
                            return g + d.$.Oa(d.$.Ga(h))
                        }, 0, e), this.La + e + f >= 7E5 * .7 && this.flush(), this.buffer.push(b), this.La += f)
                    }
                };
                c.prototype.F = function(b, d) {
                    this.V.F([b], d)
                };
                c.prototype.qb = function(b, d) {
                    this.V.qb([b], d)
                };
                c.prototype.flush = function() {
                    var b = this.buffer.concat(this.Ac(this.buffer));
                    if (b.length) {
                        this.buffer = [];
                        this.ec += this.La;
                        this.La = 0;
                        var d = this.$.ra(b);
                        this.zc(d, b)
                    }
                };
                return c
            })(Sj).Ab = {};
            var jl = q(da,
                    Tc),
                Vj = t(function(a) {
                    var c = G(a),
                        b = c.o("isEU");
                    if (X(b)) {
                        var d = Ka(zd(a, "is_gdpr") || "");
                        if (K(d, [0, 1])) c.C("isEU", d), b = !!d;
                        else if (a = Ja(a).o("wasSynced"), a = n(a, "params.eu")) c.C("isEU", a), b = !!a
                    }
                    return b
                }, function(a) {
                    return G(a).o("isEU")
                }),
                Lq = B("i.e", Vj),
                Mq = B("i.ep", function(a) {
                    Vj(a)
                }),
                Wj = t(tc, M),
                yg = q(td, Yb),
                Xj = Nb.split("."),
                Nq = Xj.pop(),
                Yj = I(".", Xj),
                Zj = qa.ua + "//" + Nb + "/metrika/metrika_match.html",
                ak = E,
                Oq = Ub("isp.stat", function(a, c) {
                    return new H(function(b, d) {
                        if (Hn(a, Zj, "isp")) {
                            var e = function(f) {
                                ("1" ===
                                    f ? b : d)();
                                ak();
                                f = ji(Zj);
                                K("isp", f.Ca) && (f.Ca = U(q(oa("isp"), Sb), f.Ca), f.Ca.length || (Xb(f.Aa), f.Aa = null))
                            };
                            ak = fa(a).F(a, ["message"], D([a, c, e], yl));
                            ca(a, e, 1500)
                        } else d()
                    })
                }),
                Pq = Ub("isp", function(a, c) {
                    pa(c, function(b) {
                        var d = Lb(function(g) {
                            return n(b, "settings." + g)
                        }, ["rt", "mf"]);
                        if (d && gd(a)) {
                            var e = Xg(b) && !pd(a),
                                f = Wj(c);
                            y(f, {
                                rb: d,
                                status: e ? 3 : 4
                            });
                            if (!e) return d = xl(a, c, d), e = function(g) {
                                f.status = g
                            }, Oq(a, d).then(u(1, e))["catch"](u(2, e))
                        }
                    })["catch"](A(a, "l.isp"))
                }),
                Qq = B("p.e", function(a, c) {
                    var b = wa(a, c);
                    if (b) {
                        var d =
                            G(a);
                        b = b.params;
                        var e = A(a, "h.ee", D([a, M(c), b], ul));
                        return c.Eb ? (d.C("ecs", 0), ug(a, c.Eb, e)) : pa(c, function(f) {
                            if (f = n(f, "settings.ecommerce")) return d.C("ecs", 1), ug(a, f, e)
                        })
                    }
                }),
                bk = B("fbq.o", function(a, c, b) {
                    var d = n(a, "fbq");
                    if (d && d.callMethod) {
                        var e = function() {
                            var g = va(arguments),
                                h = d.apply(void 0, g);
                            c(g);
                            return h
                        };
                        y(e, d);
                        b && C(c, b);
                        a.fbq = e
                    } else var f = ca(a, D([a, c, Z(Fa(d && d.queue))], bk), 1E3, "fbq.d");
                    return L(Sa, null, a, f)
                }),
                Bc, ob, Cc, Tf = (Bc = {}, Bc.add_to_wishlist = "add-to-wishlist", Bc.begin_checkout = "begin-checkout",
                    Bc.generate_lead = "submit-lead", Bc.add_payment_info = "add-payment-info", Bc),
                Uf = (ob = {}, ob.AddToCart = "add-to-cart", ob.Lead = "submit-lead", ob.InitiateCheckout = "begin-checkout", ob.Purchase = "purchase", ob.CompleteRegistration = "register", ob.Contact = "submit-contact", ob.AddPaymentInfo = "add-payment-info", ob.AddToWishlist = "add-to-wishlist", ob.Subscribe = "subscribe", ob),
                sl = (Cc = {}, Cc["1"] = Tf, Cc["2"] = Tf, Cc["3"] = Tf, Cc["0"] = Uf, Cc),
                tl = [Uf.AddToCart, Uf.Purchase],
                Rq = ja(function(a, c) {
                    var b = n(c, "ecommerce"),
                        d = n(c, "event") ||
                        "";
                    if (!(b = b && d && {
                            version: "3",
                            fb: d
                        })) a: {
                        if (aa(c) || Aa(c))
                            if (b = va(c), d = b[1], "event" === b[0] && d) {
                                b = {
                                    version: "2",
                                    fb: d
                                };
                                break a
                            } b = void 0
                    }
                    b || (b = (b = n(c, "ecommerce")) && {
                        version: "1",
                        fb: I(",", da(b))
                    });
                    b && a(b)
                }),
                Sq = B("ag.e", function(a, c) {
                    var b = [],
                        d = A(a, "ag.s", D([ea, b], C));
                    "0" === c.R && pa(c, function(e) {
                        if (n(e, "settings.auto_goals") && wa(a, c) && (e = Hd(a, c, "autogoal").reachGoal)) {
                            e = D([e, c.Eb], rl);
                            var f = Rq(e);
                            e = D([a, e], ql);
                            b.push(bk(a, e));
                            b.push(vg(a, "dataLayer", function(g) {
                                g.pb.F(f)
                            }))
                        }
                    });
                    return d
                }),
                Tq = /[^\d.,]/g,
                Uq =
                /[.,]$/,
                ol = B("ep.pp", function(a, c) {
                    if (!c) return 0;
                    a: {
                        var b = c.replace(Tq, "").replace(Uq, "");
                        var d = "0" === b[b.length - 1];
                        for (var e = b.length; 0 < e && !(3 < b.length - e + 1 && d); --e) {
                            var f = b[e - 1];
                            if (K(f, [",", "."])) {
                                d = f;
                                break a
                            }
                        }
                        d = ""
                    }
                    b = d ? c.split(d) : [c];
                    d = d ? b[1] : "00";
                    b = parseFloat(yb(b[0]) + "." + yb(d));
                    d = Math.pow(10, 8) - .01;
                    a.isNaN(b) ? b = 0 : (b = a.Math.min(b, d), b = a.Math.max(b, 0));
                    return b
                }),
                Vq = [
                    [
                        ["EUR", "\u20ac"], "978"
                    ],
                    [
                        ["USD", "\u0423\\.\u0415\\.", "\\$"], "840"
                    ],
                    [
                        ["UAH", "\u0413\u0420\u041d", "\u20b4"], "980"
                    ],
                    ["\u0422\u0413 KZT \u20b8 \u0422\u04a2\u0413 TENGE \u0422\u0415\u041d\u0413\u0415".split(" "),
                        "398"
                    ],
                    [
                        ["GBP", "\u00a3", "UKL"], "826"
                    ],
                    ["RUR RUB \u0420 \u0420\u0423\u0411 \u20bd P \u0420UB P\u0423\u0411 P\u0423B PY\u0411 \u0420Y\u0411 \u0420\u0423B P\u0423\u0411".split(" "), "643"]
                ],
                Wq = t(function(a) {
                    return new RegExp(a.join("|"), "i")
                }),
                Xq = B("ep.cp", function(a) {
                    if (!a) return "643";
                    var c = oh(a);
                    return (a = Lb(function(b) {
                        return Wq(b[0]).test(c)
                    }, Vq)) ? a[1] : "643"
                }),
                Yq = t(function() {
                    function a() {
                        var k = h + "0",
                            l = h + "1";
                        f[k] ? f[l] ? (h = h.slice(0, -1), --g) : (e[l] = b(8), f[l] = 1) : (e[k] = b(8), f[k] = 1)
                    }

                    function c() {
                        var k = h +
                            "1";
                        f[h + "0"] ? f[k] ? (h = h.slice(0, -1), --g) : (h += "1", f[h] = 1) : (h += "0", f[h] = 1)
                    }

                    function b(k) {
                        void 0 === k && (k = 1);
                        var l = d.slice(g, g + k);
                        g += k;
                        return l
                    }
                    for (var d = rg("Cy2FcreLJLpYXW3BXFJqldVsGMwDcBw2BGnHL5uj1TKstzse3piMo3Osz+EqDotgqs1TIoZvKtMKDaSRFztgUS8qkqZcaETgKWM54tCpTXjV5vW5OrjBpC0jF4mspUBQGd95fNSfv+vz+g+Hze33Hg8by+Yen1PP6zsdl7PQCwX9mf+f7FMb9x/Pw+v2Pp8Xy74eTwuBwTt913u4On1XW6hxOO5nIzFam00tC218S0kaeugpqST+XliLOlMoTpRQkuewUxoy4CT3efWtdFjSAAm+1BkjIhyeU4vGOf13a6U8wzNY4bGo6DIUemE7N3SBojDr7ezXahpWF022y8mma1NuTnZbq8XZZlPStejfG/CsbPhV6/bSnA==").join(""),
                            e = {}, f = {}, g = 1, h = ""; g < d.length - 1;)("0" === b() ? c : a)();
                    return e
                }),
                ll = B("ep.dec", function(a, c) {
                    if (!c || sd(a)) return [];
                    var b = rg(c),
                        d = b[1],
                        e = b[2],
                        f = b.slice(3);
                    if (2 !== Ef(b[0])) return [];
                    b = Yq();
                    f = f.join("");
                    e = Ef(d + e);
                    var g = "";
                    d = "";
                    for (var h = 0; d.length < e && f[h];) g += f[h], b[g] && (d += String.fromCharCode(Ef(b[g])), g = ""), h += 1;
                    b = "";
                    for (f = 0; f < d.length;) e = d.charCodeAt(f), 128 > e ? (b += String.fromCharCode(e), f++) : 191 < e && 224 > e ? (g = d.charCodeAt(f + 1), b += String.fromCharCode((e & 31) << 6 | g & 63), f += 2) : (g = d.charCodeAt(f + 1), b += String.fromCharCode((e &
                        15) << 12 | (g & 63) << 6 | d.charCodeAt(f + 2) & 63), f += 3);
                    d = sb(a, b);
                    return aa(d) ? z(to, d) : []
                }),
                nl = B("ep.ent", function(a, c, b) {
                    a = "" + Xa(a, 10, 99);
                    b = "" + 100 * c + b + a;
                    if (16 < Aa(b)) return "";
                    b = sg("0", 16, b);
                    c = b.slice(0, 8);
                    b = b.slice(-8);
                    c = (+c ^ 92844).toString(35);
                    b = (+b ^ 92844).toString(35);
                    return "" + c + "z" + b
                }),
                ck = q(qg, Xq),
                dk = B("ep.ctp", function(a, c, b, d) {
                    var e = ck(a, b),
                        f = pg(a, d);
                    og(a, c, e, f);
                    za("MutationObserver", a.MutationObserver) && (new a.MutationObserver(function() {
                        var g = ck(a, b),
                            h = pg(a, d);
                        if (e !== g || f !== h) e = g, f = h, og(a, c, e, f)
                    })).observe(a.document.body, {
                        attributes: !0,
                        childList: !0,
                        subtree: !0,
                        characterData: !0
                    })
                }),
                Zq = B("ep.chp", function(a, c, b, d, e) {
                    b && xe(a, c);
                    return d || e ? fa(a).F(a.document, ["click"], A(a, "ep.chp.cl", D([a, c, d, e], ml))) : E
                }),
                dr = B("ep.i", function(a, c) {
                    return Yc(a) ? kl(a, c).then(function(b) {
                        var d = b.Md,
                            e = d[0],
                            f = d[1],
                            g = d[2],
                            h = d[3],
                            k = d[4],
                            l = d[5],
                            m = d[6],
                            p = d[7],
                            r = d[8],
                            v = d[9],
                            x = d[10],
                            w = d[11],
                            J = d[12],
                            P = d[13],
                            ha = d[14],
                            Ia = d[15];
                        if (!b.isEnabled) return H.resolve(E);
                        var ma = ud(a, e),
                            Ac = ud(a, h),
                            Pf = ud(a, m),
                            $q = ud(a, r),
                            ar = "" + e + f + g === "" + h + k + l;
                        return new H(function(br,
                            cr) {
                            Pc(a)(ib(cr, function() {
                                ma && dk(a, c, f, g, x, w, J);
                                Ac && !ar && dk(a, c, k, l, P, ha, Ia);
                                br(Zq(a, c, Pf || $q, p, v))
                            }))
                        })
                    }) : H.resolve(E)
                }),
                Rk = ["RTCPeerConnection", "mozRTCPeerConnection", "webkitRTCPeerConnection"],
                er = B("cc.i", function(a, c) {
                    var b = D([a, c], il);
                    b = D([a, b, 300, void 0], ca);
                    pa(c, b)
                }),
                fr = u("9-d5ve+.r%7", O),
                gr = B("ad", function(a, c) {
                    if (!c.Ba) {
                        var b = G(a);
                        if (!b.o("adBlockEnabled")) {
                            var d = function(m) {
                                    K(m, ["2", "1"]) && b.C("adBlockEnabled", m)
                                },
                                e = $b(a),
                                f = e.o("isad");
                            if (f) d(f);
                            else {
                                var g = u("adStatus", b.C),
                                    h = function(m) {
                                        m =
                                            m ? "1" : "2";
                                        d(m);
                                        g("complete");
                                        e.C("isad", m, 1200);
                                        return m
                                    },
                                    k = ra(a, "adb", c);
                                if (!b.o("adStatus")) {
                                    g("process");
                                    var l = "metrika/a" + fr().replace(/[^a-v]+/g, "") + "t.gif";
                                    fl(a, function() {
                                        return k({
                                            ba: {
                                                qa: l
                                            }
                                        }).then(u(!1, h))["catch"](u(!0, h))
                                    })
                                }
                            }
                        }
                    }
                }),
                hr = B("pr.p", function(a, c) {
                    var b, d;
                    if (kf(a)) {
                        var e = ra(a, "5", c),
                            f = sa((b = {}, b.pq = 1, b.ar = 1, b));
                        e({
                            G: f,
                            D: (d = {}, d["page-url"] = Q(a).href, d["page-ref"] = n(a, "document.referrer") || "", d)
                        }, c)["catch"](A(a, "pr.p.s"))
                    }
                }),
                ng = !1,
                ir = B("fid", function(a) {
                    var c, b = E;
                    if (!S(a.PerformanceObserver)) return b;
                    var d = G(a);
                    if (d.o("fido")) return b;
                    d.C("fido", !0);
                    var e = new a.PerformanceObserver(A(a, "fid", function(f) {
                        f = f.getEntries()[0];
                        d.C("fid", a.Math.round(100 * (f.processingStart - f.startTime)));
                        b()
                    }));
                    b = function() {
                        return e.disconnect()
                    };
                    try {
                        e.observe((c = {}, c.type = "first-input", c.buffered = !0, c))
                    } catch (f) {}
                    return b
                }),
                ek = {
                    1882689622: 1,
                    2318205080: 1,
                    3115871109: 1,
                    3604875100: 1,
                    339366994: 1,
                    2890452365: 1,
                    849340123: 1,
                    173872646: 1,
                    2343947156: 1,
                    655012937: 1,
                    3724710748: 1,
                    3364370932: 1,
                    1996539654: 1,
                    2065498185: 1,
                    823651274: 1,
                    12282461: 1,
                    1555719328: 1,
                    1417229093: 1,
                    138396985: 1
                },
                jr = t(function() {
                    return N(function(a, c) {
                        var b = Yb(c + "/watch.js");
                        ek[b] || (a[b] = 1);
                        return a
                    }, {}, ["mc.yandex.ru", "mc.yandex.com", "cdn.jsdelivr.net/npm/yandex-metrica-watch"])
                }),
                kr = B("p.sci", function(a, c) {
                    var b = G(a);
                    return b.o("scip") ? H.resolve() : pa(c, O).then(function(d) {
                        d = n(d, "settings.ins");
                        return !b.o("scip") && d ? dl(a, c, b) : null
                    }, A(a, "ins.cs"))
                }),
                lr = B("lt.p", Ub("lt.p", function(a) {
                    var c;
                    if (za("PerformanceObserver", a.PerformanceObserver)) {
                        var b = 0,
                            d = new a.PerformanceObserver(A(a,
                                "lt.o",
                                function(e) {
                                    e && e.getEntries && (e = e.getEntries(), b = N(function(f, g) {
                                        return f + g.duration
                                    }, b, e), cd(a).C("lt", b))
                                }));
                        try {
                            d.observe((c = {}, c.type = "longtask", c.buffered = !0, c))
                        } catch (e) {
                            return E
                        }
                        return function() {
                            return d.disconnect()
                        }
                    }
                    return E
                })),
                mr = t(q(R("performance.memory.jsHeapSizeLimit"), na("concat", ""))),
                nr = ["availWidth", "availHeight", "availTop"],
                or = "appName vendor deviceMemory hardwareConcurrency maxTouchPoints appVersion productSub appCodeName vendorSub".split(" "),
                pr = ["webgl", "experimental-webgl"],
                al = [-.2, -.9, 0, .4, -.26, 0, 0, .732134444, 0],
                se = u(Na("ccf"), Wa),
                $k = "prefers-reduced-motion;prefers-reduced-transparency;prefers-color-scheme: dark;prefers-color-scheme: light;pointer: none;pointer: coarse;pointer: fine;any-pointer: none;any-pointer: coarse;any-pointer: fine;scan: interlace;scan: progressive;color-gamut: srgb;color-gamut: p3;color-gamut: rec2020;update: fast;update: slow;update: none;grid: 0;grid: 2;hover: hover;inverted-colors: inverted;inverted-colors: none".split(";"),
                lg = "video/ogg video/mp4 video/webm audio/x-aiff audio/x-m4a audio/mpeg audio/aac audio/wav audio/ogg audio/mp4".split(" "),
                Yk = "theora vorbis 1 avc1.4D401E mp4a.40.2 vp8.0 mp4a.40.5".split(" "),
                Tk = t(jh),
                kg = t(sb, lb),
                qr = B("phc.p", function(a, c) {
                    return Fj(a) ? E : pa(c, function(b) {
                        var d = c.id,
                            e = gc(a, void 0, d),
                            f = e.o("phc_settings") || "";
                        if (b = n(b, "settings.phchange")) {
                            var g = hb(a, b) || "";
                            g !== f && e.C("phc_settings", g)
                        } else f && (b = kg(a, f));
                        e = n(b, "clientId");
                        f = n(b, "orderId");
                        b = n(b, "phones") || [];
                        e && f && b.length && (f = {
                            Ma: "",
                            Ta: "",
                            cd: 0,
                            Z: {},
                            ea: [],
                            Ic: !1,
                            Fb: !0,
                            l: a,
                            sc: c
                        }, y(f, {
                            Ic: !0
                        }), jg(a, d, f), b = Oc(a), e = lh(a, b, 1E3), d = L(jg, null, a, d, f), e.F(d), mh(a,
                            b))
                    })
                }),
                Vf = t(function(a, c) {
                    var b = G(a),
                        d = Ja(a),
                        e = [],
                        f = D([a, c, b, d], vm);
                    Mc(a) || wm(a, "14.1") || e.push(D([Qk, "pp", ""], f));
                    var g = Ij(a) && !qe(a, 68);
                    g || e.push(D([Sk, "pu", ""], f));
                    g || d.Mb || gd(a) || (e.push(D([Pk, "zzlc", "na"], f)), e.push(D([Ok, "cc", ""], f)));
                    return e.length ? {
                        fa: function(h, k) {
                            if (0 === b.o("isEU")) try {
                                C(wg, e)
                            } catch (l) {}
                            k()
                        },
                        N: function(h, k) {
                            var l = h.G;
                            if (l && 0 === b.o("isEU")) try {
                                C(Ha(l), e)
                            } catch (m) {}
                            k()
                        }
                    } : {}
                }, function(a, c) {
                    return M(c)
                }),
                rr = q(function(a) {
                    a = n(a, "navigator.plugins") || [];
                    return Aa(a) ? q(Fa, jc(Boolean),
                        Ro(function(c, b) {
                            return c.name > b.name ? 1 : 2
                        }), bb(bl))(a) : ""
                }, Gc(",")),
                sr = function(a) {
                    return function(c) {
                        var b = jb(c);
                        if (!b) return "";
                        b = b("canvas");
                        var d = [],
                            e = a(),
                            f = e.Pd;
                        e = e.Ld;
                        try {
                            var g = na("getContext", b);
                            d = z(q(O, g), e)
                        } catch (h) {
                            return ""
                        }
                        return (g = Lb(O, d)) ? f(c, {
                            canvas: b,
                            Ed: g
                        }) : ""
                    }
                }(function() {
                    return {
                        Ld: pr,
                        Pd: Kk
                    }
                }),
                Ik = ["name", "lang", "localService", "voiceURI", "default"],
                tr = B("p.tfs", function(a) {
                    var c = G(a);
                    if (!c.o("tfs")) {
                        c.C("tfs", !0);
                        c = fa(a);
                        var b = E;
                        b = c.F(a, ["message"], function(d) {
                            try {
                                var e = d.origin
                            } catch (h) {}
                            if (e &&
                                "https://iframe-toloka.com" === e && (d = sb(a, d.data), Da(d) && "appendremote" === d.action))
                                if (d = Ja(a), d.o("tfsc") || a.confirm("\u0414\u043e\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435 \u201c\u0420\u0430\u0437\u043c\u0435\u0442\u043a\u0430 \u0441\u0430\u0439\u0442\u043e\u0432\u201c \u043e\u0442 toloka.ai \u0437\u0430\u043f\u0440\u0430\u0448\u0438\u0432\u0430\u0435\u0442 \u0434\u043e\u0441\u0442\u0443\u043f \u043a \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u043c\u0443 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b. \u0420\u0430\u0437\u0440\u0435\u0448\u0438\u0442\u044c?")) {
                                    d.C("tfsc",
                                        1);
                                    var f, g;
                                    G(a).C("_u", (f = {}, f.getCachedTags = Je, f.button = (g = {}, g.closest = u(a, Ke), g.select = Le, g.getData = u(a, Me), g), f));
                                    ic(a, {
                                        src: "https://yastatic.net/s3/metrika/2.1540128042.1/form-selector/button_ru.js"
                                    });
                                    b()
                                } else a.close()
                        })
                    }
                }),
                ur = Pa(/[a-z\u0430-\u044f,.]/gi),
                vr = B("ice", function(a, c, b) {
                    var d = wa(a, c);
                    if (d) {
                        var e = n(b, "target");
                        if (e && (c = n(e, "value"), (c = db(c)) && !(100 <= Aa(c)))) {
                            b = yb(c);
                            var f = 0 < c.indexOf("@"),
                                g = "tel" === n(e, "type") || !f && Aa(b);
                            if (f || g) {
                                if (g) {
                                    if (ur(c)) return;
                                    g = c[0];
                                    var h = b[0];
                                    if (g !== h &&
                                        "+" !== g) return;
                                    var k = c[1];
                                    if ("+" === g && k !== h) return;
                                    c = c[Aa(c) - 1];
                                    g = b[Aa(b) - 1];
                                    if (c !== g) return;
                                    c = b
                                }
                                b = f ? 5 : 11;
                                g = f ? 100 : 16;
                                Aa(c) < b || Aa(c) > g || Ih(a, c).then(function(l) {
                                    var m, p, r, v = ff(a, e);
                                    d.params((m = {}, m.__ym = (p = {}, p.fi = ti((r = {}, r.a = f ? 1 : 0, r.b = v, r.c = l, r)).ra(), p), m))
                                }, A(a, "ice.s"))
                            }
                        }
                    }
                }),
                wr = ["text", "email", "tel"],
                xr = ["cc-", "name", "shipping"],
                yr = B("icei", function(a, c) {
                    if (Yc(a) && Dj(a)) {
                        var b = !1,
                            d = [];
                        Pc(a)(ib(E, D([c, function(e) {
                            var f = n(e, "settings.cf");
                            e = Lq(a) || n(e, "settings.eu");
                            if (f && !e && !b) {
                                var g = fa(a);
                                f =
                                    kb("input", a.document.body);
                                C(function(h) {
                                    Ge(a, h) || !K(h.type, wr) || Oa(O, z(u(h.autocomplete, lc), xr)) || d.push(g.F(h, ["blur"], D([a, c], vr)))
                                }, Fa(f))
                            }
                        }], pa)));
                        return function() {
                            C(ea, d);
                            b = !0
                        }
                    }
                }),
                zr = Ub("gic", yr),
                gg, Ar = B("p.ai", function(a, c) {
                    return new H(function(b) {
                        (Mc(a) || je(a)) && b(pa(c, function(d) {
                            var e;
                            return (d = n(d, "settings.sbp")) ? fg(a, y({}, d, (e = {}, e.c = c.id, e)), 10) : E
                        }));
                        b(E)
                    })
                }),
                Ib = ["0", "1", "2", "3"],
                hc = Ib[0],
                ie = Ib[1],
                Br = Ib[2],
                ne = z(q(O, na("concat", "GDPR-ok-view-detailed-")), Ib),
                od = Z("GDPR-ok GDPR-cross GDPR-cancel 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 GDPR-settings GDPR-ok-view-default GDPR-ok-view-detailed 21 22 23".split(" "),
                    ne, ["28", "29", "30"]),
                Cr = "3 13 14 15 16 17 28".split(" "),
                me = q(bb(R("ymetrikaEvent.type")), jc(Zb(od))),
                Fk = {
                    url: "https://yastatic.net/s3/gdpr/popup/v2/",
                    Lc: "ru en et fi lt lv pl fr no sr".split(" "),
                    Qc: "_two_main_buttons"
                },
                Hb, Ek = (Hb = {}, Hb["GDPR-ok"] = "ok", Hb["GDPR-ok-view-default"] = "ok-default", Hb["GDPR-ok-view-detailed"] = "ok-detailed", Hb["GDPR-ok-view-detailed-0"] = "ok-detailed-all", Hb["GDPR-ok-view-detailed-1"] = "ok-detailed-tech", Hb["GDPR-ok-view-detailed-2"] = "ok-detailed-tech-analytics", Hb["GDPR-ok-view-detailed-3"] =
                    "ok-detailed-tech-other", Hb),
                qd = [],
                ag = q(me, bb(Qo(od)), Gc(",")),
                bg = q(jc(Zb(od)), Aa, Boolean),
                wk = t(function(a, c) {
                    var b = c.o("gdpr");
                    return K(b, Ib) ? "-" + b : ""
                });
            "function" == typeof Promise && Promise.resolve();
            var fk = t(Gd),
                Dr = t(function() {
                    var a = N(function(c, b) {
                        "ru" !== b && (c[b] = Yj + "." + b);
                        return c
                    }, {}, cf);
                    C(function(c) {
                        a[c] = c
                    }, da(Lj));
                    return a
                }),
                qk = t(function(a) {
                    a = Q(a).hostname;
                    return (a = Lb(q(R("1"), kh("test"), Eb(ea)(a)), Ea(Lj))) && a[0]
                }),
                gk = function(a, c) {
                    return function(b, d) {
                        var e = M(d);
                        e = Dr(e);
                        var f = ok(b, e),
                            g =
                            G(b),
                            h = wb(b);
                        return gd(b) || $c(b) ? {} : {
                            N: function(k, l) {
                                var m = k.G,
                                    p = Zf(b);
                                m = !(m && m.o("pv"));
                                if (!p || h || m || !f.length) return l();
                                if (g.o("startSync")) fk(b).push(l);
                                else {
                                    g.C("startSync", !0);
                                    p = D([b, f, E, !1], a);
                                    m = ke[0];
                                    if (!m) return l();
                                    m(b).then(p).then(l, q(Ic(l), A(b, c)))["catch"](E)
                                }
                            }
                        }
                    }
                }(function(a, c, b, d) {
                    var e = Y(a),
                        f = G(a),
                        g = Ja(a);
                    b = Hc(a, "c");
                    var h = pb(a, b);
                    return N(function(k, l) {
                        function m() {
                            var v = g.o("synced");
                            f.C("startSync", !1);
                            v && (v[l.ke] = p, g.C("synced", v));
                            v = fk(a);
                            C(ea, v);
                            Ue(v)
                        }
                        var p, r = h({
                            M: {
                                ga: ["sync.cook"],
                                Ia: 1500
                            }
                        }, [qa.ua + "//" + l.Be + "/sync_cookie_image_check" + (d ? "_secondary" : "")]).then(function() {
                            p = e($a);
                            m()
                        })["catch"](function() {
                            p = e($a) - 1435;
                            m()
                        });
                        r = u(r, O);
                        return k.then(r)
                    }, H.resolve(), c)["catch"](A(a, "ctl"))
                }, "sy.c"),
                mk = B("destruct.e", function(a, c, b) {
                    return function() {
                        var d = G(a),
                            e = c.id;
                        C(function(f, g) {
                            return S(f) && A(a, "dest.fr." + g, f)()
                        }, b);
                        delete d.o("counters")[M(c)];
                        delete a["yaCounter" + e]
                    }
                }),
                Dc = G(window);
            Dc.sa("hitParam", {});
            Dc.sa("lastReferrer", window.location.href);
            (function() {
                T.push(function(a,
                    c) {
                    var b;
                    return b = {}, b.firstPartyParams = Kp(a, c), b.firstPartyParamsHashed = fn(a, c), b
                })
            })();
            (function() {
                var a = G(window);
                a.sa("getCounters", Lp(window));
                Ec.push(Mp);
                Hf.push(function(c, b) {
                    b.counters = a.o("getCounters")
                })
            })();
            la["1"] = Qa;
            T.push(Op);
            ka["1"] = ce;
            mb(Ch, -1);
            Ab["1"] = [
                [Ch, -1],
                [Ud, 1],
                [Wc, 2],
                [Cb(), 3]
            ];
            T.push(Pp);
            T.push(function(a, c) {
                var b, d = ra(a, "a", c);
                return b = {}, b.hit = function(e, f, g, h, k, l) {
                    var m, p, r = {
                        D: {},
                        G: sa((m = {}, m.pv = 1, m.ar = 1, m))
                    };
                    if (e) return f = Da(f) ? {
                        title: f.title,
                        Tc: f.referer,
                        O: f.params,
                        ya: f.callback,
                        l: f.ctx
                    } : {
                        title: f,
                        Tc: g,
                        O: h,
                        ya: k,
                        l: l
                    }, g = Sc(c), g.url !== e && (g.ref = g.url, g.url = e), e = e || Q(a).href, g = f.Tc || g.ref || a.document.referrer, h = tb(a, c, "PageView. Counter " + c.id + ". URL: " + e + ". Referrer: " + g, f.O), k = y(r.L || {}, {
                        O: f.O,
                        title: f.title
                    }), r = d(y(r, {
                        L: k,
                        D: y(r.D || {}, (p = {}, p["page-url"] = e, p["page-ref"] = g, p))
                    }), c).then(h), pc(a, "p.ar.s", r, f.ya || E, f.l)
                }, b
            });
            la.a = Qa;
            Ab.a = Bb;
            ka.a = ce;
            T.push(Hd);
            la.g = Qa;
            ka.g = ce;
            Ab.g = Bb;
            T.push(Qp);
            T.push(Rp);
            Ab.t = Bb;
            la.t = Qa;
            ka.t = Pb;
            T.push(Tp);
            Ab["2"] = Bb;
            la["2"] = Qa;
            ka["2"] = Pb;
            ub.push(function(a,
                c) {
                var b = Ep(a),
                    d = ra(a, "r", c),
                    e = A(a, "rts.p");
                return pa(c, L(N, null, function(f, g) {
                    var h = {
                        id: g.Id,
                        R: g.R
                    };
                    h = d({
                        M: {
                            W: g.te
                        },
                        G: sa(g.Cd),
                        D: g.O,
                        L: {
                            Va: g.Va
                        },
                        ba: {
                            qa: g.qa
                        }
                    }, h)["catch"](e);
                    return f.then(u(h, O))
                }, H.resolve(), b))["catch"](e)
            });
            T.push(Up);
            V("n", Ud, 1);
            V("n", Wc, 2);
            V("n", Cb(), 3);
            V("n", We, 100);
            la.n = Qa;
            ka.n = Pb;
            sc({
                rc: {
                    aa: "accurateTrackBounce"
                }
            });
            T.push(Vp);
            la.m = function(a, c, b) {
                return function(d, e) {
                    var f, g = d.D;
                    g = (f = {}, f["page-url"] = g && g["page-url"] || "", f);
                    f = y(d, {
                        D: y(d.D || {}, g),
                        ba: {
                            qa: "clmap/" + e.id
                        }
                    });
                    g =
                        ya(Vd(a, "cm", e), b);
                    return Zc(a, c, g)(f)["catch"](A(a, "c.m"))
                }
            };
            ka.m = Fp;
            V("m", Cb(["u", "v", "vf"]), 1);
            V("m", We, 2);
            sc({
                Gd: {
                    aa: "clickmap"
                }
            });
            T.push(Wp);
            T.push(Xp);
            T.push(Zp);
            T.push($p);
            T.push(aq);
            ub.push(cq);
            T.push(dq);
            T.push(eq);
            mb(function(a, c) {
                return {
                    fa: function(b, d) {
                        var e = wa(a, c);
                        e = e && e.userParams;
                        var f = (b.L || {}).kc;
                        e && f && e(f);
                        d()
                    }
                }
            }, 0);
            ld.push(Ip);
            T.push(hq);
            T.push(iq);
            If.push(function(a) {
                var c = G(a);
                c.o("i") || (c.C("i", !0), fa(a).F(a, ["message"], u(a, Bm)))
            });
            T.push(function(a, c) {
                var b;
                return b = {}, b.ecommerceAdd =
                    B("ecm.a", jq(a, c)), b.ecommerceRemove = B("ecm.r", kq(a, c)), b.ecommerceDetail = B("ecm.d", lq(a, c)), b.ecommercePurchase = B("ecm.p", mq(a, c)), b
            });
            (function() {
                var a, c = {};
                c.bu = vq;
                c.pri = km;
                c.ds = nm;
                c.co = function(b) {
                    return be(G(b).o("jn"))
                };
                c.td = uq;
                y(c, (a = {}, a.iss = q(bp, Gb), a.hdl = q(cp, Gb), a.iia = q(dp, Gb), a.cpf = q(ep, Gb), a.ntf = t(function(b) {
                    a: switch (n(b, "Notification.permission")) {
                        case "denied":
                            b = !1;
                            break a;
                        case "granted":
                            b = !0;
                            break a;
                        default:
                            b = null
                    }
                    return ab(b) ? null : b ? 2 : 1
                }), a.eu = ec("isEU"), a.ns = Aj, a.np = function(b) {
                    if (Xa(b,
                            0, 100)) b = null;
                    else {
                        b = db(He(b), 100);
                        for (var d = [], e = 0; e < b.length; e++) {
                            var f = b.charCodeAt(e);
                            128 > f ? d.push(f) : (127 < f && 2048 > f ? d.push(f >> 6 | 192) : (d.push(f >> 12 | 224), d.push(f >> 6 & 63 | 128)), d.push(f & 63 | 128))
                        }
                        b = Gg(d)
                    }
                    return b
                }, a));
                y(Ze, c)
            })();
            (function() {
                var a = {};
                a.oo = ec("oo");
                a.pmc = ec("cmc");
                a.lt = function(c) {
                    var b = cd(c).o("lt", null);
                    return b ? c.Math.round(100 * b) : b
                };
                a.yu = function(c) {
                    var b = Q(c);
                    return K(b.hostname, ["dzen.ru", "ya.ru"]) ? (gc(c, "").o("yandexuid") || "").substring(0, 25) : null
                };
                a.re = q(Cn, Gb);
                a.aw = function(c) {
                    c =
                        Lb(q(ta, Sb), [c.document.hidden, c.document.msHidden, c.document.webkitHidden]);
                    return ta(c) ? null : be(!c)
                };
                a.ifc = ec("ifc");
                a.ifb = ec("ifb");
                a.ecs = ec("ecs");
                a.csi = ec("scip");
                y($e, a)
            })();
            ka.er = zc;
            (function(a) {
                try {
                    var c = Hc(a, "er"),
                        b = gm(a, c);
                    Di.push(function(d, e, f, g) {
                        var h, k, l, m, p;
                        .01 >= a.Math.random() || b((h = {}, h[d] = (k = {}, k[qa.Za] = (l = {}, l[e] = (m = {}, m[f] = g ? (p = {}, p[a.location.href] = g, p) : a.location.href, m), l), k), h))
                    })
                } catch (d) {}
            })(window);
            (function() {
                ld.push(jm);
                Od.unshift(fm);
                Hj.push(function(a) {
                    var c = void 0;
                    void 0 === c && (c = !0);
                    G(a).C("oo", c)
                })
            })();
            mb(function(a, c) {
                return {
                    N: function(b, d) {
                        var e = b.D,
                            f = b.G;
                        !Mj[c.id] && f.o("pv") && c.exp && !e.nohit && (e.exp = c.exp, Mj[c.id] = !0);
                        d()
                    }
                }
            }, -99);
            T.push(xq);
            Ab.e = Bb;
            la.e = Qa;
            ka.e = Pb;
            sc({
                exp: {
                    aa: "experiments"
                }
            });
            Ti.experiments = "ex";
            (function() {
                var a;
                ke.push(yq);
                la.f = Qa;
                y(ka, (a = {}, a.f = Cj, a));
                V("f", Cb(), 1);
                V("f", Yh, 2)
            })();
            ld.push(function(a, c) {
                var b = {
                        na: M(c),
                        Db: wa(a, c),
                        fd: Y(a),
                        Sb: Ja(a)
                    },
                    d = b.fd($a);
                if (!b.Sb.Mb) {
                    var e = b.Sb.o("ymoo" + b.na);
                    if (e && 30 > d - e) b = b.na, delete G(a).o("counters", {})[b], Wa(Na("uws"));
                    else pa(c, zq(b))["catch"](A(a, "d.f"))
                }
            });
            (function() {
                var a, c, b = zb([Qb]);
                y(ka, (a = {}, a.s = b, a.S = b, a.u = zc, a));
                y(la, (c = {}, c.s = pb, c.S = Qa, c.u = pb, c));
                V("s");
                V("u");
                V("S", Cb(["v", "hid", "u", "vf", "rn"]), 1);
                T.push(B("s", Tl))
            })();
            la["8"] = pb;
            ka["8"] = [Rh];
            T.push(function(a, c) {
                return pa(c, function(b) {
                    var d, e = n(b, "settings.sbp");
                    return e && Vg(a, b, {
                        za: c,
                        rb: "8",
                        data: y({}, e, (d = {}, d.c = c.id, d)),
                        Pb: "cs"
                    })
                })
            });
            V("p", Cb(Nj), 1);
            la.p = function(a, c, b) {
                return function(d, e) {
                    var f, g = y({
                        G: sa()
                    }, d);
                    g.D || (g.D = {});
                    var h = g.D,
                        k = g.va;
                    k = void 0 === k ? {} : k;
                    h["wv-hit"] = h["wv-hit"] || "" + xb(a);
                    h["page-url"] = h["page-url"] || a.location.href;
                    h.wmode = "0";
                    h["wv-part"] = "0";
                    h["page-url"] = h["page-url"] || a.location.href;
                    h["wv-type"] || (h["wv-type"] = k.Gc ? "5" : "4");
                    h = {
                        ba: {
                            qa: "webvisor/" + e.id
                        },
                        M: y(g.M, {
                            Da: (f = {}, f["Content-Type"] = "text/plain", f),
                            nc: "POST"
                        }),
                        D: h
                    };
                    f = ya(Vd(a, "pub", e), b);
                    return Zc(a, c, f)(y(g, h))
                }
            };
            ka.p = zb([0, Qb]);
            ub.push(Cq);
            V("4", Cb(Nj), 1);
            la["4"] = function(a, c, b) {
                return function(d, e, f) {
                    var g;
                    d = y({
                        G: sa()
                    }, d);
                    d.D || (d.D = {});
                    var h = d.D,
                        k = d.va;
                    k = void 0 === k ? {} : k;
                    h.wmode = "0";
                    h["wv-part"] = "" + f;
                    h["wv-hit"] = h["wv-hit"] || "" + xb(a);
                    h["page-url"] = h["page-url"] || a.location.href;
                    h.rn = h.rn || "" + Xa(a);
                    h["wv-type"] || (h["wv-type"] = k.Gc ? "3" : "2");
                    f = {
                        ba: {
                            qa: "webvisor/" + e.id
                        },
                        M: y(d.M, {
                            Da: (g = {}, g["Content-Type"] = "text/plain", g),
                            nc: "POST"
                        }),
                        D: h
                    };
                    e = ya(Vd(a, "wv", e), b);
                    return Zc(a, c, e)(y(d, f))
                }
            };
            ka["4"] = zb([0, Qb, Uc]);
            ub.push(Kq);
            sc({
                od: {
                    aa: "webvisor",
                    Ra: Boolean
                }
            });
            T.push(Pq);
            V("pi");
            la.pi = pb;
            ka.pi = zc;
            ip("w", function(a, c) {
                return {
                    N: function(b, d) {
                        if (b.G) {
                            var e =
                                Wj(c),
                                f = e.status;
                            "rt" === e.rb && f && (b.G.C("rt", f), b.ba || (b.ba = {}), b.ba.$d = 1 === f ? yg(a, c) + "." : "")
                        }
                        d()
                    }
                }
            }, 2);
            (function() {
                T.push(Qq);
                sc({
                    Eb: {
                        aa: "ecommerce",
                        Ra: function(a) {
                            if (a) return !0 === a ? "dataLayer" : "" + a
                        }
                    }
                });
                la["1"] || (la["1"] = Qa)
            })();
            T.push(Sq);
            T.push(dr);
            ka["6"] = zb([0, Qb]);
            la["6"] = pb;
            T.push(er);
            mb(mc, 20);
            V("f", mc, 20);
            V("n", mc, 20);
            V("1", mc, 20);
            V("d", mc, 20);
            V("5", mc, 20);
            T.push(wq);
            (function() {
                Hf.push(function(a, c) {
                    c.informer = gl(a)
                })
            })();
            mb(ue, 6);
            V("1", ue, 6);
            V("adb");
            V("n", ue, 4);
            ka.adb = zc;
            la.adb = Zc;
            Ec.push(gr);
            ka["5"] = Pb;
            la["5"] = Qa;
            Ab["5"] = U(q(Tc, Zb([Ud, Wc]), Sb), Bb);
            T.push(hr);
            mb(mg, 7);
            V("n", mg, 6);
            ub.push(ir);
            la.d = Qa;
            V("d", Cb(["hid", "u", "v", "vf"]), 1);
            ka.d = zc;
            V("n", function(a, c) {
                return {
                    fa: function(b, d) {
                        if (!b.L || !b.L.force) {
                            var e = .002,
                                f = c.id === qa.xd ? 1 : .002,
                                g, h, k, l, m;
                            void 0 === e && (e = 1);
                            void 0 === f && (f = 1);
                            var p = a.performance;
                            if (p && S(p.getEntriesByType) && (e = Math.random() > e, f = Math.random() > f, !e || !f)) {
                                p = a.performance.getEntriesByType("resource");
                                for (var r = {}, v = {}, x = {}, w = jr(a), J = 0; J < p.length; J += 1) {
                                    var P = p[J],
                                        ha =
                                        P.name.replace(/^https?:\/\//, "").split("?")[0],
                                        Ia = Yb(ha),
                                        ma = (g = {}, g.dns = Math.round(P.domainLookupEnd - P.domainLookupStart), g.tcp = Math.round(P.connectEnd - P.connectStart), g.duration = Math.round(P.duration), g.response = Math.round(P.responseEnd - P.requestStart), g);
                                    "script" !== P.initiatorType || e || (v[ha] = y(ma, (h = {}, h.name = P.name, h.decodedBodySize = P.decodedBodySize, h)));
                                    !ek[Ia] && !w[Ia] || r[ha] || f || (r[ha] = y(ma, (k = {}, k.pages = a.location.href, k)))
                                }
                                da(r).length && (x.timings8 = r);
                                da(v).length && (x.scripts = v);
                                if (da(x).length) ra(a,
                                    "d", c)({
                                    G: sa((l = {}, l.ar = 1, l.pv = 1, l)),
                                    M: {
                                        W: hb(a, x) || void 0
                                    },
                                    D: (m = {}, m["page-url"] = a.location && "" + a.location.href, m)
                                }, {
                                    id: qa.zd,
                                    R: "0"
                                })["catch"](A(a, "r.tim.ng2"))
                            }
                        }
                        d()
                    }
                }
            }, 7);
            ka.ci = zb([Qb]);
            ub.push(kr);
            T.push(lr);
            ub.push(nq);
            T.push(qr);
            mb(Vf, 8);
            V("f", Vf, 3);
            V("n", Vf, 5);
            Ec.push(function(a) {
                return B("fip", function(c) {
                    if (!Ij(c) || $c(c)) {
                        var b = Ja(c);
                        if (!b.o("fip")) {
                            var d = q(bb(q(function(e, f) {
                                return B("fip." + f, e)(c)
                            }, L(Co, null))), Gc("-"))(a);
                            b.C("fip", d)
                        }
                    }
                })
            }([sr, rr, function(a) {
                var c = n(a, "ApplePaySession"),
                    b = Q(a).protocol;
                a = c && "https:" === b && !wb(a) ? c : void 0;
                c = "";
                if (!a) return c;
                try {
                    c = "" + a.canMakePayments();
                    b = "";
                    var d = a.supportsVersion;
                    if (S(d))
                        for (var e = 1; 20 >= e; e += 1) b += d.call(a, e) ? "" + e : "0";
                    return b + c
                } catch (f) {
                    return c
                }
            }, function(a) {
                a = n(a, "navigator") || {};
                return a.doNotTrack || a.msDoNotTrack || "unknown"
            }, function(a) {
                if (a = rq(a)) try {
                    for (var c = [], b = 0; b < Jj.length; b += 1) {
                        var d = a(Jj[b]);
                        c.push(d)
                    }
                    var e = c
                } catch (f) {
                    e = []
                } else e = [];
                return e ? I("x", e) : ""
            }, function(a) {
                var c = void 0;
                void 0 === c && (c = or);
                var b = n(a, "navigator") || {};
                c = z(u(b, n), c);
                c = I("x", c);
                try {
                    var d = n(a, "navigator.getGamepads");
                    var e = xa(d, "getGamepads") && a.navigator.getGamepads() || []
                } catch (f) {
                    e = []
                }
                return c + "x" + Aa(e)
            }, mr, function(a) {
                a = n(a, "screen") || {};
                return I("x", z(u(a, n), nr))
            }, function(a) {
                return I("x", Hk(a) || [])
            }, function(a) {
                a = Xk(a);
                return aa(a) ? I("x", a) : a
            }, function(a) {
                return (a = Zk(a)) ? q(To, jc(O), bb(D(["", ["matches", "media"]], Jk)), u("x", I))(a) : ""
            }]));
            mb(function(a) {
                return {
                    N: function(c, b) {
                        var d = c.G,
                            e = Ja(a).o("fip");
                        e && d && (d.C("fip", e), nd(c, "fip", be(e)));
                        b()
                    }
                }
            }, 9);
            V("h", function(a) {
                return {
                    fa: function(c, b) {
                        var d = c.we;
                        ve(c) && d && G(a).C("isEU", n(d, "settings.eu"));
                        b()
                    }
                }
            }, 3);
            Ec.push(Mq);
            If.push(tr);
            ub.push(zr);
            T.push(Ar);
            sc({
                Pe: {
                    aa: "yaDisableGDPR"
                },
                Qe: {
                    aa: "yaGDPRLang"
                }
            });
            Od.push(function(a, c) {
                return {
                    N: D([a, c], vk)
                }
            });
            ei.push("gdpr", "gdpr_popup");
            bf.push(function(a, c) {
                var b = md(a);
                b = me(b);
                if (U(Zb(Cr), b).length) return !0;
                b = c(a, "gdpr");
                return K(b, [hc, Br])
            });
            Od.push(function(a) {
                return {
                    N: function(c, b) {
                        var d = c.ba || {},
                            e;
                        (e = n(a, "document.referrer")) ? (e = Jd(a, e).host,
                            e = Jh(e), e = Yj + "." + (e || Nq)) : e = Nb;
                        c.ba = y(d, {
                            ae: [e]
                        });
                        b()
                    }
                }
            });
            mb(gk, 5);
            V("1", gk, 6);
            ka.c = zc;
            la.c = pb;
            if (window.Ya && fe) {
                var hk = qa.Bb;
                window.Ya[hk] = fe;
                Jp(window);
                C(q(qc([window, window.Ya[hk]]), ea), Hf)
            }
            C(q(qc([window]), ea), If)
        })()
    } catch (fe) {};
}).call(this)