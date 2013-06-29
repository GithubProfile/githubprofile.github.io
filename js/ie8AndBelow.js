(function(){
    var olFirstOfType = document.getElementsByTagName('ol')[0];
        olFirstOfType.style.borderBottom = '1px solid #24404C';

    var detectResolutionAndChangeStyle = function(){
        var currentWidth = parseInt(document.documentElement.clientWidth),
            lis = document.getElementsByTagName('li'),
            lisLength = lis.length,
            html = document.getElementsByTagName('html')[0],
            styleFontSize = function(fontSizeInPercents) {
                html.style.fontSize = fontSizeInPercents + '%';
            },
            retinaRibbon = document.getElementsByTagName('img')[0];

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

        if ( currentWidth <= 750 ) {
            retinaRibbon.style.width = '74px';
            retinaRibbon.style.height = '74px';
        } else {
            retinaRibbon.style.width = '149px';
            retinaRibbon.style.height = '149px';
        }
    };

    detectResolutionAndChangeStyle();
    window.attachEvent('onresize', detectResolutionAndChangeStyle);
}());