// 3*. для отправленной в функцию строки найти каким по счету является последнее вхождение  слова "lorem ipsum", регистр не важен

function findLoremIpsum (str){
    const f = str.toLowerCase().split(' ');
    let c = 0;
    for(let i = f.length - 1; i >= 0; i--){
        if ((f[i] === 'lorem') && (f[i + 1] ==='ipsum')){
           break;
        };
        c++;
    };
    return (f.length - c);
};