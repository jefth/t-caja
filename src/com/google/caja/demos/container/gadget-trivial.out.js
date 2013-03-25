{
  ___.loadModule({
      'instantiate': function (___, IMPORTS___) {
        return ___.prepareModule({
            'instantiate': function (___, IMPORTS___) {
              var dis___ = IMPORTS___;
              var moduleResult___;
              moduleResult___ = ___.NO_RESULT;
              {
                IMPORTS___.htmlEmitter___.emitStatic('<p id=\"id_2___\" style=\"width: 10em; height: 10em; border: .2em double gray; padding: 1em\">This is a gadget. Mouse over for a scripted action.</p>')
                  ;
              }
              return moduleResult___;
            },
            'cajolerName': 'com.google.caja',
            'cajolerVersion': '${build.svnVersion}',
            'cajoledDate': 1311580657451
          }).instantiate___(___, IMPORTS___), ___.prepareModule({
            'instantiate': function (___, IMPORTS___) {
              var dis___ = IMPORTS___;
              var moduleResult___, el___, emitter___;
              moduleResult___ = ___.NO_RESULT;
              {
                emitter___ = IMPORTS___.htmlEmitter___;
                el___ = emitter___.byId('id_2___');
                emitter___.setAttr(el___, 'id', 'x-' +
                  IMPORTS___.getIdClass___());
                el___ = emitter___.finish();
              }
              return moduleResult___;
            },
            'cajolerName': 'com.google.caja',
            'cajolerVersion': '${build.svnVersion}',
            'cajoledDate': 1311580657460
          }).instantiate___(___, IMPORTS___), ___.prepareModule({
            'instantiate': function (___, IMPORTS___) {
              var dis___ = IMPORTS___;
              var moduleResult___, x0___, x1___, x2___, x3___, x4___;
              moduleResult___ = ___.NO_RESULT;
              try {
                {
                  IMPORTS___.w___('x', (x0___ = IMPORTS___.document_v___?
                      IMPORTS___.document: ___.ri(IMPORTS___, 'document'),
                      x0___.getElementById_m___? x0___.getElementById('x'):
                      x0___.m___('getElementById', [ 'x' ])));
                  x1___ = IMPORTS___.x_v___? IMPORTS___.x: ___.ri(IMPORTS___,
                    'x'), x2___ = (function () {
                      function onmouseover$_meth() {
                        var x0___, x1___, x2___, x3___;
                        x1___ = (x0___ = IMPORTS___.x_v___? IMPORTS___.x:
                          ___.ri(IMPORTS___, 'x'), x0___.style_v___?
                          x0___.style: x0___.v___('style')),
                        x1___.backgroundColor_w___ === x1___?
                          (x1___.backgroundColor = '#000'):
                        x1___.w___('backgroundColor', '#000');
                        x3___ = (x2___ = IMPORTS___.x_v___? IMPORTS___.x:
                          ___.ri(IMPORTS___, 'x'), x2___.style_v___?
                          x2___.style: x2___.v___('style')), x3___.color_w___
                          === x3___? (x3___.color = '#FFF'):
                        x3___.w___('color', '#FFF');
                      }
                      return ___.f(onmouseover$_meth, 'onmouseover$_meth');
                    })(), x1___.onmouseover_w___ === x1___? (x1___.onmouseover
                    = x2___): x1___.w___('onmouseover', x2___);
                  moduleResult___ = (x3___ = IMPORTS___.x_v___? IMPORTS___.x:
                    ___.ri(IMPORTS___, 'x'), x4___ = (function () {
                        function onmouseout$_meth() {
                          var x0___, x1___, x2___, x3___;
                          x1___ = (x0___ = IMPORTS___.x_v___? IMPORTS___.x:
                            ___.ri(IMPORTS___, 'x'), x0___.style_v___?
                            x0___.style: x0___.v___('style')),
                          x1___.backgroundColor_w___ === x1___?
                            (x1___.backgroundColor = '#FFF'):
                          x1___.w___('backgroundColor', '#FFF');
                          x3___ = (x2___ = IMPORTS___.x_v___? IMPORTS___.x:
                            ___.ri(IMPORTS___, 'x'), x2___.style_v___?
                            x2___.style: x2___.v___('style')), x3___.color_w___
                            === x3___? (x3___.color = '#000'):
                          x3___.w___('color', '#000');
                        }
                        return ___.f(onmouseout$_meth, 'onmouseout$_meth');
                      })(), x3___.onmouseout_w___ === x3___? (x3___.onmouseout
                      = x4___): x3___.w___('onmouseout', x4___));
                }
              } catch (ex___) {
                ___.getNewModuleHandler().handleUncaughtException(ex___,
                  IMPORTS___.onerror_v___? IMPORTS___.onerror:
                  ___.ri(IMPORTS___, 'onerror'), 'gadget-trivial.html', '3');
              }
              return moduleResult___;
            },
            'cajolerName': 'com.google.caja',
            'cajolerVersion': '${build.svnVersion}',
            'cajoledDate': 1311580657490
          }).instantiate___(___, IMPORTS___), ___.prepareModule({
            'instantiate': function (___, IMPORTS___) {
              var dis___ = IMPORTS___;
              var moduleResult___;
              moduleResult___ = ___.NO_RESULT;
              {
                IMPORTS___.htmlEmitter___.signalLoaded();
              }
              return moduleResult___;
            },
            'cajolerName': 'com.google.caja',
            'cajolerVersion': '${build.svnVersion}',
            'cajoledDate': 1311580657504
          }).instantiate___(___, IMPORTS___);
      },
      'cajolerName': 'com.google.caja',
      'cajolerVersion': '${build.svnVersion}',
      'cajoledDate': 1311580657507
    });
}