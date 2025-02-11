"use strict";
function zipList(list1, list2) {
    const result = [];
    for (let i = 0; i < list1.length; i++) {
        result.push(list1[i], list2[i]);
    }
    return result;
}
function zipListTheFunctionalWay(list1, list2) {
    return list1.reduce((result, item, index) => {
        result.push(item, list2[index]);
        return result;
    }, []);
}
const list1 = ['a', 'b', 'c'];
const list2 = [1, 2, 3];
console.log(zipList(list1, list2)); 
console.log(zipListTheFunctionalWay(list1, list2)); 
