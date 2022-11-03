import readlineSync from 'readline-sync'

const answer = () => {
	const even = readlineSync.question('Your answer: ')
	return even
}

export default answer