var init = function (window) {
    'use strict';
    var 
        draw = window.opspark.draw,
        physikz = window.opspark.racket.physikz,
        
        app = window.opspark.makeApp(),
        canvas = app.canvas, 
        view = app.view,
        fps = draw.fps('#000');
        
    
    window.opspark.makeGame = function() {
        
        window.opspark.game = {};
        var game = window.opspark.game;
        
        ////////////////////////////////////////////////////////////
        ///////////////// PROGRAM SETUP ////////////////////////////
        ////////////////////////////////////////////////////////////
        
        // TODO 1 : Declare and initialize our variables

            var circle = 1; //declaring a variable to hold one circle
            var circles=[]; // creating an array to hold all of the circles

        // TODO 2 : Create a function that draws a circle 

            // declaring a function called drawCircle that has the code to create a circle
           function drawCircle () {
            // Code to draw a circle
            circle = draw.randomCircleInArea(canvas, true, true, '#999', 2); //draws a random circle with a random  color, size, and location on the screen
            physikz.addRandomVelocity(circle, canvas, 5, 10); //use the phyziks library to provide motion ,a random velocity, and diretion to the circles
            view.addChild(circle); //allows the circle appear on the screen, makes the circle a child of view
            circles.push(circle); //saves each new circle into an array using the push method
           }

        // TODO 3 / 7 : Call the drawCircle() function 

            /*       call the drawCircle function and creates five circles
            drawCircle():
            drawCircle():
            drawCircle():
            drawCircle():
            drawCircle():
            */

            //creates a for loop to call the drawCircle function 100 times
           for (var circlesCreated = 0; circlesCreated <= 100; circlesCreated++) {
                drawCircle();
           }

        ////////////////////////////////////////////////////////////
        ///////////////// PROGRAM LOGIC ////////////////////////////
        ////////////////////////////////////////////////////////////
        
        /* 
        This Function is called 60 times/second producing 60 frames/second.
        In each frame, for every circle, it should redraw that circle
        and check to see if it has drifted off the screen.         
        */
        function update() {
            // TODO 4 : Update the circle's position //

            /*     call the physiks.updatePostition to the circles array, calls the first 5 circles
            physikz.updatePosition(circles[0]);
            physikz.updatePosition(circles[1]);
            physikz.updatePosition(circles[2]);
            physikz.updatePosition(circles[3]);
            physikz.updatePosition(circles[4]);
           */

            // TODO 5 / 10 : Call game.checkCirclePosition() on your circles.

            /*     code that checks the circles position to make sure it stays on the screen
           game.checkCirclePosition(circles[0]);
           game.checkCirclePosition(circles[1]);
           game.checkCirclePosition(circles[2]);
           game.checkCirclePosition(circles[3]);
           game.checkCirclePosition(circles[4]);
           */

           // creates a for loop to move 100 circles
           for (var i = 0; i < circles.length; i++) {
            var eachCircle = circles[i]; 
            physikz.updatePosition(eachCircle); //Applies the physiks.updatePosition function to each circle
           }

            // TODO 9 : Iterate over the array

          game.checkCirclePosition(eachCircle); // call the game.checkCirclePosition to check eachCircle made in the for loop
            
        }
    
        /* 
        This Function should check the position of a circle that is passed to the 
        Function. If that circle drifts off the screen, this Function should move
        it to the opposite side of the screen.
        */
        game.checkCirclePosition = function(circle) {

            // if the circle has gone past the RIGHT side of the screen then place it on the LEFT
            if ( circle.x > canvas.width ) {
                circle.x = 0;
            }
            
            // TODO 6 : YOUR CODE STARTS HERE //////////////////////

            //If the circle goes past the bottom side of the screen then it places it top left
            if ( circle.y > canvas.height) {
                circle.y = 0;
            }
            //If the cicle goes past the top side of the screen then it places it top left
            if ( circle.y < 0) {
                circle.y = canvas.height;
            }
            //If the circles goes past the left side of the screen then it get places to the top left
            if(circle.x < 0) {
                circle.x = canvas.width;
            }


            // YOUR TODO 6 CODE ENDS HERE //////////////////////////
        }
        
        /////////////////////////////////////////////////////////////
        // --- NO CODE BELOW HERE  --- DO NOT REMOVE THIS CODE --- //
        /////////////////////////////////////////////////////////////
        
        view.addChild(fps);
        app.addUpdateable(fps);
        
        game.circle = circle;
        game.circles = circles;
        game.drawCircle = drawCircle;
        game.update = update;
        
        app.addUpdateable(window.opspark.game);
    }
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = init;
}
