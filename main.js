
new Vue({
	el: '#nats',

	data: {
		message: 'NATS AdOps test',
		nats: '',
		finalNatsArray: [],
		finalAnswerArray: [],
		numberOfLines: 4,
		numberOfChars: 5,
		numberOfIterations: 5,
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
			this.finalAnswerArray = [];

			for(var i=0; i < this.numberOfLines; i++) {
				var arrayOfNatsChars = [];
				var tempNatsArray = [];
				var tempCorrectAnswerArray = [];

				var text= "";
				var answers= [];
				var possibleChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

				for(var j=0; j<this.numberOfChars; j++) {
					text += possibleChars.charAt(Math.floor(Math.random() * possibleChars.length));
				}

				

				//Pushing objects with value of NAT value as text variable and success = true to tempNatsArray
				tempNatsArray.push(
				{
					'value': text,
					'success': true
				}, 
				{
					'value': text,
					'success': true
				});


				//Splitting text variable including NATS value into array so we can shuffle them
				arrayOfNatsChars = text.split('');

				//Depending on how many incorrect shuffles, we deduct 2 correct ones and push
				//the rest to the tempNatsArray in the form of objects with success = false
				for (var k=0; k<this.numberOfIterations-2; k++) {
					tempNatsArray.push({
						'value': this.shuffleArray(arrayOfNatsChars).join(''),
						'success': false
					});
				}


				//Shuffle the tempNatsArray and tempCorrectAnswerArray and push to finalNatsArray and finalAnswerArray														 
				var shuffledNatsArray = this.shuffleArray(tempNatsArray);
				this.finalNatsArray.push(shuffledNatsArray);


				//Adding multiple choice letters to show options in front end
				for (var l=0; l<this.numberOfIterations; l++) {
					answers.push({'value': possibleChars.charAt(l), 'success': false});
				}
			
			}
			//Adding the multiple choice of ABCDE.. etc to have it in the first row of the table
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

