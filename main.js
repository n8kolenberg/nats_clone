
new Vue({
	el: '#nats',

	data: {
		message: 'NATS AdOps Exercise',
		nats: '',
		finalNatsArray: [],
		numberOfLines: 4,
		numberOfChars: 5,
		numberOfIterations: 5,
	},

	computed: {

	},

	methods: {

		checkInputNumbs() {
			if(this.numberOfChars > 15 && this.numberOfIterations > 12) {
				 this.numberOfChars = 5;
				 this.numberOfIterations = 5;
				 return false;
			} else if (this.numberOfChars < 15 && this.numberOfIterations > 12) {
				 this.numberOfChars = 4;
				 this.numberOfIterations = 12;
				 return false;

			} else if (this.numberOfChars > 15 && this.numberOfIterations < 12) {
				 this.numberOfChars = 15;
				 this.numberOfIterations = 4;
				 return false;
			}
		},

		getNats() {
			this.checkInputNumbs();
			this.finalNatsArray = [];

			for(var i=0; i < this.numberOfLines; i++) {
				var arrayOfNatsChars = [];
				var tempNatsArray = [];

				var text= "";
				var answers= "";
				var possibleChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

				for(var j=0; j<this.numberOfChars; j++) {
					text += possibleChars.charAt(Math.floor(Math.random() * possibleChars.length));
				}

			
				//Pushing main nats to tempNatsArray twice as the correct options
				tempNatsArray.push(text, text);

				//Splitting nats into array so we can shuffle them
				arrayOfNatsChars = text.split('');

				//Depending on how many incorrect shuffles, we deduct 2 correct ones and push
				//the rest to the tempNatsArray
				for (var k=0; k<this.numberOfIterations-2; k++) {
					tempNatsArray.push(this.shuffleArray(arrayOfNatsChars).join(''));
				}

				//Adding the initial Answers to show options in Front End
				for (var l=0; l<this.numberOfIterations; l++) {
					answers += possibleChars.charAt(l);
				}
																 
				var shuffledNatsArray = this.shuffleArray(tempNatsArray);

				//Shuffle the tempNatsArray and push to finalNatsArray
				this.finalNatsArray.push(shuffledNatsArray);
				
			}
			this.finalNatsArray.unshift(answers);
		},



		shuffleArray(array) {
			var currentIndex = array.length, tempValue, randomIndex;

			//While there remain elements to shuffle...
			while(0 != currentIndex) {

				//Pick a remaining element...
				randomIndex = Math.floor(Math.random() * currentIndex);
				currentIndex -= 1;

				//And swap it with the current element..
				tempValue = array[currentIndex];
				array[currentIndex] = array[randomIndex];
				array[randomIndex] = tempValue;	

			}

			return array;

		},


	}

});

