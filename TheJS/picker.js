function change(a) {
    window.location.assign(a);
};

if (window.location.href == 'https://1rjb.github.io/MyGame/index.html' || window.location.href == 'https://1rjb.github.io/MyGame/') {
    document.querySelector('.contactme').addEventListener('click', function() {
        console.log('Contact me button clicked');
        change('email.html');
    });
    
    document.querySelector('.about').addEventListener('click', function() {
        console.log('About me button clicked');
        change('about.html');
    });
};

for (var i = 1; i < 11; i++) {
    (function(i) {
        document.querySelector('.level'+i).addEventListener('click', function() {
            var destination = 'LEVELS/level'+i+'.html';
            console.log(destination);
            change(destination);
        });
    })(i);
};





    


