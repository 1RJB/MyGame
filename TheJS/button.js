function change(a) {
    window.location.assign(a);
};

if (window.location.href == 'https://1rjb.github.io/MyGame/about.html') {
    document.querySelector('.contactme').addEventListener('click', function() {
        console.log('Contact Me button clicked');
        change('email.html');
    });
    document.querySelector('.mygame').addEventListener('click', function() {
        console.log('My game button clicked');
        change('index.html');
    });
    
}


else if (window.location.href == 'https://1rjb.github.io/MyGame/email.html') {
    document.querySelector('.about').addEventListener('click', function() {
        console.log('About me button clicked');
        change('about.html');
    });
    document.querySelector('.mygame').addEventListener('click', function() {
        console.log('My game button clicked');
        change('index.html');
    });
}

document.querySelector('.about').addEventListener('click', function() {
    console.log('About me button clicked');
    change('about.html');
});
document.querySelector('.mygame').addEventListener('click', function() {
    console.log('My game button clicked');
    change('index.html');
});
document.querySelector('.contactme').addEventListener('click', function() {
    console.log('Contact Me button clicked');
    change('email.html');
});



    