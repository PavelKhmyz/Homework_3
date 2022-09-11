// 1. для отправленной в функцию строки найти каким по счету является первое вхождение  слова "lorem", регистр не важен

function findLorem (str){
    const f = str.toLowerCase().split(' ');
    let c = 1;
    for(let i = 0; i <= f.length; i++){
        if (f[i] === 'lorem'){
           break;
        };
        c++;
    };
    return (c);
};