(function(){
    var detectResolutionAndChangeStyle = function(){
        var currentWidth = parseInt(document.documentElement.clientWidth),
            lis = document.getElementsByTagName('li'),
            lisLength = lis.length,
            html = document.getElementsByTagName('html')[0],
            styleFontSize = function(fontSizeInPercents) {
                html.style.fontSize = fontSizeInPercents + '%';
            };

        if ( currentWidth <= 480 && currentWidth > 300) {
            styleFontSize(90);
        } else if ( currentWidth > 480 ) {
            styleFontSize(100);
        } else if ( currentWidth <= 300 && currentWidth > 250 ) {
            styleFontSize(70);
        } else if ( currentWidth > 300 ) {
            styleFontSize(90);
        } else if ( currentWidth <= 250 ) {
            styleFontSize(50);
        }
    };

    detectResolutionAndChangeStyle();
    window.attachEvent('onresize', detectResolutionAndChangeStyle);
}());