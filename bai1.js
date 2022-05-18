let number = +prompt("Nhap so can kiem tra")
function isPrime(number) {
    let count=0
    let isPrime = false
    if(number===0){
        alert(number+"kp la SNT")
    } else {
        for (i=1;i<=number;i++){
            if(number%i===0){
                count++
            }
        }
        if (count==2){
            isPrime=true;
        }
        if (isPrime){
            alert(number + "la SNT")
        } else
            alert(number + "kp la SNT")
    }
}


