let br = '<br/>';

//1 
/* for(a=1; a <60; a++) {
    document.write(a);
}

for(b=35; b > 8;  b--) {
    alert(b);
}
 */
//2

/* let c = 89;

while(c > 10) {
    document.write(c);
    document.write(br);
    c--;
} */

/* //3
let sum = 0;

for(a = 0; a < 101; a++) {
   sum = sum + a;
}

console.log(sum);

//4 */

/* let e = 5;

for (let i = 1;  i <= e; i++) {
    sum = 0;

   for(let j = 1; j <= i; j++){
    sum = sum + j;
   }
   console.log('Sum' + i + '=' + sum);
} */

//5
/* 
let a = 56;

for (i = 8 ; i <= 56; i++) {
    
    if (i % 2 == 0) {
    console.log(i);
    }
} 


let  a = 8;
 
while (a <= 56) {
    if (a % 2 == 0) {
        console.log (a);
    }
    a++;
} */

//6
/*//let result = '';

for (let i = 2; i <= 10; i++) {
        for (let j = 1; j <=10; j++ ) {
			document.write(i + ' * ' + j + ' = ' + i * j);
			document.write(br);
            //result = result + i + ' * ' + j + ' = ' + i * j + br>';
        }
		document.write(br);
        //result = result + br;
} 

//document.write(result);*/


//7 
/*
let n = 1000,
	num = 0;

while (n >= 50){
	n = n/2;
    num ++;
} 
document.write(n + br);
document.write(num);*/

//8  

/* let a;
let sum = 0;
let count = 0;

while (a != "0" && a != '') {
	a = +prompt(' Введите число');
	if(isNaN(a)){
		alert('ERROR!!!!');
	} else{
		sum = sum + a;
		count++;
	}
} 

document.write('Суммв введенных чисел: ' + sum + ';');
document.write(br);
document.write('Среднее арифметическое введенных чисел: ' + sum/(count-1) + ';'); */

//9
/* let str = '4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57';
let arr = str.split(' ');
let min = arr[0];
let max = arr[0];

for (i = 0; i < arr.length; i++ ) {
    if (arr[i] > max) {
        max = arr[i];
    }

    if (arr[i] < min) {
        min = arr[i];
    }
}

document.write('Max value:' + max);
document.write(br);
document.write('Min walue:' + min); */


 //10
let number = prompt('Введите число?'),
    count = 0,
    sum = 0,
    revertNumber = '';

for(let i = 0;i < number.length; i++){

    document.write('Chislo: ' + number[i]);
    document.write(br);
    count++;
    sum = sum + +number[i];
}

for(let j = number.length-1;j >= 0;j--){
    revertNumber = revertNumber + number[j];
}

document.write(br);
document.write('Количество чисел в числе: '+ count);
document.write(br);
document.write('Сумма чисел: '+ sum);
document.write(br);
document.write('Число (наоборот): '+ revertNumber); 