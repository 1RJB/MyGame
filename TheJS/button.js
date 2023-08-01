function r(a) {
    window.location.assign(a);
};

if (window.location.href == 'https://1rjb.github.io/MyGame/index.html') {
    document.querySelector('.mygame').addEventListener('click', function() {
        console.log('My Game button clicked');
        r('index.html');
    });
};

if (window.location.href == 'https://1rjb.github.io/MyGame/about.html') {
    document.querySelector('.about').addEventListener('click', function() {
        console.log('About Me button clicked');
        r('about.html');
    });
};


if (window.location.href == 'https://1rjb.github.io/MyGame/email.html') {
    document.querySelector('.contactme').addEventListener('click', function() {
        r('email.html');
    });

};


document.querySelector('.chooselevel').addEventListener('click', function() {
    r('../index.html');
});
    
document.querySelector('.chooselevel').addEventListener('click', function() {
    r('../index.html');
});

document.querySelector('.chooselevel').addEventListener('click', function() {
    r('../index.html');
});
