const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  prevGuesses: [],

  play: function() {
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum

      while(this.prevGuesses[this.prevGuesses.length - 1] !== this.secretNum) {
        this.prevGuesses.push(this.getGuess())
        if(this.prevGuesses[this.prevGuesses.length - 1] < this.secretNum) {
          alert(`Your guess is too low. Previous guesses: ${game.prevGuesses}`)
        } else if(this.prevGuesses[this.prevGuesses.length - 1] > this.secretNum) {
          alert(`Your guess is too high. Previous guesses: ${game.prevGuesses}`)
        } else if(this.prevGuesses[this.prevGuesses.length - 1] = this.secretNum) {
          alert(`Congrats! You guessed the number in ${this.prevGuesses.length}!`)
        }
      }
  },

  getGuess: function() {
    let guess
    while (!guess || guess <= this.smallestNum || guess >= this.biggestNum) {
      guess = parseInt(prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}`))
      if (isNaN(guess) || guess <= this.smallestNum || guess >= this.biggestNum) {
        alert('number is not valid')
      }
    }
    return guess
  } 
}
game.play()