

setInterval(function name() {
    var coms = document.getElementsByClassName("CommentsWrapper");
    if (coms.length != 0) {
        coms[0].parentNode.removeChild(coms[0]);
    }
},300)






