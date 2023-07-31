function r(a) {
    window.location.href = a;
};

if (window.location.href == 'https://1rjb.github.io/MyGame/index.html') {
    document.querySelector('.mygame').addEventListener('click', function() {
        r('index.html');
    });
};

if (window.location.href == 'https://1rjb.github.io/MyGame/about.html') {
    document.querySelector('.about').addEventListener('click', function() {
        r('about.html');
    });
};

if (window.location.href == 'https://1rjb.github.io/MyGame/email.html') {
    document.querySelector('.email').addEventListener('click', function() {
        r('email.html');
    });
};
