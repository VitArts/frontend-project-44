import answer from '../exp/answer.js'

// Основная функция
const brainEven = () => {
	let result = 0

	for (let i = 1; i <= 3; i++) {
		let number = Math.floor(Math.random() * 100)

		console.log('Question: '+ number)

		let even = answer()

		if (number % 2 === 0 && even === 'yes') {
			console.log('Correct!')
			result += 1
		} else if (number % 2 !== 0 && even === 'no') {
			console.log('Correct!')
			result += 1
		} else if (even !== 'no' || even !== 'yes') {
			console.log('Error!')
			break;
		} else {
			console.log('Error!')
			break;
		}
	}
	
	if (result === 3) {
		console.log('Congratulations')
	}

}


export default brainEven