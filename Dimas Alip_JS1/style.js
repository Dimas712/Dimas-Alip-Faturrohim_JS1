
/*========================= If ==========================*/
let gender;
gender = 'L';

if(gender === 'L'){
    console.log("Saya adalah seorang Laki-laki");
}

/*====================== If Else =======================*/
let jeniskelamin;
jeniskelamin= 'P';
if(jeniskelamin === 'P'){
console.log("Saya adalah laki-laki");
}else{
console.log("Saya adalah perempuan");
}

/*====================== Nested If ======================*/
let username, password;
username = "Admin";
password = "12345";

const Success = true;
const Failed = false;

if(username === "Admin"){
    if(password === "kjkhnefw"){
        console.log(Success);
    }else{
        console.log(Failed);
    }
}else if(password === "12345"){
    console.log(Failed);
}else{
    console.log(Failed);
}

/*===================== Switch Case =======================*/
let nilai = 'A';
switch(nilai){
    case 'A':
        console.log("sangat bagus");
        break;
    case 'B':
        console.log("bagus");
        break;
    case 'C':
        console.log("cukup");
        break;
    case 'D':
        console.log("sangat cukup");
        break;
    default:
        console.log("tidak ada nilai");
        break;
}


/*==================== For Statement =======================*/
const n = 6;
for (let i = 1; i <= n; i++) {
    document.write("aku sayang kamu");
}

/*========================= While ===========================*/
let i = 50;
while(i > 0){
    console.log(i + " * 5 = " + i*5);
    i = i -5;
    }

/*======================== Do While ==========================*/
let arr = ['jan', 'feb', 'mar', 'apr', 'may'], x = 0;
//
do{
    console.log(arr[x]);
	x++;
}while(arr.includes('dec'));
// output: jan

/*====================== Build Function =======================*/
function panggil(){
    console.log("Selamat pagi");
    console.log("Selamat sore");
    console.log("Selamat Malam");
    } panggil();

/*====================== Paramater Function ====================*/
function sum(number1, number2){
    let results = number1 + number2;
    return results;
    }
    console.log(sum(5,5));

/*====================== Return Function =======================*/
function menyapa(){
    return "Selamat pagi sayang";
    }
let salam = menyapa();
    console.log(salam);
    console.log(menyapa());