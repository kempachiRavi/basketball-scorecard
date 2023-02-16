let countEl = document.getElementById("count-el");
let countGt = document.getElementById("count-guest")
// console.log(countGt);
// console.log(countEl)
let count = 0;

function addPlusOne(){
    count = count + 1
    countEl.innerText = count
    
    
}

function addPlusTwo(){
    count += 2
    countEl.innerText = count
    
}

function addPlusThree() {
    count +=3
    countEl.innerText = count 

}

function incOne() {
    count += 1
    countGt.innerText = count
}

function incTwo() {
    count += 2
    countGt.innerText = count
}

function incThree() {
    count += 3
    countGt.innerText = count
}