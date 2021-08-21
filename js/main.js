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


// const totalPriceValue = parseFloat(totalPriceField.innerText);

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
    totalPriceValue = bestPriceValue + memoryCostValue + storageCostValue + deliveryCostValue;
    console.log('Total Price:', totalPriceValue)

    //set total price
    totalPriceField.innerText = totalPriceValue;
}



/* ---------------------------
    Event Handeler Functions
---------------------------- */

//apply the price of the option selected.
function applyOption(optionCost, optionPriceFeild) {
    optionPriceFeild.innerText = optionCost;

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

// call event listener
selectOption(memoryOptions, memoryOptionCosts, memoryCostField);
selectOption(storageOptions, storageOptionCosts, storageCostField);
selectOption(deliveryOptions, deliveryOptionCosts, deliveryCostField);