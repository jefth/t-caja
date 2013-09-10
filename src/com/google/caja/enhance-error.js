/**
 * @fileOverview caja catch iframe box exception
 *               enhance the JS Error Object
 */
(function(win, log){
    if(!log){
        return;
    }
	var OldError = win.Error;
    win.Error = function(msg){
        log.sendTamingErrorLog(msg, window.frameElement);
        return new OldError(msg);
    };

    var OldEvalError = win.EvalError;
    win.EvalError = function(msg){
        log.sendTamingErrorLog(msg, window.frameElement);
        return new OldEvalError(msg);
    };

    var OldRangeError = win.RangeError;
    win.RangeError = function(msg){
        log.sendTamingErrorLog(msg, window.frameElement);
        return new OldRangeError(msg);
    };

    var OldReferenceError = win.ReferenceError;
    win.ReferenceError = function(msg){
        log.sendTamingErrorLog(msg, window.frameElement);
        return new OldReferenceError(msg);
    };

    var OldSyntaxError = win.SyntaxError;
    win.SyntaxError = function(msg){
        log.sendTamingErrorLog(msg, window.frameElement);
        return new OldSyntaxError(msg);
    };

    var OldTypeError = win.TypeError;
    win.TypeError = function(msg){
        log.sendTamingErrorLog(msg, window.frameElement);
        return new OldTypeError(msg);
    };

    var OldURIError = win.URIError;
    win.URIError = function(msg){
        log.sendTamingErrorLog(msg, window.frameElement);
        return new OldURIError(msg);
    };


})(window, parent.shop_log);