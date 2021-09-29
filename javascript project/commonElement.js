function findCommonElement(arr1,arr2){ 
let common=[];
let sumOfSubset=0;
for(i=0;i<arr1.length;i++){ 
    for(j=0;j<arr2.length;j++){ 
      if (arr1[i]==arr2[j]){
          common.push(arr1[i]);          
      }              
}
}
for(c=0; c<common.length;c++){
    sumOfSubset+=common[c];   
}
return sumOfSubset;
}  
console.log(findCommonElement([12, 1, 61, 5, 9, 2],[1,12,9,2,10,11]));


