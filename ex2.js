// 2. создать массив из исходного, в котором четные элементы(не индексы) увеличены вдвое, а нечетные уменьшены вдвое, при этом если число делится на 13 без остатка, то сначала нужно отнять от него 5

function makeArray (n, m) {
    const arr = [];
    const arrAnswer = [];
    for(let i = n; i <= m; i++){
        arr.push(i);
    }
        for(let r = 0; r < arr.length; r++){
            if (arr[r] % 2 === 0){
                if (arr[r] % 13 === 0){
                    arr[r] = arr[r]-5;
                };
                arrAnswer.push (arr[r] = arr[r] * 2);
            }
            else {
                if (arr[r] % 13 === 0){
                    arr[r] = arr[r]-5;
                };
                arrAnswer.push (arr[r] = arr[r] / 2);
            }
        }    
    return(arrAnswer);
};