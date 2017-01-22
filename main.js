
new Vue({
	el: '#nats',

	data: {
		message: 'NATS AdOps test',
		nats: '',
		// arrayOfNatsChars: [],
		// fiveNatsArray: [],
		finalNatsArray: [],
		numberOfNats: 4,
	},

	methods: {

		getNats() {
			this.finalNatsArray = [];
			for(var i=0; i < this.numberOfNats; i++) {
				var arrayOfNatsChars = [];
				var fiveNatsArray = [];

				var text= "";
				var possibleChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

				for(var j=0; j<5; j++) {
					text += possibleChars.charAt(Math.floor(Math.random() * possibleChars.length));
				}

			
				//Pushing main nats to fiveNatsArray twice as the correct options
				fiveNatsArray.push(text, text);

				//Splitting nats into array so we can shuffle them
				arrayOfNatsChars = text.split('');

				//Adding nats shuffled 3 times to fiveNatsArray as the incorrect options
				fiveNatsArray.push(this.shuffleArray(arrayOfNatsChars).join(''),
																 this.shuffleArray(arrayOfNatsChars).join(''),
																 this.shuffleArray(arrayOfNatsChars).join(''));
				var shuffledNatsArray = this.shuffleArray(fiveNatsArray);

				//Shuffle the fiveNatsArray
				this.finalNatsArray.push(shuffledNatsArray);
			}
			
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

/*

We have the NATS and duplicate it and push it to an array

We return 3 shuffled NATS and push them to the same array

Now we have to repeat it 5 times

We have to make sure that only 2 remain the same 

We have to make sure that the locations of those 2 are random

We have to make sure that the other 3 times are randomized versions of the same NATS

*/