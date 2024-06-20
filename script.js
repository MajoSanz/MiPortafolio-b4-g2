/* Mi primer archivo de JS */

var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter
    .typeString('Majo Sánchez')
    .pauseFor(1500)
    .deleteAll()
    .typeString('Desarrolladora Frontend Jr')
    .pauseFor(1500)
    .deleteAll()
    .typeString('<strong>Estudiante</strong>')
    .pauseFor(1500)
    .deleteAll()
    .typeString('amante de los gatos y hámsters')
    .pauseFor(1500)
    
    .start();