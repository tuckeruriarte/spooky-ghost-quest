let myFont

let screen = "outside0"

let foyer = false
let attemptLeave = false
let carlook = false
let idol = false
let portrait = false
let passage = false

let woods = 0
let staircase = 0
let spooky = 0

let wordsnow = ""
let wordsx
let wordsy
let wordsx2
let wordsy2
let i = 0

let blep = false

let usertext = ""



function preload() {
	myFont = loadFont("Apple ][.ttf")
}



function setup() {
	let canvas = createCanvas(800, 600)
	canvas.parent("p5")
	frameRate(24)
}



function draw() {


	if (frameCount % 12 == 0) {

    	if (blep == false) {
    		blep = true

    	} else if (blep == true) {
      		blep = false

    	}
	}

	background(0)
		push()
			stroke(255)
			strokeWeight(2)
			noFill()

			rect(80, 60, 640, 480)
		pop()


	fill(255)
	textFont(myFont)
	textSize(16)


print(screen)


	if (screen == "menu") {

		textAlign(CENTER, CENTER)

		typeWriter("Spooky Ghost Quest V. III\n\n\nStart", width/2, height/2)
			
			if (i == wordsnow.length && blep == true) {
			
				text("\n\n\n>       <", width/2, height/2)
			
			}
	} 
	
	if (screen != "menu") {

		if (i == wordsnow.length && blep == true) {
			
				textAlign(LEFT, BOTTOM)
				text(">", 100, 516)
			
			}
	}

	if (screen == "preintro") {

		textAlign(LEFT, TOP)

		typeWriter("You are driving through a dense\
			\nforest...  comtemplatively.\n \
			\n  This region is supposed to be just\n  Chock Full of wicked spirits.\
			\n\nGood thing you're here to bust em!\
			\n  A house on the south end of the\n  valley has a sordid history that\n  leads you to believe it's the\
			\n  source of the hauntings.\
			\n\nAlso there's a portal to hell inside, spraying ghosts all over the area\nlike a metaphysical woodchipper.\
			\n  So if you close that, that won't\n  happen anymore and it won't be so\n  haunted.\
			\n\n Press ENTER to continue.....", 100, 80, 620, 460)

	}


	if (screen == "intro") {


		textAlign(LEFT, TOP)

		typeWriter("You pull up in front of your\ndestination: an ancient manor with\nshuttered windows.\
		\n\nThe sign on the entrance says: \n\n     BEWARE OF GHOSTS!\
		\n\nBut you're a ghost hunter, so you\ndon't care that much; you've eaten\nsigns like this for breakfast.\
		\n\n  You get out of your CAR, and close\n  the door.  \
		\n\nYou have nothing but your razor wit\nand god-awful survival instinct.\
		\n\n  That's all you need to hunt ghosts\n  anyway.....\
		\n\n Press ENTER to continue.....", 100, 80, 620, 460)
	}
	


	if (screen == "outside0") {

		textAlign(LEFT, TOP)

		typeWriter("You are standing on an overgrown\ndrive surrounded by dense WOODS.\
		\n\n  There is a spooky and ancient HOUSE\n  in front of you.\
		\n\nThe ROAD to town is behind you, and\nyour CAR sits where you parked it.\
		\n  The whole scene has pretty bad\n  vibes.\n\nWhat do you do?\
		\n\n   TO PLAY:\n     Type your selection from the\
		\n     list of emphasized WORDS and\n     then press ENTER to\n     continue.....", 100, 80, 620, 460)
	}



	if (screen == "outside") {

		textAlign(LEFT, TOP)

		typeWriter("You are standing on an overgrown\ndrive surrounded by dense WOODS.\
		\n\n  There is a spooky and ancient HOUSE\n  in front of you.\
		\n\nThe ROAD to town is behind you, and\nyour CAR sits where you parked it.\
		\n  The whole scene has pretty bad\n  vibes.\n\nWhat do you do?", 100, 80, 620, 460)
	}



	if (screen == "road1") {

		textAlign(LEFT, TOP)

		typeWriter("Wait a minute! There aren't ghosts\nhere, you remember, laughing to\nyourself and looking around\nnervously.\
		\n\nYou get back in your car and lock the\ndoors, breathing out a small sigh of\nrelief.\
		\n\nThe car starts first try, and you\ncheerfully put the spooky house\nbehind you.\
		\n\nYou're pretty sure you saw a good\nmilkshake joint in town, so that's\
		\nexciting! You didn't get to stop\nearlier, but now you've got the chance.\
		\n\n\n Press ENTER to continue.....", 100, 80, 620, 460)
	}


		
	if (screen == "road1b") {

		textAlign(LEFT, TOP)

		typeWriter("You suddenly find yourself coasting\nto a stop in front of the manor.\
		\nYou look at it, annoyed.\
		\n\nIt seems like you're stuck here till you solve the problem. You sigh and get back out of your car...\
		\n Press ENTER to continue.....", 100, 80, 620, 460)
	}



	if (screen == "road2") {

		textAlign(LEFT, TOP)

		typeWriter("You try to leave again, this time\nkeeping focused on the road back\
		\nto town, but you find yourself right\nback in front of the stupid house.\
		\nYou seem to be trapped until you can\ndestroy the source of the haunting...\
		\n Press ENTER to continue.....", 100, 80, 620, 460)
	}



	if (screen == "car1") {

		textAlign(LEFT, TOP)

		typeWriter("You look through the backseat of your\ncar, hoping to find some kind of tool\
\nsomehow, or even just a flashlight.\
\n\nNo luck though. You're stuck with\njust your wits.\
		\n\nYou make a note on your phone to\nreassess your ghost-busting toolkit\nphilosophy as soon as you get out of this and turn back to the manor\
		\nhouse...\
		\n\n\n\n\n\n\n\n\n\n Press ENTER to continue.....", 100, 80, 620, 460)
	}



	if (screen == "car2") {

		textAlign(LEFT, TOP)

		typeWriter("You search through your car again,\nthoroughly, opening up the trunk and\
\nlooking under all the seats.\n\nNothing useful, but you do find a mozzarella stick on the floor.\
		\n\nYou munch on it a little as you turn\nback toward the house...\
		\n\n\n\n\n\n\n\n\n\n\n\n\n Press ENTER to conintue.....", 100, 80, 620, 460)
	}



	if (screen == "woods1") {  //format

		textAlign(LEFT, TOP)

		typeWriter("The woods are dense, and you spend several minutes trying to find a path through the trees.\
		\nYou start seeing gentle lights floating just out of the corner of your eye...\
		\n\nYou think you hear music.... \
		\n\nYou feel a strange compulsion to explore deeper...\
		\n\nYou suddenly become afraid of getting lost and return quickly to the small clearing in front of the manor.\
		\n\nNot that the manor feels any safer...\nYou glance back at the woods and consider trying again.\
		\nWhat was that music...?\
		\n\nPress ENTER to continue.....", 100, 80, 620, 460)

	}



	if (screen == "woods2") { //format

		textAlign(LEFT, TOP)

		typeWriter("Once again, the deeper into the woods you get, the louder the almost-music swells.\
		\n\nThe lights drifting in the corners of your eyes flare and get brighter... \
		you feel that someone is about to whisper something important to you....\
		Suddenly horror grips you again, and you crash through the brush until you see your car and the path up to the manor... safe...\
		\n\nYour terror quickly fades from your mind though, and you glance back longingly at the woods...\
		\n\nMaybe one more try wouldnt hurt.....\
		\n\nPress ENTER to continue.....", 100, 80, 620, 460)

	}

	if (screen == "woods3") {  //format

		textAlign(LEFT, TOP)

		typeWriter("You pass through the trees, straining your ears to hear the otherworldy music.\
		\n\nYou walk deeper, speeding up.\n  You feel a gentle hand caress your\n   back.\
		\n    A breath sounds in your ear, and\n      you feel again the sensation\n       that you are about to hear a\n         great secret...\
		\n\nYour foot meets nothing. You find yourself on the razor edge of a ravine. You try to balance, but the tender hand on your back becomes a forceful one, and you are hurled out into the void.\
		\n\nYou fall for a long, long time.....\
		\n\nTHE END", 100, 80, 620, 460)
	}



	if (screen == "foyer1") {

		textAlign(LEFT, TOP)

		typeWriter("You step up the front steps of the HOUSE and cross the dusty porch.\
		\nThe tarnished doorknob is cold under your hand as you turn and push the old door open.\
		\n\nA shiver goes up your spine and you become aware of the creeping presence of the undead.....\
		\n\nYou are in a dimly lit FOYER, once well-furnished, now fallen into disrepair.\
		\n\nThere is a STAIRCASE leading up to a darkened second floor.\
		\nThere is a door to the NORTH.\
		\nThere is also the door behind you, leading OUTSIDE.", 100, 80, 620, 460)//there is a door to the west and also one to the north
	}



	if (screen == "foyer") {  ///add in the west room, encounter w a ghost?  kiss???  Information...??

		textAlign(LEFT, TOP)

		typeWriter("You are in a dimly lit FOYER.\
		\nThere is a STAIRCASE leading up to a darkened second floor.\
		\nThere is a door to the NORTH.\
		\nThere is also the door behind you, leading OUTSIDE.", 100, 80, 620, 460) //there is a door to the west and also one to the north
	}



	if (screen == "staircase1") {

		textAlign(LEFT, TOP)

		typeWriter("You go up the stairs. At the top is an unfurnished room painted over bone white, \
		\nexcept for a big arcane CIRCLE scrawled in stark black on the far wall.\
		\n\nThis must be the hell portal! You did it!\
		\n\nCongratulating yourself, you walk over to the circle and try to smudge it out with your shoe.\
		\n\nNothing happens.\
		\n\nSeveral minutes of trying later, you determine that the only way to destroy\
		this circle is to get it kicking and then dispel the magic powering it.\
		cursing, you go back downstairs.\
		\n\n\n\n\n\nPress ENTER to continue.....", 100, 80, 620, 460)
	}

	if (screen == "staircase2a") {

		textAlign(LEFT, TOP)

		typeWriter("You go up the stairs.\
		\nYou see a room with no furnishings.\
		\nThe floor walls and ceiling are all white, except for an arcane CIRCLE scrawled in stark black on the far wall.\
		\nYour eyes can't seem to focus on the symbols, and the sensation makes you nauseous.\
		\nAs you examine the bare white walls and floor, you hear a gentle TAP on the floor behind you...\
		\nPress ENTER to continue...", 100, 80, 620, 460)
	}

	if (screen == "staircase2b") {

		textAlign(LEFT, TOP)

		typeWriter("You turn around but don't immediately see the source of the noise....\
		You glance at the floor as you hear a second TAP and notice two small dark dots, quickly joined by a third with another TAP.\
		You glance at the ceiling and notice rivulets of thick, dark liquid soaking through the cracks in the white paint.\
		Quickly a fourth and fifth drop hit the floor, and then they become incountable,\
		the liquid beginning to soak through the walls as well, rivulets of liquid forming puddles of deep red on the floor.\
		The smell of iron fills the air as you realize that the liquid is BLOOD.\
		Press ENTER to continue...", 100, 80, 620, 460)

		}

	if (screen == "staircase2c") {

		textAlign(LEFT, TOP)

		typeWriter("You move to leave, but the DOOR slams shut, trapping you and the blood in the room.\
		The walls are completely soaked crimson, the thick scent cloying at your lungs.\
		The blood begins to quickly rise.\
		You have to splash through it to get to the door.\
		You struggle to turn the handle but it refuses to open and you start to panic as blood drips down onto your shoulders and head.\
		The handle becomes slippery, and you begin to fear you will die in this room. You sense a bright LIGHT behind you.\
		Press ENTER to continue...", 100, 80, 620, 460)

	}

	if (screen == "finale") { //finish finale

		textAlign(LEFT, TOP)

		typeWriter("You turn to face the source of the light, wiping thick blood out of your eyes.\
		The circle on the wall has ignited, swirling and radiant, and you can sense malevolent energy radiating off of it.\
		You're pretty sure the source of the evil living in this house is based in this CIRCLE.\
		You think for a second, and then just Punch It with your GHOST BUSTING FISTS!!!\
		The circle explodes. You sense the dissipation of psychic energy. A peaceful aspect comes over the region.\
		You busted all the ghosts. You are happy. THE END", 100, 80, 620, 480)

	}



	if (screen == "gallery") { //add in the option to go back to the foyer.  //also maybe add in the table???

		textAlign(LEFT, TOP)

		typeWriter("You are in a long rectangular room.\
		\n\nAged PORTRAITS of dismal-looking aristocrats line the walls, and you get the unsettling impression that they are watching you.\
		\n\nThe west wall is taken up by a large MURAL depicting a monster rising from a pit of fire.\
		Its many eyes seem to flicker. Must be a trick of the light....", 100, 80, 620, 480)

	}



	if (screen == "gallery2") {

		textAlign(LEFT, TOP)

		typeWriter("You are in a long rectangular room.\
			\n\nAged PORTRAITS of dismal-looking aristocrats line the walls, and you get the unsettling impression that they are watching you.\
			\nOne of these rests on the floor. In its place on the wall is a hollow containing an iron LEVER.\
			\n\nThe west wall is taken up by a large MURAL depicting a monster rising from a pit of fire.\
			Its many eyes seem to flicker. Must be a trick of the light....", 100, 80, 620, 480)

	}




	if (screen == "gallery3") {

		textAlign(LEFT, TOP)

		typeWriter("You are in a long rectangular room.\
			\n\nAged PORTRAITS of dismal-looking aristocrats line the walls, and you get the unsettling impression that they are watching you.\
			\nOne of these rests on the floor. In its place on the wall is a hollow containing an iron LEVER.  It is pulled.\
			\n\nThe mural that used to fill the west wall is gone, revealing a rough-hewn PASSAGE, leading into a dark room.\
			", 100, 80, 620, 480)

	}



	if (screen == "portraits") {

		textAlign(LEFT, TOP)

		typeWriter("You inspect the dark paintings on the walls. They're sort of unpleasant.\
			\nYou notice one of a bitter young man is hanging slightly crooked,\
			and upon closer inspection you find scuff marks on the wall nearby.\
			\nIt seems this one was moved frequently in the past.\
			Lifting it carefully from its place, you reveal a hidden alcove with a rusted iron LEVER set in the stone.\
			\n\n\nYou have no idea what it does...\
			\n\nPress ENTER to continue.....", 100, 80, 620, 480)

	}

	if (screen == "portraits2") {

		textAlign(LEFT, TOP)

		typeWriter("You inspect the dark paintings on the walls.\
			\nThe bitter young man smirks up at you from the ground.\
			\nHe unsettles you...\
			\n\n\n\n\nPress ENTER to continue.....", 100, 80, 620, 480)

	}

	if (screen == "mural1") {

		textAlign(LEFT, TOP)

		typeWriter("The creature depicted in the mural has too many eyes and too many teeth,\
			and looking at it for too long makes your stomach curdle.\
			\n\nYou notice that the edges of the mural look strange, almost disconnected...\
			\n\nCould this wall.... move?\
			\n\n\n\n\nPress ENTER to continue.....", 100, 80, 620, 480)

	}


	if (screen == "mural2") {

		textAlign(LEFT, TOP)

		typeWriter("The mural that used to fill the west wall is gone, revealing a rough-hewn PASSAGE, leading into a dark room.\
			\n\n\n\n\n\n\n\nPress ENTER to continue.....", 100, 80, 620, 480)
		
	}

	if (screen == "lever") {

		textAlign(LEFT, TOP)

		typeWriter("You grab the iron lever, steeling your nerves before pulling it with effort.\
		\n\nIt slams down with a hollow \n\n        *CLANG*.\
		\n\n\n\nThe walls of the small gallery rumble as the mural of the beast rises into the ceiling,\
		revealing a dark PASSAGE into another room to the west...\
		\n\n\n\n\nPress ENTER to continue.....", 100, 80, 620, 480)

	}

	if (screen == "passage1") {
		
		textAlign(LEFT, TOP)

		typeWriter("As soon as you cross the threshold of the dark room, it bursts to light with cold blue fire.\
		\n\nBy this eerie other-light, you can see an altar made of stacked bones upon which rests\
		the skull of a goat-like animal and a small knife.\
		\n\nAs you lean closer to investigate, the eyes of the goat flare with white fire that consumes your vision,\
		and you hear horrible dead laughter and you stumble back...", 100, 80, 620, 480)
	}

	if (screen == "passage2") {

		textAlign(LEFT, TOP)

		typeWriter("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nPress ENTER to continue.....", 100, 80, 620, 480)

	}

	if (screen == "passage3") {

		textAlign(LEFT, TOP)

		typeWriter("When you come back to consciousness, the fire in the skull's eyes still burns,\
		but far more dimly, and there is a smear of dark crimson on its forehead.\
		\n\nYou look down at your hand and see a ragged gash, still dripping blood.\
		\n\nThe knife is gone.\n\nYou leave the room...", 100, 80, 620, 480)
	}



typing()
push()
	textAlign(LEFT, BASELINE)
	text(usertext, 116, 514, 620)
pop()
}

function keyPressed() {

	if (keyCode === 90) {
		i = wordsnow.length
	}


	if (keyCode === (ENTER)) {
		
		if (screen == "menu") {
			screen = "preintro"
			i = 0
		


		} else if (screen == "preintro") {
			screen = "intro"
			i = 0



		} else if (screen == "intro") {
			screen = "outside0"
			i = 0 




		} else if (screen == "outside" || screen == "outside0") {
			
			if (usertext == "ROAD" || usertext == "road" || usertext == "Road") {
				if (attemptLeave == false) {
					screen = "road1"
					attemptLeave = true
					i = 0
				} else if (attemptLeave == true) {
					screen = "road2"
					i = 0
				}


			} else if (usertext == "HOUSE" || usertext == "house" || usertext == "House") {
				if (foyer == false) {
					screen = "foyer1"
					foyer = true
					i = 0
				} else if (foyer == true) {
					screen = "foyer"
					i = 0
				}


			} else if (usertext == "WOODS" || usertext == "woods" || usertext == "Woods") {
				if (woods == 0) {
					screen = "woods1"
					woods = 1
					i = 0
				} else if (woods == 1) {
					screen = "woods2"
					woods = 2
					i = 0
				} else if (woods == 2) {
					screen = "woods3"
					woods = 3
					i = 0
				}
			} else if (usertext == "CAR" || usertext == "car" || usertext == "Car") {
				if (carlook == false) {
					screen = "car1"
					carlook = true
					i = 0
				} else {
					screen = "car2"
					i = 0
				}
			}





		} else if (screen == "woods1" || screen == "woods2" || screen == "road1b" || screen == "road2" || screen == "car1" || screen == "car2"){
			screen = "outside"
			i = 0



		} else if (screen == "woods3") {  //death by woods
			screen = "menu"
			i = 0



		} else if (screen == "road1") {
			screen = "road1b"
			i = 0

		






		} else if (screen == "foyer1" || screen == "foyer") {

			if (usertext == "OUTSIDE" || usertext == "outside" || usertext == "Outside") {
				screen = "outside"
				i = 0

			} else if (usertext == "NORTH" || usertext == "north" || usertext == "North") {
				screen = "gallery"
				i = 0
			
			// } else if (usertext == "WEST" || usertext == "west" || usertext == "West") {
			// 	screen = "parlor"
			// 	i = 0
			
			} else if (usertext == "STAIRCASE" || usertext == "staircase" || usertext == "Staircase") {

				if (idol == false) {
					screen = "staircase1"
					i = 0

				} else if (idol == true) {
					screen = "staircase2"
					i = 0
				}

			}






		} else if (screen == "gallery" || screen == "gallery2" || screen == "gallery3") {

			if (usertext == "PORTRAITS" || usertext == "portraits" || usertext == "Portraits") {
				if (portrait == false) {
					portrait = true
					screen = "portraits"
					i = 0
				} else if (portrait == true) {
					screen = "portraits2"
					i = 0
				}
			} else if (usertext == "MURAL" || usertext == "mural" || usertext == "Mural") {
				if (passage == false) {
					screen = "mural1"
					i = 0
				} else if (passage == true) {
					screen = "mural2"
					i = 0
				}
			} else if (usertext == "LEVER" || usertext == "lever" || usertext == "Lever") {

				if (portrait == false) {
					usertext = ""

				} else if (portrait == true) {
					screen = "lever"
					i = 0
					passage = true
				}
			} else if (usertext == "PASSAGE" || usertext == "passage" || usertext == "Passage") {

				if (passage = true) {
					screen = "passage1"
					i = 0
				} else {
					usertext = ""
				}
			} else if (usertext == "FOYER" || usertext == "foyer" || usertext == "Foyer") {
				screen = "foyer"
				i = 0
			}



		} else if (screen == "portraits" || screen == "portraits2" || screen == "mural1" || screen == "mural2" || screen == "lever") {

			if (portrait == true) {
				if (passage == false) {
					screen = "gallery2"
					i = 0
				} else if (passage == true) {
					screen = "gallery3"
					i = 0
				}

			} else if (portrait == false) {
				screen = "gallery"
				i = 0
			}

		} else if (screen == "passage1" || screen == "passage2") {
			if (spooky < 2) {
				screen = "passage2"
				spooky += 1
				i = 0
			} else {
				screen = "passage3"
				i = 0
			}

		} else if (screen == "passage3") {
			screen = "gallery3"
			i = 0
		
		



		




		} else if (screen == "staircase1") {
			screen = "foyer"
			i = 0



		} else if (screen == "staircase2") {

			if (staircase < 2) {
				screen = "staircase2"
				i = 0
				staircase += 1

			} else if (staircase == 2) {
				screen = "finale"
				i = 0
			}



		} else if (screen == "finale") {

			screen = "resolution"
			i = 0


		} else if (screen == "resolution") {

			screen = "intro"
			i = 0

		}

			


		usertext = ""

	} else if (keyCode === BACKSPACE || keyCode === SHIFT || keyCode === CONTROL || keyCode === 20 || keyCode === UP_ARROW || keyCode === LEFT_ARROW || keyCode === RIGHT_ARROW || keyCode === DOWN_ARROW || keyCode === ALT) {

		usertext = usertext

	} else {
		usertext += key
	}
}
		



function typeWriter(words, x, y, x2, y2) {
	
	//i = 0
	wordsnow = words
	wordsx = x
	wordsy = y
	wordsx2 = x2
	wordsy2 = y2
	
}		

function typing() {

	text(wordsnow.substring(0, i), wordsx, wordsy, wordsx2, wordsy2)

	if (i < wordsnow.length) {
		i += 1
	}
}
		
function mouseClicked() {
		print(int(mouseX), int((mouseY)));
	}


function windowResized() {
	resizeCanvas(windowWidth, windowHeight)
}
