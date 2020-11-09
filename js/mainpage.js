$(document).ready(function () {

    //mainpage typewriter animation on mainimage 
    const typewriter = new Typewriter('#typewriter', {
        loop: true,
    });

    typewriter.typeString('WEB PUBLISHER')
        .pauseFor(300)
        .deleteChars(9)
        .typeString('DESIGNER')
        .pauseFor(1000)
        .deleteChars(8)
        .start();

});