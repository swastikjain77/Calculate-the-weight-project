// 1 meter 
// let num = 20
const meter = 3.28084
const feet = 0.3048
const liter = 3.785
const pound = 2.205


// const userNum = document.getElementById("user-num").value;
// console.log(userNum)


let firstEl = document.getElementById("first")
let secondEl = document.getElementById("second")
let thirdEl = document.getElementById("third")

// const calBtn = document.getElementById("cal-btn")
// console.log(num * meter)
// console.log(num * feet)
// console.log(num / liter)
// console.log(num * liter)
// console.log(num * pound)
// console.log(num / pound)


function render() {

    var x = document.getElementById("user-num").value;

    let num = x

    let sumofmeter = num * meter
    let sumoffeet = num * feet

    let sumofliter1 = num / liter
    let sumofliter2 = num * liter

    let sumofpound1 = num * pound
    let sumofpound2 = num / pound


    sumofmeter = sumofmeter.toFixed(3)
    sumoffeet = sumoffeet.toFixed(3)

    sumofliter1 = sumofliter1.toFixed(3)
    sumofliter2 = sumofliter2.toFixed(3)

    sumofpound1 = sumofpound1.toFixed(3)
    sumofpound2 = sumofpound2.toFixed(3)



    firstEl.innerHTML = num + " meters = " + sumofmeter + " feet | " + num + " feet = " + sumoffeet + " meters"


    secondEl.innerHTML = num + " liters = " + sumofliter1 + " gallons | " + num + " gallons = " + sumofliter2 + " liters"


    thirdEl.innerHTML = num + " kilos = " + sumofpound1 + " pounds | " + num + " pounds = " + sumofpound2 + " kilos"

}