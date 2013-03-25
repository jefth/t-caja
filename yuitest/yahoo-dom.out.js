{
  ___.loadModule({
      'instantiate': function (___, IMPORTS___) {
        var dis___ = IMPORTS___;
        var moduleResult___, x0___, x1___, x2___, x3___, x4___, x5___, x6___,
        x7___, x8___, x9___, x10___, x11___, x12___, x13___, x14___, x15___,
        x16___, x17___, x18___, x19___, x20___, x21___, x22___, x23___, x24___,
        x25___, x26___, x27___, x28___, x29___, x30___, x31___, x32___, x33___,
        x34___, x35___, x36___, x37___, x38___, x39___, x40___, x41___, x42___,
        x43___, x44___, x45___, x46___, x47___, x48___, x49___, x50___, x51___,
        x52___, x53___, x54___, x55___, x56___, x57___, x58___, x59___, x60___,
        x61___, x62___, x63___, x64___, x65___, x66___, x67___;
        moduleResult___ = ___.NO_RESULT;
        if (typeof IMPORTS___.v___('YAHOO') == 'undefined' || !
          (IMPORTS___.YAHOO_v___? IMPORTS___.YAHOO: ___.ri(IMPORTS___, 'YAHOO')
          )) {
          IMPORTS___.w___('YAHOO', ___.iM([ ]));
        }
        x0___ = IMPORTS___.YAHOO_v___? IMPORTS___.YAHOO: ___.ri(IMPORTS___,
          'YAHOO'), x1___ = (function () {
            function namespace$_meth() {
              {
                ___.deodorize(arguments, -6);
                var a___ = ___.args(arguments);
              }
              var a, o, i, j, d, x0___;
              a = a___, o = null;
              for (i = 0; i < a.length; i = i + 1) {
                d = (x0___ = '' + a.v___(i), x0___.split_m___? x0___.split('.')
                  : x0___.m___('split', [ '.' ]));
                o = IMPORTS___.YAHOO_v___? IMPORTS___.YAHOO: ___.ri(IMPORTS___,
                  'YAHOO');
                for (j = d[ +0 ] == 'YAHOO'? 1: 0; j < d.length; j = j + 1) {
                  o.w___(d.v___(j), o.v___(d.v___(j)) || ___.iM([ ]));
                  o = o.v___(d.v___(j));
                }
              }
              return o;
            }
            return ___.f(namespace$_meth, 'namespace$_meth');
          })(), x0___.namespace_w___ === x0___? (x0___.namespace = x1___):
        x0___.w___('namespace', x1___);
        x2___ = IMPORTS___.YAHOO_v___? IMPORTS___.YAHOO: ___.ri(IMPORTS___,
          'YAHOO'), x3___ = (function () {
            function log$_meth(msg, cat, src) {
              var l, x0___, x1___;
              l = (x1___ = (x0___ = IMPORTS___.YAHOO_v___? IMPORTS___.YAHOO:
                  ___.ri(IMPORTS___, 'YAHOO'), x0___.widget_v___? x0___.widget:
                  x0___.v___('widget')), x1___.Logger_v___? x1___.Logger:
                x1___.v___('Logger'));
              if (l && (l.log_v___? l.log: l.v___('log'))) {
                return l.log_m___? l.log(msg, cat, src): l.m___('log', [ msg,
                    cat, src ]);
              } else { return false; }
            }
            return ___.f(log$_meth, 'log$_meth');
          })(), x2___.log_w___ === x2___? (x2___.log = x3___):
        x2___.w___('log', x3___);
        x4___ = IMPORTS___.YAHOO_v___? IMPORTS___.YAHOO: ___.ri(IMPORTS___,
          'YAHOO'), x5___ = (function () {
            function register$_meth(name, mainClass, data) {
              var mods, x0___, x1___, m, v, b, ls, i, x2___, x3___, x4___,
              x5___, x6___, x7___;
              mods = (x1___ = (x0___ = IMPORTS___.YAHOO_v___? IMPORTS___.YAHOO:
                  ___.ri(IMPORTS___, 'YAHOO'), x0___.env_v___? x0___.env:
                  x0___.v___('env')), x1___.modules_v___? x1___.modules:
                x1___.v___('modules'));
              if (!mods.v___(name)) {
                mods.w___(name, ___.iM([ 'versions', [ ], 'builds', [ ] ]));
              }
              m = mods.v___(name);
              v = data.version_v___? data.version: data.v___('version');
              b = data.build_v___? data.build: data.v___('build');
              ls = (x3___ = (x2___ = IMPORTS___.YAHOO_v___? IMPORTS___.YAHOO:
                  ___.ri(IMPORTS___, 'YAHOO'), x2___.env_v___? x2___.env:
                  x2___.v___('env')), x3___.listeners_v___? x3___.listeners:
                x3___.v___('listeners'));
              m.name_w___ === m? (m.name = name): m.w___('name', name);
              m.version_w___ === m? (m.version = v): m.w___('version', v);
              m.build_w___ === m? (m.build = b): m.w___('build', b);
              x4___ = m.versions_v___? m.versions: m.v___('versions'),
              x4___.push_m___? x4___.push(v): x4___.m___('push', [ v ]);
              x5___ = m.builds_v___? m.builds: m.v___('builds'),
              x5___.push_m___? x5___.push(b): x5___.m___('push', [ b ]);
              m.mainClass_w___ === m? (m.mainClass = mainClass):
              m.w___('mainClass', mainClass);
              for (i = 0; i < ls.length; i = i + 1) {
                ls.m___(i, [ m ]);
              }
              if (mainClass) {
                mainClass.VERSION_w___ === mainClass? (mainClass.VERSION = v):
                mainClass.w___('VERSION', v);
                mainClass.BUILD_w___ === mainClass? (mainClass.BUILD = b):
                mainClass.w___('BUILD', b);
              } else {
                x6___ = IMPORTS___.YAHOO_v___? IMPORTS___.YAHOO:
                ___.ri(IMPORTS___, 'YAHOO'), x7___ =
                  'mainClass is undefined for module ' + name, x6___.log_m___?
                  x6___.log(x7___, 'warn'): x6___.m___('log', [ x7___, 'warn' ]
                );
              }
            }
            return ___.f(register$_meth, 'register$_meth');
          })(), x4___.register_w___ === x4___? (x4___.register = x5___):
        x4___.w___('register', x5___);
        x6___ = IMPORTS___.YAHOO_v___? IMPORTS___.YAHOO: ___.ri(IMPORTS___,
          'YAHOO'), x8___ = (x7___ = IMPORTS___.YAHOO_v___? IMPORTS___.YAHOO:
          ___.ri(IMPORTS___, 'YAHOO'), x7___.env_v___? x7___.env:
          x7___.v___('env')) || ___.iM([ 'modules', [ ], 'listeners', [ ] ]),
        x6___.env_w___ === x6___? (x6___.env = x8___): x6___.w___('env', x8___)
          ;
        x10___ = (x9___ = IMPORTS___.YAHOO_v___? IMPORTS___.YAHOO:
          ___.ri(IMPORTS___, 'YAHOO'), x9___.env_v___? x9___.env:
          x9___.v___('env')), x11___ = (function () {
            function getVersion$_meth(name) {
              var x0___, x1___;
              return (x1___ = (x0___ = IMPORTS___.YAHOO_v___? IMPORTS___.YAHOO:
                  ___.ri(IMPORTS___, 'YAHOO'), x0___.env_v___? x0___.env:
                  x0___.v___('env')), x1___.modules_v___? x1___.modules:
                x1___.v___('modules')).v___(name) || null;
            }
            return ___.f(getVersion$_meth, 'getVersion$_meth');
          })(), x10___.getVersion_w___ === x10___? (x10___.getVersion = x11___)
          : x10___.w___('getVersion', x11___);
        x13___ = (x12___ = IMPORTS___.YAHOO_v___? IMPORTS___.YAHOO:
          ___.ri(IMPORTS___, 'YAHOO'), x12___.env_v___? x12___.env:
          x12___.v___('env')), x14___ = ___.f(function () {
            var o, ua, x0___, m, x1___, x2___, x3___, x4___, x5___, x6___,
            x7___, x8___, x9___, x10___, x11___, x12___, x13___, x14___,
            x15___, x16___, x17___, x18___, x19___;
            o = ___.iM([ 'ie', 0, 'opera', 0, 'gecko', 0, 'webkit', 0,
                'mobile', null, 'air', 0, 'caja', 0 ]), ua = (x0___ =
              IMPORTS___.navigator_v___? IMPORTS___.navigator:
              ___.ri(IMPORTS___, 'navigator'), x0___.userAgent_v___?
              x0___.userAgent: x0___.v___('userAgent'));
            if (x1___ = new RegExp.new___('KHTML'), x1___.test_m___?
              x1___.test(ua): x1___.m___('test', [ ua ])) {
              o.webkit_w___ === o? (o.webkit = 1): o.w___('webkit', 1);
            }
            m = (x2___ = new RegExp.new___('AppleWebKit\\/([^\\s]*)'),
              ua.match_m___? ua.match(x2___): ua.m___('match', [ x2___ ]));
            if (m && m[ +1 ]) {
              x3___ = (IMPORTS___.parseFloat_v___? IMPORTS___.parseFloat:
                ___.ri(IMPORTS___, 'parseFloat')).i___(m[ +1 ]), o.webkit_w___
                === o? (o.webkit = x3___): o.w___('webkit', x3___);
              if (x4___ = new RegExp.new___(' Mobile\\/'), x4___.test_m___?
                x4___.test(ua): x4___.m___('test', [ ua ])) {
                o.mobile_w___ === o? (o.mobile = 'Apple'): o.w___('mobile',
                  'Apple');
              } else {
                m = (x5___ = new RegExp.new___('NokiaN[^\\/]*'), ua.match_m___?
                  ua.match(x5___): ua.m___('match', [ x5___ ]));
                if (m) {
                  x6___ = m[ +0 ], o.mobile_w___ === o? (o.mobile = x6___):
                  o.w___('mobile', x6___);
                }
              }
              m = (x7___ = new RegExp.new___('AdobeAIR\\/([^\\s]*)'),
                ua.match_m___? ua.match(x7___): ua.m___('match', [ x7___ ]));
              if (m) {
                x8___ = m[ +0 ], o.air_w___ === o? (o.air = x8___):
                o.w___('air', x8___);
              }
            }
            if (! (o.webkit_v___? o.webkit: o.v___('webkit'))) {
              m = (x9___ = new RegExp.new___('Opera[\\s\\/]([^\\s]*)'),
                ua.match_m___? ua.match(x9___): ua.m___('match', [ x9___ ]));
              if (m && m[ +1 ]) {
                x10___ = (IMPORTS___.parseFloat_v___? IMPORTS___.parseFloat:
                  ___.ri(IMPORTS___, 'parseFloat')).i___(m[ +1 ]), o.opera_w___
                  === o? (o.opera = x10___): o.w___('opera', x10___);
                m = (x11___ = new RegExp.new___('Opera Mini[^;]*'),
                  ua.match_m___? ua.match(x11___): ua.m___('match', [ x11___ ])
                );
                if (m) {
                  x12___ = m[ +0 ], o.mobile_w___ === o? (o.mobile = x12___):
                  o.w___('mobile', x12___);
                }
              } else {
                m = (x13___ = new RegExp.new___('MSIE\\s([^;]*)'),
                  ua.match_m___? ua.match(x13___): ua.m___('match', [ x13___ ])
                );
                if (m && m[ +1 ]) {
                  x14___ = (IMPORTS___.parseFloat_v___? IMPORTS___.parseFloat:
                    ___.ri(IMPORTS___, 'parseFloat')).i___(m[ +1 ]), o.ie_w___
                    === o? (o.ie = x14___): o.w___('ie', x14___);
                } else {
                  m = (x15___ = new RegExp.new___('Gecko\\/([^\\s]*)'),
                    ua.match_m___? ua.match(x15___): ua.m___('match', [ x15___
                      ]));
                  if (m) {
                    o.gecko_w___ === o? (o.gecko = 1): o.w___('gecko', 1);
                    m = (x16___ = new RegExp.new___('rv:([^\\s\\)]*)'),
                      ua.match_m___? ua.match(x16___): ua.m___('match', [
                          x16___ ]));
                    if (m && m[ +1 ]) {
                      x17___ = (IMPORTS___.parseFloat_v___?
                        IMPORTS___.parseFloat: ___.ri(IMPORTS___, 'parseFloat')
                      ).i___(m[ +1 ]), o.gecko_w___ === o? (o.gecko = x17___):
                      o.w___('gecko', x17___);
                    }
                  }
                }
              }
            }
            m = (x18___ = new RegExp.new___('Caja\\/([^\\s]*)'), ua.match_m___?
              ua.match(x18___): ua.m___('match', [ x18___ ]));
            if (m && m[ +1 ]) {
              x19___ = (IMPORTS___.parseFloat_v___? IMPORTS___.parseFloat:
                ___.ri(IMPORTS___, 'parseFloat')).i___(m[ +1 ]), o.caja_w___
                === o? (o.caja = x19___): o.w___('caja', x19___);
            }
            return o;
          }).i___(), x13___.ua_w___ === x13___? (x13___.ua = x14___):
        x13___.w___('ua', x14___);
        ___.f(function () {
            var x0___, l, x1___, ls, x2___, x3___, unique, i;
            x0___ = IMPORTS___.YAHOO_v___? IMPORTS___.YAHOO: ___.ri(IMPORTS___,
              'YAHOO'), x0___.namespace_m___? x0___.namespace('util', 'widget',
              'example'): x0___.m___('namespace', [ 'util', 'widget', 'example'
              ]);
            if ('undefined' !== typeof IMPORTS___.v___('YAHOO_config')) {
              l = (x1___ = IMPORTS___.YAHOO_config_v___?
                IMPORTS___.YAHOO_config: ___.ri(IMPORTS___, 'YAHOO_config'),
                x1___.listener_v___? x1___.listener: x1___.v___('listener')),
              ls = (x3___ = (x2___ = IMPORTS___.YAHOO_v___? IMPORTS___.YAHOO:
                  ___.ri(IMPORTS___, 'YAHOO'), x2___.env_v___? x2___.env:
                  x2___.v___('env')), x3___.listeners_v___? x3___.listeners:
                x3___.v___('listeners')), unique = true;
              if (l) {
                for (i = 0; i < ls.length; i = i + 1) {
                  if (ls.v___(i) == l) {
                    unique = false;
                    break;
                  }
                }
                if (unique) {
                  ls.push_m___? ls.push(l): ls.m___('push', [ l ]);
                }
              }
            }
          }).i___();
        x15___ = IMPORTS___.YAHOO_v___? IMPORTS___.YAHOO: ___.ri(IMPORTS___,
          'YAHOO'), x17___ = (x16___ = IMPORTS___.YAHOO_v___? IMPORTS___.YAHOO:
          ___.ri(IMPORTS___, 'YAHOO'), x16___.lang_v___? x16___.lang:
          x16___.v___('lang')) || ___.iM([ ]), x15___.lang_w___ === x15___?
          (x15___.lang = x17___): x15___.w___('lang', x17___);
        ___.f(function () {
            var L, x0___, ARRAY_TOSTRING, FUNCTION_TOSTRING, OP, x1___, ADD,
            OB, x2___, x3___, x4___, x5___, x6___, x7___, x8___, x9___, x10___,
            x11___, x12___;
            L = (x0___ = IMPORTS___.YAHOO_v___? IMPORTS___.YAHOO:
              ___.ri(IMPORTS___, 'YAHOO'), x0___.lang_v___? x0___.lang:
              x0___.v___('lang')), ARRAY_TOSTRING = '[object Array]',
            FUNCTION_TOSTRING = '[object Function]', OP = (x1___ =
              IMPORTS___.Object_v___? IMPORTS___.Object: ___.ri(IMPORTS___,
                'Object'), x1___.prototype_v___? x1___.prototype:
              x1___.v___('prototype')), ADD = [ 'toString', 'valueOf' ], OB =
              ___.iM([ 'isArray', (function () {
                    function isArray$_lit(o) {
                      var x0___;
                      return (x0___ = OP.toString_v___? OP.toString:
                        OP.v___('toString'), x0___.apply_m___? x0___.apply(o):
                        x0___.m___('apply', [ o ])) === ARRAY_TOSTRING;
                    }
                    return ___.f(isArray$_lit, 'isArray$_lit');
                  })(), 'isBoolean', (function () {
                    function isBoolean$_lit(o) {
                      return typeof o === 'boolean';
                    }
                    return ___.f(isBoolean$_lit, 'isBoolean$_lit');
                  })(), 'isFunction', (function () {
                    function isFunction$_lit(o) {
                      var x0___;
                      return (x0___ = OP.toString_v___? OP.toString:
                        OP.v___('toString'), x0___.apply_m___? x0___.apply(o):
                        x0___.m___('apply', [ o ])) === FUNCTION_TOSTRING;
                    }
                    return ___.f(isFunction$_lit, 'isFunction$_lit');
                  })(), 'isNull', (function () {
                    function isNull$_lit(o) {
                      return o === null;
                    }
                    return ___.f(isNull$_lit, 'isNull$_lit');
                  })(), 'isNumber', (function () {
                    function isNumber$_lit(o) {
                      return typeof o === 'number' &&
                        (IMPORTS___.isFinite_v___? IMPORTS___.isFinite:
                        ___.ri(IMPORTS___, 'isFinite')).i___(o);
                    }
                    return ___.f(isNumber$_lit, 'isNumber$_lit');
                  })(), 'isObject', (function () {
                    function isObject$_lit(o) {
                      return o && (typeof o === 'object' || (L.isFunction_m___?
                          L.isFunction(o): L.m___('isFunction', [ o ]))) ||
                        false;
                    }
                    return ___.f(isObject$_lit, 'isObject$_lit');
                  })(), 'isString', (function () {
                    function isString$_lit(o) {
                      return typeof o === 'string';
                    }
                    return ___.f(isString$_lit, 'isString$_lit');
                  })(), 'isUndefined', (function () {
                    function isUndefined$_lit(o) {
                      return typeof o === 'undefined';
                    }
                    return ___.f(isUndefined$_lit, 'isUndefined$_lit');
                  })(), '_IEEnumFix', (x4___ = (x3___ = (x2___ =
                      IMPORTS___.YAHOO_v___? IMPORTS___.YAHOO:
                      ___.ri(IMPORTS___, 'YAHOO'), x2___.env_v___? x2___.env:
                      x2___.v___('env')), x3___.ua_v___? x3___.ua:
                    x3___.v___('ua')), x4___.ie_v___? x4___.ie:
                  x4___.v___('ie')) ? ___.f(function (r, s) {
                    var i, fname, f;
                    for (i = 0; i < ADD.length; i = i + 1) {
                      fname = ADD.v___(i);
                      f = s.v___(fname);
                      if ((L.isFunction_m___? L.isFunction(f):
                          L.m___('isFunction', [ f ])) && f != OP.v___(fname))
                        {
                        r.w___(fname, f);
                      }
                    }
                  }): ___.f(function () {}), 'extend', (function () {
                    function extend$_lit(subc, superc, overrides) {
                      var F, i, x0___, x1___, x2___, x3___, x4___, x5___,
                      x6___, x7___, x8___, x9___;
                      if (!superc || !subc) {
                        throw new (IMPORTS___.Error_v___? IMPORTS___.Error:
                          ___.ri(IMPORTS___, 'Error'))
                          .new___('extend failed, please check that ' +
                            'all dependencies are included.');
                      }
                      F = (function () {
                          function F$_var() {}
                          return ___.f(F$_var, 'F$_var');
                        })();
                      x0___ = superc.prototype_v___? superc.prototype:
                      superc.v___('prototype'), F.prototype_w___ === F?
                        (F.prototype = x0___): F.w___('prototype', x0___);
                      x1___ = new F.new___(), subc.prototype_w___ === subc?
                        (subc.prototype = x1___): subc.w___('prototype', x1___)
                        ;
                      x2___ = subc.prototype_v___? subc.prototype:
                      subc.v___('prototype'), x2___.constructor_w___ === x2___?
                        (x2___.constructor = subc): x2___.w___('constructor',
                        subc);
                      x3___ = superc.prototype_v___? superc.prototype:
                      superc.v___('prototype'), subc.superclass_w___ === subc?
                        (subc.superclass = x3___): subc.w___('superclass',
                        x3___);
                      if ((x4___ = superc.prototype_v___? superc.prototype:
                          superc.v___('prototype'), x4___.constructor_v___?
                          x4___.constructor: x4___.v___('constructor')) ==
                        (OP.constructor_v___? OP.constructor:
                         OP.v___('constructor'))) {
                        x5___ = superc.prototype_v___? superc.prototype:
                        superc.v___('prototype'), x5___.constructor_w___ ===
                          x5___? (x5___.constructor = superc):
                        x5___.w___('constructor', superc);
                      }
                      if (overrides) {
                        x8___ = Object(overrides).e___();
                        for (x7___ in x8___) {
                          if (typeof x7___ === 'number' || '' + +x7___ ===
                            x7___) { i = x7___; } else {
                            if (/^NUM___/.test(x7___) && /__$/.test(x7___)) {
                              continue; }
                            x6___ = x7___.match(/([\s\S]*)_e___$/);
                            if (!x6___ || !x8___[ x7___ ]) { continue; }
                            i = x6___[ 1 ];
                          }
                          {
                            if (L.hasOwnProperty_m___?
                              L.hasOwnProperty(overrides, i):
                              L.m___('hasOwnProperty', [ overrides, i ])) {
                              (subc.prototype_v___? subc.prototype:
                               subc.v___('prototype')).w___(i,
                                overrides.v___(i));
                            }
                          }
                        }
                        x9___ = subc.prototype_v___? subc.prototype:
                        subc.v___('prototype'), L._IEEnumFix_m___?
                          L._IEEnumFix(x9___, overrides): L.m___('_IEEnumFix',
                          [ x9___, overrides ]);
                      }
                    }
                    return ___.f(extend$_lit, 'extend$_lit');
                  })(), 'augmentObject', (function () {
                    function augmentObject$_lit(r, s) {
                      {
                        ___.deodorize(arguments, -6);
                        var a___ = ___.args(arguments);
                      }
                      var a, i, p, overrideList, x0___, x1___, x2___;
                      if (!s || !r) {
                        throw new (IMPORTS___.Error_v___? IMPORTS___.Error:
                          ___.ri(IMPORTS___, 'Error'))
                          .new___('Absorb failed, verify dependencies.');
                      }
                      a = a___, overrideList = a[ +2 ];
                      if (overrideList && overrideList !== true) {
                        for (i = 2; i < a.length; i = i + 1) {
                          r.w___(a.v___(i), s.v___(a.v___(i)));
                        }
                      } else {
                        x2___ = Object(s).e___();
                        for (x1___ in x2___) {
                          if (typeof x1___ === 'number' || '' + +x1___ ===
                            x1___) { p = x1___; } else {
                            if (/^NUM___/.test(x1___) && /__$/.test(x1___)) {
                              continue; }
                            x0___ = x1___.match(/([\s\S]*)_e___$/);
                            if (!x0___ || !x2___[ x1___ ]) { continue; }
                            p = x0___[ 1 ];
                          }
                          {
                            if (overrideList || !___.i('' + p, r)) {
                              r.w___(p, s.v___(p));
                            }
                          }
                        }
                        L._IEEnumFix_m___? L._IEEnumFix(r, s):
                        L.m___('_IEEnumFix', [ r, s ]);
                      }
                    }
                    return ___.f(augmentObject$_lit, 'augmentObject$_lit');
                  })(), 'augmentProto', (function () {
                    function augmentProto$_lit(r, s) {
                      {
                        ___.deodorize(arguments, -6);
                        var a___ = ___.args(arguments);
                      }
                      var dis___ = this && this.___? void 0: this;
                      var a, i, x0___, x1___;
                      if (!s || !r) {
                        throw new (IMPORTS___.Error_v___? IMPORTS___.Error:
                          ___.ri(IMPORTS___, 'Error'))
                          .new___('Augment failed, verify dependencies.');
                      }
                      a = [ r.prototype_v___? r.prototype: r.v___('prototype'),
                        s.prototype_v___? s.prototype: s.v___('prototype') ];
                      for (i = 2; i < a___.length; i = i + 1) {
                        x0___ = a___.v___(i), a.push_m___? a.push(x0___):
                        a.m___('push', [ x0___ ]);
                      }
                      x1___ = L.augmentObject_v___? L.augmentObject:
                      L.v___('augmentObject'), x1___.apply_m___?
                        x1___.apply(dis___, a): x1___.m___('apply', [ dis___, a
                        ]);
                    }
                    return ___.f(augmentProto$_lit, 'augmentProto$_lit');
                  })(), 'dump', (function () {
                    function dump$_lit(o, d) {
                      var i, len, s, OBJ, FUN, COMMA, ARROW, x0___, x1___,
                      x2___, x3___, x4___, x5___, x6___, x7___, x8___, x9___,
                      x10___, x11___, x12___, x13___;
                      s = [ ], OBJ = '{...}', FUN = 'f(){...}', COMMA = ', ',
                      ARROW = ' => ';
                      if (! (L.isObject_m___? L.isObject(o): L.m___('isObject',
                            [ o ]))) {
                        return o + '';
                      } else if (o instanceof (IMPORTS___.Date_v___?
                          IMPORTS___.Date: ___.ri(IMPORTS___, 'Date')) ||
                        ___.i('' + 'nodeType', o) && ___.i('' + 'tagName', o))
                        { return o; } else if (L.isFunction_m___?
                        L.isFunction(o): L.m___('isFunction', [ o ])) { return FUN; }
                      d = (L.isNumber_m___? L.isNumber(d): L.m___('isNumber', [
                            d ])) ? d: 3;
                      if (L.isArray_m___? L.isArray(o): L.m___('isArray', [ o ]
                        )) {
                        s.push_m___? s.push('['): s.m___('push', [ '[' ]);
                        for (i = 0, len = o.length; i < len; i = i + 1) {
                          if (x0___ = o.v___(i), L.isObject_m___?
                            L.isObject(x0___): L.m___('isObject', [ x0___ ])) {
                            x3___ = d > 0? (x1___ = o.v___(i), x2___ = d - 1,
                              L.dump_m___? L.dump(x1___, x2___): L.m___('dump',
                                [ x1___, x2___ ])): OBJ, s.push_m___?
                              s.push(x3___): s.m___('push', [ x3___ ]);
                          } else {
                            x4___ = o.v___(i), s.push_m___? s.push(x4___):
                            s.m___('push', [ x4___ ]);
                          }
                          s.push_m___? s.push(COMMA): s.m___('push', [ COMMA ])
                            ;
                        }
                        if (s.length > 1) {
                          s.pop_m___? s.pop(): s.m___('pop', [ ]);
                        }
                        s.push_m___? s.push(']'): s.m___('push', [ ']' ]);
                      } else {
                        s.push_m___? s.push('{'): s.m___('push', [ '{' ]);
                        x7___ = Object(o).e___();
                        for (x6___ in x7___) {
                          if (typeof x6___ === 'number' || '' + +x6___ ===
                            x6___) { i = x6___; } else {
                            if (/^NUM___/.test(x6___) && /__$/.test(x6___)) {
                              continue; }
                            x5___ = x6___.match(/([\s\S]*)_e___$/);
                            if (!x5___ || !x7___[ x6___ ]) { continue; }
                            i = x5___[ 1 ];
                          }
                          {
                            if (L.hasOwnProperty_m___? L.hasOwnProperty(o, i):
                              L.m___('hasOwnProperty', [ o, i ])) {
                              x8___ = i + ARROW, s.push_m___? s.push(x8___):
                              s.m___('push', [ x8___ ]);
                              if (x9___ = o.v___(i), L.isObject_m___?
                                L.isObject(x9___): L.m___('isObject', [ x9___ ]
                                )) {
                                x12___ = d > 0? (x10___ = o.v___(i), x11___ = d
                                  - 1, L.dump_m___? L.dump(x10___, x11___):
                                  L.m___('dump', [ x10___, x11___ ])): OBJ,
                                s.push_m___? s.push(x12___): s.m___('push', [
                                    x12___ ]);
                              } else {
                                x13___ = o.v___(i), s.push_m___? s.push(x13___)
                                  : s.m___('push', [ x13___ ]);
                              }
                              s.push_m___? s.push(COMMA): s.m___('push', [
                                  COMMA ]);
                            }
                          }
                        }
                        if (s.length > 1) {
                          s.pop_m___? s.pop(): s.m___('pop', [ ]);
                        }
                        s.push_m___? s.push('}'): s.m___('push', [ '}' ]);
                      }
                      return s.join_m___? s.join(''): s.m___('join', [ '' ]);
                    }
                    return ___.f(dump$_lit, 'dump$_lit');
                  })(), 'substitute', (function () {
                    function substitute$_lit(s, o, f) {
                      var i, j, k, key, v, meta, saved, token, DUMP, SPACE,
                      LBRACE, RBRACE, dump, x0___, x1___, x2___, x3___, x4___,
                      x5___, x6___;
                      saved = [ ], DUMP = 'dump', SPACE = ' ', LBRACE = '{',
                      RBRACE = '}';
                      for (;;) {
                        i = s.lastIndexOf_m___? s.lastIndexOf(LBRACE):
                        s.m___('lastIndexOf', [ LBRACE ]);
                        if (i < 0) { break; }
                        j = s.indexOf_m___? s.indexOf(RBRACE, i):
                        s.m___('indexOf', [ RBRACE, i ]);
                        if (i + 1 >= j) { break; }
                        token = (x0___ = i + 1, s.substring_m___?
                          s.substring(x0___, j): s.m___('substring', [ x0___, j
                            ]));
                        key = token;
                        meta = null;
                        k = key.indexOf_m___? key.indexOf(SPACE):
                        key.m___('indexOf', [ SPACE ]);
                        if (k > -1) {
                          meta = (x1___ = k + 1, key.substring_m___?
                            key.substring(x1___): key.m___('substring', [ x1___
                              ]));
                          key = key.substring_m___? key.substring(0, k):
                          key.m___('substring', [ 0, k ]);
                        }
                        v = o.v___(key);
                        if (f) {
                          v = f.i___(key, v, meta);
                        }
                        if (L.isObject_m___? L.isObject(v): L.m___('isObject',
                            [ v ])) {
                          if (L.isArray_m___? L.isArray(v): L.m___('isArray', [
                                v ])) {
                            v = (x2___ = (IMPORTS___.parseInt_v___?
                                IMPORTS___.parseInt: ___.ri(IMPORTS___,
                                  'parseInt')).i___(meta, 10), L.dump_m___?
                              L.dump(v, x2___): L.m___('dump', [ v, x2___ ]));
                          } else {
                            meta = meta || '';
                            dump = meta.indexOf_m___? meta.indexOf(DUMP):
                            meta.m___('indexOf', [ DUMP ]);
                            if (dump > -1) {
                              meta = meta.substring_m___? meta.substring(4):
                              meta.m___('substring', [ 4 ]);
                            }
                            if ((v.toString_v___? v.toString:
                                v.v___('toString')) === (OP.toString_v___?
                                OP.toString: OP.v___('toString')) || dump > -1)
                              {
                              v = (x3___ = (IMPORTS___.parseInt_v___?
                                  IMPORTS___.parseInt: ___.ri(IMPORTS___,
                                    'parseInt')).i___(meta, 10), L.dump_m___?
                                L.dump(v, x3___): L.m___('dump', [ v, x3___ ]))
                                ;
                            } else {
                              v = v.toString_m___? v.toString():
                              v.m___('toString', [ ]);
                            }
                          }
                        } else if (! (L.isString_m___? L.isString(v):
                            L.m___('isString', [ v ])) && ! (L.isNumber_m___?
                            L.isNumber(v): L.m___('isNumber', [ v ]))) {
                          v = '~-' + saved.length + '-~';
                          saved.w___(saved.length, token);
                        }
                        s = (s.substring_m___? s.substring(0, i):
                          s.m___('substring', [ 0, i ])) + v + (x4___ = j + 1,
                          s.substring_m___? s.substring(x4___):
                          s.m___('substring', [ x4___ ]));
                      }
                      for (i = saved.length - 1; i >= 0; i = i - 1) {
                        s = (x5___ = new (IMPORTS___.RegExp_v___?
                            IMPORTS___.RegExp: ___.ri(IMPORTS___, 'RegExp'))
                          .new___('~-' + i + '-~'), x6___ = '{' + saved.v___(i)
                          + '}', s.replace_m___? s.replace(x5___, x6___, 'g'):
                          s.m___('replace', [ x5___, x6___, 'g' ]));
                      }
                      return s;
                    }
                    return ___.f(substitute$_lit, 'substitute$_lit');
                  })(), 'trim', (function () {
                    function trim$_lit(s) {
                      var x0___;
                      try {
                        return x0___ = new RegExp.new___('^\\s+|\\s+$', 'g'),
                        s.replace_m___? s.replace(x0___, ''): s.m___('replace',
                          [ x0___, '' ]);
                      } catch (ex___) {
                        try {
                          throw ___.tameException(ex___);
                        } catch (e) { return s; }
                      }
                    }
                    return ___.f(trim$_lit, 'trim$_lit');
                  })(), 'merge', (function () {
                    function merge$_lit() {
                      {
                        ___.deodorize(arguments, -6);
                        var a___ = ___.args(arguments);
                      }
                      var o, a, l, i, x0___;
                      o = ___.iM([ ]), a = a___, l = a.length;
                      for (i = 0; i < l; i = i + 1) {
                        x0___ = a.v___(i), L.augmentObject_m___?
                          L.augmentObject(o, x0___, true):
                        L.m___('augmentObject', [ o, x0___, true ]);
                      }
                      return o;
                    }
                    return ___.f(merge$_lit, 'merge$_lit');
                  })(), 'later', (function () {
                    function later$_lit(when, o, fn, data, periodic) {
                      var m, d, f, r;
                      when = when || 0;
                      o = o || ___.iM([ ]);
                      m = fn, d = data;
                      if (L.isString_m___? L.isString(fn): L.m___('isString', [
                            fn ])) {
                        m = o.v___(fn);
                      }
                      if (!m) {
                        throw new (IMPORTS___.TypeError_v___?
                          IMPORTS___.TypeError: ___.ri(IMPORTS___, 'TypeError')
                        ).new___('method undefined');
                      }
                      if (! (L.isArray_m___? L.isArray(d): L.m___('isArray', [
                              d ]))) {
                        d = [ data ];
                      }
                      f = (function () {
                          function f$_var() {
                            m.apply_m___? m.apply(o, d): m.m___('apply', [ o, d
                              ]);
                          }
                          return ___.f(f$_var, 'f$_var');
                        })();
                      r = periodic? (IMPORTS___.setInterval_v___?
                        IMPORTS___.setInterval: ___.ri(IMPORTS___,
                          'setInterval')).i___(f, when):
                      (IMPORTS___.setTimeout_v___? IMPORTS___.setTimeout:
                       ___.ri(IMPORTS___, 'setTimeout')).i___(f, when);
                      return ___.iM([ 'interval', periodic, 'cancel', (function
                              () {
                              function cancel$_lit() {
                                var dis___ = this && this.___? void 0: this;
                                if (dis___.interval_v___? dis___.interval:
                                  dis___.v___('interval')) {
                                  (IMPORTS___.clearInterval_v___?
                                   IMPORTS___.clearInterval: ___.ri(IMPORTS___,
                                     'clearInterval')).i___(r);
                                } else {
                                  (IMPORTS___.clearTimeout_v___?
                                   IMPORTS___.clearTimeout: ___.ri(IMPORTS___,
                                     'clearTimeout')).i___(r);
                                }
                              }
                              return ___.f(cancel$_lit, 'cancel$_lit');
                            })() ]);
                    }
                    return ___.f(later$_lit, 'later$_lit');
                  })(), 'isValue', (function () {
                    function isValue$_lit(o) {
                      return (L.isObject_m___? L.isObject(o):
                        L.m___('isObject', [ o ])) || (L.isString_m___?
                        L.isString(o): L.m___('isString', [ o ])) ||
                        (L.isNumber_m___? L.isNumber(o): L.m___('isNumber', [ o
                          ])) || (L.isBoolean_m___? L.isBoolean(o):
                        L.m___('isBoolean', [ o ]));
                    }
                    return ___.f(isValue$_lit, 'isValue$_lit');
                  })() ]);
            x5___ = (OP.hasOwnProperty_v___? OP.hasOwnProperty:
              OP.v___('hasOwnProperty')) ? ___.f(function (o, prop) {
                return o && (o.hasOwnProperty_m___? o.hasOwnProperty(prop):
                  o.m___('hasOwnProperty', [ prop ]));
              }): ___.f(function (o, prop) {
                var x0___, x1___;
                return ! (x0___ = o.v___(prop), L.isUndefined_m___?
                  L.isUndefined(x0___): L.m___('isUndefined', [ x0___ ])) &&
                  (x1___ = o.constructor_v___? o.constructor:
                  o.v___('constructor'), x1___.prototype_v___? x1___.prototype:
                  x1___.v___('prototype')).v___(prop) !== o.v___(prop);
              }), L.hasOwnProperty_w___ === L? (L.hasOwnProperty = x5___):
            L.w___('hasOwnProperty', x5___);
            OB.augmentObject_m___? OB.augmentObject(L, OB, true):
            OB.m___('augmentObject', [ L, OB, true ]);
            x7___ = (x6___ = IMPORTS___.YAHOO_v___? IMPORTS___.YAHOO:
              ___.ri(IMPORTS___, 'YAHOO'), x6___.util_v___? x6___.util:
              x6___.v___('util')), x7___.Lang_w___ === x7___? (x7___.Lang = L):
            x7___.w___('Lang', L);
            x8___ = L.augmentProto_v___? L.augmentProto: L.v___('augmentProto')
              , L.augment_w___ === L? (L.augment = x8___): L.w___('augment',
              x8___);
            x9___ = IMPORTS___.YAHOO_v___? IMPORTS___.YAHOO: ___.ri(IMPORTS___,
              'YAHOO'), x10___ = L.augmentProto_v___? L.augmentProto:
            L.v___('augmentProto'), x9___.augment_w___ === x9___?
              (x9___.augment = x10___): x9___.w___('augment', x10___);
            x11___ = IMPORTS___.YAHOO_v___? IMPORTS___.YAHOO:
            ___.ri(IMPORTS___, 'YAHOO'), x12___ = L.extend_v___? L.extend:
            L.v___('extend'), x11___.extend_w___ === x11___? (x11___.extend =
                x12___): x11___.w___('extend', x12___);
          }).i___();
        x18___ = IMPORTS___.YAHOO_v___? IMPORTS___.YAHOO: ___.ri(IMPORTS___,
          'YAHOO'), x19___ = IMPORTS___.YAHOO_v___? IMPORTS___.YAHOO:
        ___.ri(IMPORTS___, 'YAHOO'), x20___ = ___.iM([ 'version', '@VERSION@',
            'build', '@BUILD@' ]), x18___.register_m___?
          x18___.register('yahoo', x19___, x20___): x18___.m___('register', [
            'yahoo', x19___, x20___ ]);
        ___.f(function () {
            var x0___, x1___, x2___, x3___, x4___, Y, x5___, lang, x6___, UA,
            x7___, x8___, trim, x9___, x10___, propertyCache, reCache,
            RE_TABLE, RE_COLOR, document, x11___, documentElement,
            OWNER_DOCUMENT, DEFAULT_VIEW, DOCUMENT_ELEMENT, COMPAT_MODE,
            OFFSET_LEFT, OFFSET_TOP, OFFSET_PARENT, PARENT_NODE, NODE_TYPE,
            TAG_NAME, SCROLL_LEFT, SCROLL_TOP, GET_BOUNDING_CLIENT_RECT,
            GET_COMPUTED_STYLE, CURRENT_STYLE, CSS1_COMPAT, _BACK_COMPAT,
            _CLASS, CLASS_NAME, EMPTY, SPACE, C_START, C_END, G, POSITION,
            FIXED, RELATIVE, LEFT, TOP, MEDIUM, BORDER_LEFT_WIDTH,
            BORDER_TOP_WIDTH, isOpera, isSafari, isGecko, isIE, x12___,
            _getComputedStyle;
            x1___ = (x0___ = IMPORTS___.YAHOO_v___? IMPORTS___.YAHOO:
              ___.ri(IMPORTS___, 'YAHOO'), x0___.env_v___? x0___.env:
              x0___.v___('env')), x4___ = (x3___ = (x2___ =
                IMPORTS___.YAHOO_v___? IMPORTS___.YAHOO: ___.ri(IMPORTS___,
                  'YAHOO'), x2___.env_v___? x2___.env: x2___.v___('env')),
              x3___._id_counter_v___? x3___._id_counter:
              x3___.v___('_id_counter')) || 0, x1___._id_counter_w___ ===
              x1___? (x1___._id_counter = x4___): x1___.w___('_id_counter',
              x4___);
            Y = (x5___ = IMPORTS___.YAHOO_v___? IMPORTS___.YAHOO:
              ___.ri(IMPORTS___, 'YAHOO'), x5___.util_v___? x5___.util:
              x5___.v___('util')), lang = (x6___ = IMPORTS___.YAHOO_v___?
              IMPORTS___.YAHOO: ___.ri(IMPORTS___, 'YAHOO'), x6___.lang_v___?
              x6___.lang: x6___.v___('lang')), UA = (x8___ = (x7___ =
                IMPORTS___.YAHOO_v___? IMPORTS___.YAHOO: ___.ri(IMPORTS___,
                  'YAHOO'), x7___.env_v___? x7___.env: x7___.v___('env')),
              x8___.ua_v___? x8___.ua: x8___.v___('ua')), trim = (x10___ =
              (x9___ = IMPORTS___.YAHOO_v___? IMPORTS___.YAHOO:
               ___.ri(IMPORTS___, 'YAHOO'), x9___.lang_v___? x9___.lang:
               x9___.v___('lang')), x10___.trim_v___? x10___.trim:
              x10___.v___('trim')), propertyCache = ___.iM([ ]), reCache =
              ___.iM([ ]), RE_TABLE = new RegExp.new___('^t(?:able|d|h)$', 'i')
              , RE_COLOR = new RegExp.new___('color$', 'i'), document = (x11___
              = IMPORTS___.window_v___? IMPORTS___.window: ___.ri(IMPORTS___,
                'window'), x11___.document_v___? x11___.document:
              x11___.v___('document')), documentElement =
              document.documentElement_v___? document.documentElement:
            document.v___('documentElement'), OWNER_DOCUMENT = 'ownerDocument',
            DEFAULT_VIEW = 'defaultView', DOCUMENT_ELEMENT = 'documentElement',
            COMPAT_MODE = 'compatMode', OFFSET_LEFT = 'offsetLeft', OFFSET_TOP
              = 'offsetTop', OFFSET_PARENT = 'offsetParent', PARENT_NODE =
              'parentNode', NODE_TYPE = 'nodeType', TAG_NAME = 'tagName',
            SCROLL_LEFT = 'scrollLeft', SCROLL_TOP = 'scrollTop',
            GET_BOUNDING_CLIENT_RECT = 'getBoundingClientRect',
            GET_COMPUTED_STYLE = 'getComputedStyle', CURRENT_STYLE =
              'currentStyle', CSS1_COMPAT = 'CSS1Compat', _BACK_COMPAT =
              'BackCompat', _CLASS = 'class', CLASS_NAME = 'className', EMPTY =
              '', SPACE = ' ', C_START = '(?:^|\\s)', C_END = '(?= |$)', G =
              'g', POSITION = 'position', FIXED = 'fixed', RELATIVE =
              'relative', LEFT = 'left', TOP = 'top', MEDIUM = 'medium',
            BORDER_LEFT_WIDTH = 'borderLeftWidth', BORDER_TOP_WIDTH =
              'borderTopWidth', isOpera = UA.opera_v___? UA.opera:
            UA.v___('opera'), isSafari = UA.webkit_v___? UA.webkit:
            UA.v___('webkit'), isGecko = UA.gecko_v___? UA.gecko:
            UA.v___('gecko'), isIE = UA.ie_v___? UA.ie: UA.v___('ie');
            x12___ = ___.iM([ 'CUSTOM_ATTRIBUTES', !
                (documentElement.hasAttribute_v___?
                   documentElement.hasAttribute:
                 documentElement.v___('hasAttribute')) ? ___.iM([ 'for',
                    'htmlFor', 'class', CLASS_NAME ]): ___.iM([ 'htmlFor',
                    'for', 'className', _CLASS ]), 'get', (function () {
                    function get$_lit(el) {
                      var id, nodes, c, i, len, x0___, x1___, x2___, x3___,
                      x4___, x5___, x6___;
                      if (el) {
                        if (el.v___(NODE_TYPE) || (el.item_v___? el.item:
                            el.v___('item'))) { return el; }
                        if (typeof el === 'string') {
                          id = el;
                          el = document.getElementById_m___?
                            document.getElementById(el):
                          document.m___('getElementById', [ el ]);
                          if (el && (el.id_v___? el.id: el.v___('id')) === id)
                            { return el; } else if (el && (document.all_v___?
                                document.all: document.v___('all'))) {
                            el = null;
                            nodes = (document.all_v___? document.all:
                              document.v___('all')).v___(id);
                            for (i = 0, len = nodes.length; i < len; ++i) {
                              if ((x0___ = nodes[ +i ], x0___.id_v___?
                                  x0___.id: x0___.v___('id')) === id) {
                                return nodes[ +i ];
                              }
                            }
                          }
                          return el;
                        }
                        if ((x2___ = (x1___ = IMPORTS___.YAHOO_v___?
                              IMPORTS___.YAHOO: ___.ri(IMPORTS___, 'YAHOO'),
                              x1___.util_v___? x1___.util: x1___.v___('util')),
                            x2___.Element_v___? x2___.Element:
                            x2___.v___('Element')) && el instanceof (x4___ =
                            (x3___ = IMPORTS___.YAHOO_v___? IMPORTS___.YAHOO:
                             ___.ri(IMPORTS___, 'YAHOO'), x3___.util_v___?
                             x3___.util: x3___.v___('util')),
                            x4___.Element_v___? x4___.Element:
                            x4___.v___('Element'))) {
                          el = el.get_m___? el.get('element'): el.m___('get', [
                              'element' ]);
                        }
                        if (___.i('' + 'length', el)) {
                          c = [ ];
                          for (i = 0, len = el.length; i < len; ++i) {
                            c.w___(c.length, (x5___ = Y.Dom_v___? Y.Dom:
                                Y.v___('Dom'), x6___ = el[ +i ],
                                x5___.get_m___? x5___.get(x6___):
                                x5___.m___('get', [ x6___ ])));
                          }
                          return c;
                        }
                        return el;
                      }
                      return null;
                    }
                    return ___.f(get$_lit, 'get$_lit');
                  })(), 'getComputedStyle', (function () {
                    function getComputedStyle$_lit(el, property) {
                      var x0___, x1___;
                      if ((IMPORTS___.window_v___? IMPORTS___.window:
                          ___.ri(IMPORTS___, 'window'))
                        .v___(GET_COMPUTED_STYLE)) {
                        return el.v___(OWNER_DOCUMENT).v___(DEFAULT_VIEW)
                          .m___(GET_COMPUTED_STYLE, [ el, null ])
                          .v___(property);
                      } else if (el.v___(CURRENT_STYLE)) {
                        return x1___ = (x0___ = Y.Dom_v___? Y.Dom:
                          Y.v___('Dom'), x0___.IE_ComputedStyle_v___?
                          x0___.IE_ComputedStyle:
                          x0___.v___('IE_ComputedStyle')), x1___.get_m___?
                          x1___.get(el, property): x1___.m___('get', [ el,
                            property ]);
                      }
                    }
                    return ___.f(getComputedStyle$_lit,
                      'getComputedStyle$_lit');
                  })(), 'getStyle', (function () {
                    function getStyle$_lit(el, property) {
                      var x0___, x1___, x2___;
                      return x0___ = Y.Dom_v___? Y.Dom: Y.v___('Dom'), x2___ =
                        (x1___ = Y.Dom_v___? Y.Dom: Y.v___('Dom'),
                        x1___._getStyle_v___? x1___._getStyle:
                        x1___.v___('_getStyle')), x0___.batch_m___?
                        x0___.batch(el, x2___, property): x0___.m___('batch', [
                          el, x2___, property ]);
                    }
                    return ___.f(getStyle$_lit, 'getStyle$_lit');
                  })(), '_getStyle', ___.f(function () {
                    if ((IMPORTS___.window_v___? IMPORTS___.window:
                        ___.ri(IMPORTS___, 'window')).v___(GET_COMPUTED_STYLE))
                      {
                      return ___.f(function (el, property) {
                          var x0___, value, computed;
                          property = property === 'float'? (property =
                            'cssFloat'): (x0___ = Y.Dom_v___? Y.Dom:
                            Y.v___('Dom'), x0___._toCamel_m___?
                            x0___._toCamel(property): x0___.m___('_toCamel', [
                                property ]));
                          value = (el.style_v___? el.style: el.v___('style'))
                            .v___(property);
                          if (!value) {
                            computed = el.v___(OWNER_DOCUMENT)
                              .v___(DEFAULT_VIEW).m___(GET_COMPUTED_STYLE, [
                                el, null ]);
                            if (computed) {
                              value = computed.v___(property);
                            }
                          }
                          return value;
                        });
                    } else if (documentElement.v___(CURRENT_STYLE)) {
                      return ___.f(function (el, property) {
                          var value, x0___, x1___, x2___, x3___;
                          switch (property) {
                          case 'opacity':
                            value = 100;
                            try {
                              value = (x0___ = (el.filters_v___? el.filters:
                                  el.v___('filters'))
                                .v___('DXImageTransform.Microsoft.Alpha'),
                                x0___.opacity_v___? x0___.opacity:
                                x0___.v___('opacity'));
                            } catch (ex___) {
                              try {
                                throw ___.tameException(ex___);
                              } catch (e) {
                                try {
                                  value = (x1___ = el.filters_m___?
                                      el.filters('alpha'): el.m___('filters', [
                                        'alpha' ]), x1___.opacity_v___?
                                      x1___.opacity: x1___.v___('opacity'));
                                } catch (ex___) {
                                  try {
                                    throw ___.tameException(ex___);
                                  } catch (err) {
                                    x2___ = IMPORTS___.YAHOO_v___?
                                      IMPORTS___.YAHOO: ___.ri(IMPORTS___,
                                      'YAHOO'), x2___.log_m___?
                                      x2___.log('getStyle: IE filter failed',
                                      'error', 'Dom'): x2___.m___('log', [
                                        'getStyle: IE filter failed', 'error',
                                        'Dom' ]);
                                  }
                                }
                              }
                            }
                            return value / 100;
                          case 'float':
                            property = 'styleFloat';
                          default:
                            property = (x3___ = Y.Dom_v___? Y.Dom:
                              Y.v___('Dom'), x3___._toCamel_m___?
                              x3___._toCamel(property): x3___.m___('_toCamel',
                                [ property ]));
                            value = el.v___(CURRENT_STYLE) ?
                              el.v___(CURRENT_STYLE).v___(property): null;
                            return (el.style_v___? el.style: el.v___('style'))
                              .v___(property) || value;
                          }
                        });
                    }
                  }).i___(), 'setStyle', (function () {
                    function setStyle$_lit(el, property, val) {
                      var x0___, x1___, x2___, x3___;
                      x0___ = Y.Dom_v___? Y.Dom: Y.v___('Dom'), x2___ = (x1___
                        = Y.Dom_v___? Y.Dom: Y.v___('Dom'),
                        x1___._setStyle_v___? x1___._setStyle:
                        x1___.v___('_setStyle')), x3___ = ___.iM([ 'prop',
                          property, 'val', val ]), x0___.batch_m___?
                        x0___.batch(el, x2___, x3___): x0___.m___('batch', [
                          el, x2___, x3___ ]);
                    }
                    return ___.f(setStyle$_lit, 'setStyle$_lit');
                  })(), '_setStyle', ___.f(function () {
                    if (isIE) {
                      return ___.f(function (el, args) {
                          var property, x0___, x1___, val, x2___, x3___, x4___,
                          x5___, x6___, x7___, x8___, x9___;
                          property = (x0___ = Y.Dom_v___? Y.Dom: Y.v___('Dom'),
                            x1___ = args.prop_v___? args.prop:
                            args.v___('prop'), x0___._toCamel_m___?
                            x0___._toCamel(x1___): x0___.m___('_toCamel', [
                                x1___ ])), val = args.val_v___? args.val:
                          args.v___('val');
                          if (el) {
                            switch (property) {
                            case 'opacity':
                              if (x3___ = (x2___ = el.style_v___? el.style:
                                  el.v___('style'), x2___.filter_v___?
                                  x2___.filter: x2___.v___('filter')),
                                lang.isString_m___? lang.isString(x3___):
                                lang.m___('isString', [ x3___ ])) {
                                x4___ = el.style_v___? el.style:
                                el.v___('style'), x5___ = 'alpha(opacity=' +
                                  val * 100 + ')', x4___.filter_w___ === x4___?
                                  (x4___.filter = x5___): x4___.w___('filter',
                                  x5___);
                                if (!el.v___(CURRENT_STYLE) || ! (x6___ =
                                    el.v___(CURRENT_STYLE),
                                    x6___.hasLayout_v___? x6___.hasLayout:
                                    x6___.v___('hasLayout'))) {
                                  x7___ = el.style_v___? el.style:
                                  el.v___('style'), x7___.zoom_w___ === x7___?
                                    (x7___.zoom = 1): x7___.w___('zoom', 1);
                                }
                              }
                              break;
                            case 'float':
                              property = 'styleFloat';
                            default:
                              (el.style_v___? el.style: el.v___('style'))
                              .w___(property, val);
                            }
                          } else {
                            x8___ = IMPORTS___.YAHOO_v___? IMPORTS___.YAHOO:
                            ___.ri(IMPORTS___, 'YAHOO'), x9___ = 'element ' +
                              el + ' is undefined', x8___.log_m___?
                              x8___.log(x9___, 'error', 'Dom'):
                            x8___.m___('log', [ x9___, 'error', 'Dom' ]);
                          }
                        });
                    } else {
                      return ___.f(function (el, args) {
                          var property, x0___, x1___, val, x2___, x3___;
                          property = (x0___ = Y.Dom_v___? Y.Dom: Y.v___('Dom'),
                            x1___ = args.prop_v___? args.prop:
                            args.v___('prop'), x0___._toCamel_m___?
                            x0___._toCamel(x1___): x0___.m___('_toCamel', [
                                x1___ ])), val = args.val_v___? args.val:
                          args.v___('val');
                          if (el) {
                            if (property == 'float') {
                              property = 'cssFloat';
                            }
                            (el.style_v___? el.style: el.v___('style'))
                            .w___(property, val);
                          } else {
                            x2___ = IMPORTS___.YAHOO_v___? IMPORTS___.YAHOO:
                            ___.ri(IMPORTS___, 'YAHOO'), x3___ = 'element ' +
                              el + ' is undefined', x2___.log_m___?
                              x2___.log(x3___, 'error', 'Dom'):
                            x2___.m___('log', [ x3___, 'error', 'Dom' ]);
                          }
                        });
                    }
                  }).i___(), 'getXY', (function () {
                    function getXY$_lit(el) {
                      var x0___, x1___, x2___;
                      return x0___ = Y.Dom_v___? Y.Dom: Y.v___('Dom'), x2___ =
                        (x1___ = Y.Dom_v___? Y.Dom: Y.v___('Dom'),
                        x1___._getXY_v___? x1___._getXY: x1___.v___('_getXY')),
                      x0___.batch_m___? x0___.batch(el, x2___):
                      x0___.m___('batch', [ el, x2___ ]);
                    }
                    return ___.f(getXY$_lit, 'getXY$_lit');
                  })(), '_canPosition', (function () {
                    function _canPosition$_lit(el) {
                      var x0___, x1___;
                      return (x0___ = Y.Dom_v___? Y.Dom: Y.v___('Dom'),
                        x0___._getStyle_m___? x0___._getStyle(el, 'display'):
                        x0___.m___('_getStyle', [ el, 'display' ])) !== 'none'
                        && (x1___ = Y.Dom_v___? Y.Dom: Y.v___('Dom'),
                        x1___._inDoc_m___? x1___._inDoc(el):
                        x1___.m___('_inDoc', [ el ]));
                    }
                    return ___.f(_canPosition$_lit, '_canPosition$_lit');
                  })(), '_getXY', ___.f(function () {
                    if (document.v___(DOCUMENT_ELEMENT)
                        .v___(GET_BOUNDING_CLIENT_RECT)) {
                      return ___.f(function (node) {
                          var scrollLeft, scrollTop, box, doc, off1, off2,
                          mode, bLeft, bTop, floor, x0___, xy, x1___, x2___,
                          x3___, x4___, x5___, x6___, x7___, x8___, x9___,
                          x10___, x11___, x12___, x13___, x14___;
                          floor = (x0___ = IMPORTS___.Math_v___?
                            IMPORTS___.Math: ___.ri(IMPORTS___, 'Math'),
                            x0___.floor_v___? x0___.floor: x0___.v___('floor'))
                            , xy = false;
                          if (x1___ = Y.Dom_v___? Y.Dom: Y.v___('Dom'),
                            x1___._canPosition_m___? x1___._canPosition(node):
                            x1___.m___('_canPosition', [ node ])) {
                            box = node.m___(GET_BOUNDING_CLIENT_RECT, [ ]);
                            doc = node.v___(OWNER_DOCUMENT);
                            scrollLeft = (x2___ = Y.Dom_v___? Y.Dom:
                              Y.v___('Dom'), x2___.getDocumentScrollLeft_m___?
                              x2___.getDocumentScrollLeft(doc):
                              x2___.m___('getDocumentScrollLeft', [ doc ]));
                            scrollTop = (x3___ = Y.Dom_v___? Y.Dom:
                              Y.v___('Dom'), x3___.getDocumentScrollTop_m___?
                              x3___.getDocumentScrollTop(doc):
                              x3___.m___('getDocumentScrollTop', [ doc ]));
                            xy = [ floor.i___(box.v___(LEFT)),
                              floor.i___(box.v___(TOP)) ];
                            if (isIE && (UA.ie_v___? UA.ie: UA.v___('ie')) < 8)
                              {
                              off1 = 2;
                              off2 = 2;
                              mode = doc.v___(COMPAT_MODE);
                              if ((UA.ie_v___? UA.ie: UA.v___('ie')) === 6) {
                                if (mode !== _BACK_COMPAT) {
                                  off1 = 0;
                                  off2 = 0;
                                }
                              }
                              if (mode === _BACK_COMPAT) {
                                bLeft =
                                  _getComputedStyle.i___(doc.v___(DOCUMENT_ELEMENT)
                                    , BORDER_LEFT_WIDTH);
                                bTop =
                                  _getComputedStyle.i___(doc.v___(DOCUMENT_ELEMENT)
                                  , BORDER_TOP_WIDTH);
                                if (bLeft !== MEDIUM) {
                                  off1 = (IMPORTS___.parseInt_v___?
                                      IMPORTS___.parseInt: ___.ri(IMPORTS___,
                                      'parseInt')).i___(bLeft, 10);
                                }
                                if (bTop !== MEDIUM) {
                                  off2 = (IMPORTS___.parseInt_v___?
                                      IMPORTS___.parseInt: ___.ri(IMPORTS___,
                                      'parseInt')).i___(bTop, 10);
                                }
                              }
                              x4___ = xy, x5___ = +0, x4___.w___(x5___,
                                x4___.v___(x5___) - off1);
                              x6___ = xy, x7___ = +1, x6___.w___(x7___,
                                x6___.v___(x7___) - off2);
                            }
                            if (scrollTop || scrollLeft) {
                              x8___ = xy, x9___ = +0, x8___.w___(x9___,
                                x8___.v___(x9___) + scrollLeft);
                              x10___ = xy, x11___ = +1, x10___.w___(x11___,
                                x10___.v___(x11___) + scrollTop);
                            }
                            x12___ = floor.i___(xy[ +0 ]), xy.NUM____w___ ===
                              xy? (xy[ +0 ] = x12___): xy.w___(+0, x12___);
                            x13___ = floor.i___(xy[ +1 ]), xy.NUM____w___ ===
                              xy? (xy[ +1 ] = x13___): xy.w___(+1, x13___);
                          } else {
                            x14___ = IMPORTS___.YAHOO_v___? IMPORTS___.YAHOO:
                            ___.ri(IMPORTS___, 'YAHOO'), x14___.log_m___?
                              x14___.log('getXY failed: element not positionable (either not in a document or not displayed)',
                              'error', 'Dom'): x14___.m___('log', [
                                'getXY failed: element not positionable (either not in a document or not displayed)',
                                'error', 'Dom' ]);
                          }
                          return xy;
                        });
                    } else {
                      return ___.f(function (node) {
                          var docScrollLeft, docScrollTop, scrollTop,
                          scrollLeft, bCheck, xy, parentNode, x0___, x1___,
                          x2___, x3___, x4___, x5___, x6___, x7___, x8___,
                          x9___, x10___, x11___, x12___, x13___, x14___,
                          x15___, x16___, x17___, x18___, x19___, x20___,
                          x21___, x22___, x23___, x24___, x25___, x26___,
                          x27___, x28___, x29___, x30___, x31___, x32___,
                          x33___, x34___, x35___;
                          xy = false, parentNode = node;
                          if (x0___ = Y.Dom_v___? Y.Dom: Y.v___('Dom'),
                            x0___._canPosition_m___? x0___._canPosition(node):
                            x0___.m___('_canPosition', [ node ])) {
                            xy = [ node.v___(OFFSET_LEFT),
                              node.v___(OFFSET_TOP) ];
                            docScrollLeft = (x1___ = Y.Dom_v___? Y.Dom:
                              Y.v___('Dom'), x2___ = node.v___(OWNER_DOCUMENT),
                              x1___.getDocumentScrollLeft_m___?
                              x1___.getDocumentScrollLeft(x2___):
                              x1___.m___('getDocumentScrollLeft', [ x2___ ]));
                            docScrollTop = (x3___ = Y.Dom_v___? Y.Dom:
                              Y.v___('Dom'), x4___ = node.v___(OWNER_DOCUMENT),
                              x3___.getDocumentScrollTop_m___?
                              x3___.getDocumentScrollTop(x4___):
                              x3___.m___('getDocumentScrollTop', [ x4___ ]));
                            bCheck = isGecko || (UA.webkit_v___? UA.webkit:
                              UA.v___('webkit')) > 519? true: false;
                            while (parentNode = parentNode.v___(OFFSET_PARENT))
                              {
                              x5___ = xy, x6___ = +0, x5___.w___(x6___,
                                x5___.v___(x6___) +
                                  parentNode.v___(OFFSET_LEFT));
                              x7___ = xy, x8___ = +1, x7___.w___(x8___,
                                x7___.v___(x8___) + parentNode.v___(OFFSET_TOP)
                              );
                              if (bCheck) {
                                xy = (x9___ = Y.Dom_v___? Y.Dom: Y.v___('Dom'),
                                  x9___._calcBorders_m___?
                                  x9___._calcBorders(parentNode, xy):
                                  x9___.m___('_calcBorders', [ parentNode, xy ]
                                  ));
                              }
                            }
                            if ((x10___ = Y.Dom_v___? Y.Dom: Y.v___('Dom'),
                                x10___._getStyle_m___? x10___._getStyle(node,
                                  POSITION): x10___.m___('_getStyle', [ node,
                                    POSITION ])) !== FIXED) {
                              parentNode = node;
                              while ((parentNode = parentNode.v___(PARENT_NODE)
                                ) && parentNode.v___(TAG_NAME)) {
                                scrollTop = parentNode.v___(SCROLL_TOP);
                                scrollLeft = parentNode.v___(SCROLL_LEFT);
                                if (isGecko && (x11___ = Y.Dom_v___? Y.Dom:
                                    Y.v___('Dom'), x11___._getStyle_m___?
                                    x11___._getStyle(parentNode, 'overflow'):
                                    x11___.m___('_getStyle', [ parentNode,
                                        'overflow' ])) !== 'visible') {
                                  xy = (x12___ = Y.Dom_v___? Y.Dom:
                                    Y.v___('Dom'), x12___._calcBorders_m___?
                                    x12___._calcBorders(parentNode, xy):
                                    x12___.m___('_calcBorders', [ parentNode,
                                        xy ]));
                                }
                                if (scrollTop || scrollLeft) {
                                  x13___ = xy, x14___ = +0, x13___.w___(x14___,
                                    x13___.v___(x14___) - scrollLeft);
                                  x15___ = xy, x16___ = +1, x15___.w___(x16___,
                                    x15___.v___(x16___) - scrollTop);
                                }
                              }
                              x17___ = xy, x18___ = +0, x17___.w___(x18___,
                                x17___.v___(x18___) + docScrollLeft);
                              x19___ = xy, x20___ = +1, x19___.w___(x20___,
                                x19___.v___(x20___) + docScrollTop);
                            } else {
                              if (isOpera) {
                                x21___ = xy, x22___ = +0, x21___.w___(x22___,
                                  x21___.v___(x22___) - docScrollLeft);
                                x23___ = xy, x24___ = +1, x23___.w___(x24___,
                                  x23___.v___(x24___) - docScrollTop);
                              } else if (isSafari || isGecko) {
                                x25___ = xy, x26___ = +0, x25___.w___(x26___,
                                  x25___.v___(x26___) + docScrollLeft);
                                x27___ = xy, x28___ = +1, x27___.w___(x28___,
                                  x27___.v___(x28___) + docScrollTop);
                              }
                            }
                            x31___ = (x29___ = IMPORTS___.Math_v___?
                              IMPORTS___.Math: ___.ri(IMPORTS___, 'Math'),
                              x30___ = xy[ +0 ], x29___.floor_m___?
                              x29___.floor(x30___): x29___.m___('floor', [
                                  x30___ ])), xy.NUM____w___ === xy? (xy[ +0 ]
                              = x31___): xy.w___(+0, x31___);
                            x34___ = (x32___ = IMPORTS___.Math_v___?
                              IMPORTS___.Math: ___.ri(IMPORTS___, 'Math'),
                              x33___ = xy[ +1 ], x32___.floor_m___?
                              x32___.floor(x33___): x32___.m___('floor', [
                                  x33___ ])), xy.NUM____w___ === xy? (xy[ +1 ]
                                = x34___): xy.w___(+1, x34___);
                          } else {
                            x35___ = IMPORTS___.YAHOO_v___? IMPORTS___.YAHOO:
                            ___.ri(IMPORTS___, 'YAHOO'), x35___.log_m___?
                              x35___.log('getXY failed: element not positionable (either not in a document or not displayed)',
                              'error', 'Dom'): x35___.m___('log', [
                                'getXY failed: element not positionable (either not in a document or not displayed)',
                                'error', 'Dom' ]);
                          }
                          return xy;
                        });
                    }
                  }).i___(), 'getX', (function () {
                    function getX$_lit(el) {
                      var f, x0___, x1___;
                      f = (function () {
                          function f$_var(el) {
                            var x0___;
                            return (x0___ = Y.Dom_v___? Y.Dom: Y.v___('Dom'),
                              x0___.getXY_m___? x0___.getXY(el):
                              x0___.m___('getXY', [ el ]))[ +0 ];
                          }
                          return ___.f(f$_var, 'f$_var');
                        })();
                      return x0___ = Y.Dom_v___? Y.Dom: Y.v___('Dom'), x1___ =
                        Y.Dom_v___? Y.Dom: Y.v___('Dom'), x0___.batch_m___?
                        x0___.batch(el, f, x1___, true): x0___.m___('batch', [
                          el, f, x1___, true ]);
                    }
                    return ___.f(getX$_lit, 'getX$_lit');
                  })(), 'getY', (function () {
                    function getY$_lit(el) {
                      var f, x0___, x1___;
                      f = (function () {
                          function f$_var(el) {
                            var x0___;
                            return (x0___ = Y.Dom_v___? Y.Dom: Y.v___('Dom'),
                              x0___.getXY_m___? x0___.getXY(el):
                              x0___.m___('getXY', [ el ]))[ +1 ];
                          }
                          return ___.f(f$_var, 'f$_var');
                        })();
                      return x0___ = Y.Dom_v___? Y.Dom: Y.v___('Dom'), x1___ =
                        Y.Dom_v___? Y.Dom: Y.v___('Dom'), x0___.batch_m___?
                        x0___.batch(el, f, x1___, true): x0___.m___('batch', [
                          el, f, x1___, true ]);
                    }
                    return ___.f(getY$_lit, 'getY$_lit');
                  })(), 'setXY', (function () {
                    function setXY$_lit(el, pos, noRetry) {
                      var x0___, x1___, x2___, x3___;
                      x0___ = Y.Dom_v___? Y.Dom: Y.v___('Dom'), x2___ = (x1___
                        = Y.Dom_v___? Y.Dom: Y.v___('Dom'), x1___._setXY_v___?
                        x1___._setXY: x1___.v___('_setXY')), x3___ = ___.iM([
                          'pos', pos, 'noRetry', noRetry ]), x0___.batch_m___?
                        x0___.batch(el, x2___, x3___): x0___.m___('batch', [
                          el, x2___, x3___ ]);
                    }
                    return ___.f(setXY$_lit, 'setXY$_lit');
                  })(), '_setXY', (function () {
                    function _setXY$_lit(node, args) {
                      var pos, x0___, setStyle, x1___, xy, noRetry, delta,
                      x2___, x3___, currentXY, newXY, x4___, x5___, x6___,
                      x7___, x8___, x9___, x10___, x11___, x12___;
                      pos = (x0___ = Y.Dom_v___? Y.Dom: Y.v___('Dom'),
                        x0___._getStyle_m___? x0___._getStyle(node, POSITION):
                        x0___.m___('_getStyle', [ node, POSITION ])), setStyle
                        = (x1___ = Y.Dom_v___? Y.Dom: Y.v___('Dom'),
                        x1___.setStyle_v___? x1___.setStyle:
                        x1___.v___('setStyle')), xy = args.pos_v___? args.pos:
                      args.v___('pos'), noRetry = args.noRetry_v___?
                        args.noRetry: args.v___('noRetry'), delta = [
                        (IMPORTS___.parseInt_v___? IMPORTS___.parseInt:
                         ___.ri(IMPORTS___, 'parseInt')).i___((x2___ =
                            Y.Dom_v___? Y.Dom: Y.v___('Dom'),
                            x2___.getComputedStyle_m___?
                            x2___.getComputedStyle(node, LEFT):
                            x2___.m___('getComputedStyle', [ node, LEFT ])),
                          10), (IMPORTS___.parseInt_v___? IMPORTS___.parseInt:
                          ___.ri(IMPORTS___, 'parseInt')).i___((x3___ =
                            Y.Dom_v___? Y.Dom: Y.v___('Dom'),
                            x3___.getComputedStyle_m___?
                            x3___.getComputedStyle(node, TOP):
                            x3___.m___('getComputedStyle', [ node, TOP ])), 10)
                      ];
                      if (pos == 'static') {
                        pos = RELATIVE;
                        setStyle.i___(node, POSITION, pos);
                      }
                      currentXY = (x4___ = Y.Dom_v___? Y.Dom: Y.v___('Dom'),
                        x4___._getXY_m___? x4___._getXY(node):
                        x4___.m___('_getXY', [ node ]));
                      if (!xy || currentXY === false) {
                        x5___ = IMPORTS___.YAHOO_v___? IMPORTS___.YAHOO:
                        ___.ri(IMPORTS___, 'YAHOO'), x5___.log_m___?
                          x5___.log('xy failed: node not available', 'error',
                          'Node'): x5___.m___('log', [
                            'xy failed: node not available', 'error', 'Node' ])
                          ;
                        return false;
                      }
                      if ((IMPORTS___.isNaN_v___? IMPORTS___.isNaN:
                          ___.ri(IMPORTS___, 'isNaN')).i___(delta[ +0 ])) {
                        x6___ = pos == RELATIVE? 0: node.v___(OFFSET_LEFT),
                        delta.NUM____w___ === delta? (delta[ +0 ] = x6___):
                        delta.w___(+0, x6___);
                      }
                      if ((IMPORTS___.isNaN_v___? IMPORTS___.isNaN:
                          ___.ri(IMPORTS___, 'isNaN')).i___(delta[ +1 ])) {
                        x7___ = pos == RELATIVE? 0: node.v___(OFFSET_TOP),
                        delta.NUM____w___ === delta? (delta[ +1 ] = x7___):
                        delta.w___(+1, x7___);
                      }
                      if (xy[ +0 ] !== null) {
                        setStyle.i___(node, LEFT, xy[ +0 ] - currentXY[ +0 ] +
                          delta[ +0 ] + 'px');
                      }
                      if (xy[ +1 ] !== null) {
                        setStyle.i___(node, TOP, xy[ +1 ] - currentXY[ +1 ] +
                          delta[ +1 ] + 'px');
                      }
                      if (!noRetry) {
                        newXY = (x8___ = Y.Dom_v___? Y.Dom: Y.v___('Dom'),
                          x8___._getXY_m___? x8___._getXY(node):
                          x8___.m___('_getXY', [ node ]));
                        if (xy[ +0 ] !== null && newXY[ +0 ] != xy[ +0 ] || xy[
                            +1 ] !== null && newXY[ +1 ] != xy[ +1 ]) {
                          x9___ = Y.Dom_v___? Y.Dom: Y.v___('Dom'), x10___ =
                            ___.iM([ 'pos', xy, 'noRetry', true ]),
                          x9___._setXY_m___? x9___._setXY(node, x10___):
                          x9___.m___('_setXY', [ node, x10___ ]);
                        }
                      }
                      x11___ = IMPORTS___.YAHOO_v___? IMPORTS___.YAHOO:
                      ___.ri(IMPORTS___, 'YAHOO'), x12___ =
                        'setXY setting position to ' + xy, x11___.log_m___?
                        x11___.log(x12___, 'info', 'Node'): x11___.m___('log',
                        [ x12___, 'info', 'Node' ]);
                    }
                    return ___.f(_setXY$_lit, '_setXY$_lit');
                  })(), 'setX', (function () {
                    function setX$_lit(el, x) {
                      var x0___, x1___;
                      x0___ = Y.Dom_v___? Y.Dom: Y.v___('Dom'), x1___ = [ x,
                        null ], x0___.setXY_m___? x0___.setXY(el, x1___):
                      x0___.m___('setXY', [ el, x1___ ]);
                    }
                    return ___.f(setX$_lit, 'setX$_lit');
                  })(), 'setY', (function () {
                    function setY$_lit(el, y) {
                      var x0___, x1___;
                      x0___ = Y.Dom_v___? Y.Dom: Y.v___('Dom'), x1___ = [ null,
                        y ], x0___.setXY_m___? x0___.setXY(el, x1___):
                      x0___.m___('setXY', [ el, x1___ ]);
                    }
                    return ___.f(setY$_lit, 'setY$_lit');
                  })(), 'getRegion', (function () {
                    function getRegion$_lit(el) {
                      var f, x0___, x1___;
                      f = (function () {
                          function f$_var(el) {
                            var region, x0___, x1___, x2___, x3___, x4___;
                            region = false;
                            if (x0___ = Y.Dom_v___? Y.Dom: Y.v___('Dom'),
                              x0___._canPosition_m___? x0___._canPosition(el):
                              x0___.m___('_canPosition', [ el ])) {
                              region = (x1___ = Y.Region_v___? Y.Region:
                                Y.v___('Region'), x1___.getRegion_m___?
                                x1___.getRegion(el): x1___.m___('getRegion', [
                                    el ]));
                              x2___ = IMPORTS___.YAHOO_v___? IMPORTS___.YAHOO:
                              ___.ri(IMPORTS___, 'YAHOO'), x3___ =
                                'getRegion returning ' + region,
                              x2___.log_m___? x2___.log(x3___, 'info', 'Dom'):
                              x2___.m___('log', [ x3___, 'info', 'Dom' ]);
                            } else {
                              x4___ = IMPORTS___.YAHOO_v___? IMPORTS___.YAHOO:
                              ___.ri(IMPORTS___, 'YAHOO'), x4___.log_m___?
                                x4___.log('getRegion failed: element not positionable (either not in a document or not displayed)',
                                'error', 'Dom'): x4___.m___('log', [
                                  'getRegion failed: element not positionable (either not in a document or not displayed)',
                                  'error', 'Dom' ]);
                            }
                            return region;
                          }
                          return ___.f(f$_var, 'f$_var');
                        })();
                      return x0___ = Y.Dom_v___? Y.Dom: Y.v___('Dom'), x1___ =
                        Y.Dom_v___? Y.Dom: Y.v___('Dom'), x0___.batch_m___?
                        x0___.batch(el, f, x1___, true): x0___.m___('batch', [
                          el, f, x1___, true ]);
                    }
                    return ___.f(getRegion$_lit, 'getRegion$_lit');
                  })(), 'getClientWidth', (function () {
                    function getClientWidth$_lit() {
                      var x0___;
                      return x0___ = Y.Dom_v___? Y.Dom: Y.v___('Dom'),
                      x0___.getViewportWidth_m___? x0___.getViewportWidth():
                      x0___.m___('getViewportWidth', [ ]);
                    }
                    return ___.f(getClientWidth$_lit, 'getClientWidth$_lit');
                  })(), 'getClientHeight', (function () {
                    function getClientHeight$_lit() {
                      var x0___;
                      return x0___ = Y.Dom_v___? Y.Dom: Y.v___('Dom'),
                      x0___.getViewportHeight_m___? x0___.getViewportHeight():
                      x0___.m___('getViewportHeight', [ ]);
                    }
                    return ___.f(getClientHeight$_lit, 'getClientHeight$_lit');
                  })(), 'getElementsByClassName', (function () {
                    function getElementsByClassName$_lit(className, tag, root,
                      apply, o, overrides) {
                      var x0___, nodes, elements, hasClass, x1___, i, len,
                      x2___;
                      className = lang.trim_m___? lang.trim(className):
                      lang.m___('trim', [ className ]);
                      tag = tag || '*';
                      root = root? (x0___ = Y.Dom_v___? Y.Dom: Y.v___('Dom'),
                        x0___.get_m___? x0___.get(root): x0___.m___('get', [
                            root ])): null || document;
                      if (!root) { return [ ]; }
                      nodes = [ ], elements = root.getElementsByTagName_m___?
                        root.getElementsByTagName(tag):
                      root.m___('getElementsByTagName', [ tag ]), hasClass =
                        (x1___ = Y.Dom_v___? Y.Dom: Y.v___('Dom'),
                        x1___.hasClass_v___? x1___.hasClass:
                        x1___.v___('hasClass'));
                      for (i = 0, len = elements.length; i < len; ++i) {
                        if (hasClass.i___(elements[ +i ], className)) {
                          nodes.w___(nodes.length, elements[ +i ]);
                        }
                      }
                      if (apply) {
                        x2___ = Y.Dom_v___? Y.Dom: Y.v___('Dom'),
                        x2___.batch_m___? x2___.batch(nodes, apply, o,
                          overrides): x2___.m___('batch', [ nodes, apply, o,
                            overrides ]);
                      }
                      return nodes;
                    }
                    return ___.f(getElementsByClassName$_lit,
                      'getElementsByClassName$_lit');
                  })(), 'hasClass', (function () {
                    function hasClass$_lit(el, className) {
                      var x0___, x1___, x2___;
                      return x0___ = Y.Dom_v___? Y.Dom: Y.v___('Dom'), x2___ =
                        (x1___ = Y.Dom_v___? Y.Dom: Y.v___('Dom'),
                        x1___._hasClass_v___? x1___._hasClass:
                        x1___.v___('_hasClass')), x0___.batch_m___?
                        x0___.batch(el, x2___, className): x0___.m___('batch',
                        [ el, x2___, className ]);
                    }
                    return ___.f(hasClass$_lit, 'hasClass$_lit');
                  })(), '_hasClass', (function () {
                    function _hasClass$_lit(el, className) {
                      var ret, current, x0___, x1___, x2___, x3___;
                      ret = false;
                      if (el && className) {
                        current = (x0___ = Y.Dom_v___? Y.Dom: Y.v___('Dom'),
                          x0___._getAttribute_m___? x0___._getAttribute(el,
                            CLASS_NAME): x0___.m___('_getAttribute', [ el,
                              CLASS_NAME ])) || EMPTY;
                        if (className.exec_v___? className.exec:
                          className.v___('exec')) {
                          ret = className.test_m___? className.test(current):
                          className.m___('test', [ current ]);
                        } else {
                          ret = className && (x1___ = SPACE + current + SPACE,
                            x2___ = SPACE + className + SPACE,
                            x1___.indexOf_m___? x1___.indexOf(x2___):
                            x1___.m___('indexOf', [ x2___ ])) > -1;
                        }
                      } else {
                        x3___ = IMPORTS___.YAHOO_v___? IMPORTS___.YAHOO:
                        ___.ri(IMPORTS___, 'YAHOO'), x3___.log_m___?
                          x3___.log('hasClass called with invalid arguments',
                          'warn', 'Dom'): x3___.m___('log', [
                            'hasClass called with invalid arguments', 'warn',
                            'Dom' ]);
                      }
                      return ret;
                    }
                    return ___.f(_hasClass$_lit, '_hasClass$_lit');
                  })(), 'addClass', (function () {
                    function addClass$_lit(el, className) {
                      var x0___, x1___, x2___;
                      return x0___ = Y.Dom_v___? Y.Dom: Y.v___('Dom'), x2___ =
                        (x1___ = Y.Dom_v___? Y.Dom: Y.v___('Dom'),
                        x1___._addClass_v___? x1___._addClass:
                        x1___.v___('_addClass')), x0___.batch_m___?
                        x0___.batch(el, x2___, className): x0___.m___('batch',
                        [ el, x2___, className ]);
                    }
                    return ___.f(addClass$_lit, 'addClass$_lit');
                  })(), '_addClass', (function () {
                    function _addClass$_lit(el, className) {
                      var ret, current, x0___, x1___, x2___, x3___, x4___;
                      ret = false;
                      if (el && className) {
                        current = (x0___ = Y.Dom_v___? Y.Dom: Y.v___('Dom'),
                          x0___._getAttribute_m___? x0___._getAttribute(el,
                            CLASS_NAME): x0___.m___('_getAttribute', [ el,
                              CLASS_NAME ])) || EMPTY;
                        if (! (x1___ = Y.Dom_v___? Y.Dom: Y.v___('Dom'),
                            x1___._hasClass_m___? x1___._hasClass(el,
                              className): x1___.m___('_hasClass', [ el,
                                className ]))) {
                          x2___ = Y.Dom_v___? Y.Dom: Y.v___('Dom'), x3___ =
                            trim.i___(current + SPACE + className),
                          x2___.setAttribute_m___? x2___.setAttribute(el,
                            CLASS_NAME, x3___): x2___.m___('setAttribute', [
                              el, CLASS_NAME, x3___ ]);
                          ret = true;
                        }
                      } else {
                        x4___ = IMPORTS___.YAHOO_v___? IMPORTS___.YAHOO:
                        ___.ri(IMPORTS___, 'YAHOO'), x4___.log_m___?
                          x4___.log('addClass called with invalid arguments',
                          'warn', 'Dom'): x4___.m___('log', [
                            'addClass called with invalid arguments', 'warn',
                            'Dom' ]);
                      }
                      return ret;
                    }
                    return ___.f(_addClass$_lit, '_addClass$_lit');
                  })(), 'removeClass', (function () {
                    function removeClass$_lit(el, className) {
                      var x0___, x1___, x2___;
                      return x0___ = Y.Dom_v___? Y.Dom: Y.v___('Dom'), x2___ =
                        (x1___ = Y.Dom_v___? Y.Dom: Y.v___('Dom'),
                        x1___._removeClass_v___? x1___._removeClass:
                        x1___.v___('_removeClass')), x0___.batch_m___?
                        x0___.batch(el, x2___, className): x0___.m___('batch',
                        [ el, x2___, className ]);
                    }
                    return ___.f(removeClass$_lit, 'removeClass$_lit');
                  })(), '_removeClass', (function () {
                    function _removeClass$_lit(el, className) {
                      var ret, current, newClass, attr, x0___, x1___, x2___,
                      x3___, x4___, x5___, x6___, x7___, x8___, x9___, x10___;
                      ret = false;
                      if (el && className) {
                        current = (x0___ = Y.Dom_v___? Y.Dom: Y.v___('Dom'),
                          x0___._getAttribute_m___? x0___._getAttribute(el,
                            CLASS_NAME): x0___.m___('_getAttribute', [ el,
                              CLASS_NAME ])) || EMPTY;
                        x1___ = Y.Dom_v___? Y.Dom: Y.v___('Dom'), x4___ =
                          (x3___ = (x2___ = Y.Dom_v___? Y.Dom: Y.v___('Dom'),
                            x2___._getClassRegex_m___?
                            x2___._getClassRegex(className):
                            x2___.m___('_getClassRegex', [ className ])),
                          current.replace_m___? current.replace(x3___, EMPTY):
                          current.m___('replace', [ x3___, EMPTY ])),
                        x1___.setAttribute_m___? x1___.setAttribute(el,
                          CLASS_NAME, x4___): x1___.m___('setAttribute', [ el,
                            CLASS_NAME, x4___ ]);
                        newClass = (x5___ = Y.Dom_v___? Y.Dom: Y.v___('Dom'),
                          x5___._getAttribute_m___? x5___._getAttribute(el,
                            CLASS_NAME): x5___.m___('_getAttribute', [ el,
                              CLASS_NAME ]));
                        if (current !== newClass) {
                          x6___ = Y.Dom_v___? Y.Dom: Y.v___('Dom'), x7___ =
                            trim.i___(newClass), x6___.setAttribute_m___?
                            x6___.setAttribute(el, CLASS_NAME, x7___):
                          x6___.m___('setAttribute', [ el, CLASS_NAME, x7___ ])
                            ;
                          ret = true;
                          if ((x8___ = Y.Dom_v___? Y.Dom: Y.v___('Dom'),
                              x8___._getAttribute_m___? x8___._getAttribute(el,
                                CLASS_NAME): x8___.m___('_getAttribute', [ el,
                                  CLASS_NAME ])) === '') {
                            attr = (el.hasAttribute_v___? el.hasAttribute:
                              el.v___('hasAttribute')) &&
                              (el.hasAttribute_m___? el.hasAttribute(_CLASS):
                              el.m___('hasAttribute', [ _CLASS ])) ? _CLASS:
                            CLASS_NAME;
                            x9___ = IMPORTS___.YAHOO_v___? IMPORTS___.YAHOO:
                            ___.ri(IMPORTS___, 'YAHOO'), x9___.log_m___?
                              x9___.log('removeClass removing empty class attribute',
                              'info', 'Dom'): x9___.m___('log', [
                                'removeClass removing empty class attribute',
                                'info', 'Dom' ]);
                            el.removeAttribute_m___? el.removeAttribute(attr):
                            el.m___('removeAttribute', [ attr ]);
                          }
                        }
                      } else {
                        x10___ = IMPORTS___.YAHOO_v___? IMPORTS___.YAHOO:
                        ___.ri(IMPORTS___, 'YAHOO'), x10___.log_m___?
                          x10___.log('removeClass called with invalid arguments',
                          'warn', 'Dom'): x10___.m___('log', [
                            'removeClass called with invalid arguments',
                            'warn', 'Dom' ]);
                      }
                      return ret;
                    }
                    return ___.f(_removeClass$_lit, '_removeClass$_lit');
                  })(), 'replaceClass', (function () {
                    function replaceClass$_lit(el, oldClassName, newClassName)
                      {
                      var x0___, x1___, x2___, x3___;
                      return x0___ = Y.Dom_v___? Y.Dom: Y.v___('Dom'), x2___ =
                        (x1___ = Y.Dom_v___? Y.Dom: Y.v___('Dom'),
                        x1___._replaceClass_v___? x1___._replaceClass:
                        x1___.v___('_replaceClass')), x3___ = ___.iM([ 'from',
                          oldClassName, 'to', newClassName ]),
                      x0___.batch_m___? x0___.batch(el, x2___, x3___):
                      x0___.m___('batch', [ el, x2___, x3___ ]);
                    }
                    return ___.f(replaceClass$_lit, 'replaceClass$_lit');
                  })(), '_replaceClass', (function () {
                    function _replaceClass$_lit(el, classObj) {
                      var className, from, to, ret, current, x0___, x1___,
                      x2___, x3___, x4___, x5___, x6___, x7___, x8___, x9___,
                      x10___, x11___, x12___;
                      ret = false;
                      if (el && classObj) {
                        from = classObj.from_v___? classObj.from:
                        classObj.v___('from');
                        to = classObj.to_v___? classObj.to: classObj.v___('to')
                          ;
                        if (!to) { ret = false; } else if (!from) {
                          ret = (x0___ = Y.Dom_v___? Y.Dom: Y.v___('Dom'),
                            x1___ = classObj.to_v___? classObj.to:
                            classObj.v___('to'), x0___._addClass_m___?
                            x0___._addClass(el, x1___): x0___.m___('_addClass',
                              [ el, x1___ ]));
                        } else if (from !== to) {
                          current = (x2___ = Y.Dom_v___? Y.Dom: Y.v___('Dom'),
                            x2___._getAttribute_m___? x2___._getAttribute(el,
                              CLASS_NAME): x2___.m___('_getAttribute', [ el,
                                CLASS_NAME ])) || EMPTY;
                          className = (x6___ = SPACE + (x4___ = (x3___ =
                                Y.Dom_v___? Y.Dom: Y.v___('Dom'),
                                x3___._getClassRegex_m___?
                                x3___._getClassRegex(from):
                                x3___.m___('_getClassRegex', [ from ])), x5___
                              = SPACE + to, current.replace_m___?
                              current.replace(x4___, x5___):
                              current.m___('replace', [ x4___, x5___ ])), x8___
                            = (x7___ = Y.Dom_v___? Y.Dom: Y.v___('Dom'),
                              x7___._getClassRegex_m___?
                              x7___._getClassRegex(to):
                              x7___.m___('_getClassRegex', [ to ])),
                            x6___.split_m___? x6___.split(x8___):
                            x6___.m___('split', [ x8___ ]));
                          x9___ = SPACE + to, className.splice_m___?
                            className.splice(1, 0, x9___):
                          className.m___('splice', [ 1, 0, x9___ ]);
                          x10___ = Y.Dom_v___? Y.Dom: Y.v___('Dom'), x11___ =
                            trim.i___(className.join_m___?
                            className.join(EMPTY): className.m___('join', [
                                EMPTY ])), x10___.setAttribute_m___?
                            x10___.setAttribute(el, CLASS_NAME, x11___):
                          x10___.m___('setAttribute', [ el, CLASS_NAME, x11___
                            ]);
                          ret = true;
                        }
                      } else {
                        x12___ = IMPORTS___.YAHOO_v___? IMPORTS___.YAHOO:
                        ___.ri(IMPORTS___, 'YAHOO'), x12___.log_m___?
                          x12___.log('replaceClass called with invalid arguments',
                          'warn', 'Dom'): x12___.m___('log', [
                            'replaceClass called with invalid arguments',
                            'warn', 'Dom' ]);
                      }
                      return ret;
                    }
                    return ___.f(_replaceClass$_lit, '_replaceClass$_lit');
                  })(), 'generateId', (function () {
                    function generateId$_lit(el, prefix) {
                      {
                        ___.deodorize(arguments, -6);
                        var a___ = ___.args(arguments);
                      }
                      var f, x0___, x1___, x2___;
                      prefix = prefix || 'yui-gen';
                      f = (function () {
                          function f$_var(el) {
                            var x0___, x1___, id, x2___, x3___, x4___, x5___,
                            x6___, x7___, x8___, x9___, x10___;
                            if (el && (el.id_v___? el.id: el.v___('id'))) {
                              x0___ = IMPORTS___.YAHOO_v___? IMPORTS___.YAHOO:
                              ___.ri(IMPORTS___, 'YAHOO'), x1___ =
                                'generateId returning existing id ' +
                                (el.id_v___? el.id: el.v___('id')),
                              x0___.log_m___? x0___.log(x1___, 'info', 'Dom'):
                              x0___.m___('log', [ x1___, 'info', 'Dom' ]);
                              return el.id_v___? el.id: el.v___('id');
                            }
                            id = prefix + (x2___ = (x3___ =
                                IMPORTS___.YAHOO_v___? IMPORTS___.YAHOO:
                                ___.ri(IMPORTS___, 'YAHOO'), x3___.env_v___?
                                x3___.env: x3___.v___('env')), x4___ = +
                              (x2___._id_counter_v___? x2___._id_counter:
                               x2___.v___('_id_counter')), (x5___ = x4___ + 1,
                                x2___._id_counter_w___ === x2___?
                                (x2___._id_counter = x5___):
                                x2___.w___('_id_counter', x5___)), x4___);
                            x6___ = IMPORTS___.YAHOO_v___? IMPORTS___.YAHOO:
                            ___.ri(IMPORTS___, 'YAHOO'), x7___ =
                              'generateId generating ' + id, x6___.log_m___?
                              x6___.log(x7___, 'info', 'Dom'):
                            x6___.m___('log', [ x7___, 'info', 'Dom' ]);
                            if (el) {
                              if (el.v___(OWNER_DOCUMENT) && (x8___ =
                                  el.v___(OWNER_DOCUMENT),
                                  x8___.getElementById_m___?
                                  x8___.getElementById(id):
                                  x8___.m___('getElementById', [ id ]))) {
                                return x9___ = Y.Dom_v___? Y.Dom: Y.v___('Dom')
                                  , x10___ = id + prefix,
                                x9___.generateId_m___? x9___.generateId(el,
                                  x10___): x9___.m___('generateId', [ el,
                                    x10___ ]);
                              }
                              el.id_w___ === el? (el.id = id): el.w___('id',
                                id);
                            }
                            return id;
                          }
                          return ___.f(f$_var, 'f$_var');
                        })();
                      return (x0___ = Y.Dom_v___? Y.Dom: Y.v___('Dom'), x1___ =
                        Y.Dom_v___? Y.Dom: Y.v___('Dom'), x0___.batch_m___?
                        x0___.batch(el, f, x1___, true): x0___.m___('batch', [
                            el, f, x1___, true ])) || (x2___ = Y.Dom_v___?
                        Y.Dom: Y.v___('Dom'), f.apply_m___? f.apply(x2___,
                          a___): f.m___('apply', [ x2___, a___ ]));
                    }
                    return ___.f(generateId$_lit, 'generateId$_lit');
                  })(), 'isAncestor', (function () {
                    function isAncestor$_lit(haystack, needle) {
                      var x0___, x1___, ret, x2___, x3___, x4___, x5___;
                      haystack = (x0___ = Y.Dom_v___? Y.Dom: Y.v___('Dom'),
                        x0___.get_m___? x0___.get(haystack): x0___.m___('get',
                          [ haystack ]));
                      needle = (x1___ = Y.Dom_v___? Y.Dom: Y.v___('Dom'),
                        x1___.get_m___? x1___.get(needle): x1___.m___('get', [
                            needle ]));
                      ret = false;
                      if (haystack && needle && (haystack.v___(NODE_TYPE) &&
                          needle.v___(NODE_TYPE))) {
                        if ((haystack.contains_v___? haystack.contains:
                            haystack.v___('contains')) && haystack !== needle)
                          {
                          ret = haystack.contains_m___?
                            haystack.contains(needle):
                          haystack.m___('contains', [ needle ]);
                        } else if (haystack.compareDocumentPosition_v___?
                          haystack.compareDocumentPosition:
                          haystack.v___('compareDocumentPosition')) {
                          ret = ! ! ((haystack.compareDocumentPosition_m___?
                                haystack.compareDocumentPosition(needle):
                              haystack.m___('compareDocumentPosition', [ needle
                                ])) & 16);
                        }
                      } else {
                        x2___ = IMPORTS___.YAHOO_v___? IMPORTS___.YAHOO:
                        ___.ri(IMPORTS___, 'YAHOO'), x3___ =
                          'isAncestor failed; invalid input: ' + haystack + ','
                          + needle, x2___.log_m___? x2___.log(x3___, 'error',
                          'Dom'): x2___.m___('log', [ x3___, 'error', 'Dom' ]);
                      }
                      x4___ = IMPORTS___.YAHOO_v___? IMPORTS___.YAHOO:
                      ___.ri(IMPORTS___, 'YAHOO'), x5___ = 'isAncestor(' +
                        haystack + ',' + needle + ' returning ' + ret,
                      x4___.log_m___? x4___.log(x5___, 'info', 'Dom'):
                      x4___.m___('log', [ x5___, 'info', 'Dom' ]);
                      return ret;
                    }
                    return ___.f(isAncestor$_lit, 'isAncestor$_lit');
                  })(), 'inDocument', (function () {
                    function inDocument$_lit(el, doc) {
                      var x0___, x1___, x2___;
                      return x0___ = Y.Dom_v___? Y.Dom: Y.v___('Dom'), x2___ =
                        (x1___ = Y.Dom_v___? Y.Dom: Y.v___('Dom'),
                        x1___.get_m___? x1___.get(el): x1___.m___('get', [ el ]
                        )), x0___._inDoc_m___? x0___._inDoc(x2___, doc):
                      x0___.m___('_inDoc', [ x2___, doc ]);
                    }
                    return ___.f(inDocument$_lit, 'inDocument$_lit');
                  })(), '_inDoc', (function () {
                    function _inDoc$_lit(el, doc) {
                      var ret, x0___, x1___, x2___;
                      ret = false;
                      if (el && el.v___(TAG_NAME)) {
                        doc = doc || el.v___(OWNER_DOCUMENT);
                        ret = (x0___ = Y.Dom_v___? Y.Dom: Y.v___('Dom'), x1___
                          = doc.v___(DOCUMENT_ELEMENT), x0___.isAncestor_m___?
                          x0___.isAncestor(x1___, el): x0___.m___('isAncestor',
                            [ x1___, el ]));
                      } else {
                        x2___ = IMPORTS___.YAHOO_v___? IMPORTS___.YAHOO:
                        ___.ri(IMPORTS___, 'YAHOO'), x2___.log_m___?
                          x2___.log('inDocument failed: invalid input',
                          'error', 'Dom'): x2___.m___('log', [
                            'inDocument failed: invalid input', 'error', 'Dom'
                          ]);
                      }
                      return ret;
                    }
                    return ___.f(_inDoc$_lit, '_inDoc$_lit');
                  })(), 'getElementsBy', (function () {
                    function getElementsBy$_lit(method, tag, root, apply, o,
                      overrides, firstOnly) {
                      var x0___, nodes, elements, i, len, x1___, x2___, x3___;
                      tag = tag || '*';
                      root = root? (x0___ = Y.Dom_v___? Y.Dom: Y.v___('Dom'),
                        x0___.get_m___? x0___.get(root): x0___.m___('get', [
                            root ])): null || document;
                      if (!root) { return [ ]; }
                      nodes = [ ], elements = root.getElementsByTagName_m___?
                        root.getElementsByTagName(tag):
                      root.m___('getElementsByTagName', [ tag ]);
                      for (i = 0, len = elements.length; i < len; ++i) {
                        if (method.i___(elements[ +i ])) {
                          if (firstOnly) {
                            nodes = elements[ +i ];
                            break;
                          } else {
                            nodes.w___(nodes.length, elements[ +i ]);
                          }
                        }
                      }
                      if (apply) {
                        x1___ = Y.Dom_v___? Y.Dom: Y.v___('Dom'),
                        x1___.batch_m___? x1___.batch(nodes, apply, o,
                          overrides): x1___.m___('batch', [ nodes, apply, o,
                            overrides ]);
                      }
                      x2___ = IMPORTS___.YAHOO_v___? IMPORTS___.YAHOO:
                      ___.ri(IMPORTS___, 'YAHOO'), x3___ =
                        'getElementsBy returning ' + nodes, x2___.log_m___?
                        x2___.log(x3___, 'info', 'Dom'): x2___.m___('log', [
                          x3___, 'info', 'Dom' ]);
                      return nodes;
                    }
                    return ___.f(getElementsBy$_lit, 'getElementsBy$_lit');
                  })(), 'getElementBy', (function () {
                    function getElementBy$_lit(method, tag, root) {
                      var x0___;
                      return x0___ = Y.Dom_v___? Y.Dom: Y.v___('Dom'),
                      x0___.getElementsBy_m___? x0___.getElementsBy(method,
                        tag, root, null, null, null, true):
                      x0___.m___('getElementsBy', [ method, tag, root, null,
                          null, null, true ]);
                    }
                    return ___.f(getElementBy$_lit, 'getElementBy$_lit');
                  })(), 'batch', (function () {
                    function batch$_lit(el, method, o, overrides) {
                      var collection, scope, x0___, i, x1___, x2___;
                      collection = [ ], scope = overrides? o:
                      IMPORTS___.window_v___? IMPORTS___.window:
                      ___.ri(IMPORTS___, 'window');
                      el = el && (el.v___(TAG_NAME) || (el.item_v___? el.item:
                          el.v___('item'))) ? el: (x0___ = Y.Dom_v___? Y.Dom:
                        Y.v___('Dom'), x0___.get_m___? x0___.get(el):
                        x0___.m___('get', [ el ]));
                      if (el && method) {
                        if (el.v___(TAG_NAME) || el.length ===
                            (IMPORTS___.undefined_v___? IMPORTS___.undefined:
                            ___.ri(IMPORTS___, 'undefined'))) {
                          return method.call_m___? method.call(scope, el, o):
                          method.m___('call', [ scope, el, o ]);
                        }
                        for (i = 0; i < el.length; ++i) {
                          collection.w___(collection.length, (x1___ = el[ +i ],
                              method.call_m___? method.call(scope, x1___, o):
                              method.m___('call', [ scope, x1___, o ])));
                        }
                      } else {
                        x2___ = IMPORTS___.YAHOO_v___? IMPORTS___.YAHOO:
                        ___.ri(IMPORTS___, 'YAHOO'), x2___.log_m___?
                          x2___.log('batch called with invalid arguments',
                          'warn', 'Dom'): x2___.m___('log', [
                            'batch called with invalid arguments', 'warn',
                            'Dom' ]);
                        return false;
                      }
                      return collection;
                    }
                    return ___.f(batch$_lit, 'batch$_lit');
                  })(), 'getDocumentHeight', (function () {
                    function getDocumentHeight$_lit() {
                      var scrollHeight, x0___, h, x1___, x2___, x3___, x4___,
                      x5___;
                      scrollHeight = document.v___(COMPAT_MODE) != CSS1_COMPAT
                        || isSafari? (x0___ = document.body_v___?
                          document.body: document.v___('body'),
                        x0___.scrollHeight_v___? x0___.scrollHeight:
                        x0___.v___('scrollHeight')):
                      documentElement.scrollHeight_v___?
                        documentElement.scrollHeight:
                      documentElement.v___('scrollHeight'), h = (x1___ =
                        IMPORTS___.Math_v___? IMPORTS___.Math:
                        ___.ri(IMPORTS___, 'Math'), x3___ = (x2___ =
                          Y.Dom_v___? Y.Dom: Y.v___('Dom'),
                          x2___.getViewportHeight_m___?
                          x2___.getViewportHeight():
                          x2___.m___('getViewportHeight', [ ])),
                        x1___.max_m___? x1___.max(scrollHeight, x3___):
                        x1___.m___('max', [ scrollHeight, x3___ ]));
                      x4___ = IMPORTS___.YAHOO_v___? IMPORTS___.YAHOO:
                      ___.ri(IMPORTS___, 'YAHOO'), x5___ =
                        'getDocumentHeight returning ' + h, x4___.log_m___?
                        x4___.log(x5___, 'info', 'Dom'): x4___.m___('log', [
                          x5___, 'info', 'Dom' ]);
                      return h;
                    }
                    return ___.f(getDocumentHeight$_lit,
                      'getDocumentHeight$_lit');
                  })(), 'getDocumentWidth', (function () {
                    function getDocumentWidth$_lit() {
                      var scrollWidth, x0___, w, x1___, x2___, x3___, x4___,
                      x5___;
                      scrollWidth = document.v___(COMPAT_MODE) != CSS1_COMPAT
                        || isSafari? (x0___ = document.body_v___?
                          document.body: document.v___('body'),
                        x0___.scrollWidth_v___? x0___.scrollWidth:
                        x0___.v___('scrollWidth')):
                      documentElement.scrollWidth_v___?
                        documentElement.scrollWidth:
                      documentElement.v___('scrollWidth'), w = (x1___ =
                        IMPORTS___.Math_v___? IMPORTS___.Math:
                        ___.ri(IMPORTS___, 'Math'), x3___ = (x2___ =
                          Y.Dom_v___? Y.Dom: Y.v___('Dom'),
                          x2___.getViewportWidth_m___? x2___.getViewportWidth()
                          : x2___.m___('getViewportWidth', [ ])),
                        x1___.max_m___? x1___.max(scrollWidth, x3___):
                        x1___.m___('max', [ scrollWidth, x3___ ]));
                      x4___ = IMPORTS___.YAHOO_v___? IMPORTS___.YAHOO:
                      ___.ri(IMPORTS___, 'YAHOO'), x5___ =
                        'getDocumentWidth returning ' + w, x4___.log_m___?
                        x4___.log(x5___, 'info', 'Dom'): x4___.m___('log', [
                          x5___, 'info', 'Dom' ]);
                      return w;
                    }
                    return ___.f(getDocumentWidth$_lit,
                      'getDocumentWidth$_lit');
                  })(), 'getViewportHeight', (function () {
                    function getViewportHeight$_lit() {
                      var height, x0___, mode, x1___, x2___, x3___;
                      height = (x0___ = IMPORTS___.self_v___? IMPORTS___.self:
                        ___.ri(IMPORTS___, 'self'), x0___.innerHeight_v___?
                          x0___.innerHeight: x0___.v___('innerHeight')), mode =
                        document.v___(COMPAT_MODE);
                      if ((mode || isIE) && !isOpera) {
                        height = mode == CSS1_COMPAT?
                          documentElement.clientHeight_v___?
                          documentElement.clientHeight:
                        documentElement.v___('clientHeight'): (x1___ =
                            document.body_v___? document.body:
                          document.v___('body'), x1___.clientHeight_v___?
                            x1___.clientHeight: x1___.v___('clientHeight'));
                      }
                      x2___ = IMPORTS___.YAHOO_v___? IMPORTS___.YAHOO:
                      ___.ri(IMPORTS___, 'YAHOO'), x3___ =
                        'getViewportHeight returning ' + height,
                      x2___.log_m___? x2___.log(x3___, 'info', 'Dom'):
                      x2___.m___('log', [ x3___, 'info', 'Dom' ]);
                      return height;
                    }
                    return ___.f(getViewportHeight$_lit,
                      'getViewportHeight$_lit');
                  })(), 'getViewportWidth', (function () {
                    function getViewportWidth$_lit() {
                      var width, x0___, mode, x1___, x2___, x3___;
                      width = (x0___ = IMPORTS___.self_v___? IMPORTS___.self:
                        ___.ri(IMPORTS___, 'self'), x0___.innerWidth_v___?
                          x0___.innerWidth: x0___.v___('innerWidth')), mode =
                        document.v___(COMPAT_MODE);
                      if (mode || isIE) {
                        width = mode == CSS1_COMPAT?
                          documentElement.clientWidth_v___?
                          documentElement.clientWidth:
                        documentElement.v___('clientWidth'): (x1___ =
                            document.body_v___? document.body:
                          document.v___('body'), x1___.clientWidth_v___?
                            x1___.clientWidth: x1___.v___('clientWidth'));
                      }
                      x2___ = IMPORTS___.YAHOO_v___? IMPORTS___.YAHOO:
                      ___.ri(IMPORTS___, 'YAHOO'), x3___ =
                        'getViewportWidth returning ' + width, x2___.log_m___?
                        x2___.log(x3___, 'info', 'Dom'): x2___.m___('log', [
                          x3___, 'info', 'Dom' ]);
                      return width;
                    }
                    return ___.f(getViewportWidth$_lit,
                      'getViewportWidth$_lit');
                  })(), 'getAncestorBy', (function () {
                    function getAncestorBy$_lit(node, method) {
                      var x0___, x1___, x2___, x3___;
                      while (node = node.v___(PARENT_NODE)) {
                        if (x0___ = Y.Dom_v___? Y.Dom: Y.v___('Dom'),
                          x0___._testElement_m___? x0___._testElement(node,
                            method): x0___.m___('_testElement', [ node, method
                            ])) {
                          x1___ = IMPORTS___.YAHOO_v___? IMPORTS___.YAHOO:
                          ___.ri(IMPORTS___, 'YAHOO'), x2___ =
                            'getAncestorBy returning ' + node, x1___.log_m___?
                            x1___.log(x2___, 'info', 'Dom'): x1___.m___('log',
                            [ x2___, 'info', 'Dom' ]);
                          return node;
                        }
                      }
                      x3___ = IMPORTS___.YAHOO_v___? IMPORTS___.YAHOO:
                      ___.ri(IMPORTS___, 'YAHOO'), x3___.log_m___?
                        x3___.log('getAncestorBy returning null (no ancestor passed test)',
                        'error', 'Dom'): x3___.m___('log', [
                          'getAncestorBy returning null (no ancestor passed test)',
                          'error', 'Dom' ]);
                      return null;
                    }
                    return ___.f(getAncestorBy$_lit, 'getAncestorBy$_lit');
                  })(), 'getAncestorByClassName', (function () {
                    function getAncestorByClassName$_lit(node, className) {
                      var x0___, x1___, method, x2___;
                      node = (x0___ = Y.Dom_v___? Y.Dom: Y.v___('Dom'),
                        x0___.get_m___? x0___.get(node): x0___.m___('get', [
                            node ]));
                      if (!node) {
                        x1___ = IMPORTS___.YAHOO_v___? IMPORTS___.YAHOO:
                        ___.ri(IMPORTS___, 'YAHOO'), x1___.log_m___?
                          x1___.log('getAncestorByClassName failed: invalid node argument',
                          'error', 'Dom'): x1___.m___('log', [
                            'getAncestorByClassName failed: invalid node argument',
                            'error', 'Dom' ]);
                        return null;
                      }
                      method = (function () {
                          function method$_var(el) {
                            var x0___;
                            return x0___ = Y.Dom_v___? Y.Dom: Y.v___('Dom'),
                            x0___.hasClass_m___? x0___.hasClass(el, className):
                            x0___.m___('hasClass', [ el, className ]);
                          }
                          return ___.f(method$_var, 'method$_var');
                        })();
                      return x2___ = Y.Dom_v___? Y.Dom: Y.v___('Dom'),
                      x2___.getAncestorBy_m___? x2___.getAncestorBy(node,
                        method): x2___.m___('getAncestorBy', [ node, method ]);
                    }
                    return ___.f(getAncestorByClassName$_lit,
                      'getAncestorByClassName$_lit');
                  })(), 'getAncestorByTagName', (function () {
                    function getAncestorByTagName$_lit(node, tagName) {
                      var x0___, x1___, method, x2___;
                      node = (x0___ = Y.Dom_v___? Y.Dom: Y.v___('Dom'),
                        x0___.get_m___? x0___.get(node): x0___.m___('get', [
                            node ]));
                      if (!node) {
                        x1___ = IMPORTS___.YAHOO_v___? IMPORTS___.YAHOO:
                        ___.ri(IMPORTS___, 'YAHOO'), x1___.log_m___?
                          x1___.log('getAncestorByTagName failed: invalid node argument',
                          'error', 'Dom'): x1___.m___('log', [
                            'getAncestorByTagName failed: invalid node argument',
                            'error', 'Dom' ]);
                        return null;
                      }
                      method = (function () {
                          function method$_var(el) {
                            var x0___;
                            return el.v___(TAG_NAME) && (x0___ =
                              el.v___(TAG_NAME), x0___.toUpperCase_m___?
                              x0___.toUpperCase(): x0___.m___('toUpperCase', [
                                ])) == (tagName.toUpperCase_m___?
                              tagName.toUpperCase():
                              tagName.m___('toUpperCase', [ ]));
                          }
                          return ___.f(method$_var, 'method$_var');
                        })();
                      return x2___ = Y.Dom_v___? Y.Dom: Y.v___('Dom'),
                      x2___.getAncestorBy_m___? x2___.getAncestorBy(node,
                        method): x2___.m___('getAncestorBy', [ node, method ]);
                    }
                    return ___.f(getAncestorByTagName$_lit,
                      'getAncestorByTagName$_lit');
                  })(), 'getPreviousSiblingBy', (function () {
                    function getPreviousSiblingBy$_lit(node, method) {
                      var x0___;
                      while (node) {
                        node = node.previousSibling_v___? node.previousSibling:
                        node.v___('previousSibling');
                        if (x0___ = Y.Dom_v___? Y.Dom: Y.v___('Dom'),
                          x0___._testElement_m___? x0___._testElement(node,
                            method): x0___.m___('_testElement', [ node, method
                            ])) { return node; }
                      }
                      return null;
                    }
                    return ___.f(getPreviousSiblingBy$_lit,
                      'getPreviousSiblingBy$_lit');
                  })(), 'getPreviousSibling', (function () {
                    function getPreviousSibling$_lit(node) {
                      var x0___, x1___, x2___;
                      node = (x0___ = Y.Dom_v___? Y.Dom: Y.v___('Dom'),
                        x0___.get_m___? x0___.get(node): x0___.m___('get', [
                            node ]));
                      if (!node) {
                        x1___ = IMPORTS___.YAHOO_v___? IMPORTS___.YAHOO:
                        ___.ri(IMPORTS___, 'YAHOO'), x1___.log_m___?
                          x1___.log('getPreviousSibling failed: invalid node argument',
                          'error', 'Dom'): x1___.m___('log', [
                            'getPreviousSibling failed: invalid node argument',
                            'error', 'Dom' ]);
                        return null;
                      }
                      return x2___ = Y.Dom_v___? Y.Dom: Y.v___('Dom'),
                      x2___.getPreviousSiblingBy_m___?
                        x2___.getPreviousSiblingBy(node):
                      x2___.m___('getPreviousSiblingBy', [ node ]);
                    }
                    return ___.f(getPreviousSibling$_lit,
                      'getPreviousSibling$_lit');
                  })(), 'getNextSiblingBy', (function () {
                    function getNextSiblingBy$_lit(node, method) {
                      var x0___;
                      while (node) {
                        node = node.nextSibling_v___? node.nextSibling:
                        node.v___('nextSibling');
                        if (x0___ = Y.Dom_v___? Y.Dom: Y.v___('Dom'),
                          x0___._testElement_m___? x0___._testElement(node,
                            method): x0___.m___('_testElement', [ node, method
                            ])) { return node; }
                      }
                      return null;
                    }
                    return ___.f(getNextSiblingBy$_lit,
                      'getNextSiblingBy$_lit');
                  })(), 'getNextSibling', (function () {
                    function getNextSibling$_lit(node) {
                      var x0___, x1___, x2___;
                      node = (x0___ = Y.Dom_v___? Y.Dom: Y.v___('Dom'),
                        x0___.get_m___? x0___.get(node): x0___.m___('get', [
                            node ]));
                      if (!node) {
                        x1___ = IMPORTS___.YAHOO_v___? IMPORTS___.YAHOO:
                        ___.ri(IMPORTS___, 'YAHOO'), x1___.log_m___?
                          x1___.log('getNextSibling failed: invalid node argument',
                          'error', 'Dom'): x1___.m___('log', [
                            'getNextSibling failed: invalid node argument',
                            'error', 'Dom' ]);
                        return null;
                      }
                      return x2___ = Y.Dom_v___? Y.Dom: Y.v___('Dom'),
                      x2___.getNextSiblingBy_m___? x2___.getNextSiblingBy(node)
                        : x2___.m___('getNextSiblingBy', [ node ]);
                    }
                    return ___.f(getNextSibling$_lit, 'getNextSibling$_lit');
                  })(), 'getFirstChildBy', (function () {
                    function getFirstChildBy$_lit(node, method) {
                      var child, x0___, x1___, x2___, x3___;
                      child = (x0___ = Y.Dom_v___? Y.Dom: Y.v___('Dom'), x1___
                        = node.firstChild_v___? node.firstChild:
                        node.v___('firstChild'), x0___._testElement_m___?
                        x0___._testElement(x1___, method):
                        x0___.m___('_testElement', [ x1___, method ])) ?
                        node.firstChild_v___? node.firstChild:
                      node.v___('firstChild'): null;
                      return child || (x2___ = Y.Dom_v___? Y.Dom: Y.v___('Dom')
                        , x3___ = node.firstChild_v___? node.firstChild:
                        node.v___('firstChild'), x2___.getNextSiblingBy_m___?
                        x2___.getNextSiblingBy(x3___, method):
                        x2___.m___('getNextSiblingBy', [ x3___, method ]));
                    }
                    return ___.f(getFirstChildBy$_lit, 'getFirstChildBy$_lit');
                  })(), 'getFirstChild', (function () {
                    function getFirstChild$_lit(node, method) {
                      var x0___, x1___, x2___;
                      node = (x0___ = Y.Dom_v___? Y.Dom: Y.v___('Dom'),
                        x0___.get_m___? x0___.get(node): x0___.m___('get', [
                            node ]));
                      if (!node) {
                        x1___ = IMPORTS___.YAHOO_v___? IMPORTS___.YAHOO:
                        ___.ri(IMPORTS___, 'YAHOO'), x1___.log_m___?
                          x1___.log('getFirstChild failed: invalid node argument',
                          'error', 'Dom'): x1___.m___('log', [
                            'getFirstChild failed: invalid node argument',
                            'error', 'Dom' ]);
                        return null;
                      }
                      return x2___ = Y.Dom_v___? Y.Dom: Y.v___('Dom'),
                      x2___.getFirstChildBy_m___? x2___.getFirstChildBy(node):
                      x2___.m___('getFirstChildBy', [ node ]);
                    }
                    return ___.f(getFirstChild$_lit, 'getFirstChild$_lit');
                  })(), 'getLastChildBy', (function () {
                    function getLastChildBy$_lit(node, method) {
                      var x0___, child, x1___, x2___, x3___, x4___;
                      if (!node) {
                        x0___ = IMPORTS___.YAHOO_v___? IMPORTS___.YAHOO:
                        ___.ri(IMPORTS___, 'YAHOO'), x0___.log_m___?
                          x0___.log('getLastChild failed: invalid node argument',
                          'error', 'Dom'): x0___.m___('log', [
                            'getLastChild failed: invalid node argument',
                            'error', 'Dom' ]);
                        return null;
                      }
                      child = (x1___ = Y.Dom_v___? Y.Dom: Y.v___('Dom'), x2___
                        = node.lastChild_v___? node.lastChild:
                        node.v___('lastChild'), x1___._testElement_m___?
                        x1___._testElement(x2___, method):
                        x1___.m___('_testElement', [ x2___, method ])) ?
                        node.lastChild_v___? node.lastChild:
                      node.v___('lastChild'): null;
                      return child || (x3___ = Y.Dom_v___? Y.Dom: Y.v___('Dom')
                        , x4___ = node.lastChild_v___? node.lastChild:
                        node.v___('lastChild'),
                        x3___.getPreviousSiblingBy_m___?
                        x3___.getPreviousSiblingBy(x4___, method):
                        x3___.m___('getPreviousSiblingBy', [ x4___, method ]));
                    }
                    return ___.f(getLastChildBy$_lit, 'getLastChildBy$_lit');
                  })(), 'getLastChild', (function () {
                    function getLastChild$_lit(node) {
                      var x0___, x1___;
                      node = (x0___ = Y.Dom_v___? Y.Dom: Y.v___('Dom'),
                        x0___.get_m___? x0___.get(node): x0___.m___('get', [
                            node ]));
                      return x1___ = Y.Dom_v___? Y.Dom: Y.v___('Dom'),
                      x1___.getLastChildBy_m___? x1___.getLastChildBy(node):
                      x1___.m___('getLastChildBy', [ node ]);
                    }
                    return ___.f(getLastChild$_lit, 'getLastChild$_lit');
                  })(), 'getChildrenBy', (function () {
                    function getChildrenBy$_lit(node, method) {
                      var child, x0___, children, x1___, x2___;
                      child = (x0___ = Y.Dom_v___? Y.Dom: Y.v___('Dom'),
                        x0___.getFirstChildBy_m___? x0___.getFirstChildBy(node,
                          method): x0___.m___('getFirstChildBy', [ node, method
                          ])), children = child? [ child ]: [ ];
                      x1___ = Y.Dom_v___? Y.Dom: Y.v___('Dom'), x2___ =
                        ___.f(function (node) {
                          if (!method || method.i___(node)) {
                            children.w___(children.length, node);
                          }
                          return false;
                        }), x1___.getNextSiblingBy_m___?
                        x1___.getNextSiblingBy(child, x2___):
                      x1___.m___('getNextSiblingBy', [ child, x2___ ]);
                      return children;
                    }
                    return ___.f(getChildrenBy$_lit, 'getChildrenBy$_lit');
                  })(), 'getChildren', (function () {
                    function getChildren$_lit(node) {
                      var x0___, x1___, x2___;
                      node = (x0___ = Y.Dom_v___? Y.Dom: Y.v___('Dom'),
                        x0___.get_m___? x0___.get(node): x0___.m___('get', [
                            node ]));
                      if (!node) {
                        x1___ = IMPORTS___.YAHOO_v___? IMPORTS___.YAHOO:
                        ___.ri(IMPORTS___, 'YAHOO'), x1___.log_m___?
                          x1___.log('getChildren failed: invalid node argument',
                          'error', 'Dom'): x1___.m___('log', [
                            'getChildren failed: invalid node argument',
                            'error', 'Dom' ]);
                      }
                      return x2___ = Y.Dom_v___? Y.Dom: Y.v___('Dom'),
                      x2___.getChildrenBy_m___? x2___.getChildrenBy(node):
                      x2___.m___('getChildrenBy', [ node ]);
                    }
                    return ___.f(getChildren$_lit, 'getChildren$_lit');
                  })(), 'getDocumentScrollLeft', (function () {
                    function getDocumentScrollLeft$_lit(doc) {
                      var x0___, x1___, x2___, x3___, x4___;
                      doc = doc || document;
                      return x0___ = IMPORTS___.Math_v___? IMPORTS___.Math:
                      ___.ri(IMPORTS___, 'Math'), x2___ = (x1___ =
                        doc.v___(DOCUMENT_ELEMENT), x1___.scrollLeft_v___?
                        x1___.scrollLeft: x1___.v___('scrollLeft')), x4___ =
                        (x3___ = doc.body_v___? doc.body: doc.v___('body'),
                        x3___.scrollLeft_v___? x3___.scrollLeft:
                        x3___.v___('scrollLeft')), x0___.max_m___?
                        x0___.max(x2___, x4___): x0___.m___('max', [ x2___,
                          x4___ ]);
                    }
                    return ___.f(getDocumentScrollLeft$_lit,
                      'getDocumentScrollLeft$_lit');
                  })(), 'getDocumentScrollTop', (function () {
                    function getDocumentScrollTop$_lit(doc) {
                      var x0___, x1___, x2___, x3___, x4___;
                      doc = doc || document;
                      return x0___ = IMPORTS___.Math_v___? IMPORTS___.Math:
                      ___.ri(IMPORTS___, 'Math'), x2___ = (x1___ =
                        doc.v___(DOCUMENT_ELEMENT), x1___.scrollTop_v___?
                        x1___.scrollTop: x1___.v___('scrollTop')), x4___ =
                        (x3___ = doc.body_v___? doc.body: doc.v___('body'),
                        x3___.scrollTop_v___? x3___.scrollTop:
                        x3___.v___('scrollTop')), x0___.max_m___?
                        x0___.max(x2___, x4___): x0___.m___('max', [ x2___,
                          x4___ ]);
                    }
                    return ___.f(getDocumentScrollTop$_lit,
                      'getDocumentScrollTop$_lit');
                  })(), 'insertBefore', (function () {
                    function insertBefore$_lit(newNode, referenceNode) {
                      var x0___, x1___, x2___, x3___;
                      newNode = (x0___ = Y.Dom_v___? Y.Dom: Y.v___('Dom'),
                        x0___.get_m___? x0___.get(newNode): x0___.m___('get', [
                            newNode ]));
                      referenceNode = (x1___ = Y.Dom_v___? Y.Dom: Y.v___('Dom')
                          , x1___.get_m___? x1___.get(referenceNode):
                        x1___.m___('get', [ referenceNode ]));
                      if (!newNode || !referenceNode ||
                          !referenceNode.v___(PARENT_NODE)) {
                        x2___ = IMPORTS___.YAHOO_v___? IMPORTS___.YAHOO:
                        ___.ri(IMPORTS___, 'YAHOO'), x2___.log_m___?
                          x2___.log('insertAfter failed: missing or invalid arg(s)',
                          'error', 'Dom'): x2___.m___('log', [
                            'insertAfter failed: missing or invalid arg(s)',
                            'error', 'Dom' ]);
                        return null;
                      }
                      return x3___ = referenceNode.v___(PARENT_NODE),
                      x3___.insertBefore_m___? x3___.insertBefore(newNode,
                        referenceNode): x3___.m___('insertBefore', [ newNode,
                          referenceNode ]);
                    }
                    return ___.f(insertBefore$_lit, 'insertBefore$_lit');
                  })(), 'insertAfter', (function () {
                    function insertAfter$_lit(newNode, referenceNode) {
                      var x0___, x1___, x2___, x3___, x4___, x5___;
                      newNode = (x0___ = Y.Dom_v___? Y.Dom: Y.v___('Dom'),
                        x0___.get_m___? x0___.get(newNode): x0___.m___('get', [
                            newNode ]));
                      referenceNode = (x1___ = Y.Dom_v___? Y.Dom: Y.v___('Dom')
                          , x1___.get_m___? x1___.get(referenceNode):
                        x1___.m___('get', [ referenceNode ]));
                      if (!newNode || !referenceNode ||
                          !referenceNode.v___(PARENT_NODE)) {
                        x2___ = IMPORTS___.YAHOO_v___? IMPORTS___.YAHOO:
                        ___.ri(IMPORTS___, 'YAHOO'), x2___.log_m___?
                          x2___.log('insertAfter failed: missing or invalid arg(s)',
                          'error', 'Dom'): x2___.m___('log', [
                            'insertAfter failed: missing or invalid arg(s)',
                            'error', 'Dom' ]);
                        return null;
                      }
                      if (referenceNode.nextSibling_v___?
                          referenceNode.nextSibling:
                        referenceNode.v___('nextSibling')) {
                        return x3___ = referenceNode.v___(PARENT_NODE), x4___ =
                          referenceNode.nextSibling_v___?
                          referenceNode.nextSibling:
                        referenceNode.v___('nextSibling'),
                        x3___.insertBefore_m___? x3___.insertBefore(newNode,
                          x4___): x3___.m___('insertBefore', [ newNode, x4___ ]
                        );
                      } else {
                        return x5___ = referenceNode.v___(PARENT_NODE),
                        x5___.appendChild_m___? x5___.appendChild(newNode):
                        x5___.m___('appendChild', [ newNode ]);
                      }
                    }
                    return ___.f(insertAfter$_lit, 'insertAfter$_lit');
                  })(), 'getClientRegion', (function () {
                    function getClientRegion$_lit() {
                      var t, x0___, l, x1___, r, x2___, b, x3___;
                      t = (x0___ = Y.Dom_v___? Y.Dom: Y.v___('Dom'),
                        x0___.getDocumentScrollTop_m___?
                          x0___.getDocumentScrollTop():
                        x0___.m___('getDocumentScrollTop', [ ])), l = (x1___ =
                          Y.Dom_v___? Y.Dom: Y.v___('Dom'),
                        x1___.getDocumentScrollLeft_m___?
                          x1___.getDocumentScrollLeft():
                        x1___.m___('getDocumentScrollLeft', [ ])), r = (x2___ =
                          Y.Dom_v___? Y.Dom: Y.v___('Dom'),
                        x2___.getViewportWidth_m___? x2___.getViewportWidth():
                        x2___.m___('getViewportWidth', [ ])) + l, b = (x3___ =
                          Y.Dom_v___? Y.Dom: Y.v___('Dom'),
                        x3___.getViewportHeight_m___? x3___.getViewportHeight()
                          : x3___.m___('getViewportHeight', [ ])) + t;
                      return new (Y.Region_v___? Y.Region: Y.v___('Region'))
                        .new___(t, r, b, l);
                    }
                    return ___.f(getClientRegion$_lit, 'getClientRegion$_lit');
                  })(), 'setAttribute', (function () {
                    function setAttribute$_lit(el, attr, val) {
                      var x0___, x1___, x2___, x3___;
                      x0___ = Y.Dom_v___? Y.Dom: Y.v___('Dom'), x2___ = (x1___
                          = Y.Dom_v___? Y.Dom: Y.v___('Dom'),
                        x1___._setAttribute_v___? x1___._setAttribute:
                        x1___.v___('_setAttribute')), x3___ = ___.iM([ 'attr',
                          attr, 'val', val ]), x0___.batch_m___?
                        x0___.batch(el, x2___, x3___): x0___.m___('batch', [
                          el, x2___, x3___ ]);
                    }
                    return ___.f(setAttribute$_lit, 'setAttribute$_lit');
                  })(), '_setAttribute', (function () {
                    function _setAttribute$_lit(el, args) {
                      var attr, x0___, x1___, val, x2___, x3___, x4___;
                      attr = (x0___ = Y.Dom_v___? Y.Dom: Y.v___('Dom'), x1___ =
                        args.attr_v___? args.attr: args.v___('attr'),
                        x0___._toCamel_m___? x0___._toCamel(x1___):
                        x0___.m___('_toCamel', [ x1___ ])), val =
                        args.val_v___? args.val: args.v___('val');
                      if (el && (el.setAttribute_v___? el.setAttribute:
                          el.v___('setAttribute'))) {
                        attr = (x2___ = Y.Dom_v___? Y.Dom: Y.v___('Dom'),
                          x2___.CUSTOM_ATTRIBUTES_v___?
                            x2___.CUSTOM_ATTRIBUTES:
                          x2___.v___('CUSTOM_ATTRIBUTES')).v___(attr) || attr;
                        el.setAttribute_m___? el.setAttribute(attr, val):
                        el.m___('setAttribute', [ attr, val ]);
                      } else {
                        x3___ = IMPORTS___.YAHOO_v___? IMPORTS___.YAHOO:
                        ___.ri(IMPORTS___, 'YAHOO'), x4___ =
                          'setAttribute method not available for ' + el,
                        x3___.log_m___? x3___.log(x4___, 'error', 'Dom'):
                        x3___.m___('log', [ x4___, 'error', 'Dom' ]);
                      }
                    }
                    return ___.f(_setAttribute$_lit, '_setAttribute$_lit');
                  })(), 'getAttribute', (function () {
                    function getAttribute$_lit(el, attr) {
                      var x0___, x1___, x2___;
                      return x0___ = Y.Dom_v___? Y.Dom: Y.v___('Dom'), x2___ =
                        (x1___ = Y.Dom_v___? Y.Dom: Y.v___('Dom'),
                        x1___._getAttribute_v___? x1___._getAttribute:
                        x1___.v___('_getAttribute')), x0___.batch_m___?
                        x0___.batch(el, x2___, attr): x0___.m___('batch', [ el,
                          x2___, attr ]);
                    }
                    return ___.f(getAttribute$_lit, 'getAttribute$_lit');
                  })(), '_getAttribute', (function () {
                    function _getAttribute$_lit(el, attr) {
                      var val, x0___, x1___, x2___;
                      attr = (x0___ = Y.Dom_v___? Y.Dom: Y.v___('Dom'),
                        x0___.CUSTOM_ATTRIBUTES_v___? x0___.CUSTOM_ATTRIBUTES:
                        x0___.v___('CUSTOM_ATTRIBUTES')).v___(attr) || attr;
                      if (el && (el.getAttribute_v___? el.getAttribute:
                          el.v___('getAttribute'))) {
                        val = el.getAttribute_m___? el.getAttribute(attr):
                        el.m___('getAttribute', [ attr ]);
                      } else {
                        x1___ = IMPORTS___.YAHOO_v___? IMPORTS___.YAHOO:
                        ___.ri(IMPORTS___, 'YAHOO'), x2___ =
                          'getAttribute method not available for ' + el,
                        x1___.log_m___? x1___.log(x2___, 'error', 'Dom'):
                        x1___.m___('log', [ x2___, 'error', 'Dom' ]);
                      }
                      return val;
                    }
                    return ___.f(_getAttribute$_lit, '_getAttribute$_lit');
                  })(), '_toCamel', (function () {
                    function _toCamel$_lit(property) {
                      var c, tU, x0___;
                      {
                        function tU(x, l) {
                          return l.toUpperCase_m___? l.toUpperCase():
                          l.m___('toUpperCase', [ ]);
                        }
                        ___.f(tU, 'tU');
                      }
                      c = propertyCache;
                      return c.v___(property) || c.w___(property,
                        (property.indexOf_m___? property.indexOf('-'):
                         property.m___('indexOf', [ '-' ])) === -1? property:
                        (x0___ = new RegExp.new___('-([a-z])', 'gi'),
                         property.replace_m___? property.replace(x0___, tU):
                         property.m___('replace', [ x0___, tU ])));
                    }
                    return ___.f(_toCamel$_lit, '_toCamel$_lit');
                  })(), '_getClassRegex', (function () {
                    function _getClassRegex$_lit(className) {
                      var re, x0___, x1___, x2___;
                      if (className !== (IMPORTS___.undefined_v___?
                            IMPORTS___.undefined: ___.ri(IMPORTS___,
                            'undefined'))) {
                        if (className.exec_v___? className.exec:
                          className.v___('exec')) { re = className; } else {
                          re = reCache.v___(className);
                          if (!re) {
                            className = (x2___ = (x1___ = (x0___ = Y.Dom_v___?
                                  Y.Dom: Y.v___('Dom'), x0___._patterns_v___?
                                  x0___._patterns: x0___.v___('_patterns')),
                                x1___.CLASS_RE_TOKENS_v___?
                                x1___.CLASS_RE_TOKENS:
                                x1___.v___('CLASS_RE_TOKENS')),
                              className.replace_m___? className.replace(x2___,
                                '\\$1'): className.m___('replace', [ x2___,
                                  '\\$1' ]));
                            re = reCache.w___(className, new
                                (IMPORTS___.RegExp_v___? IMPORTS___.RegExp:
                                ___.ri(IMPORTS___, 'RegExp')).new___(C_START +
                                  className + C_END, G));
                          }
                        }
                      }
                      return re;
                    }
                    return ___.f(_getClassRegex$_lit, '_getClassRegex$_lit');
                  })(), '_patterns', ___.iM([ 'ROOT_TAG', new
                    RegExp.new___('^body|html$', 'i'), 'CLASS_RE_TOKENS', new
                    RegExp.new___('([\\.\\(\\)\\^\\$\\*\\+\\?\\|\\[\\]\\{\\}])',
                      'g') ]), '_testElement', (function () {
                    function _testElement$_lit(node, method) {
                      return node && node.v___(NODE_TYPE) == 1 && (!method ||
                        method.i___(node));
                    }
                    return ___.f(_testElement$_lit, '_testElement$_lit');
                  })(), '_calcBorders', (function () {
                    function _calcBorders$_lit(node, xy2) {
                      var t, l, x0___, x1___, x2___, x3___, x4___;
                      t = (IMPORTS___.parseInt_v___? IMPORTS___.parseInt:
                        ___.ri(IMPORTS___, 'parseInt')).i___((Y.Dom_v___?
                          Y.Dom: Y.v___('Dom')).m___(GET_COMPUTED_STYLE, [
                            node, BORDER_TOP_WIDTH ]), 10) || 0, l =
                        (IMPORTS___.parseInt_v___? IMPORTS___.parseInt:
                        ___.ri(IMPORTS___, 'parseInt')).i___((Y.Dom_v___?
                            Y.Dom: Y.v___('Dom')).m___(GET_COMPUTED_STYLE, [
                            node, BORDER_LEFT_WIDTH ]), 10) || 0;
                      if (isGecko) {
                        if (x0___ = node.v___(TAG_NAME), RE_TABLE.test_m___?
                            RE_TABLE.test(x0___): RE_TABLE.m___('test', [ x0___
                            ])) {
                          t = 0;
                          l = 0;
                        }
                      }
                      x1___ = xy2, x2___ = +0, x1___.w___(x2___,
                        x1___.v___(x2___) + l);
                      x3___ = xy2, x4___ = +1, x3___.w___(x4___,
                        x3___.v___(x4___) + t);
                      return xy2;
                    }
                    return ___.f(_calcBorders$_lit, '_calcBorders$_lit');
                  })() ]), Y.Dom_w___ === Y? (Y.Dom = x12___): Y.w___('Dom',
              x12___);
            _getComputedStyle = (Y.Dom_v___? Y.Dom: Y.v___('Dom'))
              .v___(GET_COMPUTED_STYLE);
            if (UA.opera_v___? UA.opera: UA.v___('opera')) {
              (Y.Dom_v___? Y.Dom: Y.v___('Dom')).w___(GET_COMPUTED_STYLE,
                ___.f(function (node, att) {
                    var val, x0___, x1___;
                    val = _getComputedStyle.i___(node, att);
                    if (RE_COLOR.test_m___? RE_COLOR.test(att):
                      RE_COLOR.m___('test', [ att ])) {
                      val = (x1___ = (x0___ = Y.Dom_v___? Y.Dom: Y.v___('Dom'),
                          x0___.Color_v___? x0___.Color: x0___.v___('Color')),
                        x1___.toRGB_m___? x1___.toRGB(val): x1___.m___('toRGB',
                          [ val ]));
                    }
                    return val;
                  }));
            }
            if (UA.webkit_v___? UA.webkit: UA.v___('webkit')) {
              (Y.Dom_v___? Y.Dom: Y.v___('Dom')).w___(GET_COMPUTED_STYLE,
                ___.f(function (node, att) {
                    var val;
                    val = _getComputedStyle.i___(node, att);
                    if (val === 'rgba(0, 0, 0, 0)') {
                      val = 'transparent';
                    }
                    return val;
                  }));
            }
          }).i___();
        x22___ = (x21___ = IMPORTS___.YAHOO_v___? IMPORTS___.YAHOO:
          ___.ri(IMPORTS___, 'YAHOO'), x21___.util_v___? x21___.util:
          x21___.v___('util')), x23___ = (function () {
            function Region$_meth(t, r, b, l) {
              var dis___ = this && this.___? void 0: this;
              var x0___, x1___;
              dis___.top_w___ === dis___? (dis___.top = t): dis___.w___('top',
                t);
              dis___.y_w___ === dis___? (dis___.y = t): dis___.w___('y', t);
              dis___.NUM____w___ === dis___? (dis___[ +1 ] = t):
              dis___.w___(+1, t);
              dis___.right_w___ === dis___? (dis___.right = r):
              dis___.w___('right', r);
              dis___.bottom_w___ === dis___? (dis___.bottom = b):
              dis___.w___('bottom', b);
              dis___.left_w___ === dis___? (dis___.left = l):
              dis___.w___('left', l);
              dis___.x_w___ === dis___? (dis___.x = l): dis___.w___('x', l);
              dis___.NUM____w___ === dis___? (dis___[ +0 ] = l):
              dis___.w___(+0, l);
              x0___ = (dis___.right_v___? dis___.right: dis___.v___('right')) -
                (dis___.left_v___? dis___.left: dis___.v___('left')),
              dis___.width_w___ === dis___? (dis___.width = x0___):
              dis___.w___('width', x0___);
              x1___ = (dis___.bottom_v___? dis___.bottom: dis___.v___('bottom')
              ) - (dis___.top_v___? dis___.top: dis___.v___('top')),
              dis___.height_w___ === dis___? (dis___.height = x1___):
              dis___.w___('height', x1___);
            }
            return ___.f(Region$_meth, 'Region$_meth');
          })(), x22___.Region_w___ === x22___? (x22___.Region = x23___):
        x22___.w___('Region', x23___);
        x27___ = (x26___ = (x25___ = (x24___ = IMPORTS___.YAHOO_v___?
              IMPORTS___.YAHOO: ___.ri(IMPORTS___, 'YAHOO'), x24___.util_v___?
              x24___.util: x24___.v___('util')), x25___.Region_v___?
            x25___.Region: x25___.v___('Region')), x26___.prototype_v___?
          x26___.prototype: x26___.v___('prototype')), x28___ = (function () {
            function contains$_meth(region) {
              var dis___ = this && this.___? void 0: this;
              return (region.left_v___? region.left: region.v___('left')) >=
                (dis___.left_v___? dis___.left: dis___.v___('left')) &&
                (region.right_v___? region.right: region.v___('right')) <=
                (dis___.right_v___? dis___.right: dis___.v___('right')) &&
                (region.top_v___? region.top: region.v___('top')) >=
                (dis___.top_v___? dis___.top: dis___.v___('top')) &&
                (region.bottom_v___? region.bottom: region.v___('bottom')) <=
                (dis___.bottom_v___? dis___.bottom: dis___.v___('bottom'));
            }
            return ___.f(contains$_meth, 'contains$_meth');
          })(), x27___.contains_w___ === x27___? (x27___.contains = x28___):
        x27___.w___('contains', x28___);
        x32___ = (x31___ = (x30___ = (x29___ = IMPORTS___.YAHOO_v___?
              IMPORTS___.YAHOO: ___.ri(IMPORTS___, 'YAHOO'), x29___.util_v___?
              x29___.util: x29___.v___('util')), x30___.Region_v___?
            x30___.Region: x30___.v___('Region')), x31___.prototype_v___?
          x31___.prototype: x31___.v___('prototype')), x33___ = (function () {
            function getArea$_meth() {
              var dis___ = this && this.___? void 0: this;
              return ((dis___.bottom_v___? dis___.bottom: dis___.v___('bottom')
                ) - (dis___.top_v___? dis___.top: dis___.v___('top'))) *
                ((dis___.right_v___? dis___.right: dis___.v___('right')) -
                (dis___.left_v___? dis___.left: dis___.v___('left')));
            }
            return ___.f(getArea$_meth, 'getArea$_meth');
          })(), x32___.getArea_w___ === x32___? (x32___.getArea = x33___):
        x32___.w___('getArea', x33___);
        x37___ = (x36___ = (x35___ = (x34___ = IMPORTS___.YAHOO_v___?
              IMPORTS___.YAHOO: ___.ri(IMPORTS___, 'YAHOO'), x34___.util_v___?
              x34___.util: x34___.v___('util')), x35___.Region_v___?
            x35___.Region: x35___.v___('Region')), x36___.prototype_v___?
          x36___.prototype: x36___.v___('prototype')), x38___ = (function () {
            function intersect$_meth(region) {
              var dis___ = this && this.___? void 0: this;
              var t, x0___, x1___, x2___, r, x3___, x4___, x5___, b, x6___,
              x7___, x8___, l, x9___, x10___, x11___, x12___, x13___;
              t = (x0___ = IMPORTS___.Math_v___? IMPORTS___.Math:
                ___.ri(IMPORTS___, 'Math'), x1___ = dis___.top_v___?
                dis___.top: dis___.v___('top'), x2___ = region.top_v___?
                region.top: region.v___('top'), x0___.max_m___?
                x0___.max(x1___, x2___): x0___.m___('max', [ x1___, x2___ ])),
              r = (x3___ = IMPORTS___.Math_v___? IMPORTS___.Math:
                ___.ri(IMPORTS___, 'Math'), x4___ = dis___.right_v___?
                dis___.right: dis___.v___('right'), x5___ = region.right_v___?
                region.right: region.v___('right'), x3___.min_m___?
                x3___.min(x4___, x5___): x3___.m___('min', [ x4___, x5___ ])),
              b = (x6___ = IMPORTS___.Math_v___? IMPORTS___.Math:
                ___.ri(IMPORTS___, 'Math'), x7___ = dis___.bottom_v___?
                dis___.bottom: dis___.v___('bottom'), x8___ =
                region.bottom_v___? region.bottom: region.v___('bottom'),
                x6___.min_m___? x6___.min(x7___, x8___): x6___.m___('min', [
                    x7___, x8___ ])), l = (x9___ = IMPORTS___.Math_v___?
                IMPORTS___.Math: ___.ri(IMPORTS___, 'Math'), x10___ =
                dis___.left_v___? dis___.left: dis___.v___('left'), x11___ =
                region.left_v___? region.left: region.v___('left'),
                x9___.max_m___? x9___.max(x10___, x11___): x9___.m___('max', [
                    x10___, x11___ ]));
              if (b >= t && r >= l) {
                return new (x13___ = (x12___ = IMPORTS___.YAHOO_v___?
                    IMPORTS___.YAHOO: ___.ri(IMPORTS___, 'YAHOO'),
                    x12___.util_v___? x12___.util: x12___.v___('util')),
                  x13___.Region_v___? x13___.Region: x13___.v___('Region'))
                  .new___(t, r, b, l);
              } else { return null; }
            }
            return ___.f(intersect$_meth, 'intersect$_meth');
          })(), x37___.intersect_w___ === x37___? (x37___.intersect = x38___):
        x37___.w___('intersect', x38___);
        x42___ = (x41___ = (x40___ = (x39___ = IMPORTS___.YAHOO_v___?
              IMPORTS___.YAHOO: ___.ri(IMPORTS___, 'YAHOO'), x39___.util_v___?
              x39___.util: x39___.v___('util')), x40___.Region_v___?
            x40___.Region: x40___.v___('Region')), x41___.prototype_v___?
          x41___.prototype: x41___.v___('prototype')), x43___ = (function () {
            function union$_meth(region) {
              var dis___ = this && this.___? void 0: this;
              var t, x0___, x1___, x2___, r, x3___, x4___, x5___, b, x6___,
              x7___, x8___, l, x9___, x10___, x11___, x12___, x13___;
              t = (x0___ = IMPORTS___.Math_v___? IMPORTS___.Math:
                ___.ri(IMPORTS___, 'Math'), x1___ = dis___.top_v___?
                dis___.top: dis___.v___('top'), x2___ = region.top_v___?
                region.top: region.v___('top'), x0___.min_m___?
                x0___.min(x1___, x2___): x0___.m___('min', [ x1___, x2___ ])),
              r = (x3___ = IMPORTS___.Math_v___? IMPORTS___.Math:
                ___.ri(IMPORTS___, 'Math'), x4___ = dis___.right_v___?
                dis___.right: dis___.v___('right'), x5___ = region.right_v___?
                region.right: region.v___('right'), x3___.max_m___?
                x3___.max(x4___, x5___): x3___.m___('max', [ x4___, x5___ ])),
              b = (x6___ = IMPORTS___.Math_v___? IMPORTS___.Math:
                ___.ri(IMPORTS___, 'Math'), x7___ = dis___.bottom_v___?
                dis___.bottom: dis___.v___('bottom'), x8___ =
                region.bottom_v___? region.bottom: region.v___('bottom'),
                x6___.max_m___? x6___.max(x7___, x8___): x6___.m___('max', [
                    x7___, x8___ ])), l = (x9___ = IMPORTS___.Math_v___?
                IMPORTS___.Math: ___.ri(IMPORTS___, 'Math'), x10___ =
                dis___.left_v___? dis___.left: dis___.v___('left'), x11___ =
                region.left_v___? region.left: region.v___('left'),
                x9___.min_m___? x9___.min(x10___, x11___): x9___.m___('min', [
                    x10___, x11___ ]));
              return new (x13___ = (x12___ = IMPORTS___.YAHOO_v___?
                  IMPORTS___.YAHOO: ___.ri(IMPORTS___, 'YAHOO'),
                  x12___.util_v___? x12___.util: x12___.v___('util')),
                x13___.Region_v___? x13___.Region: x13___.v___('Region'))
                .new___(t, r, b, l);
            }
            return ___.f(union$_meth, 'union$_meth');
          })(), x42___.union_w___ === x42___? (x42___.union = x43___):
        x42___.w___('union', x43___);
        x47___ = (x46___ = (x45___ = (x44___ = IMPORTS___.YAHOO_v___?
              IMPORTS___.YAHOO: ___.ri(IMPORTS___, 'YAHOO'), x44___.util_v___?
              x44___.util: x44___.v___('util')), x45___.Region_v___?
            x45___.Region: x45___.v___('Region')), x46___.prototype_v___?
          x46___.prototype: x46___.v___('prototype')), x48___ = (function () {
            function toString$_meth() {
              var dis___ = this && this.___? void 0: this;
              return 'Region {' + 'top: ' + (dis___.top_v___? dis___.top:
                dis___.v___('top')) + ', right: ' + (dis___.right_v___?
                dis___.right: dis___.v___('right')) + ', bottom: ' +
                (dis___.bottom_v___? dis___.bottom: dis___.v___('bottom')) +
                ', left: ' + (dis___.left_v___? dis___.left:
                dis___.v___('left')) + ', height: ' + (dis___.height_v___?
                dis___.height: dis___.v___('height')) + ', width: ' +
                (dis___.width_v___? dis___.width: dis___.v___('width')) + '}';
            }
            return ___.f(toString$_meth, 'toString$_meth');
          })(), x47___.toString_w___ === x47___? (x47___.toString = x48___):
        x47___.w___('toString', x48___);
        x51___ = (x50___ = (x49___ = IMPORTS___.YAHOO_v___? IMPORTS___.YAHOO:
            ___.ri(IMPORTS___, 'YAHOO'), x49___.util_v___? x49___.util:
            x49___.v___('util')), x50___.Region_v___? x50___.Region:
          x50___.v___('Region')), x52___ = (function () {
            function getRegion$_meth(el) {
              var p, x0___, x1___, x2___, t, r, b, l, x3___, x4___;
              p = (x2___ = (x1___ = (x0___ = IMPORTS___.YAHOO_v___?
                    IMPORTS___.YAHOO: ___.ri(IMPORTS___, 'YAHOO'),
                    x0___.util_v___? x0___.util: x0___.v___('util')),
                  x1___.Dom_v___? x1___.Dom: x1___.v___('Dom')),
                x2___.getXY_m___? x2___.getXY(el): x2___.m___('getXY', [ el ]))
                , t = p[ +1 ], r = p[ +0 ] + (el.offsetWidth_v___?
                  el.offsetWidth: el.v___('offsetWidth')), b = p[ +1 ] +
                (el.offsetHeight_v___? el.offsetHeight: el.v___('offsetHeight')
              ), l = p[ +0 ];
              return new (x4___ = (x3___ = IMPORTS___.YAHOO_v___?
                  IMPORTS___.YAHOO: ___.ri(IMPORTS___, 'YAHOO'),
                  x3___.util_v___? x3___.util: x3___.v___('util')),
                x4___.Region_v___? x4___.Region: x4___.v___('Region'))
                .new___(t, r, b, l);
            }
            return ___.f(getRegion$_meth, 'getRegion$_meth');
          })(), x51___.getRegion_w___ === x51___? (x51___.getRegion = x52___):
        x51___.w___('getRegion', x52___);
        x54___ = (x53___ = IMPORTS___.YAHOO_v___? IMPORTS___.YAHOO:
          ___.ri(IMPORTS___, 'YAHOO'), x53___.util_v___? x53___.util:
          x53___.v___('util')), x55___ = (function () {
            function Point$_meth(x, y) {
              var dis___ = this && this.___? void 0: this;
              var x0___, x1___, x2___, x3___, x4___, x5___, x6___;
              if (x1___ = (x0___ = IMPORTS___.YAHOO_v___? IMPORTS___.YAHOO:
                  ___.ri(IMPORTS___, 'YAHOO'), x0___.lang_v___? x0___.lang:
                  x0___.v___('lang')), x1___.isArray_m___? x1___.isArray(x):
                x1___.m___('isArray', [ x ])) {
                y = x[ +1 ];
                x = x[ +0 ];
              }
              x6___ = (x5___ = (x4___ = (x3___ = (x2___ =
                      IMPORTS___.YAHOO_v___? IMPORTS___.YAHOO:
                      ___.ri(IMPORTS___, 'YAHOO'), x2___.util_v___? x2___.util:
                      x2___.v___('util')), x3___.Point_v___? x3___.Point:
                    x3___.v___('Point')), x4___.superclass_v___?
                  x4___.superclass: x4___.v___('superclass')),
                x5___.constructor_v___? x5___.constructor:
                x5___.v___('constructor')), x6___.call_m___? x6___.call(dis___,
                y, x, y, x): x6___.m___('call', [ dis___, y, x, y, x ]);
            }
            return ___.f(Point$_meth, 'Point$_meth');
          })(), x54___.Point_w___ === x54___? (x54___.Point = x55___):
        x54___.w___('Point', x55___);
        x56___ = IMPORTS___.YAHOO_v___? IMPORTS___.YAHOO: ___.ri(IMPORTS___,
          'YAHOO'), x59___ = (x58___ = (x57___ = IMPORTS___.YAHOO_v___?
            IMPORTS___.YAHOO: ___.ri(IMPORTS___, 'YAHOO'), x57___.util_v___?
            x57___.util: x57___.v___('util')), x58___.Point_v___? x58___.Point:
          x58___.v___('Point')), x62___ = (x61___ = (x60___ =
            IMPORTS___.YAHOO_v___? IMPORTS___.YAHOO: ___.ri(IMPORTS___,
              'YAHOO'), x60___.util_v___? x60___.util: x60___.v___('util')),
          x61___.Region_v___? x61___.Region: x61___.v___('Region')),
        x56___.extend_m___? x56___.extend(x59___, x62___):
        x56___.m___('extend', [ x59___, x62___ ]);
        ___.f(function () {
            var Y, x0___, CLIENT_TOP, CLIENT_LEFT, PARENT_NODE, RIGHT,
            HAS_LAYOUT, PX, OPACITY, AUTO, BORDER_LEFT_WIDTH, BORDER_TOP_WIDTH,
            BORDER_RIGHT_WIDTH, BORDER_BOTTOM_WIDTH, VISIBLE, TRANSPARENT,
            HEIGHT, WIDTH, STYLE, CURRENT_STYLE, re_size, re_unit,
            ComputedStyle, IEComputed, x1___, x2___, x3___, x4___, x5___,
            x6___, x7___, x8___, x9___, x10___, x11___, x12___, x13___, x14___,
            x15___, x16___, x17___;
            Y = (x0___ = IMPORTS___.YAHOO_v___? IMPORTS___.YAHOO:
              ___.ri(IMPORTS___, 'YAHOO'), x0___.util_v___? x0___.util:
              x0___.v___('util')), CLIENT_TOP = 'clientTop', CLIENT_LEFT =
              'clientLeft', PARENT_NODE = 'parentNode', RIGHT = 'right',
            HAS_LAYOUT = 'hasLayout', PX = 'px', OPACITY = 'opacity', AUTO =
              'auto', BORDER_LEFT_WIDTH = 'borderLeftWidth', BORDER_TOP_WIDTH =
              'borderTopWidth', BORDER_RIGHT_WIDTH = 'borderRightWidth',
            BORDER_BOTTOM_WIDTH = 'borderBottomWidth', VISIBLE = 'visible',
            TRANSPARENT = 'transparent', HEIGHT = 'height', WIDTH = 'width',
            STYLE = 'style', CURRENT_STYLE = 'currentStyle', re_size = new
              RegExp.new___('^width|height$'), re_unit = new
              RegExp.new___('^(\\d[.\\d]*)+(em|ex|px|gd|rem|vw|vh|vm|ch|mm|cm|in|pt|pc|deg|rad|ms|s|hz|khz|%){1}?',
              'i'), ComputedStyle = ___.iM([ 'get', (function () {
                    function get$_lit(el, property) {
                      var value, current, x0___, x1___, x2___, x3___, x4___,
                      x5___;
                      value = '', current = el.v___(CURRENT_STYLE)
                        .v___(property);
                      if (property === OPACITY) {
                        value = (x0___ = Y.Dom_v___? Y.Dom: Y.v___('Dom'),
                          x0___.getStyle_m___? x0___.getStyle(el, OPACITY):
                          x0___.m___('getStyle', [ el, OPACITY ]));
                      } else if (!current || (current.indexOf_v___?
                            current.indexOf: current.v___('indexOf')) &&
                        (current.indexOf_m___? current.indexOf(PX):
                         current.m___('indexOf', [ PX ])) > -1) { value =
                          current; } else if ((x1___ = Y.Dom_v___? Y.Dom:
                          Y.v___('Dom'), x1___.IE_COMPUTED_v___?
                          x1___.IE_COMPUTED: x1___.v___('IE_COMPUTED'))
                        .v___(property)) {
                        value = (x2___ = Y.Dom_v___? Y.Dom: Y.v___('Dom'),
                          x2___.IE_COMPUTED_v___? x2___.IE_COMPUTED:
                          x2___.v___('IE_COMPUTED')).m___(property, [ el,
                            property ]);
                      } else if (re_unit.test_m___? re_unit.test(current):
                        re_unit.m___('test', [ current ])) {
                        value = (x5___ = (x4___ = (x3___ = Y.Dom_v___? Y.Dom:
                              Y.v___('Dom'), x3___.IE_v___? x3___.IE:
                              x3___.v___('IE')), x4___.ComputedStyle_v___?
                            x4___.ComputedStyle: x4___.v___('ComputedStyle')),
                          x5___.getPixel_m___? x5___.getPixel(el, property):
                          x5___.m___('getPixel', [ el, property ]));
                      } else { value = current; }
                      return value;
                    }
                    return ___.f(get$_lit, 'get$_lit');
                  })(), 'getOffset', (function () {
                    function getOffset$_lit(el, prop) {
                      var current, capped, x0___, offset, pixel, value, actual;
                      current = el.v___(CURRENT_STYLE).v___(prop), capped =
                        (x0___ = prop.charAt_m___? prop.charAt(0):
                        prop.m___('charAt', [ 0 ]), x0___.toUpperCase_m___?
                        x0___.toUpperCase(): x0___.m___('toUpperCase', [ ])) +
                        (prop.substr_m___? prop.substr(1): prop.m___('substr',
                          [ 1 ])), offset = 'offset' + capped, pixel = 'pixel'
                        + capped, value = '';
                      if (current == AUTO) {
                        actual = el.v___(offset);
                        if (actual === (IMPORTS___.undefined_v___?
                            IMPORTS___.undefined: ___.ri(IMPORTS___,
                              'undefined'))) { value = 0; }
                        value = actual;
                        if (re_size.test_m___? re_size.test(prop):
                          re_size.m___('test', [ prop ])) {
                          el.v___(STYLE).w___(prop, actual);
                          if (el.v___(offset) > actual) {
                            value = actual - (el.v___(offset) - actual);
                          }
                          el.v___(STYLE).w___(prop, AUTO);
                        }
                      } else {
                        if (!el.v___(STYLE).v___(pixel) && !el.v___(STYLE)
                            .v___(prop)) {
                          el.v___(STYLE).w___(prop, current);
                        }
                        value = el.v___(STYLE).v___(pixel);
                      }
                      return value + PX;
                    }
                    return ___.f(getOffset$_lit, 'getOffset$_lit');
                  })(), 'getBorderWidth', (function () {
                    function getBorderWidth$_lit(el, property) {
                      var value, x0___;
                      value = null;
                      if (!el.v___(CURRENT_STYLE).v___(HAS_LAYOUT)) {
                        x0___ = el.v___(STYLE), x0___.zoom_w___ === x0___?
                          (x0___.zoom = 1): x0___.w___('zoom', 1);
                      }
                      switch (property) {
                      case BORDER_TOP_WIDTH:
                        value = el.v___(CLIENT_TOP);
                        break;
                      case BORDER_BOTTOM_WIDTH:
                        value = (el.offsetHeight_v___? el.offsetHeight:
                          el.v___('offsetHeight')) - (el.clientHeight_v___?
                          el.clientHeight: el.v___('clientHeight')) -
                          el.v___(CLIENT_TOP);
                        break;
                      case BORDER_LEFT_WIDTH:
                        value = el.v___(CLIENT_LEFT);
                        break;
                      case BORDER_RIGHT_WIDTH:
                        value = (el.offsetWidth_v___? el.offsetWidth:
                          el.v___('offsetWidth')) - (el.clientWidth_v___?
                            el.clientWidth: el.v___('clientWidth')) -
                          el.v___(CLIENT_LEFT);
                        break;
                      }
                      return value + PX;
                    }
                    return ___.f(getBorderWidth$_lit, 'getBorderWidth$_lit');
                  })(), 'getPixel', (function () {
                    function getPixel$_lit(node, att) {
                      var val, styleRight, current, x0___;
                      val = null, styleRight = node.v___(CURRENT_STYLE)
                        .v___(RIGHT), current = node.v___(CURRENT_STYLE)
                        .v___(att);
                      node.v___(STYLE).w___(RIGHT, current);
                      val = (x0___ = node.v___(STYLE), x0___.pixelRight_v___?
                        x0___.pixelRight: x0___.v___('pixelRight'));
                      node.v___(STYLE).w___(RIGHT, styleRight);
                      return val + PX;
                    }
                    return ___.f(getPixel$_lit, 'getPixel$_lit');
                  })(), 'getMargin', (function () {
                    function getMargin$_lit(node, att) {
                      var val, x0___, x1___, x2___;
                      if (node.v___(CURRENT_STYLE).v___(att) == AUTO) {
                        val = 0 + PX;
                      } else {
                        val = (x2___ = (x1___ = (x0___ = Y.Dom_v___? Y.Dom:
                              Y.v___('Dom'), x0___.IE_v___? x0___.IE:
                              x0___.v___('IE')), x1___.ComputedStyle_v___?
                            x1___.ComputedStyle: x1___.v___('ComputedStyle')),
                          x2___.getPixel_m___? x2___.getPixel(node, att):
                          x2___.m___('getPixel', [ node, att ]));
                      }
                      return val;
                    }
                    return ___.f(getMargin$_lit, 'getMargin$_lit');
                  })(), 'getVisibility', (function () {
                    function getVisibility$_lit(node, att) {
                      var current;
                      while ((current = node.v___(CURRENT_STYLE)) &&
                          current.v___(att) == 'inherit') {
                        node = node.v___(PARENT_NODE);
                      }
                      return current? current.v___(att): VISIBLE;
                    }
                    return ___.f(getVisibility$_lit, 'getVisibility$_lit');
                  })(), 'getColor', (function () {
                    function getColor$_lit(node, att) {
                      var x0___, x1___, x2___;
                      return (x1___ = (x0___ = Y.Dom_v___? Y.Dom: Y.v___('Dom')
                          , x0___.Color_v___? x0___.Color: x0___.v___('Color'))
                        , x2___ = node.v___(CURRENT_STYLE).v___(att),
                        x1___.toRGB_m___? x1___.toRGB(x2___):
                        x1___.m___('toRGB', [ x2___ ])) || TRANSPARENT;
                    }
                    return ___.f(getColor$_lit, 'getColor$_lit');
                  })(), 'getBorderColor', (function () {
                    function getBorderColor$_lit(node, att) {
                      var current, val, x0___, x1___, x2___, x3___, x4___;
                      current = node.v___(CURRENT_STYLE), val =
                        current.v___(att) || (current.color_v___?
                          current.color: current.v___('color'));
                      return x1___ = (x0___ = Y.Dom_v___? Y.Dom: Y.v___('Dom'),
                        x0___.Color_v___? x0___.Color: x0___.v___('Color')),
                      x4___ = (x3___ = (x2___ = Y.Dom_v___? Y.Dom:
                          Y.v___('Dom'), x2___.Color_v___? x2___.Color:
                          x2___.v___('Color')), x3___.toHex_m___?
                        x3___.toHex(val): x3___.m___('toHex', [ val ])),
                      x1___.toRGB_m___? x1___.toRGB(x4___): x1___.m___('toRGB',
                        [ x4___ ]);
                    }
                    return ___.f(getBorderColor$_lit, 'getBorderColor$_lit');
                  })() ]), IEComputed = ___.iM([ ]);
            x4___ = (x3___ = (x2___ = (x1___ = IEComputed.w___(WIDTH,
                    IEComputed.w___(HEIGHT, ComputedStyle.getOffset_v___?
                      ComputedStyle.getOffset: ComputedStyle.v___('getOffset'))
                  ), IEComputed.left_w___ === IEComputed? (IEComputed.left =
                    x1___): IEComputed.w___('left', x1___)),
                IEComputed.bottom_w___ === IEComputed? (IEComputed.bottom =
                  x2___): IEComputed.w___('bottom', x2___)),
              IEComputed.right_w___ === IEComputed? (IEComputed.right = x3___):
              IEComputed.w___('right', x3___)), IEComputed.top_w___ ===
              IEComputed? (IEComputed.top = x4___): IEComputed.w___('top',
              x4___);
            x5___ = ComputedStyle.getColor_v___? ComputedStyle.getColor:
            ComputedStyle.v___('getColor'), IEComputed.color_w___ ===
              IEComputed? (IEComputed.color = x5___): IEComputed.w___('color',
              x5___);
            IEComputed.w___(BORDER_TOP_WIDTH,
              IEComputed.w___(BORDER_RIGHT_WIDTH,
                IEComputed.w___(BORDER_BOTTOM_WIDTH,
                  IEComputed.w___(BORDER_LEFT_WIDTH,
                    ComputedStyle.getBorderWidth_v___?
                    ComputedStyle.getBorderWidth:
                    ComputedStyle.v___('getBorderWidth')))));
            x9___ = (x8___ = (x7___ = (x6___ = ComputedStyle.getMargin_v___?
                  ComputedStyle.getMargin: ComputedStyle.v___('getMargin'),
                  IEComputed.marginLeft_w___ === IEComputed?
                  (IEComputed.marginLeft = x6___):
                  IEComputed.w___('marginLeft', x6___)),
                IEComputed.marginBottom_w___ === IEComputed?
                (IEComputed.marginBottom = x7___):
                IEComputed.w___('marginBottom', x7___)),
              IEComputed.marginRight_w___ === IEComputed?
              (IEComputed.marginRight = x8___): IEComputed.w___('marginRight',
                x8___)), IEComputed.marginTop_w___ === IEComputed?
              (IEComputed.marginTop = x9___): IEComputed.w___('marginTop',
              x9___);
            x10___ = ComputedStyle.getVisibility_v___?
              ComputedStyle.getVisibility: ComputedStyle.v___('getVisibility'),
            IEComputed.visibility_w___ === IEComputed? (IEComputed.visibility =
              x10___): IEComputed.w___('visibility', x10___);
            x15___ = (x14___ = (x13___ = (x12___ = (x11___ =
                    ComputedStyle.getBorderColor_v___?
                    ComputedStyle.getBorderColor:
                    ComputedStyle.v___('getBorderColor'),
                    IEComputed.borderLeftColor_w___ === IEComputed?
                    (IEComputed.borderLeftColor = x11___):
                    IEComputed.w___('borderLeftColor', x11___)),
                  IEComputed.borderBottomColor_w___ === IEComputed?
                  (IEComputed.borderBottomColor = x12___):
                  IEComputed.w___('borderBottomColor', x12___)),
                IEComputed.borderRightColor_w___ === IEComputed?
                (IEComputed.borderRightColor = x13___):
                IEComputed.w___('borderRightColor', x13___)),
              IEComputed.borderTopColor_w___ === IEComputed?
              (IEComputed.borderTopColor = x14___):
              IEComputed.w___('borderTopColor', x14___)),
            IEComputed.borderColor_w___ === IEComputed? (IEComputed.borderColor
              = x15___): IEComputed.w___('borderColor', x15___);
            x16___ = Y.Dom_v___? Y.Dom: Y.v___('Dom'), x16___.IE_COMPUTED_w___
              === x16___? (x16___.IE_COMPUTED = IEComputed):
            x16___.w___('IE_COMPUTED', IEComputed);
            x17___ = Y.Dom_v___? Y.Dom: Y.v___('Dom'),
            x17___.IE_ComputedStyle_w___ === x17___? (x17___.IE_ComputedStyle =
                ComputedStyle): x17___.w___('IE_ComputedStyle', ComputedStyle);
          }).i___();
        ___.f(function () {
            var TO_STRING, PARSE_INT, RE, Y, x0___, x1___, x2___;
            TO_STRING = 'toString', PARSE_INT = IMPORTS___.parseInt_v___?
              IMPORTS___.parseInt: ___.ri(IMPORTS___, 'parseInt'), RE =
              IMPORTS___.RegExp_v___? IMPORTS___.RegExp: ___.ri(IMPORTS___,
              'RegExp'), Y = (x0___ = IMPORTS___.YAHOO_v___? IMPORTS___.YAHOO:
              ___.ri(IMPORTS___, 'YAHOO'), x0___.util_v___? x0___.util:
              x0___.v___('util'));
            x1___ = Y.Dom_v___? Y.Dom: Y.v___('Dom'), x2___ = ___.iM([
                'KEYWORDS', ___.iM([ 'black', '000', 'silver', 'c0c0c0',
                    'gray', '808080', 'white', 'fff', 'maroon', '800000',
                    'red', 'f00', 'purple', '800080', 'fuchsia', 'f0f',
                    'green', '008000', 'lime', '0f0', 'olive', '808000',
                    'yellow', 'ff0', 'navy', '000080', 'blue', '00f', 'teal',
                    '008080', 'aqua', '0ff' ]), 're_RGB', new
                  RegExp.new___('^rgb\\(([0-9]+)\\s*,\\s*([0-9]+)\\s*,\\s*([0-9]+)\\)$',
                  'i'), 're_hex', new
                  RegExp.new___('^#?([0-9A-F]{2})([0-9A-F]{2})([0-9A-F]{2})$',
                  'i'), 're_hex3', new RegExp.new___('([0-9A-F])', 'gi'),
                'toRGB', (function () {
                    function toRGB$_lit(val) {
                      var x0___, x1___, x2___, x3___, x4___, x5___, x6___,
                      x7___, x8___;
                      if (! (x2___ = (x1___ = (x0___ = Y.Dom_v___? Y.Dom:
                              Y.v___('Dom'), x0___.Color_v___? x0___.Color:
                              x0___.v___('Color')), x1___.re_RGB_v___?
                            x1___.re_RGB: x1___.v___('re_RGB')),
                          x2___.test_m___? x2___.test(val): x2___.m___('test',
                            [ val ]))) {
                        val = (x4___ = (x3___ = Y.Dom_v___? Y.Dom:
                            Y.v___('Dom'), x3___.Color_v___? x3___.Color:
                            x3___.v___('Color')), x4___.toHex_m___?
                          x4___.toHex(val): x4___.m___('toHex', [ val ]));
                      }
                      if (x7___ = (x6___ = (x5___ = Y.Dom_v___? Y.Dom:
                            Y.v___('Dom'), x5___.Color_v___? x5___.Color:
                            x5___.v___('Color')), x6___.re_hex_v___?
                          x6___.re_hex: x6___.v___('re_hex')), x7___.exec_m___?
                        x7___.exec(val): x7___.m___('exec', [ val ])) {
                        val = 'rgb(' + (x8___ = [ PARSE_INT.i___(RE.$1_v___?
                              RE.$1: RE.v___('$1'), 16),
                            PARSE_INT.i___(RE.$2_v___? RE.$2: RE.v___('$2'),
                              16), PARSE_INT.i___(RE.$3_v___? RE.$3:
                              RE.v___('$3'), 16) ], x8___.join_m___?
                          x8___.join(', '): x8___.m___('join', [ ', ' ])) +
                          ')';
                      }
                      return val;
                    }
                    return ___.f(toRGB$_lit, 'toRGB$_lit');
                  })(), 'toHex', (function () {
                    function toHex$_lit(val) {
                      var x0___, x1___, x2___, x3___, x4___, r, g, b, x5___,
                      x6___, x7___, x8___;
                      val = (x1___ = (x0___ = Y.Dom_v___? Y.Dom: Y.v___('Dom'),
                          x0___.Color_v___? x0___.Color: x0___.v___('Color')),
                        x1___.KEYWORDS_v___? x1___.KEYWORDS:
                        x1___.v___('KEYWORDS')).v___(val) || val;
                      if (x4___ = (x3___ = (x2___ = Y.Dom_v___? Y.Dom:
                            Y.v___('Dom'), x2___.Color_v___? x2___.Color:
                            x2___.v___('Color')), x3___.re_RGB_v___?
                          x3___.re_RGB: x3___.v___('re_RGB')), x4___.exec_m___?
                        x4___.exec(val): x4___.m___('exec', [ val ])) {
                        r = (RE.$1_v___? RE.$1: RE.v___('$1')).length === 1?
                          '0' + (RE.$1_v___? RE.$1: RE.v___('$1')):
                        (IMPORTS___.Number_v___? IMPORTS___.Number:
                         ___.ri(IMPORTS___, 'Number')).i___(RE.$1_v___? RE.$1:
                          RE.v___('$1')), g = (RE.$2_v___? RE.$2: RE.v___('$2')
                        ).length === 1? '0' + (RE.$2_v___? RE.$2: RE.v___('$2')
                        ): (IMPORTS___.Number_v___? IMPORTS___.Number:
                          ___.ri(IMPORTS___, 'Number')).i___(RE.$2_v___? RE.$2:
                          RE.v___('$2')), b = (RE.$3_v___? RE.$3: RE.v___('$3')
                        ).length === 1? '0' + (RE.$3_v___? RE.$3: RE.v___('$3')
                        ): (IMPORTS___.Number_v___? IMPORTS___.Number:
                          ___.ri(IMPORTS___, 'Number')).i___(RE.$3_v___? RE.$3:
                          RE.v___('$3'));
                        val = (x5___ = [ r.m___(TO_STRING, [ 16 ]),
                            g.m___(TO_STRING, [ 16 ]), b.m___(TO_STRING, [ 16 ]
                            ) ], x5___.join_m___? x5___.join(''):
                          x5___.m___('join', [ '' ]));
                      }
                      if (val.length < 6) {
                        val = (x8___ = (x7___ = (x6___ = Y.Dom_v___? Y.Dom:
                              Y.v___('Dom'), x6___.Color_v___? x6___.Color:
                              x6___.v___('Color')), x7___.re_hex3_v___?
                            x7___.re_hex3: x7___.v___('re_hex3')),
                          val.replace_m___? val.replace(x8___, '$1$1'):
                          val.m___('replace', [ x8___, '$1$1' ]));
                      }
                      if (val !== 'transparent' && (val.indexOf_m___?
                            val.indexOf('#'): val.m___('indexOf', [ '#' ])) <
                          0) {
                        val = '#' + val;
                      }
                      return val.toLowerCase_m___? val.toLowerCase():
                      val.m___('toLowerCase', [ ]);
                    }
                    return ___.f(toHex$_lit, 'toHex$_lit');
                  })() ]), x1___.Color_w___ === x1___? (x1___.Color = x2___):
            x1___.w___('Color', x2___);
          }).i___();
        moduleResult___ = (x63___ = IMPORTS___.YAHOO_v___? IMPORTS___.YAHOO:
          ___.ri(IMPORTS___, 'YAHOO'), x66___ = (x65___ = (x64___ =
              IMPORTS___.YAHOO_v___? IMPORTS___.YAHOO: ___.ri(IMPORTS___,
                'YAHOO'), x64___.util_v___? x64___.util: x64___.v___('util')),
            x65___.Dom_v___? x65___.Dom: x65___.v___('Dom')), x67___ = ___.iM([
              'version', '@VERSION@', 'build', '@BUILD@' ]), x63___.register_m___? x63___.register('dom', x66___, x67___): x63___.m___('register', [ 'dom', x66___, x67___ ]));
return moduleResult___;
},
'cajolerName': 'com.google.caja',
'cajolerVersion': 'Unversioned directory',
'cajoledDate': 1350972507932
});
}