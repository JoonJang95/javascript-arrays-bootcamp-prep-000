var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(Array, element) {
    Array = [element, ...Array];
    return Array 
} 

function destructivelyAddElementToBeginningOfArray(Array, element) {
  Array.unshift(element);
   return Array
}


function addElementToEndOfArray(array, element) {
   array = [...array, element];
   return array
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array
}

function accessElementInArray(array,index) {
  return array[index];
  }
  
function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  return array 
}

function removeElementFromEndOfArray(bae) {
  bae.slice()
  return bae
}

function removeElementFromBeginningOfArray(array) {
  array2 = array.slice(1); 
  return array2
}

