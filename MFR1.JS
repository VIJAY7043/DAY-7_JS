const log=(param)=>console.log(param)

////MAP
const num = [1,2,3,4,5,6,7,8,9,10];
 const tablenum = num.map((val,idx,accarr)=> accarr)
 log(tablenum)

 //MAP IN OBJECT
  const obj = [
  {
    "name" : "vijay",
    "age"  : 29
  },
  {
    "name": "suryaa",
    "age" : 20
  },
  {
    "name": "vipin",
    "age" : 21
  }
]
  obj.map((val,idx,arr)=>log(val.age))

  //////////difference between map and foreach

  const maptable = num.map((val, idx, accarr) => val*5)
  const fortable = num.forEach((val,idx,accarr)=> log(val*5) )
  log(maptable)
  log(fortable)

  //////FILTER
  //// FILTER also returns an array

  const filtertable = num.filter((val,idx,accarr)=> val !== 5)
  log(filtertable)

  ////in normal looping


  ///REDUCE
  const reducetable = num.reduce((acc,val,idx,accarr)=>{
    return acc + val
  },100);

  console.log("reduce returns:",reducetable)


  ///small task
//map = all the array
// filter sanjay

  const namearr = ["vijay","sanjay","vipin"]

  /// in map method
  const maptable1 = namearr.map((val,idx,accarr)=>`${val}`)
  log(maptable1)
  // filter method
  const filtertable1 = namearr.filter((val,idx,accarr)=>val !=="sanjay")
  log(filtertable1)

//////////my own prototype f0r map

// const num1 = [1,2,3,4,5,6,7,8,9,10]
// class.prototype. mymap = function(fn){
//     let Narr = " "
//     for(i=0;i<num1.length;i++)
//       Narr.push(fn(this[i],i,this))
//       console.log(Narr)
//     return num1
// }




