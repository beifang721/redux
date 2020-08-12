function add1(str){
  return function(){
    
  };
}
function add2(str){
  return function(){

  };
}
function add3(str){
  return function(){

  };
}
// const result = add3(add2(add1('ceshi')));


function compose(...funs){
  return function(str){
    let tempfn = null;
    let fn = function(parma){
      if( tempfn === null) {
        tempfn = parma(str)
      }else{
        tempfn = parma(tempfn)
      }
    };
    let a = '';
    for (const item of funs) {
      a = fn(item)
    }
    console.log(tempfn);
    return tempfn;
  }
}

function compose(...fns){
  return fns.reduce((a,b)=>{
    return (str)=>{
      return b(a(str))
    }
  })
}

const result = compose(add1, add2, add3)('ceshi');

console.log(result);
