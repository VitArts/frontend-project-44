import answer from '../exp/answer.js'

// Основная функция
const brainCalk = () => {

	for (let i = 1; i <= 3; i++) {
		let number = Math.floor(Math.random() * 100)
		let number2 = Math.floor(Math.random() * 100)

		if (i === 1) {
			console.log('Question: '+ number + ' + ' + number2)

			let even = answer()
			let result = number + number2

			if (Number(even) === result) {
				console.log('Correct!')
			} else {
				console.log(`'${even}' is wrong answer ;(. Correct answer was '${result}'.`)
				break
			}
		}

		if (i === 2) {
			console.log('Question: '+ number + ' - ' + number2)

			let even = answer()
			let result = number - number2

			if (Number(even) === result) {
				console.log('Correct!')
			} else {
				console.log(`'${even}' is wrong answer ;(. Correct answer was '${result}'.`)
				break
			}
		}

		if (i === 3) {
			console.log('Question: '+ number + ' * ' + number2)

			let even = answer()
			let result = number * number2

			if (Number(even) === result) {
				console.log('Correct!')
				console.log('Congratulations!')
			} else {
				console.log(`'${even}' is wrong answer ;(. Correct answer was '${result}'.`)
			}
		}
	}
	
}


export default brainCalk