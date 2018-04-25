// 公用处理方法
(function(w) {
    String.prototype.format = function() {
        for (var temS = this, i = 0; i < arguments.length; ++i) {
            temS = temS.replace(new RegExp("\\{" + i + "\\}", "g"), arguments[i]);
        }
        return temS;
    }

    String.prototype.getLocPath = function(key) {
        var value = this.match(key);
        return value ? true : false;
    }

    String.prototype.getLocValue = function(key) {
        var reg = new RegExp(key + '=([^&]*)');
        var value = this.match(reg);
        return value ? value[1] : '';
    }

})(window);

// 公用rem方法
(function(win, doc) {
    var script = doc.querySelector("#J_script_attrsniffer");
    var remwidth;
    var remSwitch;
    var remmaxwidth;
    var evt = 'onorientationchange' in win ? 'orientationchange' : 'resize';
    var timer = null;

    var ua = navigator.userAgent.toLowerCase();
    var isIos = /ip(hone|od|ad)/i.test(ua);
    var isFanli = ua.indexOf('fanli') > -1;
    var isIpad = /ipad/i.test(ua);

    if (!script) {
        return;
    }

    remwidth = script.getAttribute("data-remwidth");
    remSwitch = script.getAttribute("data-remswitch");
    remmaxwidth = script.getAttribute("data-remmaxwidth");

    if (remSwitch == "[remswitch]") {
        return;
    }

    remwidth = (remwidth == "[remwidth]" ? 750 : Number(remwidth));

    function setFontSize() {
        var docEl = doc.documentElement;
        var winWidth = (isFanli && isIos && !isIpad) ? window.screen.width : docEl.getBoundingClientRect().width;

        var originFontSize;
        var definedFontSize = (winWidth / remwidth) * 100;

        if (remmaxwidth && remmaxwidth !== "[remmaxwidth]" && definedFontSize > Number(remmaxwidth)) {
            definedFontSize = Number(remmaxwidth);
        }

        docEl.setAttribute('data-screenwidth', winWidth);
        docEl.style.fontSize = definedFontSize + 'px';

        originFontSize = parseFloat(window.getComputedStyle(docEl, null).getPropertyValue("font-size"));

        if (!isIos && definedFontSize != originFontSize) {
            originFontSize = (originFontSize % 1 === 0) ? (originFontSize + 0.5) : originFontSize;
            docEl.style.fontSize = (definedFontSize / originFontSize) * definedFontSize + 'px';
        }
    }

    win.addEventListener(evt, function() {
        clearTimeout(timer);
        timer = setTimeout(setFontSize, 300);
    }, false);

    win.addEventListener("pageshow", function(e) {
        if (e.persisted) {
            clearTimeout(timer);
            timer = setTimeout(setFontSize, 300);
        }
    }, false);

    setFontSize();

}(window, document));