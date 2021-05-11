let p = 3;
let k = 5;
let j = 7;

let zbir = p + k;
console.log(zbir);

let razlika = j - k;
console.log(razlika);

let proizvod = p * k;
console.log(proizvod);

let kolicnik = k / p;
console.log(kolicnik);

let procent = j % p;
console.log(procent);

let plus = p ++;
console.log(plus);

let minus = p --;
console.log(minus);

console.log('does p equals to k', p == k);
console.log('does p equals to k', p === k);
console.log( p != k);
console.log( p !== k);
console.log( j > k);
console.log( j >= k);
console.log( p < k);
console.log( p <= k);


console.log( p < k || k > p);
console.log( j > p && j > p);
console.log( !(p > k));


console.error('Greska');
console.table(['white', 'blue', 'pink']); 
console.log(['white', 'blue', 'pink']);
let person = { name: 'Paskalija', year: 2021 };
console.dir(person);
console.dir(location);
console.log(location);
console.info('Domasna tret cas');

setTimeout(() => {
    console.timeEnd('script');
}, 5000);
