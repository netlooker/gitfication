var socket = io();

socket.on('connect', function () {
    jQuery("<p>Connected to the server.</p>").appendTo(document.body);
});

socket.on('playSound', function () {
    ion.sound({
        sounds: [
            {name: "button_click_on"},
        ],
        path: "sounds/",
        preload: true,
        volume: 1.0
    });
    ion.sound.play("button_click_on");
});