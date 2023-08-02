function change(a) {
    window.location.assign(a);
};

for (var i = 1; i < 11; i++) {
    (function(i) {
        document.querySelector('.level'+i).addEventListener('click', function() {
            change('LEVELS/level'+i+'.html');
        });
    })(i);
};


document.querySelector('.contactme').addEventListener('click', function() {
    console.log('Contact me button clicked');
    change('email.html');
});
    
document.querySelector('.about').addEventListener('click', function() {
    console.log('About me button clicked');
    change('about.html');
});







    


