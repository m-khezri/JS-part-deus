const age = 99;

if(age <= 21){
    console.log("You are ok");
} else if (age > 75){
    console.log('Its nap time');
} else {
    console.log('Partyyyyy!');
}

if (age >= 20){
    console.log('call an uber');
}


const favoriteColor = 'blue';
const favoriteAnimal = 'bear';

if (favoriteAnimal === 'bear' && favoriteColor ==='blue'){
    console.log('Welcome to the club');
} else if (favoriteAnimal === 'cat' || favoriteColor === 'red'){
    console.log('$500 to join the club');
}else {
    console.log('Go away!');
}


const hiDiv = document.getElementById('hi');
console.log(hiDiv);

const pie ='peach';
console.log('pie length: ', pie.length);
console.log('#3', pie.charAt(2)); //a
console.log('indexof cat', pie.indexOf('cat')); //-1
console.log('indexof cat', pie.indexOf('pea')); //-1

const quote = 'winter in coming';
const newqoute = qoute.replace(/is/g, "ain't");
console.log('newqoute', newoute);