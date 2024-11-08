
let hewan = ["Kucing", "anjing", "burung", "ikan", "Kelinci"];
console.log("Array:", hewan);

console.log("Hewan Pertama:", hewan[0]);
console.log("Hewan Terakhir:", hewan[hewan.length - 1]);

let angka = ['10', '20', '30', '40', ]
console.log("Array:", angka);

angka.pop('10');
console.log("Array setelah penghapusan:", angka);

let warna = ['kuning', 'merah', 'kuning', 'hijau']
console.log("Array;", warna);

warna.push('ungu');
console.log("Array setelah penambahan:", warna);
for (let i = 1; i <= 10; i++) {
    console.log("Angka:", i);
}
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];



const total = angka.reduce((curr) => +curr, 50);
console.log("jumblah", total);

console.log("Angka Genap:");
number.forEach(number => {
    if (number % 2 === 0) {
        console.log(number);
    }
});

console.log("Angka Ganjil:");
number.forEach(number => {
    if (number % 2 !== 0) {
        console.log(number);
    }
});