/*! @license Firebase v3.7.5
    Build: 3.7.5-rc.1
    Terms: https://firebase.google.com/terms/ */
var firebase = null;
(function () {
  /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
  var aa = function (a) {
      var b = 0;
      return function () {
        return b < a.length ? { done: !1, value: a[b++] } : { done: !0 };
      };
    },
    ba = function (a) {
      a = [
        'object' == typeof globalThis && globalThis,
        a,
        'object' == typeof window && window,
        'object' == typeof self && self,
        'object' == typeof global && global,
      ];
      for (var b = 0; b < a.length; ++b) {
        var c = a[b];
        if (c && c.Math == Math) return c;
      }
      throw Error('Cannot find global object');
    },
    ca = ba(this),
    l = this || self,
    da = function (a, b, c) {
      return a.call.apply(a.bind, arguments);
    },
    ea = function (a, b, c) {
      if (!a) throw Error();
      if (2 < arguments.length) {
        var d = Array.prototype.slice.call(arguments, 2);
        return function () {
          var e = Array.prototype.slice.call(arguments);
          Array.prototype.unshift.apply(e, d);
          return a.apply(b, e);
        };
      }
      return function () {
        return a.apply(b, arguments);
      };
    },
    m = function (a, b, c) {
      m =
        Function.prototype.bind &&
        -1 != Function.prototype.bind.toString().indexOf('native code')
          ? da
          : ea;
      return m.apply(null, arguments);
    },
    p = function (a, b) {
      var c = Array.prototype.slice.call(arguments, 1);
      return function () {
        var d = c.slice();
        d.push.apply(d, arguments);
        return a.apply(this, d);
      };
    },
    q = function (a, b) {
      function c() {}
      c.prototype = b.prototype;
      a.ia = b.prototype;
      a.prototype = new c();
      a.prototype.constructor = a;
      a.base = function (d, e, g) {
        for (
          var k = Array(arguments.length - 2), f = 2;
          f < arguments.length;
          f++
        )
          k[f - 2] = arguments[f];
        return b.prototype[e].apply(d, k);
      };
    };
  function r(a, b) {
    if (Error.captureStackTrace) Error.captureStackTrace(this, r);
    else {
      var c = Error().stack;
      c && (this.stack = c);
    }
    a && (this.message = String(a));
    void 0 !== b && (this.cause = b);
  }
  q(r, Error);
  r.prototype.name = 'CustomError';
  function t(a, b) {
    a = a.split('%s');
    for (var c = '', d = a.length - 1, e = 0; e < d; e++)
      c += a[e] + (e < b.length ? b[e] : '%s');
    r.call(this, c + a[d]);
  }
  q(t, r);
  t.prototype.name = 'AssertionError';
  function u(a, b, c, d) {
    var e = 'Assertion failed';
    if (c) {
      e += ': ' + c;
      var g = d;
    } else a && ((e += ': ' + a), (g = b));
    throw new t('' + e, g || []);
  }
  var w = function (a, b, c) {
      a || u('', null, b, Array.prototype.slice.call(arguments, 2));
    },
    x = function (a, b, c) {
      if ('function' !== typeof a) {
        var d = typeof a;
        d = 'object' != d ? d : a ? (Array.isArray(a) ? 'array' : d) : 'null';
        u(
          'Expected function but got %s: %s.',
          [d, a],
          b,
          Array.prototype.slice.call(arguments, 2),
        );
      }
    };
  var y = function (a, b) {
    this.ba = 100;
    this.X = a;
    this.da = b;
    this.F = 0;
    this.D = null;
  };
  y.prototype.get = function () {
    if (0 < this.F) {
      this.F--;
      var a = this.D;
      this.D = a.next;
      a.next = null;
    } else a = this.X();
    return a;
  };
  y.prototype.put = function (a) {
    this.da(a);
    this.F < this.ba && (this.F++, (a.next = this.D), (this.D = a));
  };
  function z() {
    var a = l.navigator;
    return a && (a = a.userAgent) ? a : '';
  }
  function B(a) {
    return -1 != z().indexOf(a);
  }
  function C() {
    return B('iPhone') && !B('iPod') && !B('iPad');
  }
  B('Opera');
  B('Trident') || B('MSIE');
  B('Edge');
  !B('Gecko') ||
    (-1 != z().toLowerCase().indexOf('webkit') && !B('Edge')) ||
    B('Trident') ||
    B('MSIE') ||
    B('Edge');
  -1 != z().toLowerCase().indexOf('webkit') && !B('Edge') && B('Mobile');
  B('Macintosh');
  B('Windows');
  B('Linux') || B('CrOS');
  var D = l.navigator || null;
  D && (D.appVersion || '').indexOf('X11');
  B('Android');
  C();
  B('iPad');
  B('iPod');
  C() || B('iPad') || B('iPod');
  z().toLowerCase().indexOf('kaios');
  var E = function () {};
  var fa = function () {
    var a = document;
    var b = 'IFRAME';
    'application/xhtml+xml' === a.contentType && (b = b.toLowerCase());
    return a.createElement(b);
  };
  var F,
    ha = function () {
      var a = l.MessageChannel;
      'undefined' === typeof a &&
        'undefined' !== typeof window &&
        window.postMessage &&
        window.addEventListener &&
        !B('Presto') &&
        (a = function () {
          var e = fa();
          e.style.display = 'none';
          document.documentElement.appendChild(e);
          var g = e.contentWindow;
          e = g.document;
          e.open();
          e.close();
          var k = 'callImmediate' + Math.random(),
            f =
              'file:' == g.location.protocol
                ? '*'
                : g.location.protocol + '//' + g.location.host;
          e = m(function (h) {
            if (('*' == f || h.origin == f) && h.data == k)
              this.port1.onmessage();
          }, this);
          g.addEventListener('message', e, !1);
          this.port1 = {};
          this.port2 = {
            postMessage: function () {
              g.postMessage(k, f);
            },
          };
        });
      if ('undefined' !== typeof a && !B('Trident') && !B('MSIE')) {
        var b = new a(),
          c = {},
          d = c;
        b.port1.onmessage = function () {
          if (void 0 !== c.next) {
            c = c.next;
            var e = c.P;
            c.P = null;
            e();
          }
        };
        return function (e) {
          d.next = { P: e };
          d = d.next;
          b.port2.postMessage(0);
        };
      }
      return function (e) {
        l.setTimeout(e, 0);
      };
    };
  function G(a) {
    l.setTimeout(function () {
      throw a;
    }, 0);
  }
  var H = function () {
    this.G = this.o = null;
  };
  H.prototype.add = function (a, b) {
    var c = ia.get();
    c.set(a, b);
    this.G ? (this.G.next = c) : (w(!this.o), (this.o = c));
    this.G = c;
  };
  H.prototype.remove = function () {
    var a = null;
    this.o &&
      ((a = this.o),
      (this.o = this.o.next),
      this.o || (this.G = null),
      (a.next = null));
    return a;
  };
  var ia = new y(
      function () {
        return new I();
      },
      function (a) {
        return a.reset();
      },
    ),
    I = function () {
      this.next = this.scope = this.I = null;
    };
  I.prototype.set = function (a, b) {
    this.I = a;
    this.scope = b;
    this.next = null;
  };
  I.prototype.reset = function () {
    this.next = this.scope = this.I = null;
  };
  var J,
    K = !1,
    ja = new H(),
    L = function (a, b) {
      J || ka();
      K || (J(), (K = !0));
      ja.add(a, b);
    },
    ka = function () {
      if (l.Promise && l.Promise.resolve) {
        var a = l.Promise.resolve(void 0);
        J = function () {
          a.then(la);
        };
      } else
        J = function () {
          var b = la;
          'function' !== typeof l.setImmediate ||
          (l.Window &&
            l.Window.prototype &&
            !B('Edge') &&
            l.Window.prototype.setImmediate == l.setImmediate)
            ? (F || (F = ha()), F(b))
            : l.setImmediate(b);
        };
    },
    la = function () {
      for (var a; (a = ja.remove()); ) {
        try {
          a.I.call(a.scope);
        } catch (b) {
          G(b);
        }
        ia.put(a);
      }
      K = !1;
    };
  var O = function (a, b) {
      this.g = 0;
      this.V = void 0;
      this.s = this.i = this.m = null;
      this.B = this.H = !1;
      if (a != E)
        try {
          var c = this;
          a.call(
            b,
            function (d) {
              M(c, 2, d);
            },
            function (d) {
              if (!(d instanceof N))
                try {
                  if (d instanceof Error) throw d;
                  throw Error('Promise rejected.');
                } catch (e) {}
              M(c, 3, d);
            },
          );
        } catch (d) {
          M(this, 3, d);
        }
    },
    ma = function () {
      this.next = this.context = this.u = this.l = this.child = null;
      this.v = !1;
    };
  ma.prototype.reset = function () {
    this.context = this.u = this.l = this.child = null;
    this.v = !1;
  };
  var na = new y(
      function () {
        return new ma();
      },
      function (a) {
        a.reset();
      },
    ),
    oa = function (a, b, c) {
      var d = na.get();
      d.l = a;
      d.u = b;
      d.context = c;
      return d;
    },
    qa = function (a, b, c) {
      pa(a, b, c, null) || L(p(b, a));
    };
  O.prototype.then = function (a, b, c) {
    null != a && x(a, 'opt_onFulfilled should be a function.');
    null != b &&
      x(
        b,
        'opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?',
      );
    return ra(
      this,
      'function' === typeof a ? a : null,
      'function' === typeof b ? b : null,
      c,
    );
  };
  O.prototype.$goog_Thenable = !0;
  O.prototype.W = function (a, b) {
    return ra(this, null, a, b);
  };
  O.prototype.catch = O.prototype.W;
  O.prototype.cancel = function (a) {
    if (0 == this.g) {
      var b = new N(a);
      L(function () {
        sa(this, b);
      }, this);
    }
  };
  var sa = function (a, b) {
      if (0 == a.g)
        if (a.m) {
          var c = a.m;
          if (c.i) {
            for (
              var d = 0, e = null, g = null, k = c.i;
              k && (k.v || (d++, k.child == a && (e = k), !(e && 1 < d)));
              k = k.next
            )
              e || (g = k);
            e &&
              (0 == c.g && 1 == d
                ? sa(c, b)
                : (g
                    ? ((d = g),
                      w(c.i),
                      w(null != d),
                      d.next == c.s && (c.s = d),
                      (d.next = d.next.next))
                    : ta(c),
                  ua(c, e, 3, b)));
          }
          a.m = null;
        } else M(a, 3, b);
    },
    wa = function (a, b) {
      a.i || (2 != a.g && 3 != a.g) || va(a);
      w(null != b.l);
      a.s ? (a.s.next = b) : (a.i = b);
      a.s = b;
    },
    ra = function (a, b, c, d) {
      var e = oa(null, null, null);
      e.child = new O(function (g, k) {
        e.l = b
          ? function (f) {
              try {
                var h = b.call(d, f);
                g(h);
              } catch (n) {
                k(n);
              }
            }
          : g;
        e.u = c
          ? function (f) {
              try {
                var h = c.call(d, f);
                void 0 === h && f instanceof N ? k(f) : g(h);
              } catch (n) {
                k(n);
              }
            }
          : k;
      });
      e.child.m = a;
      wa(a, e);
      return e.child;
    };
  O.prototype.fa = function (a) {
    w(1 == this.g);
    this.g = 0;
    M(this, 2, a);
  };
  O.prototype.ga = function (a) {
    w(1 == this.g);
    this.g = 0;
    M(this, 3, a);
  };
  var M = function (a, b, c) {
      0 == a.g &&
        (a === c &&
          ((b = 3), (c = new TypeError('Promise cannot resolve to itself'))),
        (a.g = 1),
        pa(c, a.fa, a.ga, a) ||
          ((a.V = c),
          (a.g = b),
          (a.m = null),
          va(a),
          3 != b || c instanceof N || xa(a, c)));
    },
    pa = function (a, b, c, d) {
      if (a instanceof O)
        return (
          null != b && x(b, 'opt_onFulfilled should be a function.'),
          null != c &&
            x(
              c,
              'opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?',
            ),
          wa(a, oa(b || E, c || null, d)),
          !0
        );
      if (a)
        try {
          var e = !!a.$goog_Thenable;
        } catch (k) {
          e = !1;
        }
      else e = !1;
      if (e) return a.then(b, c, d), !0;
      e = typeof a;
      if (('object' == e && null != a) || 'function' == e)
        try {
          var g = a.then;
          if ('function' === typeof g) return ya(a, g, b, c, d), !0;
        } catch (k) {
          return c.call(d, k), !0;
        }
      return !1;
    },
    ya = function (a, b, c, d, e) {
      var g = !1,
        k = function (h) {
          g || ((g = !0), c.call(e, h));
        },
        f = function (h) {
          g || ((g = !0), d.call(e, h));
        };
      try {
        b.call(a, k, f);
      } catch (h) {
        f(h);
      }
    },
    va = function (a) {
      a.H || ((a.H = !0), L(a.Y, a));
    },
    ta = function (a) {
      var b = null;
      a.i && ((b = a.i), (a.i = b.next), (b.next = null));
      a.i || (a.s = null);
      null != b && w(null != b.l);
      return b;
    };
  O.prototype.Y = function () {
    for (var a; (a = ta(this)); ) ua(this, a, this.g, this.V);
    this.H = !1;
  };
  var ua = function (a, b, c, d) {
      if (3 == c && b.u && !b.v) for (; a && a.B; a = a.m) a.B = !1;
      if (b.child) (b.child.m = null), za(b, c, d);
      else
        try {
          b.v ? b.l.call(b.context) : za(b, c, d);
        } catch (e) {
          Aa.call(null, e);
        }
      na.put(b);
    },
    za = function (a, b, c) {
      2 == b ? a.l.call(a.context, c) : a.u && a.u.call(a.context, c);
    },
    xa = function (a, b) {
      a.B = !0;
      L(function () {
        a.B && Aa.call(null, b);
      });
    },
    Aa = G,
    N = function (a) {
      r.call(this, a);
    };
  q(N, r);
  N.prototype.name = 'cancel';
  O.all = function (a) {
    return new O(function (b, c) {
      var d = a.length,
        e = [];
      if (d)
        for (
          var g = function (n, v) {
              d--;
              e[n] = v;
              0 == d && b(e);
            },
            k = function (n) {
              c(n);
            },
            f = 0,
            h;
          f < a.length;
          f++
        )
          (h = a[f]), qa(h, p(g, f), k);
      else b(e);
    });
  };
  O.resolve = function (a) {
    if (a instanceof O) return a;
    var b = new O(E);
    M(b, 2, a);
    return b;
  };
  O.reject = function (a) {
    return new O(function (b, c) {
      c(a);
    });
  };
  O.prototype['catch'] = O.prototype.W;
  var P = O;
  'undefined' !== typeof Promise && (P = Promise);
  function Q(a, b) {
    if (!(b instanceof Object)) return b;
    switch (b.constructor) {
      case Date:
        return new Date(b.getTime());
      case Object:
        void 0 === a && (a = {});
        break;
      case Array:
        a = [];
        break;
      default:
        return b;
    }
    for (var c in b) b.hasOwnProperty(c) && (a[c] = Q(a[c], b[c]));
    return a;
  }
  var Ba = Error.captureStackTrace,
    S = function (a, b) {
      this.code = a;
      this.message = b;
      if (Ba) Ba(this, R.prototype.create);
      else {
        var c = Error.apply(this, arguments);
        this.name = 'FirebaseError';
        Object.defineProperty(this, 'stack', {
          get: function () {
            return c.stack;
          },
        });
      }
    };
  S.prototype = Object.create(Error.prototype);
  S.prototype.constructor = S;
  S.prototype.name = 'FirebaseError';
  var R = function (a, b, c) {
    this.service = a;
    this.ea = b;
    this.errors = c;
    this.pattern = /\{\$([^}]+)}/g;
  };
  R.prototype.create = function (a, b) {
    void 0 === b && (b = {});
    var c = this.errors[a];
    a = this.service + '/' + a;
    c =
      void 0 === c
        ? 'Error'
        : c.replace(this.pattern, function (e, g) {
            e = b[g];
            return void 0 !== e ? e.toString() : '<' + g + '?>';
          });
    c = this.ea + ': ' + c + ' (' + a + ').';
    c = new S(a, c);
    for (var d in b)
      b.hasOwnProperty(d) && '_' !== d.slice(-1) && (c[d] = b[d]);
    return c;
  };
  var Ca = P;
  function Da(a, b) {
    a = new T(a, b);
    return a.subscribe.bind(a);
  }
  var T = function (a, b) {
    var c = this;
    this.h = [];
    this.U = 0;
    this.task = Ca.resolve();
    this.A = !1;
    this.K = b;
    this.task
      .then(function () {
        a(c);
      })
      .catch(function (d) {
        c.error(d);
      });
  };
  T.prototype.next = function (a) {
    U(this, function (b) {
      b.next(a);
    });
  };
  T.prototype.error = function (a) {
    U(this, function (b) {
      b.error(a);
    });
    this.close(a);
  };
  T.prototype.complete = function () {
    U(this, function (a) {
      a.complete();
    });
    this.close();
  };
  T.prototype.subscribe = function (a, b, c) {
    var d = this;
    if (void 0 === a && void 0 === b && void 0 === c)
      throw Error('Missing Observer.');
    var e = Ea(a) ? a : { next: a, error: b, complete: c };
    void 0 === e.next && (e.next = V);
    void 0 === e.error && (e.error = V);
    void 0 === e.complete && (e.complete = V);
    a = this.ha.bind(this, this.h.length);
    this.A &&
      this.task.then(function () {
        try {
          d.R ? e.error(d.R) : e.complete();
        } catch (g) {}
      });
    this.h.push(e);
    return a;
  };
  T.prototype.ha = function (a) {
    void 0 !== this.h &&
      void 0 !== this.h[a] &&
      (delete this.h[a],
      --this.U,
      0 === this.U && void 0 !== this.K && this.K(this));
  };
  var U = function (a, b) {
      if (!a.A) for (var c = 0; c < a.h.length; c++) Fa(a, c, b);
    },
    Fa = function (a, b, c) {
      a.task.then(function () {
        if (void 0 !== a.h && void 0 !== a.h[b])
          try {
            c(a.h[b]);
          } catch (d) {
            'undefined' !== typeof console && console.error && console.error(d);
          }
      });
    };
  T.prototype.close = function (a) {
    var b = this;
    this.A ||
      ((this.A = !0),
      void 0 !== a && (this.R = a),
      this.task.then(function () {
        b.h = void 0;
        b.K = void 0;
      }));
  };
  function Ea(a) {
    if ('object' !== typeof a || null === a) return !1;
    var b = ['next', 'error', 'complete'];
    var c =
      'undefined' != typeof Symbol && Symbol.iterator && b[Symbol.iterator];
    b = c ? c.call(b) : { next: aa(b) };
    for (c = b.next(); !c.done; c = b.next())
      if (((c = c.value), c in a && 'function' === typeof a[c])) return !0;
    return !1;
  }
  function V() {}
  var W = P,
    X = function (a, b, c) {
      var d = this;
      this.S = c;
      this.T = !1;
      this.j = {};
      this.J = b;
      this.M = Q(void 0, a);
      a = 'serviceAccount' in this.M;
      ('credential' in this.M || a) &&
        'undefined' !== typeof console &&
        console.log(
          "The '" +
            (a ? 'serviceAccount' : 'credential') +
            "' property specified in the first argument to initializeApp() is deprecated and will be removed in the next major version. You should instead use the 'firebase-admin' package. See https://firebase.google.com/docs/admin/setup for details on how to get started.",
        );
      Object.keys(c.INTERNAL.factories).forEach(function (e) {
        var g = c.INTERNAL.useAsService(d, e);
        null !== g && ((g = d.aa.bind(d, g)), (d[e] = g));
      });
    };
  X.prototype.delete = function () {
    var a = this;
    return new W(function (b) {
      Y(a);
      b();
    })
      .then(function () {
        a.S.INTERNAL.removeApp(a.J);
        var b = [];
        Object.keys(a.j).forEach(function (c) {
          Object.keys(a.j[c]).forEach(function (d) {
            b.push(a.j[c][d]);
          });
        });
        return W.all(
          b
            .filter(function (c) {
              return 'INTERNAL' in c;
            })
            .map(function (c) {
              return c.INTERNAL.delete();
            }),
        );
      })
      .then(function () {
        a.T = !0;
        a.j = {};
      });
  };
  X.prototype.aa = function (a, b) {
    Y(this);
    'undefined' === typeof this.j[a] && (this.j[a] = {});
    var c = b || '[DEFAULT]';
    return 'undefined' === typeof this.j[a][c]
      ? ((b = this.S.INTERNAL.factories[a](this, this.Z.bind(this), b)),
        (this.j[a][c] = b))
      : this.j[a][c];
  };
  X.prototype.Z = function (a) {
    Q(this, a);
  };
  var Y = function (a) {
    a.T && Z('app-deleted', { name: a.J });
  };
  ca.Object.defineProperties(X.prototype, {
    name: {
      configurable: !0,
      enumerable: !0,
      get: function () {
        Y(this);
        return this.J;
      },
    },
    options: {
      configurable: !0,
      enumerable: !0,
      get: function () {
        Y(this);
        return this.M;
      },
    },
  });
  (X.prototype.name && X.prototype.options) ||
    X.prototype.delete ||
    console.log('dc');
  function Ga() {
    function a(f) {
      f = f || '[DEFAULT]';
      var h = d[f];
      void 0 === h && Z('no-app', { name: f });
      return h;
    }
    function b(f, h) {
      Object.keys(e).forEach(function (n) {
        n = c(f, n);
        if (null !== n && g[n]) g[n](h, f);
      });
    }
    function c(f, h) {
      if ('serverAuth' === h) return null;
      var n = h;
      f = f.options;
      'auth' === h &&
        (f.serviceAccount || f.credential) &&
        ((n = 'serverAuth'), 'serverAuth' in e || Z('sa-not-supported'));
      return n;
    }
    var d = {},
      e = {},
      g = {},
      k = {
        __esModule: !0,
        initializeApp: function (f, h) {
          void 0 === h
            ? (h = '[DEFAULT]')
            : ('string' !== typeof h || '' === h) &&
              Z('bad-app-name', { name: h + '' });
          void 0 !== d[h] && Z('duplicate-app', { name: h });
          f = new X(f, h, k);
          d[h] = f;
          b(f, 'create');
          (void 0 != f.INTERNAL && void 0 != f.INTERNAL.getToken) ||
            Q(f, {
              INTERNAL: {
                getUid: function () {
                  return null;
                },
                getToken: function () {
                  return W.resolve(null);
                },
                addAuthTokenListener: function () {},
                removeAuthTokenListener: function () {},
              },
            });
          return f;
        },
        app: a,
        apps: null,
        Promise: W,
        SDK_VERSION: '0.0.0',
        INTERNAL: {
          registerService: function (f, h, n, v, Ha) {
            e[f] && Z('duplicate-service', { name: f });
            e[f] = Ha
              ? h
              : function (A, Ia) {
                  return h(A, Ia, '[DEFAULT]');
                };
            v && (g[f] = v);
            v = function (A) {
              void 0 === A && (A = a());
              'function' !== typeof A[f] &&
                Z('invalid-app-argument', { name: f });
              return A[f]();
            };
            void 0 !== n && Q(v, n);
            return (k[f] = v);
          },
          createFirebaseNamespace: Ga,
          extendNamespace: function (f) {
            Q(k, f);
          },
          createSubscribe: Da,
          ErrorFactory: R,
          removeApp: function (f) {
            b(d[f], 'delete');
            delete d[f];
          },
          factories: e,
          useAsService: c,
          Promise: O,
          deepExtend: Q,
        },
      };
    k['default'] = k;
    Object.defineProperty(k, 'apps', {
      get: function () {
        return Object.keys(d).map(function (f) {
          return d[f];
        });
      },
    });
    a.App = X;
    return k;
  }
  function Z(a, b) {
    throw Ja.create(a, b);
  }
  var Ja = new R('app', 'Firebase', {
    'no-app':
      "No Firebase App '{$name}' has been created - call Firebase App.initializeApp()",
    'bad-app-name': "Illegal App name: '{$name}",
    'duplicate-app': "Firebase App named '{$name}' already exists",
    'app-deleted': "Firebase App named '{$name}' already deleted",
    'duplicate-service': "Firebase service named '{$name}' already registered",
    'sa-not-supported':
      'Initializing the Firebase SDK with a service account is only allowed in a Node.js environment. On client devices, you should instead initialize the SDK with an api key and auth domain',
    'invalid-app-argument':
      'firebase.{$name}() takes either no argument or a Firebase App instance.',
  });
  'undefined' !== typeof firebase && (firebase = Ga());
}.call(this));
firebase.SDK_VERSION = '3.7.5';
(function () {
  /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
  var k,
    aa = function (a) {
      var b = 0;
      return function () {
        return b < a.length ? { done: !1, value: a[b++] } : { done: !0 };
      };
    },
    ba =
      'function' == typeof Object.defineProperties
        ? Object.defineProperty
        : function (a, b, c) {
            if (a == Array.prototype || a == Object.prototype) return a;
            a[b] = c.value;
            return a;
          },
    ca = function (a) {
      a = [
        'object' == typeof globalThis && globalThis,
        a,
        'object' == typeof window && window,
        'object' == typeof self && self,
        'object' == typeof global && global,
      ];
      for (var b = 0; b < a.length; ++b) {
        var c = a[b];
        if (c && c.Math == Math) return c;
      }
      throw Error('Cannot find global object');
    },
    da = ca(this),
    ea = function (a, b) {
      if (b)
        a: {
          var c = da;
          a = a.split('.');
          for (var d = 0; d < a.length - 1; d++) {
            var e = a[d];
            if (!(e in c)) break a;
            c = c[e];
          }
          a = a[a.length - 1];
          d = c[a];
          b = b(d);
          b != d &&
            null != b &&
            ba(c, a, { configurable: !0, writable: !0, value: b });
        }
    };
  ea('Symbol', function (a) {
    if (a) return a;
    var b = function (f, g) {
      this.lk = f;
      ba(this, 'description', { configurable: !0, writable: !0, value: g });
    };
    b.prototype.toString = function () {
      return this.lk;
    };
    var c = 'jscomp_symbol_' + ((1e9 * Math.random()) >>> 0) + '_',
      d = 0,
      e = function (f) {
        if (this instanceof e)
          throw new TypeError('Symbol is not a constructor');
        return new b(c + (f || '') + '_' + d++, f);
      };
    return e;
  });
  ea('Symbol.iterator', function (a) {
    if (a) return a;
    a = Symbol('Symbol.iterator');
    for (
      var b =
          'Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array'.split(
            ' ',
          ),
        c = 0;
      c < b.length;
      c++
    ) {
      var d = da[b[c]];
      'function' === typeof d &&
        'function' != typeof d.prototype[a] &&
        ba(d.prototype, a, {
          configurable: !0,
          writable: !0,
          value: function () {
            return fa(aa(this));
          },
        });
    }
    return a;
  });
  var fa = function (a) {
      a = { next: a };
      a[Symbol.iterator] = function () {
        return this;
      };
      return a;
    },
    ha = function (a) {
      var b =
        'undefined' != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
      return b ? b.call(a) : { next: aa(a) };
    },
    ia =
      'function' == typeof Object.create
        ? Object.create
        : function (a) {
            var b = function () {};
            b.prototype = a;
            return new b();
          },
    ja;
  if ('function' == typeof Object.setPrototypeOf) ja = Object.setPrototypeOf;
  else {
    var ka;
    a: {
      var la = { a: !0 },
        ma = {};
      try {
        ma.__proto__ = la;
        ka = ma.a;
        break a;
      } catch (a) {}
      ka = !1;
    }
    ja = ka
      ? function (a, b) {
          a.__proto__ = b;
          if (a.__proto__ !== b) throw new TypeError(a + ' is not extensible');
          return a;
        }
      : null;
  }
  var na = ja,
    n = function (a, b) {
      a.prototype = ia(b.prototype);
      a.prototype.constructor = a;
      if (na) na(a, b);
      else
        for (var c in b)
          if ('prototype' != c)
            if (Object.defineProperties) {
              var d = Object.getOwnPropertyDescriptor(b, c);
              d && Object.defineProperty(a, c, d);
            } else a[c] = b[c];
      a.hd = b.prototype;
    };
  ea('Promise', function (a) {
    function b() {
      this.uc = null;
    }
    function c(g) {
      return g instanceof e
        ? g
        : new e(function (h) {
            h(g);
          });
    }
    if (a) return a;
    b.prototype.ai = function (g) {
      if (null == this.uc) {
        this.uc = [];
        var h = this;
        this.ci(function () {
          h.Lk();
        });
      }
      this.uc.push(g);
    };
    var d = da.setTimeout;
    b.prototype.ci = function (g) {
      d(g, 0);
    };
    b.prototype.Lk = function () {
      for (; this.uc && this.uc.length; ) {
        var g = this.uc;
        this.uc = [];
        for (var h = 0; h < g.length; ++h) {
          var l = g[h];
          g[h] = null;
          try {
            l();
          } catch (m) {
            this.uk(m);
          }
        }
      }
      this.uc = null;
    };
    b.prototype.uk = function (g) {
      this.ci(function () {
        throw g;
      });
    };
    var e = function (g) {
      this.Da = 0;
      this.Wa = void 0;
      this.Ed = [];
      this.Zi = !1;
      var h = this.Ag();
      try {
        g(h.resolve, h.reject);
      } catch (l) {
        h.reject(l);
      }
    };
    e.prototype.Ag = function () {
      function g(m) {
        return function (q) {
          l || ((l = !0), m.call(h, q));
        };
      }
      var h = this,
        l = !1;
      return { resolve: g(this.Zl), reject: g(this.Bh) };
    };
    e.prototype.Zl = function (g) {
      if (g === this)
        this.Bh(new TypeError('A Promise cannot resolve to itself'));
      else if (g instanceof e) this.sm(g);
      else {
        a: switch (typeof g) {
          case 'object':
            var h = null != g;
            break a;
          case 'function':
            h = !0;
            break a;
          default:
            h = !1;
        }
        h ? this.Yl(g) : this.Ei(g);
      }
    };
    e.prototype.Yl = function (g) {
      var h = void 0;
      try {
        h = g.then;
      } catch (l) {
        this.Bh(l);
        return;
      }
      'function' == typeof h ? this.tm(h, g) : this.Ei(g);
    };
    e.prototype.Bh = function (g) {
      this.Rj(2, g);
    };
    e.prototype.Ei = function (g) {
      this.Rj(1, g);
    };
    e.prototype.Rj = function (g, h) {
      if (0 != this.Da)
        throw Error(
          'Cannot settle(' +
            g +
            ', ' +
            h +
            '): Promise already settled in state' +
            this.Da,
        );
      this.Da = g;
      this.Wa = h;
      2 === this.Da && this.mm();
      this.Nk();
    };
    e.prototype.mm = function () {
      var g = this;
      d(function () {
        if (g.Fl()) {
          var h = da.console;
          'undefined' !== typeof h && h.error(g.Wa);
        }
      }, 1);
    };
    e.prototype.Fl = function () {
      if (this.Zi) return !1;
      var g = da.CustomEvent,
        h = da.Event,
        l = da.dispatchEvent;
      if ('undefined' === typeof l) return !0;
      'function' === typeof g
        ? (g = new g('unhandledrejection', { cancelable: !0 }))
        : 'function' === typeof h
        ? (g = new h('unhandledrejection', { cancelable: !0 }))
        : ((g = da.document.createEvent('CustomEvent')),
          g.initCustomEvent('unhandledrejection', !1, !0, g));
      g.promise = this;
      g.reason = this.Wa;
      return l(g);
    };
    e.prototype.Nk = function () {
      if (null != this.Ed) {
        for (var g = 0; g < this.Ed.length; ++g) f.ai(this.Ed[g]);
        this.Ed = null;
      }
    };
    var f = new b();
    e.prototype.sm = function (g) {
      var h = this.Ag();
      g.Xe(h.resolve, h.reject);
    };
    e.prototype.tm = function (g, h) {
      var l = this.Ag();
      try {
        g.call(h, l.resolve, l.reject);
      } catch (m) {
        l.reject(m);
      }
    };
    e.prototype.then = function (g, h) {
      function l(B, Q) {
        return 'function' == typeof B
          ? function (Ca) {
              try {
                m(B(Ca));
              } catch (Cc) {
                q(Cc);
              }
            }
          : Q;
      }
      var m,
        q,
        y = new e(function (B, Q) {
          m = B;
          q = Q;
        });
      this.Xe(l(g, m), l(h, q));
      return y;
    };
    e.prototype.catch = function (g) {
      return this.then(void 0, g);
    };
    e.prototype.Xe = function (g, h) {
      function l() {
        switch (m.Da) {
          case 1:
            g(m.Wa);
            break;
          case 2:
            h(m.Wa);
            break;
          default:
            throw Error('Unexpected state: ' + m.Da);
        }
      }
      var m = this;
      null == this.Ed ? f.ai(l) : this.Ed.push(l);
      this.Zi = !0;
    };
    e.resolve = c;
    e.reject = function (g) {
      return new e(function (h, l) {
        l(g);
      });
    };
    e.race = function (g) {
      return new e(function (h, l) {
        for (var m = ha(g), q = m.next(); !q.done; q = m.next())
          c(q.value).Xe(h, l);
      });
    };
    e.all = function (g) {
      var h = ha(g),
        l = h.next();
      return l.done
        ? c([])
        : new e(function (m, q) {
            function y(Ca) {
              return function (Cc) {
                B[Ca] = Cc;
                Q--;
                0 == Q && m(B);
              };
            }
            var B = [],
              Q = 0;
            do
              B.push(void 0),
                Q++,
                c(l.value).Xe(y(B.length - 1), q),
                (l = h.next());
            while (!l.done);
          });
    };
    return e;
  });
  var oa = function (a, b) {
    return Object.prototype.hasOwnProperty.call(a, b);
  };
  ea('WeakMap', function (a) {
    function b() {}
    function c(l) {
      var m = typeof l;
      return ('object' === m && null !== l) || 'function' === m;
    }
    function d(l) {
      if (!oa(l, f)) {
        var m = new b();
        ba(l, f, { value: m });
      }
    }
    function e(l) {
      var m = Object[l];
      m &&
        (Object[l] = function (q) {
          if (q instanceof b) return q;
          Object.isExtensible(q) && d(q);
          return m(q);
        });
    }
    if (
      (function () {
        if (!a || !Object.seal) return !1;
        try {
          var l = Object.seal({}),
            m = Object.seal({}),
            q = new a([
              [l, 2],
              [m, 3],
            ]);
          if (2 != q.get(l) || 3 != q.get(m)) return !1;
          q.delete(l);
          q.set(m, 4);
          return !q.has(l) && 4 == q.get(m);
        } catch (y) {
          return !1;
        }
      })()
    )
      return a;
    var f = '$jscomp_hidden_' + Math.random();
    e('freeze');
    e('preventExtensions');
    e('seal');
    var g = 0,
      h = function (l) {
        this.Ra = (g += Math.random() + 1).toString();
        if (l) {
          l = ha(l);
          for (var m; !(m = l.next()).done; )
            (m = m.value), this.set(m[0], m[1]);
        }
      };
    h.prototype.set = function (l, m) {
      if (!c(l)) throw Error('Invalid WeakMap key');
      d(l);
      if (!oa(l, f)) throw Error('WeakMap key fail: ' + l);
      l[f][this.Ra] = m;
      return this;
    };
    h.prototype.get = function (l) {
      return c(l) && oa(l, f) ? l[f][this.Ra] : void 0;
    };
    h.prototype.has = function (l) {
      return c(l) && oa(l, f) && oa(l[f], this.Ra);
    };
    h.prototype.delete = function (l) {
      return c(l) && oa(l, f) && oa(l[f], this.Ra) ? delete l[f][this.Ra] : !1;
    };
    return h;
  });
  ea('Map', function (a) {
    if (
      (function () {
        if (
          !a ||
          'function' != typeof a ||
          !a.prototype.entries ||
          'function' != typeof Object.seal
        )
          return !1;
        try {
          var h = Object.seal({ x: 4 }),
            l = new a(ha([[h, 's']]));
          if (
            's' != l.get(h) ||
            1 != l.size ||
            l.get({ x: 4 }) ||
            l.set({ x: 4 }, 't') != l ||
            2 != l.size
          )
            return !1;
          var m = l.entries(),
            q = m.next();
          if (q.done || q.value[0] != h || 's' != q.value[1]) return !1;
          q = m.next();
          return q.done ||
            4 != q.value[0].x ||
            't' != q.value[1] ||
            !m.next().done
            ? !1
            : !0;
        } catch (y) {
          return !1;
        }
      })()
    )
      return a;
    var b = new WeakMap(),
      c = function (h) {
        this.be = {};
        this.hb = f();
        this.size = 0;
        if (h) {
          h = ha(h);
          for (var l; !(l = h.next()).done; )
            (l = l.value), this.set(l[0], l[1]);
        }
      };
    c.prototype.set = function (h, l) {
      h = 0 === h ? 0 : h;
      var m = d(this, h);
      m.list || (m.list = this.be[m.id] = []);
      m.Qa
        ? (m.Qa.value = l)
        : ((m.Qa = {
            next: this.hb,
            hc: this.hb.hc,
            head: this.hb,
            key: h,
            value: l,
          }),
          m.list.push(m.Qa),
          (this.hb.hc.next = m.Qa),
          (this.hb.hc = m.Qa),
          this.size++);
      return this;
    };
    c.prototype.delete = function (h) {
      h = d(this, h);
      return h.Qa && h.list
        ? (h.list.splice(h.index, 1),
          h.list.length || delete this.be[h.id],
          (h.Qa.hc.next = h.Qa.next),
          (h.Qa.next.hc = h.Qa.hc),
          (h.Qa.head = null),
          this.size--,
          !0)
        : !1;
    };
    c.prototype.clear = function () {
      this.be = {};
      this.hb = this.hb.hc = f();
      this.size = 0;
    };
    c.prototype.has = function (h) {
      return !!d(this, h).Qa;
    };
    c.prototype.get = function (h) {
      return (h = d(this, h).Qa) && h.value;
    };
    c.prototype.entries = function () {
      return e(this, function (h) {
        return [h.key, h.value];
      });
    };
    c.prototype.keys = function () {
      return e(this, function (h) {
        return h.key;
      });
    };
    c.prototype.values = function () {
      return e(this, function (h) {
        return h.value;
      });
    };
    c.prototype.forEach = function (h, l) {
      for (var m = this.entries(), q; !(q = m.next()).done; )
        (q = q.value), h.call(l, q[1], q[0], this);
    };
    c.prototype[Symbol.iterator] = c.prototype.entries;
    var d = function (h, l) {
        var m = l && typeof l;
        'object' == m || 'function' == m
          ? b.has(l)
            ? (m = b.get(l))
            : ((m = '' + ++g), b.set(l, m))
          : (m = 'p_' + l);
        var q = h.be[m];
        if (q && oa(h.be, m))
          for (h = 0; h < q.length; h++) {
            var y = q[h];
            if ((l !== l && y.key !== y.key) || l === y.key)
              return { id: m, list: q, index: h, Qa: y };
          }
        return { id: m, list: q, index: -1, Qa: void 0 };
      },
      e = function (h, l) {
        var m = h.hb;
        return fa(function () {
          if (m) {
            for (; m.head != h.hb; ) m = m.hc;
            for (; m.next != m.head; )
              return (m = m.next), { done: !1, value: l(m) };
            m = null;
          }
          return { done: !0, value: void 0 };
        });
      },
      f = function () {
        var h = {};
        return (h.hc = h.next = h.head = h);
      },
      g = 0;
    return c;
  });
  ea('Array.prototype.find', function (a) {
    return a
      ? a
      : function (b, c) {
          a: {
            var d = this;
            d instanceof String && (d = String(d));
            for (var e = d.length, f = 0; f < e; f++) {
              var g = d[f];
              if (b.call(c, g, f, d)) {
                b = g;
                break a;
              }
            }
            b = void 0;
          }
          return b;
        };
  });
  ea('Set', function (a) {
    if (
      (function () {
        if (
          !a ||
          'function' != typeof a ||
          !a.prototype.entries ||
          'function' != typeof Object.seal
        )
          return !1;
        try {
          var c = Object.seal({ x: 4 }),
            d = new a(ha([c]));
          if (
            !d.has(c) ||
            1 != d.size ||
            d.add(c) != d ||
            1 != d.size ||
            d.add({ x: 4 }) != d ||
            2 != d.size
          )
            return !1;
          var e = d.entries(),
            f = e.next();
          if (f.done || f.value[0] != c || f.value[1] != c) return !1;
          f = e.next();
          return f.done ||
            f.value[0] == c ||
            4 != f.value[0].x ||
            f.value[1] != f.value[0]
            ? !1
            : e.next().done;
        } catch (g) {
          return !1;
        }
      })()
    )
      return a;
    var b = function (c) {
      this.lb = new Map();
      if (c) {
        c = ha(c);
        for (var d; !(d = c.next()).done; ) this.add(d.value);
      }
      this.size = this.lb.size;
    };
    b.prototype.add = function (c) {
      c = 0 === c ? 0 : c;
      this.lb.set(c, c);
      this.size = this.lb.size;
      return this;
    };
    b.prototype.delete = function (c) {
      c = this.lb.delete(c);
      this.size = this.lb.size;
      return c;
    };
    b.prototype.clear = function () {
      this.lb.clear();
      this.size = 0;
    };
    b.prototype.has = function (c) {
      return this.lb.has(c);
    };
    b.prototype.entries = function () {
      return this.lb.entries();
    };
    b.prototype.values = function () {
      return this.lb.values();
    };
    b.prototype.keys = b.prototype.values;
    b.prototype[Symbol.iterator] = b.prototype.values;
    b.prototype.forEach = function (c, d) {
      var e = this;
      this.lb.forEach(function (f) {
        return c.call(d, f, f, e);
      });
    };
    return b;
  });
  var pa = function (a, b) {
    a instanceof String && (a += '');
    var c = 0,
      d = !1,
      e = {
        next: function () {
          if (!d && c < a.length) {
            var f = c++;
            return { value: b(f, a[f]), done: !1 };
          }
          d = !0;
          return { done: !0, value: void 0 };
        },
      };
    e[Symbol.iterator] = function () {
      return e;
    };
    return e;
  };
  ea('Array.prototype.entries', function (a) {
    return a
      ? a
      : function () {
          return pa(this, function (b, c) {
            return [b, c];
          });
        };
  });
  ea('Number.isFinite', function (a) {
    return a
      ? a
      : function (b) {
          return 'number' !== typeof b
            ? !1
            : !isNaN(b) && Infinity !== b && -Infinity !== b;
        };
  });
  ea('Array.prototype.keys', function (a) {
    return a
      ? a
      : function () {
          return pa(this, function (b) {
            return b;
          });
        };
  });
  ea('Array.from', function (a) {
    return a
      ? a
      : function (b, c, d) {
          c =
            null != c
              ? c
              : function (h) {
                  return h;
                };
          var e = [],
            f =
              'undefined' != typeof Symbol &&
              Symbol.iterator &&
              b[Symbol.iterator];
          if ('function' == typeof f) {
            b = f.call(b);
            for (var g = 0; !(f = b.next()).done; )
              e.push(c.call(d, f.value, g++));
          } else
            for (f = b.length, g = 0; g < f; g++) e.push(c.call(d, b[g], g));
          return e;
        };
  });
  ea('Object.entries', function (a) {
    return a
      ? a
      : function (b) {
          var c = [],
            d;
          for (d in b) oa(b, d) && c.push([d, b[d]]);
          return c;
        };
  });
  ea('Object.values', function (a) {
    return a
      ? a
      : function (b) {
          var c = [],
            d;
          for (d in b) oa(b, d) && c.push(b[d]);
          return c;
        };
  });
  ea('Array.prototype.values', function (a) {
    return a
      ? a
      : function () {
          return pa(this, function (b, c) {
            return c;
          });
        };
  });
  var qa = qa || {},
    p = this || self,
    r = function (a, b) {
      a = a.split('.');
      var c = p;
      a[0] in c ||
        'undefined' == typeof c.execScript ||
        c.execScript('var ' + a[0]);
      for (var d; a.length && (d = a.shift()); )
        a.length || void 0 === b
          ? (c = c[d] && c[d] !== Object.prototype[d] ? c[d] : (c[d] = {}))
          : (c[d] = b);
    },
    ra = function (a) {
      var b = typeof a;
      return 'object' != b ? b : a ? (Array.isArray(a) ? 'array' : b) : 'null';
    },
    sa = function (a) {
      var b = ra(a);
      return 'array' == b || ('object' == b && 'number' == typeof a.length);
    },
    t = function (a) {
      var b = typeof a;
      return ('object' == b && null != a) || 'function' == b;
    },
    ta = function (a, b, c) {
      return a.call.apply(a.bind, arguments);
    },
    ua = function (a, b, c) {
      if (!a) throw Error();
      if (2 < arguments.length) {
        var d = Array.prototype.slice.call(arguments, 2);
        return function () {
          var e = Array.prototype.slice.call(arguments);
          Array.prototype.unshift.apply(e, d);
          return a.apply(b, e);
        };
      }
      return function () {
        return a.apply(b, arguments);
      };
    },
    u = function (a, b, c) {
      u =
        Function.prototype.bind &&
        -1 != Function.prototype.bind.toString().indexOf('native code')
          ? ta
          : ua;
      return u.apply(null, arguments);
    },
    va = function (a, b) {
      var c = Array.prototype.slice.call(arguments, 1);
      return function () {
        var d = c.slice();
        d.push.apply(d, arguments);
        return a.apply(this, d);
      };
    },
    v = function (a, b) {
      function c() {}
      c.prototype = b.prototype;
      a.hd = b.prototype;
      a.prototype = new c();
      a.prototype.constructor = a;
      a.Xd = function (d, e, f) {
        for (
          var g = Array(arguments.length - 2), h = 2;
          h < arguments.length;
          h++
        )
          g[h - 2] = arguments[h];
        return b.prototype[e].apply(d, g);
      };
    },
    wa = function (a) {
      return a;
    };
  var xa = function (a) {
    var b = (window.___jsl = window.___jsl || {});
    b.cfg = b.cfg || {};
    b = b.cfg;
    if (!a) return b;
    a = a.split('/');
    for (var c = 0, d = a.length; b && 'object' === typeof b && c < d; ++c)
      b = b[a[c]];
    return c === a.length && void 0 !== b ? b : void 0;
  }; /*

 SPDX-License-Identifier: Apache-2.0
*/
  function ya(a, b) {
    if (Error.captureStackTrace) Error.captureStackTrace(this, ya);
    else {
      var c = Error().stack;
      c && (this.stack = c);
    }
    a && (this.message = String(a));
    void 0 !== b && (this.cause = b);
  }
  v(ya, Error);
  ya.prototype.name = 'CustomError';
  var za;
  function Aa(a, b) {
    a = a.split('%s');
    for (var c = '', d = a.length - 1, e = 0; e < d; e++)
      c += a[e] + (e < b.length ? b[e] : '%s');
    ya.call(this, c + a[d]);
  }
  v(Aa, ya);
  Aa.prototype.name = 'AssertionError';
  function Ba(a, b, c, d) {
    var e = 'Assertion failed';
    if (c) {
      e += ': ' + c;
      var f = d;
    } else a && ((e += ': ' + a), (f = b));
    throw new Aa('' + e, f || []);
  }
  var w = function (a, b, c) {
      a || Ba('', null, b, Array.prototype.slice.call(arguments, 2));
      return a;
    },
    Da = function (a, b) {
      throw new Aa(
        'Failure' + (a ? ': ' + a : ''),
        Array.prototype.slice.call(arguments, 1),
      );
    },
    Ea = function (a, b, c) {
      'number' !== typeof a &&
        Ba(
          'Expected number but got %s: %s.',
          [ra(a), a],
          b,
          Array.prototype.slice.call(arguments, 2),
        );
      return a;
    },
    Fa = function (a, b, c) {
      'string' !== typeof a &&
        Ba(
          'Expected string but got %s: %s.',
          [ra(a), a],
          b,
          Array.prototype.slice.call(arguments, 2),
        );
    },
    Ga = function (a, b, c) {
      'function' !== typeof a &&
        Ba(
          'Expected function but got %s: %s.',
          [ra(a), a],
          b,
          Array.prototype.slice.call(arguments, 2),
        );
    };
  var Ha = Array.prototype.indexOf
      ? function (a, b) {
          w(null != a.length);
          return Array.prototype.indexOf.call(a, b, void 0);
        }
      : function (a, b) {
          if ('string' === typeof a)
            return 'string' !== typeof b || 1 != b.length
              ? -1
              : a.indexOf(b, 0);
          for (var c = 0; c < a.length; c++) if (c in a && a[c] === b) return c;
          return -1;
        },
    x = Array.prototype.forEach
      ? function (a, b) {
          w(null != a.length);
          Array.prototype.forEach.call(a, b, void 0);
        }
      : function (a, b) {
          for (
            var c = a.length,
              d = 'string' === typeof a ? a.split('') : a,
              e = 0;
            e < c;
            e++
          )
            e in d && b.call(void 0, d[e], e, a);
        };
  function Ia(a, b) {
    for (
      var c = 'string' === typeof a ? a.split('') : a, d = a.length - 1;
      0 <= d;
      --d
    )
      d in c && b.call(void 0, c[d], d, a);
  }
  var Ja = Array.prototype.filter
      ? function (a, b) {
          w(null != a.length);
          return Array.prototype.filter.call(a, b, void 0);
        }
      : function (a, b) {
          for (
            var c = a.length,
              d = [],
              e = 0,
              f = 'string' === typeof a ? a.split('') : a,
              g = 0;
            g < c;
            g++
          )
            if (g in f) {
              var h = f[g];
              b.call(void 0, h, g, a) && (d[e++] = h);
            }
          return d;
        },
    Ka = Array.prototype.map
      ? function (a, b) {
          w(null != a.length);
          return Array.prototype.map.call(a, b, void 0);
        }
      : function (a, b) {
          for (
            var c = a.length,
              d = Array(c),
              e = 'string' === typeof a ? a.split('') : a,
              f = 0;
            f < c;
            f++
          )
            f in e && (d[f] = b.call(void 0, e[f], f, a));
          return d;
        },
    La = Array.prototype.some
      ? function (a, b) {
          w(null != a.length);
          return Array.prototype.some.call(a, b, void 0);
        }
      : function (a, b) {
          for (
            var c = a.length,
              d = 'string' === typeof a ? a.split('') : a,
              e = 0;
            e < c;
            e++
          )
            if (e in d && b.call(void 0, d[e], e, a)) return !0;
          return !1;
        };
  function Ma(a, b) {
    return 0 <= Ha(a, b);
  }
  function Na(a, b) {
    b = Ha(a, b);
    var c;
    (c = 0 <= b) && Oa(a, b);
    return c;
  }
  function Oa(a, b) {
    w(null != a.length);
    return 1 == Array.prototype.splice.call(a, b, 1).length;
  }
  function Pa(a, b) {
    var c = 0;
    Ia(a, function (d, e) {
      b.call(void 0, d, e, a) && Oa(a, e) && c++;
    });
  }
  function Qa(a) {
    var b = a.length;
    if (0 < b) {
      for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
      return c;
    }
    return [];
  }
  function Ra(a, b) {
    for (var c = 0, d = a.length, e; c < d; ) {
      var f = c + ((d - c) >>> 1);
      var g = b.call(void 0, a[f], f, a);
      0 < g ? (c = f + 1) : ((d = f), (e = !g));
    }
    return e ? c : -c - 1;
  }
  function Sa(a, b) {
    for (var c in a) b.call(void 0, a[c], c, a);
  }
  function Ta(a, b) {
    for (var c in a) if (b.call(void 0, a[c], c, a)) return !0;
    return !1;
  }
  function Ua(a) {
    for (var b in a) return !1;
    return !0;
  }
  function Va(a) {
    var b = {},
      c;
    for (c in a) b[c] = a[c];
    return b;
  }
  var Wa =
    'constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf'.split(
      ' ',
    );
  function Xa(a, b) {
    for (var c, d, e = 1; e < arguments.length; e++) {
      d = arguments[e];
      for (c in d) a[c] = d[c];
      for (var f = 0; f < Wa.length; f++)
        (c = Wa[f]),
          Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
    }
  }
  var Ya,
    Za = function () {
      if (void 0 === Ya) {
        var a = null,
          b = p.trustedTypes;
        if (b && b.createPolicy)
          try {
            a = b.createPolicy('goog#html', {
              createHTML: wa,
              createScript: wa,
              createScriptURL: wa,
            });
          } catch (c) {
            p.console && p.console.error(c.message);
          }
        Ya = a;
      }
      return Ya;
    };
  var bb = function (a, b) {
    this.Sh = (a === $a && b) || '';
    this.mk = ab;
  };
  bb.prototype.yd = !0;
  bb.prototype.xd = function () {
    return this.Sh;
  };
  bb.prototype.toString = function () {
    return 'Const{' + this.Sh + '}';
  };
  var cb = function (a) {
      if (a instanceof bb && a.constructor === bb && a.mk === ab) return a.Sh;
      Da("expected object of type Const, got '" + a + "'");
      return 'type_error:Const';
    },
    ab = {},
    $a = {};
  var eb = function (a, b) {
    this.sh = b === db ? a : '';
  };
  eb.prototype.toString = function () {
    return this.sh + '';
  };
  eb.prototype.yd = !0;
  eb.prototype.xd = function () {
    return this.sh.toString();
  };
  var fb = function (a) {
      if (a instanceof eb && a.constructor === eb) return a.sh;
      Da(
        "expected object of type TrustedResourceUrl, got '" +
          a +
          "' of type " +
          ra(a),
      );
      return 'type_error:TrustedResourceUrl';
    },
    jb = function (a, b) {
      var c = cb(a);
      if (!gb.test(c)) throw Error('Invalid TrustedResourceUrl format: ' + c);
      a = c.replace(hb, function (d, e) {
        if (!Object.prototype.hasOwnProperty.call(b, e))
          throw Error(
            'Found marker, "' +
              e +
              '", in format string, "' +
              c +
              '", but no valid label mapping found in args: ' +
              JSON.stringify(b),
          );
        d = b[e];
        return d instanceof bb ? cb(d) : encodeURIComponent(String(d));
      });
      return ib(a);
    },
    hb = /%{(\w+)}/g,
    gb = RegExp(
      '^((https:)?//[0-9a-z.:[\\]-]+/|/[^/\\\\]|[^:/\\\\%]+/|[^:/\\\\%]*[?#]|about:blank#)',
      'i',
    ),
    db = {},
    ib = function (a) {
      var b = Za();
      a = b ? b.createScriptURL(a) : a;
      return new eb(a, db);
    };
  var kb = String.prototype.trim
      ? function (a) {
          return a.trim();
        }
      : function (a) {
          return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1];
        },
    lb = /&/g,
    mb = /</g,
    nb = />/g,
    ob = /"/g,
    pb = /'/g,
    qb = /\x00/g,
    rb = /[\x00&<>"']/,
    z = function (a, b) {
      return -1 != a.indexOf(b);
    },
    sb = function (a, b) {
      return a < b ? -1 : a > b ? 1 : 0;
    };
  var ub = function (a, b) {
    this.rh = b === tb ? a : '';
  };
  ub.prototype.toString = function () {
    return this.rh.toString();
  };
  ub.prototype.yd = !0;
  ub.prototype.xd = function () {
    return this.rh.toString();
  };
  var vb = function (a) {
      if (a instanceof ub && a.constructor === ub) return a.rh;
      Da("expected object of type SafeUrl, got '" + a + "' of type " + ra(a));
      return 'type_error:SafeUrl';
    },
    wb = /^data:(.*);base64,[a-z0-9+\/]+=*$/i,
    xb = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,
    yb = function (a) {
      if (a instanceof ub) return a;
      a = 'object' == typeof a && a.yd ? a.xd() : String(a);
      xb.test(a)
        ? (a = new ub(a, tb))
        : ((a = String(a).replace(/(%0A|%0D)/g, '')),
          (a = a.match(wb) ? new ub(a, tb) : null));
      return a;
    },
    zb = function (a) {
      if (a instanceof ub) return a;
      a = 'object' == typeof a && a.yd ? a.xd() : String(a);
      w(xb.test(a), '%s does not match the safe URL pattern', a) ||
        (a = 'about:invalid#zClosurez');
      return new ub(a, tb);
    },
    tb = {},
    Ab = new ub('about:invalid#zClosurez', tb);
  function Bb() {
    var a = p.navigator;
    return a && (a = a.userAgent) ? a : '';
  }
  function A(a) {
    return z(Bb(), a);
  }
  function Cb() {
    return ((A('Chrome') || A('CriOS')) && !A('Edge')) || A('Silk');
  }
  var Db = {},
    Eb = function (a, b) {
      this.qh = b === Db ? a : '';
      this.yd = !0;
    };
  Eb.prototype.xd = function () {
    return this.qh.toString();
  };
  Eb.prototype.toString = function () {
    return this.qh.toString();
  };
  var Fb = function (a) {
    if (a instanceof Eb && a.constructor === Eb) return a.qh;
    Da("expected object of type SafeHtml, got '" + a + "' of type " + ra(a));
    return 'type_error:SafeHtml';
  };
  var Gb = function (a, b) {
    a: {
      try {
        var c = a && a.ownerDocument,
          d = c && (c.defaultView || c.parentWindow);
        d = d || p;
        if (d.Element && d.Location) {
          var e = d;
          break a;
        }
      } catch (g) {}
      e = null;
    }
    if (
      e &&
      'undefined' != typeof e[b] &&
      (!a ||
        (!(a instanceof e[b]) &&
          (a instanceof e.Location || a instanceof e.Element)))
    ) {
      if (t(a))
        try {
          var f =
            a.constructor.displayName ||
            a.constructor.name ||
            Object.prototype.toString.call(a);
        } catch (g) {
          f = '<object could not be stringified>';
        }
      else f = void 0 === a ? 'undefined' : null === a ? 'null' : typeof a;
      Da(
        'Argument is not a %s (or a non-Element, non-Location mock); got: %s',
        b,
        f,
      );
    }
    return a;
  };
  function Hb() {
    return A('iPhone') && !A('iPod') && !A('iPad');
  }
  var Ib = function (a) {
    Ib[' '](a);
    return a;
  };
  Ib[' '] = function () {};
  var Kb = function (a) {
    var b = Jb;
    return Object.prototype.hasOwnProperty.call(b, 9) ? b[9] : (b[9] = a(9));
  };
  var Lb = A('Opera'),
    Mb = A('Trident') || A('MSIE'),
    Nb = A('Edge'),
    Ob = Nb || Mb,
    Pb =
      A('Gecko') &&
      !(z(Bb().toLowerCase(), 'webkit') && !A('Edge')) &&
      !(A('Trident') || A('MSIE')) &&
      !A('Edge'),
    Qb = z(Bb().toLowerCase(), 'webkit') && !A('Edge'),
    Rb = Qb && A('Mobile'),
    Sb = function () {
      var a = p.document;
      return a ? a.documentMode : void 0;
    },
    Tb;
  a: {
    var Ub = '',
      Vb = (function () {
        var a = Bb();
        if (Pb) return /rv:([^\);]+)(\)|;)/.exec(a);
        if (Nb) return /Edge\/([\d\.]+)/.exec(a);
        if (Mb) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
        if (Qb) return /WebKit\/(\S+)/.exec(a);
        if (Lb) return /(?:Version)[ \/]?(\S+)/.exec(a);
      })();
    Vb && (Ub = Vb ? Vb[1] : '');
    if (Mb) {
      var Wb = Sb();
      if (null != Wb && Wb > parseFloat(Ub)) {
        Tb = String(Wb);
        break a;
      }
    }
    Tb = Ub;
  }
  var Xb = Tb,
    Jb = {},
    Yb = function () {
      return Kb(function () {
        for (
          var a = 0,
            b = kb(String(Xb)).split('.'),
            c = kb('9').split('.'),
            d = Math.max(b.length, c.length),
            e = 0;
          0 == a && e < d;
          e++
        ) {
          var f = b[e] || '',
            g = c[e] || '';
          do {
            f = /(\d*)(\D*)(.*)/.exec(f) || ['', '', '', ''];
            g = /(\d*)(\D*)(.*)/.exec(g) || ['', '', '', ''];
            if (0 == f[0].length && 0 == g[0].length) break;
            a =
              sb(
                0 == f[1].length ? 0 : parseInt(f[1], 10),
                0 == g[1].length ? 0 : parseInt(g[1], 10),
              ) ||
              sb(0 == f[2].length, 0 == g[2].length) ||
              sb(f[2], g[2]);
            f = f[3];
            g = g[3];
          } while (0 == a);
        }
        return 0 <= a;
      });
    },
    Zb;
  if (p.document && Mb) {
    var $b = Sb();
    Zb = $b ? $b : parseInt(Xb, 10) || void 0;
  } else Zb = void 0;
  var ac = Zb;
  try {
    new self.OffscreenCanvas(0, 0).getContext('2d');
  } catch (a) {}
  var bc = function () {},
    cc = function (a) {
      return 'function' === typeof a;
    };
  var dc = function (a, b) {
    Fa(cb(a), 'must provide justification');
    w(!/^[\s\xa0]*$/.test(cb(a)), 'must provide non-empty justification');
    a = b;
    a = (b = Za()) ? b.createHTML(a) : a;
    return new Eb(a, Db);
  };
  var ec = function (a, b) {
      Gb(a, 'HTMLAnchorElement');
      b = b instanceof ub ? b : zb(b);
      a.href = vb(b);
    },
    gc = function (a, b) {
      Gb(a, 'HTMLScriptElement');
      a: {
        var c = ((a.ownerDocument && a.ownerDocument.defaultView) || p)
          .document;
        if (
          c.querySelector &&
          (c = c.querySelector('script[nonce]')) &&
          (c = c.nonce || c.getAttribute('nonce')) &&
          fc.test(c)
        )
          break a;
        c = '';
      }
      c && a.setAttribute('nonce', c);
      a.src = fb(b);
    },
    hc = function (a, b, c, d) {
      a = a instanceof ub ? a : zb(a);
      b = b || p;
      c = c instanceof bb ? cb(c) : c || '';
      return void 0 !== d ? b.open(vb(a), c, d) : b.open(vb(a), c);
    },
    fc = /^[\w+/_-]+[=]{0,2}$/;
  var ic = function (a, b) {
    for (
      var c = a.split('%s'),
        d = '',
        e = Array.prototype.slice.call(arguments, 1);
      e.length && 1 < c.length;

    )
      d += c.shift() + e.shift();
    return d + c.join('%s');
  };
  var jc = function (a) {
      var b = document;
      return 'string' === typeof a ? b.getElementById(a) : a;
    },
    lc = function (a, b) {
      Sa(b, function (c, d) {
        c && 'object' == typeof c && c.yd && (c = c.xd());
        'style' == d
          ? (a.style.cssText = c)
          : 'class' == d
          ? (a.className = c)
          : 'for' == d
          ? (a.htmlFor = c)
          : kc.hasOwnProperty(d)
          ? a.setAttribute(kc[d], c)
          : 0 == d.lastIndexOf('aria-', 0) || 0 == d.lastIndexOf('data-', 0)
          ? a.setAttribute(d, c)
          : (a[d] = c);
      });
    },
    kc = {
      cellpadding: 'cellPadding',
      cellspacing: 'cellSpacing',
      colspan: 'colSpan',
      frameborder: 'frameBorder',
      height: 'height',
      maxlength: 'maxLength',
      nonce: 'nonce',
      role: 'role',
      rowspan: 'rowSpan',
      type: 'type',
      usemap: 'useMap',
      valign: 'vAlign',
      width: 'width',
    },
    nc = function (a, b, c) {
      return mc(document, arguments);
    },
    mc = function (a, b) {
      var c = b[1],
        d = oc(a, String(b[0]));
      c &&
        ('string' === typeof c
          ? (d.className = c)
          : Array.isArray(c)
          ? (d.className = c.join(' '))
          : lc(d, c));
      2 < b.length && pc(a, d, b, 2);
      return d;
    },
    pc = function (a, b, c, d) {
      function e(h) {
        h && b.appendChild('string' === typeof h ? a.createTextNode(h) : h);
      }
      for (; d < c.length; d++) {
        var f = c[d];
        if (!sa(f) || (t(f) && 0 < f.nodeType)) e(f);
        else {
          a: {
            if (f && 'number' == typeof f.length) {
              if (t(f)) {
                var g =
                  'function' == typeof f.item || 'string' == typeof f.item;
                break a;
              }
              if ('function' === typeof f) {
                g = 'function' == typeof f.item;
                break a;
              }
            }
            g = !1;
          }
          x(g ? Qa(f) : f, e);
        }
      }
    },
    oc = function (a, b) {
      b = String(b);
      'application/xhtml+xml' === a.contentType && (b = b.toLowerCase());
      return a.createElement(b);
    },
    qc = function (a) {
      for (var b; (b = a.firstChild); ) a.removeChild(b);
    },
    rc = function (a) {
      return a && a.parentNode ? a.parentNode.removeChild(a) : null;
    },
    sc = function (a) {
      w(a, 'Node cannot be null or undefined.');
      return 9 == a.nodeType ? a : a.ownerDocument || a.document;
    },
    tc = function (a) {
      this.fe = a || p.document || document;
    };
  k = tc.prototype;
  k.getElementsByTagName = function (a, b) {
    return (b || this.fe).getElementsByTagName(String(a));
  };
  k.Ck = function (a, b, c) {
    return mc(this.fe, arguments);
  };
  k.createElement = function (a) {
    return oc(this.fe, a);
  };
  k.createTextNode = function (a) {
    return this.fe.createTextNode(String(a));
  };
  k.getWindow = function () {
    var a = this.fe;
    return a.parentWindow || a.defaultView;
  };
  k.appendChild = function (a, b) {
    w(
      null != a && null != b,
      'goog.dom.appendChild expects non-null arguments',
    );
    a.appendChild(b);
  };
  k.append = function (a, b) {
    pc(sc(a), a, arguments, 1);
  };
  k.canHaveChildren = function (a) {
    if (1 != a.nodeType) return !1;
    switch (a.tagName) {
      case 'APPLET':
      case 'AREA':
      case 'BASE':
      case 'BR':
      case 'COL':
      case 'COMMAND':
      case 'EMBED':
      case 'FRAME':
      case 'HR':
      case 'IMG':
      case 'INPUT':
      case 'IFRAME':
      case 'ISINDEX':
      case 'KEYGEN':
      case 'LINK':
      case 'NOFRAMES':
      case 'NOSCRIPT':
      case 'META':
      case 'OBJECT':
      case 'PARAM':
      case 'SCRIPT':
      case 'SOURCE':
      case 'STYLE':
      case 'TRACK':
      case 'WBR':
        return !1;
    }
    return !0;
  };
  k.removeNode = rc;
  k.isElement = function (a) {
    return t(a) && 1 == a.nodeType;
  };
  k.contains = function (a, b) {
    if (!a || !b) return !1;
    if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
    if ('undefined' != typeof a.compareDocumentPosition)
      return a == b || !!(a.compareDocumentPosition(b) & 16);
    for (; b && a != b; ) b = b.parentNode;
    return b == a;
  }; /*
 gapi.loader.OBJECT_CREATE_TEST_OVERRIDE &&*/
  var C = window,
    uc = document,
    vc = /\[native code\]/,
    wc = function (a, b, c) {
      return (a[b] = a[b] || c);
    },
    xc = function (a) {
      return !!a && 'object' === typeof a && vc.test(a.push);
    },
    yc = function (a) {
      for (var b = 0; b < this.length; b++) if (this[b] === a) return b;
      return -1;
    },
    Ac = function (a, b, c) {
      if (a)
        if (xc(a)) {
          if (a) {
            D(xc(a), 'arrayForEach was called with a non array value');
            for (var d = 0; d < a.length; d++) b.call(c, a[d], d);
          }
        } else
          for (d in (D(
            'object' === typeof a,
            'objectForEach was called with a non object value',
          ),
          (c = c || a),
          a))
            zc(a, d) && void 0 !== a[d] && b.call(c, a[d], d);
    },
    Bc = /&/g,
    Dc = /</g,
    Ec = />/g,
    Fc = /"/g,
    Gc = /'/g,
    Hc = function (a) {
      return String(a)
        .replace(Bc, '&amp;')
        .replace(Dc, '&lt;')
        .replace(Ec, '&gt;')
        .replace(Fc, '&quot;')
        .replace(Gc, '&#39;');
    },
    Ic = function () {
      var a;
      if ((a = Object.create) && vc.test(a)) a = a(null);
      else {
        a = {};
        for (var b in a) a[b] = void 0;
      }
      return a;
    },
    zc = function (a, b) {
      return Object.prototype.hasOwnProperty.call(a, b);
    },
    Jc = function (a, b) {
      a = a || {};
      for (var c in a) zc(a, c) && (b[c] = a[c]);
    },
    D = function (a, b) {
      if (!a) throw Error(b || '');
    },
    Kc = wc(C, 'gapi', {});
  var Lc = function (a, b, c) {
      var d = new RegExp('([#].*&|[#])' + b + '=([^&#]*)', 'g');
      b = new RegExp('([?#].*&|[?#])' + b + '=([^&#]*)', 'g');
      if ((a = a && (d.exec(a) || b.exec(a))))
        try {
          c = decodeURIComponent(a[2]);
        } catch (e) {}
      return c;
    },
    Mc = new RegExp(
      /^/.source +
        /([a-zA-Z][-+.a-zA-Z0-9]*:)?/.source +
        /(\/\/[^\/?#]*)?/.source +
        /([^?#]*)?/.source +
        /(\?([^#]*))?/.source +
        /(#((#|[^#])*))?/.source +
        /$/.source,
    ),
    Nc = /[\ud800-\udbff][\udc00-\udfff]|[^!-~]/g,
    Oc = new RegExp(
      /(%([^0-9a-fA-F%]|[0-9a-fA-F]([^0-9a-fA-F%])?)?)*/.source +
        /%($|[^0-9a-fA-F]|[0-9a-fA-F]($|[^0-9a-fA-F]))/.source,
      'g',
    ),
    Pc = /%([a-f]|[0-9a-fA-F][a-f])/g,
    Qc = /^(https?|ftp|file|chrome-extension):$/i,
    Rc = function (a) {
      a = String(a);
      a = a
        .replace(Nc, function (e) {
          try {
            return encodeURIComponent(e);
          } catch (f) {
            return encodeURIComponent(e.replace(/^[^%]+$/g, '\ufffd'));
          }
        })
        .replace(Oc, function (e) {
          return e.replace(/%/g, '%25');
        })
        .replace(Pc, function (e) {
          return e.toUpperCase();
        });
      a = a.match(Mc) || [];
      var b = Ic(),
        c = function (e) {
          return e
            .replace(/\\/g, '%5C')
            .replace(/\^/g, '%5E')
            .replace(/`/g, '%60')
            .replace(/\{/g, '%7B')
            .replace(/\|/g, '%7C')
            .replace(/\}/g, '%7D');
        },
        d = !!(a[1] || '').match(Qc);
      b.Xd = c((a[1] || '') + (a[2] || '') + (a[3] || (a[2] && d ? '/' : '')));
      d = function (e) {
        return c(e.replace(/\?/g, '%3F').replace(/#/g, '%23'));
      };
      b.query = a[5] ? [d(a[5])] : [];
      b.Vb = a[7] ? [d(a[7])] : [];
      return b;
    },
    Sc = function (a) {
      return (
        a.Xd +
        (0 < a.query.length ? '?' + a.query.join('&') : '') +
        (0 < a.Vb.length ? '#' + a.Vb.join('&') : '')
      );
    },
    Tc = function (a, b) {
      var c = [];
      if (a)
        for (var d in a)
          if (zc(a, d) && null != a[d]) {
            var e = b ? b(a[d]) : a[d];
            c.push(encodeURIComponent(d) + '=' + encodeURIComponent(e));
          }
      return c;
    },
    Uc = new RegExp(
      /\/?\??#?/.source +
        '(' +
        /[\/?#]/i.source +
        '|' +
        /[\uD800-\uDBFF]/i.source +
        '|' +
        /%[c-f][0-9a-f](%[89ab][0-9a-f]){0,2}(%[89ab]?)?/i.source +
        '|' +
        /%[0-9a-f]?/i.source +
        ')$',
      'i',
    ),
    Vc = function (a, b) {
      var c = Rc(b);
      b = c.Xd;
      c.query.length && (b += '?' + c.query.join(''));
      c.Vb.length && (b += '#' + c.Vb.join(''));
      var d = '';
      2e3 < b.length &&
        ((c = b),
        (b = b.substr(0, 2e3)),
        (b = b.replace(Uc, '')),
        (d = c.substr(b.length)));
      var e = a.createElement('div');
      a = a.createElement('a');
      c = Rc(b);
      b = c.Xd;
      c.query.length && (b += '?' + c.query.join(''));
      c.Vb.length && (b += '#' + c.Vb.join(''));
      ec(a, new ub(b, tb));
      e.appendChild(a);
      b = dc(new bb($a, 'Assignment to self.'), e.innerHTML);
      if (void 0 !== e.tagName) {
        if ('script' === e.tagName.toLowerCase())
          throw Error('Use setTextContent with a SafeScript.');
        if ('style' === e.tagName.toLowerCase())
          throw Error('Use setTextContent with a SafeStyleSheet.');
      }
      e.innerHTML = Fb(b);
      b = String(e.firstChild.href);
      e.parentNode && e.parentNode.removeChild(e);
      c = Rc(b + d);
      b = c.Xd;
      c.query.length && (b += '?' + c.query.join(''));
      c.Vb.length && (b += '#' + c.Vb.join(''));
      return b;
    },
    Wc = /^https?:\/\/[^\/%\\?#\s]+\/[^\s]*$/i;
  var Xc;
  var Zc = function (a, b, c) {
      Yc(a, b, c, 'add', 'at');
    },
    Yc = function (a, b, c, d, e) {
      if (a[d + 'EventListener']) a[d + 'EventListener'](b, c, !1);
      else if (a[e + 'tachEvent']) a[e + 'tachEvent']('on' + b, c);
    },
    $c = function (a) {
      for (; a.firstChild; ) a.removeChild(a.firstChild);
    };
  var ad =
      /^https?:\/\/(?:\w|[\-\.])+\.google\.(?:\w|[\-:\.])+(?:\/[^\?#]*)?\/u\/(\d)\//,
    bd =
      /^https?:\/\/(?:\w|[\-\.])+\.google\.(?:\w|[\-:\.])+(?:\/[^\?#]*)?\/b\/(\d{10,21})\//,
    cd = function () {
      var a = xa('googleapis.config/sessionIndex');
      'string' === typeof a && 254 < a.length && (a = null);
      null == a && (a = window.__X_GOOG_AUTHUSER);
      'string' === typeof a && 254 < a.length && (a = null);
      if (null == a) {
        var b = window.google;
        b && (a = b.authuser);
      }
      'string' === typeof a && 254 < a.length && (a = null);
      null == a &&
        ((b = window.location.href),
        (a = Lc(b, 'authuser') || null),
        null == a && (a = (a = b.match(ad)) ? a[1] : null));
      if (null == a) return null;
      a = String(a);
      254 < a.length && (a = null);
      return a;
    },
    dd = function () {
      var a = xa('googleapis.config/sessionDelegate');
      'string' === typeof a && 21 < a.length && (a = null);
      null == a && (a = (a = window.location.href.match(bd)) ? a[1] : null);
      if (null == a) return null;
      a = String(a);
      21 < a.length && (a = null);
      return a;
    };
  var ed = {};
  ed = wc(C, '___jsl', Ic());
  wc(ed, 'I', 0);
  wc(ed, 'hel', 10);
  var fd,
    gd,
    hd = void 0,
    id = function (a) {
      try {
        return p.JSON.parse.call(p.JSON, a);
      } catch (b) {
        return !1;
      }
    },
    jd = function (a) {
      return Object.prototype.toString.call(a);
    },
    kd = jd(0),
    ld = jd(new Date(0)),
    md = jd(!0),
    nd = jd(''),
    od = jd({}),
    pd = jd([]),
    qd = function (a, b) {
      if (b)
        for (var c = 0, d = b.length; c < d; ++c)
          if (a === b[c])
            throw new TypeError('Converting circular structure to JSON');
      d = typeof a;
      if ('undefined' !== d) {
        c = Array.prototype.slice.call(b || [], 0);
        c[c.length] = a;
        b = [];
        var e = jd(a);
        if (
          null != a &&
          'function' === typeof a.toJSON &&
          (Object.prototype.hasOwnProperty.call(a, 'toJSON') ||
            ((e !== pd ||
              (a.constructor !== Array && a.constructor !== Object)) &&
              (e !== od ||
                (a.constructor !== Array && a.constructor !== Object)) &&
              e !== nd &&
              e !== kd &&
              e !== md &&
              e !== ld))
        )
          return qd(a.toJSON.call(a), c);
        if (null == a) b[b.length] = 'null';
        else if (e === kd)
          (a = Number(a)),
            isNaN(a) || isNaN(a - a)
              ? (a = 'null')
              : -0 === a && 0 > 1 / a && (a = '-0'),
            (b[b.length] = String(a));
        else if (e === md) b[b.length] = String(!!Number(a));
        else {
          if (e === ld) return qd(a.toISOString.call(a), c);
          if (e === pd && jd(a.length) === kd) {
            b[b.length] = '[';
            var f = 0;
            for (d = Number(a.length) >> 0; f < d; ++f)
              f && (b[b.length] = ','), (b[b.length] = qd(a[f], c) || 'null');
            b[b.length] = ']';
          } else if (e == nd && jd(a.length) === kd) {
            b[b.length] = '"';
            f = 0;
            for (c = Number(a.length) >> 0; f < c; ++f)
              (d = String.prototype.charAt.call(a, f)),
                (e = String.prototype.charCodeAt.call(a, f)),
                (b[b.length] =
                  '\b' === d
                    ? '\\b'
                    : '\f' === d
                    ? '\\f'
                    : '\n' === d
                    ? '\\n'
                    : '\r' === d
                    ? '\\r'
                    : '\t' === d
                    ? '\\t'
                    : '\\' === d || '"' === d
                    ? '\\' + d
                    : 31 >= e
                    ? '\\u' + (e + 65536).toString(16).substr(1)
                    : 32 <= e && 65535 >= e
                    ? d
                    : '\ufffd');
            b[b.length] = '"';
          } else if ('object' === d) {
            b[b.length] = '{';
            d = 0;
            for (f in a)
              Object.prototype.hasOwnProperty.call(a, f) &&
                ((e = qd(a[f], c)),
                void 0 !== e &&
                  (d++ && (b[b.length] = ','),
                  (b[b.length] = qd(f)),
                  (b[b.length] = ':'),
                  (b[b.length] = e)));
            b[b.length] = '}';
          } else return;
        }
        return b.join('');
      }
    },
    rd = /[\0-\x07\x0b\x0e-\x1f]/,
    sd = /^([^"]*"([^\\"]|\\.)*")*[^"]*"([^"\\]|\\.)*[\0-\x1f]/,
    td = /^([^"]*"([^\\"]|\\.)*")*[^"]*"([^"\\]|\\.)*\\[^\\\/"bfnrtu]/,
    ud =
      /^([^"]*"([^\\"]|\\.)*")*[^"]*"([^"\\]|\\.)*\\u([0-9a-fA-F]{0,3}[^0-9a-fA-F])/,
    vd = /"([^\0-\x1f\\"]|\\[\\\/"bfnrt]|\\u[0-9a-fA-F]{4})*"/g,
    wd = /-?(0|[1-9][0-9]*)(\.[0-9]+)?([eE][-+]?[0-9]+)?/g,
    xd = /[ \t\n\r]+/g,
    yd = /[^"]:/,
    zd = /""/g,
    Ad = /true|false|null/g,
    Bd = /00/,
    Cd = /[\{]([^0\}]|0[^:])/,
    Dd = /(^|\[)[,:]|[,:](\]|\}|[,:]|$)/,
    Ed = /[^\[,:][\[\{]/,
    Fd = /^(\{|\}|\[|\]|,|:|0)+/,
    Gd = /\u2028/g,
    Hd = /\u2029/g,
    Id = function (a) {
      a = String(a);
      if (rd.test(a) || sd.test(a) || td.test(a) || ud.test(a)) return !1;
      var b = a.replace(vd, '""');
      b = b.replace(wd, '0');
      b = b.replace(xd, '');
      if (yd.test(b)) return !1;
      b = b.replace(zd, '0');
      b = b.replace(Ad, '0');
      if (
        Bd.test(b) ||
        Cd.test(b) ||
        Dd.test(b) ||
        Ed.test(b) ||
        !b ||
        (b = b.replace(Fd, ''))
      )
        return !1;
      a = a.replace(Gd, '\\u2028').replace(Hd, '\\u2029');
      b = void 0;
      try {
        b = hd
          ? [id(a)]
          : eval(
              '(function (var_args) {\n  return Array.prototype.slice.call(arguments, 0);\n})(\n' +
                a +
                '\n)',
            );
      } catch (c) {
        return !1;
      }
      return b && 1 === b.length ? b[0] : !1;
    },
    Jd = function () {
      var a = ((p.document || {}).scripts || []).length;
      if ((void 0 === fd || void 0 === hd || gd !== a) && -1 !== gd) {
        fd = hd = !1;
        gd = -1;
        try {
          try {
            hd =
              !!p.JSON &&
              '{"a":[3,true,"1970-01-01T00:00:00.000Z"]}' ===
                p.JSON.stringify.call(p.JSON, {
                  a: [3, !0, new Date(0)],
                  c: function () {},
                }) &&
              !0 === id('true') &&
              3 === id('[{"a":3}]')[0].a;
          } catch (b) {}
          fd =
            hd &&
            !id('[00]') &&
            !id('"\u0007"') &&
            !id('"\\0"') &&
            !id('"\\v"');
        } finally {
          gd = a;
        }
      }
    },
    Kd = function (a) {
      if (-1 === gd) return !1;
      Jd();
      return (fd ? id : Id)(a);
    },
    Ld = function (a) {
      if (-1 !== gd) return Jd(), hd ? p.JSON.stringify.call(p.JSON, a) : qd(a);
    },
    Md =
      !Date.prototype.toISOString ||
      'function' !== typeof Date.prototype.toISOString ||
      '1970-01-01T00:00:00.000Z' !== new Date(0).toISOString(),
    Nd = function () {
      var a = Date.prototype.getUTCFullYear.call(this);
      return [
        0 > a
          ? '-' + String(1e6 - a).substr(1)
          : 9999 >= a
          ? String(1e4 + a).substr(1)
          : '+' + String(1e6 + a).substr(1),
        '-',
        String(101 + Date.prototype.getUTCMonth.call(this)).substr(1),
        '-',
        String(100 + Date.prototype.getUTCDate.call(this)).substr(1),
        'T',
        String(100 + Date.prototype.getUTCHours.call(this)).substr(1),
        ':',
        String(100 + Date.prototype.getUTCMinutes.call(this)).substr(1),
        ':',
        String(100 + Date.prototype.getUTCSeconds.call(this)).substr(1),
        '.',
        String(1e3 + Date.prototype.getUTCMilliseconds.call(this)).substr(1),
        'Z',
      ].join('');
    };
  Date.prototype.toISOString = Md ? Nd : Date.prototype.toISOString;
  var Od = function () {
    this.blockSize = -1;
  };
  var Pd = function () {
    this.blockSize = -1;
    this.blockSize = 64;
    this.ya = [];
    this.ug = [];
    this.nk = [];
    this.Hf = [];
    this.Hf[0] = 128;
    for (var a = 1; a < this.blockSize; ++a) this.Hf[a] = 0;
    this.mc = this.Ad = 0;
    this.reset();
  };
  v(Pd, Od);
  Pd.prototype.reset = function () {
    this.ya[0] = 1732584193;
    this.ya[1] = 4023233417;
    this.ya[2] = 2562383102;
    this.ya[3] = 271733878;
    this.ya[4] = 3285377520;
    this.mc = this.Ad = 0;
  };
  var Qd = function (a, b, c) {
    c || (c = 0);
    var d = a.nk;
    if ('string' === typeof b)
      for (var e = 0; 16 > e; e++)
        (d[e] =
          (b.charCodeAt(c) << 24) |
          (b.charCodeAt(c + 1) << 16) |
          (b.charCodeAt(c + 2) << 8) |
          b.charCodeAt(c + 3)),
          (c += 4);
    else
      for (e = 0; 16 > e; e++)
        (d[e] = (b[c] << 24) | (b[c + 1] << 16) | (b[c + 2] << 8) | b[c + 3]),
          (c += 4);
    for (e = 16; 80 > e; e++) {
      var f = d[e - 3] ^ d[e - 8] ^ d[e - 14] ^ d[e - 16];
      d[e] = ((f << 1) | (f >>> 31)) & 4294967295;
    }
    b = a.ya[0];
    c = a.ya[1];
    var g = a.ya[2],
      h = a.ya[3],
      l = a.ya[4];
    for (e = 0; 80 > e; e++) {
      if (40 > e)
        if (20 > e) {
          f = h ^ (c & (g ^ h));
          var m = 1518500249;
        } else (f = c ^ g ^ h), (m = 1859775393);
      else
        60 > e
          ? ((f = (c & g) | (h & (c | g))), (m = 2400959708))
          : ((f = c ^ g ^ h), (m = 3395469782));
      f = (((b << 5) | (b >>> 27)) + f + l + m + d[e]) & 4294967295;
      l = h;
      h = g;
      g = ((c << 30) | (c >>> 2)) & 4294967295;
      c = b;
      b = f;
    }
    a.ya[0] = (a.ya[0] + b) & 4294967295;
    a.ya[1] = (a.ya[1] + c) & 4294967295;
    a.ya[2] = (a.ya[2] + g) & 4294967295;
    a.ya[3] = (a.ya[3] + h) & 4294967295;
    a.ya[4] = (a.ya[4] + l) & 4294967295;
  };
  Pd.prototype.update = function (a, b) {
    if (null != a) {
      void 0 === b && (b = a.length);
      for (
        var c = b - this.blockSize, d = 0, e = this.ug, f = this.Ad;
        d < b;

      ) {
        if (0 == f) for (; d <= c; ) Qd(this, a, d), (d += this.blockSize);
        if ('string' === typeof a)
          for (; d < b; ) {
            if (((e[f] = a.charCodeAt(d)), ++f, ++d, f == this.blockSize)) {
              Qd(this, e);
              f = 0;
              break;
            }
          }
        else
          for (; d < b; )
            if (((e[f] = a[d]), ++f, ++d, f == this.blockSize)) {
              Qd(this, e);
              f = 0;
              break;
            }
      }
      this.Ad = f;
      this.mc += b;
    }
  };
  Pd.prototype.digest = function () {
    var a = [],
      b = 8 * this.mc;
    56 > this.Ad
      ? this.update(this.Hf, 56 - this.Ad)
      : this.update(this.Hf, this.blockSize - (this.Ad - 56));
    for (var c = this.blockSize - 1; 56 <= c; c--)
      (this.ug[c] = b & 255), (b /= 256);
    Qd(this, this.ug);
    for (c = b = 0; 5 > c; c++)
      for (var d = 24; 0 <= d; d -= 8) (a[b] = (this.ya[c] >> d) & 255), ++b;
    return a;
  };
  var Rd = function () {
    this.Mh = new Pd();
  };
  k = Rd.prototype;
  k.reset = function () {
    this.Mh.reset();
  };
  k.updateByteArray = function (a) {
    this.Mh.update(a);
  };
  k.digestByteArray = function () {
    return this.Mh.digest();
  };
  k.updateString = function (a) {
    a = unescape(encodeURIComponent(a));
    for (var b = [], c = 0, d = a.length; c < d; ++c) b.push(a.charCodeAt(c));
    this.updateByteArray(b);
  };
  k.digestString = function () {
    for (var a = this.digestByteArray(), b = '', c = 0; c < a.length; c++)
      b +=
        '0123456789ABCDEF'.charAt(Math.floor(a[c] / 16)) +
        '0123456789ABCDEF'.charAt(a[c] % 16);
    return b;
  };
  var Sd = C.crypto,
    Td = !1,
    Ud = 0,
    Vd = 0,
    Wd = 1,
    Xd = 0,
    Yd = '',
    Zd = function (a) {
      a = a || C.event;
      var b = (a.screenX + a.clientX) << 16;
      b += a.screenY + a.clientY;
      b *= new Date().getTime() % 1e6;
      Wd = (Wd * b) % Xd;
      0 < Ud && ++Vd == Ud && Yc(C, 'mousemove', Zd, 'remove', 'de');
    },
    $d = function (a) {
      var b = new Rd();
      b.updateString(a);
      return b.digestString();
    };
  Td = !!Sd && 'function' == typeof Sd.getRandomValues;
  Td ||
    ((Xd = 1e6 * (screen.width * screen.width + screen.height)),
    (Yd = $d(
      uc.cookie +
        '|' +
        uc.location +
        '|' +
        new Date().getTime() +
        '|' +
        Math.random(),
    )),
    (Ud = xa('random/maxObserveMousemove') || 0),
    0 != Ud && Zc(C, 'mousemove', Zd));
  var ae = function () {
      var a = ed.onl;
      if (!a) {
        a = Ic();
        ed.onl = a;
        var b = Ic();
        a.e = function (c) {
          var d = b[c];
          d && (delete b[c], d());
        };
        a.a = function (c, d) {
          b[c] = d;
        };
        a.r = function (c) {
          delete b[c];
        };
      }
      return a;
    },
    be = function (a, b) {
      b = b.onload;
      return 'function' === typeof b ? (ae().a(a, b), b) : null;
    },
    ce = function (a) {
      D(/^\w+$/.test(a), 'Unsupported id - ' + a);
      return 'onload="window.___jsl.onl.e(&#34;' + a + '&#34;)"';
    },
    de = function (a) {
      ae().r(a);
    };
  var ee = {
      allowtransparency: 'true',
      frameborder: '0',
      hspace: '0',
      marginheight: '0',
      marginwidth: '0',
      scrolling: 'no',
      style: '',
      tabindex: '0',
      vspace: '0',
      width: '100%',
    },
    fe = { allowtransparency: !0, onload: !0 },
    ge = 0,
    he = function (a, b) {
      var c = 0;
      do var d = b.id || ['I', ge++, '_', new Date().getTime()].join('');
      while (a.getElementById(d) && 5 > ++c);
      D(5 > c, 'Error creating iframe id');
      return d;
    },
    je = function (a, b) {
      return a ? b + '/' + a : '';
    },
    ke = function (a, b, c, d) {
      var e = {},
        f = {};
      a.documentMode && 9 > a.documentMode && (e.hostiemode = a.documentMode);
      Jc(d.queryParams || {}, e);
      Jc(d.fragmentParams || {}, f);
      var g = d.pfname;
      var h = Ic();
      xa('iframes/dropLegacyIdParam') || (h.id = c);
      h._gfid = c;
      h.parent = a.location.protocol + '//' + a.location.host;
      c = Lc(a.location.href, 'parent');
      g = g || '';
      !g &&
        c &&
        ((g =
          Lc(a.location.href, '_gfid', '') || Lc(a.location.href, 'id', '')),
        (g = je(g, Lc(a.location.href, 'pfname', ''))));
      g ||
        ((c = Kd(Lc(a.location.href, 'jcp', ''))) &&
          'object' == typeof c &&
          (g = je(c.id, c.pfname)));
      h.pfname = g;
      d.connectWithJsonParam && ((g = {}), (g.jcp = Ld(h)), (h = g));
      g = Lc(b, 'rpctoken') || e.rpctoken || f.rpctoken;
      if (!g) {
        if (!(g = d.rpctoken)) {
          g = String;
          c = Math;
          var l = c.round;
          if (Td) {
            var m = new C.Uint32Array(1);
            Sd.getRandomValues(m);
            m = Number('0.' + m[0]);
          } else
            (m = Wd),
              (m += parseInt(Yd.substr(0, 20), 16)),
              (Yd = $d(Yd)),
              (m /= Xd + Math.pow(16, 20));
          g = g(l.call(c, 1e8 * m));
        }
        h.rpctoken = g;
      }
      d.rpctoken = g;
      Jc(h, d.connectWithQueryParams ? e : f);
      h = a.location.href;
      a = Ic();
      (g = Lc(h, '_bsh', ed.bsh)) && (a._bsh = g);
      (h = ed.dpo ? ed.h : Lc(h, 'jsh', ed.h)) && (a.jsh = h);
      d.hintInFragment ? Jc(a, f) : Jc(a, e);
      d = d.paramsSerializer;
      b = Rc(b);
      b.query.push.apply(b.query, Tc(e, d));
      b.Vb.push.apply(b.Vb, Tc(f, d));
      return Sc(b);
    },
    le = function (a) {
      D(!a || Wc.test(a), 'Illegal url for new iframe - ' + a);
    },
    me = function (a, b, c, d, e) {
      le(c.src);
      var f,
        g = be(d, c),
        h = g ? ce(d) : '';
      try {
        document.all &&
          (f = a.createElement(
            '<iframe frameborder="' +
              Hc(String(c.frameborder)) +
              '" scrolling="' +
              Hc(String(c.scrolling)) +
              '" ' +
              h +
              ' name="' +
              Hc(String(c.name)) +
              '"/>',
          ));
      } catch (m) {
      } finally {
        f ||
          ((f = (a ? new tc(sc(a)) : za || (za = new tc())).Ck('IFRAME')),
          g &&
            ((f.onload = function () {
              f.onload = null;
              g.call(this);
            }),
            de(d)));
      }
      f.setAttribute('ng-non-bindable', '');
      for (var l in c)
        (a = c[l]),
          'style' === l && 'object' === typeof a
            ? Jc(a, f.style)
            : fe[l] || f.setAttribute(l, String(a));
      (l = (e && e.beforeNode) || null) || (e && e.dontclear) || $c(b);
      b.insertBefore(f, l);
      f = l ? l.previousSibling : b.lastChild;
      c.allowtransparency && (f.allowTransparency = !0);
      return f;
    };
  var ne = /^:[\w]+$/,
    oe = /:([a-zA-Z_]+):/g,
    pe = function (a, b) {
      a = cd() || '0';
      var c = dd();
      var d = cd() || a;
      var e = dd(),
        f = '';
      d && (f += 'u/' + encodeURIComponent(String(d)) + '/');
      e && (f += 'b/' + encodeURIComponent(String(e)) + '/');
      d = f || null;
      (f = (e = !1 === xa('isLoggedIn')) ? '_/im/' : '') && (d = '');
      var g = xa('iframes/:socialhost:'),
        h = xa('iframes/:im_socialhost:');
      Xc = {
        socialhost: g,
        ctx_socialhost: e ? h : g,
        session_index: a,
        session_delegate: c,
        session_prefix: d,
        im_prefix: f,
      };
      return Xc[b] || '';
    },
    qe = function (a) {
      var b = a;
      ne.test(a) &&
        ((b = xa('iframes/' + b.substring(1) + '/url')),
        D(!!b, 'Unknown iframe url config for - ' + a));
      return Vc(uc, b.replace(oe, pe));
    },
    re = function (a, b, c) {
      c = c || {};
      var d = c.attributes || {};
      D(
        !(c.allowPost || c.forcePost) || !d.onload,
        'onload is not supported by post iframe (allowPost or forcePost)',
      );
      a = qe(a);
      d = b.ownerDocument || uc;
      var e = he(d, c);
      a = ke(d, a, e, c);
      var f = c,
        g = Ic();
      Jc(ee, g);
      Jc(f.attributes, g);
      g.name = g.id = e;
      g.src = a;
      c.eurl = a;
      c = (f = c) || {};
      var h = !!c.allowPost;
      if (c.forcePost || (h && 2e3 < a.length)) {
        c = Rc(a);
        g.src = '';
        f.dropDataPostorigin || (g['data-postorigin'] = a);
        a = me(d, b, g, e);
        if (-1 != navigator.userAgent.indexOf('WebKit')) {
          var l = a.contentWindow.document;
          l.open();
          g = l.createElement('div');
          h = {};
          var m = e + '_inner';
          h.name = m;
          h.src = '';
          h.style = 'display:none';
          me(d, g, h, m, f);
        }
        g = (f = c.query[0]) ? f.split('&') : [];
        f = [];
        for (h = 0; h < g.length; h++)
          (m = g[h].split('=', 2)),
            f.push([decodeURIComponent(m[0]), decodeURIComponent(m[1])]);
        c.query = [];
        g = Sc(c);
        D(Wc.test(g), 'Invalid URL: ' + g);
        c = d.createElement('form');
        c.method = 'POST';
        c.target = e;
        c.style.display = 'none';
        e = g instanceof ub ? g : zb(g);
        Gb(c, 'HTMLFormElement').action = vb(e);
        for (e = 0; e < f.length; e++)
          (g = d.createElement('input')),
            (g.type = 'hidden'),
            (g.name = f[e][0]),
            (g.value = f[e][1]),
            c.appendChild(g);
        b.appendChild(c);
        c.submit();
        c.parentNode.removeChild(c);
        l && l.close();
        b = a;
      } else b = me(d, b, g, e, f);
      return b;
    };
  window.osapi = window.osapi || {};
  window.___jsl = window.___jsl || {};
  (window.___jsl.cd = window.___jsl.cd || []).push({
    gwidget: { parsetags: 'explicit' },
    appsapi: { plus_one_service: '/plus/v1' },
    csi: { rate: 0.01 },
    poshare: { hangoutContactPickerServer: 'https://plus.google.com' },
    gappsutil: {
      required_scopes: [
        'https://www.googleapis.com/auth/plus.me',
        'https://www.googleapis.com/auth/plus.people.recommended',
      ],
      display_on_page_ready: !1,
    },
    appsutil: {
      required_scopes: [
        'https://www.googleapis.com/auth/plus.me',
        'https://www.googleapis.com/auth/plus.people.recommended',
      ],
      display_on_page_ready: !1,
    },
    'oauth-flow': {
      authUrl: 'https://accounts.google.com/o/oauth2/auth',
      proxyUrl: 'https://accounts.google.com/o/oauth2/postmessageRelay',
      redirectUri: 'postmessage',
    },
    iframes: {
      sharebox: {
        params: { json: '&' },
        url: ':socialhost:/:session_prefix:_/sharebox/dialog',
      },
      plus: {
        url: ':socialhost:/:session_prefix:_/widget/render/badge?usegapi=1',
      },
      ':socialhost:': 'https://apis.google.com',
      ':im_socialhost:': 'https://plus.googleapis.com',
      domains_suggest: { url: 'https://domains.google.com/suggest/flow' },
      card: {
        params: { s: '#', userid: '&' },
        url: ':socialhost:/:session_prefix:_/hovercard/internalcard',
      },
      ':signuphost:': 'https://plus.google.com',
      ':gplus_url:': 'https://plus.google.com',
      plusone: {
        url: ':socialhost:/:session_prefix:_/+1/fastbutton?usegapi=1',
      },
      plus_share: {
        url: ':socialhost:/:session_prefix:_/+1/sharebutton?plusShare=true&usegapi=1',
      },
      plus_circle: {
        url: ':socialhost:/:session_prefix:_/widget/plus/circle?usegapi=1',
      },
      plus_followers: {
        url: ':socialhost:/_/im/_/widget/render/plus/followers?usegapi=1',
      },
      configurator: {
        url: ':socialhost:/:session_prefix:_/plusbuttonconfigurator?usegapi=1',
      },
      appcirclepicker: {
        url: ':socialhost:/:session_prefix:_/widget/render/appcirclepicker',
      },
      page: {
        url: ':socialhost:/:session_prefix:_/widget/render/page?usegapi=1',
      },
      person: {
        url: ':socialhost:/:session_prefix:_/widget/render/person?usegapi=1',
      },
      community: {
        url: ':ctx_socialhost:/:session_prefix::im_prefix:_/widget/render/community?usegapi=1',
      },
      follow: {
        url: ':socialhost:/:session_prefix:_/widget/render/follow?usegapi=1',
      },
      commentcount: {
        url: ':socialhost:/:session_prefix:_/widget/render/commentcount?usegapi=1',
      },
      comments: {
        url: ':socialhost:/:session_prefix:_/widget/render/comments?usegapi=1',
      },
      youtube: {
        url: ':socialhost:/:session_prefix:_/widget/render/youtube?usegapi=1',
      },
      reportabuse: {
        url: ':socialhost:/:session_prefix:_/widget/render/reportabuse?usegapi=1',
      },
      additnow: { url: ':socialhost:/additnow/additnow.html' },
      appfinder: {
        url: 'https://workspace.google.com/:session_prefix:marketplace/appfinder?usegapi=1',
      },
      ':source:': '1p',
    },
    poclient: { update_session: 'google.updateSessionCallback' },
    'googleapis.config': {
      rpc: '/rpc',
      root: 'https://content.googleapis.com',
      'root-1p': 'https://clients6.google.com',
      useGapiForXd3: !0,
      xd3: '/static/proxy.html',
      auth: { useInterimAuth: !1 },
    },
    report: {
      apis: [
        'iframes\\..*',
        'gadgets\\..*',
        'gapi\\.appcirclepicker\\..*',
        'gapi\\.client\\..*',
      ],
      rate: 1e-4,
    },
    client: { perApiBatch: !0 },
  });
  var se = function (a) {
      var b = (window.___jsl = window.___jsl || {});
      b[a] = b[a] || [];
      return b[a];
    },
    te = function (a) {
      var b = (window.___jsl = window.___jsl || {});
      b.cfg = (!a && b.cfg) || {};
      return b.cfg;
    },
    ue = function (a) {
      return 'object' === typeof a && /\[native code\]/.test(a.push);
    },
    ve = function (a, b, c) {
      if (b && 'object' === typeof b)
        for (var d in b)
          !Object.prototype.hasOwnProperty.call(b, d) ||
            (c && '___goc' === d && 'undefined' === typeof b[d]) ||
            (a[d] &&
            b[d] &&
            'object' === typeof a[d] &&
            'object' === typeof b[d] &&
            !ue(a[d]) &&
            !ue(b[d])
              ? ve(a[d], b[d])
              : b[d] && 'object' === typeof b[d]
              ? ((a[d] = ue(b[d]) ? [] : {}), ve(a[d], b[d]))
              : (a[d] = b[d]));
    },
    we = function (a) {
      if (a && !/^\s+$/.test(a)) {
        for (; 0 == a.charCodeAt(a.length - 1); )
          a = a.substring(0, a.length - 1);
        try {
          var b = window.JSON.parse(a);
        } catch (c) {}
        if ('object' === typeof b) return b;
        try {
          b = new Function('return (' + a + '\n)')();
        } catch (c) {}
        if ('object' === typeof b) return b;
        try {
          b = new Function('return ({' + a + '\n})')();
        } catch (c) {}
        return 'object' === typeof b ? b : {};
      }
    },
    xe = function (a, b) {
      var c = { ___goc: void 0 };
      a.length &&
        a[a.length - 1] &&
        Object.hasOwnProperty.call(a[a.length - 1], '___goc') &&
        'undefined' === typeof a[a.length - 1].___goc &&
        (c = a.pop());
      ve(c, b);
      a.push(c);
    },
    ye = function (a) {
      te(!0);
      var b = window.___gcfg,
        c = se('cu'),
        d = window.___gu;
      b && b !== d && (xe(c, b), (window.___gu = b));
      b = se('cu');
      var e = document.scripts || document.getElementsByTagName('script') || [];
      d = [];
      var f = [];
      f.push.apply(f, se('us'));
      for (var g = 0; g < e.length; ++g)
        for (var h = e[g], l = 0; l < f.length; ++l)
          h.src && 0 == h.src.indexOf(f[l]) && d.push(h);
      0 == d.length &&
        0 < e.length &&
        e[e.length - 1].src &&
        d.push(e[e.length - 1]);
      for (e = 0; e < d.length; ++e)
        d[e].getAttribute('gapi_processed') ||
          (d[e].setAttribute('gapi_processed', !0),
          (f = d[e])
            ? ((g = f.nodeType),
              (f = 3 == g || 4 == g ? f.nodeValue : f.textContent || ''))
            : (f = void 0),
          (f = we(f)) && b.push(f));
      a && xe(c, a);
      d = se('cd');
      a = 0;
      for (b = d.length; a < b; ++a) ve(te(), d[a], !0);
      d = se('ci');
      a = 0;
      for (b = d.length; a < b; ++a) ve(te(), d[a], !0);
      a = 0;
      for (b = c.length; a < b; ++a) ve(te(), c[a], !0);
    };
  var ze = function () {
    var a = window.__GOOGLEAPIS;
    a &&
      (a.googleapis &&
        !a['googleapis.config'] &&
        (a['googleapis.config'] = a.googleapis),
      wc(ed, 'ci', []).push(a),
      (window.__GOOGLEAPIS = void 0));
  };
  ze && ze();
  ye();
  r('gapi.config.get', function (a, b) {
    var c = te();
    if (!a) return c;
    a = a.split('/');
    for (var d = 0, e = a.length; c && 'object' === typeof c && d < e; ++d)
      c = c[a[d]];
    return d === a.length && void 0 !== c ? c : b;
  });
  r('gapi.config.update', function (a, b) {
    var c;
    if ('string' === typeof a) {
      var d = (c = {});
      a = a.split('/');
      for (var e = 0, f = a.length; e < f - 1; ++e) {
        var g = {};
        d = d[a[e]] = g;
      }
      d[a[e]] = b;
    } else c = a;
    ye(c);
  });
  var Ae = function (a) {
    if (!a) return '';
    if (/^about:(?:blank|srcdoc)$/.test(a)) return window.origin || '';
    a = a.split('#')[0].split('?')[0];
    a = a.toLowerCase();
    0 == a.indexOf('//') && (a = window.location.protocol + a);
    /^[\w\-]*:\/\//.test(a) || (a = window.location.href);
    var b = a.substring(a.indexOf('://') + 3),
      c = b.indexOf('/');
    -1 != c && (b = b.substring(0, c));
    c = a.substring(0, a.indexOf('://'));
    if (!c) throw Error('URI is missing protocol: ' + a);
    if (
      'http' !== c &&
      'https' !== c &&
      'chrome-extension' !== c &&
      'moz-extension' !== c &&
      'file' !== c &&
      'android-app' !== c &&
      'chrome-search' !== c &&
      'chrome-untrusted' !== c &&
      'chrome' !== c &&
      'app' !== c &&
      'devtools' !== c
    )
      throw Error('Invalid URI scheme in origin: ' + c);
    a = '';
    var d = b.indexOf(':');
    if (-1 != d) {
      var e = b.substring(d + 1);
      b = b.substring(0, d);
      if (('http' === c && '80' !== e) || ('https' === c && '443' !== e))
        a = ':' + e;
    }
    return c + '://' + b + a;
  };
  var De = function (a) {
    this.ob = a;
    this.Context = Be(a);
    this.Iframe = Ce(a);
  };
  k = De.prototype;
  k.CROSS_ORIGIN_IFRAMES_FILTER = function (a) {
    return this.ob().CROSS_ORIGIN_IFRAMES_FILTER(a);
  };
  k.SAME_ORIGIN_IFRAMES_FILTER = function (a) {
    return this.ob().SAME_ORIGIN_IFRAMES_FILTER(a);
  };
  k.create = function (a, b, c) {
    return this.ob().create(a, b, c);
  };
  k.getBeforeOpenStyle = function (a) {
    return this.ob().getBeforeOpenStyle(a);
  };
  k.getContext = function () {
    return this.ob().getContext();
  };
  k.getStyle = function (a) {
    return this.ob().getStyle(a);
  };
  k.makeWhiteListIframesFilter = function (a) {
    return this.ob().makeWhiteListIframesFilter(a);
  };
  k.registerBeforeOpenStyle = function (a, b) {
    return this.ob().registerBeforeOpenStyle(a, b);
  };
  k.registerIframesApi = function (a, b, c) {
    return this.ob().registerIframesApi(a, b, c);
  };
  k.registerIframesApiHandler = function (a, b, c) {
    return this.ob().registerIframesApiHandler(a, b, c);
  };
  k.registerStyle = function (a, b) {
    return this.ob().registerStyle(a, b);
  };
  function Be(a) {
    var b = function (c) {
      return new (a().Context)(c);
    };
    b.prototype.addOnConnectHandler = function (c, d, e, f) {
      return a().Context.prototype.addOnConnectHandler.apply(this, [
        c,
        d,
        e,
        f,
      ]);
    };
    b.prototype.addOnOpenerHandler = function (c, d, e) {
      return a().Context.prototype.addOnOpenerHandler.apply(this, [c, d, e]);
    };
    b.prototype.closeSelf = function (c, d, e) {
      return a().Context.prototype.closeSelf.apply(this, [c, d, e]);
    };
    b.prototype.connectIframes = function (c, d) {
      a().Context.prototype.connectIframes.apply(this, [c, d]);
    };
    b.prototype.getFrameName = function () {
      return a().Context.prototype.getFrameName.apply(this);
    };
    b.prototype.getGlobalParam = function (c) {
      a().Context.prototype.getGlobalParam.apply(this, [c]);
    };
    b.prototype.getParentIframe = function () {
      return a().Context.prototype.getParentIframe.apply(this);
    };
    b.prototype.getWindow = function () {
      return a().Context.prototype.getWindow.apply(this);
    };
    b.prototype.isDisposed = function () {
      return a().Context.prototype.isDisposed.apply(this);
    };
    b.prototype.open = function (c, d) {
      return a().Context.prototype.open.apply(this, [c, d]);
    };
    b.prototype.openChild = function (c) {
      return a().Context.prototype.openChild.apply(this, [c]);
    };
    b.prototype.ready = function (c, d, e, f) {
      a().Context.prototype.ready.apply(this, [c, d, e, f]);
    };
    b.prototype.removeOnConnectHandler = function (c) {
      a().Context.prototype.removeOnConnectHandler.apply(this, [c]);
    };
    b.prototype.restyleSelf = function (c, d, e) {
      return a().Context.prototype.restyleSelf.apply(this, [c, d, e]);
    };
    b.prototype.setCloseSelfFilter = function (c) {
      a().Context.prototype.setCloseSelfFilter.apply(this, [c]);
    };
    b.prototype.setGlobalParam = function (c, d) {
      a().Context.prototype.setGlobalParam.apply(this, [c, d]);
    };
    b.prototype.setRestyleSelfFilter = function (c) {
      a().Context.prototype.setRestyleSelfFilter.apply(this, [c]);
    };
    return b;
  }
  function Ce(a) {
    var b = function (c, d, e, f) {
      return new (a().Iframe)(c, d, e, f);
    };
    b.prototype.applyIframesApi = function (c) {
      a().Iframe.prototype.applyIframesApi(c);
    };
    b.prototype.close = function (c, d) {
      return a().Iframe.prototype.close.apply(this, [c, d]);
    };
    b.prototype.getContext = function () {
      return a().Iframe.prototype.getContext.apply(this, []);
    };
    b.prototype.getFrameName = function () {
      return a().Iframe.prototype.getFrameName.apply(this, []);
    };
    b.prototype.getId = function () {
      return a().Iframe.prototype.getId.apply(this, []);
    };
    b.prototype.getIframeEl = function () {
      return a().Iframe.prototype.getIframeEl.apply(this, []);
    };
    b.prototype.getOrigin = function () {
      return a().Iframe.prototype.getOrigin.apply(this, []);
    };
    b.prototype.getParam = function (c) {
      a().Iframe.prototype.getParam.apply(this, [c]);
    };
    b.prototype.getSiteEl = function () {
      return a().Iframe.prototype.getSiteEl.apply(this, []);
    };
    b.prototype.getWindow = function () {
      return a().Iframe.prototype.getWindow.apply(this, []);
    };
    b.prototype.isDisposed = function () {
      return a().Iframe.prototype.isDisposed.apply(this, []);
    };
    b.prototype.ping = function (c, d) {
      return a().Iframe.prototype.ping.apply(this, [c, d]);
    };
    b.prototype.register = function (c, d, e) {
      a().Iframe.prototype.register.apply(this, [c, d, e]);
    };
    b.prototype.registerWasClosed = function (c, d) {
      a().Iframe.prototype.registerWasClosed.apply(this, [c, d]);
    };
    b.prototype.registerWasRestyled = function (c, d) {
      a().Iframe.prototype.registerWasRestyled.apply(this, [c, d]);
    };
    b.prototype.restyle = function (c, d) {
      return a().Iframe.prototype.restyle.apply(this, [c, d]);
    };
    b.prototype.send = function (c, d, e, f) {
      return a().Iframe.prototype.send.apply(this, [c, d, e, f]);
    };
    b.prototype.setParam = function (c, d) {
      a().Iframe.prototype.setParam.apply(this, [c, d]);
    };
    b.prototype.setSiteEl = function (c) {
      a().Iframe.prototype.setSiteEl.apply(this, [c]);
    };
    b.prototype.unregister = function (c, d) {
      a().Iframe.prototype.unregister.apply(this, [c, d]);
    };
    return b;
  }
  var Ee = (function (a, b) {
      a.Li =
        'function' === typeof b
          ? b
          : function () {
              return b;
            };
      return a;
    })(function (a) {
      return null !== a && void 0 !== a;
    }, 'exists'),
    Fe = void 0;
  function Ge(a) {
    var b = Fe;
    Fe = void 0;
    var c = [],
      d = Ee(a, c);
    !d && c && ((a = 'Expected ' + Ee.Li() + ', got ' + He(a)), c.push(a));
    if (!d)
      throw (
        ((d = ''),
        b && (d = b() + '\n'),
        Error(d + 'Guard ' + Ee.Li() + ' failed:\n' + c.reverse().join('\n')))
      );
  }
  function He(a, b) {
    b = void 0 === b ? new Set() : b;
    if (b.has(a)) return '(Recursive reference)';
    switch (typeof a) {
      case 'object':
        if (a) {
          var c = Object.getPrototypeOf(a);
          switch (c) {
            case Map.prototype:
            case Set.prototype:
            case Array.prototype:
              b.add(a);
              var d =
                '[' +
                Array.from(a, function (e) {
                  return He(e, b);
                }).join(', ') +
                ']';
              b.delete(a);
              c !== Array.prototype && (d = Ie(c.constructor) + '(' + d + ')');
              return d;
            case Object.prototype:
              return (
                b.add(a),
                (c =
                  '{' +
                  Object.entries(a)
                    .map(function (e) {
                      var f = ha(e);
                      e = f.next().value;
                      f = f.next().value;
                      return e + ': ' + He(f, b);
                    })
                    .join(', ') +
                  '}'),
                b.delete(a),
                c
              );
            default:
              return (
                (d = 'Object'),
                c && c.constructor && (d = Ie(c.constructor)),
                'function' === typeof a.toString &&
                a.toString !== Object.prototype.toString
                  ? d + '(' + String(a) + ')'
                  : '(object ' + d + ')'
              );
          }
        }
        break;
      case 'function':
        return 'function ' + Ie(a);
      case 'number':
        if (!Number.isFinite(a)) return String(a);
        break;
      case 'bigint':
        return a.toString(10) + 'n';
    }
    return JSON.stringify(a);
  }
  function Ie(a) {
    var b = a.name;
    b ||
      (b = (a = /function\s+([^\(]+)/m.exec(String(a))) ? a[1] : '(Anonymous)');
    return b;
  }
  var Je =
    Object.freeze ||
    function (a) {
      return a;
    };
  var Ke = function () {
    this.Fb = [];
    this.yi = this.wk = this.sk = !1;
  };
  Ke.prototype.ob = function (a) {
    this.yi = !0;
    return this.Fb.length ? Le(this, this.Fb[0], a) : void 0;
  };
  var Le = function (a, b, c) {
      c =
        void 0 === c
          ? function (d) {
              return new d();
            }
          : c;
      if (!b.ef) return b.instance;
      c = c(b.ef);
      a.wk && (delete b.ef, (b.instance = c));
      return c;
    },
    Me = function () {
      Ke.apply(this, arguments);
    };
  n(Me, Ke);
  var Oe = function (a) {
    var b = Ne.xi;
    w(b.sk || !b.yi, 'Cannot register new delegates after instantiation.');
    var c = a.priority,
      d = ~Ra(b.Fb, function (f) {
        return f.priority < c ? -1 : 1;
      }),
      e = 0 < d ? b.Fb[d - 1] : null;
    e &&
      e.priority <= c &&
      w(
        !1,
        'two delegates registered with same priority (%s): %s and %s',
        c,
        e.ef || e.instance,
        a.ef || a.instance,
      );
    b.Fb.splice(d, 0, a);
  };
  var Ne = new (function () {
    var a = this;
    this.xi = new Me();
    this.instance = new De(function () {
      var b = a.xi.ob();
      Ge(b);
      return b();
    });
  })();
  Oe({
    instance: function () {
      var a = window.gapi;
      Ge(a);
      a = a.iframes;
      Ge(a);
      return a;
    },
    priority: 1,
  });
  var Pe = { height: !0, width: !0 },
    Qe =
      /^(?!-*(?:expression|(?:moz-)?binding))(?:[.#]?-?(?:[_a-z0-9-]+)(?:-[_a-z0-9-]+)*-?|-?(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:[a-z]{1,2}|%)?|!important|)$/i,
    Re = function (a) {
      'number' === typeof a && (a = String(a) + 'px');
      return a;
    };
  var Se = function (a, b) {
    this.Bl = 100;
    this.Dk = a;
    this.Xl = b;
    this.Ff = 0;
    this.hb = null;
  };
  Se.prototype.get = function () {
    if (0 < this.Ff) {
      this.Ff--;
      var a = this.hb;
      this.hb = a.next;
      a.next = null;
    } else a = this.Dk();
    return a;
  };
  Se.prototype.put = function (a) {
    this.Xl(a);
    this.Ff < this.Bl && (this.Ff++, (a.next = this.hb), (this.hb = a));
  };
  var Te,
    Ue = function () {
      var a = p.MessageChannel;
      'undefined' === typeof a &&
        'undefined' !== typeof window &&
        window.postMessage &&
        window.addEventListener &&
        !A('Presto') &&
        (a = function () {
          var e = oc(document, 'IFRAME');
          e.style.display = 'none';
          document.documentElement.appendChild(e);
          var f = e.contentWindow;
          e = f.document;
          e.open();
          e.close();
          var g = 'callImmediate' + Math.random(),
            h =
              'file:' == f.location.protocol
                ? '*'
                : f.location.protocol + '//' + f.location.host;
          e = u(function (l) {
            if (('*' == h || l.origin == h) && l.data == g)
              this.port1.onmessage();
          }, this);
          f.addEventListener('message', e, !1);
          this.port1 = {};
          this.port2 = {
            postMessage: function () {
              f.postMessage(g, h);
            },
          };
        });
      if ('undefined' !== typeof a && !A('Trident') && !A('MSIE')) {
        var b = new a(),
          c = {},
          d = c;
        b.port1.onmessage = function () {
          if (void 0 !== c.next) {
            c = c.next;
            var e = c.cb;
            c.cb = null;
            e();
          }
        };
        return function (e) {
          d.next = { cb: e };
          d = d.next;
          b.port2.postMessage(0);
        };
      }
      return function (e) {
        p.setTimeout(e, 0);
      };
    };
  function Ve(a) {
    p.setTimeout(function () {
      throw a;
    }, 0);
  }
  var We = function () {
    this.hg = this.ld = null;
  };
  We.prototype.add = function (a, b) {
    var c = Xe.get();
    c.set(a, b);
    this.hg ? (this.hg.next = c) : (w(!this.ld), (this.ld = c));
    this.hg = c;
  };
  We.prototype.remove = function () {
    var a = null;
    this.ld &&
      ((a = this.ld),
      (this.ld = this.ld.next),
      this.ld || (this.hg = null),
      (a.next = null));
    return a;
  };
  var Xe = new Se(
      function () {
        return new Ye();
      },
      function (a) {
        return a.reset();
      },
    ),
    Ye = function () {
      this.next = this.scope = this.he = null;
    };
  Ye.prototype.set = function (a, b) {
    this.he = a;
    this.scope = b;
    this.next = null;
  };
  Ye.prototype.reset = function () {
    this.next = this.scope = this.he = null;
  };
  var Ze,
    $e = !1,
    af = new We(),
    cf = function (a, b) {
      Ze || bf();
      $e || (Ze(), ($e = !0));
      af.add(a, b);
    },
    bf = function () {
      if (p.Promise && p.Promise.resolve) {
        var a = p.Promise.resolve(void 0);
        Ze = function () {
          a.then(df);
        };
      } else
        Ze = function () {
          var b = df;
          'function' !== typeof p.setImmediate ||
          (p.Window &&
            p.Window.prototype &&
            !A('Edge') &&
            p.Window.prototype.setImmediate == p.setImmediate)
            ? (Te || (Te = Ue()), Te(b))
            : p.setImmediate(b);
        };
    },
    df = function () {
      for (var a; (a = af.remove()); ) {
        try {
          a.he.call(a.scope);
        } catch (b) {
          Ve(b);
        }
        Xe.put(a);
      }
      $e = !1;
    };
  var ef = function (a) {
    if (!a) return !1;
    try {
      return !!a.$goog_Thenable;
    } catch (b) {
      return !1;
    }
  };
  var E = function (a, b) {
      this.Da = 0;
      this.Wa = void 0;
      this.nd = this.ac = this.Ja = null;
      this.lf = this.Hg = !1;
      if (a != bc)
        try {
          var c = this;
          a.call(
            b,
            function (d) {
              ff(c, 2, d);
            },
            function (d) {
              if (!(d instanceof gf))
                try {
                  if (d instanceof Error) throw d;
                  throw Error('Promise rejected.');
                } catch (e) {}
              ff(c, 3, d);
            },
          );
        } catch (d) {
          ff(this, 3, d);
        }
    },
    hf = function () {
      this.next = this.context = this.Dd = this.Wc = this.child = null;
      this.Wd = !1;
    };
  hf.prototype.reset = function () {
    this.context = this.Dd = this.Wc = this.child = null;
    this.Wd = !1;
  };
  var jf = new Se(
      function () {
        return new hf();
      },
      function (a) {
        a.reset();
      },
    ),
    kf = function (a, b, c) {
      var d = jf.get();
      d.Wc = a;
      d.Dd = b;
      d.context = c;
      return d;
    },
    F = function (a) {
      if (a instanceof E) return a;
      var b = new E(bc);
      ff(b, 2, a);
      return b;
    },
    G = function (a) {
      return new E(function (b, c) {
        c(a);
      });
    },
    mf = function (a, b, c) {
      lf(a, b, c, null) || cf(va(b, a));
    },
    nf = function (a) {
      return new E(function (b, c) {
        var d = a.length,
          e = [];
        if (d)
          for (
            var f = function (m, q) {
                d--;
                e[m] = q;
                0 == d && b(e);
              },
              g = function (m) {
                c(m);
              },
              h = 0,
              l;
            h < a.length;
            h++
          )
            (l = a[h]), mf(l, va(f, h), g);
        else b(e);
      });
    },
    of = function (a) {
      return new E(function (b) {
        var c = a.length,
          d = [];
        if (c)
          for (
            var e = function (h, l, m) {
                c--;
                d[h] = l ? { Fi: !0, value: m } : { Fi: !1, reason: m };
                0 == c && b(d);
              },
              f = 0,
              g;
            f < a.length;
            f++
          )
            (g = a[f]), mf(g, va(e, f, !0), va(e, f, !1));
        else b(d);
      });
    };
  E.prototype.then = function (a, b, c) {
    null != a && Ga(a, 'opt_onFulfilled should be a function.');
    null != b &&
      Ga(
        b,
        'opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?',
      );
    return pf(
      this,
      'function' === typeof a ? a : null,
      'function' === typeof b ? b : null,
      c,
    );
  };
  E.prototype.$goog_Thenable = !0;
  E.prototype.Fc = function (a, b) {
    a = kf(a, a, b);
    a.Wd = !0;
    qf(this, a);
    return this;
  };
  E.prototype.o = function (a, b) {
    return pf(this, null, a, b);
  };
  E.prototype.catch = E.prototype.o;
  E.prototype.cancel = function (a) {
    if (0 == this.Da) {
      var b = new gf(a);
      cf(function () {
        rf(this, b);
      }, this);
    }
  };
  var rf = function (a, b) {
      if (0 == a.Da)
        if (a.Ja) {
          var c = a.Ja;
          if (c.ac) {
            for (
              var d = 0, e = null, f = null, g = c.ac;
              g && (g.Wd || (d++, g.child == a && (e = g), !(e && 1 < d)));
              g = g.next
            )
              e || (f = g);
            e &&
              (0 == c.Da && 1 == d
                ? rf(c, b)
                : (f
                    ? ((d = f),
                      w(c.ac),
                      w(null != d),
                      d.next == c.nd && (c.nd = d),
                      (d.next = d.next.next))
                    : sf(c),
                  tf(c, e, 3, b)));
          }
          a.Ja = null;
        } else ff(a, 3, b);
    },
    qf = function (a, b) {
      a.ac || (2 != a.Da && 3 != a.Da) || uf(a);
      w(null != b.Wc);
      a.nd ? (a.nd.next = b) : (a.ac = b);
      a.nd = b;
    },
    pf = function (a, b, c, d) {
      var e = kf(null, null, null);
      e.child = new E(function (f, g) {
        e.Wc = b
          ? function (h) {
              try {
                var l = b.call(d, h);
                f(l);
              } catch (m) {
                g(m);
              }
            }
          : f;
        e.Dd = c
          ? function (h) {
              try {
                var l = c.call(d, h);
                void 0 === l && h instanceof gf ? g(h) : f(l);
              } catch (m) {
                g(m);
              }
            }
          : g;
      });
      e.child.Ja = a;
      qf(a, e);
      return e.child;
    };
  E.prototype.xm = function (a) {
    w(1 == this.Da);
    this.Da = 0;
    ff(this, 2, a);
  };
  E.prototype.ym = function (a) {
    w(1 == this.Da);
    this.Da = 0;
    ff(this, 3, a);
  };
  var ff = function (a, b, c) {
      0 == a.Da &&
        (a === c &&
          ((b = 3), (c = new TypeError('Promise cannot resolve to itself'))),
        (a.Da = 1),
        lf(c, a.xm, a.ym, a) ||
          ((a.Wa = c),
          (a.Da = b),
          (a.Ja = null),
          uf(a),
          3 != b || c instanceof gf || vf(a, c)));
    },
    lf = function (a, b, c, d) {
      if (a instanceof E)
        return (
          null != b && Ga(b, 'opt_onFulfilled should be a function.'),
          null != c &&
            Ga(
              c,
              'opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?',
            ),
          qf(a, kf(b || bc, c || null, d)),
          !0
        );
      if (ef(a)) return a.then(b, c, d), !0;
      if (t(a))
        try {
          var e = a.then;
          if ('function' === typeof e) return wf(a, e, b, c, d), !0;
        } catch (f) {
          return c.call(d, f), !0;
        }
      return !1;
    },
    wf = function (a, b, c, d, e) {
      var f = !1,
        g = function (l) {
          f || ((f = !0), c.call(e, l));
        },
        h = function (l) {
          f || ((f = !0), d.call(e, l));
        };
      try {
        b.call(a, g, h);
      } catch (l) {
        h(l);
      }
    },
    uf = function (a) {
      a.Hg || ((a.Hg = !0), cf(a.Mk, a));
    },
    sf = function (a) {
      var b = null;
      a.ac && ((b = a.ac), (a.ac = b.next), (b.next = null));
      a.ac || (a.nd = null);
      null != b && w(null != b.Wc);
      return b;
    };
  E.prototype.Mk = function () {
    for (var a; (a = sf(this)); ) tf(this, a, this.Da, this.Wa);
    this.Hg = !1;
  };
  var tf = function (a, b, c, d) {
      if (3 == c && b.Dd && !b.Wd) for (; a && a.lf; a = a.Ja) a.lf = !1;
      if (b.child) (b.child.Ja = null), xf(b, c, d);
      else
        try {
          b.Wd ? b.Wc.call(b.context) : xf(b, c, d);
        } catch (e) {
          yf.call(null, e);
        }
      jf.put(b);
    },
    xf = function (a, b, c) {
      2 == b ? a.Wc.call(a.context, c) : a.Dd && a.Dd.call(a.context, c);
    },
    vf = function (a, b) {
      a.lf = !0;
      cf(function () {
        a.lf && yf.call(null, b);
      });
    },
    yf = Ve,
    gf = function (a) {
      ya.call(this, a);
    };
  v(gf, ya);
  gf.prototype.name = 'cancel';
  var zf,
    Af,
    Bf,
    Cf = /^[\w\.\-]*$/,
    Df = function (a) {
      return a.getOrigin() === a.getContext().getOrigin();
    },
    Ef = function () {
      return !0;
    },
    Ff = function (a) {
      for (var b = Ic(), c = 0; c < a.length; c++) b[a[c]] = !0;
      return function (d) {
        return !!b[d.Mb];
      };
    },
    Hf = function (a, b, c) {
      return function (d) {
        if (!b.isDisposed()) {
          var e = this.origin,
            f = b.getOrigin();
          D(e === f, 'Wrong origin ' + e + ' != ' + f);
          e = this.callback;
          d = Gf(a, d, b);
          !c && 0 < d.length && nf(d).then(e);
        }
      };
    },
    Gf = function (a, b, c) {
      a = zf[a];
      if (!a) return [];
      for (var d = [], e = 0; e < a.length; e++) d.push(F(a[e].call(c, b, c)));
      return d;
    },
    If = function (a, b, c) {
      D('_default' != a, 'Cannot update default api');
      Af[a] = { map: b, filter: c };
    },
    Jf = function (a, b, c) {
      D('_default' != a, 'Cannot update default api');
      wc(Af, a, { map: {}, filter: Df }).map[b] = c;
    },
    Kf = function (a, b) {
      wc(Af, '_default', { map: {}, filter: Ef }).map[a] = b;
      Ac(Bf.nb, function (c) {
        c.register(a, b, Ef);
      });
    },
    Lf = function () {
      return Bf;
    },
    Mf = /^https?:\/\/[^\/%\\?#\s]+$/i,
    Nf = {
      longdesc: !0,
      name: !0,
      src: !0,
      frameborder: !0,
      marginwidth: !0,
      marginheight: !0,
      scrolling: !0,
      align: !0,
      height: !0,
      width: !0,
      id: !0,
      class: !0,
      title: !0,
      tabindex: !0,
      hspace: !0,
      vspace: !0,
      allowtransparency: !0,
    };
  var Of = function (a) {
    this.i = a || {};
  };
  Of.prototype.value = function () {
    return this.i;
  };
  Of.prototype.getIframe = function () {
    return this.i.iframe;
  };
  var Pf = function (a, b) {
      a.i.role = b;
      return a;
    },
    Qf = function (a, b) {
      a.i.data = b;
      return a;
    };
  Of.prototype.kc = function (a) {
    this.i.setRpcReady = a;
    return this;
  };
  var Rf = function (a) {
    return a.i.setRpcReady;
  };
  Of.prototype.ad = function (a) {
    this.i.rpctoken = a;
    return this;
  };
  var Sf = function (a) {
      return a.i.rpctoken;
    },
    Tf = function (a) {
      a.i.selfConnect = !0;
      return a;
    };
  var Uf = function (a) {
    this.i = a;
  };
  Uf.prototype.value = function () {
    return this.i;
  };
  Uf.prototype.Pj = function (a) {
    this.i.style = a;
  };
  Uf.prototype.getStyle = function () {
    return this.i.style;
  };
  var Vf = function (a, b) {
    a.i.onload = b;
  };
  var Wf = function (a) {
    this.i = a || {};
  };
  Wf.prototype.value = function () {
    return this.i;
  };
  var Yf = function (a) {
      var b = new Xf();
      b.i.role = a;
      return b;
    },
    Zf = function (a, b) {
      a.i.handler = b;
      return a;
    },
    $f = function (a, b) {
      a.i.filter = b;
      return a;
    };
  Wf.prototype.Ie = function (a) {
    this.i.apis = a;
    return this;
  };
  var ag = function (a) {
    this.i = a || {};
  };
  k = ag.prototype;
  k.value = function () {
    return this.i;
  };
  k.setUrl = function (a) {
    this.i.url = a;
    return this;
  };
  k.getUrl = function () {
    return this.i.url;
  };
  k.Pj = function (a) {
    this.i.style = a;
  };
  k.getStyle = function () {
    return this.i.style;
  };
  k.getId = function () {
    return this.i.id;
  };
  k.ad = function (a) {
    this.i.rpctoken = a;
    return this;
  };
  var bg = function (a, b) {
      a.i.messageHandlers = b;
      return a;
    },
    cg = function (a, b) {
      a.i.messageHandlersFilter = b;
      return a;
    };
  ag.prototype.Ie = function (a) {
    this.i.apis = a;
    return this;
  };
  var dg = function (a, b) {
    a.i.onClose = b;
  };
  ag.prototype.getContext = function () {
    return this.i.context;
  };
  var eg = function (a) {
      a.i.attributes = a.i.attributes || {};
      return new Uf(a.i.attributes);
    },
    fg = function (a, b) {
      a.i.controllerData = b;
    },
    gg = function (a) {
      return (a = a.i.timeout) ? a : null;
    };
  var hg = function () {
    Of.apply(this, arguments);
  };
  n(hg, Of);
  var Xf = function () {
    Wf.apply(this, arguments);
  };
  n(Xf, Wf);
  var ig = function () {
    ag.apply(this, arguments);
  };
  n(ig, ag);
  var H = function (a) {
    ig.call(this, a);
  };
  n(H, ig);
  var jg = function (a, b) {
    a.i.frameName = b;
    return a;
  };
  H.prototype.getFrameName = function () {
    return this.i.frameName;
  };
  var kg = function (a, b) {
    a.i.rpcAddr = b;
    return a;
  };
  H.prototype.ub = function () {
    return this.i.rpcAddr;
  };
  var lg = function (a, b) {
    a.i.retAddr = b;
    return a;
  };
  H.prototype.Jb = function () {
    return this.i.retAddr;
  };
  var mg = function (a, b) {
    a.i.origin = b;
    return a;
  };
  H.prototype.getOrigin = function () {
    return this.i.origin;
  };
  H.prototype.kc = function (a) {
    this.i.setRpcReady = a;
    return this;
  };
  var ng = function (a, b) {
      a.i.context = b;
    },
    og = function (a, b) {
      a.i._rpcReadyFn = b;
    };
  H.prototype.getIframeEl = function () {
    return this.i.iframeEl;
  };
  var pg = function (a, b, c) {
    var d = a.ub(),
      e = b.Jb();
    lg(kg(c, a.Jb() + '/' + b.ub()), e + '/' + d);
    mg(jg(c, b.getFrameName()), b.getOrigin());
  };
  var rg = function (a) {
      this.resolve = this.reject = null;
      this.promise = new E(
        u(function (b, c) {
          this.resolve = b;
          this.reject = c;
        }, this),
      );
      a && (this.promise = qg(this.promise, a));
    },
    qg = function (a, b) {
      return a.then(function (c) {
        try {
          b(c);
        } catch (d) {}
        return c;
      });
    };
  var sg = function () {
    this.Bb = window.console;
  };
  sg.prototype.log = function (a) {
    this.Bb && this.Bb.log && this.Bb.log(a);
  };
  sg.prototype.error = function (a) {
    this.Bb &&
      (this.Bb.error ? this.Bb.error(a) : this.Bb.log && this.Bb.log(a));
  };
  sg.prototype.warn = function (a) {
    this.Bb && (this.Bb.warn ? this.Bb.warn(a) : this.Bb.log && this.Bb.log(a));
  };
  sg.prototype.debug = function () {};
  var tg = new sg();
  var Bg = function () {
    this.Oe = {
      Fj: ug ? '../' + ug : null,
      Gk: vg,
      Ki: wg,
      Tm: xg,
      getToken: yg,
      Um: zg,
    };
    this.Ab = C;
    this.Bj = this.Fk;
    this.Qk = /MSIE\s*[0-8](\D|$)/.test(window.navigator.userAgent);
    if (this.Oe.Fj) {
      this.Ab = this.Oe.Ki(this.Ab, this.Oe.Fj);
      var a = this.Ab.document,
        b = a.createElement('script');
      b.setAttribute('type', 'text/javascript');
      b.text =
        'window.doPostMsg=function(w,s,o) {window.setTimeout(function(){w.postMessage(s,o);},0);};';
      a.body.appendChild(b);
      this.Bj = this.Ab.doPostMsg;
    }
    this.Nh = {};
    this.Xh = {};
    a = u(this.al, this);
    Zc(this.Ab, 'message', a);
    wc(ed, 'RPMQ', []).push(a);
    this.Ab != this.Ab.parent &&
      Ag(this, this.Ab.parent, this.hj(this.Ab.name), '*');
  };
  Bg.prototype.hj = function (a) {
    return '{"h":"' + escape(a) + '"}';
  };
  var Cg = function (a) {
      var b = null;
      0 === a.indexOf('{"h":"') &&
        a.indexOf('"}') === a.length - 2 &&
        (b = unescape(a.substring(6, a.length - 2)));
      return b;
    },
    Dg = function (a) {
      if (!/^\s*{/.test(a)) return !1;
      a = Kd(a);
      return null !== a && 'object' === typeof a && !!a.g;
    };
  Bg.prototype.al = function (a) {
    var b = String(a.data);
    tg.debug(
      'gapix.rpc.receive(' +
        xg +
        '): ' +
        (!b || 512 >= b.length
          ? b
          : b.substr(0, 512) + '... (' + b.length + ' bytes)'),
    );
    var c = 0 !== b.indexOf('!_');
    c || (b = b.substring(2));
    var d = Dg(b);
    if (!c && !d) {
      if (!d && (c = Cg(b))) {
        if (this.Nh[c]) this.Nh[c]();
        else this.Xh[c] = 1;
        return;
      }
      var e = a.origin,
        f = this.Oe.Gk;
      this.Qk
        ? C.setTimeout(function () {
            f(b, e);
          }, 0)
        : f(b, e);
    }
  };
  Bg.prototype.setup = function (a, b) {
    '..' === a || this.Xh[a] ? (b(), delete this.Xh[a]) : (this.Nh[a] = b);
  };
  var Ag = function (a, b, c, d) {
    var e = Dg(c) ? '' : '!_';
    tg.debug(
      'gapix.rpc.send(' +
        xg +
        '): ' +
        (!c || 512 >= c.length
          ? c
          : c.substr(0, 512) + '... (' + c.length + ' bytes)'),
    );
    a.Bj(b, e + c, d);
  };
  Bg.prototype.Fk = function (a, b, c) {
    a.postMessage(b, c);
  };
  Bg.prototype.send = function (a, b, c) {
    (a = this.Oe.Ki(this.Ab, a)) && !a.closed && Ag(this, a, b, c);
  };
  var Eg = 0,
    Fg = [],
    Gg = {},
    Hg = {},
    Ig = C.location.href,
    Jg = Lc(Ig, 'rpctoken'),
    Kg = Lc(Ig, 'parent') || uc.referrer,
    ug = Lc(Ig, 'rly'),
    xg = ug || ((C !== C.top || C.opener) && C.name) || '..',
    Lg = null,
    Mg = {},
    Ng = function () {},
    Og = { send: Ng, setup: Ng, hj: Ng },
    wg = function (a, b) {
      '/' == b.charAt(0) && ((b = b.substring(1)), (a = C.top));
      if (0 === b.length) return a;
      for (b = b.split('/'); b.length; ) {
        var c = b.shift();
        '{' == c.charAt(0) &&
          '}' == c.charAt(c.length - 1) &&
          (c = c.substring(1, c.length - 1));
        if ('..' === c) a = a == a.parent ? a.opener : a.parent;
        else if ('..' !== c && a.frames[c]) {
          if (((a = a.frames[c]), !('postMessage' in a)))
            throw Error('Not a window');
        } else return null;
      }
      return a;
    },
    yg = function (a) {
      return (a = Gg[a]) && a.token;
    },
    Pg = function (a) {
      if (a.f in {}) return !1;
      var b = a.t,
        c = Gg[a.r];
      a = a.origin;
      return (
        c &&
        (c.token === b || (!c.token && !b)) &&
        (a === c.origin || '*' === c.origin)
      );
    },
    Qg = function (a) {
      var b = a.id.split('/'),
        c = b[b.length - 1],
        d = a.origin;
      return function (e) {
        var f = e.origin;
        return e.f == c && (d == f || '*' == d);
      };
    },
    Tg = function (a, b, c) {
      a = Rg(a);
      Hg[a.name] = { he: b, ue: a.ue, Ea: c || Pg };
      Sg();
    },
    Ug = {},
    Vg = function (a, b) {
      (a = Ug['_' + a]) && a[1](this) && a[0].call(this, b);
    },
    Xg = function (a) {
      var b = a.c;
      if (!b) return Ng;
      var c = a.r,
        d = a.g ? 'legacy__' : '';
      return function () {
        var e = [].slice.call(arguments, 0);
        e.unshift(c, d + '__cb', null, b);
        Wg.apply(null, e);
      };
    },
    zg = function (a) {
      Lg = a;
    },
    Zg = function (a) {
      Mg[a] ||
        (Mg[a] = C.setTimeout(function () {
          Mg[a] = !1;
          Yg(a);
        }, 0));
    },
    Yg = function (a) {
      var b = Gg[a];
      if (b && b.ready) {
        var c = b.xh;
        for (b.xh = []; c.length; ) Og.send(a, Ld(c.shift()), b.origin);
      }
    },
    Rg = function (a) {
      return 0 === a.indexOf('legacy__')
        ? { name: a.substring(8), ue: !0 }
        : { name: a, ue: !1 };
    },
    Sg = function () {
      for (
        var a = xa('rpc/residenceSec') || 60,
          b = new Date().getTime() / 1e3,
          c = 0,
          d;
        (d = Fg[c]);
        ++c
      ) {
        var e = d.rpc;
        if (!e || (0 < a && b - d.timestamp > a)) Fg.splice(c, 1), --c;
        else {
          var f = e.s,
            g = Hg[f] || Hg['*'];
          if (g)
            if (
              (Fg.splice(c, 1),
              --c,
              (e.origin = d.origin),
              (d = Xg(e)),
              (e.callback = d),
              g.Ea(e))
            ) {
              if ('__cb' !== f && !!g.ue != !!e.g) break;
              e = g.he.apply(e, e.a);
              void 0 !== e && d(e);
            } else tg.debug('gapix.rpc.rejected(' + xg + '): ' + f);
        }
      }
    },
    $g = function (a, b, c) {
      Fg.push({ rpc: a, origin: b, timestamp: new Date().getTime() / 1e3 });
      c || Sg();
    },
    vg = function (a, b) {
      a = Kd(a);
      $g(a, b, !1);
    },
    ah = function (a) {
      for (; a.length; ) $g(a.shift(), this.origin, !0);
      Sg();
    },
    bh = function (a) {
      var b = !1;
      a = a.split('|');
      var c = a[0];
      0 <= c.indexOf('/') && (b = !0);
      return { id: c, origin: a[1] || '*', Vg: b };
    },
    ch = function (a, b, c, d) {
      var e = bh(a);
      d && (C.frames[e.id] = C.frames[e.id] || d);
      a = e.id;
      if (!Gg.hasOwnProperty(a)) {
        c = c || null;
        d = e.origin;
        if ('..' === a) (d = Ae(Kg)), (c = c || Jg);
        else if (!e.Vg) {
          var f = uc.getElementById(a);
          f && ((f = f.src), (d = Ae(f)), (c = c || Lc(f, 'rpctoken')));
        }
        ('*' === e.origin && d) || (d = e.origin);
        Gg[a] = {
          token: c,
          xh: [],
          origin: d,
          hm: b,
          Dj: function () {
            var g = a;
            Gg[g].ready = 1;
            Yg(g);
          },
        };
        Og.setup(a, Gg[a].Dj);
      }
      return Gg[a].Dj;
    },
    Wg = function (a, b, c, d) {
      a = a || '..';
      ch(a);
      a = a.split('|', 1)[0];
      var e = b,
        f = [].slice.call(arguments, 3),
        g = c,
        h = xg,
        l = Jg,
        m = Gg[a],
        q = h,
        y = bh(a);
      if (m && '..' !== a) {
        if (y.Vg) {
          if (!(l = Gg[a].hm)) {
            l = Lg ? Lg.substring(1).split('/') : [xg];
            q = l.length - 1;
            for (var B = C.parent; B !== C.top; ) {
              var Q = B.parent;
              if (!q--) {
                for (var Ca = null, Cc = Q.frames.length, ie = 0; ie < Cc; ++ie)
                  Q.frames[ie] == B && (Ca = ie);
                l.unshift('{' + Ca + '}');
              }
              B = Q;
            }
            l = '/' + l.join('/');
          }
          q = l;
        } else q = h = '..';
        l = m.token;
      }
      m = q;
      g && y
        ? ((q = Pg), y.Vg && (q = Qg(y)), (Ug['_' + ++Eg] = [g, q]), (g = Eg))
        : (g = null);
      f = { s: e, f: h, r: m, t: l, c: g, a: f };
      e = Rg(e);
      f.s = e.name;
      f.g = e.ue;
      Gg[a].xh.push(f);
      Zg(a);
    };
  if ('function' === typeof C.postMessage || 'object' === typeof C.postMessage)
    (Og = new Bg()),
      Tg('__cb', Vg, function () {
        return !0;
      }),
      Tg('_processBatch', ah, function () {
        return !0;
      }),
      ch('..');
  !A('Android') || Cb();
  Cb();
  var dh =
    A('Safari') &&
    !(
      Cb() ||
      A('Coast') ||
      A('Opera') ||
      A('Edge') ||
      A('Edg/') ||
      A('OPR') ||
      A('Firefox') ||
      A('FxiOS') ||
      A('Silk') ||
      A('Android')
    ) &&
    !(Hb() || A('iPad') || A('iPod'));
  var fh = function (a, b, c) {
      a.setTimeout(function () {
        b.closed || 5 == c ? eh(b) : (b.close(), c++, fh(a, b, c));
      }, 1e3);
    },
    eh = function (a) {
      if (!a.closed && a.document && a.document.body)
        if (
          ((a = a.document.body),
          w(
            null != a,
            'goog.dom.setTextContent expects a non-null value for node',
          ),
          'textContent' in a)
        )
          a.textContent = 'Please close this window.';
        else if (3 == a.nodeType) a.data = 'Please close this window.';
        else if (a.firstChild && 3 == a.firstChild.nodeType) {
          for (; a.lastChild != a.firstChild; ) a.removeChild(w(a.lastChild));
          a.firstChild.data = 'Please close this window.';
        } else {
          qc(a);
          var b = sc(a);
          a.appendChild(b.createTextNode('Please close this window.'));
        }
    };
  var I = function (a, b, c, d) {
    this.Gb = !1;
    this.df = a;
    this.Dh = b;
    this.wd = c;
    this.Ua = d;
    this.Gj = this.Ua.Jb();
    this.Mb = this.Ua.getOrigin();
    this.tl = this.Ua.getIframeEl();
    this.Uj = this.Ua.i.where;
    this.Fb = [];
    this.applyIframesApi('_default');
    a = this.Ua.i.apis || [];
    for (b = 0; b < a.length; b++) this.applyIframesApi(a[b]);
    this.df.nb[c] = this;
  };
  k = I.prototype;
  k.isDisposed = function () {
    return this.Gb;
  };
  k.Lc = function () {
    if (!this.isDisposed()) {
      for (var a = 0; a < this.Fb.length; a++) this.unregister(this.Fb[a]);
      delete Bf.nb[this.getFrameName()];
      this.Gb = !0;
    }
  };
  k.getContext = function () {
    return this.df;
  };
  k.getOptions = function () {
    return this.Ua;
  };
  k.ub = function () {
    return this.Dh;
  };
  k.Jb = function () {
    return this.Gj;
  };
  k.getFrameName = function () {
    return this.wd;
  };
  k.getIframeEl = function () {
    return this.tl;
  };
  k.getSiteEl = function () {
    return this.Uj;
  };
  k.setSiteEl = function (a) {
    this.Uj = a;
  };
  k.kc = function () {
    (0, this.Ua.i._rpcReadyFn)();
  };
  k.setParam = function (a, b) {
    this.Ua.value()[a] = b;
  };
  k.getParam = function (a) {
    return this.Ua.value()[a];
  };
  k.Ii = function () {
    return this.Ua.value();
  };
  k.getId = function () {
    return this.Ua.getId();
  };
  k.getOrigin = function () {
    return this.Mb;
  };
  var gh = function (a, b) {
    var c = a.df.getFrameName();
    return a.wd + ':' + c + ':' + b;
  };
  k = I.prototype;
  k.register = function (a, b, c) {
    D(!this.isDisposed(), 'Cannot register handler on disposed iframe ' + a);
    D((c || Df)(this), 'Rejecting untrusted message ' + a);
    c = gh(this, a);
    1 == wc(zf, c, []).push(b) &&
      (this.Fb.push(a), Tg(c, Hf(c, this, '_g_wasClosed' === a)));
  };
  k.unregister = function (a, b) {
    var c = gh(this, a),
      d = zf[c];
    d &&
      (b
        ? ((b = yc.call(d, b)), 0 <= b && d.splice(b, 1))
        : d.splice(0, d.length),
      0 == d.length &&
        ((b = yc.call(this.Fb, a)),
        0 <= b && this.Fb.splice(b, 1),
        delete Hg[Rg(c).name]));
  };
  k.Vk = function () {
    return this.Fb;
  };
  k.applyIframesApi = function (a) {
    this.lg = this.lg || [];
    if (!(0 <= yc.call(this.lg, a))) {
      this.lg.push(a);
      a = Af[a] || { map: {} };
      for (var b in a.map) zc(a.map, b) && this.register(b, a.map[b], a.filter);
    }
  };
  k.getWindow = function () {
    if (!Df(this)) return null;
    var a = this.Ua.i._popupWindow;
    if (a) return a;
    var b = this.Dh.split('/');
    a = this.getContext().getWindow();
    for (var c = 0; c < b.length && a; c++) {
      var d = b[c];
      a = '..' === d ? (a == a.parent ? a.opener : a.parent) : a.frames[d];
    }
    return a;
  };
  var hh = function (a) {
    var b = {};
    if (a)
      for (var c in a) zc(a, c) && zc(Pe, c) && Qe.test(a[c]) && (b[c] = a[c]);
    return b;
  };
  k = I.prototype;
  k.close = function (a, b) {
    return J(this, '_g_close', a, b);
  };
  k.restyle = function (a, b) {
    return J(this, '_g_restyle', a, b);
  };
  k.bm = function (a, b) {
    return J(this, '_g_restyleDone', a, b);
  };
  k.xk = function (a) {
    return this.getContext().closeSelf(a, void 0, this);
  };
  k.em = function (a) {
    if (a && 'object' === typeof a)
      return this.getContext().restyleSelf(a, void 0, this);
  };
  k.fm = function (a) {
    var b = this.Ua.i.onRestyle;
    b && b.call(this, a, this);
    a = a && 'object' === typeof a ? hh(a) : {};
    (b = this.getIframeEl()) &&
      a &&
      'object' === typeof a &&
      (zc(a, 'height') && (a.height = Re(a.height)),
      zc(a, 'width') && (a.width = Re(a.width)),
      Jc(a, b.style));
  };
  k.yk = function (a) {
    var b = this.Ua.i.onClose;
    b && b.call(this, a, this);
    if ((b = this.getOptions().i._popupWindow)) {
      var c = this.getContext()
        .getWindow()
        .document.getElementById(this.getId());
      c && c.parentNode && c.parentNode.removeChild(c);
      c = this.getContext().getWindow();
      Rb && dh && c ? (c.focus(), fh(c, b, 0)) : (b.close(), eh(b));
    }
    b ||
      ((b = this.getIframeEl()) && b.parentNode && b.parentNode.removeChild(b));
    if ((b = this.Ua.i.controller))
      (c = {}),
        (c.frameName = this.getFrameName()),
        J(b, '_g_disposeControl', c);
    b = gh(this, '_g_wasClosed');
    Gf(b, a, this);
  };
  k.registerWasRestyled = function (a, b) {
    this.register('_g_wasRestyled', a, b);
  };
  k.registerWasClosed = function (a, b) {
    this.register('_g_wasClosed', a, b);
  };
  k.Em = function () {
    delete this.getContext().nb[this.getFrameName()];
    this.getContext()
      .getWindow()
      .setTimeout(
        u(function () {
          this.Lc();
        }, this),
        0,
      );
  };
  k.send = function (a, b, c, d) {
    D(!this.isDisposed(), 'Cannot send message to disposed iframe - ' + a);
    D((d || Df)(this), 'Wrong target for message ' + a);
    c = new rg(c);
    a = this.df.getFrameName() + ':' + this.wd + ':' + a;
    Wg(this.Dh, a, c.resolve, b);
    return c.promise;
  };
  var J = function (a, b, c, d) {
    return a.send(b, c, d, Ef);
  };
  k = I.prototype;
  k.Rl = function (a) {
    return a;
  };
  k.ping = function (a, b) {
    return J(this, '_g_ping', b, a);
  };
  k.Bk = function (a) {
    a = a && 'object' === typeof a ? a : {};
    for (
      var b = a.rpcAddr,
        c = (this.ub() + '/' + b).split('/'),
        d = this.getContext().getWindow(),
        e;
      (e = c.shift()) && d;

    )
      d = '..' == e ? d.parent : d.frames[e];
    D(!!d, 'Bad rpc address ' + b);
    a._window = d;
    a._parentRpcAddr = this.ub();
    a._parentRetAddr = this.Jb();
    this.getContext();
    b = new K(a);
    this.Il && this.Il(b, a.controllerData);
    this.zg = this.zg || [];
    this.zg.push(b, a.controllerData);
  };
  k.Hk = function (a) {
    a = (a || {}).frameName;
    for (var b = this.zg || [], c = 0; c < b.length; c++)
      if (b[c].getFrameName() === a) {
        a = b.splice(c, 1)[0];
        a.Lc();
        this.Jl && this.Jl(a);
        return;
      }
    D(!1, 'Unknown contolled iframe to dispose - ' + a);
  };
  k.zk = function (a) {
    var b = new H(a);
    a = new hg(b.value());
    if (a.i.selfConnect) var c = this;
    else
      (D(
        Mf.test(b.getOrigin()),
        'Illegal origin for connected iframe - ' + b.getOrigin(),
      ),
      (c = this.getContext().nb[b.getFrameName()]),
      c)
        ? Rf(b) && (c.kc(), J(c, '_g_rpcReady'))
        : ((b = jg(
            mg(lg(kg(new H(), b.ub()), b.Jb()), b.getOrigin()),
            b.getFrameName(),
          )
            .kc(Rf(b))
            .ad(Sf(b))),
          (c = ih(this.getContext(), b.value())));
    b = this.getContext();
    var d = a.i.role;
    a = a.i.data;
    jh(b);
    d = d || '';
    wc(b.yg, d, []).push({ sf: c, data: a });
    kh(c, a, b.eh[d]);
  };
  k.Oj = function (a, b) {
    new H(b).i._relayedDepth ||
      ((b = {}), Tf(Pf(new hg(b), '_opener')), J(a, '_g_connect', b));
  };
  k.xj = function (a) {
    var b = this,
      c = a.i.messageHandlers,
      d = a.i.messageHandlersFilter,
      e = a.i.onClose;
    dg(cg(bg(a, null), null), null);
    return J(this, '_g_open', a.value()).then(function (f) {
      var g = new H(f[0]),
        h = g.getFrameName();
      f = new H();
      var l = b.Jb(),
        m = g.Jb();
      lg(kg(f, b.ub() + '/' + g.ub()), m + '/' + l);
      jg(f, h);
      mg(f, g.getOrigin());
      f.Ie(g.i.apis);
      f.ad(Sf(a));
      bg(f, c);
      cg(f, d);
      dg(f, e);
      (g = b.getContext().nb[h]) || (g = ih(b.getContext(), f.value()));
      return g;
    });
  };
  k.Eh = function (a) {
    var b = a.getUrl();
    D(!b || Wc.test(b), 'Illegal url for new iframe - ' + b);
    var c = eg(a).value();
    b = {};
    for (var d in c) zc(c, d) && zc(Nf, d) && (b[d] = c[d]);
    zc(c, 'style') &&
      ((d = c.style), 'object' === typeof d && (b.style = hh(d)));
    a.value().attributes = b;
  };
  k.Ol = function (a) {
    a = new H(a);
    this.Eh(a);
    var b = a.i._relayedDepth || 0;
    a.i._relayedDepth = b + 1;
    a.i.openerIframe = this;
    var c = Sf(a);
    a.ad(null);
    var d = this;
    return this.getContext()
      .open(a.value())
      .then(function (e) {
        var f = new H(e.Ii()).i.apis,
          g = new H();
        pg(e, d, g);
        0 == b && Pf(new hg(g.value()), '_opener');
        g.kc(!0);
        g.ad(c);
        J(e, '_g_connect', g.value());
        g = new H();
        mg(jg(lg(kg(g, e.ub()), e.Gj), e.getFrameName()), e.getOrigin()).Ie(f);
        return g.value();
      });
  };
  k.dm = function (a) {
    this.getContext().addOnOpenerHandler(
      function (b) {
        b.send('_g_wasRestyled', a, void 0, Ef);
      },
      null,
      Ef,
    );
  };
  var lh = Ic(),
    mh = Ic(),
    nh = function (a, b) {
      lh[a] = b;
    },
    oh = function (a) {
      return lh[a];
    },
    ph = function (a, b) {
      Kc.load('gapi.iframes.style.' + a, b);
    },
    qh = function (a, b) {
      mh[a] = b;
    },
    rh = function (a) {
      return mh[a];
    };
  var sh = function () {
      function a(h, l) {
        h = window
          .getComputedStyle(h, '')
          .getPropertyValue(l)
          .match(/^([0-9]+)/);
        return parseInt(h[0], 10);
      }
      for (var b = 0, c = [document.body]; 0 < c.length; ) {
        var d = c.shift(),
          e = d.childNodes;
        if ('undefined' !== typeof d.style) {
          var f = d.style.overflowY;
          f ||
            (f = (f = document.defaultView.getComputedStyle(d, null))
              ? f.overflowY
              : null);
          if (
            'visible' != f &&
            'inherit' != f &&
            ((f = d.style.height),
            f ||
              (f = (f = document.defaultView.getComputedStyle(d, null))
                ? f.height
                : ''),
            0 < f.length && 'auto' != f)
          )
            continue;
        }
        for (d = 0; d < e.length; d++) {
          f = e[d];
          if (
            'undefined' !== typeof f.offsetTop &&
            'undefined' !== typeof f.offsetHeight
          ) {
            var g = f.offsetTop + f.offsetHeight + a(f, 'margin-bottom');
            b = Math.max(b, g);
          }
          c.push(f);
        }
      }
      return (
        b +
        a(document.body, 'border-bottom') +
        a(document.body, 'margin-bottom') +
        a(document.body, 'padding-bottom')
      );
    },
    th = function () {
      var a = 0;
      self.innerHeight
        ? (a = self.innerHeight)
        : document.documentElement && document.documentElement.clientHeight
        ? (a = document.documentElement.clientHeight)
        : document.body && (a = document.body.clientHeight);
      var b = document.body,
        c = document.documentElement;
      if ('CSS1Compat' === document.compatMode && c.scrollHeight)
        return c.scrollHeight !== a ? c.scrollHeight : c.offsetHeight;
      if (0 <= navigator.userAgent.indexOf('AppleWebKit')) return sh();
      if (b && c) {
        var d = c.scrollHeight,
          e = c.offsetHeight;
        c.clientHeight !== e && ((d = b.scrollHeight), (e = b.offsetHeight));
        return d > a ? (d > e ? d : e) : d < e ? d : e;
      }
    };
  var K = function (a) {
    a = a || {};
    this.Gb = !1;
    this.Aa = Ic();
    this.nb = Ic();
    this.Ab = a._window || C;
    this.mb = this.Ab.location.href;
    this.zj = (this.kh = uh(this.mb, 'parent')) ? uh(this.mb, 'pfname') : '';
    this.Ra = this.kh ? uh(this.mb, '_gfid') || uh(this.mb, 'id') : '';
    this.wd = je(this.Ra, this.zj);
    this.Mb = Ae(this.mb);
    if (this.Ra) {
      var b = new H();
      kg(b, a._parentRpcAddr || '..');
      lg(b, a._parentRetAddr || this.Ra);
      mg(b, Ae(this.kh || this.mb));
      jg(b, this.zj);
      this.Ja = ih(this, b.value());
    } else this.Ja = null;
  };
  k = K.prototype;
  k.isDisposed = function () {
    return this.Gb;
  };
  k.Lc = function () {
    if (!this.isDisposed()) {
      for (
        var a = ha(Object.values(this.nb)), b = a.next();
        !b.done;
        b = a.next()
      )
        b.value.Lc();
      this.Gb = !0;
    }
  };
  k.getFrameName = function () {
    return this.wd;
  };
  k.getOrigin = function () {
    return this.Mb;
  };
  k.getWindow = function () {
    return this.Ab;
  };
  k.setGlobalParam = function (a, b) {
    this.Aa[a] = b;
  };
  k.getGlobalParam = function (a) {
    return this.Aa[a];
  };
  var ih = function (a, b) {
    D(!a.isDisposed(), 'Cannot attach iframe in disposed context');
    b = new H(b);
    b.ub() || kg(b, b.getId());
    b.Jb() || lg(b, '..');
    b.getOrigin() || mg(b, Ae(b.getUrl()));
    b.getFrameName() || jg(b, je(b.getId(), a.wd));
    var c = b.getFrameName();
    if (a.nb[c]) return a.nb[c];
    var d = b.ub(),
      e = d;
    b.getOrigin() && (e = d + '|' + b.getOrigin());
    var f = b.Jb(),
      g = Sf(b);
    g ||
      ((g =
        ((g = b.getIframeEl()) &&
          (g.getAttribute('data-postorigin') || g.src)) ||
        b.getUrl()),
      (g = Lc(g, 'rpctoken')));
    og(b, ch(e, f, g, b.i._popupWindow));
    e = ((window.gadgets || {}).rpc || {}).setAuthToken;
    g && e && e(d, g);
    var h = new I(a, d, c, b),
      l = b.i.messageHandlersFilter;
    Ac(b.i.messageHandlers, function (m, q) {
      h.register(q, m, l);
    });
    Rf(b) && h.kc();
    J(h, '_g_rpcReady');
    return h;
  };
  K.prototype.Eh = function (a) {
    jg(a, null);
    var b = a.getId();
    !b ||
      (Cf.test(b) && !this.getWindow().document.getElementById(b)) ||
      (tg.log('Ignoring requested iframe ID - ' + b), (a.i.id = null));
  };
  var uh = function (a, b) {
    var c = Lc(a, b);
    c || (c = Kd(Lc(a, 'jcp', ''))[b]);
    return c || '';
  };
  K.prototype.openChild = function (a) {
    D(!this.isDisposed(), 'Cannot open iframe in disposed context');
    var b = new H(a);
    vh(this, b);
    var c = b.getFrameName();
    if (c && this.nb[c]) return this.nb[c];
    this.Eh(b);
    c = b.getUrl();
    D(c, 'No url for new iframe');
    var d = b.i.queryParams || {};
    d.usegapi = '1';
    b.i.queryParams = d;
    d = this.Ni && this.Ni(c, b);
    d ||
      ((d = b.i.where),
      D(!!d, 'No location for new iframe'),
      (c = re(c, d, a)),
      (b.i.iframeEl = c),
      (d = c.getAttribute('id')));
    kg(b, d).i.id = d;
    mg(b, Ae(b.i.eurl || ''));
    this.ij && this.ij(b, b.getIframeEl());
    c = ih(this, a);
    c.Oj && c.Oj(c, a);
    (a = b.i.onCreate) && a(c);
    b.i.disableRelayOpen || c.applyIframesApi('_open');
    return c;
  };
  var wh = function (a, b, c) {
      var d = b.i.canvasUrl;
      if (!d) return c;
      D(
        !b.i.allowPost && !b.i.forcePost,
        'Post is not supported when using canvas url',
      );
      var e = b.getUrl();
      D(
        e && Ae(e) === a.Mb && Ae(d) === a.Mb,
        'Wrong origin for canvas or hidden url ' + d,
      );
      b.setUrl(d);
      b.i.waitForOnload = !0;
      b.i.canvasUrl = null;
      return function (f) {
        var g = f.getWindow(),
          h = g.location.hash;
        h = qe(e) + (/#/.test(e) ? h.replace(/^#/, '&') : h);
        g.location.replace(h);
        c && c(f);
      };
    },
    xh = function (a, b, c) {
      var d = b.i.relayOpen;
      if (d) {
        var e = a.getParentIframe();
        d instanceof I
          ? ((e = d), (b.i.relayOpen = 0))
          : 0 < Number(d) && (b.i.relayOpen = Number(d) - 1);
        if (e) {
          D(!!e.xj, 'Relaying iframe open is disabled');
          if ((d = b.getStyle()))
            if ((d = mh[d])) ng(b, a), d(b.value()), ng(b, null);
          b.i.openerIframe = null;
          c.resolve(e.xj(b));
          return !0;
        }
      }
      return !1;
    },
    yh = function (a, b, c) {
      var d = b.getStyle();
      if (d)
        if (
          (D(!!oh, 'Defer style is disabled, when requesting style ' + d),
          lh[d])
        )
          vh(a, b);
        else
          return (
            ph(d, function () {
              D(!!lh[d], 'Fail to load style - ' + d);
              c.resolve(a.open(b.value()));
            }),
            !0
          );
      return !1;
    };
  K.prototype.open = function (a, b) {
    D(!this.isDisposed(), 'Cannot open iframe in disposed context');
    var c = new H(a);
    b = wh(this, c, b);
    var d = new rg(b);
    (b = c.getUrl()) && c.setUrl(qe(b));
    if (xh(this, c, d) || yh(this, c, d) || xh(this, c, d)) return d.promise;
    if (null != gg(c)) {
      var e = setTimeout(function () {
          g.getIframeEl().src = 'about:blank';
          d.reject({
            timeout: 'Exceeded time limit of :' + gg(c) + 'milliseconds',
          });
        }, gg(c)),
        f = d.resolve;
      d.resolve = function (h) {
        clearTimeout(e);
        f(h);
      };
    }
    c.i.waitForOnload &&
      Vf(eg(c), function () {
        d.resolve(g);
      });
    var g = this.openChild(a);
    c.i.waitForOnload || d.resolve(g);
    return d.promise;
  };
  K.prototype.getParentIframe = function () {
    return this.Ja;
  };
  var zh = function (a, b) {
    var c = a.getParentIframe(),
      d = !0;
    b.filter && (d = b.filter.call(b.sf, b.params));
    return F(d).then(function (e) {
      return e && c
        ? (b.yj && b.yj.call(a, b.params),
          (e = b.sender ? b.sender(b.params) : J(c, b.message, b.params)),
          b.Dm
            ? e.then(function () {
                return !0;
              })
            : !0)
        : !1;
    });
  };
  k = K.prototype;
  k.closeSelf = function (a, b, c) {
    a = zh(this, {
      sender: function (d) {
        var e = Bf.getParentIframe();
        Ac(Bf.nb, function (f) {
          f !== e && J(f, '_g_wasClosed', d);
        });
        return J(e, '_g_closeMe', d);
      },
      message: '_g_closeMe',
      params: a,
      sf: c,
      filter: this.getGlobalParam('onCloseSelfFilter'),
    });
    b = new rg(b);
    b.resolve(a);
    return b.promise;
  };
  k.restyleSelf = function (a, b, c) {
    a = a || {};
    b = new rg(b);
    b.resolve(
      zh(this, {
        message: '_g_restyleMe',
        params: a,
        sf: c,
        filter: this.getGlobalParam('onRestyleSelfFilter'),
        Dm: !0,
        yj: this.ak,
      }),
    );
    return b.promise;
  };
  k.ak = function (a) {
    'auto' === a.height && (a.height = th());
  };
  k.setCloseSelfFilter = function (a) {
    this.setGlobalParam('onCloseSelfFilter', a);
  };
  k.setRestyleSelfFilter = function (a) {
    this.setGlobalParam('onRestyleSelfFilter', a);
  };
  var vh = function (a, b) {
    var c = b.getStyle();
    if (c) {
      b.Pj(null);
      var d = lh[c];
      D(d, 'No such style: ' + c);
      ng(b, a);
      d(b.value());
      ng(b, null);
    }
  };
  K.prototype.ready = function (a, b, c, d) {
    var e = b || {},
      f = this.getParentIframe();
    this.addOnOpenerHandler(
      function (h) {
        Ac(
          e,
          function (l, m) {
            h.register(m, l, d);
          },
          this,
        );
        h !== f && h.send('_ready', g, void 0, d);
      },
      void 0,
      d,
    );
    var g = a || {};
    g.height = g.height || 'auto';
    this.ak(g);
    f && f.send('_ready', g, c, Ef);
  };
  K.prototype.connectIframes = function (a, b) {
    a = new hg(a);
    var c = new hg(b),
      d = Rf(a);
    b = a.getIframe();
    var e = c.getIframe();
    if (e) {
      var f = Sf(a),
        g = new H();
      pg(b, e, g);
      Qf(Pf(new hg(g.value()).ad(f), a.i.role), a.i.data).kc(d);
      var h = new H();
      pg(e, b, h);
      Qf(Pf(new hg(h.value()).ad(f), c.i.role), c.i.data).kc(!0);
      J(b, '_g_connect', g.value(), function () {
        d || J(e, '_g_connect', h.value());
      });
      d && J(e, '_g_connect', h.value());
    } else
      (c = {}),
        Qf(Pf(Tf(new hg(c)), a.i.role), a.i.data),
        J(b, '_g_connect', c);
  };
  var jh = function (a) {
    a.yg || ((a.yg = Ic()), (a.eh = Ic()));
  };
  K.prototype.addOnConnectHandler = function (a, b, c, d) {
    jh(this);
    'object' === typeof a
      ? ((b = new Xf(a)), (c = b.i.role || ''))
      : ((b = $f(Zf(Yf(a), b).Ie(c), d)), (c = a));
    d = this.yg[c] || [];
    a = !1;
    for (var e = 0; e < d.length && !a; e++)
      kh(this.nb[d[e].sf.getFrameName()], d[e].data, [b]), (a = b.i.runOnce);
    c = wc(this.eh, c, []);
    a || b.i.dontWait || c.push(b);
  };
  K.prototype.removeOnConnectHandler = function (a, b) {
    a = wc(this.eh, a, []);
    if (b)
      for (var c = 0, d = !1; !d && c < a.length; c++)
        a[c].i.handler === b && ((d = !0), a.splice(c, 1));
    else a.splice(0, a.length);
  };
  var kh = function (a, b, c) {
    c = c || [];
    for (var d = 0; d < c.length; d++) {
      var e = c[d];
      if (e && a) {
        var f = e.i.filter || Df;
        if (a && f(a)) {
          f = e.i.apis || [];
          for (var g = 0; g < f.length; g++) a.applyIframesApi(f[g]);
          e.i.handler && (0, e.i.handler)(a, b);
          e.i.runOnce && (c.splice(d, 1), --d);
        }
      }
    }
  };
  K.prototype.addOnOpenerHandler = function (a, b, c) {
    var d = this.addOnConnectHandler;
    a = $f(Zf(Yf('_opener'), a).Ie(b), c);
    a.i.runOnce = !0;
    d.call(this, a.value());
  };
  K.prototype.ij = function (a, b) {
    var c = a.i.controller;
    if (c) {
      D(
        c.Mb === a.getOrigin(),
        'Wrong controller origin ' + this.Mb + ' !== ' + a.getOrigin(),
      );
      var d = a.ub();
      kg(a, c.ub());
      lg(a, c.Jb());
      var e = new H();
      fg(kg(e, d), a.i.controllerData);
      Zc(b, 'load', function () {
        c.send('_g_control', e.value());
      });
    }
  };
  var Ah = function (a, b, c) {
    a = a.getWindow();
    var d = a.document,
      e = c.i.reuseWindow;
    if (e) {
      var f = c.getId();
      if (!f)
        throw Error(
          'If you provide a reuseWindow, you must also provide an ID',
        );
    } else f = he(d, c);
    var g = f,
      h = c.i.rpcRelayUrl;
    if (h) {
      h = Vc(uc, h.replace(oe, pe));
      g = c.i.fragmentParams || {};
      g.rly = f;
      c.i.fragmentParams = g;
      g = c.i.where || d.body;
      D(!!g, 'Cannot open window in a page with no body');
      var l = {};
      l.src = h;
      l.style = 'display:none;';
      l.id = f;
      l.name = f;
      me(d, g, l, f);
      g = f + '_relay';
    }
    b = qe(b);
    var m = ke(d, b, f, c.value());
    c.i.eurl = m;
    b = c.i.openAsWindow;
    'string' !== typeof b && (b = void 0);
    c = window.navigator.userAgent || '';
    /Trident|MSIE/i.test(c) &&
      /#/.test(c) &&
      (m =
        'javascript:window.location.replace(' +
        C.JSON.stringify(m).replace(/#/g, '\\x23') +
        ')');
    if (e) {
      var q = e;
      setTimeout(function () {
        q.location.replace(m);
      });
    } else q = hc(m, a, g, b);
    return { id: f, jk: q };
  };
  K.prototype.Ni = function (a, b) {
    if (b.i.openAsWindow) {
      a = Ah(this, a, b);
      var c = a.id;
      D(!!a.jk, 'Open popup window failed');
      b.i._popupWindow = a.jk;
    }
    return c;
  };
  zf = Ic();
  Af = Ic();
  Bf = new K();
  Kf('_g_rpcReady', I.prototype.kc);
  Kf('_g_discover', I.prototype.Vk);
  Kf('_g_ping', I.prototype.Rl);
  Kf('_g_close', I.prototype.xk);
  Kf('_g_closeMe', I.prototype.yk);
  Kf('_g_restyle', I.prototype.em);
  Kf('_g_restyleMe', I.prototype.fm);
  Kf('_g_wasClosed', I.prototype.Em);
  Jf('control', '_g_control', I.prototype.Bk);
  Jf('control', '_g_disposeControl', I.prototype.Hk);
  var Bh = Bf.getParentIframe();
  Bh && Bh.register('_g_restyleDone', I.prototype.dm, Ef);
  Kf('_g_connect', I.prototype.zk);
  var Ch = {};
  Ch._g_open = I.prototype.Ol;
  If('_open', Ch, Ef);
  var Dh = {
    Context: K,
    Iframe: I,
    SAME_ORIGIN_IFRAMES_FILTER: Df,
    CROSS_ORIGIN_IFRAMES_FILTER: Ef,
    makeWhiteListIframesFilter: Ff,
    getContext: Lf,
    registerIframesApi: If,
    registerIframesApiHandler: Jf,
    registerStyle: nh,
    registerBeforeOpenStyle: qh,
    getStyle: oh,
    getBeforeOpenStyle: rh,
    create: re,
  };
  Oe({
    instance: function () {
      return Dh;
    },
    priority: 2,
  });
  Jf('gapi.load', '_g_gapi.load', function (a) {
    return new E(function (b) {
      Kc.load((a && 'object' === typeof a && a.features) || '', b);
    });
  });
  r('gapi.iframes.registerStyle', nh);
  r('gapi.iframes.registerBeforeOpenStyle', qh);
  r('gapi.iframes.getStyle', oh);
  r('gapi.iframes.getBeforeOpenStyle', rh);
  r('gapi.iframes.registerIframesApi', If);
  r('gapi.iframes.registerIframesApiHandler', Jf);
  r('gapi.iframes.getContext', Lf);
  r('gapi.iframes.SAME_ORIGIN_IFRAMES_FILTER', Df);
  r('gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER', Ef);
  r('gapi.iframes.makeWhiteListIframesFilter', Ff);
  r('gapi.iframes.Context', K);
  r('gapi.iframes.Context.prototype.isDisposed', K.prototype.isDisposed);
  r('gapi.iframes.Context.prototype.getWindow', K.prototype.getWindow);
  r('gapi.iframes.Context.prototype.getFrameName', K.prototype.getFrameName);
  r(
    'gapi.iframes.Context.prototype.getGlobalParam',
    K.prototype.getGlobalParam,
  );
  r(
    'gapi.iframes.Context.prototype.setGlobalParam',
    K.prototype.setGlobalParam,
  );
  r('gapi.iframes.Context.prototype.open', K.prototype.open);
  r('gapi.iframes.Context.prototype.openChild', K.prototype.openChild);
  r(
    'gapi.iframes.Context.prototype.getParentIframe',
    K.prototype.getParentIframe,
  );
  r('gapi.iframes.Context.prototype.closeSelf', K.prototype.closeSelf);
  r('gapi.iframes.Context.prototype.restyleSelf', K.prototype.restyleSelf);
  r(
    'gapi.iframes.Context.prototype.setCloseSelfFilter',
    K.prototype.setCloseSelfFilter,
  );
  r(
    'gapi.iframes.Context.prototype.setRestyleSelfFilter',
    K.prototype.setRestyleSelfFilter,
  );
  r(
    'gapi.iframes.Context.prototype.addOnConnectHandler',
    K.prototype.addOnConnectHandler,
  );
  r(
    'gapi.iframes.Context.prototype.removeOnConnectHandler',
    K.prototype.removeOnConnectHandler,
  );
  r(
    'gapi.iframes.Context.prototype.addOnOpenerHandler',
    K.prototype.addOnOpenerHandler,
  );
  r(
    'gapi.iframes.Context.prototype.connectIframes',
    K.prototype.connectIframes,
  );
  r('gapi.iframes.Iframe', I);
  r('gapi.iframes.Iframe.prototype.isDisposed', I.prototype.isDisposed);
  r('gapi.iframes.Iframe.prototype.getContext', I.prototype.getContext);
  r('gapi.iframes.Iframe.prototype.getFrameName', I.prototype.getFrameName);
  r('gapi.iframes.Iframe.prototype.getId', I.prototype.getId);
  r('gapi.iframes.Iframe.prototype.register', I.prototype.register);
  r('gapi.iframes.Iframe.prototype.unregister', I.prototype.unregister);
  r('gapi.iframes.Iframe.prototype.send', I.prototype.send);
  r(
    'gapi.iframes.Iframe.prototype.applyIframesApi',
    I.prototype.applyIframesApi,
  );
  r('gapi.iframes.Iframe.prototype.getIframeEl', I.prototype.getIframeEl);
  r('gapi.iframes.Iframe.prototype.getSiteEl', I.prototype.getSiteEl);
  r('gapi.iframes.Iframe.prototype.setSiteEl', I.prototype.setSiteEl);
  r('gapi.iframes.Iframe.prototype.getWindow', I.prototype.getWindow);
  r('gapi.iframes.Iframe.prototype.getOrigin', I.prototype.getOrigin);
  r('gapi.iframes.Iframe.prototype.close', I.prototype.close);
  r('gapi.iframes.Iframe.prototype.restyle', I.prototype.restyle);
  r('gapi.iframes.Iframe.prototype.restyleDone', I.prototype.bm);
  r(
    'gapi.iframes.Iframe.prototype.registerWasRestyled',
    I.prototype.registerWasRestyled,
  );
  r(
    'gapi.iframes.Iframe.prototype.registerWasClosed',
    I.prototype.registerWasClosed,
  );
  r('gapi.iframes.Iframe.prototype.getParam', I.prototype.getParam);
  r('gapi.iframes.Iframe.prototype.setParam', I.prototype.setParam);
  r('gapi.iframes.Iframe.prototype.ping', I.prototype.ping);
  r('gapi.iframes.Iframe.prototype.getOpenParams', I.prototype.Ii);
  r('gapi.iframes.create', re);
  var Eh = function (a) {
    return Array.prototype.map
      .call(a, function (b) {
        b = b.toString(16);
        return 1 < b.length ? b : '0' + b;
      })
      .join('');
  };
  var Fh = null,
    Hh = function (a) {
      var b = [];
      Gh(a, function (c) {
        b.push(c);
      });
      return b;
    },
    Gh = function (a, b) {
      function c(l) {
        for (; d < a.length; ) {
          var m = a.charAt(d++),
            q = Fh[m];
          if (null != q) return q;
          if (!/^[\s\xa0]*$/.test(m))
            throw Error('Unknown base64 encoding at char: ' + m);
        }
        return l;
      }
      Ih();
      for (var d = 0; ; ) {
        var e = c(-1),
          f = c(0),
          g = c(64),
          h = c(64);
        if (64 === h && -1 === e) break;
        b((e << 2) | (f >> 4));
        64 != g &&
          (b(((f << 4) & 240) | (g >> 2)), 64 != h && b(((g << 6) & 192) | h));
      }
    },
    Ih = function () {
      if (!Fh) {
        Fh = {};
        for (
          var a =
              'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'.split(
                '',
              ),
            b = ['+/=', '+/', '-_=', '-_.', '-_'],
            c = 0;
          5 > c;
          c++
        )
          for (var d = a.concat(b[c].split('')), e = 0; e < d.length; e++) {
            var f = d[e],
              g = Fh[f];
            void 0 === g ? (Fh[f] = e) : w(g === e);
          }
      }
    };
  var Lh = function (a, b) {
      this.blockSize = -1;
      this.blockSize = 64;
      this.af = p.Uint8Array
        ? new Uint8Array(this.blockSize)
        : Array(this.blockSize);
      this.mc = this.zd = 0;
      this.oa = [];
      this.Gl = a;
      this.Wi = b;
      this.Cm = p.Int32Array ? new Int32Array(64) : Array(64);
      void 0 === Jh && (Jh = p.Int32Array ? new Int32Array(Kh) : Kh);
      this.reset();
    },
    Jh;
  v(Lh, Od);
  for (var Mh = [], Nh = 0; 63 > Nh; Nh++) Mh[Nh] = 0;
  var Oh = (function (a) {
    return Array.prototype.concat.apply([], arguments);
  })(128, Mh);
  Lh.prototype.reset = function () {
    this.mc = this.zd = 0;
    this.oa = p.Int32Array ? new Int32Array(this.Wi) : Qa(this.Wi);
  };
  var Ph = function (a) {
    var b = a.af;
    w(b.length == a.blockSize);
    for (var c = a.Cm, d = 0, e = 0; e < b.length; )
      (c[d++] = (b[e] << 24) | (b[e + 1] << 16) | (b[e + 2] << 8) | b[e + 3]),
        (e = 4 * d);
    for (b = 16; 64 > b; b++) {
      e = c[b - 15] | 0;
      d = c[b - 2] | 0;
      var f =
          ((c[b - 16] | 0) +
            (((e >>> 7) | (e << 25)) ^ ((e >>> 18) | (e << 14)) ^ (e >>> 3))) |
          0,
        g =
          ((c[b - 7] | 0) +
            (((d >>> 17) | (d << 15)) ^
              ((d >>> 19) | (d << 13)) ^
              (d >>> 10))) |
          0;
      c[b] = (f + g) | 0;
    }
    d = a.oa[0] | 0;
    e = a.oa[1] | 0;
    var h = a.oa[2] | 0,
      l = a.oa[3] | 0,
      m = a.oa[4] | 0,
      q = a.oa[5] | 0,
      y = a.oa[6] | 0;
    f = a.oa[7] | 0;
    for (b = 0; 64 > b; b++) {
      var B =
        ((((d >>> 2) | (d << 30)) ^
          ((d >>> 13) | (d << 19)) ^
          ((d >>> 22) | (d << 10))) +
          ((d & e) ^ (d & h) ^ (e & h))) |
        0;
      g = (m & q) ^ (~m & y);
      f =
        (f +
          (((m >>> 6) | (m << 26)) ^
            ((m >>> 11) | (m << 21)) ^
            ((m >>> 25) | (m << 7)))) |
        0;
      g = (g + (Jh[b] | 0)) | 0;
      g = (f + ((g + (c[b] | 0)) | 0)) | 0;
      f = y;
      y = q;
      q = m;
      m = (l + g) | 0;
      l = h;
      h = e;
      e = d;
      d = (g + B) | 0;
    }
    a.oa[0] = (a.oa[0] + d) | 0;
    a.oa[1] = (a.oa[1] + e) | 0;
    a.oa[2] = (a.oa[2] + h) | 0;
    a.oa[3] = (a.oa[3] + l) | 0;
    a.oa[4] = (a.oa[4] + m) | 0;
    a.oa[5] = (a.oa[5] + q) | 0;
    a.oa[6] = (a.oa[6] + y) | 0;
    a.oa[7] = (a.oa[7] + f) | 0;
  };
  Lh.prototype.update = function (a, b) {
    void 0 === b && (b = a.length);
    var c = 0,
      d = this.zd;
    if ('string' === typeof a)
      for (; c < b; )
        (this.af[d++] = a.charCodeAt(c++)),
          d == this.blockSize && (Ph(this), (d = 0));
    else if (sa(a))
      for (; c < b; ) {
        var e = a[c++];
        if (!('number' == typeof e && 0 <= e && 255 >= e && e == (e | 0)))
          throw Error('message must be a byte array');
        this.af[d++] = e;
        d == this.blockSize && (Ph(this), (d = 0));
      }
    else throw Error('message must be string or array');
    this.zd = d;
    this.mc += b;
  };
  Lh.prototype.digest = function () {
    var a = [],
      b = 8 * this.mc;
    56 > this.zd
      ? this.update(Oh, 56 - this.zd)
      : this.update(Oh, this.blockSize - (this.zd - 56));
    for (var c = 63; 56 <= c; c--) (this.af[c] = b & 255), (b /= 256);
    Ph(this);
    for (c = b = 0; c < this.Gl; c++)
      for (var d = 24; 0 <= d; d -= 8) a[b++] = (this.oa[c] >> d) & 255;
    return a;
  };
  var Kh = [
    1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993,
    2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987,
    1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774,
    264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986,
    2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711,
    113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291,
    1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411,
    3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344,
    430227734, 506948616, 659060556, 883997877, 958139571, 1322822218,
    1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424,
    2428436474, 2756734187, 3204031479, 3329325298,
  ];
  var Rh = function () {
    Lh.call(this, 8, Qh);
  };
  v(Rh, Lh);
  var Qh = [
    1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924,
    528734635, 1541459225,
  ];
  var Sh = function () {
    this.Gb = this.Gb;
    this.Gf = this.Gf;
  };
  Sh.prototype.Gb = !1;
  Sh.prototype.isDisposed = function () {
    return this.Gb;
  };
  Sh.prototype.Lc = function () {
    this.Gb || ((this.Gb = !0), this.ee());
  };
  Sh.prototype.ee = function () {
    if (this.Gf) for (; this.Gf.length; ) this.Gf.shift()();
  };
  var Th = function (a, b) {
    this.type = a;
    this.currentTarget = this.target = b;
    this.defaultPrevented = this.Ce = !1;
  };
  Th.prototype.stopPropagation = function () {
    this.Ce = !0;
  };
  Th.prototype.preventDefault = function () {
    this.defaultPrevented = !0;
  };
  var Uh = (function () {
    if (!p.addEventListener || !Object.defineProperty) return !1;
    var a = !1,
      b = Object.defineProperty({}, 'passive', {
        get: function () {
          a = !0;
        },
      });
    try {
      p.addEventListener('test', function () {}, b),
        p.removeEventListener('test', function () {}, b);
    } catch (c) {}
    return a;
  })();
  var Vh = function (a, b) {
    Th.call(this, a ? a.type : '');
    this.relatedTarget = this.currentTarget = this.target = null;
    this.button =
      this.screenY =
      this.screenX =
      this.clientY =
      this.clientX =
      this.offsetY =
      this.offsetX =
        0;
    this.key = '';
    this.charCode = this.keyCode = 0;
    this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
    this.state = null;
    this.pointerId = 0;
    this.pointerType = '';
    this.ab = null;
    a && this.init(a, b);
  };
  v(Vh, Th);
  var Wh = Je({ 2: 'touch', 3: 'pen', 4: 'mouse' });
  Vh.prototype.init = function (a, b) {
    var c = (this.type = a.type),
      d =
        a.changedTouches && a.changedTouches.length
          ? a.changedTouches[0]
          : null;
    this.target = a.target || a.srcElement;
    this.currentTarget = b;
    if ((b = a.relatedTarget)) {
      if (Pb) {
        a: {
          try {
            Ib(b.nodeName);
            var e = !0;
            break a;
          } catch (f) {}
          e = !1;
        }
        e || (b = null);
      }
    } else
      'mouseover' == c
        ? (b = a.fromElement)
        : 'mouseout' == c && (b = a.toElement);
    this.relatedTarget = b;
    d
      ? ((this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX),
        (this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY),
        (this.screenX = d.screenX || 0),
        (this.screenY = d.screenY || 0))
      : ((this.offsetX = Qb || void 0 !== a.offsetX ? a.offsetX : a.layerX),
        (this.offsetY = Qb || void 0 !== a.offsetY ? a.offsetY : a.layerY),
        (this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX),
        (this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY),
        (this.screenX = a.screenX || 0),
        (this.screenY = a.screenY || 0));
    this.button = a.button;
    this.keyCode = a.keyCode || 0;
    this.key = a.key || '';
    this.charCode = a.charCode || ('keypress' == c ? a.keyCode : 0);
    this.ctrlKey = a.ctrlKey;
    this.altKey = a.altKey;
    this.shiftKey = a.shiftKey;
    this.metaKey = a.metaKey;
    this.pointerId = a.pointerId || 0;
    this.pointerType =
      'string' === typeof a.pointerType
        ? a.pointerType
        : Wh[a.pointerType] || '';
    this.state = a.state;
    this.ab = a;
    a.defaultPrevented && Vh.hd.preventDefault.call(this);
  };
  Vh.prototype.stopPropagation = function () {
    Vh.hd.stopPropagation.call(this);
    this.ab.stopPropagation
      ? this.ab.stopPropagation()
      : (this.ab.cancelBubble = !0);
  };
  Vh.prototype.preventDefault = function () {
    Vh.hd.preventDefault.call(this);
    var a = this.ab;
    a.preventDefault ? a.preventDefault() : (a.returnValue = !1);
  };
  Vh.prototype.Sk = function () {
    return this.ab;
  };
  var Xh = 'closure_listenable_' + ((1e6 * Math.random()) | 0);
  var Yh = 0;
  var Zh = function (a, b, c, d, e) {
      this.listener = a;
      this.proxy = null;
      this.src = b;
      this.type = c;
      this.capture = !!d;
      this.nf = e;
      this.key = ++Yh;
      this.Ge = this.We = !1;
    },
    $h = function (a) {
      a.Ge = !0;
      a.listener = null;
      a.proxy = null;
      a.src = null;
      a.nf = null;
    };
  var ai = function (a) {
    this.src = a;
    this.Sa = {};
    this.Pe = 0;
  };
  ai.prototype.add = function (a, b, c, d, e) {
    var f = a.toString();
    a = this.Sa[f];
    a || ((a = this.Sa[f] = []), this.Pe++);
    var g = bi(a, b, d, e);
    -1 < g
      ? ((b = a[g]), c || (b.We = !1))
      : ((b = new Zh(b, this.src, f, !!d, e)), (b.We = c), a.push(b));
    return b;
  };
  ai.prototype.remove = function (a, b, c, d) {
    a = a.toString();
    if (!(a in this.Sa)) return !1;
    var e = this.Sa[a];
    b = bi(e, b, c, d);
    return -1 < b
      ? ($h(e[b]),
        Oa(e, b),
        0 == e.length && (delete this.Sa[a], this.Pe--),
        !0)
      : !1;
  };
  var ci = function (a, b) {
    var c = b.type;
    c in a.Sa &&
      Na(a.Sa[c], b) &&
      ($h(b), 0 == a.Sa[c].length && (delete a.Sa[c], a.Pe--));
  };
  ai.prototype.removeAll = function (a) {
    a = a && a.toString();
    var b = 0,
      c;
    for (c in this.Sa)
      if (!a || c == a) {
        for (var d = this.Sa[c], e = 0; e < d.length; e++) ++b, $h(d[e]);
        delete this.Sa[c];
        this.Pe--;
      }
    return b;
  };
  ai.prototype.Lg = function (a, b, c, d) {
    a = this.Sa[a.toString()];
    var e = -1;
    a && (e = bi(a, b, c, d));
    return -1 < e ? a[e] : null;
  };
  ai.prototype.hasListener = function (a, b) {
    var c = void 0 !== a,
      d = c ? a.toString() : '',
      e = void 0 !== b;
    return Ta(this.Sa, function (f) {
      for (var g = 0; g < f.length; ++g)
        if (!((c && f[g].type != d) || (e && f[g].capture != b))) return !0;
      return !1;
    });
  };
  var bi = function (a, b, c, d) {
    for (var e = 0; e < a.length; ++e) {
      var f = a[e];
      if (!f.Ge && f.listener == b && f.capture == !!c && f.nf == d) return e;
    }
    return -1;
  };
  var di = 'closure_lm_' + ((1e6 * Math.random()) | 0),
    ei = {},
    fi = 0,
    hi = function (a, b, c, d, e) {
      if (d && d.once) gi(a, b, c, d, e);
      else if (Array.isArray(b))
        for (var f = 0; f < b.length; f++) hi(a, b[f], c, d, e);
      else
        (c = ii(c)),
          a && a[Xh]
            ? a.listen(b, c, t(d) ? !!d.capture : !!d, e)
            : ji(a, b, c, !1, d, e);
    },
    ji = function (a, b, c, d, e, f) {
      if (!b) throw Error('Invalid event type');
      var g = t(e) ? !!e.capture : !!e,
        h = ki(a);
      h || (a[di] = h = new ai(a));
      c = h.add(b, c, d, g, f);
      if (!c.proxy) {
        d = li();
        c.proxy = d;
        d.src = a;
        d.listener = c;
        if (a.addEventListener)
          Uh || (e = g),
            void 0 === e && (e = !1),
            a.addEventListener(b.toString(), d, e);
        else if (a.attachEvent) a.attachEvent(mi(b.toString()), d);
        else if (a.addListener && a.removeListener)
          w('change' === b, 'MediaQueryList only has a change event'),
            a.addListener(d);
        else throw Error('addEventListener and attachEvent are unavailable.');
        fi++;
      }
    },
    li = function () {
      var a = ni,
        b = function (c) {
          return a.call(b.src, b.listener, c);
        };
      return b;
    },
    gi = function (a, b, c, d, e) {
      if (Array.isArray(b))
        for (var f = 0; f < b.length; f++) gi(a, b[f], c, d, e);
      else
        (c = ii(c)),
          a && a[Xh]
            ? oi(a, b, c, t(d) ? !!d.capture : !!d, e)
            : ji(a, b, c, !0, d, e);
    },
    pi = function (a, b, c, d, e) {
      if (Array.isArray(b))
        for (var f = 0; f < b.length; f++) pi(a, b[f], c, d, e);
      else
        (d = t(d) ? !!d.capture : !!d),
          (c = ii(c)),
          a && a[Xh]
            ? a.Ib.remove(String(b), c, d, e)
            : a && (a = ki(a)) && (b = a.Lg(b, c, d, e)) && qi(b);
    },
    qi = function (a) {
      if ('number' !== typeof a && a && !a.Ge) {
        var b = a.src;
        if (b && b[Xh]) ci(b.Ib, a);
        else {
          var c = a.type,
            d = a.proxy;
          b.removeEventListener
            ? b.removeEventListener(c, d, a.capture)
            : b.detachEvent
            ? b.detachEvent(mi(c), d)
            : b.addListener && b.removeListener && b.removeListener(d);
          fi--;
          (c = ki(b))
            ? (ci(c, a), 0 == c.Pe && ((c.src = null), (b[di] = null)))
            : $h(a);
        }
      }
    },
    mi = function (a) {
      return a in ei ? ei[a] : (ei[a] = 'on' + a);
    },
    ni = function (a, b) {
      if (a.Ge) a = !0;
      else {
        b = new Vh(b, this);
        var c = a.listener,
          d = a.nf || a.src;
        a.We && qi(a);
        a = c.call(d, b);
      }
      return a;
    },
    ki = function (a) {
      a = a[di];
      return a instanceof ai ? a : null;
    },
    ri = '__closure_events_fn_' + ((1e9 * Math.random()) >>> 0),
    ii = function (a) {
      w(a, 'Listener can not be null.');
      if ('function' === typeof a) return a;
      w(a.handleEvent, 'An object listener must have handleEvent method.');
      a[ri] ||
        (a[ri] = function (b) {
          return a.handleEvent(b);
        });
      return a[ri];
    };
  var si = function () {
    Sh.call(this);
    this.Ib = new ai(this);
    this.qk = this;
    this.jh = null;
  };
  v(si, Sh);
  si.prototype[Xh] = !0;
  k = si.prototype;
  k.addEventListener = function (a, b, c, d) {
    hi(this, a, b, c, d);
  };
  k.removeEventListener = function (a, b, c, d) {
    pi(this, a, b, c, d);
  };
  k.dispatchEvent = function (a) {
    ti(this);
    var b = this.jh;
    if (b) {
      var c = [];
      for (var d = 1; b; b = b.jh) c.push(b), w(1e3 > ++d, 'infinite loop');
    }
    b = this.qk;
    d = a.type || a;
    if ('string' === typeof a) a = new Th(a, b);
    else if (a instanceof Th) a.target = a.target || b;
    else {
      var e = a;
      a = new Th(d, b);
      Xa(a, e);
    }
    e = !0;
    if (c)
      for (var f = c.length - 1; !a.Ce && 0 <= f; f--) {
        var g = (a.currentTarget = c[f]);
        e = ui(g, d, !0, a) && e;
      }
    a.Ce ||
      ((g = a.currentTarget = b),
      (e = ui(g, d, !0, a) && e),
      a.Ce || (e = ui(g, d, !1, a) && e));
    if (c)
      for (f = 0; !a.Ce && f < c.length; f++)
        (g = a.currentTarget = c[f]), (e = ui(g, d, !1, a) && e);
    return e;
  };
  k.ee = function () {
    si.hd.ee.call(this);
    this.Ib && this.Ib.removeAll(void 0);
    this.jh = null;
  };
  k.listen = function (a, b, c, d) {
    ti(this);
    return this.Ib.add(String(a), b, !1, c, d);
  };
  var oi = function (a, b, c, d, e) {
      a.Ib.add(String(b), c, !0, d, e);
    },
    ui = function (a, b, c, d) {
      b = a.Ib.Sa[String(b)];
      if (!b) return !0;
      b = b.concat();
      for (var e = !0, f = 0; f < b.length; ++f) {
        var g = b[f];
        if (g && !g.Ge && g.capture == c) {
          var h = g.listener,
            l = g.nf || g.src;
          g.We && ci(a.Ib, g);
          e = !1 !== h.call(l, d) && e;
        }
      }
      return e && !d.defaultPrevented;
    };
  si.prototype.Lg = function (a, b, c, d) {
    return this.Ib.Lg(String(a), b, c, d);
  };
  si.prototype.hasListener = function (a, b) {
    return this.Ib.hasListener(void 0 !== a ? String(a) : void 0, b);
  };
  var ti = function (a) {
    w(
      a.Ib,
      'Event target is not initialized. Did you call the superclass (goog.events.EventTarget) constructor?',
    );
  };
  var vi = function () {};
  vi.prototype.fi = null;
  vi.prototype.getOptions = function () {
    return this.fi || (this.fi = this.wf());
  };
  var wi,
    xi = function () {};
  v(xi, vi);
  xi.prototype.Zd = function () {
    var a = yi(this);
    return a ? new ActiveXObject(a) : new XMLHttpRequest();
  };
  xi.prototype.wf = function () {
    var a = {};
    yi(this) && ((a[0] = !0), (a[1] = !0));
    return a;
  };
  var yi = function (a) {
    if (
      !a.Ti &&
      'undefined' == typeof XMLHttpRequest &&
      'undefined' != typeof ActiveXObject
    ) {
      for (
        var b = [
            'MSXML2.XMLHTTP.6.0',
            'MSXML2.XMLHTTP.3.0',
            'MSXML2.XMLHTTP',
            'Microsoft.XMLHTTP',
          ],
          c = 0;
        c < b.length;
        c++
      ) {
        var d = b[c];
        try {
          return new ActiveXObject(d), (a.Ti = d);
        } catch (e) {}
      }
      throw Error(
        'Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed',
      );
    }
    return a.Ti;
  };
  wi = new xi();
  var zi = function () {};
  v(zi, vi);
  zi.prototype.Zd = function () {
    var a = new XMLHttpRequest();
    if ('withCredentials' in a) return a;
    if ('undefined' != typeof XDomainRequest) return new Ai();
    throw Error('Unsupported browser');
  };
  zi.prototype.wf = function () {
    return {};
  };
  var Ai = function () {
    this.Ub = new XDomainRequest();
    this.readyState = 0;
    this.onreadystatechange = null;
    this.responseType = this.responseText = this.response = '';
    this.status = -1;
    this.responseXML = null;
    this.statusText = '';
    this.Ub.onload = u(this.Zk, this);
    this.Ub.onerror = u(this.Mi, this);
    this.Ub.onprogress = u(this.bl, this);
    this.Ub.ontimeout = u(this.kl, this);
  };
  k = Ai.prototype;
  k.open = function (a, b, c) {
    if (null != c && !c) throw Error('Only async requests are supported.');
    this.Ub.open(a, b);
  };
  k.send = function (a) {
    if (a)
      if ('string' == typeof a) this.Ub.send(a);
      else throw Error('Only string data is supported');
    else this.Ub.send();
  };
  k.abort = function () {
    this.Ub.abort();
  };
  k.setRequestHeader = function () {};
  k.getResponseHeader = function (a) {
    return 'content-type' == a.toLowerCase() ? this.Ub.contentType : '';
  };
  k.Zk = function () {
    this.status = 200;
    this.response = this.responseText = this.Ub.responseText;
    Bi(this, 4);
  };
  k.Mi = function () {
    this.status = 500;
    this.response = this.responseText = '';
    Bi(this, 4);
  };
  k.kl = function () {
    this.Mi();
  };
  k.bl = function () {
    this.status = 200;
    Bi(this, 1);
  };
  var Bi = function (a, b) {
    a.readyState = b;
    if (a.onreadystatechange) a.onreadystatechange();
  };
  Ai.prototype.getAllResponseHeaders = function () {
    return 'content-type: ' + this.Ub.contentType;
  };
  var Ci = function (a, b) {
    this.name = a;
    this.value = b;
  };
  Ci.prototype.toString = function () {
    return this.name;
  };
  var Di = new Ci('OFF', Infinity),
    Ei = new Ci('SEVERE', 1e3),
    Fi = new Ci('WARNING', 900),
    Gi = new Ci('CONFIG', 700),
    Hi = new Ci('FINE', 500),
    Ii = function () {
      this.Ye = 0;
      this.clear();
    },
    Ji;
  Ii.prototype.clear = function () {
    this.ei = Array(this.Ye);
    this.oi = -1;
    this.Yi = !1;
  };
  var Ki = function (a, b) {
    this.reset(a || Di, b, null, void 0, void 0);
  };
  Ki.prototype.reset = function () {};
  var Li = function (a) {
      this.level = null;
      this.ql = [];
      this.parent = (void 0 === a ? null : a) || null;
      this.children = [];
    },
    Mi = function (a) {
      if (a.level) return a.level;
      if (a.parent) return Mi(a.parent);
      Da('Root logger has no level set.');
      return Di;
    },
    Ni = function (a, b) {
      for (; a; )
        a.ql.forEach(function (c) {
          c(b);
        }),
          (a = a.parent);
    },
    Oi = function () {
      this.entries = {};
      var a = new Li();
      a.level = Gi;
      this.entries[''] = a;
    },
    Pi,
    Qi = function (a, b) {
      var c = a.entries[b];
      if (c) return c;
      c = Qi(a, b.slice(0, Math.max(b.lastIndexOf('.'), 0)));
      var d = new Li(c);
      a.entries[b] = d;
      c.children.push(d);
      return d;
    },
    Ri = function () {
      Pi || (Pi = new Oi());
      return Pi;
    },
    Si = function (a, b, c) {
      if (a && a && b && b.value >= (a ? Mi(Qi(Ri(), null)) : Di).value) {
        b = b || Di;
        a = Qi(Ri(), null);
        'function' === typeof c && (c = c());
        Ji || (Ji = new Ii());
        var d = Ji;
        if (0 < d.Ye) {
          var e = (d.oi + 1) % d.Ye;
          d.oi = e;
          d.Yi
            ? ((d = d.ei[e]), d.reset(b, c, null))
            : ((d.Yi = e == d.Ye - 1), (d = d.ei[e] = new Ki(b, c)));
        } else d = new Ki(b, c);
        Ni(a, d);
      }
    },
    Ti = function (a, b) {
      a && Si(a, Ei, b);
    },
    Ui = function (a, b) {
      a && Si(a, Hi, b);
    };
  var Vi = function (a) {
    this.Se = a.Fm || null;
    this.Ke = a.Vm || !1;
    this.md = this.Kc = void 0;
  };
  v(Vi, vi);
  Vi.prototype.Zd = function () {
    var a = new Wi(this.Se, this.Ke);
    this.Kc && a.Hh(this.Kc);
    this.md && a.Nj(this.md);
    return a;
  };
  Vi.prototype.wf = (function (a) {
    return function () {
      return a;
    };
  })({});
  Vi.prototype.Hh = function (a) {
    this.Kc = a;
  };
  Vi.prototype.Nj = function (a) {
    this.md = a;
  };
  var Wi = function (a, b) {
    si.call(this);
    this.Se = a;
    this.Ke = b;
    this.md = this.Kc = void 0;
    this.status = this.readyState = 0;
    this.responseType =
      this.responseText =
      this.response =
      this.statusText =
        '';
    this.onreadystatechange = this.responseXML = null;
    this.Ch = new Headers();
    this.Nd = null;
    this.kj = 'GET';
    this.mb = '';
    this.Wb = !1;
    this.Th = this.ae = this.hf = null;
  };
  v(Wi, si);
  Wi.prototype.open = function (a, b, c) {
    w(!!c, 'Only async requests are supported.');
    if (0 != this.readyState)
      throw (this.abort(), Error('Error reopening a connection'));
    this.kj = a;
    this.mb = b;
    this.readyState = 1;
    Xi(this);
  };
  Wi.prototype.send = function (a) {
    if (1 != this.readyState)
      throw (this.abort(), Error('need to call open() first. '));
    this.Wb = !0;
    var b = {
      headers: this.Ch,
      method: this.kj,
      credentials: this.Kc,
      cache: this.md,
    };
    a && (b.body = a);
    (this.Se || p)
      .fetch(new Request(this.mb, b))
      .then(this.jl.bind(this), this.mf.bind(this));
  };
  Wi.prototype.abort = function () {
    var a = this;
    this.response = this.responseText = '';
    this.Ch = new Headers();
    this.status = 0;
    this.ae &&
      this.ae.cancel('Request was aborted.').catch(function () {
        var b = a.Ga;
        b && Si(b, Fi, 'Fetch reader cancellation error.');
      });
    1 <= this.readyState &&
      this.Wb &&
      4 != this.readyState &&
      ((this.Wb = !1), Yi(this));
    this.readyState = 0;
  };
  Wi.prototype.jl = function (a) {
    if (
      this.Wb &&
      ((this.hf = a),
      this.Nd ||
        ((this.status = this.hf.status),
        (this.statusText = this.hf.statusText),
        (this.Nd = a.headers),
        (this.readyState = 2),
        Xi(this)),
      this.Wb && ((this.readyState = 3), Xi(this), this.Wb))
    )
      if ('arraybuffer' === this.responseType)
        a.arrayBuffer().then(this.dl.bind(this), this.mf.bind(this));
      else if ('undefined' !== typeof p.ReadableStream && 'body' in a) {
        this.ae = a.body.getReader();
        if (this.Ke) {
          if (this.responseType)
            throw Error(
              'responseType must be empty for "streamBinaryChunks" mode responses.',
            );
          this.response = [];
        } else
          (this.response = this.responseText = ''),
            (this.Th = new TextDecoder());
        Zi(this);
      } else a.text().then(this.fl.bind(this), this.mf.bind(this));
  };
  var Zi = function (a) {
    a.ae.read().then(a.Xk.bind(a)).catch(a.mf.bind(a));
  };
  Wi.prototype.Xk = function (a) {
    if (this.Wb) {
      if (this.Ke && a.value) this.response.push(a.value);
      else if (!this.Ke) {
        var b = a.value ? a.value : new Uint8Array(0);
        if ((b = this.Th.decode(b, { stream: !a.done })))
          this.response = this.responseText += b;
      }
      a.done ? Yi(this) : Xi(this);
      3 == this.readyState && Zi(this);
    }
  };
  Wi.prototype.fl = function (a) {
    this.Wb && ((this.response = this.responseText = a), Yi(this));
  };
  Wi.prototype.dl = function (a) {
    this.Wb && ((this.response = a), Yi(this));
  };
  Wi.prototype.mf = function () {
    var a = this.Ga;
    a && Si(a, Fi, 'Failed to fetch url ' + this.mb);
    this.Wb && Yi(this);
  };
  var Yi = function (a) {
    a.readyState = 4;
    a.hf = null;
    a.ae = null;
    a.Th = null;
    Xi(a);
  };
  k = Wi.prototype;
  k.setRequestHeader = function (a, b) {
    this.Ch.append(a, b);
  };
  k.getResponseHeader = function (a) {
    return this.Nd
      ? this.Nd.get(a.toLowerCase()) || ''
      : ((a = this.Ga) &&
          Si(
            a,
            Fi,
            'Attempting to get response header but no headers have been received for url: ' +
              this.mb,
          ),
        '');
  };
  k.getAllResponseHeaders = function () {
    if (!this.Nd) {
      var a = this.Ga;
      a &&
        Si(
          a,
          Fi,
          'Attempting to get all response headers but no headers have been received for url: ' +
            this.mb,
        );
      return '';
    }
    a = [];
    for (var b = this.Nd.entries(), c = b.next(); !c.done; )
      (c = c.value), a.push(c[0] + ': ' + c[1]), (c = b.next());
    return a.join('\r\n');
  };
  k.Hh = function (a) {
    this.Kc = a;
  };
  k.Nj = function (a) {
    this.md = a;
  };
  var Xi = function (a) {
    a.onreadystatechange && a.onreadystatechange.call(a);
  };
  Object.defineProperty(Wi.prototype, 'withCredentials', {
    get: function () {
      return 'include' === this.Kc;
    },
    set: function (a) {
      this.Hh(a ? 'include' : 'same-origin');
    },
  });
  function $i() {} /*

 Copyright 2005, 2007 Bob Ippolito. All Rights Reserved.
 Copyright The Closure Library Authors.
 SPDX-License-Identifier: MIT
*/
  var aj = function (a, b) {
    this.Vf = [];
    this.nj = a;
    this.wi = b || null;
    this.ne = this.vd = !1;
    this.Wa = void 0;
    this.Oh = this.di = this.rg = !1;
    this.dg = 0;
    this.Ja = null;
    this.sg = 0;
  };
  v(aj, $i);
  aj.prototype.cancel = function (a) {
    if (this.vd) this.Wa instanceof aj && this.Wa.cancel();
    else {
      if (this.Ja) {
        var b = this.Ja;
        delete this.Ja;
        a ? b.cancel(a) : (b.sg--, 0 >= b.sg && b.cancel());
      }
      this.nj ? this.nj.call(this.wi, this) : (this.Oh = !0);
      this.vd || bj(this, new cj(this));
    }
  };
  aj.prototype.mi = function (a, b) {
    this.rg = !1;
    dj(this, a, b);
  };
  var dj = function (a, b, c) {
      a.vd = !0;
      a.Wa = c;
      a.ne = !b;
      ej(a);
    },
    gj = function (a) {
      if (a.vd) {
        if (!a.Oh) throw new fj(a);
        a.Oh = !1;
      }
    };
  aj.prototype.callback = function (a) {
    gj(this);
    hj(a);
    dj(this, !0, a);
  };
  var bj = function (a, b) {
      gj(a);
      hj(b);
      dj(a, !1, b);
    },
    hj = function (a) {
      w(
        !(a instanceof aj),
        'An execution sequence may not be initiated with a blocking Deferred.',
      );
    },
    jj = function (a, b) {
      ij(a, null, b);
    },
    ij = function (a, b, c, d) {
      w(!a.di, 'Blocking Deferreds can not be re-used');
      a.Vf.push([b, c, d]);
      a.vd && ej(a);
    };
  aj.prototype.then = function (a, b, c) {
    var d,
      e,
      f = new E(function (g, h) {
        e = g;
        d = h;
      });
    ij(
      this,
      e,
      function (g) {
        g instanceof cj ? f.cancel() : d(g);
        return kj;
      },
      this,
    );
    return f.then(a, b, c);
  };
  aj.prototype.$goog_Thenable = !0;
  var lj = function (a) {
      return La(a.Vf, function (b) {
        return 'function' === typeof b[1];
      });
    },
    kj = {},
    ej = function (a) {
      if (a.dg && a.vd && lj(a)) {
        var b = a.dg,
          c = mj[b];
        c && (p.clearTimeout(c.Ra), delete mj[b]);
        a.dg = 0;
      }
      a.Ja && (a.Ja.sg--, delete a.Ja);
      b = a.Wa;
      for (var d = (c = !1); a.Vf.length && !a.rg; ) {
        var e = a.Vf.shift(),
          f = e[0],
          g = e[1];
        e = e[2];
        if ((f = a.ne ? g : f))
          try {
            var h = f.call(e || a.wi, b);
            h === kj && (h = void 0);
            void 0 !== h &&
              ((a.ne = a.ne && (h == b || h instanceof Error)), (a.Wa = b = h));
            if (
              ef(b) ||
              ('function' === typeof p.Promise && b instanceof p.Promise)
            )
              (d = !0), (a.rg = !0);
          } catch (l) {
            (b = l), (a.ne = !0), lj(a) || (c = !0);
          }
      }
      a.Wa = b;
      d &&
        ((h = u(a.mi, a, !0)),
        (d = u(a.mi, a, !1)),
        b instanceof aj ? (ij(b, h, d), (b.di = !0)) : b.then(h, d));
      c && ((b = new nj(b)), (mj[b.Ra] = b), (a.dg = b.Ra));
    },
    fj = function () {
      ya.call(this);
    };
  v(fj, ya);
  fj.prototype.message = 'Deferred has already fired';
  fj.prototype.name = 'AlreadyCalledError';
  var cj = function () {
    ya.call(this);
  };
  v(cj, ya);
  cj.prototype.message = 'Deferred was canceled';
  cj.prototype.name = 'CanceledError';
  var nj = function (a) {
    this.Ra = p.setTimeout(u(this.wm, this), 0);
    this.Db = a;
  };
  nj.prototype.wm = function () {
    w(mj[this.Ra], 'Cannot throw an error that is not scheduled.');
    delete mj[this.Ra];
    throw this.Db;
  };
  var mj = {};
  var sj = function (a) {
      var b = {},
        c = b.document || document,
        d = fb(a).toString(),
        e = new tc(c).createElement('SCRIPT'),
        f = { Ij: e, Ne: void 0 },
        g = new aj(oj, f),
        h = null,
        l = null != b.timeout ? b.timeout : 5e3;
      0 < l &&
        ((h = window.setTimeout(function () {
          pj(e, !0);
          bj(g, new qj(1, 'Timeout reached for loading script ' + d));
        }, l)),
        (f.Ne = h));
      e.onload = e.onreadystatechange = function () {
        (e.readyState &&
          'loaded' != e.readyState &&
          'complete' != e.readyState) ||
          (pj(e, b.Sm || !1, h), g.callback(null));
      };
      e.onerror = function () {
        pj(e, !0, h);
        bj(g, new qj(0, 'Error while loading script ' + d));
      };
      f = b.attributes || {};
      Xa(f, { type: 'text/javascript', charset: 'UTF-8' });
      lc(e, f);
      gc(e, a);
      rj(c).appendChild(e);
      return g;
    },
    rj = function (a) {
      var b;
      return (b = (a || document).getElementsByTagName('HEAD')) &&
        0 !== b.length
        ? b[0]
        : a.documentElement;
    },
    oj = function () {
      if (this && this.Ij) {
        var a = this.Ij;
        a && 'SCRIPT' == a.tagName && pj(a, !0, this.Ne);
      }
    },
    pj = function (a, b, c) {
      null != c && p.clearTimeout(c);
      a.onload = function () {};
      a.onerror = function () {};
      a.onreadystatechange = function () {};
      b &&
        window.setTimeout(function () {
          rc(a);
        }, 0);
    },
    qj = function (a, b) {
      var c = 'Jsloader error (code #' + a + ')';
      b && (c += ': ' + b);
      ya.call(this, c);
      this.code = a;
    };
  v(qj, ya);
  var tj = function (a, b, c) {
      if ('function' === typeof a) c && (a = u(a, c));
      else if (a && 'function' == typeof a.handleEvent) a = u(a.handleEvent, a);
      else throw Error('Invalid listener argument');
      return 2147483647 < Number(b) ? -1 : p.setTimeout(a, b || 0);
    },
    uj = function (a) {
      var b = null;
      return new E(function (c, d) {
        b = tj(function () {
          c(void 0);
        }, a);
        -1 == b && d(Error('Failed to schedule timer.'));
      }).o(function (c) {
        p.clearTimeout(b);
        throw c;
      });
    };
  var vj = RegExp(
      '^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$',
    ),
    wj = function (a, b) {
      if (a) {
        a = a.split('&');
        for (var c = 0; c < a.length; c++) {
          var d = a[c].indexOf('='),
            e = null;
          if (0 <= d) {
            var f = a[c].substring(0, d);
            e = a[c].substring(d + 1);
          } else f = a[c];
          b(f, e ? decodeURIComponent(e.replace(/\+/g, ' ')) : '');
        }
      }
    };
  var xj = function (a) {
    si.call(this);
    this.headers = new Map();
    this.jg = a || null;
    this.qc = !1;
    this.ig = this.v = null;
    this.te = this.ej = this.Af = '';
    this.Sc = this.Rg = this.vf = this.Fg = !1;
    this.Qd = 0;
    this.Zf = null;
    this.Qf = '';
    this.eg = this.Tl = this.kk = !1;
    this.Uh = null;
  };
  v(xj, si);
  var yj = /^https?$/i,
    zj = ['POST', 'PUT'];
  xj.prototype.setTrustToken = function (a) {
    this.Uh = a;
  };
  xj.prototype.send = function (a, b, c, d) {
    if (this.v)
      throw Error(
        '[goog.net.XhrIo] Object is active with another request=' +
          this.Af +
          '; newUri=' +
          a,
      );
    b = b ? b.toUpperCase() : 'GET';
    this.Af = a;
    this.te = '';
    this.ej = b;
    this.Fg = !1;
    this.qc = !0;
    this.v = this.jg ? this.jg.Zd() : wi.Zd();
    this.ig = this.jg ? this.jg.getOptions() : wi.getOptions();
    this.v.onreadystatechange = u(this.wj, this);
    this.Tl &&
      'onprogress' in this.v &&
      ((this.v.onprogress = u(function (g) {
        this.vj(g, !0);
      }, this)),
      this.v.upload && (this.v.upload.onprogress = u(this.vj, this)));
    try {
      Ui(this.Ga, Aj(this, 'Opening Xhr')),
        (this.Rg = !0),
        this.v.open(b, String(a), !0),
        (this.Rg = !1);
    } catch (g) {
      Ui(this.Ga, Aj(this, 'Error opening Xhr: ' + g.message));
      this.Db(5, g);
      return;
    }
    a = c || '';
    c = new Map(this.headers);
    if (d)
      if (Object.getPrototypeOf(d) === Object.prototype)
        for (var e in d) c.set(e, d[e]);
      else if ('function' === typeof d.keys && 'function' === typeof d.get) {
        e = ha(d.keys());
        for (var f = e.next(); !f.done; f = e.next())
          (f = f.value), c.set(f, d.get(f));
      } else throw Error('Unknown input type for opt_headers: ' + String(d));
    d = Array.from(c.keys()).find(function (g) {
      return 'content-type' == g.toLowerCase();
    });
    e = p.FormData && a instanceof p.FormData;
    !Ma(zj, b) ||
      d ||
      e ||
      c.set('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
    b = ha(c);
    for (d = b.next(); !d.done; d = b.next())
      (c = ha(d.value)),
        (d = c.next().value),
        (c = c.next().value),
        this.v.setRequestHeader(d, c);
    this.Qf && (this.v.responseType = this.Qf);
    'withCredentials' in this.v &&
      this.v.withCredentials !== this.kk &&
      (this.v.withCredentials = this.kk);
    if ('setTrustToken' in this.v && this.Uh)
      try {
        this.v.setTrustToken(this.Uh);
      } catch (g) {
        Ui(this.Ga, Aj(this, 'Error SetTrustToken: ' + g.message));
      }
    try {
      Bj(this),
        0 < this.Qd &&
          ((this.eg = Cj(this.v)),
          Ui(
            this.Ga,
            Aj(
              this,
              'Will abort after ' +
                this.Qd +
                'ms if incomplete, xhr2 ' +
                this.eg,
            ),
          ),
          this.eg
            ? ((this.v.timeout = this.Qd),
              (this.v.ontimeout = u(this.Ne, this)))
            : (this.Zf = tj(this.Ne, this.Qd, this))),
        Ui(this.Ga, Aj(this, 'Sending request')),
        (this.vf = !0),
        this.v.send(a),
        (this.vf = !1);
    } catch (g) {
      Ui(this.Ga, Aj(this, 'Send error: ' + g.message)), this.Db(5, g);
    }
  };
  var Cj = function (a) {
    return (
      Mb && Yb() && 'number' === typeof a.timeout && void 0 !== a.ontimeout
    );
  };
  xj.prototype.Ne = function () {
    'undefined' != typeof qa &&
      this.v &&
      ((this.te = 'Timed out after ' + this.Qd + 'ms, aborting'),
      Ui(this.Ga, Aj(this, this.te)),
      this.dispatchEvent('timeout'),
      this.abort(8));
  };
  xj.prototype.Db = function (a, b) {
    this.qc = !1;
    this.v && ((this.Sc = !0), this.v.abort(), (this.Sc = !1));
    this.te = b;
    Dj(this);
    Ej(this);
  };
  var Dj = function (a) {
    a.Fg ||
      ((a.Fg = !0), a.dispatchEvent('complete'), a.dispatchEvent('error'));
  };
  xj.prototype.abort = function () {
    this.v &&
      this.qc &&
      (Ui(this.Ga, Aj(this, 'Aborting')),
      (this.qc = !1),
      (this.Sc = !0),
      this.v.abort(),
      (this.Sc = !1),
      this.dispatchEvent('complete'),
      this.dispatchEvent('abort'),
      Ej(this));
  };
  xj.prototype.ee = function () {
    this.v &&
      (this.qc &&
        ((this.qc = !1), (this.Sc = !0), this.v.abort(), (this.Sc = !1)),
      Ej(this, !0));
    xj.hd.ee.call(this);
  };
  xj.prototype.wj = function () {
    this.isDisposed() || (this.Rg || this.vf || this.Sc ? Fj(this) : this.Ml());
  };
  xj.prototype.Ml = function () {
    Fj(this);
  };
  var Fj = function (a) {
    if (a.qc && 'undefined' != typeof qa)
      if (a.ig[1] && 4 == Gj(a) && 2 == a.getStatus())
        Ui(a.Ga, Aj(a, 'Local request error detected and ignored'));
      else if (a.vf && 4 == Gj(a)) tj(a.wj, 0, a);
      else if ((a.dispatchEvent('readystatechange'), 4 == Gj(a))) {
        Ui(a.Ga, Aj(a, 'Request complete'));
        a.qc = !1;
        try {
          var b = a.getStatus();
          a: switch (b) {
            case 200:
            case 201:
            case 202:
            case 204:
            case 206:
            case 304:
            case 1223:
              var c = !0;
              break a;
            default:
              c = !1;
          }
          var d;
          if (!(d = c)) {
            var e;
            if ((e = 0 === b)) {
              var f = String(a.Af).match(vj)[1] || null;
              !f &&
                p.self &&
                p.self.location &&
                (f = p.self.location.protocol.slice(0, -1));
              e = !yj.test(f ? f.toLowerCase() : '');
            }
            d = e;
          }
          if (d) a.dispatchEvent('complete'), a.dispatchEvent('success');
          else {
            try {
              var g = 2 < Gj(a) ? a.v.statusText : '';
            } catch (h) {
              Ui(a.Ga, 'Can not get status: ' + h.message), (g = '');
            }
            a.te = g + ' [' + a.getStatus() + ']';
            Dj(a);
          }
        } finally {
          Ej(a);
        }
      }
  };
  xj.prototype.vj = function (a, b) {
    w(
      'progress' === a.type,
      'goog.net.EventType.PROGRESS is of the same type as raw XHR progress.',
    );
    this.dispatchEvent(Hj(a, 'progress'));
    this.dispatchEvent(Hj(a, b ? 'downloadprogress' : 'uploadprogress'));
  };
  var Hj = function (a, b) {
      return {
        type: b,
        lengthComputable: a.lengthComputable,
        loaded: a.loaded,
        total: a.total,
      };
    },
    Ej = function (a, b) {
      if (a.v) {
        Bj(a);
        var c = a.v,
          d = a.ig[0] ? function () {} : null;
        a.v = null;
        a.ig = null;
        b || a.dispatchEvent('ready');
        try {
          c.onreadystatechange = d;
        } catch (e) {
          Ti(
            a.Ga,
            'Problem encountered resetting onreadystatechange: ' + e.message,
          );
        }
      }
    },
    Bj = function (a) {
      a.v && a.eg && (a.v.ontimeout = null);
      a.Zf && (p.clearTimeout(a.Zf), (a.Zf = null));
    };
  xj.prototype.isActive = function () {
    return !!this.v;
  };
  var Gj = function (a) {
    return a.v ? a.v.readyState : 0;
  };
  xj.prototype.getStatus = function () {
    try {
      return 2 < Gj(this) ? this.v.status : -1;
    } catch (a) {
      return -1;
    }
  };
  xj.prototype.getResponse = function () {
    try {
      if (!this.v) return null;
      if ('response' in this.v) return this.v.response;
      switch (this.Qf) {
        case '':
        case 'text':
          return this.v.responseText;
        case 'arraybuffer':
          if ('mozResponseArrayBuffer' in this.v)
            return this.v.mozResponseArrayBuffer;
      }
      Ti(
        this.Ga,
        'Response type ' + this.Qf + ' is not supported on this browser',
      );
      return null;
    } catch (a) {
      return Ui(this.Ga, 'Can not get response: ' + a.message), null;
    }
  };
  xj.prototype.getResponseHeader = function (a) {
    if (this.v && 4 == Gj(this))
      return (a = this.v.getResponseHeader(a)), null === a ? void 0 : a;
  };
  xj.prototype.getAllResponseHeaders = function () {
    return this.v && 2 <= Gj(this) ? this.v.getAllResponseHeaders() || '' : '';
  };
  var Aj = function (a, b) {
    return b + ' [' + a.ej + ' ' + a.Af + ' ' + a.getStatus() + ']';
  };
  var Ij = function (a) {
      if (a.Rc && 'function' == typeof a.Rc) return a.Rc();
      if (
        ('undefined' !== typeof Map && a instanceof Map) ||
        ('undefined' !== typeof Set && a instanceof Set)
      )
        return Array.from(a.values());
      if ('string' === typeof a) return a.split('');
      if (sa(a)) {
        for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
        return b;
      }
      b = [];
      c = 0;
      for (d in a) b[c++] = a[d];
      return b;
    },
    Jj = function (a) {
      if (a.Kg && 'function' == typeof a.Kg) return a.Kg();
      if (!a.Rc || 'function' != typeof a.Rc) {
        if ('undefined' !== typeof Map && a instanceof Map)
          return Array.from(a.keys());
        if (!('undefined' !== typeof Set && a instanceof Set)) {
          if (sa(a) || 'string' === typeof a) {
            var b = [];
            a = a.length;
            for (var c = 0; c < a; c++) b.push(c);
            return b;
          }
          b = [];
          c = 0;
          for (var d in a) b[c++] = d;
          return b;
        }
      }
    },
    Kj = function (a, b, c) {
      if (a.forEach && 'function' == typeof a.forEach) a.forEach(b, c);
      else if (sa(a) || 'string' === typeof a)
        Array.prototype.forEach.call(a, b, c);
      else
        for (var d = Jj(a), e = Ij(a), f = e.length, g = 0; g < f; g++)
          b.call(c, e[g], d && d[g], a);
    };
  var Lj = function (a) {
    this.Ia = this.jd = this.Xa = '';
    this.Xb = null;
    this.Oc = this.Jf = '';
    this.Eb = this.zl = !1;
    if (a instanceof Lj) {
      this.Eb = a.Eb;
      Mj(this, a.Xa);
      var b = a.jd;
      Nj(this);
      this.jd = b;
      Oj(this, a.Ia);
      Pj(this, a.Xb);
      this.setPath(a.getPath());
      Qj(this, a.wb.clone());
      a = a.Oc;
      Nj(this);
      this.Oc = a;
    } else
      a && (b = String(a).match(vj))
        ? ((this.Eb = !1),
          Mj(this, b[1] || '', !0),
          (a = b[2] || ''),
          Nj(this),
          (this.jd = Rj(a)),
          Oj(this, b[3] || '', !0),
          Pj(this, b[4]),
          this.setPath(b[5] || '', !0),
          Qj(this, b[6] || '', !0),
          (a = b[7] || ''),
          Nj(this),
          (this.Oc = Rj(a)))
        : ((this.Eb = !1), (this.wb = new Sj(null, this.Eb)));
  };
  Lj.prototype.toString = function () {
    var a = [],
      b = this.Xa;
    b && a.push(Tj(b, Uj, !0), ':');
    var c = this.Ia;
    if (c || 'file' == b)
      a.push('//'),
        (b = this.jd) && a.push(Tj(b, Uj, !0), '@'),
        a.push(
          encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, '%$1'),
        ),
        (c = this.Xb),
        null != c && a.push(':', String(c));
    if ((c = this.getPath()))
      this.Ia && '/' != c.charAt(0) && a.push('/'),
        a.push(Tj(c, '/' == c.charAt(0) ? Vj : Wj, !0));
    (c = this.wb.toString()) && a.push('?', c);
    (c = this.Oc) && a.push('#', Tj(c, Xj));
    return a.join('');
  };
  Lj.prototype.resolve = function (a) {
    var b = this.clone(),
      c = !!a.Xa;
    c ? Mj(b, a.Xa) : (c = !!a.jd);
    if (c) {
      var d = a.jd;
      Nj(b);
      b.jd = d;
    } else c = !!a.Ia;
    c ? Oj(b, a.Ia) : (c = null != a.Xb);
    d = a.getPath();
    if (c) Pj(b, a.Xb);
    else if ((c = !!a.Jf)) {
      if ('/' != d.charAt(0))
        if (this.Ia && !this.Jf) d = '/' + d;
        else {
          var e = b.getPath().lastIndexOf('/');
          -1 != e && (d = b.getPath().slice(0, e + 1) + d);
        }
      e = d;
      if ('..' == e || '.' == e) d = '';
      else if (z(e, './') || z(e, '/.')) {
        d = 0 == e.lastIndexOf('/', 0);
        e = e.split('/');
        for (var f = [], g = 0; g < e.length; ) {
          var h = e[g++];
          '.' == h
            ? d && g == e.length && f.push('')
            : '..' == h
            ? ((1 < f.length || (1 == f.length && '' != f[0])) && f.pop(),
              d && g == e.length && f.push(''))
            : (f.push(h), (d = !0));
        }
        d = f.join('/');
      } else d = e;
    }
    c ? b.setPath(d) : (c = '' !== a.wb.toString());
    c ? Qj(b, a.wb.clone()) : (c = !!a.Oc);
    c && ((a = a.Oc), Nj(b), (b.Oc = a));
    return b;
  };
  Lj.prototype.clone = function () {
    return new Lj(this);
  };
  var Mj = function (a, b, c) {
      Nj(a);
      a.Xa = c ? Rj(b, !0) : b;
      a.Xa && (a.Xa = a.Xa.replace(/:$/, ''));
    },
    Oj = function (a, b, c) {
      Nj(a);
      a.Ia = c ? Rj(b, !0) : b;
    },
    Pj = function (a, b) {
      Nj(a);
      if (b) {
        b = Number(b);
        if (isNaN(b) || 0 > b) throw Error('Bad port number ' + b);
        a.Xb = b;
      } else a.Xb = null;
    };
  Lj.prototype.getPath = function () {
    return this.Jf;
  };
  Lj.prototype.setPath = function (a, b) {
    Nj(this);
    this.Jf = b ? Rj(a, !0) : a;
    return this;
  };
  var Qj = function (a, b, c) {
    Nj(a);
    b instanceof Sj
      ? ((a.wb = b), a.wb.Jh(a.Eb))
      : (c || (b = Tj(b, Yj)), (a.wb = new Sj(b, a.Eb)));
  };
  Lj.prototype.getQuery = function () {
    return this.wb.toString();
  };
  var L = function (a, b, c) {
      Nj(a);
      a.wb.set(b, c);
    },
    Zj = function (a, b) {
      return a.wb.get(b);
    };
  Lj.prototype.removeParameter = function (a) {
    Nj(this);
    this.wb.remove(a);
    return this;
  };
  var Nj = function (a) {
    if (a.zl) throw Error('Tried to modify a read-only Uri');
  };
  Lj.prototype.Jh = function (a) {
    this.Eb = a;
    this.wb && this.wb.Jh(a);
  };
  var M = function (a) {
      return a instanceof Lj ? a.clone() : new Lj(a);
    },
    ak = function (a, b, c, d) {
      var e = new Lj(null);
      a && Mj(e, a);
      b && Oj(e, b);
      c && Pj(e, c);
      d && e.setPath(d);
      return e;
    },
    Rj = function (a, b) {
      return a
        ? b
          ? decodeURI(a.replace(/%25/g, '%2525'))
          : decodeURIComponent(a)
        : '';
    },
    Tj = function (a, b, c) {
      return 'string' === typeof a
        ? ((a = encodeURI(a).replace(b, bk)),
          c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, '%$1')),
          a)
        : null;
    },
    bk = function (a) {
      a = a.charCodeAt(0);
      return '%' + ((a >> 4) & 15).toString(16) + (a & 15).toString(16);
    },
    Uj = /[#\/\?@]/g,
    Wj = /[#\?:]/g,
    Vj = /[#\?]/g,
    Yj = /[#\?@]/g,
    Xj = /#/g,
    Sj = function (a, b) {
      this.Pa = this.ua = null;
      this.rb = a || null;
      this.Eb = !!b;
    },
    ck = function (a) {
      a.ua ||
        ((a.ua = new Map()),
        (a.Pa = 0),
        a.rb &&
          wj(a.rb, function (b, c) {
            a.add(decodeURIComponent(b.replace(/\+/g, ' ')), c);
          }));
    },
    dk = function (a) {
      var b = Jj(a);
      if ('undefined' == typeof b) throw Error('Keys are undefined');
      var c = new Sj(null);
      a = Ij(a);
      for (var d = 0; d < b.length; d++) {
        var e = b[d],
          f = a[d];
        Array.isArray(f) ? c.setValues(e, f) : c.add(e, f);
      }
      return c;
    };
  Sj.prototype.add = function (a, b) {
    ck(this);
    this.rb = null;
    a = this.tb(a);
    var c = this.ua.get(a);
    c || this.ua.set(a, (c = []));
    c.push(b);
    this.Pa = Ea(this.Pa) + 1;
    return this;
  };
  Sj.prototype.remove = function (a) {
    ck(this);
    a = this.tb(a);
    return this.ua.has(a)
      ? ((this.rb = null),
        (this.Pa = Ea(this.Pa) - this.ua.get(a).length),
        this.ua.delete(a))
      : !1;
  };
  Sj.prototype.clear = function () {
    this.ua = this.rb = null;
    this.Pa = 0;
  };
  Sj.prototype.isEmpty = function () {
    ck(this);
    return 0 == this.Pa;
  };
  var ek = function (a, b) {
    ck(a);
    b = a.tb(b);
    return a.ua.has(b);
  };
  k = Sj.prototype;
  k.forEach = function (a, b) {
    ck(this);
    this.ua.forEach(function (c, d) {
      c.forEach(function (e) {
        a.call(b, e, d, this);
      }, this);
    }, this);
  };
  k.Kg = function () {
    ck(this);
    for (
      var a = Array.from(this.ua.values()),
        b = Array.from(this.ua.keys()),
        c = [],
        d = 0;
      d < b.length;
      d++
    )
      for (var e = a[d], f = 0; f < e.length; f++) c.push(b[d]);
    return c;
  };
  k.Rc = function (a) {
    ck(this);
    var b = [];
    if ('string' === typeof a)
      ek(this, a) && (b = b.concat(this.ua.get(this.tb(a))));
    else {
      a = Array.from(this.ua.values());
      for (var c = 0; c < a.length; c++) b = b.concat(a[c]);
    }
    return b;
  };
  k.set = function (a, b) {
    ck(this);
    this.rb = null;
    a = this.tb(a);
    ek(this, a) && (this.Pa = Ea(this.Pa) - this.ua.get(a).length);
    this.ua.set(a, [b]);
    this.Pa = Ea(this.Pa) + 1;
    return this;
  };
  k.get = function (a, b) {
    if (!a) return b;
    a = this.Rc(a);
    return 0 < a.length ? String(a[0]) : b;
  };
  k.setValues = function (a, b) {
    this.remove(a);
    0 < b.length &&
      ((this.rb = null),
      this.ua.set(this.tb(a), Qa(b)),
      (this.Pa = Ea(this.Pa) + b.length));
  };
  k.toString = function () {
    if (this.rb) return this.rb;
    if (!this.ua) return '';
    for (var a = [], b = Array.from(this.ua.keys()), c = 0; c < b.length; c++) {
      var d = b[c],
        e = encodeURIComponent(String(d));
      d = this.Rc(d);
      for (var f = 0; f < d.length; f++) {
        var g = e;
        '' !== d[f] && (g += '=' + encodeURIComponent(String(d[f])));
        a.push(g);
      }
    }
    return (this.rb = a.join('&'));
  };
  k.clone = function () {
    var a = new Sj();
    a.rb = this.rb;
    this.ua && ((a.ua = new Map(this.ua)), (a.Pa = this.Pa));
    return a;
  };
  k.tb = function (a) {
    a = String(a);
    this.Eb && (a = a.toLowerCase());
    return a;
  };
  k.Jh = function (a) {
    a &&
      !this.Eb &&
      (ck(this),
      (this.rb = null),
      this.ua.forEach(function (b, c) {
        var d = c.toLowerCase();
        c != d && (this.remove(c), this.setValues(d, b));
      }, this));
    this.Eb = a;
  };
  k.extend = function (a) {
    for (var b = 0; b < arguments.length; b++)
      Kj(
        arguments[b],
        function (c, d) {
          this.add(d, c);
        },
        this,
      );
  };
  var fk = {
      Im: {
        jf: 'https://staging-identitytoolkit.sandbox.googleapis.com/identitytoolkit/v3/relyingparty/',
        Sf: 'https://staging-securetoken.sandbox.googleapis.com/v1/token',
        rf: 'https://staging-identitytoolkit.sandbox.googleapis.com/v2/',
        id: 'b',
      },
      Om: {
        jf: 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/',
        Sf: 'https://securetoken.googleapis.com/v1/token',
        rf: 'https://identitytoolkit.googleapis.com/v2/',
        id: 'p',
      },
      Pm: {
        jf: 'https://staging-www.sandbox.googleapis.com/identitytoolkit/v3/relyingparty/',
        Sf: 'https://staging-securetoken.sandbox.googleapis.com/v1/token',
        rf: 'https://staging-identitytoolkit.sandbox.googleapis.com/v2/',
        id: 's',
      },
      Qm: {
        jf: 'https://www-googleapis-test.sandbox.google.com/identitytoolkit/v3/relyingparty/',
        Sf: 'https://test-securetoken.sandbox.googleapis.com/v1/token',
        rf: 'https://test-identitytoolkit.sandbox.googleapis.com/v2/',
        id: 't',
      },
    },
    gk = function (a) {
      for (var b in fk)
        if (fk[b].id === a)
          return (
            (a = fk[b]),
            {
              firebaseEndpoint: a.jf,
              secureTokenEndpoint: a.Sf,
              identityPlatformEndpoint: a.rf,
            }
          );
      return null;
    },
    hk;
  hk = gk('__EID__') ? '__EID__' : void 0;
  var angular,
    jk = function () {
      var a = ik();
      return (Mb && !!ac && 11 == ac) || /Edge\/\d+/.test(a);
    },
    kk = function () {
      return (
        (p.window && p.window.location.href) ||
        (self && self.location && self.location.href) ||
        ''
      );
    },
    lk = function (a, b) {
      b = b || p.window;
      var c = 'about:blank';
      a && (c = vb(yb(a) || Ab));
      b.location.href = c;
    },
    mk = function (a, b) {
      var c = [],
        d;
      for (d in a)
        d in b
          ? typeof a[d] != typeof b[d]
            ? c.push(d)
            : 'object' == typeof a[d] && null != a[d] && null != b[d]
            ? 0 < mk(a[d], b[d]).length && c.push(d)
            : a[d] !== b[d] && c.push(d)
          : c.push(d);
      for (d in b) d in a || c.push(d);
      return c;
    },
    ok = function () {
      var a = ik();
      a =
        'Chrome' != nk(a)
          ? null
          : (a = a.match(/\sChrome\/(\d+)/i)) && 2 == a.length
          ? parseInt(a[1], 10)
          : null;
      return a && 30 > a ? !1 : !Mb || !ac || 9 < ac;
    },
    pk = function (a) {
      a = (a || ik()).toLowerCase();
      return a.match(/android/) ||
        a.match(/webos/) ||
        a.match(/iphone|ipad|ipod/) ||
        a.match(/blackberry/) ||
        a.match(/windows phone/) ||
        a.match(/iemobile/)
        ? !0
        : !1;
    },
    qk = function (a) {
      a = a || p.window;
      try {
        a.close();
      } catch (b) {}
    },
    rk = function (a, b, c) {
      var d = Math.floor(1e9 * Math.random()).toString();
      b = b || 500;
      c = c || 600;
      var e = (window.screen.availHeight - c) / 2,
        f = (window.screen.availWidth - b) / 2;
      b = {
        width: b,
        height: c,
        top: 0 < e ? e : 0,
        left: 0 < f ? f : 0,
        location: !0,
        resizable: !0,
        statusbar: !0,
        toolbar: !1,
      };
      c = ik().toLowerCase();
      d && ((b.target = d), z(c, 'crios/') && (b.target = '_blank'));
      'Firefox' == nk(ik()) &&
        ((a = a || 'http://localhost'), (b.scrollbars = !0));
      e = a || '';
      b || (b = {});
      a = window;
      d =
        e instanceof ub
          ? e
          : yb('undefined' != typeof e.href ? e.href : String(e)) || Ab;
      f = void 0 !== self.crossOriginIsolated;
      c = 'strict-origin-when-cross-origin';
      window.Request && (c = new Request('/').referrerPolicy);
      var g = 'unsafe-url' === c;
      c = b.noreferrer;
      if (f && c) {
        if (g)
          throw Error(
            'Cannot use the noreferrer option on a page that sets a referrer-policy of `unsafe-url` in modern browsers!',
          );
        c = !1;
      }
      e = b.target || e.target;
      f = [];
      for (h in b)
        switch (h) {
          case 'width':
          case 'height':
          case 'top':
          case 'left':
            f.push(h + '=' + b[h]);
            break;
          case 'target':
          case 'noopener':
          case 'noreferrer':
            break;
          default:
            f.push(h + '=' + (b[h] ? 1 : 0));
        }
      var h = f.join(',');
      (Hb() || A('iPad') || A('iPod')) &&
      a.navigator &&
      a.navigator.standalone &&
      e &&
      '_self' != e
        ? ((h = oc(document, 'A')),
          ec(h, d),
          (h.target = e),
          c && (h.rel = 'noreferrer'),
          (d = document.createEvent('MouseEvent')),
          d.initMouseEvent('click', !0, !0, a, 1),
          h.dispatchEvent(d),
          (h = {}))
        : c
        ? ((h = hc('', a, e, h)),
          (d = vb(d)),
          h &&
            (Ob && z(d, ';') && (d = "'" + d.replace(/'/g, '%27') + "'"),
            (h.opener = null),
            '' === d && (d = "javascript:''"),
            (a = new bb($a, 'b/12014412, meta tag with sanitized URL')),
            rb.test(d) &&
              (-1 != d.indexOf('&') && (d = d.replace(lb, '&amp;')),
              -1 != d.indexOf('<') && (d = d.replace(mb, '&lt;')),
              -1 != d.indexOf('>') && (d = d.replace(nb, '&gt;')),
              -1 != d.indexOf('"') && (d = d.replace(ob, '&quot;')),
              -1 != d.indexOf("'") && (d = d.replace(pb, '&#39;')),
              -1 != d.indexOf('\x00') && (d = d.replace(qb, '&#0;'))),
            (a = dc(
              a,
              '<meta name="referrer" content="no-referrer"><meta http-equiv="refresh" content="0; url=' +
                d +
                '">',
            )),
            (d = h.document) && d.write && (d.write(Fb(a)), d.close())))
        : ((h = hc(d, a, e, h)) && b.noopener && (h.opener = null),
          h && b.noreferrer && (h.opener = null));
      if (h)
        try {
          h.focus();
        } catch (l) {}
      return h;
    },
    sk = function (a) {
      return new E(function (b) {
        var c = function () {
          uj(2e3).then(function () {
            if (!a || a.closed) b();
            else return c();
          });
        };
        return c();
      });
    },
    uk = function (a, b) {
      var c = M(b);
      b = c.Xa;
      c = c.Ia;
      for (var d = 0; d < a.length; d++) {
        var e = a[d];
        var f = c;
        var g = b;
        0 == e.indexOf('chrome-extension://')
          ? (f = M(e).Ia == f && 'chrome-extension' == g)
          : 'http' != g && 'https' != g
          ? (f = !1)
          : tk.test(e)
          ? (f = f == e)
          : ((e = e.split('.').join('\\.')),
            (f = new RegExp('^(.+\\.' + e + '|' + e + ')$', 'i').test(f)));
        if (f) return !0;
      }
      return !1;
    },
    tk = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
    vk = /^[^@]+@[^@]+$/,
    wk = function () {
      var a = null;
      return new E(function (b) {
        'complete' == p.document.readyState
          ? b()
          : ((a = function () {
              b();
            }),
            gi(window, 'load', a));
      }).o(function (b) {
        pi(window, 'load', a);
        throw b;
      });
    },
    yk = function () {
      return xk()
        ? wk().then(function () {
            return new E(function (a, b) {
              var c = p.document,
                d = setTimeout(function () {
                  b(Error('Cordova framework is not ready.'));
                }, 1e3);
              c.addEventListener(
                'deviceready',
                function () {
                  clearTimeout(d);
                  a();
                },
                !1,
              );
            });
          })
        : G(Error('Cordova must run in an Android or iOS file scheme.'));
    },
    xk = function () {
      var a = ik();
      return !(
        ('file:' !== zk() && 'ionic:' !== zk()) ||
        !a.toLowerCase().match(/iphone|ipad|ipod|android/)
      );
    },
    Ak = function () {
      var a = p.window;
      try {
        return !(!a || a == a.top);
      } catch (b) {
        return !1;
      }
    },
    Bk = function () {
      return (
        'undefined' !== typeof p.WorkerGlobalScope &&
        'function' === typeof p.importScripts
      );
    },
    Ck = function () {
      return firebase.INTERNAL.hasOwnProperty('reactNative')
        ? 'ReactNative'
        : firebase.INTERNAL.hasOwnProperty('node')
        ? 'Node'
        : Bk()
        ? 'Worker'
        : 'Browser';
    },
    Dk = function () {
      var a = Ck();
      return 'ReactNative' === a || 'Node' === a;
    },
    Ek = function () {
      for (var a = 50, b = []; 0 < a; )
        b.push(
          '1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.charAt(
            Math.floor(62 * Math.random()),
          ),
        ),
          a--;
      return b.join('');
    },
    nk = function (a) {
      var b = a.toLowerCase();
      if (z(b, 'opera/') || z(b, 'opr/') || z(b, 'opios/')) return 'Opera';
      if (z(b, 'iemobile')) return 'IEMobile';
      if (z(b, 'msie') || z(b, 'trident/')) return 'IE';
      if (z(b, 'edge/')) return 'Edge';
      if (z(b, 'firefox/')) return 'Firefox';
      if (z(b, 'silk/')) return 'Silk';
      if (z(b, 'blackberry')) return 'Blackberry';
      if (z(b, 'webos')) return 'Webos';
      if (
        !z(b, 'safari/') ||
        z(b, 'chrome/') ||
        z(b, 'crios/') ||
        z(b, 'android')
      )
        if ((!z(b, 'chrome/') && !z(b, 'crios/')) || z(b, 'edge/')) {
          if (z(b, 'android')) return 'Android';
          if (
            (a = a.match(RegExp('([a-zA-Z\\d\\.]+)/[a-zA-Z\\d\\.]*$'))) &&
            2 == a.length
          )
            return a[1];
        } else return 'Chrome';
      else return 'Safari';
      return 'Other';
    },
    Fk = { DEFAULT: 'FirebaseCore-web', Km: 'FirebaseUI-web', Nm: 'gcip-iap' },
    Gk = function (a, b, c) {
      c = c || [];
      var d = [],
        e = {},
        f;
      for (f in Fk) e[Fk[f]] = !0;
      for (f = 0; f < c.length; f++)
        'undefined' !== typeof e[c[f]] && (delete e[c[f]], d.push(c[f]));
      d.sort();
      c = d;
      c.length || (c = ['FirebaseCore-web']);
      d = Ck();
      'Browser' === d
        ? ((e = ik()), (d = nk(e)))
        : 'Worker' === d && ((e = ik()), (d = nk(e) + '-' + d));
      return d + '/' + a + '/' + b + '/' + c.join(',');
    },
    ik = function () {
      return (p.navigator && p.navigator.userAgent) || '';
    },
    N = function (a, b) {
      a = a.split('.');
      b = b || p;
      for (var c = 0; c < a.length && 'object' == typeof b && null != b; c++)
        b = b[a[c]];
      c != a.length && (b = void 0);
      return b;
    },
    Ik = function () {
      try {
        var a = p.localStorage,
          b = Hk();
        if (a)
          return a.setItem(b, '1'), a.removeItem(b), jk() ? !!p.indexedDB : !0;
      } catch (c) {
        return Bk() && !!p.indexedDB;
      }
      return !1;
    },
    Kk = function () {
      return (
        (Jk() || 'chrome-extension:' === zk() || xk()) && !Dk() && Ik() && !Bk()
      );
    },
    Jk = function () {
      return 'http:' === zk() || 'https:' === zk();
    },
    zk = function () {
      return (p.location && p.location.protocol) || null;
    },
    Lk = function (a) {
      a = a || ik();
      return pk(a) || 'Firefox' == nk(a) ? !1 : !0;
    },
    Mk = function (a) {
      return 'undefined' === typeof a ? null : JSON.stringify(a);
    },
    Nk = function (a) {
      var b = {},
        c;
      for (c in a)
        a.hasOwnProperty(c) &&
          null !== a[c] &&
          void 0 !== a[c] &&
          (b[c] = a[c]);
      return b;
    },
    Ok = function (a) {
      if (null !== a) return JSON.parse(a);
    },
    Hk = function (a) {
      return a ? a : '' + Math.floor(1e9 * Math.random()).toString();
    },
    Pk = function (a) {
      a = a || ik();
      return 'Safari' == nk(a) || a.toLowerCase().match(/iphone|ipad|ipod/)
        ? !1
        : !0;
    },
    Qk = function () {
      var a = p.___jsl;
      if (a && a.H)
        for (var b in a.H)
          if (
            ((a.H[b].r = a.H[b].r || []),
            (a.H[b].L = a.H[b].L || []),
            (a.H[b].r = a.H[b].L.concat()),
            a.CP)
          )
            for (var c = 0; c < a.CP.length; c++) a.CP[c] = null;
    },
    Rk = function (a, b) {
      if (a > b) throw Error('Short delay should be less than long delay!');
      this.Sj = a;
      this.El = b;
      a = ik();
      b = Ck();
      this.yl = pk(a) || 'ReactNative' === b;
    };
  Rk.prototype.get = function () {
    var a = p.navigator;
    return (
      a &&
      'boolean' === typeof a.onLine &&
      (Jk() ||
        'chrome-extension:' === zk() ||
        'undefined' !== typeof a.connection)
        ? a.onLine
        : 1
    )
      ? this.yl
        ? this.El
        : this.Sj
      : Math.min(5e3, this.Sj);
  };
  var Sk = function () {
      var a = p.document;
      return a && 'undefined' !== typeof a.visibilityState
        ? 'visible' == a.visibilityState
        : !0;
    },
    Tk = function () {
      var a = p.document,
        b = null;
      return Sk() || !a
        ? F()
        : new E(function (c) {
            b = function () {
              Sk() && (a.removeEventListener('visibilitychange', b, !1), c());
            };
            a.addEventListener('visibilitychange', b, !1);
          }).o(function (c) {
            a.removeEventListener('visibilitychange', b, !1);
            throw c;
          });
    },
    Uk = function (a) {
      'undefined' !== typeof console &&
        'function' === typeof console.warn &&
        console.warn(a);
    },
    Vk = function (a) {
      try {
        var b = new Date(parseInt(a, 10));
        if (!isNaN(b.getTime()) && !/[^0-9]/.test(a)) return b.toUTCString();
      } catch (c) {}
      return null;
    },
    Wk = function () {
      return !(!N('fireauth.oauthhelper', p) && !N('fireauth.iframe', p));
    },
    Xk = function () {
      var a = p.navigator;
      return (a && a.serviceWorker && a.serviceWorker.controller) || null;
    },
    Yk = function () {
      var a = p.navigator;
      return a && a.serviceWorker
        ? F()
            .then(function () {
              return a.serviceWorker.ready;
            })
            .then(function (b) {
              return b.active || null;
            })
            .o(function () {
              return null;
            })
        : F(null);
    };
  var Zk = {},
    $k = function (a) {
      Zk[a] || ((Zk[a] = !0), Uk(a));
    };
  var al;
  try {
    var bl = {};
    Object.defineProperty(bl, 'abcd', {
      configurable: !0,
      enumerable: !0,
      value: 1,
    });
    Object.defineProperty(bl, 'abcd', {
      configurable: !0,
      enumerable: !0,
      value: 2,
    });
    al = 2 == bl.abcd;
  } catch (a) {
    al = !1;
  }
  var O = function (a, b, c) {
      al
        ? Object.defineProperty(a, b, {
            configurable: !0,
            enumerable: !0,
            value: c,
          })
        : (a[b] = c);
    },
    cl = function (a, b) {
      if (b) for (var c in b) b.hasOwnProperty(c) && O(a, c, b[c]);
    },
    dl = function (a) {
      var b = {};
      cl(b, a);
      return b;
    },
    el = function (a, b) {
      if (!b || !b.length) return !0;
      if (!a) return !1;
      for (var c = 0; c < b.length; c++) {
        var d = a[b[c]];
        if (void 0 === d || null === d || '' === d) return !1;
      }
      return !0;
    },
    fl = function (a) {
      var b = a;
      if ('object' == typeof a && null != a) {
        b = 'length' in a ? [] : {};
        for (var c in a) O(b, c, fl(a[c]));
      }
      return b;
    };
  var gl =
      'oauth_consumer_key oauth_nonce oauth_signature oauth_signature_method oauth_timestamp oauth_token oauth_version'.split(
        ' ',
      ),
    hl = ['client_id', 'response_type', 'scope', 'redirect_uri', 'state'],
    il = {
      Jm: {
        re: 'locale',
        Hd: 700,
        Gd: 600,
        providerId: 'facebook.com',
        Nf: hl,
      },
      Lm: { re: null, Hd: 500, Gd: 750, providerId: 'github.com', Nf: hl },
      Mm: { re: 'hl', Hd: 515, Gd: 680, providerId: 'google.com', Nf: hl },
      Rm: { re: 'lang', Hd: 485, Gd: 705, providerId: 'twitter.com', Nf: gl },
      Hm: { re: 'locale', Hd: 640, Gd: 600, providerId: 'apple.com', Nf: [] },
    },
    jl = function (a) {
      for (var b in il) if (il[b].providerId == a) return il[b];
      return null;
    };
  var P = function (a, b, c) {
    this.code = 'auth/' + a;
    this.message = b || kl[a] || '';
    this.Kj = c || null;
  };
  v(P, Error);
  P.prototype.U = function () {
    var a = { code: this.code, message: this.message };
    this.Kj && (a.serverResponse = this.Kj);
    return a;
  };
  P.prototype.toJSON = function () {
    return this.U();
  };
  var ll = function (a) {
      var b = a && a.code;
      return b ? new P(b.substring(5), a.message, a.serverResponse) : null;
    },
    kl = {
      'admin-restricted-operation':
        'This operation is restricted to administrators only.',
      'argument-error': '',
      'app-not-authorized':
        "This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",
      'app-not-installed':
        'The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.',
      'bad-request': 'The requested action is invalid.',
      'captcha-check-failed':
        'The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.',
      'code-expired':
        'The SMS code has expired. Please re-send the verification code to try again.',
      'cordova-not-ready': 'Cordova framework is not ready.',
      'cors-unsupported': 'This browser is not supported.',
      'credential-already-in-use':
        'This credential is already associated with a different user account.',
      'custom-token-mismatch':
        'The custom token corresponds to a different audience.',
      'requires-recent-login':
        'This operation is sensitive and requires recent authentication. Log in again before retrying this request.',
      'dynamic-link-not-activated':
        'Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.',
      'email-change-needs-verification':
        'Multi-factor users must always have a verified email.',
      'email-already-in-use':
        'The email address is already in use by another account.',
      'expired-action-code': 'The action code has expired. ',
      'cancelled-popup-request':
        'This operation has been cancelled due to another conflicting popup being opened.',
      'internal-error': 'An internal error has occurred.',
      'invalid-app-credential':
        'The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.',
      'invalid-app-id':
        'The mobile app identifier is not registed for the current project.',
      'invalid-user-token':
        "This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",
      'invalid-auth-event': 'An internal error has occurred.',
      'invalid-verification-code':
        'The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.',
      'invalid-continue-uri':
        'The continue URL provided in the request is invalid.',
      'invalid-cordova-configuration':
        'The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.',
      'invalid-custom-token':
        'The custom token format is incorrect. Please check the documentation.',
      'invalid-dynamic-link-domain':
        'The provided dynamic link domain is not configured or authorized for the current project.',
      'invalid-email': 'The email address is badly formatted.',
      'invalid-api-key':
        'Your API key is invalid, please check you have copied it correctly.',
      'invalid-cert-hash': 'The SHA-1 certificate hash provided is invalid.',
      'invalid-credential':
        'The supplied auth credential is malformed or has expired.',
      'invalid-message-payload':
        'The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.',
      'invalid-multi-factor-session':
        'The request does not contain a valid proof of first factor successful sign-in.',
      'invalid-oauth-provider':
        'EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.',
      'invalid-oauth-client-id':
        'The OAuth client ID provided is either invalid or does not match the specified API key.',
      'unauthorized-domain':
        'This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.',
      'invalid-action-code':
        'The action code is invalid. This can happen if the code is malformed, expired, or has already been used.',
      'wrong-password':
        'The password is invalid or the user does not have a password.',
      'invalid-persistence-type':
        'The specified persistence type is invalid. It can only be local, session or none.',
      'invalid-phone-number':
        'The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].',
      'invalid-provider-id': 'The specified provider ID is invalid.',
      'invalid-recipient-email':
        'The email corresponding to this action failed to send as the provided recipient email address is invalid.',
      'invalid-sender':
        'The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.',
      'invalid-verification-id':
        'The verification ID used to create the phone auth credential is invalid.',
      'invalid-tenant-id': "The Auth instance's tenant ID is invalid.",
      'multi-factor-info-not-found':
        'The user does not have a second factor matching the identifier provided.',
      'multi-factor-auth-required':
        'Proof of ownership of a second factor is required to complete sign-in.',
      'missing-android-pkg-name':
        'An Android Package Name must be provided if the Android App is required to be installed.',
      'auth-domain-config-required':
        'Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.',
      'missing-app-credential':
        'The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.',
      'missing-verification-code':
        'The phone auth credential was created with an empty SMS verification code.',
      'missing-continue-uri': 'A continue URL must be provided in the request.',
      'missing-iframe-start': 'An internal error has occurred.',
      'missing-ios-bundle-id':
        'An iOS Bundle ID must be provided if an App Store ID is provided.',
      'missing-multi-factor-info': 'No second factor identifier is provided.',
      'missing-multi-factor-session':
        'The request is missing proof of first factor successful sign-in.',
      'missing-or-invalid-nonce':
        'The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.',
      'missing-phone-number':
        'To send verification codes, provide a phone number for the recipient.',
      'missing-verification-id':
        'The phone auth credential was created with an empty verification ID.',
      'app-deleted': 'This instance of FirebaseApp has been deleted.',
      'account-exists-with-different-credential':
        'An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.',
      'network-request-failed':
        'A network error (such as timeout, interrupted connection or unreachable host) has occurred.',
      'no-auth-event': 'An internal error has occurred.',
      'no-such-provider':
        'User was not linked to an account with the given provider.',
      'null-user':
        'A null user object was provided as the argument for an operation which requires a non-null user object.',
      'operation-not-allowed':
        'The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.',
      'operation-not-supported-in-this-environment':
        'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',
      'password-does-not-meet-requirements':
        'The provided password does not meet the configured requirements.',
      'popup-blocked':
        'Unable to establish a connection with the popup. It may have been blocked by the browser.',
      'popup-closed-by-user':
        'The popup has been closed by the user before finalizing the operation.',
      'provider-already-linked':
        'User can only be linked to one identity for the given provider.',
      'quota-exceeded':
        "The project's quota for this operation has been exceeded.",
      'redirect-cancelled-by-user':
        'The redirect operation has been cancelled by the user before finalizing.',
      'redirect-operation-pending':
        'A redirect sign-in operation is already pending.',
      'rejected-credential':
        'The request contains malformed or mismatching credentials.',
      'second-factor-already-in-use':
        'The second factor is already enrolled on this account.',
      'maximum-second-factor-count-exceeded':
        'The maximum allowed number of second factors on a user has been exceeded.',
      'tenant-id-mismatch':
        "The provided tenant ID does not match the Auth instance's tenant ID",
      timeout: 'The operation has timed out.',
      'user-token-expired':
        "The user's credential is no longer valid. The user must sign in again.",
      'too-many-requests':
        'We have blocked all requests from this device due to unusual activity. Try again later.',
      'unauthorized-continue-uri':
        'The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.',
      'unsupported-first-factor':
        'Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.',
      'unsupported-persistence-type':
        'The current environment does not support the specified persistence type.',
      'unsupported-tenant-operation':
        'This operation is not supported in a multi-tenant context.',
      'unverified-email': 'The operation requires a verified email.',
      'user-cancelled':
        'The user did not grant your application the permissions it requested.',
      'user-not-found':
        'There is no user record corresponding to this identifier. The user may have been deleted.',
      'user-disabled':
        'The user account has been disabled by an administrator.',
      'user-mismatch':
        'The supplied credentials do not correspond to the previously signed in user.',
      'user-signed-out': '',
      'weak-password': 'The password must be 6 characters long or more.',
      'web-storage-unsupported':
        'This browser is not supported or 3rd party cookies and data may be disabled.',
    };
  var ml = function (a, b, c, d, e, f, g) {
    this.Vh = a;
    this.La = b || null;
    this.Sd = c || null;
    this.He = d || null;
    this.oh = f || null;
    this.na = g || null;
    this.Db = e || null;
    if (this.Sd || this.Db) {
      if (this.Sd && this.Db) throw new P('invalid-auth-event');
      if (this.Sd && !this.He) throw new P('invalid-auth-event');
    } else throw new P('invalid-auth-event');
  };
  k = ml.prototype;
  k.getType = function () {
    return this.Vh;
  };
  k.getUid = function () {
    var a = [];
    a.push(this.Vh);
    this.La && a.push(this.La);
    this.He && a.push(this.He);
    this.na && a.push(this.na);
    return a.join('-');
  };
  k.ke = function () {
    return this.He;
  };
  k.getError = function () {
    return this.Db;
  };
  k.U = function () {
    return {
      type: this.Vh,
      eventId: this.La,
      urlResponse: this.Sd,
      sessionId: this.He,
      postBody: this.oh,
      tenantId: this.na,
      error: this.Db && this.Db.U(),
    };
  };
  var nl = function (a) {
    a = a || {};
    return a.type
      ? new ml(
          a.type,
          a.eventId,
          a.urlResponse,
          a.sessionId,
          a.error && ll(a.error),
          a.postBody,
          a.tenantId,
        )
      : null;
  };
  var ol = function (a) {
    var b = a && (a.phoneInfo ? 'phone' : null);
    if (b && a && a.mfaEnrollmentId) {
      O(this, 'uid', a.mfaEnrollmentId);
      O(this, 'displayName', a.displayName || null);
      var c = null;
      a.enrolledAt && (c = new Date(a.enrolledAt).toUTCString());
      O(this, 'enrollmentTime', c);
      O(this, 'factorId', b);
    } else
      throw new P(
        'internal-error',
        'Internal assert: invalid MultiFactorInfo object',
      );
  };
  ol.prototype.U = function () {
    return {
      uid: this.uid,
      displayName: this.displayName,
      factorId: this.factorId,
      enrollmentTime: this.enrollmentTime,
    };
  };
  var ql = function (a) {
      try {
        var b = new pl(a);
      } catch (c) {
        b = null;
      }
      return b;
    },
    pl = function (a) {
      ol.call(this, a);
      O(this, 'phoneNumber', a.phoneInfo);
    };
  v(pl, ol);
  pl.prototype.U = function () {
    var a = pl.hd.U.call(this);
    a.phoneNumber = this.phoneNumber;
    return a;
  };
  var rl = function (a) {
    var b = {},
      c = a.email,
      d = a.newEmail,
      e = a.requestType;
    a = ql(a.mfaInfo);
    if (
      !e ||
      ('EMAIL_SIGNIN' != e && 'VERIFY_AND_CHANGE_EMAIL' != e && !c) ||
      ('VERIFY_AND_CHANGE_EMAIL' == e && !d) ||
      ('REVERT_SECOND_FACTOR_ADDITION' == e && !a)
    )
      throw Error('Invalid checkActionCode response!');
    'VERIFY_AND_CHANGE_EMAIL' == e
      ? ((b.fromEmail = c || null),
        (b.previousEmail = c || null),
        (b.email = d))
      : ((b.fromEmail = d || null),
        (b.previousEmail = d || null),
        (b.email = c || null));
    b.multiFactorInfo = a || null;
    O(this, 'operation', e);
    O(this, 'data', fl(b));
  };
  var tl = function (a) {
      a = M(a);
      var b = Zj(a, 'apiKey') || null,
        c = Zj(a, 'oobCode') || null,
        d = Zj(a, 'mode') || null;
      d = d ? sl[d] || null : null;
      if (!b || !c || !d)
        throw new P(
          'argument-error',
          'apiKey, oobCodeand mode are required in a valid action code URL.',
        );
      cl(this, {
        apiKey: b,
        operation: d,
        code: c,
        continueUrl: Zj(a, 'continueUrl') || null,
        languageCode: Zj(a, 'languageCode') || null,
        tenantId: Zj(a, 'tenantId') || null,
      });
    },
    ul = function (a) {
      try {
        return new tl(a);
      } catch (b) {
        return null;
      }
    },
    sl = {
      recoverEmail: 'RECOVER_EMAIL',
      resetPassword: 'PASSWORD_RESET',
      revertSecondFactorAddition: 'REVERT_SECOND_FACTOR_ADDITION',
      signIn: 'EMAIL_SIGNIN',
      verifyAndChangeEmail: 'VERIFY_AND_CHANGE_EMAIL',
      verifyEmail: 'VERIFY_EMAIL',
    };
  var vl = function (a) {
    var b = M(a),
      c = Zj(b, 'link'),
      d = Zj(M(c), 'link');
    b = Zj(b, 'deep_link_id');
    return Zj(M(b), 'link') || b || d || c || a;
  };
  var wl = function (a) {
    var b = 'unauthorized-domain',
      c = void 0,
      d = M(a);
    a = d.Ia;
    d = d.Xa;
    'chrome-extension' == d
      ? (c = ic(
          'This chrome extension ID (chrome-extension://%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.',
          a,
        ))
      : 'http' == d || 'https' == d
      ? (c = ic(
          'This domain (%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.',
          a,
        ))
      : (b = 'operation-not-supported-in-this-environment');
    P.call(this, b, c);
  };
  n(wl, P);
  var yl = function (a) {
    var b = xl(a);
    if (!(b && b.sub && b.iss && b.aud && b.exp)) throw Error('Invalid JWT');
    this.Al = a;
    this.Ig = b.exp;
    this.Cl = b.sub;
    a = Date.now() / 1e3;
    this.rl = b.iat || (a > this.Ig ? this.Ig : a);
    this.Mc = b.email || null;
    this.wh =
      b.provider_id || (b.firebase && b.firebase.sign_in_provider) || null;
    this.na = (b.firebase && b.firebase.tenant) || null;
    this.tk = !!b.is_anonymous || 'anonymous' == this.wh;
  };
  yl.prototype.getEmail = function () {
    return this.Mc;
  };
  yl.prototype.isAnonymous = function () {
    return this.tk;
  };
  yl.prototype.toString = function () {
    return this.Al;
  };
  var zl = function (a) {
      try {
        return new yl(a);
      } catch (b) {
        return null;
      }
    },
    xl = function (a) {
      if (!a) return null;
      a = a.split('.');
      if (3 != a.length) return null;
      a = a[1];
      for (var b = (4 - (a.length % 4)) % 4, c = 0; c < b; c++) a += '.';
      try {
        var d = Hh(a);
        a = [];
        for (c = b = 0; b < d.length; ) {
          var e = d[b++];
          if (128 > e) a[c++] = String.fromCharCode(e);
          else if (191 < e && 224 > e) {
            var f = d[b++];
            a[c++] = String.fromCharCode(((e & 31) << 6) | (f & 63));
          } else if (239 < e && 365 > e) {
            f = d[b++];
            var g = d[b++],
              h = d[b++],
              l =
                (((e & 7) << 18) |
                  ((f & 63) << 12) |
                  ((g & 63) << 6) |
                  (h & 63)) -
                65536;
            a[c++] = String.fromCharCode(55296 + (l >> 10));
            a[c++] = String.fromCharCode(56320 + (l & 1023));
          } else
            (f = d[b++]),
              (g = d[b++]),
              (a[c++] = String.fromCharCode(
                ((e & 15) << 12) | ((f & 63) << 6) | (g & 63),
              ));
        }
        return JSON.parse(a.join(''));
      } catch (m) {}
      return null;
    };
  var Al = function (a) {
    var b = xl(a);
    if (!(b && b.exp && b.auth_time && b.iat))
      throw new P(
        'internal-error',
        'An internal error occurred. The token obtained by Firebase appears to be malformed. Please retry the operation.',
      );
    cl(this, {
      token: a,
      expirationTime: Vk(1e3 * b.exp),
      authTime: Vk(1e3 * b.auth_time),
      issuedAtTime: Vk(1e3 * b.iat),
      signInProvider:
        b.firebase && b.firebase.sign_in_provider
          ? b.firebase.sign_in_provider
          : null,
      signInSecondFactor:
        b.firebase && b.firebase.sign_in_second_factor
          ? b.firebase.sign_in_second_factor
          : null,
      claims: b,
    });
  };
  var Bl = function (a, b) {
    if (!a && !b)
      throw new P(
        'internal-error',
        'Internal assert: no raw session string available',
      );
    if (a && b)
      throw new P(
        'internal-error',
        'Internal assert: unable to determine the session type',
      );
    this.qf = a || null;
    this.lj = b || null;
    this.type = this.qf ? 'enroll' : 'signin';
  };
  Bl.prototype.je = function () {
    return this.qf ? F(this.qf) : F(this.lj);
  };
  Bl.prototype.U = function () {
    return 'enroll' == this.type
      ? { multiFactorSession: { idToken: this.qf } }
      : { multiFactorSession: { pendingCredential: this.lj } };
  };
  var Cl = function () {};
  Cl.prototype.Pc = function () {};
  Cl.prototype.Cd = function () {};
  Cl.prototype.ve = function () {};
  Cl.prototype.U = function () {};
  var Dl = function (a, b) {
      return a
        .then(function (c) {
          if (c.idToken) {
            var d = zl(c.idToken);
            if (!d || b != d.Cl) throw new P('user-mismatch');
            return c;
          }
          throw new P('user-mismatch');
        })
        .o(function (c) {
          throw c && c.code && 'auth/user-not-found' == c.code
            ? new P('user-mismatch')
            : c;
        });
    },
    El = function (a, b) {
      if (b) this.bc = b;
      else throw new P('internal-error', 'failed to construct a credential');
      O(this, 'providerId', a);
      O(this, 'signInMethod', a);
    };
  k = El.prototype;
  k.Pc = function (a) {
    return Fl(a, this.Uc());
  };
  k.Cd = function (a, b) {
    var c = this.Uc();
    c.idToken = b;
    return Gl(a, c);
  };
  k.ve = function (a, b) {
    var c = this.Uc();
    return Dl(Hl(a, c), b);
  };
  k.Uc = function () {
    return { pendingToken: this.bc, requestUri: 'http://localhost' };
  };
  k.U = function () {
    return {
      providerId: this.providerId,
      signInMethod: this.signInMethod,
      pendingToken: this.bc,
    };
  };
  var Il = function (a) {
      if (
        a &&
        a.providerId &&
        a.signInMethod &&
        0 == a.providerId.indexOf('saml.') &&
        a.pendingToken
      )
        try {
          return new El(a.providerId, a.pendingToken);
        } catch (b) {}
      return null;
    },
    Jl = function (a, b, c) {
      this.bc = null;
      if (b.idToken || b.accessToken)
        b.idToken && O(this, 'idToken', b.idToken),
          b.accessToken && O(this, 'accessToken', b.accessToken),
          b.nonce && !b.pendingToken && O(this, 'nonce', b.nonce),
          b.pendingToken && (this.bc = b.pendingToken);
      else if (b.oauthToken && b.oauthTokenSecret)
        O(this, 'accessToken', b.oauthToken),
          O(this, 'secret', b.oauthTokenSecret);
      else throw new P('internal-error', 'failed to construct a credential');
      O(this, 'providerId', a);
      O(this, 'signInMethod', c);
    };
  k = Jl.prototype;
  k.Pc = function (a) {
    return Fl(a, this.Uc());
  };
  k.Cd = function (a, b) {
    var c = this.Uc();
    c.idToken = b;
    return Gl(a, c);
  };
  k.ve = function (a, b) {
    var c = this.Uc();
    return Dl(Hl(a, c), b);
  };
  k.Uc = function () {
    var a = {};
    this.idToken && (a.id_token = this.idToken);
    this.accessToken && (a.access_token = this.accessToken);
    this.secret && (a.oauth_token_secret = this.secret);
    a.providerId = this.providerId;
    this.nonce && !this.bc && (a.nonce = this.nonce);
    a = { postBody: dk(a).toString(), requestUri: 'http://localhost' };
    this.bc && (delete a.postBody, (a.pendingToken = this.bc));
    return a;
  };
  k.U = function () {
    var a = { providerId: this.providerId, signInMethod: this.signInMethod };
    this.idToken && (a.oauthIdToken = this.idToken);
    this.accessToken && (a.oauthAccessToken = this.accessToken);
    this.secret && (a.oauthTokenSecret = this.secret);
    this.nonce && (a.nonce = this.nonce);
    this.bc && (a.pendingToken = this.bc);
    return a;
  };
  var Kl = function (a) {
      if (a && a.providerId && a.signInMethod) {
        var b = {
          idToken: a.oauthIdToken,
          accessToken: a.oauthTokenSecret ? null : a.oauthAccessToken,
          oauthTokenSecret: a.oauthTokenSecret,
          oauthToken: a.oauthTokenSecret && a.oauthAccessToken,
          nonce: a.nonce,
          pendingToken: a.pendingToken,
        };
        try {
          return new Jl(a.providerId, b, a.signInMethod);
        } catch (c) {}
      }
      return null;
    },
    Ll = function (a, b) {
      this.Wl = b || [];
      cl(this, { providerId: a, isOAuthProvider: !0 });
      this.ui = {};
      this.Xg = (jl(a) || {}).re || null;
      this.Cg = null;
    };
  Ll.prototype.setCustomParameters = function (a) {
    this.ui = Va(a);
    return this;
  };
  var Ml = function (a) {
    if ('string' !== typeof a || 0 != a.indexOf('saml.'))
      throw new P(
        'argument-error',
        'SAML provider IDs must be prefixed with "saml."',
      );
    Ll.call(this, a, []);
  };
  v(Ml, Ll);
  var Nl = function (a) {
    Ll.call(this, a, hl);
    this.Fh = [];
  };
  v(Nl, Ll);
  Nl.prototype.addScope = function (a) {
    Ma(this.Fh, a) || this.Fh.push(a);
    return this;
  };
  Nl.prototype.Ji = function () {
    return Qa(this.Fh);
  };
  Nl.prototype.credential = function (a, b) {
    a = t(a)
      ? {
          idToken: a.idToken || null,
          accessToken: a.accessToken || null,
          nonce: a.rawNonce || null,
        }
      : { idToken: a || null, accessToken: b || null };
    if (!a.idToken && !a.accessToken)
      throw new P(
        'argument-error',
        'credential failed: must provide the ID token and/or the access token.',
      );
    return new Jl(this.providerId, a, this.providerId);
  };
  var Ol = function () {
    Nl.call(this, 'facebook.com');
  };
  v(Ol, Nl);
  O(Ol, 'PROVIDER_ID', 'facebook.com');
  O(Ol, 'FACEBOOK_SIGN_IN_METHOD', 'facebook.com');
  var Pl = function (a) {
      if (!a)
        throw new P(
          'argument-error',
          'credential failed: expected 1 argument (the OAuth access token).',
        );
      var b = a;
      t(a) && (b = a.accessToken);
      return new Ol().credential({ accessToken: b });
    },
    Ql = function () {
      Nl.call(this, 'github.com');
    };
  v(Ql, Nl);
  O(Ql, 'PROVIDER_ID', 'github.com');
  O(Ql, 'GITHUB_SIGN_IN_METHOD', 'github.com');
  var Rl = function (a) {
      if (!a)
        throw new P(
          'argument-error',
          'credential failed: expected 1 argument (the OAuth access token).',
        );
      var b = a;
      t(a) && (b = a.accessToken);
      return new Ql().credential({ accessToken: b });
    },
    Sl = function () {
      Nl.call(this, 'google.com');
      this.addScope('profile');
    };
  v(Sl, Nl);
  O(Sl, 'PROVIDER_ID', 'google.com');
  O(Sl, 'GOOGLE_SIGN_IN_METHOD', 'google.com');
  var Tl = function (a, b) {
      var c = a;
      t(a) && ((c = a.idToken), (b = a.accessToken));
      return new Sl().credential({ idToken: c, accessToken: b });
    },
    Ul = function () {
      Ll.call(this, 'twitter.com', gl);
    };
  v(Ul, Ll);
  O(Ul, 'PROVIDER_ID', 'twitter.com');
  O(Ul, 'TWITTER_SIGN_IN_METHOD', 'twitter.com');
  var Vl = function (a, b) {
      var c = a;
      t(c) || (c = { oauthToken: a, oauthTokenSecret: b });
      if (!c.oauthToken || !c.oauthTokenSecret)
        throw new P(
          'argument-error',
          'credential failed: expected 2 arguments (the OAuth access token and secret).',
        );
      return new Jl('twitter.com', c, 'twitter.com');
    },
    Xl = function (a, b, c) {
      this.Mc = a;
      this.we = b;
      O(this, 'providerId', 'password');
      O(
        this,
        'signInMethod',
        c === Wl.EMAIL_LINK_SIGN_IN_METHOD
          ? Wl.EMAIL_LINK_SIGN_IN_METHOD
          : Wl.EMAIL_PASSWORD_SIGN_IN_METHOD,
      );
    };
  Xl.prototype.Pc = function (a) {
    return this.signInMethod == Wl.EMAIL_LINK_SIGN_IN_METHOD
      ? R(a, Yl, { email: this.Mc, oobCode: this.we })
      : R(a, Zl, { email: this.Mc, password: this.we });
  };
  Xl.prototype.Cd = function (a, b) {
    return this.signInMethod == Wl.EMAIL_LINK_SIGN_IN_METHOD
      ? R(a, $l, { idToken: b, email: this.Mc, oobCode: this.we })
      : R(a, am, { idToken: b, email: this.Mc, password: this.we });
  };
  Xl.prototype.ve = function (a, b) {
    return Dl(this.Pc(a), b);
  };
  Xl.prototype.U = function () {
    return {
      email: this.Mc,
      password: this.we,
      signInMethod: this.signInMethod,
    };
  };
  var bm = function (a) {
      return a && a.email && a.password
        ? new Xl(a.email, a.password, a.signInMethod)
        : null;
    },
    Wl = function () {
      cl(this, { providerId: 'password', isOAuthProvider: !1 });
    },
    dm = function (a, b) {
      b = cm(b);
      if (!b) throw new P('argument-error', 'Invalid email link!');
      return new Xl(a, b.code, Wl.EMAIL_LINK_SIGN_IN_METHOD);
    },
    cm = function (a) {
      a = vl(a);
      return (a = ul(a)) && 'EMAIL_SIGNIN' === a.operation ? a : null;
    };
  cl(Wl, { PROVIDER_ID: 'password' });
  cl(Wl, { EMAIL_LINK_SIGN_IN_METHOD: 'emailLink' });
  cl(Wl, { EMAIL_PASSWORD_SIGN_IN_METHOD: 'password' });
  var em = function (a) {
    if (!((a.verificationId && a.fg) || (a.Me && a.phoneNumber)))
      throw new P('internal-error');
    this.Aa = a;
    O(this, 'providerId', 'phone');
    this.providerId = 'phone';
    O(this, 'signInMethod', 'phone');
  };
  em.prototype.Pc = function (a) {
    return a.verifyPhoneNumber(fm(this));
  };
  em.prototype.Cd = function (a, b) {
    var c = fm(this);
    c.idToken = b;
    return R(a, gm, c);
  };
  em.prototype.ve = function (a, b) {
    var c = fm(this);
    c.operation = 'REAUTH';
    a = R(a, hm, c);
    return Dl(a, b);
  };
  em.prototype.U = function () {
    var a = { providerId: 'phone' };
    this.Aa.verificationId && (a.verificationId = this.Aa.verificationId);
    this.Aa.fg && (a.verificationCode = this.Aa.fg);
    this.Aa.Me && (a.temporaryProof = this.Aa.Me);
    this.Aa.phoneNumber && (a.phoneNumber = this.Aa.phoneNumber);
    return a;
  };
  var im = function (a) {
      if (
        a &&
        'phone' === a.providerId &&
        ((a.verificationId && a.verificationCode) ||
          (a.temporaryProof && a.phoneNumber))
      ) {
        var b = {};
        x(
          [
            'verificationId',
            'verificationCode',
            'temporaryProof',
            'phoneNumber',
          ],
          function (c) {
            a[c] && (b[c] = a[c]);
          },
        );
        return new em(b);
      }
      return null;
    },
    fm = function (a) {
      return a.Aa.Me && a.Aa.phoneNumber
        ? { temporaryProof: a.Aa.Me, phoneNumber: a.Aa.phoneNumber }
        : { sessionInfo: a.Aa.verificationId, code: a.Aa.fg };
    },
    jm = function (a) {
      try {
        this.Ve = a || firebase.auth();
      } catch (b) {
        throw new P(
          'argument-error',
          'Either an instance of firebase.auth.Auth must be passed as an argument to the firebase.auth.PhoneAuthProvider constructor, or the default firebase App instance must be initialized via firebase.initializeApp().',
        );
      }
      cl(this, { providerId: 'phone', isOAuthProvider: !1 });
    };
  jm.prototype.verifyPhoneNumber = function (a, b) {
    var c = this.Ve.u;
    return F(b.verify()).then(function (d) {
      if ('string' !== typeof d)
        throw new P(
          'argument-error',
          'An implementation of firebase.auth.ApplicationVerifier.prototype.verify() must return a firebase.Promise that resolves with a string.',
        );
      switch (b.type) {
        case 'recaptcha':
          var e = t(a) ? a.session : null,
            f = t(a) ? a.phoneNumber : a;
          return (
            e && 'enroll' == e.type
              ? e.je().then(function (g) {
                  return km(c, {
                    idToken: g,
                    phoneEnrollmentInfo: { phoneNumber: f, recaptchaToken: d },
                  });
                })
              : e && 'signin' == e.type
              ? e.je().then(function (g) {
                  return lm(c, {
                    mfaPendingCredential: g,
                    mfaEnrollmentId:
                      (a.multiFactorHint && a.multiFactorHint.uid) ||
                      a.multiFactorUid,
                    phoneSignInInfo: { recaptchaToken: d },
                  });
                })
              : mm(c, { phoneNumber: f, recaptchaToken: d })
          ).then(
            function (g) {
              'function' === typeof b.reset && b.reset();
              return g;
            },
            function (g) {
              'function' === typeof b.reset && b.reset();
              throw g;
            },
          );
        default:
          throw new P(
            'argument-error',
            'Only firebase.auth.ApplicationVerifiers with type="recaptcha" are currently supported.',
          );
      }
    });
  };
  var nm = function (a, b) {
    if (!a) throw new P('missing-verification-id');
    if (!b) throw new P('missing-verification-code');
    return new em({ verificationId: a, fg: b });
  };
  cl(jm, { PROVIDER_ID: 'phone' });
  cl(jm, { PHONE_SIGN_IN_METHOD: 'phone' });
  var om = function (a) {
      if (a.temporaryProof && a.phoneNumber)
        return new em({ Me: a.temporaryProof, phoneNumber: a.phoneNumber });
      var b = a && a.providerId;
      if (!b || 'password' === b) return null;
      var c = a && a.oauthAccessToken,
        d = a && a.oauthTokenSecret,
        e = a && a.nonce,
        f = a && a.oauthIdToken,
        g = a && a.pendingToken;
      try {
        switch (b) {
          case 'google.com':
            return Tl(f, c);
          case 'facebook.com':
            return Pl(c);
          case 'github.com':
            return Rl(c);
          case 'twitter.com':
            return Vl(c, d);
          default:
            return c || d || f || g
              ? g
                ? 0 == b.indexOf('saml.')
                  ? new El(b, g)
                  : new Jl(
                      b,
                      {
                        pendingToken: g,
                        idToken: a.oauthIdToken,
                        accessToken: a.oauthAccessToken,
                      },
                      b,
                    )
                : new Nl(b).credential({
                    idToken: f,
                    accessToken: c,
                    rawNonce: e,
                  })
              : null;
        }
      } catch (h) {
        return null;
      }
    },
    pm = function (a) {
      if (!a.isOAuthProvider) throw new P('invalid-oauth-provider');
    };
  var qm = function (a, b, c) {
    P.call(this, a, c);
    a = b || {};
    a.email && O(this, 'email', a.email);
    a.phoneNumber && O(this, 'phoneNumber', a.phoneNumber);
    a.credential && O(this, 'credential', a.credential);
    a.tenantId && O(this, 'tenantId', a.tenantId);
  };
  n(qm, P);
  qm.prototype.U = function () {
    var a = { code: this.code, message: this.message };
    this.email && (a.email = this.email);
    this.phoneNumber && (a.phoneNumber = this.phoneNumber);
    this.tenantId && (a.tenantId = this.tenantId);
    var b = this.credential && this.credential.U();
    b && Xa(a, b);
    return a;
  };
  qm.prototype.toJSON = function () {
    return this.U();
  };
  var rm = function (a) {
    if (a.code) {
      var b = a.code || '';
      0 == b.indexOf('auth/') && (b = b.substring(5));
      var c = { credential: om(a), tenantId: a.tenantId };
      if (a.email) c.email = a.email;
      else if (a.phoneNumber) c.phoneNumber = a.phoneNumber;
      else if (!c.credential) return new P(b, a.message || void 0);
      return new qm(b, c, a.message);
    }
    return null;
  };
  var sm = function (a) {
    this.Gm = a;
  };
  n(sm, vi);
  sm.prototype.Zd = function () {
    return new this.Gm();
  };
  sm.prototype.wf = function () {
    return {};
  };
  var xm = function (a, b, c) {
      this.ka = a;
      b = b || {};
      this.Jj =
        b.secureTokenEndpoint || 'https://securetoken.googleapis.com/v1/token';
      this.nm = b.secureTokenTimeout || tm;
      this.Tf = Va(b.secureTokenHeaders || um);
      this.Di =
        b.firebaseEndpoint ||
        'https://www.googleapis.com/identitytoolkit/v3/relyingparty/';
      this.Si =
        b.identityPlatformEndpoint ||
        'https://identitytoolkit.googleapis.com/v2/';
      this.Pk = b.firebaseTimeout || vm;
      this.ud = Va(b.firebaseHeaders || wm);
      c &&
        ((this.ud['X-Client-Version'] = c), (this.Tf['X-Client-Version'] = c));
      a = 'Node' == Ck();
      a =
        p.XMLHttpRequest ||
        (a && firebase.INTERNAL.node && firebase.INTERNAL.node.XMLHttpRequest);
      if (!a && !Bk())
        throw new P(
          'internal-error',
          'The XMLHttpRequest compatibility library was not found.',
        );
      this.Rf = void 0;
      Bk()
        ? (this.Rf = new Vi({ Fm: self }))
        : Dk()
        ? (this.Rf = new sm(a))
        : (this.Rf = new zi());
      this.na = null;
    },
    ym,
    zm = function (a, b) {
      b ? (a.ud['X-Firebase-Locale'] = b) : delete a.ud['X-Firebase-Locale'];
    },
    Bm = function (a, b) {
      b &&
        ((a.Jj = Am('https://securetoken.googleapis.com/v1/token', b)),
        (a.Di = Am(
          'https://www.googleapis.com/identitytoolkit/v3/relyingparty/',
          b,
        )),
        (a.Si = Am('https://identitytoolkit.googleapis.com/v2/', b)));
    },
    Am = function (a, b) {
      a = M(a);
      b = M(b.url);
      a.setPath(a.Ia + a.getPath());
      Mj(a, b.Xa);
      Oj(a, b.Ia);
      Pj(a, b.Xb);
      return a.toString();
    },
    Cm = function (a, b) {
      b
        ? ((a.ud['X-Client-Version'] = b), (a.Tf['X-Client-Version'] = b))
        : (delete a.ud['X-Client-Version'], delete a.Tf['X-Client-Version']);
    },
    Em = function (a, b, c, d, e, f, g) {
      ok() || Bk()
        ? (a = u(a.rm, a))
        : (ym ||
            (ym = new E(function (h, l) {
              Dm(h, l);
            })),
          (a = u(a.om, a)));
      a(b, c, d, e, f, g);
    };
  xm.prototype.rm = function (a, b, c, d, e, f) {
    if (
      Bk() &&
      ('undefined' === typeof p.fetch ||
        'undefined' === typeof p.Headers ||
        'undefined' === typeof p.Request)
    )
      throw new P(
        'operation-not-supported-in-this-environment',
        'fetch, Headers and Request native APIs or equivalent Polyfills must be available to support HTTP requests from a Worker environment.',
      );
    var g = new xj(this.Rf);
    if (f) {
      g.Qd = Math.max(0, f);
      var h = setTimeout(function () {
        g.dispatchEvent('timeout');
      }, f);
    }
    g.listen('complete', function () {
      h && clearTimeout(h);
      var l = null;
      try {
        var m = JSON,
          q = m.parse;
        try {
          var y = this.v ? this.v.responseText : '';
        } catch (B) {
          Ui(this.Ga, 'Can not get responseText: ' + B.message), (y = '');
        }
        l = q.call(m, y) || null;
      } catch (B) {
        l = null;
      }
      b && b(l);
    });
    oi(g, 'ready', function () {
      h && clearTimeout(h);
      this.Lc();
    });
    oi(g, 'timeout', function () {
      h && clearTimeout(h);
      this.Lc();
      b && b(null);
    });
    g.send(a, c, d, e);
  };
  var Dm = function (a, b) {
    if (((window.gapi || {}).client || {}).request) a();
    else {
      p[Fm] = function () {
        ((window.gapi || {}).client || {}).request
          ? a()
          : b(Error('CORS_UNSUPPORTED'));
      };
      var c = jb(Gm, { onload: Fm });
      jj(sj(c), function () {
        b(Error('CORS_UNSUPPORTED'));
      });
    }
  };
  xm.prototype.om = function (a, b, c, d, e) {
    var f = this;
    ym.then(function () {
      window.gapi.client.setApiKey(f.ka);
      var g = window.gapi.auth.getToken();
      window.gapi.auth.setToken(null);
      window.gapi.client.request({
        path: a,
        method: c,
        body: d,
        headers: e,
        authType: 'none',
        callback: function (h) {
          window.gapi.auth.setToken(g);
          b && b(h);
        },
      });
    }).o(function (g) {
      b && b({ error: { message: (g && g.message) || 'CORS_UNSUPPORTED' } });
    });
  };
  var Im = function (a, b) {
      return new E(function (c, d) {
        ('refresh_token' == b.grant_type && b.refresh_token) ||
        ('authorization_code' == b.grant_type && b.code)
          ? Em(
              a,
              a.Jj + '?key=' + encodeURIComponent(a.ka),
              function (e) {
                e
                  ? e.error
                    ? d(Hm(e))
                    : e.access_token && e.refresh_token
                    ? c(e)
                    : d(new P('internal-error'))
                  : d(new P('network-request-failed'));
              },
              'POST',
              dk(b).toString(),
              a.Tf,
              a.nm.get(),
            )
          : d(new P('internal-error'));
      });
    },
    Jm = function (a, b, c, d, e, f, g) {
      var h = M(b + c);
      L(h, 'key', a.ka);
      g && L(h, 'cb', Date.now().toString());
      var l = 'GET' == d;
      if (l) for (var m in e) e.hasOwnProperty(m) && L(h, m, e[m]);
      return new E(function (q, y) {
        Em(
          a,
          h.toString(),
          function (B) {
            B
              ? B.error
                ? y(Hm(B, f || {}))
                : q(B)
              : y(new P('network-request-failed'));
          },
          d,
          l ? void 0 : JSON.stringify(Nk(e)),
          a.ud,
          a.Pk.get(),
        );
      });
    },
    Km = function (a) {
      a = a.email;
      if ('string' !== typeof a || !vk.test(a)) throw new P('invalid-email');
    },
    Lm = function (a) {
      'email' in a && Km(a);
    },
    Nm = function (a, b) {
      return R(a, Mm, {
        identifier: b,
        continueUri: Jk() ? kk() : 'http://localhost',
      }).then(function (c) {
        return c.signinMethods || [];
      });
    },
    Pm = function (a) {
      return R(a, Om, {}).then(function (b) {
        return b.authorizedDomains || [];
      });
    },
    Qm = function (a) {
      if (!a.idToken) {
        if (a.mfaPendingCredential)
          throw new P('multi-factor-auth-required', null, Va(a));
        throw new P('internal-error');
      }
    },
    Rm = function (a) {
      if (a.phoneNumber || a.temporaryProof) {
        if (!a.phoneNumber || !a.temporaryProof) throw new P('internal-error');
      } else {
        if (!a.sessionInfo) throw new P('missing-verification-id');
        if (!a.code) throw new P('missing-verification-code');
      }
    };
  k = xm.prototype;
  k.signInAnonymously = function () {
    return R(this, Sm, {});
  };
  k.updateEmail = function (a, b) {
    return R(this, Tm, { idToken: a, email: b });
  };
  k.updatePassword = function (a, b) {
    return R(this, am, { idToken: a, password: b });
  };
  k.updateProfile = function (a, b) {
    var c = { idToken: a },
      d = [];
    Sa(Um, function (e, f) {
      var g = b[f];
      null === g ? d.push(e) : f in b && (c[f] = g);
    });
    d.length && (c.deleteAttribute = d);
    return R(this, Tm, c);
  };
  k.sendPasswordResetEmail = function (a, b) {
    a = { requestType: 'PASSWORD_RESET', email: a };
    Xa(a, b);
    return R(this, Vm, a);
  };
  k.sendSignInLinkToEmail = function (a, b) {
    a = { requestType: 'EMAIL_SIGNIN', email: a };
    Xa(a, b);
    return R(this, Wm, a);
  };
  k.sendEmailVerification = function (a, b) {
    a = { requestType: 'VERIFY_EMAIL', idToken: a };
    Xa(a, b);
    return R(this, Xm, a);
  };
  k.verifyBeforeUpdateEmail = function (a, b, c) {
    a = { requestType: 'VERIFY_AND_CHANGE_EMAIL', idToken: a, newEmail: b };
    Xa(a, c);
    return R(this, Ym, a);
  };
  var mm = function (a, b) {
    return R(a, Zm, b);
  };
  xm.prototype.verifyPhoneNumber = function (a) {
    return R(this, $m, a);
  };
  var km = function (a, b) {
      return R(a, an, b).then(function (c) {
        return c.phoneSessionInfo.sessionInfo;
      });
    },
    bn = function (a) {
      if (!a.phoneVerificationInfo) throw new P('internal-error');
      if (!a.phoneVerificationInfo.sessionInfo)
        throw new P('missing-verification-id');
      if (!a.phoneVerificationInfo.code)
        throw new P('missing-verification-code');
    },
    lm = function (a, b) {
      return R(a, cn, b).then(function (c) {
        return c.phoneResponseInfo.sessionInfo;
      });
    },
    en = function (a, b, c) {
      return R(a, dn, { idToken: b, deleteProvider: c });
    },
    fn = function (a) {
      if (!a.requestUri || (!a.sessionId && !a.postBody && !a.pendingToken))
        throw new P('internal-error');
    },
    gn = function (a, b) {
      b.oauthIdToken &&
        b.providerId &&
        0 == b.providerId.indexOf('oidc.') &&
        !b.pendingToken &&
        (a.sessionId
          ? (b.nonce = a.sessionId)
          : a.postBody &&
            ((a = new Sj(a.postBody)),
            ek(a, 'nonce') && (b.nonce = a.get('nonce'))));
      return b;
    },
    jn = function (a) {
      var b = null;
      a.needConfirmation
        ? ((a.code = 'account-exists-with-different-credential'), (b = rm(a)))
        : 'FEDERATED_USER_ID_ALREADY_LINKED' == a.errorMessage
        ? ((a.code = 'credential-already-in-use'), (b = rm(a)))
        : 'EMAIL_EXISTS' == a.errorMessage
        ? ((a.code = 'email-already-in-use'), (b = rm(a)))
        : a.errorMessage && (b = hn(a.errorMessage));
      if (b) throw b;
      Qm(a);
    },
    Fl = function (a, b) {
      b.returnIdpCredential = !0;
      return R(a, kn, b);
    },
    Gl = function (a, b) {
      b.returnIdpCredential = !0;
      return R(a, ln, b);
    },
    Hl = function (a, b) {
      b.returnIdpCredential = !0;
      b.autoCreate = !1;
      return R(a, mn, b);
    },
    nn = function (a) {
      if (!a.oobCode) throw new P('invalid-action-code');
    };
  xm.prototype.confirmPasswordReset = function (a, b) {
    return R(this, on, { oobCode: a, newPassword: b });
  };
  xm.prototype.checkActionCode = function (a) {
    return R(this, pn, { oobCode: a });
  };
  xm.prototype.applyActionCode = function (a) {
    return R(this, qn, { oobCode: a });
  };
  var R = function (a, b, c) {
      if (!el(c, b.Oa)) return G(new P('internal-error'));
      var d = !!b.Qe,
        e = b.httpMethod || 'POST',
        f;
      return F(c)
        .then(b.ta)
        .then(function () {
          b.Qb && (c.returnSecureToken = !0);
          b.va &&
            a.na &&
            'undefined' === typeof c.tenantId &&
            (c.tenantId = a.na);
          return d
            ? Jm(a, a.Si, b.endpoint, e, c, b.ri, b.vg || !1)
            : Jm(a, a.Di, b.endpoint, e, c, b.ri, b.vg || !1);
        })
        .then(function (g) {
          f = g;
          return b.Of ? b.Of(c, f) : f;
        })
        .then(b.Ca)
        .then(function () {
          if (!b.jc) return f;
          if (!(b.jc in f)) throw new P('internal-error');
          return f[b.jc];
        });
    },
    hn = function (a) {
      return Hm({ error: { errors: [{ message: a }], code: 400, message: a } });
    },
    Hm = function (a, b) {
      var c =
        ((a.error && a.error.errors && a.error.errors[0]) || {}).reason || '';
      var d = {
        keyInvalid: 'invalid-api-key',
        ipRefererBlocked: 'app-not-authorized',
      };
      if ((c = d[c] ? new P(d[c]) : null)) return c;
      c = (a.error && a.error.message) || '';
      d = {
        INVALID_CUSTOM_TOKEN: 'invalid-custom-token',
        CREDENTIAL_MISMATCH: 'custom-token-mismatch',
        MISSING_CUSTOM_TOKEN: 'internal-error',
        INVALID_IDENTIFIER: 'invalid-email',
        MISSING_CONTINUE_URI: 'internal-error',
        INVALID_EMAIL: 'invalid-email',
        INVALID_PASSWORD: 'wrong-password',
        USER_DISABLED: 'user-disabled',
        MISSING_PASSWORD: 'internal-error',
        EMAIL_EXISTS: 'email-already-in-use',
        PASSWORD_LOGIN_DISABLED: 'operation-not-allowed',
        INVALID_IDP_RESPONSE: 'invalid-credential',
        INVALID_PENDING_TOKEN: 'invalid-credential',
        FEDERATED_USER_ID_ALREADY_LINKED: 'credential-already-in-use',
        MISSING_OR_INVALID_NONCE: 'missing-or-invalid-nonce',
        INVALID_MESSAGE_PAYLOAD: 'invalid-message-payload',
        INVALID_RECIPIENT_EMAIL: 'invalid-recipient-email',
        INVALID_SENDER: 'invalid-sender',
        EMAIL_NOT_FOUND: 'user-not-found',
        RESET_PASSWORD_EXCEED_LIMIT: 'too-many-requests',
        EXPIRED_OOB_CODE: 'expired-action-code',
        INVALID_OOB_CODE: 'invalid-action-code',
        MISSING_OOB_CODE: 'internal-error',
        INVALID_PROVIDER_ID: 'invalid-provider-id',
        CREDENTIAL_TOO_OLD_LOGIN_AGAIN: 'requires-recent-login',
        INVALID_ID_TOKEN: 'invalid-user-token',
        TOKEN_EXPIRED: 'user-token-expired',
        USER_NOT_FOUND: 'user-token-expired',
        CORS_UNSUPPORTED: 'cors-unsupported',
        DYNAMIC_LINK_NOT_ACTIVATED: 'dynamic-link-not-activated',
        INVALID_APP_ID: 'invalid-app-id',
        TOO_MANY_ATTEMPTS_TRY_LATER: 'too-many-requests',
        WEAK_PASSWORD: 'weak-password',
        PASSWORD_DOES_NOT_MEET_REQUIREMENTS:
          'password-does-not-meet-requirements',
        OPERATION_NOT_ALLOWED: 'operation-not-allowed',
        USER_CANCELLED: 'user-cancelled',
        CAPTCHA_CHECK_FAILED: 'captcha-check-failed',
        INVALID_APP_CREDENTIAL: 'invalid-app-credential',
        INVALID_CODE: 'invalid-verification-code',
        INVALID_PHONE_NUMBER: 'invalid-phone-number',
        INVALID_SESSION_INFO: 'invalid-verification-id',
        INVALID_TEMPORARY_PROOF: 'invalid-credential',
        INVALID_TENANT_ID: 'invalid-tenant-id',
        MISSING_APP_CREDENTIAL: 'missing-app-credential',
        MISSING_CODE: 'missing-verification-code',
        MISSING_PHONE_NUMBER: 'missing-phone-number',
        MISSING_SESSION_INFO: 'missing-verification-id',
        QUOTA_EXCEEDED: 'quota-exceeded',
        SESSION_EXPIRED: 'code-expired',
        REJECTED_CREDENTIAL: 'rejected-credential',
        INVALID_CONTINUE_URI: 'invalid-continue-uri',
        MISSING_ANDROID_PACKAGE_NAME: 'missing-android-pkg-name',
        MISSING_IOS_BUNDLE_ID: 'missing-ios-bundle-id',
        UNAUTHORIZED_DOMAIN: 'unauthorized-continue-uri',
        INVALID_DYNAMIC_LINK_DOMAIN: 'invalid-dynamic-link-domain',
        INVALID_OAUTH_CLIENT_ID: 'invalid-oauth-client-id',
        INVALID_CERT_HASH: 'invalid-cert-hash',
        UNSUPPORTED_TENANT_OPERATION: 'unsupported-tenant-operation',
        TENANT_ID_MISMATCH: 'tenant-id-mismatch',
        ADMIN_ONLY_OPERATION: 'admin-restricted-operation',
        INVALID_MFA_PENDING_CREDENTIAL: 'invalid-multi-factor-session',
        MFA_ENROLLMENT_NOT_FOUND: 'multi-factor-info-not-found',
        MISSING_MFA_PENDING_CREDENTIAL: 'missing-multi-factor-session',
        MISSING_MFA_ENROLLMENT_ID: 'missing-multi-factor-info',
        EMAIL_CHANGE_NEEDS_VERIFICATION: 'email-change-needs-verification',
        SECOND_FACTOR_EXISTS: 'second-factor-already-in-use',
        SECOND_FACTOR_LIMIT_EXCEEDED: 'maximum-second-factor-count-exceeded',
        UNSUPPORTED_FIRST_FACTOR: 'unsupported-first-factor',
        UNVERIFIED_EMAIL: 'unverified-email',
      };
      b = b || {};
      Xa(d, b);
      b =
        (b = c.match(/^[^\s]+\s*:\s*([\s\S]*)$/)) && 1 < b.length
          ? b[1]
          : void 0;
      for (var e in d) if (0 === c.indexOf(e)) return new P(d[e], b);
      !b && a && (b = Mk(a));
      return new P('internal-error', b);
    },
    tm = new Rk(3e4, 6e4),
    um = { 'Content-Type': 'application/x-www-form-urlencoded' },
    vm = new Rk(3e4, 6e4),
    wm = { 'Content-Type': 'application/json' },
    Gm = new bb($a, 'https://apis.google.com/js/client.js?onload=%{onload}'),
    Fm = '__fcb' + Math.floor(1e6 * Math.random()).toString(),
    Um = { displayName: 'DISPLAY_NAME', photoUrl: 'PHOTO_URL' },
    qn = { endpoint: 'setAccountInfo', ta: nn, jc: 'email', va: !0 },
    pn = {
      endpoint: 'resetPassword',
      ta: nn,
      Ca: function (a) {
        var b = a.requestType;
        if (
          !b ||
          (!a.email && 'EMAIL_SIGNIN' != b && 'VERIFY_AND_CHANGE_EMAIL' != b)
        )
          throw new P('internal-error');
      },
      va: !0,
    },
    rn = {
      endpoint: 'signupNewUser',
      ta: function (a) {
        Km(a);
        if (!a.password) throw new P('weak-password');
      },
      Ca: Qm,
      Qb: !0,
      va: !0,
    },
    Mm = { endpoint: 'createAuthUri', va: !0 },
    sn = { endpoint: 'deleteAccount', Oa: ['idToken'] },
    dn = {
      endpoint: 'setAccountInfo',
      Oa: ['idToken', 'deleteProvider'],
      ta: function (a) {
        if (!Array.isArray(a.deleteProvider)) throw new P('internal-error');
      },
    },
    Yl = {
      endpoint: 'emailLinkSignin',
      Oa: ['email', 'oobCode'],
      ta: Km,
      Ca: Qm,
      Qb: !0,
      va: !0,
    },
    $l = {
      endpoint: 'emailLinkSignin',
      Oa: ['idToken', 'email', 'oobCode'],
      ta: Km,
      Ca: Qm,
      Qb: !0,
    },
    tn = {
      endpoint: 'accounts/mfaEnrollment:finalize',
      Oa: ['idToken', 'phoneVerificationInfo'],
      ta: bn,
      Ca: Qm,
      va: !0,
      Qe: !0,
    },
    un = {
      endpoint: 'accounts/mfaSignIn:finalize',
      Oa: ['mfaPendingCredential', 'phoneVerificationInfo'],
      ta: bn,
      Ca: Qm,
      va: !0,
      Qe: !0,
    },
    vn = { endpoint: 'getAccountInfo' },
    Wm = {
      endpoint: 'getOobConfirmationCode',
      Oa: ['requestType'],
      ta: function (a) {
        if ('EMAIL_SIGNIN' != a.requestType) throw new P('internal-error');
        Km(a);
      },
      jc: 'email',
      va: !0,
    },
    Xm = {
      endpoint: 'getOobConfirmationCode',
      Oa: ['idToken', 'requestType'],
      ta: function (a) {
        if ('VERIFY_EMAIL' != a.requestType) throw new P('internal-error');
      },
      jc: 'email',
      va: !0,
    },
    Ym = {
      endpoint: 'getOobConfirmationCode',
      Oa: ['idToken', 'newEmail', 'requestType'],
      ta: function (a) {
        if ('VERIFY_AND_CHANGE_EMAIL' != a.requestType)
          throw new P('internal-error');
      },
      jc: 'email',
      va: !0,
    },
    Vm = {
      endpoint: 'getOobConfirmationCode',
      Oa: ['requestType'],
      ta: function (a) {
        if ('PASSWORD_RESET' != a.requestType) throw new P('internal-error');
        Km(a);
      },
      jc: 'email',
      va: !0,
    },
    Om = { vg: !0, endpoint: 'getProjectConfig', httpMethod: 'GET' },
    wn = {
      vg: !0,
      endpoint: 'getRecaptchaParam',
      httpMethod: 'GET',
      Ca: function (a) {
        if (!a.recaptchaSiteKey) throw new P('internal-error');
      },
    },
    on = { endpoint: 'resetPassword', ta: nn, jc: 'email', va: !0 },
    Zm = {
      endpoint: 'sendVerificationCode',
      Oa: ['phoneNumber', 'recaptchaToken'],
      jc: 'sessionInfo',
      va: !0,
    },
    Tm = { endpoint: 'setAccountInfo', Oa: ['idToken'], ta: Lm, Qb: !0 },
    am = {
      endpoint: 'setAccountInfo',
      Oa: ['idToken'],
      ta: function (a) {
        Lm(a);
        if (!a.password) throw new P('weak-password');
      },
      Ca: Qm,
      Qb: !0,
    },
    Sm = { endpoint: 'signupNewUser', Ca: Qm, Qb: !0, va: !0 },
    an = {
      endpoint: 'accounts/mfaEnrollment:start',
      Oa: ['idToken', 'phoneEnrollmentInfo'],
      ta: function (a) {
        if (!a.phoneEnrollmentInfo) throw new P('internal-error');
        if (!a.phoneEnrollmentInfo.phoneNumber)
          throw new P('missing-phone-number');
        if (!a.phoneEnrollmentInfo.recaptchaToken)
          throw new P('missing-app-credential');
      },
      Ca: function (a) {
        if (!a.phoneSessionInfo || !a.phoneSessionInfo.sessionInfo)
          throw new P('internal-error');
      },
      va: !0,
      Qe: !0,
    },
    cn = {
      endpoint: 'accounts/mfaSignIn:start',
      Oa: ['mfaPendingCredential', 'mfaEnrollmentId', 'phoneSignInInfo'],
      ta: function (a) {
        if (!a.phoneSignInInfo || !a.phoneSignInInfo.recaptchaToken)
          throw new P('missing-app-credential');
      },
      Ca: function (a) {
        if (!a.phoneResponseInfo || !a.phoneResponseInfo.sessionInfo)
          throw new P('internal-error');
      },
      va: !0,
      Qe: !0,
    },
    kn = {
      endpoint: 'verifyAssertion',
      ta: fn,
      Of: gn,
      Ca: jn,
      Qb: !0,
      va: !0,
    },
    mn = {
      endpoint: 'verifyAssertion',
      ta: fn,
      Of: gn,
      Ca: function (a) {
        if (a.errorMessage && 'USER_NOT_FOUND' == a.errorMessage)
          throw new P('user-not-found');
        if (a.errorMessage) throw hn(a.errorMessage);
        Qm(a);
      },
      Qb: !0,
      va: !0,
    },
    ln = {
      endpoint: 'verifyAssertion',
      ta: function (a) {
        fn(a);
        if (!a.idToken) throw new P('internal-error');
      },
      Of: gn,
      Ca: jn,
      Qb: !0,
    },
    xn = {
      endpoint: 'verifyCustomToken',
      ta: function (a) {
        if (!a.token) throw new P('invalid-custom-token');
      },
      Ca: Qm,
      Qb: !0,
      va: !0,
    },
    Zl = {
      endpoint: 'verifyPassword',
      ta: function (a) {
        Km(a);
        if (!a.password) throw new P('wrong-password');
      },
      Ca: Qm,
      Qb: !0,
      va: !0,
    },
    $m = { endpoint: 'verifyPhoneNumber', ta: Rm, Ca: Qm, va: !0 },
    gm = {
      endpoint: 'verifyPhoneNumber',
      ta: function (a) {
        if (!a.idToken) throw new P('internal-error');
        Rm(a);
      },
      Ca: function (a) {
        if (a.temporaryProof)
          throw ((a.code = 'credential-already-in-use'), rm(a));
        Qm(a);
      },
    },
    hm = {
      ri: { USER_NOT_FOUND: 'user-not-found' },
      endpoint: 'verifyPhoneNumber',
      ta: Rm,
      Ca: Qm,
      va: !0,
    },
    yn = {
      endpoint: 'accounts/mfaEnrollment:withdraw',
      Oa: ['idToken', 'mfaEnrollmentId'],
      Ca: function (a) {
        if (!!a.idToken ^ !!a.refreshToken) throw new P('internal-error');
      },
      va: !0,
      Qe: !0,
    };
  var An = function (a) {
    this.mb = a;
    this.uf = null;
    this.fh = zn(this);
  };
  An.prototype.onReady = function () {
    return this.fh;
  };
  var zn = function (a) {
    return Bn().then(function () {
      return new E(function (b, c) {
        N('gapi.iframes.getContext')().open(
          {
            where: document.body,
            url: a.mb,
            messageHandlersFilter: N(
              'gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER',
            ),
            attributes: {
              style: {
                position: 'absolute',
                top: '-100px',
                width: '1px',
                height: '1px',
              },
            },
            dontclear: !0,
          },
          function (d) {
            a.uf = d;
            a.uf.restyle({ setHideOnLeave: !1 });
            var e = setTimeout(function () {
                c(Error('Network Error'));
              }, Cn.get()),
              f = function () {
                clearTimeout(e);
                b();
              };
            d.ping(f).then(f, function () {
              c(Error('Network Error'));
            });
          },
        );
      });
    });
  };
  An.prototype.sendMessage = function (a) {
    var b = this;
    return this.fh.then(function () {
      return new E(function (c) {
        b.uf.send(a.type, a, c, N('gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER'));
      });
    });
  };
  An.prototype.zh = function (a, b) {
    var c = this;
    this.fh.then(function () {
      c.uf.register(a, b, N('gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER'));
    });
  };
  var Bn = function () {
      return Dn
        ? Dn
        : (Dn = new E(function (a, b) {
            var c = function () {
              Qk();
              N('gapi.load')('gapi.iframes', {
                callback: a,
                ontimeout: function () {
                  Qk();
                  b(Error('Network Error'));
                },
                timeout: En.get(),
              });
            };
            if (N('gapi.iframes.Iframe')) a();
            else if (N('gapi.load')) c();
            else {
              var d =
                '__iframefcb' + Math.floor(1e6 * Math.random()).toString();
              p[d] = function () {
                N('gapi.load') ? c() : b(Error('Network Error'));
              };
              d = jb(Fn, { onload: d });
              F(sj(d)).o(function () {
                b(Error('Network Error'));
              });
            }
          }).o(function (a) {
            Dn = null;
            throw a;
          }));
    },
    Fn = new bb($a, 'https://apis.google.com/js/api.js?onload=%{onload}'),
    En = new Rk(3e4, 6e4),
    Cn = new Rk(5e3, 15e3),
    Dn = null;
  var Gn = function (a, b, c, d) {
    this.Ba = a;
    this.ka = b;
    this.ma = c;
    this.O = d;
    this.kd = null;
    this.O
      ? ((a = M(this.O.url)),
        (a = ak(a.Xa, a.Ia, a.Xb, '/emulator/auth/iframe')))
      : (a = ak('https', this.Ba, null, '/__/auth/iframe'));
    this.nc = a;
    L(this.nc, 'apiKey', this.ka);
    L(this.nc, 'appName', this.ma);
    this.Ka = null;
    this.Fa = [];
  };
  Gn.prototype.Lh = function (a) {
    this.kd = a;
    return this;
  };
  Gn.prototype.Ih = function (a) {
    this.Ka = a;
    return this;
  };
  Gn.prototype.toString = function () {
    this.kd ? L(this.nc, 'v', this.kd) : this.nc.removeParameter('v');
    this.Ka ? L(this.nc, 'eid', this.Ka) : this.nc.removeParameter('eid');
    this.Fa.length
      ? L(this.nc, 'fw', this.Fa.join(','))
      : this.nc.removeParameter('fw');
    return this.nc.toString();
  };
  var Hn = function (a, b, c, d, e, f) {
    this.Ba = a;
    this.ka = b;
    this.ma = c;
    this.vk = d;
    this.O = f;
    this.kd = this.La = this.yh = null;
    this.Jd = e;
    this.na = this.Ka = null;
  };
  Hn.prototype.Kh = function (a) {
    this.na = a;
    return this;
  };
  Hn.prototype.Lh = function (a) {
    this.kd = a;
    return this;
  };
  Hn.prototype.Ih = function (a) {
    this.Ka = a;
    return this;
  };
  Hn.prototype.toString = function () {
    if (this.O) {
      var a = M(this.O.url);
      a = ak(a.Xa, a.Ia, a.Xb, '/emulator/auth/handler');
    } else a = ak('https', this.Ba, null, '/__/auth/handler');
    L(a, 'apiKey', this.ka);
    L(a, 'appName', this.ma);
    L(a, 'authType', this.vk);
    if (this.Jd.isOAuthProvider) {
      var b = this.Jd;
      try {
        var c = firebase.app(this.ma).auth().Kb;
      } catch (h) {
        c = null;
      }
      b.Cg = c;
      L(a, 'providerId', this.Jd.providerId);
      c = this.Jd;
      b = Nk(c.ui);
      for (var d in b) b[d] = b[d].toString();
      d = c.Wl;
      b = Va(b);
      for (var e = 0; e < d.length; e++) {
        var f = d[e];
        f in b && delete b[f];
      }
      c.Xg && c.Cg && !b[c.Xg] && (b[c.Xg] = c.Cg);
      Ua(b) || L(a, 'customParameters', Mk(b));
    }
    'function' === typeof this.Jd.Ji &&
      ((c = this.Jd.Ji()), c.length && L(a, 'scopes', c.join(',')));
    this.yh ? L(a, 'redirectUrl', this.yh) : a.removeParameter('redirectUrl');
    this.La ? L(a, 'eventId', this.La) : a.removeParameter('eventId');
    this.kd ? L(a, 'v', this.kd) : a.removeParameter('v');
    if (this.Te)
      for (var g in this.Te)
        this.Te.hasOwnProperty(g) && !Zj(a, g) && L(a, g, this.Te[g]);
    this.na ? L(a, 'tid', this.na) : a.removeParameter('tid');
    this.Ka ? L(a, 'eid', this.Ka) : a.removeParameter('eid');
    g = In(this.ma);
    g.length && L(a, 'fw', g.join(','));
    return a.toString();
  };
  var In = function (a) {
      try {
        return Qa(firebase.app(a).auth().Fa);
      } catch (b) {
        return [];
      }
    },
    Jn = function (a, b, c, d, e, f) {
      this.Ba = a;
      this.ka = b;
      this.ma = c;
      this.O = f;
      this.Jc = d || null;
      this.Ka = e || null;
      this.u = this.Qg = this.Gi = null;
      this.Zb = [];
      this.xf = this.Lb = null;
    },
    Kn = function (a) {
      var b = b || kk();
      return Pm(a).then(function (c) {
        if (!uk(c, b)) throw new wl(kk());
      });
    };
  k = Jn.prototype;
  k.initialize = function () {
    if (this.xf) return this.xf;
    var a = this;
    return (this.xf = wk().then(function () {
      if (!a.Qg) {
        var b = a.Jc,
          c = a.Ka,
          d = In(a.ma);
        b = new Gn(a.Ba, a.ka, a.ma, a.O).Lh(b).Ih(c);
        b.Fa = Qa(d || []);
        a.Qg = b.toString();
      }
      a.tf = new An(a.Qg);
      a.Ah();
    }));
  };
  k.Je = function (a, b, c) {
    var d = new P('popup-closed-by-user'),
      e = new P('web-storage-unsupported'),
      f = this,
      g = !1;
    return this.Tc()
      .then(function () {
        Ln(f).then(function (h) {
          h || (a && qk(a), b(e), (g = !0));
        });
      })
      .o(function () {})
      .then(function () {
        if (!g) return sk(a);
      })
      .then(function () {
        if (!g)
          return uj(c).then(function () {
            b(d);
          });
      });
  };
  k.Tj = function () {
    var a = ik();
    return !Lk(a) && !Pk(a);
  };
  k.Oi = function () {
    return !1;
  };
  k.Ae = function (a, b, c, d, e, f, g, h) {
    if (!a) return G(new P('popup-blocked'));
    if (g && !Lk())
      return (
        this.Tc().o(function (m) {
          qk(a);
          e(m);
        }),
        d(),
        F()
      );
    this.Lb || (this.Lb = Kn(Mn(this)));
    var l = this;
    return this.Lb.then(function () {
      var m = l.Tc().o(function (q) {
        qk(a);
        e(q);
        throw q;
      });
      d();
      return m;
    })
      .then(function () {
        pm(c);
        if (!g) {
          var m = Nn(
            l.Ba,
            l.ka,
            l.ma,
            b,
            c,
            null,
            f,
            l.Jc,
            void 0,
            l.Ka,
            h,
            l.O,
          );
          lk(m, a);
        }
      })
      .o(function (m) {
        'auth/network-request-failed' == m.code && (l.Lb = null);
        throw m;
      });
  };
  var Mn = function (a) {
    a.u ||
      ((a.Gi = a.Jc ? Gk('JsCore', a.Jc, In(a.ma)) : null),
      (a.u = new xm(a.ka, gk(a.Ka), a.Gi)),
      a.O && Bm(a.u, a.O));
    return a.u;
  };
  Jn.prototype.Be = function (a, b, c, d) {
    this.Lb || (this.Lb = Kn(Mn(this)));
    var e = this;
    return this.Lb.then(function () {
      pm(b);
      var f = Nn(e.Ba, e.ka, e.ma, a, b, kk(), c, e.Jc, void 0, e.Ka, d, e.O);
      lk(f);
    }).o(function (f) {
      'auth/network-request-failed' == f.code && (e.Lb = null);
      throw f;
    });
  };
  Jn.prototype.Tc = function () {
    var a = this;
    return this.initialize()
      .then(function () {
        return a.tf.onReady();
      })
      .o(function () {
        a.Lb = null;
        throw new P('network-request-failed');
      });
  };
  Jn.prototype.Yj = function () {
    return !0;
  };
  var Nn = function (a, b, c, d, e, f, g, h, l, m, q, y) {
    a = new Hn(a, b, c, d, e, y);
    a.yh = f;
    a.La = g;
    f = a.Lh(h);
    f.Te = Va(l || null);
    return f.Ih(m).Kh(q).toString();
  };
  Jn.prototype.Ah = function () {
    if (!this.tf) throw Error('IfcHandler must be initialized!');
    var a = this;
    this.tf.zh('authEvent', function (b) {
      var c = {};
      if (b && b.authEvent) {
        var d = !1;
        b = nl(b.authEvent);
        for (c = 0; c < a.Zb.length; c++) d = a.Zb[c](b) || d;
        c = {};
        c.status = d ? 'ACK' : 'ERROR';
        return F(c);
      }
      c.status = 'ERROR';
      return F(c);
    });
  };
  var Ln = function (a) {
    var b = { type: 'webStorageSupport' };
    return a
      .initialize()
      .then(function () {
        return a.tf.sendMessage(b);
      })
      .then(function (c) {
        if (c && c.length && 'undefined' !== typeof c[0].webStorageSupport)
          return c[0].webStorageSupport;
        throw Error();
      });
  };
  Jn.prototype.Hc = function (a) {
    this.Zb.push(a);
  };
  Jn.prototype.Md = function (a) {
    Pa(this.Zb, function (b) {
      return b == a;
    });
  };
  function On() {}
  On.prototype.render = function () {};
  On.prototype.reset = function () {};
  On.prototype.getResponse = function () {};
  On.prototype.execute = function () {};
  var Pn = function () {
    this.qd = p.grecaptcha ? Infinity : 0;
    this.Qi = null;
    this.xg = '__rcb' + Math.floor(1e6 * Math.random()).toString();
  };
  Pn.prototype.fj = function (a) {
    var b = this;
    return new E(function (c, d) {
      var e = setTimeout(function () {
        d(new P('network-request-failed'));
      }, Qn.get());
      if (!p.grecaptcha || (a !== b.Qi && !b.qd)) {
        p[b.xg] = function () {
          if (p.grecaptcha) {
            b.Qi = a;
            var g = p.grecaptcha.render;
            p.grecaptcha.render = function (h, l) {
              h = g(h, l);
              b.qd++;
              return h;
            };
            clearTimeout(e);
            c(p.grecaptcha);
          } else clearTimeout(e), d(new P('internal-error'));
          delete p[b.xg];
        };
        var f = jb(Rn, { onload: b.xg, hl: a || '' });
        F(sj(f)).o(function () {
          clearTimeout(e);
          d(
            new P(
              'internal-error',
              'Unable to load external reCAPTCHA dependencies!',
            ),
          );
        });
      } else clearTimeout(e), c(p.grecaptcha);
    });
  };
  Pn.prototype.ji = function () {
    this.qd--;
  };
  var Rn = new bb(
      $a,
      'https://www.google.com/recaptcha/api.js?trustedtypes=true&onload=%{onload}&render=explicit&hl=%{hl}',
    ),
    Qn = new Rk(3e4, 6e4),
    Sn = null;
  var Tn = function () {
    this.lb = {};
    this.qd = 1e12;
  };
  Tn.prototype.render = function (a, b) {
    this.lb[this.qd.toString()] = new Un(a, b);
    return this.qd++;
  };
  Tn.prototype.reset = function (a) {
    var b = Vn(this, a);
    a = Wn(a);
    b && a && (b.delete(), delete this.lb[a]);
  };
  Tn.prototype.getResponse = function (a) {
    return (a = Vn(this, a)) ? a.getResponse() : null;
  };
  Tn.prototype.execute = function (a) {
    (a = Vn(this, a)) && a.execute();
  };
  var Vn = function (a, b) {
      return (b = Wn(b)) ? a.lb[b] || null : null;
    },
    Wn = function (a) {
      return (a = 'undefined' === typeof a ? 1e12 : a) ? a.toString() : null;
    },
    Xn = null,
    Un = function (a, b) {
      this.Cb = !1;
      this.Aa = b;
      this.Rd = this.Pf = null;
      this.aj = 'invisible' !== this.Aa.size;
      this.zi = jc(a);
      var c = this;
      this.oj = function () {
        c.execute();
      };
      this.aj ? this.execute() : hi(this.zi, 'click', this.oj);
    };
  Un.prototype.getResponse = function () {
    Yn(this);
    return this.Pf;
  };
  Un.prototype.execute = function () {
    Yn(this);
    var a = this;
    this.Rd ||
      (this.Rd = setTimeout(function () {
        a.Pf = Ek();
        var b = a.Aa.callback,
          c = a.Aa['expired-callback'];
        if (b)
          try {
            b(a.Pf);
          } catch (d) {}
        a.Rd = setTimeout(function () {
          a.Rd = null;
          a.Pf = null;
          if (c)
            try {
              c();
            } catch (d) {}
          a.aj && a.execute();
        }, 6e4);
      }, 500));
  };
  Un.prototype.delete = function () {
    Yn(this);
    this.Cb = !0;
    clearTimeout(this.Rd);
    this.Rd = null;
    pi(this.zi, 'click', this.oj);
  };
  var Yn = function (a) {
    if (a.Cb) throw Error('reCAPTCHA mock was already deleted!');
  };
  var Zn = function () {};
  Zn.prototype.fj = function () {
    Xn || (Xn = new Tn());
    return F(Xn);
  };
  Zn.prototype.ji = function () {};
  var $n = null;
  var ao = function (a, b, c, d, e, f, g) {
    O(this, 'type', 'recaptcha');
    this.Vd = this.Yd = null;
    this.rd = !1;
    this.li = b;
    this.le = null;
    g ? ($n || ($n = new Zn()), (g = $n)) : (Sn || (Sn = new Pn()), (g = Sn));
    this.Ej = g;
    this.yc = c || { theme: 'light', type: 'image' };
    this.Ma = [];
    if (this.yc.sitekey)
      throw new P(
        'argument-error',
        'sitekey should not be provided for reCAPTCHA as one is automatically provisioned for the current project.',
      );
    this.yf = 'invisible' === this.yc.size;
    if (!p.document)
      throw new P(
        'operation-not-supported-in-this-environment',
        'RecaptchaVerifier is only supported in a browser HTTP/HTTPS environment with DOM support.',
      );
    if (!jc(b) || (!this.yf && jc(b).hasChildNodes()))
      throw new P(
        'argument-error',
        'reCAPTCHA container is either not found or already contains inner elements!',
      );
    this.u = new xm(a, f || null, e || null);
    this.Uk =
      d ||
      function () {
        return null;
      };
    var h = this;
    this.ag = [];
    var l = this.yc.callback;
    this.yc.callback = function (q) {
      h.de(q);
      if ('function' === typeof l) l(q);
      else if ('string' === typeof l) {
        var y = N(l, p);
        'function' === typeof y && y(q);
      }
    };
    var m = this.yc['expired-callback'];
    this.yc['expired-callback'] = function () {
      h.de(null);
      if ('function' === typeof m) m();
      else if ('string' === typeof m) {
        var q = N(m, p);
        'function' === typeof q && q();
      }
    };
  };
  ao.prototype.de = function (a) {
    for (var b = 0; b < this.ag.length; b++)
      try {
        this.ag[b](a);
      } catch (c) {}
  };
  var bo = function (a, b) {
    Pa(a.ag, function (c) {
      return c == b;
    });
  };
  k = ao.prototype;
  k.N = function (a) {
    var b = this;
    this.Ma.push(a);
    a.Fc(function () {
      Na(b.Ma, a);
    });
    return a;
  };
  k.qe = function () {
    var a = this;
    return this.Yd
      ? this.Yd
      : (this.Yd = this.N(
          F()
            .then(function () {
              if (Jk() && !Bk()) return wk();
              throw new P(
                'operation-not-supported-in-this-environment',
                'RecaptchaVerifier is only supported in a browser HTTP/HTTPS environment.',
              );
            })
            .then(function () {
              return a.Ej.fj(a.Uk());
            })
            .then(function (b) {
              a.le = b;
              return R(a.u, wn, {});
            })
            .then(function (b) {
              a.yc.sitekey = b.recaptchaSiteKey;
            })
            .o(function (b) {
              a.Yd = null;
              throw b;
            }),
        ));
  };
  k.render = function () {
    co(this);
    var a = this;
    return this.N(
      this.qe().then(function () {
        if (null === a.Vd) {
          var b = a.li;
          if (!a.yf) {
            var c = jc(b);
            b = nc('DIV');
            c.appendChild(b);
          }
          a.Vd = a.le.render(b, a.yc);
        }
        return a.Vd;
      }),
    );
  };
  k.verify = function () {
    co(this);
    var a = this;
    return this.N(
      this.render().then(function (b) {
        return new E(function (c) {
          var d = a.le.getResponse(b);
          if (d) c(d);
          else {
            var e = function (f) {
              f && (bo(a, e), c(f));
            };
            a.ag.push(e);
            a.yf && a.le.execute(a.Vd);
          }
        });
      }),
    );
  };
  k.reset = function () {
    co(this);
    null !== this.Vd && this.le.reset(this.Vd);
  };
  var co = function (a) {
    if (a.rd)
      throw new P(
        'internal-error',
        'RecaptchaVerifier instance has been destroyed.',
      );
  };
  ao.prototype.clear = function () {
    co(this);
    this.rd = !0;
    this.Ej.ji();
    for (var a = 0; a < this.Ma.length; a++)
      this.Ma[a].cancel('RecaptchaVerifier instance has been destroyed.');
    this.yf || qc(jc(this.li));
  };
  var eo = function (a, b, c) {
    var d = !1;
    try {
      this.V = c || firebase.app();
    } catch (g) {
      throw new P(
        'argument-error',
        'No firebase.app.App instance is currently initialized.',
      );
    }
    if (this.V.options && this.V.options.apiKey) c = this.V.options.apiKey;
    else throw new P('invalid-api-key');
    var e = this,
      f = null;
    try {
      f = Qa(this.V.auth().Fa);
    } catch (g) {}
    try {
      d = this.V.auth().settings.appVerificationDisabledForTesting;
    } catch (g) {}
    f = firebase.SDK_VERSION ? Gk('JsCore', firebase.SDK_VERSION, f) : null;
    ao.call(
      this,
      c,
      a,
      b,
      function () {
        try {
          var g = e.V.auth().Kb;
        } catch (h) {
          g = null;
        }
        return g;
      },
      f,
      gk(hk),
      d,
    );
  };
  v(eo, ao);
  var fo = function (a) {
    this.Se = a;
  };
  fo.prototype.postMessage = function (a, b) {
    this.Se.postMessage(a, b);
  };
  var go = function (a) {
    this.Sl = a;
    this.ki = !1;
    this.Cf = [];
  };
  go.prototype.send = function (a, b, c) {
    b = void 0 === b ? null : b;
    c = void 0 === c ? !1 : c;
    var d = this,
      e;
    b = b || {};
    var f,
      g,
      h,
      l = null;
    if (this.ki) return G(Error('connection_unavailable'));
    var m = c ? 800 : 50,
      q = 'undefined' !== typeof MessageChannel ? new MessageChannel() : null;
    return new E(function (y, B) {
      q
        ? ((e = '' + Math.floor(Math.random() * Math.pow(10, 20)).toString()),
          q.port1.start(),
          (g = setTimeout(function () {
            B(Error('unsupported_event'));
          }, m)),
          (f = function (Q) {
            Q.data.eventId === e &&
              ('ack' === Q.data.status
                ? (clearTimeout(g),
                  (h = setTimeout(function () {
                    B(Error('timeout'));
                  }, 3e3)))
                : 'done' === Q.data.status
                ? (clearTimeout(h),
                  'undefined' !== typeof Q.data.response
                    ? y(Q.data.response)
                    : B(Error('unknown_error')))
                : (clearTimeout(g),
                  clearTimeout(h),
                  B(Error('invalid_response'))));
          }),
          (l = { messageChannel: q, onMessage: f }),
          d.Cf.push(l),
          q.port1.addEventListener('message', f),
          d.Sl.postMessage({ eventType: a, eventId: e, data: b }, [q.port2]))
        : B(Error('connection_unavailable'));
    })
      .then(function (y) {
        ho(d, l);
        return y;
      })
      .o(function (y) {
        ho(d, l);
        throw y;
      });
  };
  var ho = function (a, b) {
    if (b) {
      var c = b.messageChannel,
        d = b.onMessage;
      c && (c.port1.removeEventListener('message', d), c.port1.close());
      Pa(a.Cf, function (e) {
        return e == b;
      });
    }
  };
  go.prototype.close = function () {
    for (; 0 < this.Cf.length; ) ho(this, this.Cf[0]);
    this.ki = !0;
  };
  var io = function (a) {
      this.Gg = a;
      this.Hb = {};
      this.jj = u(this.Yk, this);
    },
    ko = function (a) {
      x(jo, function (c) {
        c.Gg == a && (b = c);
      });
      if (!b) {
        var b = new io(a);
        jo.push(b);
      }
      return b;
    };
  io.prototype.Yk = function (a) {
    var b = a.data.eventType,
      c = a.data.eventId,
      d = this.Hb[b];
    if (d && 0 < d.length) {
      a.ports[0].postMessage({
        status: 'ack',
        eventId: c,
        eventType: b,
        response: null,
      });
      var e = [];
      x(d, function (f) {
        e.push(
          F().then(function () {
            return f(a.origin, a.data.data);
          }),
        );
      });
      of(e).then(function (f) {
        var g = [];
        x(f, function (h) {
          g.push({
            fulfilled: h.Fi,
            value: h.value,
            reason: h.reason ? h.reason.message : void 0,
          });
        });
        x(g, function (h) {
          for (var l in h) 'undefined' === typeof h[l] && delete h[l];
        });
        a.ports[0].postMessage({
          status: 'done',
          eventId: c,
          eventType: b,
          response: g,
        });
      });
    }
  };
  io.prototype.subscribe = function (a, b) {
    Ua(this.Hb) && this.Gg.addEventListener('message', this.jj);
    'undefined' === typeof this.Hb[a] && (this.Hb[a] = []);
    this.Hb[a].push(b);
  };
  io.prototype.unsubscribe = function (a, b) {
    'undefined' !== typeof this.Hb[a] && b
      ? (Pa(this.Hb[a], function (c) {
          return c == b;
        }),
        0 == this.Hb[a].length && delete this.Hb[a])
      : b || delete this.Hb[a];
    Ua(this.Hb) && this.Gg.removeEventListener('message', this.jj);
  };
  var jo = [];
  var lo = function (a) {
    this.yb =
      a ||
      (firebase.INTERNAL.reactNative &&
        firebase.INTERNAL.reactNative.AsyncStorage);
    if (!this.yb)
      throw new P(
        'internal-error',
        'The React Native compatibility library was not found.',
      );
    this.type = 'asyncStorage';
  };
  k = lo.prototype;
  k.get = function (a) {
    return F(this.yb.getItem(a)).then(function (b) {
      return b && Ok(b);
    });
  };
  k.set = function (a, b) {
    return F(this.yb.setItem(a, Mk(b)));
  };
  k.remove = function (a) {
    return F(this.yb.removeItem(a));
  };
  k.tc = function () {};
  k.Ec = function () {};
  function mo() {
    this.storage = {};
    this.type = 'inMemory';
  }
  k = mo.prototype;
  k.get = function (a) {
    return F(this.storage[a]);
  };
  k.set = function (a, b) {
    this.storage[a] = b;
    return F();
  };
  k.remove = function (a) {
    delete this.storage[a];
    return F();
  };
  k.tc = function () {};
  k.Ec = function () {};
  var po = function () {
      if (!no()) {
        if ('Node' == Ck())
          throw new P(
            'internal-error',
            'The LocalStorage compatibility library was not found.',
          );
        throw new P('web-storage-unsupported');
      }
      this.yb = oo() || firebase.INTERNAL.node.localStorage;
      this.type = 'localStorage';
    },
    oo = function () {
      try {
        var a = p.localStorage,
          b = Hk();
        a && (a.setItem(b, '1'), a.removeItem(b));
        return a;
      } catch (c) {
        return null;
      }
    },
    no = function () {
      var a = 'Node' == Ck();
      a =
        oo() ||
        (a && firebase.INTERNAL.node && firebase.INTERNAL.node.localStorage);
      if (!a) return !1;
      try {
        return a.setItem('__sak', '1'), a.removeItem('__sak'), !0;
      } catch (b) {
        return !1;
      }
    };
  k = po.prototype;
  k.get = function (a) {
    var b = this;
    return F().then(function () {
      var c = b.yb.getItem(a);
      return Ok(c);
    });
  };
  k.set = function (a, b) {
    var c = this;
    return F().then(function () {
      var d = Mk(b);
      null === d ? c.remove(a) : c.yb.setItem(a, d);
    });
  };
  k.remove = function (a) {
    var b = this;
    return F().then(function () {
      b.yb.removeItem(a);
    });
  };
  k.tc = function (a) {
    p.window && hi(p.window, 'storage', a);
  };
  k.Ec = function (a) {
    p.window && pi(p.window, 'storage', a);
  };
  var qo = function () {
    this.yb = {};
    this.type = 'nullStorage';
  };
  k = qo.prototype;
  k.get = function () {
    return F(null);
  };
  k.set = function () {
    return F();
  };
  k.remove = function () {
    return F();
  };
  k.tc = function () {};
  k.Ec = function () {};
  var to = function () {
      if (!ro()) {
        if ('Node' == Ck())
          throw new P(
            'internal-error',
            'The SessionStorage compatibility library was not found.',
          );
        throw new P('web-storage-unsupported');
      }
      this.yb = so() || firebase.INTERNAL.node.sessionStorage;
      this.type = 'sessionStorage';
    },
    so = function () {
      try {
        var a = p.sessionStorage,
          b = Hk();
        a && (a.setItem(b, '1'), a.removeItem(b));
        return a;
      } catch (c) {
        return null;
      }
    },
    ro = function () {
      var a = 'Node' == Ck();
      a =
        so() ||
        (a && firebase.INTERNAL.node && firebase.INTERNAL.node.sessionStorage);
      if (!a) return !1;
      try {
        return a.setItem('__sak', '1'), a.removeItem('__sak'), !0;
      } catch (b) {
        return !1;
      }
    };
  k = to.prototype;
  k.get = function (a) {
    var b = this;
    return F().then(function () {
      var c = b.yb.getItem(a);
      return Ok(c);
    });
  };
  k.set = function (a, b) {
    var c = this;
    return F().then(function () {
      var d = Mk(b);
      null === d ? c.remove(a) : c.yb.setItem(a, d);
    });
  };
  k.remove = function (a) {
    var b = this;
    return F().then(function () {
      b.yb.removeItem(a);
    });
  };
  k.tc = function () {};
  k.Ec = function () {};
  var wo = function () {
      if (!uo()) throw new P('web-storage-unsupported');
      this.vi = 'firebaseLocalStorageDb';
      this.Ef = 'firebaseLocalStorage';
      this.Bg = 'fbase_key';
      this.hk = 'value';
      this.Bm = 1;
      this.Ta = {};
      this.Yb = [];
      this.xe = 0;
      this.Vi = p.indexedDB;
      this.type = 'indexedDB';
      this.Uf = this.zc = this.Lf = this.mh = null;
      this.Lj = !1;
      this.kg = null;
      var a = this;
      Bk() && self
        ? ((this.zc = ko(Bk() ? self : null)),
          this.zc.subscribe('keyChanged', function (b, c) {
            return vo(a).then(function (d) {
              0 < d.length &&
                x(a.Yb, function (e) {
                  e(d);
                });
              return { keyProcessed: Ma(d, c.key) };
            });
          }),
          this.zc.subscribe('ping', function () {
            return F(['keyChanged']);
          }))
        : Yk().then(function (b) {
            if ((a.kg = b))
              (a.Uf = new go(new fo(b))),
                a.Uf.send('ping', null, !0)
                  .then(function (c) {
                    c[0].fulfilled &&
                      Ma(c[0].value, 'keyChanged') &&
                      (a.Lj = !0);
                  })
                  .o(function () {});
          });
    },
    xo,
    yo = function (a) {
      return new E(function (b, c) {
        var d = a.Vi.deleteDatabase(a.vi);
        d.onsuccess = function () {
          b();
        };
        d.onerror = function (e) {
          c(Error(e.target.error));
        };
      });
    },
    zo = function (a) {
      return new E(function (b, c) {
        var d = a.Vi.open(a.vi, a.Bm);
        d.onerror = function (e) {
          try {
            e.preventDefault();
          } catch (f) {}
          c(Error(e.target.error));
        };
        d.onupgradeneeded = function (e) {
          e = e.target.result;
          try {
            e.createObjectStore(a.Ef, { keyPath: a.Bg });
          } catch (f) {
            c(f);
          }
        };
        d.onsuccess = function (e) {
          e = e.target.result;
          e.objectStoreNames.contains(a.Ef)
            ? b(e)
            : yo(a)
                .then(function () {
                  return zo(a);
                })
                .then(function (f) {
                  b(f);
                })
                .o(function (f) {
                  c(f);
                });
        };
      });
    },
    Ao = function (a) {
      a.Sg || (a.Sg = zo(a));
      return a.Sg;
    },
    Bo = function (a, b) {
      var c = 0,
        d = function (e, f) {
          Ao(a)
            .then(b)
            .then(e)
            .o(function (g) {
              if (3 < ++c) f(g);
              else
                return Ao(a)
                  .then(function (h) {
                    h.close();
                    a.Sg = void 0;
                    return d(e, f);
                  })
                  .o(function (h) {
                    f(h);
                  });
            });
        };
      return new E(d);
    },
    uo = function () {
      try {
        return !!p.indexedDB;
      } catch (a) {
        return !1;
      }
    },
    Co = function (a, b) {
      return b.objectStore(a.Ef);
    },
    Do = function (a, b, c) {
      return b.transaction([a.Ef], c ? 'readwrite' : 'readonly');
    },
    Eo = function (a) {
      return new E(function (b, c) {
        a.onsuccess = function (d) {
          d && d.target ? b(d.target.result) : b();
        };
        a.onerror = function (d) {
          c(d.target.error);
        };
      });
    };
  wo.prototype.set = function (a, b) {
    var c = this,
      d = !1;
    return Bo(this, function (e) {
      e = Co(c, Do(c, e, !0));
      return Eo(e.get(a));
    })
      .then(function (e) {
        return Bo(c, function (f) {
          f = Co(c, Do(c, f, !0));
          if (e) return (e.value = b), Eo(f.put(e));
          c.xe++;
          d = !0;
          var g = {};
          g[c.Bg] = a;
          g[c.hk] = b;
          return Eo(f.add(g));
        });
      })
      .then(function () {
        c.Ta[a] = b;
        return Fo(c, a);
      })
      .Fc(function () {
        d && c.xe--;
      });
  };
  var Fo = function (a, b) {
    return a.Uf && a.kg && Xk() === a.kg
      ? a.Uf.send('keyChanged', { key: b }, a.Lj)
          .then(function () {})
          .o(function () {})
      : F();
  };
  wo.prototype.get = function (a) {
    var b = this;
    return Bo(this, function (c) {
      return Eo(Co(b, Do(b, c, !1)).get(a));
    }).then(function (c) {
      return c && c.value;
    });
  };
  wo.prototype.remove = function (a) {
    var b = !1,
      c = this;
    return Bo(this, function (d) {
      b = !0;
      c.xe++;
      return Eo(Co(c, Do(c, d, !0))['delete'](a));
    })
      .then(function () {
        delete c.Ta[a];
        return Fo(c, a);
      })
      .Fc(function () {
        b && c.xe--;
      });
  };
  var vo = function (a) {
    return Ao(a)
      .then(function (b) {
        var c = Co(a, Do(a, b, !1));
        return c.getAll
          ? Eo(c.getAll())
          : new E(function (d, e) {
              var f = [],
                g = c.openCursor();
              g.onsuccess = function (h) {
                (h = h.target.result)
                  ? (f.push(h.value), h['continue']())
                  : d(f);
              };
              g.onerror = function (h) {
                e(h.target.error);
              };
            });
      })
      .then(function (b) {
        var c = {},
          d = [];
        if (0 == a.xe) {
          for (d = 0; d < b.length; d++) c[b[d][a.Bg]] = b[d][a.hk];
          d = mk(a.Ta, c);
          a.Ta = c;
        }
        return d;
      });
  };
  wo.prototype.tc = function (a) {
    0 == this.Yb.length && this.Ph();
    this.Yb.push(a);
  };
  wo.prototype.Ec = function (a) {
    Pa(this.Yb, function (b) {
      return b == a;
    });
    0 == this.Yb.length && this.Xf();
  };
  wo.prototype.Ph = function () {
    var a = this;
    this.Xf();
    var b = function () {
      a.Lf = setTimeout(function () {
        a.mh = vo(a)
          .then(function (c) {
            0 < c.length &&
              x(a.Yb, function (d) {
                d(c);
              });
          })
          .then(function () {
            b();
          })
          .o(function (c) {
            'STOP_EVENT' != c.message && b();
          });
      }, 800);
    };
    b();
  };
  wo.prototype.Xf = function () {
    this.mh && this.mh.cancel('STOP_EVENT');
    this.Lf && (clearTimeout(this.Lf), (this.Lf = null));
  };
  function Go(a) {
    var b = this,
      c = null;
    this.Yb = [];
    this.type = 'indexedDB';
    this.Ai = a;
    this.Wh = F()
      .then(function () {
        if (uo()) {
          var d = Hk(),
            e = '__sak' + d;
          xo || (xo = new wo());
          c = xo;
          return c
            .set(e, d)
            .then(function () {
              return c.get(e);
            })
            .then(function (f) {
              if (f !== d) throw Error('indexedDB not supported!');
              return c.remove(e);
            })
            .then(function () {
              return c;
            })
            .o(function () {
              return b.Ai;
            });
        }
        return b.Ai;
      })
      .then(function (d) {
        b.type = d.type;
        d.tc(function (e) {
          x(b.Yb, function (f) {
            f(e);
          });
        });
        return d;
      });
  }
  k = Go.prototype;
  k.get = function (a) {
    return this.Wh.then(function (b) {
      return b.get(a);
    });
  };
  k.set = function (a, b) {
    return this.Wh.then(function (c) {
      return c.set(a, b);
    });
  };
  k.remove = function (a) {
    return this.Wh.then(function (b) {
      return b.remove(a);
    });
  };
  k.tc = function (a) {
    this.Yb.push(a);
  };
  k.Ec = function (a) {
    Pa(this.Yb, function (b) {
      return b == a;
    });
  };
  var Lo = function () {
      this.Eg = { Browser: Ho, Node: Io, ReactNative: Jo, Worker: Ko }[Ck()];
    },
    Mo,
    Ho = { wa: po, Yf: to },
    Io = { wa: po, Yf: to },
    Jo = { wa: lo, Yf: qo },
    Ko = { wa: po, Yf: qo };
  var No = function () {
    this.ng = !1;
    Object.defineProperty(this, 'appVerificationDisabled', {
      get: function () {
        return this.ng;
      },
      set: function (a) {
        this.ng = a;
      },
      enumerable: !1,
    });
  };
  var Oo = function (a) {
    this.Ug(a);
  };
  Oo.prototype.Ug = function (a) {
    var b = a.url;
    if ('undefined' === typeof b) throw new P('missing-continue-uri');
    if ('string' !== typeof b || ('string' === typeof b && !b.length))
      throw new P('invalid-continue-uri');
    this.Ak = b;
    this.Zh = this.mg = null;
    this.Xi = !1;
    var c = a.android;
    if (c && 'object' === typeof c) {
      b = c.packageName;
      var d = c.installApp;
      c = c.minimumVersion;
      if ('string' === typeof b && b.length) {
        this.mg = b;
        if ('undefined' !== typeof d && 'boolean' !== typeof d)
          throw new P(
            'argument-error',
            'installApp property must be a boolean when specified.',
          );
        this.Xi = !!d;
        if (
          'undefined' !== typeof c &&
          ('string' !== typeof c || ('string' === typeof c && !c.length))
        )
          throw new P(
            'argument-error',
            'minimumVersion property must be a non empty string when specified.',
          );
        this.Zh = c || null;
      } else {
        if ('undefined' !== typeof b)
          throw new P(
            'argument-error',
            'packageName property must be a non empty string when specified.',
          );
        if ('undefined' !== typeof d || 'undefined' !== typeof c)
          throw new P('missing-android-pkg-name');
      }
    } else if ('undefined' !== typeof c)
      throw new P(
        'argument-error',
        'android property must be a non null object when specified.',
      );
    this.Ri = null;
    if ((b = a.iOS) && 'object' === typeof b)
      if (((b = b.bundleId), 'string' === typeof b && b.length)) this.Ri = b;
      else {
        if ('undefined' !== typeof b)
          throw new P(
            'argument-error',
            'bundleId property must be a non empty string when specified.',
          );
      }
    else if ('undefined' !== typeof b)
      throw new P(
        'argument-error',
        'iOS property must be a non null object when specified.',
      );
    b = a.handleCodeInApp;
    if ('undefined' !== typeof b && 'boolean' !== typeof b)
      throw new P(
        'argument-error',
        'handleCodeInApp property must be a boolean when specified.',
      );
    this.ii = !!b;
    a = a.dynamicLinkDomain;
    if (
      'undefined' !== typeof a &&
      ('string' !== typeof a || ('string' === typeof a && !a.length))
    )
      throw new P(
        'argument-error',
        'dynamicLinkDomain property must be a non empty string when specified.',
      );
    this.Ik = a || null;
  };
  var Po = function (a) {
    var b = {};
    b.continueUrl = a.Ak;
    b.canHandleCodeInApp = a.ii;
    if ((b.androidPackageName = a.mg))
      (b.androidMinimumVersion = a.Zh), (b.androidInstallApp = a.Xi);
    b.iOSBundleId = a.Ri;
    b.dynamicLinkDomain = a.Ik;
    for (var c in b) null === b[c] && delete b[c];
    return b;
  };
  var Qo = function (a, b) {
    this.Ek = b;
    O(this, 'verificationId', a);
  };
  Qo.prototype.confirm = function (a) {
    a = nm(this.verificationId, a);
    return this.Ek(a);
  };
  var Ro = function (a, b, c, d) {
    return new jm(a).verifyPhoneNumber(b, c).then(function (e) {
      return new Qo(e, d);
    });
  };
  var So = function (a, b, c) {
    this.Pl = a;
    this.im = b;
    this.Wk = c;
    this.Bf = 3e4;
    this.Yh = 96e4;
    this.jm = !1;
    this.Fd = null;
    this.Vc = this.Bf;
    if (this.Yh < this.Bf)
      throw Error('Proactive refresh lower bound greater than upper bound!');
  };
  So.prototype.start = function () {
    this.Vc = this.Bf;
    To(this, !0);
  };
  var Uo = function (a, b) {
      if (b) return (a.Vc = a.Bf), a.Wk();
      b = a.Vc;
      a.Vc *= 2;
      a.Vc > a.Yh && (a.Vc = a.Yh);
      return b;
    },
    To = function (a, b) {
      a.stop();
      a.Fd = uj(Uo(a, b))
        .then(function () {
          return a.jm ? F() : Tk();
        })
        .then(function () {
          return a.Pl();
        })
        .then(function () {
          To(a, !0);
        })
        .o(function (c) {
          a.im(c) && To(a, !1);
        });
    };
  So.prototype.stop = function () {
    this.Fd && (this.Fd.cancel(), (this.Fd = null));
  };
  var ap = function (a) {
      var b = {};
      b['facebook.com'] = Vo;
      b['google.com'] = Wo;
      b['github.com'] = Xo;
      b['twitter.com'] = Yo;
      var c = a && a.providerId;
      try {
        if (c) return b[c] ? new b[c](a) : new Zo(a);
        if ('undefined' !== typeof a.idToken) return new $o(a);
      } catch (d) {}
      return null;
    },
    $o = function (a) {
      var b = a.providerId;
      if (!b && a.idToken) {
        var c = zl(a.idToken);
        c && c.wh && (b = c.wh);
      }
      if (!b) throw Error('Invalid additional user info!');
      if ('anonymous' == b || 'custom' == b) b = null;
      c = !1;
      'undefined' !== typeof a.isNewUser
        ? (c = !!a.isNewUser)
        : 'identitytoolkit#SignupNewUserResponse' === a.kind && (c = !0);
      O(this, 'providerId', b);
      O(this, 'isNewUser', c);
    },
    Zo = function (a) {
      $o.call(this, a);
      a = Ok(a.rawUserInfo || '{}');
      O(this, 'profile', fl(a || {}));
    };
  n(Zo, $o);
  var Vo = function (a) {
    Zo.call(this, a);
    if ('facebook.com' != this.providerId) throw Error('Invalid provider ID!');
  };
  n(Vo, Zo);
  var Xo = function (a) {
    Zo.call(this, a);
    if ('github.com' != this.providerId) throw Error('Invalid provider ID!');
    O(this, 'username', (this.profile && this.profile.login) || null);
  };
  n(Xo, Zo);
  var Wo = function (a) {
    Zo.call(this, a);
    if ('google.com' != this.providerId) throw Error('Invalid provider ID!');
  };
  n(Wo, Zo);
  var Yo = function (a) {
    Zo.call(this, a);
    if ('twitter.com' != this.providerId) throw Error('Invalid provider ID!');
    O(this, 'username', a.screenName || null);
  };
  n(Yo, Zo);
  var bp = { LOCAL: 'local', NONE: 'none', SESSION: 'session' },
    cp = function (a) {
      var b = new P('invalid-persistence-type'),
        c = new P('unsupported-persistence-type');
      a: {
        for (d in bp)
          if (bp[d] == a) {
            var d = !0;
            break a;
          }
        d = !1;
      }
      if (!d || 'string' !== typeof a) throw b;
      switch (Ck()) {
        case 'ReactNative':
          if ('session' === a) throw c;
          break;
        case 'Node':
          if ('none' !== a) throw c;
          break;
        case 'Worker':
          if ('session' === a || (!uo() && 'none' !== a)) throw c;
          break;
        default:
          if (!Ik() && 'none' !== a) throw c;
      }
    },
    dp = function () {
      var a = !Pk(ik()) && Ak() ? !0 : !1,
        b = Lk(),
        c = Ik();
      this.mj = 'firebase';
      this.Gh = ':';
      this.km = a;
      this.Hj = b;
      this.ik = c;
      this.kb = {};
      Mo || (Mo = new Lo());
      a = Mo;
      try {
        this.Aj =
          (!jk() && Wk()) || !p.indexedDB
            ? new a.Eg.wa()
            : new Go(Bk() ? new mo() : new a.Eg.wa());
      } catch (d) {
        (this.Aj = new mo()), (this.Hj = !0);
      }
      try {
        this.Xj = new a.Eg.Yf();
      } catch (d) {
        this.Xj = new mo();
      }
      this.ul = new mo();
      this.Rh = u(this.Vj, this);
      this.Ta = {};
    },
    ep,
    fp = function () {
      ep || (ep = new dp());
      return ep;
    },
    gp = function (a, b) {
      switch (b) {
        case 'session':
          return a.Xj;
        case 'none':
          return a.ul;
        default:
          return a.Aj;
      }
    };
  dp.prototype.tb = function (a, b) {
    return this.mj + this.Gh + a.name + (b ? this.Gh + b : '');
  };
  var hp = function (a, b, c) {
    var d = a.tb(b, c),
      e = gp(a, b.wa);
    return a.get(b, c).then(function (f) {
      var g = null;
      try {
        g = Ok(p.localStorage.getItem(d));
      } catch (h) {}
      if (g && !f) return p.localStorage.removeItem(d), a.set(b, g, c);
      g && f && 'localStorage' != e.type && p.localStorage.removeItem(d);
    });
  };
  k = dp.prototype;
  k.get = function (a, b) {
    return gp(this, a.wa).get(this.tb(a, b));
  };
  k.remove = function (a, b) {
    b = this.tb(a, b);
    'local' == a.wa && (this.Ta[b] = null);
    return gp(this, a.wa).remove(b);
  };
  k.set = function (a, b, c) {
    var d = this.tb(a, c),
      e = this,
      f = gp(this, a.wa);
    return f
      .set(d, b)
      .then(function () {
        return f.get(d);
      })
      .then(function (g) {
        'local' == a.wa && (e.Ta[d] = g);
      });
  };
  k.addListener = function (a, b, c) {
    a = this.tb(a, b);
    this.ik && (this.Ta[a] = p.localStorage.getItem(a));
    Ua(this.kb) && this.Ph();
    this.kb[a] || (this.kb[a] = []);
    this.kb[a].push(c);
  };
  k.removeListener = function (a, b, c) {
    a = this.tb(a, b);
    this.kb[a] &&
      (Pa(this.kb[a], function (d) {
        return d == c;
      }),
      0 == this.kb[a].length && delete this.kb[a]);
    Ua(this.kb) && this.Xf();
  };
  k.Ph = function () {
    gp(this, 'local').tc(this.Rh);
    this.Hj || ((jk() || !Wk()) && p.indexedDB) || !this.ik || ip(this);
  };
  var ip = function (a) {
      jp(a);
      a.Zg = setInterval(function () {
        for (var b in a.kb) {
          var c = p.localStorage.getItem(b),
            d = a.Ta[b];
          c != d &&
            ((a.Ta[b] = c),
            (c = new Vh({
              type: 'storage',
              key: b,
              target: window,
              oldValue: d,
              newValue: c,
              lh: !0,
            })),
            a.Vj(c));
        }
      }, 1e3);
    },
    jp = function (a) {
      a.Zg && (clearInterval(a.Zg), (a.Zg = null));
    };
  dp.prototype.Xf = function () {
    gp(this, 'local').Ec(this.Rh);
    jp(this);
  };
  dp.prototype.Vj = function (a) {
    if (a && a.Sk) {
      var b = a.ab.key;
      if (null == b)
        for (var c in this.kb) {
          var d = this.Ta[c];
          'undefined' === typeof d && (d = null);
          var e = p.localStorage.getItem(c);
          e !== d && ((this.Ta[c] = e), this.wg(c));
        }
      else if (0 == b.indexOf(this.mj + this.Gh) && this.kb[b]) {
        'undefined' !== typeof a.ab.lh
          ? gp(this, 'local').Ec(this.Rh)
          : jp(this);
        if (this.km)
          if (((c = p.localStorage.getItem(b)), (d = a.ab.newValue), d !== c))
            null !== d
              ? p.localStorage.setItem(b, d)
              : p.localStorage.removeItem(b);
          else if (this.Ta[b] === d && 'undefined' === typeof a.ab.lh) return;
        var f = this;
        c = function () {
          if (
            'undefined' !== typeof a.ab.lh ||
            f.Ta[b] !== p.localStorage.getItem(b)
          )
            (f.Ta[b] = p.localStorage.getItem(b)), f.wg(b);
        };
        Mb &&
        ac &&
        10 == ac &&
        p.localStorage.getItem(b) !== a.ab.newValue &&
        a.ab.newValue !== a.ab.oldValue
          ? setTimeout(c, 10)
          : c();
      }
    } else x(a, u(this.wg, this));
  };
  dp.prototype.wg = function (a) {
    this.kb[a] &&
      x(this.kb[a], function (b) {
        b();
      });
  };
  var kp = function (a) {
      this.W = a;
      this.T = fp();
    },
    mp = function (a) {
      return a.T.get(lp, a.W).then(function (b) {
        return nl(b);
      });
    },
    np = function (a) {
      return a.T.remove(lp, a.W);
    };
  kp.prototype.Hc = function (a) {
    this.T.addListener(lp, this.W, a);
  };
  kp.prototype.Md = function (a) {
    this.T.removeListener(lp, this.W, a);
  };
  var pp = function (a) {
      return a.T.get(op, a.W).then(function (b) {
        return nl(b);
      });
    },
    lp = { name: 'authEvent', wa: 'local' },
    op = { name: 'redirectEvent', wa: 'session' };
  var qp = function () {
    this.T = fp();
  };
  qp.prototype.ke = function () {
    return this.T.get(rp, void 0);
  };
  var rp = { name: 'sessionId', wa: 'session' };
  var sp = function () {
    this.ah = null;
    this.Ze = [];
  };
  sp.prototype.subscribe = function (a) {
    var b = this;
    this.Ze.push(a);
    this.ah ||
      ((this.ah = function (c) {
        for (var d = 0; d < b.Ze.length; d++) b.Ze[d](c);
      }),
      (a = N('universalLinks.subscribe', p)),
      'function' === typeof a && a(null, this.ah));
  };
  sp.prototype.unsubscribe = function (a) {
    Pa(this.Ze, function (b) {
      return b == a;
    });
  };
  var tp = null;
  var up = function (a, b, c, d, e, f) {
      this.Ba = a;
      this.ka = b;
      this.ma = c;
      this.O = f;
      this.Jc = d || null;
      this.Ka = e || null;
      this.Wj = b + ':' + c;
      this.lm = new qp();
      this.Hi = new kp(this.Wj);
      this.Tg = null;
      this.Zb = [];
      this.xl = 500;
      this.Ul = 2e3;
      this.oe = this.Kf = null;
    },
    vp = function (a) {
      return new P('invalid-cordova-configuration', a);
    };
  up.prototype.Tc = function () {
    return this.qe
      ? this.qe
      : (this.qe = yk().then(
          function () {
            if ('function' !== typeof N('universalLinks.subscribe', p))
              throw vp('cordova-universal-links-plugin-fix is not installed');
            if ('undefined' === typeof N('BuildInfo.packageName', p))
              throw vp('cordova-plugin-buildinfo is not installed');
            if (
              'function' !== typeof N('cordova.plugins.browsertab.openUrl', p)
            )
              throw vp('cordova-plugin-browsertab is not installed');
            if ('function' !== typeof N('cordova.InAppBrowser.open', p))
              throw vp('cordova-plugin-inappbrowser is not installed');
          },
          function () {
            throw new P('cordova-not-ready');
          },
        ));
  };
  var wp = function () {
      for (var a = 20, b = []; 0 < a; )
        b.push(
          '1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.charAt(
            Math.floor(62 * Math.random()),
          ),
        ),
          a--;
      return b.join('');
    },
    xp = function (a) {
      var b = new Rh();
      b.update(a);
      return Eh(b.digest());
    };
  k = up.prototype;
  k.Je = function (a, b) {
    b(new P('operation-not-supported-in-this-environment'));
    return F();
  };
  k.Ae = function () {
    return G(new P('operation-not-supported-in-this-environment'));
  };
  k.Yj = function () {
    return !1;
  };
  k.Tj = function () {
    return !0;
  };
  k.Oi = function () {
    return !0;
  };
  k.Be = function (a, b, c, d) {
    if (this.Kf) return G(new P('redirect-operation-pending'));
    var e = this,
      f = p.document,
      g = null,
      h = null,
      l = null,
      m = null;
    return (this.Kf = F()
      .then(function () {
        pm(b);
        return yp(e);
      })
      .then(function () {
        return zp(e, a, b, c, d);
      })
      .then(function () {
        return new E(function (q, y) {
          h = function () {
            var B = N('cordova.plugins.browsertab.close', p);
            q();
            'function' === typeof B && B();
            e.oe &&
              'function' === typeof e.oe.close &&
              (e.oe.close(), (e.oe = null));
            return !1;
          };
          e.Hc(h);
          l = function () {
            g ||
              (g = uj(e.Ul).then(function () {
                y(new P('redirect-cancelled-by-user'));
              }));
          };
          m = function () {
            Sk() && l();
          };
          f.addEventListener('resume', l, !1);
          ik()
            .toLowerCase()
            .match(/android/) || f.addEventListener('visibilitychange', m, !1);
        }).o(function (q) {
          return Ap(e).then(function () {
            throw q;
          });
        });
      })
      .Fc(function () {
        l && f.removeEventListener('resume', l, !1);
        m && f.removeEventListener('visibilitychange', m, !1);
        g && g.cancel();
        h && e.Md(h);
        e.Kf = null;
      }));
  };
  var zp = function (a, b, c, d, e) {
    var f = wp(),
      g = new ml(b, d, null, f, new P('no-auth-event'), null, e),
      h = N('BuildInfo.packageName', p);
    if ('string' !== typeof h) throw new P('invalid-cordova-configuration');
    var l = N('BuildInfo.displayName', p),
      m = {};
    if (
      ik()
        .toLowerCase()
        .match(/iphone|ipad|ipod/)
    )
      m.ibi = h;
    else if (
      ik()
        .toLowerCase()
        .match(/android/)
    )
      m.apn = h;
    else return G(new P('operation-not-supported-in-this-environment'));
    l && (m.appDisplayName = l);
    f = xp(f);
    m.sessionId = f;
    var q = Nn(a.Ba, a.ka, a.ma, b, c, null, d, a.Jc, m, a.Ka, e, a.O);
    return a
      .Tc()
      .then(function () {
        var y = a.Wj;
        return a.lm.T.set(lp, g.U(), y);
      })
      .then(function () {
        var y = N('cordova.plugins.browsertab.isAvailable', p);
        if ('function' !== typeof y)
          throw new P('invalid-cordova-configuration');
        var B = null;
        y(function (Q) {
          if (Q) {
            B = N('cordova.plugins.browsertab.openUrl', p);
            if ('function' !== typeof B)
              throw new P('invalid-cordova-configuration');
            B(q);
          } else {
            B = N('cordova.InAppBrowser.open', p);
            if ('function' !== typeof B)
              throw new P('invalid-cordova-configuration');
            Q = B;
            var Ca = ik();
            Ca = !(
              !Ca.match(/(iPad|iPhone|iPod).*OS 7_\d/i) &&
              !Ca.match(/(iPad|iPhone|iPod).*OS 8_\d/i)
            );
            a.oe = Q(q, Ca ? '_blank' : '_system', 'location=yes');
          }
        });
      });
  };
  up.prototype.de = function (a) {
    for (var b = 0; b < this.Zb.length; b++)
      try {
        this.Zb[b](a);
      } catch (c) {}
  };
  var yp = function (a) {
      a.Tg ||
        (a.Tg = a.Tc().then(function () {
          return new E(function (b) {
            var c = function (d) {
              b(d);
              a.Md(c);
              return !1;
            };
            a.Hc(c);
            Bp(a);
          });
        }));
      return a.Tg;
    },
    Ap = function (a) {
      var b = null;
      return mp(a.Hi)
        .then(function (c) {
          b = c;
          return np(a.Hi);
        })
        .then(function () {
          return b;
        });
    },
    Bp = function (a) {
      var b = new ml('unknown', null, null, null, new P('no-auth-event')),
        c = !1,
        d = uj(a.xl).then(function () {
          return Ap(a).then(function () {
            c || a.de(b);
          });
        }),
        e = function (g) {
          c = !0;
          d && d.cancel();
          Ap(a).then(function (h) {
            var l = b;
            if (h && g && g.url) {
              var m = null;
              l = vl(g.url);
              -1 != l.indexOf('/__/auth/callback') &&
                ((m = M(l)),
                (m = Ok(Zj(m, 'firebaseError') || null)),
                (m = (m = 'object' === typeof m ? ll(m) : null)
                  ? new ml(h.getType(), h.La, null, null, m, null, h.na)
                  : new ml(h.getType(), h.La, l, h.ke(), null, null, h.na)));
              l = m || b;
            }
            a.de(l);
          });
        },
        f = p.handleOpenURL;
      p.handleOpenURL = function (g) {
        0 ==
          g
            .toLowerCase()
            .indexOf(N('BuildInfo.packageName', p).toLowerCase() + '://') &&
          e({ url: g });
        if ('function' === typeof f)
          try {
            f(g);
          } catch (h) {
            console.error(h);
          }
      };
      tp || (tp = new sp());
      tp.subscribe(e);
    };
  up.prototype.Hc = function (a) {
    this.Zb.push(a);
    yp(this).o(function (b) {
      'auth/invalid-cordova-configuration' === b.code &&
        ((b = new ml('unknown', null, null, null, new P('no-auth-event'))),
        a(b));
    });
  };
  up.prototype.Md = function (a) {
    Pa(this.Zb, function (b) {
      return b == a;
    });
  };
  var Cp = function (a) {
      this.W = a;
      this.T = fp();
    },
    Ep = function (a) {
      return a.T.set(Dp, 'pending', a.W);
    },
    Fp = function (a) {
      return a.T.remove(Dp, a.W);
    },
    Gp = function (a) {
      return a.T.get(Dp, a.W).then(function (b) {
        return 'pending' == b;
      });
    },
    Dp = { name: 'pendingRedirect', wa: 'session' };
  var Lp = function (a, b, c, d) {
      this.Mf = {};
      this.Yg = 0;
      this.Ba = a;
      this.ka = b;
      this.ma = c;
      this.O = d;
      this.Le = [];
      this.Bd = !1;
      this.qg = u(this.Ng, this);
      this.Ac = new Hp(this);
      this.nh = new Ip(this);
      this.ye = new Cp(Jp(this.ka, this.ma));
      this.Gc = {};
      this.Gc.unknown = this.Ac;
      this.Gc.signInViaRedirect = this.Ac;
      this.Gc.linkViaRedirect = this.Ac;
      this.Gc.reauthViaRedirect = this.Ac;
      this.Gc.signInViaPopup = this.nh;
      this.Gc.linkViaPopup = this.nh;
      this.Gc.reauthViaPopup = this.nh;
      this.vb = Kp(this.Ba, this.ka, this.ma, hk, this.O);
    },
    Kp = function (a, b, c, d, e) {
      var f = firebase.SDK_VERSION || null;
      return xk() ? new up(a, b, c, f, d, e) : new Jn(a, b, c, f, d, e);
    };
  Lp.prototype.reset = function () {
    this.Bd = !1;
    this.vb.Md(this.qg);
    this.vb = Kp(this.Ba, this.ka, this.ma, null, this.O);
    this.Mf = {};
  };
  Lp.prototype.od = function () {
    this.Ac.od();
  };
  Lp.prototype.initialize = function () {
    var a = this;
    this.Bd || ((this.Bd = !0), this.vb.Hc(this.qg));
    var b = this.vb;
    return this.vb.Tc().o(function (c) {
      a.vb == b && a.reset();
      throw c;
    });
  };
  var Op = function (a) {
    a.vb.Tj() &&
      a.initialize().o(function (b) {
        var c = new ml(
          'unknown',
          null,
          null,
          null,
          new P('operation-not-supported-in-this-environment'),
        );
        Mp(b) && a.Ng(c);
      });
    a.vb.Oi() || Np(a.Ac);
  };
  k = Lp.prototype;
  k.subscribe = function (a) {
    Ma(this.Le, a) || this.Le.push(a);
    if (!this.Bd) {
      var b = this;
      Gp(this.ye)
        .then(function (c) {
          c
            ? Fp(b.ye).then(function () {
                b.initialize().o(function (d) {
                  var e = new ml(
                    'unknown',
                    null,
                    null,
                    null,
                    new P('operation-not-supported-in-this-environment'),
                  );
                  Mp(d) && b.Ng(e);
                });
              })
            : Op(b);
        })
        .o(function () {
          Op(b);
        });
    }
  };
  k.unsubscribe = function (a) {
    Pa(this.Le, function (b) {
      return b == a;
    });
  };
  k.Ng = function (a) {
    if (!a) throw new P('invalid-auth-event');
    6e5 <= Date.now() - this.Yg && ((this.Mf = {}), (this.Yg = 0));
    if (a && a.getUid() && this.Mf.hasOwnProperty(a.getUid())) return !1;
    for (var b = !1, c = 0; c < this.Le.length; c++) {
      var d = this.Le[c];
      if (d.hi(a.getType(), a.La)) {
        if ((b = this.Gc[a.getType()]))
          b.Cj(a, d),
            a &&
              (a.ke() || a.La) &&
              ((this.Mf[a.getUid()] = !0), (this.Yg = Date.now()));
        b = !0;
        break;
      }
    }
    Np(this.Ac);
    return b;
  };
  k.getRedirectResult = function () {
    return this.Ac.getRedirectResult();
  };
  k.Ae = function (a, b, c, d, e, f) {
    var g = this;
    return this.vb.Ae(
      a,
      b,
      c,
      function () {
        g.Bd || ((g.Bd = !0), g.vb.Hc(g.qg));
      },
      function () {
        g.reset();
      },
      d,
      e,
      f,
    );
  };
  var Mp = function (a) {
    return a && 'auth/cordova-not-ready' == a.code ? !0 : !1;
  };
  Lp.prototype.Be = function (a, b, c, d) {
    var e = this,
      f;
    return Ep(this.ye).then(function () {
      return e.vb
        .Be(a, b, c, d)
        .o(function (g) {
          if (Mp(g)) throw new P('operation-not-supported-in-this-environment');
          f = g;
          return Fp(e.ye).then(function () {
            throw f;
          });
        })
        .then(function () {
          return e.vb.Yj()
            ? new E(function () {})
            : Fp(e.ye)
                .then(function () {
                  return e.getRedirectResult();
                })
                .then(function () {})
                .o(function () {});
        });
    });
  };
  Lp.prototype.Je = function (a, b, c, d) {
    return this.vb.Je(
      c,
      function (e) {
        a.Zc(b, null, e, d);
      },
      Pp.get(),
    );
  };
  var Jp = function (a, b, c) {
      a = a + ':' + b;
      c && (a = a + ':' + c.url);
      return a;
    },
    Rp = function (a, b, c, d) {
      var e = Jp(b, c, d);
      Qp[e] || (Qp[e] = new Lp(a, b, c, d));
      return Qp[e];
    },
    Pp = new Rk(2e3, 1e4),
    Sp = new Rk(3e4, 6e4),
    Qp = {},
    Hp = function (a) {
      this.T = a;
      this.Ld = null;
      this.Ee = [];
      this.De = [];
      this.Kd = null;
      this.Zj = this.Fe = !1;
    };
  Hp.prototype.reset = function () {
    this.Ld = null;
    this.Kd && (this.Kd.cancel(), (this.Kd = null));
  };
  Hp.prototype.Cj = function (a, b) {
    if (a) {
      this.reset();
      this.Fe = !0;
      var c = a.getType(),
        d = a.La,
        e = a.getError() && 'auth/web-storage-unsupported' == a.getError().code,
        f =
          a.getError() &&
          'auth/operation-not-supported-in-this-environment' ==
            a.getError().code;
      this.Zj = !(!e && !f);
      'unknown' != c || e || f
        ? a.Db
          ? this.th(a, b)
          : b.ie(c, d)
          ? this.uh(a, b)
          : G(new P('invalid-auth-event'))
        : (Tp(this, !1, null, null), F());
    } else G(new P('invalid-auth-event'));
  };
  var Np = function (a) {
    a.Fe || ((a.Fe = !0), Tp(a, !1, null, null));
  };
  Hp.prototype.od = function () {
    this.Fe && !this.Zj && Tp(this, !1, null, null);
  };
  Hp.prototype.th = function (a) {
    Tp(this, !0, null, a.getError());
    F();
  };
  Hp.prototype.uh = function (a, b) {
    var c = this,
      d = a.La,
      e = a.getType();
    b = b.ie(e, d);
    d = a.Sd;
    e = a.ke();
    var f = a.oh,
      g = a.na,
      h = !!a.getType().match(/Redirect$/);
    b(d, e, g, f)
      .then(function (l) {
        Tp(c, h, l, null);
      })
      .o(function (l) {
        Tp(c, h, null, l);
      });
  };
  var Up = function (a, b) {
      a.Ld = function () {
        return G(b);
      };
      if (a.De.length) for (var c = 0; c < a.De.length; c++) a.De[c](b);
    },
    Vp = function (a, b) {
      a.Ld = function () {
        return F(b);
      };
      if (a.Ee.length) for (var c = 0; c < a.Ee.length; c++) a.Ee[c](b);
    },
    Tp = function (a, b, c, d) {
      b ? (d ? Up(a, d) : Vp(a, c)) : Vp(a, { user: null });
      a.Ee = [];
      a.De = [];
    };
  Hp.prototype.getRedirectResult = function () {
    var a = this;
    return new E(function (b, c) {
      a.Ld ? a.Ld().then(b, c) : (a.Ee.push(b), a.De.push(c), Wp(a));
    });
  };
  var Wp = function (a) {
      var b = new P('timeout');
      a.Kd && a.Kd.cancel();
      a.Kd = uj(Sp.get()).then(function () {
        a.Ld || ((a.Fe = !0), Tp(a, !0, null, b));
      });
    },
    Ip = function (a) {
      this.T = a;
    };
  Ip.prototype.Cj = function (a, b) {
    if (a) {
      var c = a.getType(),
        d = a.La;
      a.Db
        ? this.th(a, b)
        : b.ie(c, d)
        ? this.uh(a, b)
        : G(new P('invalid-auth-event'));
    } else G(new P('invalid-auth-event'));
  };
  Ip.prototype.th = function (a, b) {
    var c = a.La,
      d = a.getType();
    b.Zc(d, null, a.getError(), c);
    F();
  };
  Ip.prototype.uh = function (a, b) {
    var c = a.La,
      d = a.getType(),
      e = b.ie(d, c),
      f = a.Sd,
      g = a.ke();
    e(f, g, a.na, a.oh)
      .then(function (h) {
        b.Zc(d, h, null, c);
      })
      .o(function (h) {
        b.Zc(d, null, h, c);
      });
  };
  var Xp = function (a, b, c) {
    var d = b && b.mfaPendingCredential;
    if (!d)
      throw new P(
        'argument-error',
        'Internal assert: Invalid MultiFactorResolver',
      );
    this.Ve = a;
    this.Jk = Va(b);
    this.Ll = c;
    this.Mj = new Bl(null, d);
    this.Pi = [];
    var e = this;
    x(b.mfaInfo || [], function (f) {
      (f = ql(f)) && e.Pi.push(f);
    });
    O(this, 'auth', this.Ve);
    O(this, 'session', this.Mj);
    O(this, 'hints', this.Pi);
  };
  Xp.prototype.resolveSignIn = function (a) {
    var b = this;
    return a.process(this.Ve.u, this.Mj).then(function (c) {
      var d = Va(b.Jk);
      delete d.mfaInfo;
      delete d.mfaPendingCredential;
      Xa(d, c);
      return b.Ll(d);
    });
  };
  var Yp = function (a, b, c, d) {
    P.call(this, 'multi-factor-auth-required', d, b);
    this.am = new Xp(a, b, c);
    O(this, 'resolver', this.am);
  };
  n(Yp, P);
  var Zp = function (a, b, c) {
    if (
      a &&
      t(a.serverResponse) &&
      'auth/multi-factor-auth-required' === a.code
    )
      try {
        return new Yp(b, a.serverResponse, c, a.message);
      } catch (d) {}
    return null;
  };
  var $p = function () {};
  $p.prototype.process = function (a, b, c) {
    return 'enroll' == b.type ? aq(this, a, b, c) : bq(this, a, b);
  };
  var aq = function (a, b, c, d) {
      return c.je().then(function (e) {
        e = { idToken: e };
        'undefined' !== typeof d && (e.displayName = d);
        Xa(e, { phoneVerificationInfo: fm(a.dh) });
        return R(b, tn, e);
      });
    },
    bq = function (a, b, c) {
      return c.je().then(function (d) {
        d = { mfaPendingCredential: d };
        Xa(d, { phoneVerificationInfo: fm(a.dh) });
        return R(b, un, d);
      });
    },
    cq = function (a) {
      O(this, 'factorId', a.providerId);
      this.dh = a;
    };
  v(cq, $p);
  var dq = function (a) {
    cq.call(this, a);
    if (this.dh.providerId != jm.PROVIDER_ID)
      throw new P(
        'argument-error',
        'firebase.auth.PhoneMultiFactorAssertion requires a valid firebase.auth.PhoneAuthCredential',
      );
  };
  v(dq, cq);
  var eq = function (a, b) {
    Th.call(this, a);
    for (var c in b) this[c] = b[c];
  };
  n(eq, Th);
  var gq = function (a, b) {
      this.oc = a;
      this.ff = [];
      this.zm = u(this.ol, this);
      hi(this.oc, 'userReloaded', this.zm);
      var c = [];
      b &&
        b.multiFactor &&
        b.multiFactor.enrolledFactors &&
        x(b.multiFactor.enrolledFactors, function (d) {
          var e = null,
            f = {};
          if (d) {
            d.uid && (f.mfaEnrollmentId = d.uid);
            d.displayName && (f.displayName = d.displayName);
            d.enrollmentTime &&
              (f.enrolledAt = new Date(d.enrollmentTime).toISOString());
            d.phoneNumber && (f.phoneInfo = d.phoneNumber);
            try {
              e = new pl(f);
            } catch (g) {}
            d = e;
          } else d = null;
          d && c.push(d);
        });
      fq(this, c);
    },
    hq = function (a) {
      var b = [];
      x(a.mfaInfo || [], function (c) {
        (c = ql(c)) && b.push(c);
      });
      return b;
    };
  gq.prototype.ol = function (a) {
    fq(this, hq(a.Am));
  };
  var fq = function (a, b) {
    a.ff = b;
    O(a, 'enrolledFactors', b);
  };
  k = gq.prototype;
  k.copy = function (a) {
    fq(this, a.ff);
  };
  k.getSession = function () {
    return this.oc.getIdToken().then(function (a) {
      return new Bl(a, null);
    });
  };
  k.enroll = function (a, b) {
    var c = this,
      d = this.oc.u;
    return this.getSession()
      .then(function (e) {
        return a.process(d, e, b);
      })
      .then(function (e) {
        iq(c.oc, e);
        return c.oc.reload();
      });
  };
  k.unenroll = function (a) {
    var b = this,
      c = 'string' === typeof a ? a : a.uid,
      d = this.oc.u;
    return this.oc
      .getIdToken()
      .then(function (e) {
        return R(d, yn, { idToken: e, mfaEnrollmentId: c });
      })
      .then(function (e) {
        var f = Ja(b.ff, function (g) {
          return g.uid != c;
        });
        fq(b, f);
        iq(b.oc, e);
        return b.oc.reload().o(function (g) {
          if ('auth/user-token-expired' != g.code) throw g;
        });
      });
  };
  k.U = function () {
    return {
      multiFactor: {
        enrolledFactors: Ka(this.ff, function (a) {
          return a.U();
        }),
      },
    };
  };
  var jq = function (a) {
    this.u = a;
    this.Ya = this.Va = null;
    this.td = Date.now();
  };
  jq.prototype.U = function () {
    return {
      apiKey: this.u.ka,
      refreshToken: this.Va,
      accessToken: this.Ya && this.Ya.toString(),
      expirationTime: this.td,
    };
  };
  var kq = function (a, b) {
      'undefined' === typeof b &&
        (a.Ya ? ((b = a.Ya), (b = b.Ig - b.rl)) : (b = 0));
      a.td = Date.now() + 1e3 * b;
    },
    lq = function (a, b) {
      a.Ya = zl(b.idToken || '');
      a.Va = b.refreshToken;
      b = b.expiresIn;
      kq(a, 'undefined' !== typeof b ? Number(b) : void 0);
    };
  jq.prototype.copy = function (a) {
    this.Ya = a.Ya;
    this.Va = a.Va;
    this.td = a.td;
  };
  var mq = function (a, b) {
    return Im(a.u, b)
      .then(function (c) {
        a.Ya = zl(c.access_token);
        a.Va = c.refresh_token;
        kq(a, c.expires_in);
        return { accessToken: a.Ya.toString(), refreshToken: a.Va };
      })
      .o(function (c) {
        'auth/user-token-expired' == c.code && (a.Va = null);
        throw c;
      });
  };
  jq.prototype.getToken = function (a) {
    a = !!a;
    return this.Ya && !this.Va
      ? G(new P('user-token-expired'))
      : a || !this.Ya || Date.now() > this.td - 3e4
      ? this.Va
        ? mq(this, { grant_type: 'refresh_token', refresh_token: this.Va })
        : F(null)
      : F({ accessToken: this.Ya.toString(), refreshToken: this.Va });
  };
  var nq = function (a, b) {
    this.ni = a || null;
    this.dj = b || null;
    cl(this, { lastSignInTime: Vk(b || null), creationTime: Vk(a || null) });
  };
  nq.prototype.clone = function () {
    return new nq(this.ni, this.dj);
  };
  nq.prototype.U = function () {
    return { lastLoginAt: this.dj, createdAt: this.ni };
  };
  var oq = function (a, b, c, d, e, f) {
      cl(this, {
        uid: a,
        displayName: d || null,
        photoURL: e || null,
        email: c || null,
        phoneNumber: f || null,
        providerId: b,
      });
    },
    S = function (a, b, c) {
      si.call(this);
      this.Ma = [];
      this.ka = a.apiKey;
      this.ma = a.appName;
      this.Ba = a.authDomain || null;
      var d = firebase.SDK_VERSION ? Gk('JsCore', firebase.SDK_VERSION) : null;
      this.u = new xm(this.ka, gk(hk), d);
      (this.O = a.emulatorConfig || null) && Bm(this.u, this.O);
      this.Rb = new jq(this.u);
      pq(this, b.idToken);
      lq(this.Rb, b);
      O(this, 'refreshToken', this.Rb.Va);
      qq(this, c || {});
      this.ze = !1;
      this.Ba && Kk() && (this.ha = Rp(this.Ba, this.ka, this.ma, this.O));
      this.Wf = [];
      this.Sb = null;
      this.Id = rq(this);
      this.Ud = u(this.Pg, this);
      var e = this;
      this.Kb = null;
      this.sj = function (f) {
        e.Od(f.languageCode);
      };
      this.Wg = null;
      this.qj = function (f) {
        sq(e, f.emulatorConfig);
      };
      this.Dg = null;
      this.Fa = [];
      this.rj = function (f) {
        tq(e, f.Rk);
      };
      this.Jg = null;
      this.Df = new gq(this, c);
      O(this, 'multiFactor', this.Df);
    };
  n(S, si);
  S.prototype.Od = function (a) {
    this.Kb = a;
    zm(this.u, a);
  };
  var sq = function (a, b) {
      a.O = b;
      Bm(a.u, b);
      a.ha &&
        ((b = a.ha),
        (a.ha = Rp(a.Ba, a.ka, a.ma, a.O)),
        a.ze && (b.unsubscribe(a), a.ha.subscribe(a)));
    },
    uq = function (a, b) {
      a.Wg && pi(a.Wg, 'languageCodeChanged', a.sj);
      (a.Wg = b) && hi(b, 'languageCodeChanged', a.sj);
    },
    vq = function (a, b) {
      a.Dg && pi(a.Dg, 'emulatorConfigChanged', a.qj);
      (a.Dg = b) && hi(b, 'emulatorConfigChanged', a.qj);
    },
    tq = function (a, b) {
      a.Fa = b;
      Cm(
        a.u,
        firebase.SDK_VERSION ? Gk('JsCore', firebase.SDK_VERSION, a.Fa) : null,
      );
    },
    wq = function (a, b) {
      a.Jg && pi(a.Jg, 'frameworkChanged', a.rj);
      (a.Jg = b) && hi(b, 'frameworkChanged', a.rj);
    };
  S.prototype.Pg = function () {
    this.Id.Fd && (this.Id.stop(), this.Id.start());
  };
  var xq = function (a) {
      try {
        return firebase.app(a.ma).auth();
      } catch (b) {
        throw new P(
          'internal-error',
          "No firebase.auth.Auth instance is available for the Firebase App '" +
            a.ma +
            "'!",
        );
      }
    },
    rq = function (a) {
      return new So(
        function () {
          return a.getIdToken(!0);
        },
        function (b) {
          return b && 'auth/network-request-failed' == b.code ? !0 : !1;
        },
        function () {
          var b = a.Rb.td - Date.now() - 3e5;
          return 0 < b ? b : 0;
        },
      );
    },
    yq = function (a) {
      a.rd ||
        a.Id.Fd ||
        (a.Id.start(),
        pi(a, 'tokenChanged', a.Ud),
        hi(a, 'tokenChanged', a.Ud));
    },
    zq = function (a) {
      pi(a, 'tokenChanged', a.Ud);
      a.Id.stop();
    },
    pq = function (a, b) {
      a.cj = b;
      O(a, '_lat', b);
    },
    Aq = function (a, b) {
      Pa(a.Wf, function (c) {
        return c == b;
      });
    },
    Bq = function (a) {
      for (var b = [], c = 0; c < a.Wf.length; c++) b.push(a.Wf[c](a));
      return of(b).then(function () {
        return a;
      });
    },
    Cq = function (a) {
      a.ha && !a.ze && ((a.ze = !0), a.ha.subscribe(a));
    },
    qq = function (a, b) {
      cl(a, {
        uid: b.uid,
        displayName: b.displayName || null,
        photoURL: b.photoURL || null,
        email: b.email || null,
        emailVerified: b.emailVerified || !1,
        phoneNumber: b.phoneNumber || null,
        isAnonymous: b.isAnonymous || !1,
        tenantId: b.tenantId || null,
        metadata: new nq(b.createdAt, b.lastLoginAt),
        providerData: [],
      });
      a.u.na = a.tenantId;
    },
    Dq = function () {},
    Eq = function (a) {
      return F().then(function () {
        if (a.rd) throw new P('app-deleted');
      });
    },
    Fq = function (a) {
      return Ka(a.providerData, function (b) {
        return b.providerId;
      });
    },
    Hq = function (a, b) {
      b && (Gq(a, b.providerId), a.providerData.push(b));
    },
    Gq = function (a, b) {
      Pa(a.providerData, function (c) {
        return c.providerId == b;
      });
    },
    Iq = function (a, b, c) {
      ('uid' != b || c) && a.hasOwnProperty(b) && O(a, b, c);
    };
  S.prototype.copy = function (a) {
    var b = this;
    b != a &&
      (cl(this, {
        uid: a.uid,
        displayName: a.displayName,
        photoURL: a.photoURL,
        email: a.email,
        emailVerified: a.emailVerified,
        phoneNumber: a.phoneNumber,
        isAnonymous: a.isAnonymous,
        tenantId: a.tenantId,
        providerData: [],
      }),
      a.metadata
        ? O(this, 'metadata', a.metadata.clone())
        : O(this, 'metadata', new nq()),
      x(a.providerData, function (c) {
        Hq(b, c);
      }),
      this.Rb.copy(a.Rb),
      O(this, 'refreshToken', this.Rb.Va),
      this.Df.copy(a.Df));
  };
  S.prototype.reload = function () {
    var a = this;
    return this.N(
      Eq(this).then(function () {
        return Jq(a)
          .then(function () {
            return Bq(a);
          })
          .then(Dq);
      }),
    );
  };
  var Jq = function (a) {
    return a.getIdToken().then(function (b) {
      var c = a.isAnonymous;
      return R(a.u, vn, { idToken: b })
        .then(u(a.Ql, a))
        .then(function () {
          c || Iq(a, 'isAnonymous', !1);
          return b;
        });
    });
  };
  S.prototype.getIdTokenResult = function (a) {
    return this.getIdToken(a).then(function (b) {
      return new Al(b);
    });
  };
  S.prototype.getIdToken = function (a) {
    var b = this;
    return this.N(
      Eq(this)
        .then(function () {
          return b.Rb.getToken(a);
        })
        .then(function (c) {
          if (!c) throw new P('internal-error');
          c.accessToken != b.cj && (pq(b, c.accessToken), b.xc());
          Iq(b, 'refreshToken', c.refreshToken);
          return c.accessToken;
        }),
    );
  };
  var iq = function (a, b) {
    b.idToken &&
      a.cj != b.idToken &&
      (lq(a.Rb, b), a.xc(), pq(a, b.idToken), Iq(a, 'refreshToken', a.Rb.Va));
  };
  S.prototype.xc = function () {
    this.dispatchEvent(new eq('tokenChanged'));
  };
  S.prototype.Ql = function (a) {
    a = a.users;
    if (!a || !a.length) throw new P('internal-error');
    a = a[0];
    qq(this, {
      uid: a.localId,
      displayName: a.displayName,
      photoURL: a.photoUrl,
      email: a.email,
      emailVerified: !!a.emailVerified,
      phoneNumber: a.phoneNumber,
      lastLoginAt: a.lastLoginAt,
      createdAt: a.createdAt,
      tenantId: a.tenantId,
    });
    for (var b = Kq(a), c = 0; c < b.length; c++) Hq(this, b[c]);
    Iq(
      this,
      'isAnonymous',
      !(this.email && a.passwordHash) &&
        !(this.providerData && this.providerData.length),
    );
    this.dispatchEvent(new eq('userReloaded', { Am: a }));
  };
  var Kq = function (a) {
    return (a = a.providerUserInfo) && a.length
      ? Ka(a, function (b) {
          return new oq(
            b.rawId,
            b.providerId,
            b.email,
            b.displayName,
            b.photoUrl,
            b.phoneNumber,
          );
        })
      : [];
  };
  S.prototype.reauthenticateAndRetrieveDataWithCredential = function (a) {
    $k(
      'firebase.User.prototype.reauthenticateAndRetrieveDataWithCredential is deprecated. Please use firebase.User.prototype.reauthenticateWithCredential instead.',
    );
    return this.reauthenticateWithCredential(a);
  };
  S.prototype.reauthenticateWithCredential = function (a) {
    var b = this,
      c = null;
    return this.N(
      a
        .ve(this.u, this.uid)
        .then(function (d) {
          iq(b, d);
          c = Lq(b, d, 'reauthenticate');
          b.Sb = null;
          return b.reload();
        })
        .then(function () {
          return c;
        }),
      !0,
    );
  };
  var Mq = function (a, b) {
    return Jq(a).then(function () {
      if (Ma(Fq(a), b))
        return Bq(a).then(function () {
          throw new P('provider-already-linked');
        });
    });
  };
  S.prototype.linkAndRetrieveDataWithCredential = function (a) {
    $k(
      'firebase.User.prototype.linkAndRetrieveDataWithCredential is deprecated. Please use firebase.User.prototype.linkWithCredential instead.',
    );
    return this.linkWithCredential(a);
  };
  S.prototype.linkWithCredential = function (a) {
    var b = this,
      c = null;
    return this.N(
      Mq(this, a.providerId)
        .then(function () {
          return b.getIdToken();
        })
        .then(function (d) {
          return a.Cd(b.u, d);
        })
        .then(function (d) {
          c = Lq(b, d, 'link');
          return Nq(b, d);
        })
        .then(function () {
          return c;
        }),
    );
  };
  S.prototype.linkWithPhoneNumber = function (a, b) {
    var c = this;
    return this.N(
      Mq(this, 'phone').then(function () {
        return Ro(xq(c), a, b, u(c.linkWithCredential, c));
      }),
    );
  };
  S.prototype.reauthenticateWithPhoneNumber = function (a, b) {
    var c = this;
    return this.N(
      F().then(function () {
        return Ro(xq(c), a, b, u(c.reauthenticateWithCredential, c));
      }),
      !0,
    );
  };
  var Lq = function (a, b, c) {
      var d = om(b);
      b = ap(b);
      return dl({
        user: a,
        credential: d,
        additionalUserInfo: b,
        operationType: c,
      });
    },
    Nq = function (a, b) {
      iq(a, b);
      return a.reload().then(function () {
        return a;
      });
    };
  k = S.prototype;
  k.updateEmail = function (a) {
    var b = this;
    return this.N(
      this.getIdToken()
        .then(function (c) {
          return b.u.updateEmail(c, a);
        })
        .then(function (c) {
          iq(b, c);
          return b.reload();
        }),
    );
  };
  k.updatePhoneNumber = function (a) {
    var b = this;
    return this.N(
      this.getIdToken()
        .then(function (c) {
          return a.Cd(b.u, c);
        })
        .then(function (c) {
          iq(b, c);
          return b.reload();
        }),
    );
  };
  k.updatePassword = function (a) {
    var b = this;
    return this.N(
      this.getIdToken()
        .then(function (c) {
          return b.u.updatePassword(c, a);
        })
        .then(function (c) {
          iq(b, c);
          return b.reload();
        }),
    );
  };
  k.updateProfile = function (a) {
    if (void 0 === a.displayName && void 0 === a.photoURL) return Eq(this);
    var b = this;
    return this.N(
      this.getIdToken()
        .then(function (c) {
          return b.u.updateProfile(c, {
            displayName: a.displayName,
            photoUrl: a.photoURL,
          });
        })
        .then(function (c) {
          iq(b, c);
          Iq(b, 'displayName', c.displayName || null);
          Iq(b, 'photoURL', c.photoUrl || null);
          x(b.providerData, function (d) {
            'password' === d.providerId &&
              (O(d, 'displayName', b.displayName),
              O(d, 'photoURL', b.photoURL));
          });
          return Bq(b);
        })
        .then(Dq),
    );
  };
  k.unlink = function (a) {
    var b = this;
    return this.N(
      Jq(this).then(function (c) {
        return Ma(Fq(b), a)
          ? en(b.u, c, [a]).then(function (d) {
              var e = {};
              x(d.providerUserInfo || [], function (f) {
                e[f.providerId] = !0;
              });
              x(Fq(b), function (f) {
                e[f] || Gq(b, f);
              });
              e[jm.PROVIDER_ID] || O(b, 'phoneNumber', null);
              return Bq(b);
            })
          : Bq(b).then(function () {
              throw new P('no-such-provider');
            });
      }),
    );
  };
  k.delete = function () {
    var a = this;
    return this.N(
      this.getIdToken()
        .then(function (b) {
          return R(a.u, sn, { idToken: b });
        })
        .then(function () {
          a.dispatchEvent(new eq('userDeleted'));
        }),
    ).then(function () {
      a.destroy();
    });
  };
  k.hi = function (a, b) {
    return ('linkViaPopup' == a && (this.Ob || null) == b && this.Nb) ||
      ('reauthViaPopup' == a && (this.Ob || null) == b && this.Nb) ||
      ('linkViaRedirect' == a && (this.Bc || null) == b) ||
      ('reauthViaRedirect' == a && (this.Bc || null) == b)
      ? !0
      : !1;
  };
  k.Zc = function (a, b, c, d) {
    ('linkViaPopup' != a && 'reauthViaPopup' != a) ||
      d != (this.Ob || null) ||
      (c && this.Xc ? this.Xc(c) : b && !c && this.Nb && this.Nb(b),
      this.Na && (this.Na.cancel(), (this.Na = null)),
      delete this.Nb,
      delete this.Xc);
  };
  k.ie = function (a, b) {
    return 'linkViaPopup' == a && b == (this.Ob || null)
      ? u(this.Bi, this)
      : 'reauthViaPopup' == a && b == (this.Ob || null)
      ? u(this.Ci, this)
      : 'linkViaRedirect' == a && (this.Bc || null) == b
      ? u(this.Bi, this)
      : 'reauthViaRedirect' == a && (this.Bc || null) == b
      ? u(this.Ci, this)
      : null;
  };
  k.kf = function () {
    return Hk(this.uid + ':::');
  };
  k.linkWithPopup = function (a) {
    var b = this;
    return Oq(
      this,
      'linkViaPopup',
      a,
      function () {
        return Mq(b, a.providerId).then(function () {
          return Bq(b);
        });
      },
      !1,
    );
  };
  k.reauthenticateWithPopup = function (a) {
    return Oq(
      this,
      'reauthViaPopup',
      a,
      function () {
        return F();
      },
      !0,
    );
  };
  var Oq = function (a, b, c, d, e) {
    if (!Kk()) return G(new P('operation-not-supported-in-this-environment'));
    if (a.Sb && !e) return G(a.Sb);
    var f = jl(c.providerId),
      g = a.kf(),
      h = null;
    (!Lk() || Ak()) &&
      a.Ba &&
      c.isOAuthProvider &&
      (h = Nn(
        a.Ba,
        a.ka,
        a.ma,
        b,
        c,
        null,
        g,
        firebase.SDK_VERSION || null,
        null,
        null,
        a.tenantId,
        a.O,
      ));
    var l = rk(h, f && f.Hd, f && f.Gd);
    d = d()
      .then(function () {
        Pq(a);
        if (!e) return a.getIdToken().then(function () {});
      })
      .then(function () {
        return a.ha.Ae(l, b, c, g, !!h, a.tenantId);
      })
      .then(function () {
        return new E(function (m, q) {
          a.Zc(b, null, new P('cancelled-popup-request'), a.Ob || null);
          a.Nb = m;
          a.Xc = q;
          a.Ob = g;
          a.Na = a.ha.Je(a, b, l, g);
        });
      })
      .then(function (m) {
        l && qk(l);
        return m ? dl(m) : null;
      })
      .o(function (m) {
        l && qk(l);
        throw m;
      });
    return a.N(d, e);
  };
  S.prototype.linkWithRedirect = function (a) {
    var b = this;
    return Qq(
      this,
      'linkViaRedirect',
      a,
      function () {
        return Mq(b, a.providerId);
      },
      !1,
    );
  };
  S.prototype.reauthenticateWithRedirect = function (a) {
    return Qq(
      this,
      'reauthViaRedirect',
      a,
      function () {
        return F();
      },
      !0,
    );
  };
  var Qq = function (a, b, c, d, e) {
      if (!Kk()) return G(new P('operation-not-supported-in-this-environment'));
      if (a.Sb && !e) return G(a.Sb);
      var f = null,
        g = a.kf();
      d = d()
        .then(function () {
          Pq(a);
          if (!e) return a.getIdToken().then(function () {});
        })
        .then(function () {
          a.Bc = g;
          return Bq(a);
        })
        .then(function (h) {
          a.Cc && ((h = a.Cc), (h = h.T.set(Rq, a.U(), h.W)));
          return h;
        })
        .then(function () {
          return a.ha.Be(b, c, g, a.tenantId);
        })
        .o(function (h) {
          f = h;
          if (a.Cc) return Sq(a.Cc);
          throw f;
        })
        .then(function () {
          if (f) throw f;
        });
      return a.N(d, e);
    },
    Pq = function (a) {
      if (!a.ha || !a.ze) {
        if (a.ha && !a.ze) throw new P('internal-error');
        throw new P('auth-domain-config-required');
      }
    };
  k = S.prototype;
  k.Bi = function (a, b, c, d) {
    var e = this;
    this.Na && (this.Na.cancel(), (this.Na = null));
    var f = null;
    c = this.getIdToken()
      .then(function (g) {
        return Gl(e.u, {
          requestUri: a,
          postBody: d,
          sessionId: b,
          idToken: g,
        });
      })
      .then(function (g) {
        f = Lq(e, g, 'link');
        return Nq(e, g);
      })
      .then(function () {
        return f;
      });
    return this.N(c);
  };
  k.Ci = function (a, b, c, d) {
    var e = this;
    this.Na && (this.Na.cancel(), (this.Na = null));
    var f = null,
      g = F()
        .then(function () {
          return Dl(
            Hl(e.u, { requestUri: a, sessionId: b, postBody: d, tenantId: c }),
            e.uid,
          );
        })
        .then(function (h) {
          f = Lq(e, h, 'reauthenticate');
          iq(e, h);
          e.Sb = null;
          return e.reload();
        })
        .then(function () {
          return f;
        });
    return this.N(g, !0);
  };
  k.sendEmailVerification = function (a) {
    var b = this,
      c = null;
    return this.N(
      this.getIdToken()
        .then(function (d) {
          c = d;
          return 'undefined' === typeof a || Ua(a) ? {} : Po(new Oo(a));
        })
        .then(function (d) {
          return b.u.sendEmailVerification(c, d);
        })
        .then(function (d) {
          if (b.email != d) return b.reload();
        })
        .then(function () {}),
    );
  };
  k.verifyBeforeUpdateEmail = function (a, b) {
    var c = this,
      d = null;
    return this.N(
      this.getIdToken()
        .then(function (e) {
          d = e;
          return 'undefined' === typeof b || Ua(b) ? {} : Po(new Oo(b));
        })
        .then(function (e) {
          return c.u.verifyBeforeUpdateEmail(d, a, e);
        })
        .then(function (e) {
          if (c.email != e) return c.reload();
        })
        .then(function () {}),
    );
  };
  k.destroy = function () {
    for (var a = 0; a < this.Ma.length; a++) this.Ma[a].cancel('app-deleted');
    uq(this, null);
    vq(this, null);
    wq(this, null);
    this.Ma = [];
    this.rd = !0;
    zq(this);
    O(this, 'refreshToken', null);
    this.ha && this.ha.unsubscribe(this);
  };
  k.N = function (a, b) {
    var c = this,
      d = Tq(this, a, b);
    this.Ma.push(d);
    d.Fc(function () {
      Na(c.Ma, d);
    });
    return d.o(function (e) {
      var f = null;
      e &&
        'auth/multi-factor-auth-required' === e.code &&
        (f = Zp(e.U(), xq(c), u(c.Og, c)));
      throw f || e;
    });
  };
  k.Og = function (a) {
    var b = null,
      c = this;
    a = Dl(F(a), c.uid)
      .then(function (d) {
        b = Lq(c, d, 'reauthenticate');
        iq(c, d);
        c.Sb = null;
        return c.reload();
      })
      .then(function () {
        return b;
      });
    return this.N(a, !0);
  };
  var Tq = function (a, b, c) {
    return a.Sb && !c
      ? (b.cancel(), G(a.Sb))
      : b.o(function (d) {
          !d ||
            ('auth/user-disabled' != d.code &&
              'auth/user-token-expired' != d.code) ||
            (a.Sb || a.dispatchEvent(new eq('userInvalidated')), (a.Sb = d));
          throw d;
        });
  };
  S.prototype.toJSON = function () {
    return this.U();
  };
  S.prototype.U = function () {
    var a = {
      uid: this.uid,
      displayName: this.displayName,
      photoURL: this.photoURL,
      email: this.email,
      emailVerified: this.emailVerified,
      phoneNumber: this.phoneNumber,
      isAnonymous: this.isAnonymous,
      tenantId: this.tenantId,
      providerData: [],
      apiKey: this.ka,
      appName: this.ma,
      authDomain: this.Ba,
      stsTokenManager: this.Rb.U(),
      redirectEventId: this.Bc || null,
    };
    this.metadata && Xa(a, this.metadata.U());
    x(this.providerData, function (b) {
      var c = a.providerData,
        d = c.push,
        e = {},
        f;
      for (f in b) b.hasOwnProperty(f) && (e[f] = b[f]);
      d.call(c, e);
    });
    Xa(a, this.Df.U());
    return a;
  };
  var Uq = function (a) {
      if (!a.apiKey) return null;
      var b = {
          apiKey: a.apiKey,
          authDomain: a.authDomain,
          appName: a.appName,
          emulatorConfig: a.emulatorConfig,
        },
        c = {};
      if (a.stsTokenManager && a.stsTokenManager.accessToken) {
        c.idToken = a.stsTokenManager.accessToken;
        c.refreshToken = a.stsTokenManager.refreshToken || null;
        var d = a.stsTokenManager.expirationTime;
        d && (c.expiresIn = (d - Date.now()) / 1e3);
      } else return null;
      var e = new S(b, c, a);
      a.providerData &&
        x(a.providerData, function (f) {
          f && Hq(e, dl(f));
        });
      a.redirectEventId && (e.Bc = a.redirectEventId);
      return e;
    },
    Vq = function (a, b, c, d) {
      var e = new S(a, b);
      c && (e.Cc = c);
      d && tq(e, d);
      return e.reload().then(function () {
        return e;
      });
    },
    Wq = function (a, b, c, d) {
      b = b || { apiKey: a.ka, authDomain: a.Ba, appName: a.ma };
      var e = a.Rb,
        f = {};
      f.idToken = e.Ya && e.Ya.toString();
      f.refreshToken = e.Va;
      b = new S(b, f);
      c && (b.Cc = c);
      d && tq(b, d);
      b.copy(a);
      return b;
    };
  O(S.prototype, 'providerId', 'firebase');
  var Xq = function (a) {
      this.W = a;
      this.T = fp();
    },
    Sq = function (a) {
      return a.T.remove(Rq, a.W);
    },
    Yq = function (a, b) {
      return a.T.get(Rq, a.W).then(function (c) {
        c && b && (c.authDomain = b);
        return Uq(c || {});
      });
    },
    Rq = { name: 'redirectUser', wa: 'session' };
  var $q = function (a) {
    this.W = a;
    this.T = fp();
    this.Za = null;
    this.hh = this.Ug();
    this.T.addListener(Zq('local'), this.W, u(this.um, this));
  };
  $q.prototype.um = function () {
    var a = this,
      b = Zq('local');
    ar(this, function () {
      return F()
        .then(function () {
          return a.Za && 'local' != a.Za.wa ? a.T.get(b, a.W) : null;
        })
        .then(function (c) {
          if (c)
            return br(a, 'local').then(function () {
              a.Za = b;
            });
        });
    });
  };
  var br = function (a, b) {
    var c = [],
      d;
    for (d in bp) bp[d] !== b && c.push(a.T.remove(Zq(bp[d]), a.W));
    c.push(a.T.remove(cr, a.W));
    return nf(c);
  };
  $q.prototype.Ug = function () {
    var a = this,
      b = Zq('local'),
      c = Zq('session'),
      d = Zq('none');
    return hp(this.T, b, this.W)
      .then(function () {
        return a.T.get(c, a.W);
      })
      .then(function (e) {
        return e
          ? c
          : a.T.get(d, a.W).then(function (f) {
              return f
                ? d
                : a.T.get(b, a.W).then(function (g) {
                    return g
                      ? b
                      : a.T.get(cr, a.W).then(function (h) {
                          return h ? Zq(h) : b;
                        });
                  });
            });
      })
      .then(function (e) {
        a.Za = e;
        return br(a, e.wa);
      })
      .o(function () {
        a.Za || (a.Za = b);
      });
  };
  var Zq = function (a) {
    return { name: 'authUser', wa: a };
  };
  $q.prototype.setPersistence = function (a) {
    var b = null,
      c = this;
    cp(a);
    return ar(this, function () {
      return a != c.Za.wa
        ? c.T.get(c.Za, c.W)
            .then(function (d) {
              b = d;
              return br(c, a);
            })
            .then(function () {
              c.Za = Zq(a);
              if (b) return c.T.set(c.Za, b, c.W);
            })
        : F();
    });
  };
  var dr = function (a) {
      return ar(a, function () {
        return a.T.set(cr, a.Za.wa, a.W);
      });
    },
    er = function (a, b) {
      return ar(a, function () {
        return a.T.set(a.Za, b.U(), a.W);
      });
    },
    fr = function (a) {
      return ar(a, function () {
        return a.T.remove(a.Za, a.W);
      });
    },
    gr = function (a, b, c) {
      return ar(a, function () {
        return a.T.get(a.Za, a.W).then(function (d) {
          d && b && (d.authDomain = b);
          d && c && (d.emulatorConfig = c);
          return Uq(d || {});
        });
      });
    },
    ar = function (a, b) {
      a.hh = a.hh.then(b, b);
      return a.hh;
    },
    cr = { name: 'persistence', wa: 'session' };
  var T = function (a) {
    si.call(this);
    this.Cb = !1;
    this.Qj = new No();
    O(this, 'settings', this.Qj);
    O(this, 'app', a);
    if (this.V().options && this.V().options.apiKey)
      (a = firebase.SDK_VERSION ? Gk('JsCore', firebase.SDK_VERSION) : null),
        (this.u = new xm(
          this.V().options && this.V().options.apiKey,
          gk(hk),
          a,
        ));
    else throw new P('invalid-api-key');
    this.Ma = [];
    this.Ic = [];
    this.Td = [];
    this.Kl = firebase.INTERNAL.createSubscribe(u(this.vl, this));
    this.Re = void 0;
    this.Nl = firebase.INTERNAL.createSubscribe(u(this.wl, this));
    hr(this, null);
    a = this.V().options.apiKey;
    var b = this.V().name;
    this.Tb = new $q(a + ':' + b);
    a = this.V().options.apiKey;
    b = this.V().name;
    this.Yc = new Xq(a + ':' + b);
    this.Ue = this.N(ir(this));
    this.Pb = this.N(jr(this));
    this.zf = !1;
    this.Mg = u(this.vm, this);
    this.fk = u(this.vc, this);
    this.Ud = u(this.Pg, this);
    this.dk = u(this.ll, this);
    this.ek = u(this.nl, this);
    this.ha = null;
    kr(this);
    this.INTERNAL = {};
    this.INTERNAL['delete'] = u(this.delete, this);
    this.INTERNAL.logFramework = u(this.Dl, this);
    this.Nc = 0;
    lr(this);
    this.Fa = [];
    this.O = null;
  };
  n(T, si);
  T.prototype.setPersistence = function (a) {
    a = this.Tb.setPersistence(a);
    return this.N(a);
  };
  T.prototype.Od = function (a) {
    this.Kb === a ||
      this.Cb ||
      ((this.Kb = a), zm(this.u, this.Kb), this.dispatchEvent(new mr(this.Kb)));
  };
  T.prototype.useDeviceLanguage = function () {
    var a = p.navigator;
    this.Od(
      a
        ? (a.languages && a.languages[0]) ||
            a.language ||
            a.userLanguage ||
            null
        : null,
    );
  };
  T.prototype.useEmulator = function (a, b) {
    if (!this.O) {
      if (this.ha)
        throw new P(
          'argument-error',
          'useEmulator() must be called immediately following firebase.auth() initialization.',
        );
      b = b ? !!b.disableWarnings : !1;
      nr(b);
      this.O = { url: a, disableWarnings: b };
      this.Qj.ng = !0;
      Bm(this.u, this.O);
      this.dispatchEvent(new or(this.O));
    }
  };
  var nr = function (a) {
    'undefined' !== typeof console &&
      'function' === typeof console.info &&
      console.info(
        'WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.',
      );
    p.document &&
      !a &&
      wk().then(function () {
        var b = p.document.createElement('p');
        b.innerText =
          'Running in emulator mode. Do not use with production credentials.';
        b.style.position = 'fixed';
        b.style.width = '100%';
        b.style.backgroundColor = '#ffffff';
        b.style.border = '.1em solid #000000';
        b.style.color = '#b50000';
        b.style.bottom = '0px';
        b.style.left = '0px';
        b.style.margin = '0px';
        b.style.zIndex = 1e4;
        b.style.textAlign = 'center';
        b.classList.add('firebase-emulator-warning');
        p.document.body.appendChild(b);
      });
  };
  T.prototype.Dl = function (a) {
    this.Fa.push(a);
    Cm(
      this.u,
      firebase.SDK_VERSION ? Gk('JsCore', firebase.SDK_VERSION, this.Fa) : null,
    );
    this.dispatchEvent(new pr(this.Fa));
  };
  T.prototype.Kh = function (a) {
    this.na === a || this.Cb || ((this.na = a), (this.u.na = this.na));
  };
  var lr = function (a) {
    Object.defineProperty(a, 'lc', {
      get: function () {
        return this.Kb;
      },
      set: function (b) {
        this.Od(b);
      },
      enumerable: !1,
    });
    a.Kb = null;
    Object.defineProperty(a, 'ti', {
      get: function () {
        return this.na;
      },
      set: function (b) {
        this.Kh(b);
      },
      enumerable: !1,
    });
    a.na = null;
    Object.defineProperty(a, 'emulatorConfig', {
      get: function () {
        if (this.O) {
          var b = M(this.O.url);
          b = dl({
            protocol: b.Xa,
            host: b.Ia,
            port: b.Xb,
            options: dl({ disableWarnings: this.O.disableWarnings }),
          });
        } else b = null;
        return b;
      },
      enumerable: !1,
    });
  };
  T.prototype.toJSON = function () {
    return {
      apiKey: this.V().options.apiKey,
      authDomain: this.V().options.authDomain,
      appName: this.V().name,
      currentUser: U(this) && U(this).U(),
    };
  };
  var qr = function (a) {
      return a.Kk || G(new P('auth-domain-config-required'));
    },
    kr = function (a) {
      var b = a.V().options.authDomain,
        c = a.V().options.apiKey;
      b &&
        Kk() &&
        (a.Kk = a.Ue.then(function () {
          if (!a.Cb) {
            a.ha = Rp(b, c, a.V().name, a.O);
            a.ha.subscribe(a);
            U(a) && Cq(U(a));
            if (a.Dc) {
              Cq(a.Dc);
              var d = a.Dc;
              d.Od(a.Kb);
              uq(d, a);
              d = a.Dc;
              tq(d, a.Fa);
              wq(d, a);
              d = a.Dc;
              sq(d, a.O);
              vq(d, a);
              a.Dc = null;
            }
            return a.ha;
          }
        }));
    };
  k = T.prototype;
  k.hi = function (a, b) {
    switch (a) {
      case 'unknown':
      case 'signInViaRedirect':
        return !0;
      case 'signInViaPopup':
        return this.Ob == b && !!this.Nb;
      default:
        return !1;
    }
  };
  k.Zc = function (a, b, c, d) {
    'signInViaPopup' == a &&
      this.Ob == d &&
      (c && this.Xc ? this.Xc(c) : b && !c && this.Nb && this.Nb(b),
      this.Na && (this.Na.cancel(), (this.Na = null)),
      delete this.Nb,
      delete this.Xc);
  };
  k.ie = function (a, b) {
    return 'signInViaRedirect' == a ||
      ('signInViaPopup' == a && this.Ob == b && this.Nb)
      ? u(this.Ok, this)
      : null;
  };
  k.Ok = function (a, b, c, d) {
    var e = this,
      f = { requestUri: a, postBody: d, sessionId: b, tenantId: c };
    this.Na && (this.Na.cancel(), (this.Na = null));
    return e.Ue.then(function () {
      return rr(e, Fl(e.u, f));
    });
  };
  k.kf = function () {
    return Hk();
  };
  k.signInWithPopup = function (a) {
    if (!Kk()) return G(new P('operation-not-supported-in-this-environment'));
    var b = this,
      c = jl(a.providerId),
      d = this.kf(),
      e = null;
    (!Lk() || Ak()) &&
      this.V().options.authDomain &&
      a.isOAuthProvider &&
      (e = Nn(
        this.V().options.authDomain,
        this.V().options.apiKey,
        this.V().name,
        'signInViaPopup',
        a,
        null,
        d,
        firebase.SDK_VERSION || null,
        null,
        null,
        this.na,
        this.O,
      ));
    var f = rk(e, c && c.Hd, c && c.Gd);
    c = qr(this)
      .then(function (g) {
        return g.Ae(f, 'signInViaPopup', a, d, !!e, b.na);
      })
      .then(function () {
        return new E(function (g, h) {
          b.Zc('signInViaPopup', null, new P('cancelled-popup-request'), b.Ob);
          b.Nb = g;
          b.Xc = h;
          b.Ob = d;
          b.Na = b.ha.Je(b, 'signInViaPopup', f, d);
        });
      })
      .then(function (g) {
        f && qk(f);
        return g ? dl(g) : null;
      })
      .o(function (g) {
        f && qk(f);
        throw g;
      });
    return this.N(c);
  };
  k.signInWithRedirect = function (a) {
    if (!Kk()) return G(new P('operation-not-supported-in-this-environment'));
    var b = this,
      c = qr(this)
        .then(function () {
          return dr(b.Tb);
        })
        .then(function () {
          return b.ha.Be('signInViaRedirect', a, void 0, b.na);
        });
    return this.N(c);
  };
  var sr = function (a) {
    if (!Kk()) return G(new P('operation-not-supported-in-this-environment'));
    var b = qr(a)
      .then(function () {
        return a.ha.getRedirectResult();
      })
      .then(function (c) {
        return c ? dl(c) : null;
      });
    return a.N(b);
  };
  T.prototype.getRedirectResult = function () {
    var a = this;
    return sr(this)
      .then(function (b) {
        a.ha && a.ha.od();
        return b;
      })
      .o(function (b) {
        a.ha && a.ha.od();
        throw b;
      });
  };
  T.prototype.updateCurrentUser = function (a) {
    if (!a) return G(new P('null-user'));
    if (this.na != a.tenantId) return G(new P('tenant-id-mismatch'));
    var b = this,
      c = {};
    c.apiKey = this.V().options.apiKey;
    c.authDomain = this.V().options.authDomain;
    c.appName = this.V().name;
    var d = Wq(a, c, b.Yc, Qa(b.Fa));
    return this.N(
      this.Pb.then(function () {
        if (b.V().options.apiKey != a.ka) return d.reload();
      })
        .then(function () {
          if (U(b) && a.uid == U(b).uid) return U(b).copy(a), b.vc(a);
          hr(b, d);
          Cq(d);
          return b.vc(d);
        })
        .then(function () {
          b.xc();
        }),
    );
  };
  var tr = function (a, b) {
      var c = {};
      c.apiKey = a.V().options.apiKey;
      c.authDomain = a.V().options.authDomain;
      c.appName = a.V().name;
      a.O && (c.emulatorConfig = a.O);
      return a.Ue.then(function () {
        return Vq(c, b, a.Yc, Qa(a.Fa));
      })
        .then(function (d) {
          if (U(a) && d.uid == U(a).uid) return U(a).copy(d), a.vc(d);
          hr(a, d);
          Cq(d);
          return a.vc(d);
        })
        .then(function () {
          a.xc();
        });
    },
    hr = function (a, b) {
      U(a) &&
        (Aq(U(a), a.fk),
        pi(U(a), 'tokenChanged', a.Ud),
        pi(U(a), 'userDeleted', a.dk),
        pi(U(a), 'userInvalidated', a.ek),
        zq(U(a)));
      b &&
        (b.Wf.push(a.fk),
        hi(b, 'tokenChanged', a.Ud),
        hi(b, 'userDeleted', a.dk),
        hi(b, 'userInvalidated', a.ek),
        0 < a.Nc && yq(b));
      O(a, 'currentUser', b);
      b && (b.Od(a.Kb), uq(b, a), tq(b, a.Fa), wq(b, a), sq(b, a.O), vq(b, a));
    };
  T.prototype.signOut = function () {
    var a = this,
      b = this.Pb.then(function () {
        a.ha && a.ha.od();
        if (!U(a)) return F();
        hr(a, null);
        return fr(a.Tb).then(function () {
          a.xc();
        });
      });
    return this.N(b);
  };
  var ur = function (a) {
      var b = a.V().options.authDomain;
      b = Yq(a.Yc, b).then(function (c) {
        if ((a.Dc = c)) c.Cc = a.Yc;
        return Sq(a.Yc);
      });
      return a.N(b);
    },
    ir = function (a) {
      var b = a.V().options.authDomain,
        c = ur(a)
          .then(function () {
            return gr(a.Tb, b, a.O);
          })
          .then(function (d) {
            return d
              ? ((d.Cc = a.Yc),
                a.Dc && (a.Dc.Bc || null) == (d.Bc || null)
                  ? d
                  : d
                      .reload()
                      .then(function () {
                        return er(a.Tb, d).then(function () {
                          return d;
                        });
                      })
                      .o(function (e) {
                        return 'auth/network-request-failed' == e.code
                          ? d
                          : fr(a.Tb);
                      }))
              : null;
          })
          .then(function (d) {
            hr(a, d || null);
          });
      return a.N(c);
    },
    jr = function (a) {
      return a.Ue.then(function () {
        return sr(a);
      })
        .o(function () {})
        .then(function () {
          if (!a.Cb) return a.Mg();
        })
        .o(function () {})
        .then(function () {
          if (!a.Cb) {
            a.zf = !0;
            var b = a.Tb;
            b.T.addListener(Zq('local'), b.W, a.Mg);
          }
        });
    };
  k = T.prototype;
  k.vm = function () {
    var a = this,
      b = this.V().options.authDomain;
    return gr(this.Tb, b).then(function (c) {
      if (!a.Cb) {
        var d;
        if ((d = U(a) && c)) {
          d = U(a).uid;
          var e = c.uid;
          d =
            void 0 === d ||
            null === d ||
            '' === d ||
            void 0 === e ||
            null === e ||
            '' === e
              ? !1
              : d == e;
        }
        if (d) return U(a).copy(c), U(a).getIdToken();
        if (U(a) || c)
          hr(a, c),
            c && (Cq(c), (c.Cc = a.Yc)),
            a.ha && a.ha.subscribe(a),
            a.xc();
      }
    });
  };
  k.vc = function (a) {
    return er(this.Tb, a);
  };
  k.Pg = function () {
    this.xc();
    this.vc(U(this));
  };
  k.ll = function () {
    this.signOut();
  };
  k.nl = function () {
    this.signOut();
  };
  var rr = function (a, b) {
    var c = null,
      d = null;
    return a.N(
      b
        .then(
          function (e) {
            c = om(e);
            d = ap(e);
            return tr(a, e);
          },
          function (e) {
            var f = null;
            e &&
              'auth/multi-factor-auth-required' === e.code &&
              (f = Zp(e.U(), a, u(a.Og, a)));
            throw f || e;
          },
        )
        .then(function () {
          return dl({
            user: U(a),
            credential: c,
            additionalUserInfo: d,
            operationType: 'signIn',
          });
        }),
    );
  };
  k = T.prototype;
  k.Og = function (a) {
    var b = this;
    return this.Pb.then(function () {
      return rr(b, F(a));
    });
  };
  k.vl = function (a) {
    var b = this;
    this.addAuthTokenListener(function () {
      a.next(U(b));
    });
  };
  k.wl = function (a) {
    var b = this;
    vr(this, function () {
      a.next(U(b));
    });
  };
  k.onIdTokenChanged = function (a, b, c) {
    var d = this;
    this.zf &&
      firebase.Promise.resolve().then(function () {
        'function' === typeof a
          ? a(U(d))
          : 'function' === typeof a.next && a.next(U(d));
      });
    return this.Kl(a, b, c);
  };
  k.onAuthStateChanged = function (a, b, c) {
    var d = this;
    this.zf &&
      firebase.Promise.resolve().then(function () {
        d.Re = d.getUid();
        'function' === typeof a
          ? a(U(d))
          : 'function' === typeof a.next && a.next(U(d));
      });
    return this.Nl(a, b, c);
  };
  k.Tk = function (a) {
    var b = this,
      c = this.Pb.then(function () {
        return U(b)
          ? U(b)
              .getIdToken(a)
              .then(function (d) {
                return { accessToken: d };
              })
          : null;
      });
    return this.N(c);
  };
  k.signInWithCustomToken = function (a) {
    var b = this;
    return this.Pb.then(function () {
      return rr(b, R(b.u, xn, { token: a }));
    }).then(function (c) {
      var d = c.user;
      Iq(d, 'isAnonymous', !1);
      b.vc(d);
      return c;
    });
  };
  k.signInWithEmailAndPassword = function (a, b) {
    var c = this;
    return this.Pb.then(function () {
      return rr(c, R(c.u, Zl, { email: a, password: b }));
    });
  };
  k.createUserWithEmailAndPassword = function (a, b) {
    var c = this;
    return this.Pb.then(function () {
      return rr(c, R(c.u, rn, { email: a, password: b }));
    });
  };
  k.signInWithCredential = function (a) {
    var b = this;
    return this.Pb.then(function () {
      return rr(b, a.Pc(b.u));
    });
  };
  k.signInAndRetrieveDataWithCredential = function (a) {
    $k(
      'firebase.auth.Auth.prototype.signInAndRetrieveDataWithCredential is deprecated. Please use firebase.auth.Auth.prototype.signInWithCredential instead.',
    );
    return this.signInWithCredential(a);
  };
  k.signInAnonymously = function () {
    var a = this;
    return this.Pb.then(function () {
      var b = U(a);
      if (b && b.isAnonymous) {
        var c = dl({ providerId: null, isNewUser: !1 });
        return dl({
          user: b,
          credential: null,
          additionalUserInfo: c,
          operationType: 'signIn',
        });
      }
      return rr(a, a.u.signInAnonymously()).then(function (d) {
        var e = d.user;
        Iq(e, 'isAnonymous', !0);
        a.vc(e);
        return d;
      });
    });
  };
  k.V = function () {
    return this.app;
  };
  var U = function (a) {
    return a.currentUser;
  };
  T.prototype.getUid = function () {
    return (U(this) && U(this).uid) || null;
  };
  var wr = function (a) {
    return (U(a) && U(a)._lat) || null;
  };
  k = T.prototype;
  k.xc = function () {
    if (this.zf) {
      for (var a = 0; a < this.Ic.length; a++)
        if (this.Ic[a]) this.Ic[a](wr(this));
      if (this.Re !== this.getUid() && this.Td.length)
        for (this.Re = this.getUid(), a = 0; a < this.Td.length; a++)
          if (this.Td[a]) this.Td[a](wr(this));
    }
  };
  k.rk = function (a) {
    this.addAuthTokenListener(a);
    this.Nc++;
    0 < this.Nc && U(this) && yq(U(this));
  };
  k.Vl = function (a) {
    var b = this;
    x(this.Ic, function (c) {
      c == a && b.Nc--;
    });
    0 > this.Nc && (this.Nc = 0);
    0 == this.Nc && U(this) && zq(U(this));
    this.removeAuthTokenListener(a);
  };
  k.addAuthTokenListener = function (a) {
    var b = this;
    this.Ic.push(a);
    this.N(
      this.Pb.then(function () {
        b.Cb || (Ma(b.Ic, a) && a(wr(b)));
      }),
    );
  };
  k.removeAuthTokenListener = function (a) {
    Pa(this.Ic, function (b) {
      return b == a;
    });
  };
  var vr = function (a, b) {
    a.Td.push(b);
    a.N(
      a.Pb.then(function () {
        !a.Cb &&
          Ma(a.Td, b) &&
          a.Re !== a.getUid() &&
          ((a.Re = a.getUid()), b(wr(a)));
      }),
    );
  };
  k = T.prototype;
  k.delete = function () {
    this.Cb = !0;
    for (var a = 0; a < this.Ma.length; a++) this.Ma[a].cancel('app-deleted');
    this.Ma = [];
    this.Tb && ((a = this.Tb), a.T.removeListener(Zq('local'), a.W, this.Mg));
    this.ha && (this.ha.unsubscribe(this), this.ha.od());
    return firebase.Promise.resolve();
  };
  k.N = function (a) {
    var b = this;
    this.Ma.push(a);
    a.Fc(function () {
      Na(b.Ma, a);
    });
    return a;
  };
  k.fetchSignInMethodsForEmail = function (a) {
    return this.N(Nm(this.u, a));
  };
  k.isSignInWithEmailLink = function (a) {
    return !!cm(a);
  };
  k.sendSignInLinkToEmail = function (a, b) {
    var c = this;
    return this.N(
      F()
        .then(function () {
          var d = new Oo(b);
          if (!d.ii)
            throw new P(
              'argument-error',
              'handleCodeInApp must be true when sending sign in link to email',
            );
          return Po(d);
        })
        .then(function (d) {
          return c.u.sendSignInLinkToEmail(a, d);
        })
        .then(function () {}),
    );
  };
  k.verifyPasswordResetCode = function (a) {
    return this.checkActionCode(a).then(function (b) {
      return b.data.email;
    });
  };
  k.confirmPasswordReset = function (a, b) {
    return this.N(this.u.confirmPasswordReset(a, b).then(function () {}));
  };
  k.checkActionCode = function (a) {
    return this.N(
      this.u.checkActionCode(a).then(function (b) {
        return new rl(b);
      }),
    );
  };
  k.applyActionCode = function (a) {
    return this.N(this.u.applyActionCode(a).then(function () {}));
  };
  k.sendPasswordResetEmail = function (a, b) {
    var c = this;
    return this.N(
      F()
        .then(function () {
          return 'undefined' === typeof b || Ua(b) ? {} : Po(new Oo(b));
        })
        .then(function (d) {
          return c.u.sendPasswordResetEmail(a, d);
        })
        .then(function () {}),
    );
  };
  k.signInWithPhoneNumber = function (a, b) {
    return this.N(Ro(this, a, b, u(this.signInWithCredential, this)));
  };
  k.signInWithEmailLink = function (a, b) {
    var c = this;
    return this.N(
      F().then(function () {
        b = b || kk();
        var d = dm(a, b),
          e = cm(b);
        if (!e) throw new P('argument-error', 'Invalid email link!');
        if (e.tenantId !== c.na) throw new P('tenant-id-mismatch');
        return c.signInWithCredential(d);
      }),
    );
  };
  var mr = function (a) {
    Th.call(this, 'languageCodeChanged');
    this.languageCode = a;
  };
  n(mr, Th);
  var or = function (a) {
    Th.call(this, 'emulatorConfigChanged');
    this.emulatorConfig = a;
  };
  n(or, Th);
  var pr = function (a) {
    Th.call(this, 'frameworkChanged');
    this.Rk = a;
  };
  n(pr, Th);
  var yr = function (a, b, c, d) {
      a: {
        c = Array.prototype.slice.call(c);
        var e = 0;
        for (var f = !1, g = 0; g < b.length; g++)
          if (b[g].optional) f = !0;
          else {
            if (f)
              throw new P(
                'internal-error',
                'Argument validator encountered a required argument after an optional argument.',
              );
            e++;
          }
        f = b.length;
        if (c.length < e || f < c.length)
          d =
            'Expected ' +
            (e == f
              ? 1 == e
                ? '1 argument'
                : e + ' arguments'
              : e + '-' + f + ' arguments') +
            ' but got ' +
            c.length +
            '.';
        else {
          for (e = 0; e < c.length; e++)
            if (
              ((f = b[e].optional && void 0 === c[e]), !b[e].Ea(c[e]) && !f)
            ) {
              b = b[e];
              if (0 > e || e >= xr.length)
                throw new P(
                  'internal-error',
                  'Argument validator received an unsupported number of arguments.',
                );
              c = xr[e];
              d =
                (d ? '' : c + ' argument ') +
                (b.name ? '"' + b.name + '" ' : '') +
                'must be ' +
                b.Ha +
                '.';
              break a;
            }
          d = null;
        }
      }
      if (d) throw new P('argument-error', a + ' failed: ' + d);
    },
    xr = 'First Second Third Fourth Fifth Sixth Seventh Eighth Ninth'.split(
      ' ',
    ),
    V = function (a, b) {
      return {
        name: a || '',
        Ha: 'a valid string',
        optional: !!b,
        Ea: function (c) {
          return 'string' === typeof c;
        },
      };
    },
    zr = function (a, b) {
      return {
        name: a || '',
        Ha: 'a boolean',
        optional: !!b,
        Ea: function (c) {
          return 'boolean' === typeof c;
        },
      };
    },
    W = function (a, b) {
      return { name: a || '', Ha: 'a valid object', optional: !!b, Ea: t };
    },
    Ar = function (a, b) {
      return { name: a || '', Ha: 'a function', optional: !!b, Ea: cc };
    },
    Br = function (a, b) {
      return {
        name: a || '',
        Ha: 'null',
        optional: !!b,
        Ea: function (c) {
          return null === c;
        },
      };
    },
    Cr = function () {
      return {
        name: '',
        Ha: 'an HTML element',
        optional: !1,
        Ea: function (a) {
          return !!(a && a instanceof Element);
        },
      };
    },
    Dr = function () {
      return {
        name: 'auth',
        Ha: 'an instance of Firebase Auth',
        optional: !0,
        Ea: function (a) {
          return !!(a && a instanceof T);
        },
      };
    },
    Er = function () {
      return {
        name: 'app',
        Ha: 'an instance of Firebase App',
        optional: !0,
        Ea: function (a) {
          return !!(a && a instanceof firebase.app.App);
        },
      };
    },
    Fr = function (a) {
      return {
        name: a ? a + 'Credential' : 'credential',
        Ha: a ? 'a valid ' + a + ' credential' : 'a valid credential',
        optional: !1,
        Ea: function (b) {
          if (!b) return !1;
          var c = !a || b.providerId === a;
          return !(!b.Pc || !c);
        },
      };
    },
    Gr = function () {
      return {
        name: 'multiFactorAssertion',
        Ha: 'a valid multiFactorAssertion',
        optional: !1,
        Ea: function (a) {
          return a ? !!a.process : !1;
        },
      };
    },
    Hr = function () {
      return {
        name: 'authProvider',
        Ha: 'a valid Auth provider',
        optional: !1,
        Ea: function (a) {
          return !!(
            a &&
            a.providerId &&
            a.hasOwnProperty &&
            a.hasOwnProperty('isOAuthProvider')
          );
        },
      };
    },
    Ir = function (a, b) {
      return (
        t(a) &&
        'string' === typeof a.type &&
        a.type === b &&
        'function' === typeof a.je
      );
    },
    Jr = function (a) {
      return t(a) && 'string' === typeof a.uid;
    },
    Kr = function () {
      return {
        name: 'applicationVerifier',
        Ha: 'an implementation of firebase.auth.ApplicationVerifier',
        optional: !1,
        Ea: function (a) {
          return !(
            !a ||
            'string' !== typeof a.type ||
            'function' !== typeof a.verify
          );
        },
      };
    },
    X = function (a, b, c, d) {
      return {
        name: c || '',
        Ha: a.Ha + ' or ' + b.Ha,
        optional: !!d,
        Ea: function (e) {
          return a.Ea(e) || b.Ea(e);
        },
      };
    };
  var Y = function (a, b) {
      for (var c in b) {
        var d = b[c].name;
        a[d] = Lr(d, a[c], b[c].j);
      }
    },
    Mr = function (a, b) {
      for (var c in b) {
        var d = b[c].name;
        d !== c &&
          Object.defineProperty(a, d, {
            get: va(function (e) {
              return this[e];
            }, c),
            set: va(
              function (e, f, g, h) {
                yr(e, [g], [h], !0);
                this[f] = h;
              },
              d,
              c,
              b[c].og,
            ),
            enumerable: !0,
          });
      }
    },
    Z = function (a, b, c, d) {
      a[b] = Lr(b, c, d);
    },
    Lr = function (a, b, c) {
      if (!c) return b;
      var d = Nr(a);
      a = function () {
        var f = Array.prototype.slice.call(arguments);
        yr(d, c, f);
        return b.apply(this, f);
      };
      for (var e in b) a[e] = b[e];
      for (e in b.prototype) a.prototype[e] = b.prototype[e];
      return a;
    },
    Nr = function (a) {
      a = a.split('.');
      return a[a.length - 1];
    };
  function Or() {}
  O(Or, 'FACTOR_ID', 'phone');
  Y(T.prototype, {
    applyActionCode: { name: 'applyActionCode', j: [V('code')] },
    checkActionCode: { name: 'checkActionCode', j: [V('code')] },
    confirmPasswordReset: {
      name: 'confirmPasswordReset',
      j: [V('code'), V('newPassword')],
    },
    createUserWithEmailAndPassword: {
      name: 'createUserWithEmailAndPassword',
      j: [V('email'), V('password')],
    },
    fetchSignInMethodsForEmail: {
      name: 'fetchSignInMethodsForEmail',
      j: [V('email')],
    },
    getRedirectResult: { name: 'getRedirectResult', j: [] },
    isSignInWithEmailLink: {
      name: 'isSignInWithEmailLink',
      j: [V('emailLink')],
    },
    onAuthStateChanged: {
      name: 'onAuthStateChanged',
      j: [
        X(W(), Ar(), 'nextOrObserver'),
        Ar('opt_error', !0),
        Ar('opt_completed', !0),
      ],
    },
    onIdTokenChanged: {
      name: 'onIdTokenChanged',
      j: [
        X(W(), Ar(), 'nextOrObserver'),
        Ar('opt_error', !0),
        Ar('opt_completed', !0),
      ],
    },
    sendPasswordResetEmail: {
      name: 'sendPasswordResetEmail',
      j: [
        V('email'),
        X(
          W('opt_actionCodeSettings', !0),
          Br(null, !0),
          'opt_actionCodeSettings',
          !0,
        ),
      ],
    },
    sendSignInLinkToEmail: {
      name: 'sendSignInLinkToEmail',
      j: [V('email'), W('actionCodeSettings')],
    },
    setPersistence: { name: 'setPersistence', j: [V('persistence')] },
    signInAndRetrieveDataWithCredential: {
      name: 'signInAndRetrieveDataWithCredential',
      j: [Fr()],
    },
    signInAnonymously: { name: 'signInAnonymously', j: [] },
    signInWithCredential: { name: 'signInWithCredential', j: [Fr()] },
    signInWithCustomToken: { name: 'signInWithCustomToken', j: [V('token')] },
    signInWithEmailAndPassword: {
      name: 'signInWithEmailAndPassword',
      j: [V('email'), V('password')],
    },
    signInWithEmailLink: {
      name: 'signInWithEmailLink',
      j: [V('email'), V('emailLink', !0)],
    },
    signInWithPhoneNumber: {
      name: 'signInWithPhoneNumber',
      j: [V('phoneNumber'), Kr()],
    },
    signInWithPopup: { name: 'signInWithPopup', j: [Hr()] },
    signInWithRedirect: { name: 'signInWithRedirect', j: [Hr()] },
    updateCurrentUser: {
      name: 'updateCurrentUser',
      j: [
        X(
          (function (a) {
            return {
              name: 'user',
              Ha: 'an instance of Firebase User',
              optional: !!a,
              Ea: function (b) {
                return !!(b && b instanceof S);
              },
            };
          })(),
          Br(),
          'user',
        ),
      ],
    },
    signOut: { name: 'signOut', j: [] },
    toJSON: { name: 'toJSON', j: [V(null, !0)] },
    useDeviceLanguage: { name: 'useDeviceLanguage', j: [] },
    useEmulator: { name: 'useEmulator', j: [V('url'), W('options', !0)] },
    verifyPasswordResetCode: {
      name: 'verifyPasswordResetCode',
      j: [V('code')],
    },
  });
  Mr(T.prototype, {
    lc: { name: 'languageCode', og: X(V(), Br(), 'languageCode') },
    ti: { name: 'tenantId', og: X(V(), Br(), 'tenantId') },
  });
  T.Persistence = bp;
  T.Persistence.LOCAL = 'local';
  T.Persistence.SESSION = 'session';
  T.Persistence.NONE = 'none';
  Y(S.prototype, {
    delete: { name: 'delete', j: [] },
    getIdTokenResult: {
      name: 'getIdTokenResult',
      j: [zr('opt_forceRefresh', !0)],
    },
    getIdToken: { name: 'getIdToken', j: [zr('opt_forceRefresh', !0)] },
    linkAndRetrieveDataWithCredential: {
      name: 'linkAndRetrieveDataWithCredential',
      j: [Fr()],
    },
    linkWithCredential: { name: 'linkWithCredential', j: [Fr()] },
    linkWithPhoneNumber: {
      name: 'linkWithPhoneNumber',
      j: [V('phoneNumber'), Kr()],
    },
    linkWithPopup: { name: 'linkWithPopup', j: [Hr()] },
    linkWithRedirect: { name: 'linkWithRedirect', j: [Hr()] },
    reauthenticateAndRetrieveDataWithCredential: {
      name: 'reauthenticateAndRetrieveDataWithCredential',
      j: [Fr()],
    },
    reauthenticateWithCredential: {
      name: 'reauthenticateWithCredential',
      j: [Fr()],
    },
    reauthenticateWithPhoneNumber: {
      name: 'reauthenticateWithPhoneNumber',
      j: [V('phoneNumber'), Kr()],
    },
    reauthenticateWithPopup: { name: 'reauthenticateWithPopup', j: [Hr()] },
    reauthenticateWithRedirect: {
      name: 'reauthenticateWithRedirect',
      j: [Hr()],
    },
    reload: { name: 'reload', j: [] },
    sendEmailVerification: {
      name: 'sendEmailVerification',
      j: [
        X(
          W('opt_actionCodeSettings', !0),
          Br(null, !0),
          'opt_actionCodeSettings',
          !0,
        ),
      ],
    },
    toJSON: { name: 'toJSON', j: [V(null, !0)] },
    unlink: { name: 'unlink', j: [V('provider')] },
    updateEmail: { name: 'updateEmail', j: [V('email')] },
    updatePassword: { name: 'updatePassword', j: [V('password')] },
    updatePhoneNumber: { name: 'updatePhoneNumber', j: [Fr('phone')] },
    updateProfile: { name: 'updateProfile', j: [W('profile')] },
    verifyBeforeUpdateEmail: {
      name: 'verifyBeforeUpdateEmail',
      j: [
        V('email'),
        X(
          W('opt_actionCodeSettings', !0),
          Br(null, !0),
          'opt_actionCodeSettings',
          !0,
        ),
      ],
    },
  });
  Y(Tn.prototype, {
    execute: { name: 'execute' },
    render: { name: 'render' },
    reset: { name: 'reset' },
    getResponse: { name: 'getResponse' },
  });
  Y(On.prototype, {
    execute: { name: 'execute' },
    render: { name: 'render' },
    reset: { name: 'reset' },
    getResponse: { name: 'getResponse' },
  });
  Y(E.prototype, {
    Fc: { name: 'finally' },
    o: { name: 'catch' },
    then: { name: 'then' },
  });
  Mr(No.prototype, {
    appVerificationDisabled: {
      name: 'appVerificationDisabledForTesting',
      og: zr('appVerificationDisabledForTesting'),
    },
  });
  Y(Qo.prototype, { confirm: { name: 'confirm', j: [V('verificationCode')] } });
  Z(
    Cl,
    'fromJSON',
    function (a) {
      a = 'string' === typeof a ? JSON.parse(a) : a;
      for (var b, c = [Kl, bm, im, Il], d = 0; d < c.length; d++)
        if ((b = c[d](a))) return b;
      return null;
    },
    [X(V(), W(), 'json')],
  );
  Z(
    Wl,
    'credential',
    function (a, b) {
      return new Xl(a, b);
    },
    [V('email'), V('password')],
  );
  Y(Xl.prototype, { U: { name: 'toJSON', j: [V(null, !0)] } });
  Y(Ol.prototype, {
    addScope: { name: 'addScope', j: [V('scope')] },
    setCustomParameters: {
      name: 'setCustomParameters',
      j: [W('customOAuthParameters')],
    },
  });
  Z(Ol, 'credential', Pl, [X(V(), W(), 'token')]);
  Z(Wl, 'credentialWithLink', dm, [V('email'), V('emailLink')]);
  Y(Ql.prototype, {
    addScope: { name: 'addScope', j: [V('scope')] },
    setCustomParameters: {
      name: 'setCustomParameters',
      j: [W('customOAuthParameters')],
    },
  });
  Z(Ql, 'credential', Rl, [X(V(), W(), 'token')]);
  Y(Sl.prototype, {
    addScope: { name: 'addScope', j: [V('scope')] },
    setCustomParameters: {
      name: 'setCustomParameters',
      j: [W('customOAuthParameters')],
    },
  });
  Z(Sl, 'credential', Tl, [
    X(V(), X(W(), Br()), 'idToken'),
    X(V(), Br(), 'accessToken', !0),
  ]);
  Y(Ul.prototype, {
    setCustomParameters: {
      name: 'setCustomParameters',
      j: [W('customOAuthParameters')],
    },
  });
  Z(Ul, 'credential', Vl, [X(V(), W(), 'token'), V('secret', !0)]);
  Y(Nl.prototype, {
    addScope: { name: 'addScope', j: [V('scope')] },
    credential: {
      name: 'credential',
      j: [
        X(V(), X(W(), Br()), 'optionsOrIdToken'),
        X(V(), Br(), 'accessToken', !0),
      ],
    },
    setCustomParameters: {
      name: 'setCustomParameters',
      j: [W('customOAuthParameters')],
    },
  });
  Y(Jl.prototype, { U: { name: 'toJSON', j: [V(null, !0)] } });
  Y(El.prototype, { U: { name: 'toJSON', j: [V(null, !0)] } });
  Z(jm, 'credential', nm, [V('verificationId'), V('verificationCode')]);
  Y(jm.prototype, {
    verifyPhoneNumber: {
      name: 'verifyPhoneNumber',
      j: [
        X(
          V(),
          (function (a, b) {
            return {
              name: a || 'phoneInfoOptions',
              Ha: 'valid phone info options',
              optional: !!b,
              Ea: function (c) {
                return c
                  ? c.session && c.phoneNumber
                    ? Ir(c.session, 'enroll') &&
                      'string' === typeof c.phoneNumber
                    : c.session && c.multiFactorHint
                    ? Ir(c.session, 'signin') && Jr(c.multiFactorHint)
                    : c.session && c.multiFactorUid
                    ? Ir(c.session, 'signin') &&
                      'string' === typeof c.multiFactorUid
                    : c.phoneNumber
                    ? 'string' === typeof c.phoneNumber
                    : !1
                  : !1;
              },
            };
          })(),
          'phoneInfoOptions',
        ),
        Kr(),
      ],
    },
  });
  Y(em.prototype, { U: { name: 'toJSON', j: [V(null, !0)] } });
  Y(P.prototype, { toJSON: { name: 'toJSON', j: [V(null, !0)] } });
  Y(qm.prototype, { toJSON: { name: 'toJSON', j: [V(null, !0)] } });
  Y(wl.prototype, { toJSON: { name: 'toJSON', j: [V(null, !0)] } });
  Y(Yp.prototype, { toJSON: { name: 'toJSON', j: [V(null, !0)] } });
  Y(Xp.prototype, { resolveSignIn: { name: 'resolveSignIn', j: [Gr()] } });
  Y(gq.prototype, {
    getSession: { name: 'getSession', j: [] },
    enroll: { name: 'enroll', j: [Gr(), V('displayName', !0)] },
    unenroll: {
      name: 'unenroll',
      j: [
        X(
          {
            name: 'multiFactorInfo',
            Ha: 'a valid multiFactorInfo',
            optional: !1,
            Ea: Jr,
          },
          V(),
          'multiFactorInfoIdentifier',
        ),
      ],
    },
  });
  Y(eo.prototype, {
    clear: { name: 'clear', j: [] },
    render: { name: 'render', j: [] },
    verify: { name: 'verify', j: [] },
  });
  Z(tl, 'parseLink', ul, [V('link')]);
  Z(
    Or,
    'assertion',
    function (a) {
      return new dq(a);
    },
    [Fr('phone')],
  );
  (function () {
    if (
      'undefined' !== typeof firebase &&
      firebase.INTERNAL &&
      firebase.INTERNAL.registerService
    ) {
      var a = {
        ActionCodeInfo: {
          Operation: {
            EMAIL_SIGNIN: 'EMAIL_SIGNIN',
            PASSWORD_RESET: 'PASSWORD_RESET',
            RECOVER_EMAIL: 'RECOVER_EMAIL',
            REVERT_SECOND_FACTOR_ADDITION: 'REVERT_SECOND_FACTOR_ADDITION',
            VERIFY_AND_CHANGE_EMAIL: 'VERIFY_AND_CHANGE_EMAIL',
            VERIFY_EMAIL: 'VERIFY_EMAIL',
          },
        },
        Auth: T,
        AuthCredential: Cl,
        Error: P,
      };
      Z(a, 'EmailAuthProvider', Wl, []);
      Z(a, 'FacebookAuthProvider', Ol, []);
      Z(a, 'GithubAuthProvider', Ql, []);
      Z(a, 'GoogleAuthProvider', Sl, []);
      Z(a, 'TwitterAuthProvider', Ul, []);
      Z(a, 'OAuthProvider', Nl, [V('providerId')]);
      Z(a, 'SAMLAuthProvider', Ml, [V('providerId')]);
      Z(a, 'PhoneAuthProvider', jm, [Dr()]);
      Z(a, 'RecaptchaVerifier', eo, [
        X(V(), Cr(), 'recaptchaContainer'),
        W('recaptchaParameters', !0),
        Er(),
      ]);
      Z(a, 'ActionCodeURL', tl, []);
      Z(a, 'PhoneMultiFactorGenerator', Or, []);
      firebase.INTERNAL.registerService(
        'auth',
        function (b, c) {
          b = new T(b);
          c({
            INTERNAL: {
              getUid: u(b.getUid, b),
              getToken: u(b.Tk, b),
              addAuthTokenListener: u(b.rk, b),
              removeAuthTokenListener: u(b.Vl, b),
            },
          });
          return b;
        },
        a,
        function (b, c) {
          if ('create' === b)
            try {
              c.auth();
            } catch (d) {}
        },
      );
      firebase.INTERNAL.extendNamespace({ User: S });
    } else
      throw Error(
        'Cannot find the firebase namespace; be sure to include firebase-app.js before this library.',
      );
  })();
  var Pr = function (a) {
    this.ih = Bf.getParentIframe();
    this.Mb = this.ih.getOrigin();
    this.Lb = a;
    this.Qh = !1;
  };
  Pr.prototype.Qc = function () {
    return this.Mb;
  };
  Pr.prototype.start = function () {
    var a = this;
    return this.Lb(this.Mb)
      .then(function () {
        a.Qh = !0;
      })
      .o(function () {
        throw new wl(a.Qc());
      });
  };
  Pr.prototype.sendMessage = function (a) {
    var b = this;
    if (this.Qh)
      return new E(function (c) {
        b.ih.send(a.type, a, c, Ef);
      });
    throw new P('missing-iframe-start');
  };
  Pr.prototype.zh = function (a, b) {
    if (this.Qh) this.ih.register(a, b, Ef);
    else throw new P('missing-iframe-start');
  };
  var Qr = function (a) {
    this.If = new Pr(a);
  };
  Qr.prototype.Qc = function () {
    return this.If.Qc();
  };
  Qr.prototype.start = function () {
    var a = this;
    return this.If.start().then(function () {
      a.Ah();
    });
  };
  var Rr = function (a, b) {
    return a.If.sendMessage({ type: 'authEvent', authEvent: b && b.U() }).then(
      function (c) {
        if (!c || !c.length || 'ACK' != c[c.length - 1].status)
          throw new P('internal-error');
      },
    );
  };
  Qr.prototype.Ah = function () {
    this.If.zh('webStorageSupport', function () {
      return F({ status: 'ACK', webStorageSupport: !0 });
    });
  };
  var Sr = function (a, b, c) {
    var d = (Zj(M(kk()), 'fw') || '').split(','),
      e = this;
    this.ka = a;
    this.ma = b;
    this.Ka = c || null;
    this.Fa = d || [];
    this.Pd = new kp(this.ka + ':' + this.ma);
    this.Hl = new qp();
    this.u = new xm(a, gk(this.Ka), Gk('Iframe', '2.9.2', this.Fa));
    this.wc = new Qr(function (f) {
      return Pm(e.u).then(function (g) {
        if (!uk(g, f)) throw (e.destroy(), new wl(f));
      });
    });
    this.zc = ko(p);
    this.Ui = !1;
    this.zc.subscribe('getParentOrigin', function (f) {
      if (f === p.window.location.origin) return F(e.wc.Qc());
      throw Error('Invalid origin');
    });
    this.zc.subscribe('sendAuthEvent', function (f, g) {
      var h = g.storageKey,
        l = null;
      try {
        l = nl(g.authEvent);
      } catch (m) {}
      if (f === p.window.location.origin && h === e.ka + ':' + e.ma && l)
        return e.Ui
          ? Rr(e.wc, l)
              .then(function () {
                return !0;
              })
              .o(function () {
                return !1;
              })
          : e.Hl.T.set(lp, l.U(), h)
              .then(function () {
                return !0;
              })
              .o(function () {
                return !1;
              });
      throw Error('Invalid origin or request');
    });
  };
  Sr.prototype.Qc = function () {
    return this.wc.Qc();
  };
  Sr.prototype.start = function () {
    var a = this;
    return this.wc.start().then(function () {
      a.Ui = !0;
      a.uj = a.tj.bind(a);
      return Tr(a).Fc(function () {
        a.Pd.Hc(a.uj);
        a.tj(!1);
      });
    });
  };
  Sr.prototype.tj = function (a) {
    var b = this,
      c = null;
    return mp(this.Pd)
      .then(function (d) {
        if ((c = d)) return Rr(b.wc, d);
        if (a)
          return Rr(
            b.wc,
            new ml('unknown', null, null, null, new P('no-auth-event')),
          );
      })
      .then(function () {
        if (c) return np(b.Pd);
      })
      .o(function () {});
  };
  var Tr = function (a) {
    var b = null;
    return pp(a.Pd)
      .then(function (c) {
        if ((b = c)) return Rr(a.wc, c);
        c = Ik() ? 'no-auth-event' : 'web-storage-unsupported';
        return Rr(a.wc, new ml('unknown', null, null, null, new P(c)));
      })
      .then(function () {
        if (b) {
          var c = a.Pd;
          return c.T.remove(op, c.W);
        }
      })
      .o(function () {});
  };
  Sr.prototype.destroy = function () {
    this.rd = !0;
    this.Pd.Md(this.uj);
    this.zc.unsubscribe('getParentOrigin');
    this.zc.unsubscribe('sendAuthEvent');
  };
  var Ur = null,
    Vr = function () {
      var a = Zj(M(kk()), 'apiKey'),
        b = Zj(M(kk()), 'appName') || '';
      if (!a) throw new P('invalid-api-key');
      var c = Zj(M(kk()), 'eid') || null;
      Ur = new Sr(a, b, c);
      Ur.start().o(function (d) {
        if (d && 'auth/unauthorized-domain' == d.code)
          (d = M(Ur.Qc())),
            (d =
              'chrome-extension' == d.Xa
                ? ic(
                    'Info: The current chrome extension ID is not authorized for OAuth operations. This will prevent signInWithPopup and linkWithPopup from working. Add your chrome extension (chrome-extension://%s) to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.',
                    d.Ia,
                  )
                : ic(
                    'Info: The current domain is not authorized for OAuth operations. This will prevent signInWithPopup, signInWithRedirect, linkWithPopup and linkWithRedirect from working. Add your domain (%s) to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.',
                    d.Ia,
                  )),
            Uk(d);
        else throw d;
      });
    };
  r('fireauth.iframe.AuthRelay.initialize', function () {
    'complete' == p.document.readyState
      ? Vr()
      : gi(window, 'load', function () {
          Vr();
        });
  });
}.call(this));