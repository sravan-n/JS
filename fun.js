function doHomework(subject, tejufunc) {
  console.log(`Starting my ` + subject + ` homework.`);
  tejufunc();
}

function alertFinished(){
  console.log('Finished my homework');
}

function alertFinished2(){
  console.log('Finished my homework');
}

doHomework('math', alertFinished);

doHomework('math', alertFinished2);
