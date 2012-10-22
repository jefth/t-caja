function makeSharedFactory(frameGroup, KISSY) {


    var S = KISSY;

    // 声明外部类库构造器以及函数
    frameGroup.markCtor(S.Anim);
    frameGroup.grantMethod(S.Anim, "run");
    frameGroup.grantMethod(S.Anim, "stop");
    frameGroup.markCtor(S.EventObject);
    var props = ('altKey attrChange attrName bubbles button cancelable ' +
        'charCode clientX clientY ctrlKey currentTarget data detail ' +
        'eventPhase fromElement handler keyCode layerX layerY metaKey ' +
        'newValue offsetX offsetY originalTarget pageX pageY prevValue ' +
        'relatedNode relatedTarget screenX screenY shiftKey srcElement ' +
        'target toElement view wheelDelta which axis').split(' ');
    S.each(props, function(p) {
        frameGroup.grantRead(S.EventObject.prototype, p);
    });

    return function(param) {

        // 限定模块的选择器
        function query(s,context) {
            
            var ret = [];
            
            if(context){
                context=query(context);
            }else{
                context=[];
            }
            
            if (S.ExternalSelector) {
                if (S.isString(s)) {
                    ret = S.ExternalSelector(s, context[0]||param.context);
                } else {
                    ret = S.makeArray(s);
                }
            } else if (S.require && S.require("sizzle")) {
                return S.DOM.query(s, context[0]||param.context);
            } else {
                throw new Error("sizzle not loaded");
            }

            ret.each = function(f) {
                for (var i = 0; i < this.length; i++) {
                    if (f(this[i]) === false) {
                        break;
                    }
                }
            };

            return ret;
        }

        var imports = param.imports;

        function tame(n) {
            return   imports.tameNode___(n, true);
        }
        
        function genWrapper(){
            function wrapper(e) {
                if (e.target) {
                    e.target = tame(e.target);
                }
                if (e.relatedTarget) {
                    e.relatedTarget = tame(e.relatedTarget);
                }
                if (e.currentTarget) {
                    e.currentTarget = tame(e.currentTarget);
                }
                return wrapper.handle.call(this,e);
            }
            return wrapper;
        }


        var Event_On=frameGroup.markFunction(function(s, event, handle, scope) {
                    var wrapper=genWrapper();
                    wrapper.handle=handle;
                    handle.__event_tag = handle.__event_tag || [];
                    var els = query(s);
                    S.each(els, function(el) {
                        handle.__event_tag.push({
                            fn:wrapper,
                            el:el,
                            scope:scope || el
                        });
                    });
                    S.Event.on(els, event, wrapper, scope);
                });

        return frameGroup.tame({

            DOM:{
                // 提供选择器功能
                query:frameGroup.markFunction(function(s,context) {
                    var ret = query(s,context);

                    // imports.document.compareDocumentPosition 不存在 bug！
                    // 索性用 html ，反正店铺模块不能写 head
                    // body 不行，body.contains 与 body.compareDocumentPosition 都没！
                    // 不能用 imports , firefox/ie 不行                    
                    S.each(ret, function(v, i) {
                        // 手动 tame，框架保证返回数据无害！
                        ret[i] = tame(v);
                    });

                    return ret;
                }),

                css:frameGroup.markFunction(function(s, value) {
                    return S.DOM.css(query(s), value);
                }),

                hasClass:frameGroup.markFunction(function(s, value) {
                    return S.DOM.hasClass(query(s), value);
                }),

                addClass:frameGroup.markFunction(function(s, value) {
                    return S.DOM.addClass(query(s), value);
                }),

                removeClass:frameGroup.markFunction(function(s, value) {
                    return S.DOM.removeClass(query(s), value);
                }),

                // 兼容性处理，读取or设置元素 text
                text:frameGroup.markFunction(function(s, value) {
                    return S.DOM.text(query(s), value);
                }),

                // 兼容性处理，读取or设置元素坐标
                offset:frameGroup.markFunction(function(s, value) {
                    return S.DOM.offset(query(s), value);
                })
            },

            io:{

            },

            UA:S.clone(S.UA),

            log: frameGroup.markFunction(function() {
                S.log.apply(S, arguments);
            }),

            // 提供批量注册事件功能
            Event:{
                add:Event_On,
                on:Event_On,
                remove:frameGroup.markFunction(function(s, event, handle, scope) {
                    var els = query(s);
                    if (handle) {
                        var wrappers = handle.__event_tag || [];
                        for (var i = wrappers.length - 1; i >= 0; i--) {
                            var w = wrappers[i];
                            var tScope = scope || w.el;
                            if (w.scope === tScope &&
                                S.inArray(w.el, els)) {
                                S.Event.remove(w.el, event, w.fn, scope);
                                wrappers.splice(i, 1);
                            }
                        }
                    } else {
                        S.Event.remove(els, event);
                    }
                })
            },

            // 提供动画方便功能
            Anim:frameGroup.markFunction(function() {
                var args = S.makeArray(arguments);
                args[0] = query(args[0]);
                return S.Anim.apply(window, args);
            })
        });
    };
}
