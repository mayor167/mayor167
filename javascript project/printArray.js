function arrSymmetric(arr1,arr2){
         let arrDifference=[];
          let array1=[];
          let array2=[];
            //let arrDifference=[];
              for (i=0;i<arr1.length;i++){
                //console.log(arr1[i]);
                array1.push(arr1[i]);
              }
              for(i=0;i<arr2.length;i++){
                array2.push(arr2[i]);
                //console.log(arr2[i]);
              }
             if(arr1[i]=arr2[i]){
               console.log(arr1[i]=arr2[i]);
       arrDifference.push(array1!=array2);
       console.log(arrDifference);
       //console.log(arrDifference);
         //     }
             // return arrDifference;

}

arrSymmetric([2,4,5],[1,2,4]);

















/*function addArray(arr1,arr2){
        let arrSum1=0;
        let  arrSum2=0;
       //let array1=[10,10,1];
       // let array2=[10,10,1];
     for(i=0; i<arr1.length;i++){
         arrSum1+=arr1[i];
  }
  for(i=0;i<arr2.length;i++){
      arrSum2+=arr2[i];
  }
  if (arrSum1>arrSum2){
      console.log("Array1 is greater and sum is"+" "+ arrSum1);
  }
  else if (arrSum2>arrSum1){
    console.log("Array2 is greater and sum is"+" "+ arrSum2);
  }
  else{
    console.log("Array1 and Array2 eqaul and sum is"+" "+ arrSum1);  
  }
  
      }
addArray([10,10,1], [10,10,1]);
//result=addArray([1,2,3]);
//console.log(result);
/*function arrIncrement(arr, num){
        let newArr=[];
        for(i=0;i<arr.length;i++){
              newArr.push(arr[i]+num);
        }
        return newArr;
}
result=arrIncrement([1,2,3],2)
console.log(result);*/
/*function arr(myArray){
    let newArr=[];
        for(i=0;i<myArray.length;i++){
         newArr=push.(myArray[i]);
        }
        return newArr;
    }
    array=arr([1,2,3]);
    console.log(array);*/
