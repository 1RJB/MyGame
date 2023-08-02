function r(a) {
    window.location.href(a);
};

if (window.location.href == 'https://1rjb.github.io/MyGame/index.html') {
    document.querySelector('.contactme').addEventListener('click', function() {
        console.log('Contact me button clicked');
        r('email.html');
    });
    document.querySelector('.about').addEventListener('click', function() {
        console.log('About me button clicked');
        r('about.html');
    });
};

if (window.location.href == 'https://1rjb.github.io/MyGame/about.html') {
    document.querySelector('.contactme').addEventListener('click', function() {
        console.log('Contact Me button clicked');
        r('email.html');
    });
    document.querySelector('.mygame').addEventListener('click', function() {
        console.log('My game button clicked');
        r('index.html');
    });
    
};


if (window.location.href == 'https://1rjb.github.io/MyGame/email.html') {
    document.querySelector('.about').addEventListener('click', function() {
        r('about.html');
    });
    document.querySelector('.mygame').addEventListener('click', function() {
        console.log('My game button clicked');
        r('index.html');
    });
};


document.querySelector('.chooselevel').addEventListener('click', function() {
    r('../index.html');
});
    