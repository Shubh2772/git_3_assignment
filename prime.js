let num=15;
let count=0;
for(let i=1; i<=num; i++)
{   if(num%i==0)
   {
   count++;
   }
}
if(count==2){
console.log("it's a prime");
}else{
console.log("it's not a prime");}