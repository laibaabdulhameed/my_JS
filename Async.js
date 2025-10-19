

// asyn>>promise chains>> callback hell
function getData(dataId,getnextdata){
    setTimeout(()=>{
        console.log("data",dataId);
        if(getnextdata){
            getnextdata();
        }
        
    },2000)
}
// getData(1,()=>{
//     getData(2,() =>{
//         getData(4);
//     });
// });//this is bad code not easy to understand this is callback hell
// promises(are objects)
const fetchData = new Promise((resolve,reject)=>{
    let success = true;
    setTimeout(() => {
        if (success){
            resolve({data : "hello"});
        }else{
            reject("failed to fetch data");
        }
        
    }, 1000);
});
// consuming the Promise
fetchData.then((response)=>{console.log(response.data);
return response.data.toUpperCase();
})
.then((uppercased)=>{console.log(uppercased);
})
.catch((error)=>{console.log("error:" , error);
})
.finally(()=>{console.log("Done!");
});

// async
function getData(dataId){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data",dataId);
            resolve("success");
            
        },2000);
    });
}
// async_await
async function getAllData(params) {
    console.log("getting data1....");
    await getData(1);
    console.log("getting data....");
    await getData(2);
    console.log("getting data3....");
    await getData(3);
}
// IIFE to execute function imediately and used for once
(async function () {
    console.log("getting data1....");
    await getData(1);
    console.log("getting data....");
    await getData(2);
    console.log("getting data3....");
    await getData(3);
})();
