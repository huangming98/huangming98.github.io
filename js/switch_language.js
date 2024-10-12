var _prevOnload = window.onload;

window.onload = function () {
    var switchLang = document.getElementsByClassName("menu-item menu-item-switch-to-chinese")[0];
    switchLang.onclick = function () {
        var href = window.location.href;
        var includesKeywords = href.includes("/homepage/") || href.includes("/home/")|| href.includes("/publications/") || href.includes("/resources/")|| href.includes("/link/")|| href.includes("/archives/")|| href.includes("/Switch to Chinese/");
        if (includesKeywords) {
            window.location.href = href.replace('.cn/', '.cn/cn/');

        }
        else {
            window.location.href = "https://www.huangm.cn/cn";
        }
        if (typeof (_prevOnload) === 'function') {
            _prevOnload();
        }
        return false;
    }
}