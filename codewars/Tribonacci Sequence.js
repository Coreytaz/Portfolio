<<<<<<< HEAD
function tribonacci(signature,n){
    newArr = [...signature];
    if(n === 0){
        return [];
    }
    if(n === 1){
        return [signature[0]]
    }
    if(n === 2){
        return [signature[0] + signature[1]]
    }
   for (let i = 3; i < n; i++) {
        signature.push(signature.reduce((sum, current) => sum + current, 0));
        newArr.push(signature[signature.length - 1]);
        signature.splice(0, 1);
   }
   return newArr;
}

=======
function tribonacci(signature,n){
    newArr = [...signature];
    if(n === 0){
        return [];
    }
    if(n === 1){
        return [signature[0]]
    }
    if(n === 2){
        return [signature[0] + signature[1]]
    }
   for (let i = 3; i < n; i++) {
        signature.push(signature.reduce((sum, current) => sum + current, 0));
        newArr.push(signature[signature.length - 1]);
        signature.splice(0, 1);
   }
   return newArr;
}

>>>>>>> aaf501b62c0968ec9b3fb5ccaf718b18b67e01db
console.log(tribonacci([1,1,1],1));