arr=[10,5,2,8,4]
console.log(arr)
var x=arr[0]
var sum=0
for(i=0; i<5; i++){
    sum+=arr[i]
    if (arr[i]<x){
        x=arr[i]
}
}
console.log("the lowest number is: ",x)
console.log("the sum of all the numbers :",sum)

