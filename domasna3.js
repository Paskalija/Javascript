//PRVA VEZBA
let p = 3
let k = 5
let j = 7

p += 4;
console.log('p =', p);

k -= 2;
console.log('k =', k);

j -= 1;
console.log('j =', j);



//VTORA VEZBA
let x = 333;
let y = 555;
let z = 777;

if (x > y && x > z) {

    if (y > z) {
        console.log(x, y, z);
    }
    else {
        console.log(x, z, y);
    }

}

//TRETA VEZBA

let average = (80, 77, 88, 95, 68) / 5;

if (average < 60) {
    console.log('Grade F');
} else if (average < 70) {
    console.log('Grade D');
}
if (average < 80) {
    console.log('Grade C');
} else if (average < 90) {
    console.log('Grade B');
} else if (average < 100) {
    console.log('Grade A');
}

// CETVRTA VEZBA


let den = 'Ponedelnik';

switch (den) {
    case 'Vtornik';
        console.log('Raboten'):
        break;
    case 'Sreda';
        console.log('Raboten'):
        break;
    case 'Cetvrtok';
        console.log('Raboten'):
        break;
    case 'Petok';
        console.log('Raboten'):
        break;
    case 'Sabota';
        console.log('Vikend'):
        break;
    case 'Nedela';
        console.log('Vikend'):
        break;
}

//PETTA VEZBA

let month = 'January';
switch (month) {
    case 'January';
        console.log('Winter'):
        break;
    case 'February';
        console.log('Winter'):
        break;
    case 'March';
        console.log('Spring'):
        break;
    case 'April';
        console.log('Spring'):
        break;
    case 'May';
        console.log('Spring'):
        break;
    case 'June';
        console.log('Summer'):
        break;
    case 'July';
        console.log('Summer'):
        break;
    case 'August';
        console.log('Summer'):
        break;
    case 'September';
        console.log('Autumn'):
        break;
    case 'October';
        console.log('Autumn'):
        break;
    case 'November';
        console.log('Autumn'):
        break;
    case 'December';
        console.log('Winter'):
        break;
}
