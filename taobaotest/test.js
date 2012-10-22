var S = KISSY,
    UA=S.UA,
            DOM = S.DOM,
            Event = S.Event,
            Anim = S.Anim,
            anim = null;

    var stop = DOM.query(".stopCls")[0];
    
    var x = DOM.query(".xx")[0];

    var show = DOM.query(".showCls")[0];

    var show2 = DOM.query(".showCls")[0];

    //show.innerHTML = "yyyyyyyyyyyyyyyyy";

    S.log(show);
    console.log(show);
    
    S.log(UA);
    console.log(UA);
    
    S.log(UA.webkit);    
    console.log(UA.webkit);
    
    
    S.log(DOM.offset(show));    
    console.log(DOM.offset(show));
    

    function trim(s) {
        return (s || "").replace(/^\s+|\s+$/, "");
    }

    
    Event.on(stop, 'click', function(e) {
        if (anim) {
            anim.stop();
        }
    });


    Event.on(show, 'click', function(e) {
        if (anim) {
            anim.stop();
        }
        if (trim(show.innerHTML) == 'resize') {
            anim = Anim(x, {
                width:"10px",
                height:"10px"
            }, 2);
            anim.run();
            console.log(anim.domEl);
            S.log(anim.domEl);
            show.innerHTML = 'restore';
        } else {
            anim = Anim(x, {
                width:"100px",
                height:"100px"
            }, 2);
            anim.run();
            show.innerHTML = 'resize';
        }
    });


    Event.on(x, "mouseover", function(e) {
        e.target.style.backgroundColor = "#000";
        e.target.style.color = "#FFF";
    });
    Event.on(x, "mouseout", function(e) {
        e.target.style.backgroundColor = "#FFF";
        e.target.style.color = "#000";
    });