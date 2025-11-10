let j = prompt("Enter a number:")
let p=0
for (let i = 1;i<=(j);i++){
    if (j%i==0){
       p++;
    } 
}
if (p==2){
    alert("Prime no.")
}
else{
    alert("Not a prime no.")
}