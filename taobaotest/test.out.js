{
  ___.loadModule({
      'instantiate': function (___, IMPORTS___) {
        var dis___ = IMPORTS___;
        var moduleResult___, x0___, x1___, x2___, x3___, x4___, x5___, x6___,
        x7___, x8___, x9___, x10___, x11___, x12___, x13___, x14___, x15___,
        x16___, x17___, x18___, x19___, x20___, x21___, x22___, x23___, x24___,
        x25___, x26___, x27___, x28___, x29___, x30___, x31___, x32___, x33___,
        x34___, x35___, x36___, x37___, x38___, x39___, x40___, x41___;
        {
          function trim(s) {
            var x0___, x1___;
            return x0___ = s || '', x1___ = new RegExp.new___('^\\s+|\\s+$'),
            x0___.replace_m___? x0___.replace(x1___, ''): x0___.m___('replace',
              [ x1___, '' ]);
          }
          IMPORTS___.w___('trim', ___.f(trim, 'trim'));
        }
        moduleResult___ = ___.NO_RESULT;
        IMPORTS___.w___('S', IMPORTS___.KISSY_v___? IMPORTS___.KISSY:
          ___.ri(IMPORTS___, 'KISSY')), IMPORTS___.w___('UA', (x0___ =
            IMPORTS___.S_v___? IMPORTS___.S: ___.ri(IMPORTS___, 'S'),
            x0___.UA_v___? x0___.UA: x0___.v___('UA'))), IMPORTS___.w___('DOM',
          (x1___ = IMPORTS___.S_v___? IMPORTS___.S: ___.ri(IMPORTS___, 'S'),
           x1___.DOM_v___? x1___.DOM: x1___.v___('DOM'))),
        IMPORTS___.w___('Event', (x2___ = IMPORTS___.S_v___? IMPORTS___.S:
            ___.ri(IMPORTS___, 'S'), x2___.Event_v___? x2___.Event:
            x2___.v___('Event'))), IMPORTS___.w___('Anim', (x3___ =
            IMPORTS___.S_v___? IMPORTS___.S: ___.ri(IMPORTS___, 'S'),
            x3___.Anim_v___? x3___.Anim: x3___.v___('Anim'))),
        IMPORTS___.w___('anim', null);
        IMPORTS___.w___('stop', (x4___ = IMPORTS___.DOM_v___? IMPORTS___.DOM:
            ___.ri(IMPORTS___, 'DOM'), x4___.query_m___?
            x4___.query('.stopCls'): x4___.m___('query', [ '.stopCls' ]))[ +0 ]
        );
        IMPORTS___.w___('x', (x5___ = IMPORTS___.DOM_v___? IMPORTS___.DOM:
            ___.ri(IMPORTS___, 'DOM'), x5___.query_m___? x5___.query('.xx'):
            x5___.m___('query', [ '.xx' ]))[ +0 ]);
        IMPORTS___.w___('show', (x6___ = IMPORTS___.DOM_v___? IMPORTS___.DOM:
            ___.ri(IMPORTS___, 'DOM'), x6___.query_m___?
            x6___.query('.showCls'): x6___.m___('query', [ '.showCls' ]))[ +0 ]
        );
        IMPORTS___.w___('show2', (x7___ = IMPORTS___.DOM_v___? IMPORTS___.DOM:
            ___.ri(IMPORTS___, 'DOM'), x7___.query_m___?
            x7___.query('.showCls'): x7___.m___('query', [ '.showCls' ]))[ +0 ]
        );
        x8___ = IMPORTS___.S_v___? IMPORTS___.S: ___.ri(IMPORTS___, 'S'), x9___
          = IMPORTS___.show_v___? IMPORTS___.show: ___.ri(IMPORTS___, 'show'),
        x8___.log_m___? x8___.log(x9___): x8___.m___('log', [ x9___ ]);
        x10___ = IMPORTS___.console_v___? IMPORTS___.console:
        ___.ri(IMPORTS___, 'console'), x11___ = IMPORTS___.show_v___?
          IMPORTS___.show: ___.ri(IMPORTS___, 'show'), x10___.log_m___?
          x10___.log(x11___): x10___.m___('log', [ x11___ ]);
        x12___ = IMPORTS___.S_v___? IMPORTS___.S: ___.ri(IMPORTS___, 'S'),
        x13___ = IMPORTS___.UA_v___? IMPORTS___.UA: ___.ri(IMPORTS___, 'UA'),
        x12___.log_m___? x12___.log(x13___): x12___.m___('log', [ x13___ ]);
        x14___ = IMPORTS___.console_v___? IMPORTS___.console:
        ___.ri(IMPORTS___, 'console'), x15___ = IMPORTS___.UA_v___?
          IMPORTS___.UA: ___.ri(IMPORTS___, 'UA'), x14___.log_m___?
          x14___.log(x15___): x14___.m___('log', [ x15___ ]);
        x16___ = IMPORTS___.S_v___? IMPORTS___.S: ___.ri(IMPORTS___, 'S'),
        x18___ = (x17___ = IMPORTS___.UA_v___? IMPORTS___.UA:
          ___.ri(IMPORTS___, 'UA'), x17___.webkit_v___? x17___.webkit:
          x17___.v___('webkit')), x16___.log_m___? x16___.log(x18___):
        x16___.m___('log', [ x18___ ]);
        x19___ = IMPORTS___.console_v___? IMPORTS___.console:
        ___.ri(IMPORTS___, 'console'), x21___ = (x20___ = IMPORTS___.UA_v___?
          IMPORTS___.UA: ___.ri(IMPORTS___, 'UA'), x20___.webkit_v___?
          x20___.webkit: x20___.v___('webkit')), x19___.log_m___?
          x19___.log(x21___): x19___.m___('log', [ x21___ ]);
        x22___ = IMPORTS___.S_v___? IMPORTS___.S: ___.ri(IMPORTS___, 'S'),
        x25___ = (x23___ = IMPORTS___.DOM_v___? IMPORTS___.DOM:
          ___.ri(IMPORTS___, 'DOM'), x24___ = IMPORTS___.show_v___?
          IMPORTS___.show: ___.ri(IMPORTS___, 'show'), x23___.offset_m___?
          x23___.offset(x24___): x23___.m___('offset', [ x24___ ])),
        x22___.log_m___? x22___.log(x25___): x22___.m___('log', [ x25___ ]);
        x26___ = IMPORTS___.console_v___? IMPORTS___.console:
        ___.ri(IMPORTS___, 'console'), x29___ = (x27___ = IMPORTS___.DOM_v___?
          IMPORTS___.DOM: ___.ri(IMPORTS___, 'DOM'), x28___ =
          IMPORTS___.show_v___? IMPORTS___.show: ___.ri(IMPORTS___, 'show'),
          x27___.offset_m___? x27___.offset(x28___): x27___.m___('offset', [
              x28___ ])), x26___.log_m___? x26___.log(x29___):
        x26___.m___('log', [ x29___ ]);
        x30___ = IMPORTS___.Event_v___? IMPORTS___.Event: ___.ri(IMPORTS___,
          'Event'), x31___ = IMPORTS___.stop_v___? IMPORTS___.stop:
        ___.ri(IMPORTS___, 'stop'), x32___ = ___.f(function (e) {
            var x0___;
            if (IMPORTS___.anim_v___? IMPORTS___.anim: ___.ri(IMPORTS___,
                'anim')) {
              x0___ = IMPORTS___.anim_v___? IMPORTS___.anim: ___.ri(IMPORTS___,
                'anim'), x0___.stop_m___? x0___.stop(): x0___.m___('stop', [ ])
                ;
            }
          }), x30___.on_m___? x30___.on(x31___, 'click', x32___):
        x30___.m___('on', [ x31___, 'click', x32___ ]);
        x33___ = IMPORTS___.Event_v___? IMPORTS___.Event: ___.ri(IMPORTS___,
          'Event'), x34___ = IMPORTS___.show_v___? IMPORTS___.show:
        ___.ri(IMPORTS___, 'show'), x35___ = ___.f(function (e) {
            var x0___, x1___, x2___, x3___, x4___, x5___, x6___, x7___, x8___,
            x9___, x10___, x11___;
            if (IMPORTS___.anim_v___? IMPORTS___.anim: ___.ri(IMPORTS___,
                'anim')) {
              x0___ = IMPORTS___.anim_v___? IMPORTS___.anim: ___.ri(IMPORTS___,
                'anim'), x0___.stop_m___? x0___.stop(): x0___.m___('stop', [ ])
                ;
            }
            if ((IMPORTS___.trim_v___? IMPORTS___.trim: ___.ri(IMPORTS___,
                  'trim')).i___((x1___ = IMPORTS___.show_v___? IMPORTS___.show:
                  ___.ri(IMPORTS___, 'show'), x1___.innerHTML_v___?
                  x1___.innerHTML: x1___.v___('innerHTML'))) == 'resize') {
              IMPORTS___.anim_w___? (IMPORTS___.anim = (IMPORTS___.Anim_v___?
                  IMPORTS___.Anim: ___.ri(IMPORTS___, 'Anim'))
                .i___(IMPORTS___.x_v___? IMPORTS___.x: ___.ri(IMPORTS___, 'x'),
                  ___.iM([ 'width', '10px', 'height', '10px' ]), 2)):
              ___.wi(IMPORTS___, 'anim', (IMPORTS___.Anim_v___?
                  IMPORTS___.Anim: ___.ri(IMPORTS___, 'Anim'))
                .i___(IMPORTS___.x_v___? IMPORTS___.x: ___.ri(IMPORTS___, 'x'),
                  ___.iM([ 'width', '10px', 'height', '10px' ]), 2));
              x2___ = IMPORTS___.anim_v___? IMPORTS___.anim: ___.ri(IMPORTS___,
                'anim'), x2___.run_m___? x2___.run(): x2___.m___('run', [ ]);
              x3___ = IMPORTS___.console_v___? IMPORTS___.console:
              ___.ri(IMPORTS___, 'console'), x5___ = (x4___ =
                IMPORTS___.anim_v___? IMPORTS___.anim: ___.ri(IMPORTS___,
                  'anim'), x4___.domEl_v___? x4___.domEl: x4___.v___('domEl')),
              x3___.log_m___? x3___.log(x5___): x3___.m___('log', [ x5___ ]);
              x6___ = IMPORTS___.S_v___? IMPORTS___.S: ___.ri(IMPORTS___, 'S'),
              x8___ = (x7___ = IMPORTS___.anim_v___? IMPORTS___.anim:
                ___.ri(IMPORTS___, 'anim'), x7___.domEl_v___? x7___.domEl:
                x7___.v___('domEl')), x6___.log_m___? x6___.log(x8___):
              x6___.m___('log', [ x8___ ]);
              x9___ = IMPORTS___.show_v___? IMPORTS___.show: ___.ri(IMPORTS___,
                'show'), x9___.innerHTML_w___ === x9___? (x9___.innerHTML =
                'restore'): x9___.w___('innerHTML', 'restore');
            } else {
              IMPORTS___.anim_w___? (IMPORTS___.anim = (IMPORTS___.Anim_v___?
                  IMPORTS___.Anim: ___.ri(IMPORTS___, 'Anim'))
                .i___(IMPORTS___.x_v___? IMPORTS___.x: ___.ri(IMPORTS___, 'x'),
                  ___.iM([ 'width', '100px', 'height', '100px' ]), 2)):
              ___.wi(IMPORTS___, 'anim', (IMPORTS___.Anim_v___?
                  IMPORTS___.Anim: ___.ri(IMPORTS___, 'Anim'))
                .i___(IMPORTS___.x_v___? IMPORTS___.x: ___.ri(IMPORTS___, 'x'),
                  ___.iM([ 'width', '100px', 'height', '100px' ]), 2));
              x10___ = IMPORTS___.anim_v___? IMPORTS___.anim:
              ___.ri(IMPORTS___, 'anim'), x10___.run_m___? x10___.run():
              x10___.m___('run', [ ]);
              x11___ = IMPORTS___.show_v___? IMPORTS___.show:
              ___.ri(IMPORTS___, 'show'), x11___.innerHTML_w___ === x11___?
                (x11___.innerHTML = 'resize'): x11___.w___('innerHTML',
                'resize');
            }
          }), x33___.on_m___? x33___.on(x34___, 'click', x35___):
        x33___.m___('on', [ x34___, 'click', x35___ ]);
        x36___ = IMPORTS___.Event_v___? IMPORTS___.Event: ___.ri(IMPORTS___,
          'Event'), x37___ = IMPORTS___.x_v___? IMPORTS___.x:
        ___.ri(IMPORTS___, 'x'), x38___ = ___.f(function (e) {
            var x0___, x1___, x2___, x3___;
            x1___ = (x0___ = e.target_v___? e.target: e.v___('target'),
              x0___.style_v___? x0___.style: x0___.v___('style')),
            x1___.backgroundColor_w___ === x1___? (x1___.backgroundColor =
                '#000'): x1___.w___('backgroundColor', '#000');
            x3___ = (x2___ = e.target_v___? e.target: e.v___('target'),
              x2___.style_v___? x2___.style: x2___.v___('style')),
            x3___.color_w___ === x3___? (x3___.color = '#FFF'):
            x3___.w___('color', '#FFF');
          }), x36___.on_m___? x36___.on(x37___, 'mouseover', x38___):
        x36___.m___('on', [ x37___, 'mouseover', x38___ ]);
        moduleResult___ = (x39___ = IMPORTS___.Event_v___? IMPORTS___.Event:
          ___.ri(IMPORTS___, 'Event'), x40___ = IMPORTS___.x_v___?
          IMPORTS___.x: ___.ri(IMPORTS___, 'x'), x41___ = ___.f(function (e) {
              var x0___, x1___, x2___, x3___;
              x1___ = (x0___ = e.target_v___? e.target: e.v___('target'),
                x0___.style_v___? x0___.style: x0___.v___('style')),
              x1___.backgroundColor_w___ === x1___? (x1___.backgroundColor =
                  '#FFF'): x1___.w___('backgroundColor', '#FFF');
              x3___ = (x2___ = e.target_v___? e.target: e.v___('target'),
                x2___.style_v___? x2___.style: x2___.v___('style')),
              x3___.color_w___ === x3___? (x3___.color = '#000'):
              x3___.w___('color', '#000');
            }), x39___.on_m___? x39___.on(x40___, 'mouseout', x41___):
          x39___.m___('on', [ x40___, 'mouseout', x41___ ]));
        return moduleResult___;
      },
      'cajolerName': 'com.google.caja',
      'cajolerVersion': '${build.svnVersion}',
      'cajoledDate': 1320633529379
});
}