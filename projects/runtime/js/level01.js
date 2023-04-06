var level01 = function (window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function(game) {
        // some useful constants 
        var groundY = game.groundY;

        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            "name": "Robot Romp",
            "number": 1, 
            "speed": -3,
            "gameItems": [

                //level 1
                /*
                { "type": "sawblade", "x": 400, "y": groundY -120},
                { "type": "sawblade", "x": 600, "y": groundY -120},
                { "type": "sawblade", "x": 900, "y": groundY -5},
                */

                { "type": "spike", "x": 900, "y": groundY -10},
                { "type": "spike", "x": 1100, "y": groundY -10},
                { "type": "spike", "x": 1200, "y": groundY -10},
                { "type": "spike", "x": 3500, "y": groundY -10},

                { "type": "bush", "x": 500, "y": groundY -10},
                { "type": "bush", "x": 1700, "y": groundY -10},
                { "type": "bush", "x": 1900, "y": groundY -10},
               
                { "type": "enemy", "x": 400, "y": groundY -40,},
                { "type": "enemy", "x": 600, "y": groundY -60 },
                { "type": "enemy", "x": 840, "y": groundY -20 },
                { "type": "enemy", "x": 1234, "y": groundY -50 },

                { "type": "enemy2", "x": 2100, "y": groundY -15},
                { "type": "enemy2", "x": 1000, "y": groundY -15},

                { "type": "reward", "x": 1800, "y": groundY -140},

                //level 2
                { "type": "spike", "x": 3510, "y": groundY -10},
                { "type": "spike", "x": 4000, "y": groundY -10},
                { "type": "spike", "x": 4500, "y": groundY -10},
                { "type": "spike", "x": 2000, "y": groundY -15},

                { "type": "bush", "x": 4600, "y": groundY -10},
                { "type": "bush", "x": 4700, "y": groundY -10},
                { "type": "bush", "x": 4800, "y": groundY -10},
                { "type": "bush", "x": 4900, "y": groundY -10},
               
                { "type": "enemy", "x": 3000, "y": groundY -40},
                { "type": "enemy", "x": 3300, "y": groundY -40},
                { "type": "enemy", "x": 3400, "y": groundY -40},

                { "type": "enemy2", "x": 3600, "y": groundY -15},
                { "type": "enemy2", "x": 4300, "y": groundY -15},
                { "type": "enemy2", "x": 4650, "y": groundY -15},

                
                { "type": "reward", "x": 4500, "y": groundY -140},
                { "type": "reward", "x": 5000, "y": groundY -140},
            ]
        };
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(false);

        // TODO 6 and on go here
        // BEGIN EDITING YOUR CODE HERE
        
        
        function createSawBlade(x, y) {
            var hitZoneSize = 25; //assigns a value of 25 to the hit zone
            var damageFromObstacle = 10; //assings a value as the damage of the obstacle
            var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle); //creates an obstacle and stores it in the variable sawBladeHitZone
            sawBladeHitZone.x = x; //stores a value to the x position of the hit zone
            sawBladeHitZone.y = y; //stores a value to the y position of the hit zone
            game.addGameItem(sawBladeHitZone); //adds the hit zone as a game item
            var obstacleImage = draw.bitmap("img/sawblade.png"); //draws the image and stores it in the variable obstacle image
            sawBladeHitZone.addChild(obstacleImage); //adds obstacleImage as a child of sawBladeHitZone
            obstacleImage.x = -25; //assings a value to the x position of obstacle image
            obstacleImage.y = -25; //assings a value to the y position of obstacle image
        }
        
        
        function createSpike (x, y) {
            var hitZoneSize = 15; //assigns a value of 25 to the hit zone
            var damageFromObstacle = 20; //assings a value as the damage of the obstacle
            var spikeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle); //creates an obstacle and stores it in the variable sawBladeHitZone
            spikeHitZone.x = x; //stores a value to the x position of the hit zone
            spikeHitZone.y = y; //stores a value to the y position of the hit zone
            game.addGameItem(spikeHitZone); //adds the hit zone as a game item
            var obstacleImage = draw.bitmap("img/spikes.png"); //draws the image and stores it in the variable obstacle image
            spikeHitZone.addChild(obstacleImage); //adds obstacleImage as a child of sawBladeHitZone
            obstacleImage.x = -15; //assings a value to the x position of obstacle image
            obstacleImage.y = -15; //assings a value to the y position of obstacle image
        }

        function createBush (x, y) {
            var hitZoneSize = 15; //assigns a value of 15 to the hit zone
            var damageFromObstacle = 10; //assings a value as the damage of the obstacle
            var bushHitZone = game.createObstacle(hitZoneSize, damageFromObstacle); //creates an obstacle and stores it in the variable bushHitZone
            bushHitZone.x = x; //stores a value to the x position of the hit zone
            bushHitZone.y = y; //stores a value to the y position of the hit zone
            game.addGameItem(bushHitZone); //adds the hit zone as a game item
            var obstacleImage = draw.bitmap("img/berryBush.png"); //draws the image and stores it in the variable obstacle image
            bushHitZone.addChild(obstacleImage); //adds obstacleImage as a child of bushHitZone
            obstacleImage.x = -15; //assings a value to the x position of obstacle image
            obstacleImage.y = -15; //assings a value to the y position of obstacle image
        }

        
        
     

        function createEnemny (x, y,) {

            var enemy = game.createGameItem("enemy", 25,);
            var gameItem = draw.bitmap('img/jungle-bat.png'); //draws the image and stores it in the variable gameItem
            gameItem.x = -10; // stores a value to the x position gameItem 
            gameItem.y = -10; // stores a value to the y position gameItem 
            enemy.addChild(gameItem); //adds gameItem as a child of enemy.

            enemy.x = x; //assings a value to the x position of enemy
            enemy.y = y; //assings a value to the y position of enemy
            enemy.velocityX = -2; //assings a value to the velocity position of enemy

            game.addGameItem(enemy);  // adds enemy as a child of gameItem

            // on enemy collision health goes down by 10 and shrinks away
            enemy.onPlayerCollision = function () {
                game.changeIntegrity(-19)
                enemy.shrink();
            };

            // on projectile collision game score increases by 200 and enemy shrinks
            enemy.onProjectileCollision = function () {
                game.increaseScore(200);
                enemy.shrink();
            };

        }


        function createEnemny2 (x, y,) {

            var enemy2 = game.createGameItem("enemy2", 25,);
            var gameItem = draw.bitmap('img/slime-blue.png'); //draws the image and stores it in the variable gameItem
            gameItem.x = -15; // stores a value to the x position gameItem
            gameItem.y = -5; // stores a value to the y position gameItem
            enemy2.addChild(gameItem); // adds gameItem as a child of enemy2

            enemy2.x = x; //assings a value to the x position of enemy
            enemy2.y = y; //assings a value to the y position of enemy
            enemy2.velocityX = -2; //assings a value to the velocity position of enemy

            game.addGameItem(enemy2); // adds enemy as a child of gameItem

            // on enemy collision health goes down by 25 and shrinks away
            enemy2.onPlayerCollision = function () {
                game.changeIntegrity(-25)
                enemy2.shrink();
            };

            // on projectile collision game score increases by 300 and enemy shrinks
            enemy2.onProjectileCollision = function () {
                game.increaseScore(300);
                enemy2.shrink();
            };

        }
       


        function createReward (x, y) {
            var reward = game.createGameItem("reward", 25); 
            var gameItem = draw.bitmap("img/ruby.png"); //draws the image and stores it in the variable gameItem
            gameItem.x = -10; // stores a value to the x position gameItem
            gameItem.y = -20; // stores a value to the y position gameItem
            reward.addChild(gameItem); // adds gameItem as a child of reward
            reward.x = x; //assings a value to the x position of reward
            reward.y = y; //assings a value to the y position of reward
            game.addGameItem(reward); // adds reward as a child of gameItem
            reward.velocityX = -2; //assings a value to the velocity position of reward

            // on enemy collision score goes up by 500 and fades out
            reward.onPlayerCollision = function () {
                game.increaseScore(500);
                reward.fadeOut();
            };

        }
        
        //iterates over the array levelData.gameItems
        for ( var i = 0; i < levelData.gameItems.length; i++) {
            var gameItem = levelData.gameItems[i];


            if(gameItem.type === 'sawblade') {
                createSawBlade(gameItem.x, gameItem.y);
            }

            if(gameItem.type === 'reward') {
                createReward(gameItem.x, gameItem.y);
            }

            if(gameItem.type === 'enemy') {
                createEnemny(gameItem.x, gameItem.y);
            }

            if(gameItem.type === 'enemy2') {
                createEnemny2(gameItem.x, gameItem.y);
            }


            if(gameItem.type === 'spike') {
                createSpike(gameItem.x, gameItem.y);
            }

            if(gameItem.type === 'bush') {
                createBush(gameItem.x, gameItem.y);
            }

        }
        
       
        // DO NOT EDIT CODE BELOW HERE
    }
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}
