# Reverse an Array

<!-- Short summary or background information -->

## Challenge

<!-- Description of the challenge -->

Write A function that takes an array as a parameter, return this array reversed without using any built in reverse method that was provided by your language

## Approach & Efficiency

<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->

First since i have to reverse it i begun the loop rom the end of the array to the begining, and pushed the result to a new array that was predefined in the function.

Second solution, I was trying to use high order array methods, since we have map that returns an array,
if the same idea i have to start from the end of the array and move backwords to get the first index in last, so we have index argument in this method which will increase, so in you subtracte it from the last index, it will gives you the index befor it, and so on

## Solution

<!-- Embedded whiteboard image -->

Solution number 1 :
assuming array has 6 elements on it
for loop i start with the length of the array-1.

- firt eteration i=5 => pushed value to the new array is array[5]
- second eteration i=4 => pushed value to the new array is array[4]
- third eteration i=3 => pushed value to the new array is array[3]
- fourth eteration i=2 => pushed value to the new array is array[2]
- fifth eteration i=1 => pushed value to the new array is array[1]
- sixth eteration i=0 => pushed value to the new array is array[0]

Solution Number 2 :
assuming array has 6 elements on it.
using .map method;

- firt eteration index=0 => value of the index is array[array.length-1-index] => array[5]
- second eteration index=1 => value of the index is array[4] array[array.length-1-index] => array[4]
- third eteration index=2 => value of the index is array[3] array[array.length-1-index] => array[3]
- fourth eteration index=3 => value of the index is array[2] array[array.length-1-index] => array[2]
- fifth eteration index=4 => value of the index is array[1] array[array.length-1-index] => array[1]
- sixth eteration index=5 => value of the index is array[0] array[array.length-1-index] => array[0]
