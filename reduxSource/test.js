/**
 * @param {number[]} arr
 * @param {number} k
 * @return {boolean}
 */
var canArrange = function (arr, k) {
  let tempArr = [];
  let copyArr = [...arr];
  for (const v of copyArr) {
    for (const iterator of copyArr) {
      if ((v+iterator) % k  === 0) {
        tempArr.push([v, iterator]);
        copyArr.splice(copyArr.indexOf(v), 1);
        copyArr.splice(copyArr.indexOf(iterator), 1)
        if(copyArr.length === 2 && ((copyArr[0]+ copyArr[1]) % k ===0)) {
          tempArr.push([copyArr[0], copyArr[1]]);
        };
      }
    }
  }
  console.log(tempArr);
  if((arr.length/2) === tempArr.length){
    return tempArr;
  }else{
    return false;
  }
};

console.log(canArrange([2,7,5,14,9,6,8,13], 7))

const sunFun = (arr, k) => {
  let newArr = [], list = [...arr]
  arr.map((item, i) => {
      const ind = list.indexOf(item%k);
      console.log(ind , item%k);
      if (ind > -1 && list[ind]) {
          newArr.push([item, list[ind]])
          delete list[i]
          delete list[ind]
      }
  })
  console.log(newArr, 62)
  return arr.length / 2 === newArr.length ? true : false
};

// console.log(sunFun([-1,1,-2,2,-3,3,-4,4], 3))

// for (const i of [2,5]) {
//   for (const j of [2,5]) {
//     console.log(i,j);
//   }
// }

// for(var i=0;i<9;i++){
//   let str = '';
//   for(var j=0;j<i+1;j++){ 
//     str = str + (j+1)+"*"+(i+1)+"="+(i+1)*(j+1)+" ";
//   }
//   console.log(str);
// }