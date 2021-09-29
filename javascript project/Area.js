//function calculateArea(l,b){
 //        let area=l*b;
  //       return area;          
//}

//const result=calculateArea(3,3);
//console.log(result);
//const cal=(l,b)=>{
    
//}
//const firstName="Oyeyemi";
//const lastName="ADENIJI"
//const fullName=firstName.concat(lastName);
//console.log(fullName);
function findCommonElement(arr1,arr2) {
let common=[];
for(let i=0;i<arr1.length;i++){
    for(let j=0;j<arr2.length;j++){
        if(arr1[i]==arr2[j]){
            common.push(arr1[i]);
       }
    }
    
}
}
console.log(findCommonElement([12, 1, 61, 5, 9, 2],[1,12,9,2,10,11]));