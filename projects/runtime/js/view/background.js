var background = function (window) {
    'use strict';
    
    window.opspark = window.opspark || {};
    var draw = window.opspark.draw;
    var createjs = window.createjs;
    
    /*
     * Create a background view for our game application
     */
    window.opspark.makeBackground = function(app,ground) {
        /* Error Checking - DO NOT DELETE */
        if(!app) {
            throw new Error("Invalid app argument");
        }
        if(!ground || typeof(ground.y) == 'undefined') {
            throw new Error("Invalid ground argument");
        }
        
        // useful variables
        var canvasWidth = app.canvas.width;
        var canvasHeight = app.canvas.height;
        var groundY = ground.y;
        
        // container which will be returned
        var background;
        
        // ANIMATION VARIABLES HERE:
        var tree;
        var buildings = [];
     
        // called at the start of game and whenever the page is resized
        // add objects for display in background. draws each image added to the background once
        function render() {
            background.removeAllChildren();

            // TODO: 2 - Part 2
            // this fills the background with a obnoxious yellow
            // you should modify this to suit your game
            var backgroundFill = draw.bitmap("img/jungle-background.jpg");
            background.addChild(backgroundFill);
            
            /*
            // TODO: 3 - Add a moon and starfield
            var moon = draw.bitmap("img/moon.png");//draws the moon using .bitmap and stores it in the moon variable
            moon.x = canvasWidth - 300; //adds an X value to the moon of 300 pixels
            moon.y = groundY - 400; //adds an y value to the moon of 200 pixels
            moon.scaleX = 0.5; //scales the moon's x value 
            moon.scaleY = 0.5; //scales the moon's y value  
            background.addChild(moon); // adds the moon as a child of background

            //Loop that draws 100 stars
            for (var i = 0; i < 100; i++) {
                var circle = draw.circle(3, "white", "LightGray", 2); //draws a circle and stores it in the variable cicle
                circle.x = canvasWidth * Math.random(); // mupltiplies a random decimal times the width of the canvas and stores it as the x position
                circle.y = groundY * Math.random(); // mupltiplies a random decimal times the groundY of the canvas and stores it as the y position
                background.addChild(circle); //adds circle as the child to background
            }
            */
            
            // TODO 5: Part 1 - Add buildings!     Q: This is before TODO 4 for a reason! Why?
            for (var i = 0; i < 7; ++i) {
                var building = draw.bitmap("img/jungle-tree.png");
                building.x = canvasWidth * Math.random()* i;
                building.y = groundY - 280
                background.addChild(building);
                buildings.push(building);
              }
            
            // TODO 4: Part 1 - Add a tree
            tree = draw.bitmap("img/tree.png"); //uses bit map tp draw the image ,and stores it in the variable tree
            tree.x = canvasWidth - 200; //assigns the x value to the tree
            tree.y = groundY - 415; //assigns the y value to the tree
            background.addChild(tree); //adds the tree as the child of background
            
        } // end of render function - DO NOT DELETE
        
        
        // Perform background animation
        // called on each timer "tick" - 60 times per second
        function update() {
            // useful variables
            var canvasWidth = app.canvas.width;
            var canvasHeight = app.canvas.height;
            var groundY = ground.y;
            
            // TODO 4: Part 2 - Move the tree!
            tree.x = tree.x -3; // subtracts from the x value of the tree to move it left

            if (tree.x < -300) {
                tree.x = canvasWidth;
            }
            
            // TODO 5: Part 2 - Parallax
            //moves the buildings and resets their x values to the right side of the canvas if they go off the left
            for (var i =0; i < buildings.length; i++) {
                var building = buildings[i]; //stores an index of the array in the varaiable building
                building.x = building.x -1; //subtracts from the x value of the building to move it to the left
                if(building.x < -75) { //checks to see if the buildings x value has gone off the left side of the canvas
                    building.x = canvasWidth; //resets the x value to canvas width ,which is the right side of the canvas
                }
            }
           
        } // end of update function - DO NOT DELETE
        
        
        
        /* Make a createjs Container for the background and let it know about the render and upate functions*/
        background = new createjs.Container();
        background.resize = render;
        background.update = update;
        
        /* make the background able to respond to resizing and timer updates*/
        app.addResizeable(background);
        app.addUpdateable(background);
        
        /* render and return the background */
        render();
        return background;
    };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = background;
}
