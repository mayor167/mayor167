function calculateEvenAndOddInt(positiveInt){
               let sumOfEvenInt=0;
               let sumOfOddInt=0;
               let holdSumArray=[];
               let arrEvenInt=[];
               let arrOddInt=[];
               for(i=0;i<positiveInt.length;i++){
                if(positiveInt[i]%2==0){
            arrEvenInt.push(positiveInt[i]);
                } 
                else if(positiveInt[i]%2!==0){
             arrOddInt.push(positiveInt[i]);
                }
            }
            for(i=0;i<arrEvenInt.length;i++){
                sumOfEvenInt+=arrEvenInt[i];}
                for(i=0;i<arrOddInt.length;i++){
               sumOfOddInt+=arrOddInt[i];
                }
                holdSumArray.push(sumOfEvenInt,sumOfOddInt);
                 console.log(arrEvenInt);
            console.log(arrOddInt);
            console.log(sumOfEvenInt);
         console.log(sumOfOddInt);
            console.log(holdSumArray);           
}

calculateEvenAndOddInt([1,2,3,4,5,6]);







 //  console.log(arrEvenInt);
            //console.log(arrOddInt);
           // console.log(sumOfEvenInt);
           // console.log(sumOfOddInt);