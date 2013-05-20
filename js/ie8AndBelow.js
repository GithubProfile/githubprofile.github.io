(function(){
    var detectResolutionAndChangeStyle = function(){
        var currentWidth = parseInt(document.documentElement.clientWidth),
            lis = document.getElementsByTagName('li'),
            lisLength = lis.length,
            html = document.getElementsByTagName('html')[0],
            styleLisWidth = function(widthInPercents) {
                for (var i = lisLength - 1; i >= 0; i--) {
                    lis[i].style.width = widthInPercents + '%';
                }
            },
            styleFontSize = function(fontSizeInPercents) {
                html.style.fontSize = fontSizeInPercents + '%';
            };

        if ( currentWidth <= 480 && currentWidth > 300) {
            styleLisWidth(50);
            styleFontSize(90);
        } else if ( currentWidth > 480 ) {
            styleLisWidth(33);
            styleFontSize(100);
        } else if ( currentWidth <= 300 && currentWidth > 250 ) {
            styleLisWidth(100);
            styleFontSize(70);
        } else if ( currentWidth > 300 ) {
            styleLisWidth(50);
            styleFontSize(90);
        } else if ( currentWidth <= 250 ) {
            styleLisWidth(100);
            styleFontSize(50);
        }
    };

    detectResolutionAndChangeStyle();
    window.attachEvent('onresize', detectResolutionAndChangeStyle);
}());