let fruits = ['Apple', 'Banana', 'Orange'];
    let students = [
        {
            firstName: 'John',
            lastName: 'Doe',
            index: 20201
        },
        {
            firstName: 'Jane',
            lastName: 'Doe',
            index: 20202
        },
        {
            firstName: 'David',
            lastName: 'Vinoth',
            index: 20203
        },
        {
            firstName: 'Divya',
            lastName: 'Ishitha',
            index: 20204
        },
        {
            firstName: 'Thomas',
            lastName: 'Edgardson',
            index: 20205
        }
    ];

//PRVA VEZBA
for(let counter = 0; counter < fruits.length; counter++ ) {
    console.log("counter =", counter);
    console.log(`fruits[${counter}] = ` , fruits[counter]);
}


//VTORA VEZBA
for(let counter = 0; counter < students.length; counter++ ) {
    console.log('counter =', counter);
    console.log(`students[${counter}] =`, students[counter]);
}

// TRETA VEZBA

let broevi = [ 3, 5, 7, 33, 35, 37, 357, 333, 355, 377, 555, 533, 555, 577, 777 ];

for(let counter =0; counter <= 10; counter++ ) {
    console.log('counter=', counter);
    console.log(`broevi[${counter}] =`, broevi[counter]);
}

// CETVRTA VEZBA


let vezba = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

for(let counter=0; counter <= 10; counter++ ){
    console.log('counter=', counter); 
    console.log(`vezba[${counter}] =`, vezba[counter]);
}

//PETTA VEZBA


let vezba3 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

for(let counter=0; counter <= 10; counter++ ){
    console.log('counter=', counter);
    console.log(`vezba3[${counter}] =`, vezba3[counter]);
}