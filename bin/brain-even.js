import brainEven from '../src/games/even.js' 
import answer from '../src/exp/answer.js'
import welcome from '../src/exp/cli.js'

console.log('Welcome to the Brain Games!')
console.log('Hello ' + welcome() + '!')
console.log('Answer "yes" if the number is even, otherwise answer "no".')

answer
brainEven()
