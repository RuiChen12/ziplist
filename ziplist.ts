function zipList(list1: string[], list2: number[]): (string | number)[] {
  const result: (string | number)[] = [];
  for (let i = 0; i < list1.length; i++) {
    result.push(list1[i], list2[i]);
  }
  return result;
}

function zipListTheFunctionalWay(list1: string[], list2: number[]): (string | number)[] {
  return list1.reduce<(string | number)[]>((result, item, index) => {
    result.push(item, list2[index]);
    return result;
  }, []);
}

const list1 = ['a', 'b', 'c'];
const list2 = [1, 2, 3];

console.log(zipList(list1, list2));
console.log(zipListTheFunctionalWay(list1, list2));
