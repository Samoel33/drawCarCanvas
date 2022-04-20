'use strict';

var canvas = document.querySelector('#car');
var ctx = canvas.getContext('2d');

function draw() {
    if (canvas.getContext) {
        ctx.save();
        //car truck and body
        ctx.beginPath();
        ctx.moveTo(420, 210);
        ctx.lineTo(370, 160);
        ctx.moveTo(372, 160);
        ctx.lineTo(300, 160);
        ctx.lineWidth = 10;
        ctx.moveTo(300, 150);
        ctx.lineTo(300, 200);
        ctx.moveTo(347, 155);
        ctx.lineTo(347, 200);
        //car Body
        ctx.fillRect(220, 200, 250, 60);
        ctx.fillRect(300, 200, 150, 60);
        ctx.stroke();

        //Wheels
        ctx.arc(260, 260, 25, 0, Math.PI * 2);
        ctx.arc(420, 260, 25, 0, Math.PI * 2);
        //car lights
        ctx.stroke();
        ctx.beginPath();
        ctx.fillStyle = "orange";
        ctx.fillRect(220, 210, 10, 30);
        ctx.fillStyle = "red";
        ctx.fillRect(220, 230, 10, 10);
        ctx.fillStyle = "lightblue";
        ctx.fillRect(460, 210, 10, 20);


        //car rims
        ctx.fillStyle = "blue";
        ctx.arc(420, 260, 20, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = "blue";
        ctx.arc(260, 260, 20, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
    }

}
draw();
wheels();