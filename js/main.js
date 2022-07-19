'use strict';
console.log('main.js');

const user1 = {
    name: 'John',
    age: 21,
    town: 'London',
    hasCar: true,
    hi: function() {
        console.log(`Sveiki as esu ${this.name} is ${this.town}`)
    }
};
user1.hi();

const marks1 = {
    marks: [4, 10, 7, 10],
    avg: function() {
        // atspausdinti ir grazinti vidurki
        // for (kintamasis of masyvas/iterable)
        let sum = 0;
        for (const nr of this.marks) {
            sum += nr;
        }
        console.log('sum ===', sum);
        const avg = sum / this.marks.length
        console.log('avg ===', avg.toFixed(2));
        return avg.toFixed(2);
    },
    max: function() {
        // atspausdinti ir grazinti didziausia skaiciu
        const marksSorted = this.marks.slice(); //padaro masyvo kopija, kad sort nepakeistu originalo
        marksSorted.sort(function(a, b){return b-a}); //rikiuoja skaitini masyva. funkcija pakeicia originala
        console.log('Max ===', marksSorted[0]);
        return marksSorted[0];
    },
    addMark: function(newMark) {
        console.log(`Adding ${newMark} to marks`)
        this.marks.push(newMark);
    },
}
const marks2 = {
    marks: [6, 8, 7, 2],
    avg: function() {
        // atspausdinti ir grazinti vidurki
        // for (kintamasis of masyvas/iterable)
        let sum = 0;
        for (const nr of this.marks) {
            sum += nr;
        }
        console.log('sum ===', sum);
        const avg = sum / this.marks.length
        console.log('avg ===', avg.toFixed(2));
        return avg.toFixed(2);
    },
    max: function() {
        // atspausdinti ir grazinti didziausia skaiciu
        const marksSorted = this.marks.slice(); //padaro masyvo kopija, kad sort nepakeistu originalo
        marksSorted.sort(function(a, b){return b-a}); //rikiuoja skaitini masyva. funkcija pakeicia originala
        console.log('Max ===', marksSorted[0]);
        return marksSorted[0];
    },
    addMark: function(newMark) {
        console.log(`Adding ${newMark} to marks`)
        this.marks.push(newMark);
    },
}
const marksArr = [marks1, marks2];

// marks1.addMark(8);
// marks1.addMark(10);
// marks1.avg();
// marks1.max();

// sukti for of cikla ir atspausdinti vidurkius

for (const x of marksArr) {
    x.avg();
}