var _prevOnload = window.onload;

window.onload = function () {
    var switchLang = document.getElementsByClassName("menu-item menu-item-switch-to-english")[0];
    switchLang.onclick = function () {
        var href = window.location.href;
        var includesKeywords = href.includes("/cn/homepage/") || href.includes("/cn/home/")|| href.includes("/cn/publications/") || href.includes("/cn/resources/")|| href.includes("/cn/link/")|| href.includes("/cn/archives/");
        if (includesKeywords) {
            window.location.href = href.replace('.io/', '.io/cn/');
        }
        else {
            window.location.href = "https://huangming98.github.io/cn/";
        }
        if (typeof (_prevOnload) === 'function') {
            _prevOnload();
        }
        return false;
    }
}