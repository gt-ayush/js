let j = 51;
p=0;
for (let i = 0;i<=j;i++){
    if (j%i==0){
       p++;
    }
    
}
if (p==2){
    console.log("Prime no.")
}
else{
    console.log("Not a prime no.")
}