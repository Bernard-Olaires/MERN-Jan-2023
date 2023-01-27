// const noMondays = new Promise( (resolve, reject) => {
//     if(new Date().getDay() !== 3) {
//         resolve("Good, it's Wednesday!");
//     } else {
//         reject("Someone has a case of the Wednesdays!");
//     }
// });
// noMondays
//     .then( res => console.log(res) )
//     .catch( err => console.log(err) );


function processVideo(video) {  
    return new Promise((resolve,reject) => {
        if (video.fileSize < 10000){
            setTimeout(()=> {
                resolve(video)
            }, 3000)
        }
        else if(video.fileSize > 10000){
            reject('video is to large')
        }
    })
}
const video = {
    fileSize: 500000,
    videoName:'Small video'
}

function processPhoto(photo) {  
    return new Promise((resolve,reject) => {
        if(photo.fileSize > 5000){
            reject('file is to large')
        }
        else if(photo.fileSize < 500){
            setTimeout(()=>{
                resolve('Image processed')

            },1000)
        }
    })
}
const photo = {
    fileSize: 1000000,
    videoName:'cat-meme.jpg'
}


const doProcessing = async () => {
    try{
        const videoResponse = await processVideo(video)
        console.log(videoResponse);
        const photoResponse = await processPhoto(photo)
        console.log(photoResponse);
    }
    catch(err){
        console.log(err)
    }
}
doProcessing()

console.log('Hello');

// processPhoto(photo)
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err))


// processVideo(video)
//     .then((res) => console.log(res.videoName))
//     .catch((err) => console.log(err))