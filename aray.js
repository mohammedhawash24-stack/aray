let students =  ["Dania", "Omar", "Lina", "Rami"]
students.push("Sara") // add to the end of the array
console.log(students);
students.unshift("Adam");
console.log(students);
students[3] = "Lamar";
console.log(students);
 let removedlast = students.pop("") // remove the last element of the array
console.log(students);
let removedfirst = students.shift() // remove the first element of the array
console.log(students);
hasRami = students.includes("Rami") // check if the array includes "Rami"
console.log(hasRami);
omarIndex = students.indexOf("Omar") // get the index of "Omar"
console.log(omarIndex);
 let groupA = students.slice(0, 2) // create a new array with the first two elements of the original array
console.log(groupA);
let groupB = ["noor", "tala"]// create a new array with the third and fourth elements of the original array
let allgroups = groupA.concat(groupB) // concatenate the two groups into a new array
console.log(allgroups);
let groupstring = allgroups.join(", ") // convert the array to a string with elements separated by a comma and a space
console.log(groupstring);
students.sort() // sort the array in alphabetical order
console.log(students);
students.reverse() // reverse the order of the array
console.log(students);
let seats = [1, 2, 3, 4, 5]
let reseervedSeats = [...seats];
reseervedSeats.splice(1, 3, "reserved", "reserved", "reserved") // remove the third element of the array
console.log(reseervedSeats);
let studentsstring = students.join(", ") // convert the array to a string with elements separated by a comma and a space
console.log(studentsstring);