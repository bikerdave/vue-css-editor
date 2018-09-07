window.onload=function() {
    let base = 16;

    new Vue({
        el: '#app',
        data: {
            baseFontSize: base,
            baseLineheight: 1.42857143,
            baseColor: '#333333',

            h1Size: 36/base,
            h1Lineheight: 1.1,
            h1Color: 'inherit',
            h1MarginTop: 20/base,
            h1MarginBottom: 10/base,
            h1BorderTopColour: 'inherit',
            h1BorderTopSize: 0,
            h1BorderBottomColour: 'inherit',
            h1BorderBottomSize: 0,
            h1PaddingTop: 0,
            h1PaddingBottom: 0,
        }
    });
};
