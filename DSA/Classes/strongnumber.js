function isStrongNumber(n) {
    let sum =0;
    let num=n.toString();
    for(let i =0; i<num.length;i++){
        let digit = Number(num[i]);
        let fact =1;

        for(let j=1; j<=digit;j++){
            fact*=j;
        }
        sum+=fact;

    }
    if(sum==Number(n)){
        return("Yes");
    }
    else return("No");
   
}

module.exports = { isStrongNumber };    