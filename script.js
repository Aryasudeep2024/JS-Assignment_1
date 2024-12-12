
let input=prompt("Enter a number between 0 to 1 million")
let num=Number(input)
console.log( "number is "+num)


 if(num>1000000 || num<0)
 {
    console.log("The Given Number is Invalid")
document.write("The Given Number "+ num+  " is Invalid")

 }else {

    let i
    let total=0
    for(i=0;i<=num;i++)
    {
         total+=i
         console.log("i "+i)
        
    }
    console.log("Sum of the Numbers upto "+num+" is :"+total)
    document.write("Sum of the Numbers upto "+num+" is :"+total)
 }
 function getvalue()
{
let input=prompt("Enter a number between 0 to 1 million")
let num=Number(input)
console.log( "number is "+num)
}
 