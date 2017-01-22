Vue.Component('my-natsExcercise', {
	template: `




	`



});




new Vue({
	el: '#nats',

	data: {
		message: 'NATS AdOps test',
		nats: '',
		arrayOfNatsChars: [],
		finalNatsArray: [],
		numberOfNats: 1,
	},

	methods: {

		getNats() {
			this.arrayOfNatsChars = [];
			this.finalNatsArray = [];

			var text= "";
			var possibleChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

			for(var i=0; i<5; i++) {
				text += possibleChars.charAt(Math.floor(Math.random() * possibleChars.length));
			}

			//Assign Nats to nats data
			this.nats = text;
			//Pushing main nats to finalNatsArray twice as the correct options
			this.finalNatsArray.push(this.nats, this.nats);

			//Splitting nats into array so we can shuffle them
			this.arrayOfNatsChars = this.nats.split('');

			//Adding nats shuffled 3 times to finalNatsArray as the incorrect options
			this.finalNatsArray.push(this.shuffleArray(this.arrayOfNatsChars).join(''),
															 this.shuffleArray(this.arrayOfNatsChars).join(''),
															 this.shuffleArray(this.arrayOfNatsChars).join(''));
			//Shuffle the finalNatsArray
			this.natsIt();
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
	

		natsIt() {
			//Shuffles the finalNatsArray
			this.finalNatsArray = this.shuffleArray(this.finalNatsArray);

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