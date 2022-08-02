function getRandomNumber(ms){
    let randomNum = Math.floor(Math.random() * 100);
    return new Promise(function(resolve,reject){
        function promiseHandler(){
            resolve(randomNum);
        }
        setTimeout(promiseHandler, ms)
    });   
};

async function printRandomNum(ms){
    let randomNum = await getRandomNumber(ms);
    console.log(randomNum);
}

printRandomNum(3000);