/**
 *   @author Murdock, Matthew (murdockm@student.ncmich.edu)
 *   @version 0.0.2
 *   @summary First Project || created: 9.24.18
 */

"use strict";
const PROMPT = require('readline-sync') ;

let lotNumber, bathroom, bedroom, garage, totalPrice;
const BATHROOM_PRICE = 12500, BEDROOM_PRICE = 17000, GARAGE_PRICE = 6000, BASE_PRICE = 50000;

function main() {
    setLotNumber();
    setBathroom();
    setBedroom();
    setGarage();
    setTotalPrice();
    printTotalPrice();
}

main();

function setLotNumber() {
    lotNumber = Number(PROMPT.question('\nPlease enter lot number: '));
}

function setBathroom() {
    bathroom = Number(PROMPT.question('\nNumber of bathroom(s) '));
}

function setBedroom() {
    bedroom = Number(PROMPT.question('\nNumber of bedroom(s) '));
}

function setGarage() {
    garage = Number(PROMPT.question('\nNumber of cars '));
}

function setTotalPrice() {
    totalPrice = BASE_PRICE + bathroom * BATHROOM_PRICE + bedroom * BEDROOM_PRICE + garage * GARAGE_PRICE
}

function printTotalPrice() {
    console.log(`\n The total price of lot Number ${lotNumber} with a ${garage} car garage, ${bathroom} bathroom(s), and ${bedroom} bedroom(s) is worth: \$${totalPrice}. Have a nice day!! :) `)
}

/**
 *  Objective: Design the logic for a program for the River Falls Homes Construction Company.
 *  Data: Design a program that prompts the user for a lot number in the River Falls subdivision,
 *  and data about the home to be built there including number of bedrooms, number of bathrooms,
 *  and size of garage in number of cars it holds. Output is the price of the home
 *  which is $50,000 base price plus $17,000 for each bedroom, $12,500 for each bathroom,
 *  and $6,000 for each car the garage holds. (Only needs to run once).
 */