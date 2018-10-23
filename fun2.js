function doHomework(subject) {
	return new Promise((resolve, reject) => {
		alert(`Starting my ${subject} homework.`);
		return resolve()
	})
}

function alertFinished(){
 return new Promise((resolve, reject) => {
		conosle.log('Finished my homework');
		return resolve()
	})
}

doHomework.then(alertFinished)
then(() => {
	console.log("callbacks  execution finished")
})