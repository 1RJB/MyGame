
/*     for (var i = 1; i < 10; i++) {
        document.querySelector('.level'+i).addEventListener('click', function() {
            destination = 'LEVELS/level'+i+'.html';
            console.log(destination);
            window.location.assign(destination);
        });
    }; */

    for (var i = 1; i < 11; i++) {
        (function(i) {
            document.querySelector('.level'+i).addEventListener('click', function() {
                var destination = 'LEVELS/level'+i+'.html';
                console.log(destination);
                window.location.assign(destination);
            });
        })(i);
    };
    


