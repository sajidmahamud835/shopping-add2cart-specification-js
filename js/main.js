/* -------------------
    Global Variables
------------------ */

//options value
const memory8GbExtraCost = 0;
const memory16GbExtraCost = 180;

const storage256GbExtraCost = 0;
const storage512GbExtraCost = 100;
const storage1TbExtraCost = 180;

const deliveryFreeeExtraCost = 0;
const deliveryFastExtraCost = 20;

//discount value
const discountPerCent = 20;

//option selectors
const memory8Gb = document.getElementById("memory-8gb");
const memory16Gb = document.getElementById("memory-16gb");

const storage256Gb = document.getElementById("storage-256gb");
const storage512Gb = document.getElementById("storage-512gb");
const storage1Tb = document.getElementById("storage-1tb");

const deliveryFree = document.getElementById("delivery-free")
const deliveryFast = document.getElementById("delivery-fast");

//option arrays
const memoryOptions = [memory8Gb, memory16Gb];
const memoryOptionCosts = [memory8GbExtraCost, memory16GbExtraCost];

const storageOptions = [storage256Gb, storage512Gb, storage1Tb];
const storageOptionCosts = [storage256GbExtraCost, storage512GbExtraCost, storage1TbExtraCost];

const deliveryOptions = [deliveryFree, deliveryFast];
const deliveryOptionCosts = [deliveryFreeeExtraCost, deliveryFastExtraCost];


//price field for each option
const bestPriceField = document.getElementById("best-price");
const memoryCostField = document.getElementById("memory-cost");
const storageCostField = document.getElementById("storage-cost");
const deliveryCostField = document.getElementById("delivery-cost");
const totalPriceField = document.getElementById("total-price");

// add promo code
let totalPriceValue = parseFloat(totalPriceField.innerText);
const promoCodeInput = document.getElementById("pormo-code-input");
const promoCodeButton = document.getElementById("add-promo-code-button");
let isDiscounted = false; //this variable will be updated when user input a valid promocode
const totalPriceAfterDiscountField = document.getElementById("total-price-after-discount");

/* --------------------------
    Calculate Total Price
---------------------------- */

function priceCalculator() {
    //price field value
    const bestPriceValue = parseFloat(bestPriceField.innerText);
    const memoryCostValue = parseFloat(memoryCostField.innerText);
    const storageCostValue = parseFloat(storageCostField.innerText);
    const deliveryCostValue = parseFloat(deliveryCostField.innerText);

    //get total price
    const totalPriceValue = bestPriceValue + memoryCostValue + storageCostValue + deliveryCostValue;
    console.log('Total Price:', totalPriceValue);

    //set total price
    totalPriceField.innerText = totalPriceValue;

    //get final price
    if (isDiscounted == true) {
        const discountRate = discountPerCent / 100;
        const totalPriceAfterDiscount = totalPriceValue - (totalPriceValue * discountRate);

        //update final price
        totalPriceAfterDiscountField.innerText = totalPriceAfterDiscount;
    }
    else {
        totalPriceAfterDiscountField.innerText = totalPriceValue; //if no discount the value will be same.
    }
}


/* ------------------------
   Apply Selected Option
------------------------- */

//apply the price of the option selected.
function applyOption(optionCost, optionPriceFeild) {
    optionPriceFeild.innerText = optionCost;

    //recalculate total price
    priceCalculator();
}


/* ------------------------
   Apply Typed Promocode
------------------------- */
function applyPromocode() {
    const promocode = promoCodeInput.value;
    if (promocode == 'stevekaku') {
        isDiscounted = true;
    }
    else {
        alert('The promotional code you entered is not valid!');
    }

    //recalculate total price
    priceCalculator();
}


/* ---------------------------
    Event Listener Functions
---------------------------- */

//listen option click
function selectOption(options, optionsCost, optionPriceFeild) {
    for (let index = 0; index < options.length; index++) {
        const element = options[index];
        const optionCost = optionsCost[index];

        element.addEventListener('click', function () {
            console.log('Selected', element.innerText);
            applyOption(optionCost, optionPriceFeild);
        });
    }
}

//listen add promocode button
promoCodeButton.addEventListener('click', function () {
    console.log('Add promocode button clicked.');
    applyPromocode();
});


// call event listeners
selectOption(memoryOptions, memoryOptionCosts, memoryCostField);
selectOption(storageOptions, storageOptionCosts, storageCostField);
selectOption(deliveryOptions, deliveryOptionCosts, deliveryCostField);