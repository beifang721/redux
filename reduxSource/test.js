/*
 * @Author: yqj
 * @Date: 2020-07-30 15:09:36
 * @LastEditTime: 2020-08-05 19:27:28
 * @Description:
 */
/* eslint-disable no-unused-vars */
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
      if ((v + iterator) % k === 0) {
        console.log(v, iterator);

        tempArr.push([v, iterator]);
        copyArr.splice(copyArr.indexOf(v), 1);
        copyArr.splice(copyArr.indexOf(iterator), 1);
        if (copyArr.length === 2 && (copyArr[0] + copyArr[1]) % k === 0) {
          tempArr.push([copyArr[0], copyArr[1]]);
        }
      }
    }
  }
  console.log(tempArr);
  if (arr.length / 2 === tempArr.length) {
    return tempArr;
  } else {
    return false;
  }
};

// canArrange([-1,1,-2,2,-3,3,-4,4], 3)

const sumFun = (arr, k) => {
  let newArr = [],
    list = [...arr];
  arr.map((item, i) => {
    arr.map((it, ind) => {
      if (list[ind] && it + item >= 0 && (it + item) % k === 0) {
        newArr.push([item, it]);
        delete list[i];
        delete list[ind];
      }
    });
  });
  console.log(newArr, 80);
  return arr.length / 2 === newArr.length ? true : false;
};

// console.log(sumFun([1,2,3,4,5,10,6,7,8,9], 5))

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

let dispatch = null;
let obj = {
  dispatch: () => {
    return dispatch;
  },
  name: "dispatch",
};
dispatch = "123";

// console.log(obj.dispatch());

function fib(n) {
  if (n === 0 || n === 1) {
    return n;
  } else {
    return fib(n - 1) + fib(n - 2);
  }
}
// console.log(fib(6));

var reverseList = function(head) {
  if (!head || !head.next) return head;

  const node = reverseList(head.next);
  head.next.next = head;
  head.next = null;

  return node;
  };

const objA = reverseList({
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: {
          value: 5,
          next: null,
        },
      },
    },
  }
});
console.log(objA.next.next.next.next);