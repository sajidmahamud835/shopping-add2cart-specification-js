/* -------------------
    Global Variables
------------------ */
//extra cost variables
const memory8GbExtraCost = 0;
const memory16GbExtraCost = 180;

const storage256GbExtraCost = 0;
const storage512GbExtraCost = 100;
const storage1TbExtraCost = 180;

const deliveryFreeeExtraCost = 0;
const deliveryFastExtraCost = 20;

//product specification variables
const memory8Gb = document.getElementById("memory-8gb");
const memory16Gb = document.getElementById("memory-16gb");

const storage256Gb = document.getElementById("storage-256gb");
const storage512Gb = document.getElementById("storage-512gb");
const storage1Tb = document.getElementById("storage-1tb");

const deliveryFree = document.getElementById("delivery-free")
const deliveryFast = document.getElementById("delivery-fast");

//arrays
const memoryOptions = [memory8Gb, memory16Gb];
const memoryOptionCosts = [memory8GbExtraCost, memory16GbExtraCost];

const storageOptions = [storage256Gb, storage512Gb, storage1Tb];
const storageOptionCosts = [storage256GbExtraCost, storage512GbExtraCost, storage1TbExtraCost];

const deliveryOptions = [deliveryFree, deliveryFast];
const deliveryOptionCosts = [deliveryFreeeExtraCost, deliveryFastExtraCost];


//cost calculator variables
const bestPriceField = document.getElementById("best-price");
const memoryCostField = document.getElementById("memory-cost");
const storageCostField = document.getElementById("storage-cost");
const deliveryCostField = document.getElementById("delivery-cost");
const totalPriceField = document.getElementById("total-price");


/* ---------------------------
    Event Handeler Functions
---------------------------- */

//apply the price of the option selected.
function applyOption(optionCost, optionPriceFeild) {
    optionPriceFeild.innerText = optionCost;
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