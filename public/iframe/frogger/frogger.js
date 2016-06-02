
function start_game(){
	var canvas = $("#game")[0];
	var score = 0;
	var lives = 5;
	var level = 1;
	var counter = 0;
	var wins = 0;
	var frog = {xPos: 180 , yPos: 475, dir: 'u' };

	var img = new Image();
	img.src = 'images/frogger_sprites.png';

	
	img.onload = function(){


	if(canvas.getContext){
		var ctx = canvas.getContext("2d");

		renderBackground();

		var x1 = 130;
		var x2 = 130;
		var x3 = 130;
		var x4 = 130;
		var x5 = 130;
		var y1 = 395;
		var y2 = 395;
		var y3 = 395;
		var y4 = 395;
		var y5 = 395;


		function renderBackground(){
			//fill in top half of board
			ctx.fillStyle = "rgb(19, 19, 70)";
		    ctx.fillRect (0, 0, 399, 282);
	    
	    	//fill in bottom half of board
		    ctx.fillStyle = "rgb(00, 00, 00)";
		    ctx.fillRect(0, 282, 399, 282);

			/*
			 *So I remeber what each parameter stands for. Gonna be using drawImage a lot!
			 *sx source x(Top Left) dx destination x(Top Left)
			 *ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight 
			 */

			/* Rendering the rear, red floating pads*/
			ctx.drawImage(img, x1, y1, 35, 35, 5, 80, 30, 35);
			ctx.drawImage(img, x2, y2, 35, 35, 93, 80, 30, 35);
			ctx.drawImage(img, x3, y3, 35, 35, 181, 80, 30, 35);
			ctx.drawImage(img, x4, y4, 35, 35, 269, 80, 30, 35);
			ctx.drawImage(img, x5, y5, 35, 35, 355, 80, 30, 35);


			//using number of lives to draw the frogs at the bottom
			var frogXPos = 0;
			for(var i = 0; i < lives; i++){
				ctx.drawImage(img, 10, 325, 30, 30, frogXPos, 515, 20, 20);
				frogXPos += 15;
			}

				// Grabbing both the Title Frogger and the green map ending 
				ctx.drawImage(img, 0, 0, 399, 100, -5, 5, 410, 115);

				//Text at the bottom of te canvas
				ctx.fillStyle="rgb(0, 255, 0)";
				ctx.font="30px Verdana";
				ctx.fillText("Level " + level, 150, 535);
			
				ctx.font="11px Verdana";
				ctx.fillText("Score: "+ score +"	Highscore: 0", 0, 555);

				// Put in purple strips	
				ctx.drawImage(img, 0, 120, 399, 30, 0, 283, 399, 30);
				ctx.drawImage(img, 0, 120, 399, 30, 0, 475, 399, 30);

		}//This marks the closing tag for the renderBackground function
			/**********************************BACKGROUND RENDERED*****************************************/

		var movementSpeed = 100; //Generic number look to see how changes affect game
		setInterval(updateMovingParts, movementSpeed);

		//Creating Variables for the X-positions of the moving parts
		var lrgLog1 = 400;
		var lrgLog2 = 150;
	
		var medLog1 = 310;
		var medLog2 = 150;
		var medLog3 = 0;

		var smLog1 = 300;
		var smLog2 = 150;
		var smLog3 = 0;
	
		var trtl1 = 250;
		var trtl2 = 220;
		var trtl3 = 190;
		var trtl4 = 375;
		var trtl5 = 405;
		var trtl6 = 435;
		var trtl7 = 30;
		var trtl8 = 65;
	
		var purpCar1 = 50;
		var purpCar2 = 200;
		var purpCar3 = 350;
	
		var yelCar1 = 90;
		var yelCar2 = 230;
		var yelCar3 = 355;
		
		var snake = 415;

		function updateMovingParts(){
			renderBackground();
			if(isAlive()){
				switch(level) {
    				case 1:
       					lrgLog1 = lrgLog1+10;
						lrgLog2 = lrgLog2+10;
			
						medLog1 = medLog1+5;
						medLog2 = medLog2+5;
						medLog3 = medLog3+5;
			
						smLog1 = smLog1 + 2;
						smLog2 = smLog2 + 2;
						smLog3 = smLog3 + 2;
			
						trtl1 = trtl1 - 8;
						trtl2 = trtl2 - 8;
						trtl3 = trtl3 - 8;	
						trtl4 = trtl4 - 8;
						trtl5 = trtl5 - 8;
						trtl6 = trtl6 - 8;
						trtl7 = trtl7 - 8;
						trtl8 = trtl8 - 8;	

						purpCar1 = purpCar1 - 8;
						purpCar2 = purpCar2 - 8;
						purpCar3 = purpCar3 - 8;

						yelCar1 = yelCar1 - 6;
						yelCar2 = yelCar2 - 6;
						yelCar3 = yelCar3 - 6;
       					break;
   					case 2:
       					lrgLog1 = lrgLog1+12;
						lrgLog2 = lrgLog2+12;
			
						medLog1 = medLog1+7;
						medLog2 = medLog2+7;
						medLog3 = medLog3+7;
			
						smLog1 = smLog1 + 4;
						smLog2 = smLog2 + 4;
						smLog3 = smLog3 + 4;
			
						trtl1 = trtl1 - 10;
						trtl2 = trtl2 - 10;
						trtl3 = trtl3 - 10;	
						trtl4 = trtl4 - 10;
						trtl5 = trtl5 - 10;
						trtl6 = trtl6 - 10;
						trtl7 = trtl7 - 10;
						trtl8 = trtl8 - 10;	

						purpCar1 = purpCar1 - 10;
						purpCar2 = purpCar2 - 10;
						purpCar3 = purpCar3 - 10;

						yelCar1 = yelCar1 - 8;
						yelCar2 = yelCar2 - 8;
						yelCar3 = yelCar3 - 8;
       					break;
				}

			}else{
				lives -= 1;
				var deadFrog = new Image();
				deadFrog.src = 'images/dead_frog.png';
				/*
				 * Wait for image to load before you try to do anything with it. Maybe consider loading this when the page loads
				 * and using a promise to start rendering the game once both dead.png and the frogger_sprites.png are both loaded
				 * That way there is no wait in later parts of the game
				 */
				deadFrog.onload = function(){
					ctx.drawImage(deadFrog, 0, 0, 30, 30,frog.xPos, frog.yPos, 40, 40);
					//Resetting the position of the frog back to is start position
					frog.xPos = 180;
					frog.yPos = 475;

					//Allowing the deadfrog image to be shown for a little over a second
					setTimeout(function(){
						renderBackground();
					},1250);
				}
			}
			//Handeling the case when the player runs out of lives
			if(lives == 0){	

				ctx.font="40px Verdana";
				ctx.fillText("Game Over! :(", 75, 200);
				
				ctx.font="20px Verdana";
				ctx.fillText("Final Score: " + score, 120, 250);
				ctx.fillText("Level " + level, 165, 275);
				
				ctx.font="15px Verdana";
				ctx.fillText("Click Refresh To Play Again!", 85, 400);
				return 0;
			}	

			renderMovingParts();
			/* Now that the X-Positions of the parts have been updated they need to be rerendered*/
			function renderMovingParts(){
				//draw Large Logs
				ctx.drawImage(img, 0, 165, 190, 30, lrgLog1, 185, 170, 30);
				ctx.drawImage(img, 0, 165, 190, 30, lrgLog2, 185, 170, 30);
	
				if(lrgLog1 > 399){
					lrgLog1 = -200;
				}		
			
				if(lrgLog2 > 399){
					lrgLog2 = -200;
				}

				//draw Medium Logs	
				ctx.drawImage(img, 0, 195, 210, 30, medLog1, 117, 180, 30);
				ctx.drawImage(img, 0, 195, 210, 30, medLog2, 117, 180, 30);	
				ctx.drawImage(img, 0, 195, 210, 30, medLog3, 117, 180, 30);
	
				if(medLog1 > 399){
					medLog1 = -100;
				}
			
				if(medLog2 > 399){
					medLog2 = -100;
				}
			
				if(medLog3> 399){
					medLog3 = -100;
				}

				//draw small logs
				ctx.drawImage(img, 0, 226, 100, 26, smLog1, 219, 90, 25);
				ctx.drawImage(img, 0, 226, 100, 26, smLog2, 219, 90, 25);
				ctx.drawImage(img, 0, 226, 100, 26, smLog3, 219, 90, 25);
			
				if(smLog1 > 399){
					smLog1 = -100;
				}
			
				if(smLog2 > 399){
					smLog2 = -100;
				}
			
				if(smLog3 > 399){
					smLog3 = -100;
				}

				// some turtles
				ctx.drawImage(img, 10, 395, 35, 35, trtl1, 247, 30, 35);
				ctx.drawImage(img, 10, 395, 35, 35, trtl2, 247, 30, 35);
				ctx.drawImage(img, 10, 395, 35, 35, trtl3, 247, 30, 35);
				ctx.drawImage(img, 10, 395, 35, 35, trtl4, 247, 30, 35);
				ctx.drawImage(img, 10, 395, 35, 35, trtl5, 247, 30, 35);
				ctx.drawImage(img, 10, 395, 35, 35, trtl6, 247, 30, 35);

				//higher up turtles
				ctx.drawImage(img, 10, 395, 35, 35, trtl1, 145, 30, 35);
				ctx.drawImage(img, 10, 395, 35, 35, trtl2, 145, 30, 35);
			
				ctx.drawImage(img, 10, 395, 35, 35, trtl4, 145, 30, 35);
				ctx.drawImage(img, 10, 395, 35, 35, trtl5, 145, 30, 35);
	
				ctx.drawImage(img, 10, 395, 35, 35, trtl7, 145, 30, 35);
				ctx.drawImage(img, 10, 395, 35, 35, trtl8, 145, 30, 35);


				if(trtl1 < -50){
					trtl1 = 420;
				}
		
				if(trtl2 < -50){
					trtl2 = 420;
				}
		
				if(trtl3 < -50){
					trtl3 = 420;
				}

				if(trtl4 < -50){
					trtl4 = 420;
				}
		
				if(trtl5 < -50){
					trtl5 = 420;
				}
			
				if(trtl6 < -50){
					trtl6 = 420;
				}
		
				if(trtl7 < -50){
					trtl7 = 420;
				}
		
				if(trtl8 < -50){
					trtl8 = 420;
				}

				//draw purple car car
				ctx.drawImage(img, 0, 255, 40, 35, purpCar1, 370, 40, 45);		
				ctx.drawImage(img, 0, 255, 40, 35, purpCar2, 370, 40, 45);		
				ctx.drawImage(img, 0, 255, 40, 35, purpCar3, 370, 40, 45);		
	
				if(purpCar1 < -100){
					purpCar1 = 420;
				}
			
				if(purpCar2 < -100){
					purpCar2 = 420;
				}
			
				if(purpCar3 < -100){
					purpCar3 = 420;
				}

				//draw yellow cars
			
				ctx.drawImage(img, 80, 252, 35, 35, yelCar1, 435, 40, 40);
				ctx.drawImage(img, 80, 252, 35, 35, yelCar2, 435, 40, 40);
				ctx.drawImage(img, 80, 252, 35, 35, yelCar3, 435, 40, 40);

				if(yelCar1 < -50){
					yelCar1 = 420;
				}
			
				if(yelCar2 < -50){
					yelCar2 = 420;
				}
		
				if(yelCar3 < -50){
					yelCar3 = 420;
				}

				//draw snake
				if(counter == 0 || counter == 1){
					ctx.drawImage(img, 180, 245, 40, 20, yelCar2, 283, 40, 20);
					counter += 1;
				}else if(counter == 2 || counter == 3){
					ctx.drawImage(img, 180, 275, 40, 20, yelCar2, 283, 40, 20);
					counter += 1;
				}else if(counter == 4 || counter == 5){
					ctx.drawImage(img, 180, 295, 40, 20, yelCar2, 283, 40, 20);
					counter = 0;
				}
				

				// redraw Frogger 
				switch(frog.dir){
					case 'u':
						ctx.drawImage(img, 0, 360, 35, 30, frog.xPos, frog.yPos, 25, 25);
						break;
					case 'd':
						ctx.drawImage(img, 70, 360, 35, 30, frog.xPos, frog.yPos, 25, 25);
						break;
					case 'l':
						ctx.drawImage(img, 70, 327, 35, 30, frog.xPos, frog.yPos, 25, 25);
						break;
					case 'r':
						ctx.drawImage(img, 0, 325, 35, 30, frog.xPos, frog.yPos, 25, 25);
						break;
				}

			}

		}


	}

	// control frogger listening for arrow keys
	document.addEventListener("keydown", function(event){
	
	//go up
		if(event.keyCode == 38){
			frog.dir = 'u';
			frog.yPos = frog.yPos - 30;
			if(frog.yPos == 295){
				frog.yPos = 285;
			}
			if(frog.yPos < 285){
				frog.yPos = frog.yPos - 4;
			}
			if(frog.yPos < 100){
				frog.yPos = 85;
				if(frog.xPos == 30|| frog.xPos == 0){
					frog.xPos == 20;
				}
			}
			ctx.drawImage(img, 40, 360, 30, 30, frog.xPos, frog.yPos, 25, 25);
			
			if(isAlive() == true){
				score += 10;
			}
			
			console.log(frog.yPos);
		}
		
	// go down
		if(event.keyCode == 40){
			frog.dir = 'd'
			frog.yPos = frog.yPos + 30;
			if(frog.yPos == 315){
				frog.yPos = 325;
			}
			if(frog.yPos < 285){
				frog.yPos = frog.yPos+4;
			}
			if(frog.yPos >= 470){
				frog.yPos = 475;
			}
			ctx.drawImage(img, 40, 360, 30, 30, frog.xPos, frog.yPos, 25, 25);

		}
		
	//go left
		if(event.keyCode == 37){
			frog.dir = 'l';
			frog.xPos = frog.xPos - 45;
			if(frog.xPos < 20){
				frog.xPos = 0;
			}

			ctx.drawImage(img, 40, 360, 30, 30, frog.xPos, frog.yPos, 25, 25);
		}
	
	//go right
		if(event.keyCode == 39){
			frog.dir = 'r';
			frog.xPos = frog.xPos + 45;
			if(frog.xPos > 350){
				frog.xPos = 370;
			}
			ctx.drawImage(img, 40, 360, 30, 30, frog.xPos, frog.yPos, 25, 25);
		}

		if(frog.yPos == 85){
			console.log(frog.xPos);
			if((frog.xPos >= -10 && frog.xPos<= 10) || (frog.xPos >= 80 && frog.xPos <= 100) || (frog.xPos >= 170 && frog.xPos <= 190) || (frog.xPos >= 260 && frog.xPos <= 280) || (frog.xPos >= 340 && frog.xPos <= 360)){

				score += 50;
				if(frog.xPos >= -10 && frog.xPos<= 10){
					x1 = 110;
					y1 = 360;
				}
				if(frog.xPos >= 80 && frog.xPos <= 100){
					x2 = 110;
					y2 = 360;
				}
				if(frog.xPos >= 170 && frog.xPos <= 190){
					x3 = 110;
					y3 = 360;
				}
				if(frog.xPos >= 260 && frog.xPos <= 280){
					x4 = 110;
					y4 = 360;
				}
				if(frog.xPos >= 340 && frog.xPos <= 360){
					x5 = 110;
					y5 = 360;
				}
				renderBackground();
				ctx.drawImage(img, 40, 360, 30, 30, frog.xPos, frog.yPos, 25, 25);
				wins += 1;
				if(wins == 5){
					score += 1000;
					wins = 0;
					while(level < 2){
						level += 1;
					}
					alert('Congratulations! Level up!');
					x1 = 135;
					x2 = 135;
					x3 = 135;
					x4 = 135;
					x5 = 135;
					y1 = 395;
					y2 = 395;
					y3 = 395;
					y4 = 395;
					y5 = 395;
				}
				frog.xPos = 180;
				frog.yPos = 475;
				//yay you won!
			}
		}

		event.preventDefault();

	});



		// check to see if the froggy died
	function isAlive(){
		// check for yellow cars
		if(frog.yPos == 445){
			if(frog.xPos >= yelCar1-2 && frog.xPos <= yelCar1+3){
				console.log('dead!');
				return false;
			}
			if(frog.xPos >= yelCar2-2 && frog.xPos <= yelCar2+3){
				return false;
			}
			if(frog.xPos >= yelCar3-2 && frog.xPos <= yelCar3 +3){
				return false;
			}
			else{
				return true;
			}
		}
		
		//check for purple car
		if(frog.yPos == 385){
			if(frog.xPos >= purpCar1-3 && frog.xPos <= purpCar1+3){
				return false;
			}
			if(frog.xPos >=purpCar2-3 && frog.xPos <= purpCar2+3){
				return false;
			}
			if(frog.xPos >= purpCar3-3 && frog.xPos <= purpCar3+3){
				return false;
			}
			else{
				return true;
			}
		}
		
		//medium logs
		
		if(frog.yPos == 115){
			if(frog.xPos >= medLog1-2 && frog.xPos <= medLog1+180){
				frog.xPos = medLog1+10;
				if(medLog1 > 400){
					return false;
				}
				return true;
			}

			if(frog.xPos >= medLog2-2 && frog.xPos <= medLog2+180){
				frog.xPos = medLog2+10;
				if(medLog2 > 400){
					return false;
				}
				return true;
			}
			
			if(frog.xPos >= medLog3-2 && frog.xPos <= medLog3+180){
				frog.xPos = medLog3+10;
				if(medLog3 > 400){
					return false;
				}
				return true;
			}
			
			else{
				return false;
			}
		}
		
		// small turtle pads
		
		if(frog.yPos == 149){
			if(frog.xPos >= trtl1-20 && frog.xPos<= trtl1+10 || frog.xPos > trtl2-10 && frog.xPos <= trtl2+20){
				frog.xPos = trtl2;
				if(trtl2==-40){
					return false;
				}
				return true;
			}
			
			if(frog.xPos >= trtl4-20 && frog.xPos <= trtl4+10 || frog.xPos >= trtl5-10 && frog.xPos <= trtl5+20){
				frog.xPos = trtl5;
				if(trtl5==-40){
					return false;
				}
				return true;
			}
			
			if(frog.xPos >= trtl7-20 &&frog.xPos <= trtl7+10 || frog.xPos >= trtl8-10 && frog.xPos <= trtl8+20){
				frog.xPos = trtl8;
				if(trtl8==-40){
					return false;
				}
				return true;
			}
			
			else{
				return false;
			}
		
		
		}
		
		// large logs
		if(frog.yPos == 183){
				if(frog.xPos >= lrgLog1-10 && frog.xPos <= lrgLog1+300){
				frog.xPos = lrgLog1+10;
				if(lrgLog1 > 400){
					return false;
				}
				return true;
			}

			if(frog.xPos >= lrgLog2-2 && frog.xPos <= lrgLog2+300){
				frog.xPos = lrgLog2+10;
				if(lrgLog2 > 400){
					return false;
				}
				return true;
			}
			
			else{
				return false;
			}
		}
		
		//small logs
		if(frog.yPos == 217){
			if(frog.xPos >= smLog1-2 && frog.xPos <= smLog1+150){
				frog.xPos = smLog1+10;
				if(smLog1 > 400){
					return false;
				}
				return true;
			}

			if(frog.xPos >= smLog2-2 && frog.xPos <= smLog2+150){
				frog.xPos = smLog2+10;
				if(smLog2 > 400){
					return false;
				}
				return true;
			}
			
			if(frog.xPos >= smLog3-2 && frog.xPos <= smLog3+180){
				frog.xPos = smLog3+10;
				if(smLog3 > 400){
					return false;
				}
				return true;
			}
			
			else{
				return false;
			}
		}
		
		//lower pads
		if(frog.yPos == 251){
				if(frog.xPos >= trtl1-20 && frog.xPos<= trtl1+10 || frog.xPos >= trtl2-10 && frog.xPos <= trtl2+20 || frog.xPos >= trtl3-10 && frog.xPos <= trtl3+20){
				frog.xPos = trtl2;
				if(trtl2==-40){
					return false;
				}
				return true;
			}
			
			if(frog.xPos >= trtl4-20 && frog.xPos <= trtl4+10 || frog.xPos >= trtl5-10 && frog.xPos <= trtl5+20 || frog.xPos >= trtl6-10 && frog.xPos <= trtl6+20){
				frog.xPos = trtl5;
				if(trtl5==-40){
					return false;
				}
				return true;
			}

			
			else{
				return false;
			}
		
		}
		
		//check for the snake
		if(frog.yPos == 285){
			if(frog.xPos >= yelCar2-2 && frog.xPos <= yelCar2+3){
				return false;
			}
			else{
				return true;
			}
		}
		
		else{
			return true;
		}
	}
}

}