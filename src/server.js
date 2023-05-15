const path=require('path')
const fs=require('fs')
const filePath = process.argv[2];
const sharp=require('sharp') 
const caminho=path.resolve(process.argv[1])

const folderPathArray=path.dirname(caminho).split('\\')
folderPathArray.pop()
const folderPath=folderPathArray.join('\\')

const [filename,extension]=path.basename(filePath).split('.')
const destination=`${folderPath}/redimensionado`
if(!fs.existsSync(destination)){
    fs.mkdirSync(destination)
  
}
const sizes=[128,48,32,24,16]
sizes.forEach((size)=>{

    sharp(`${folderPath}\\${filename}.${extension}`).clone().resize(({width:size})).toFile(`${destination}/${filename}-${size}.${extension}`).then((response)=>{
        console.log(response)
    }).catch((error)=>{
        console.log(error)
    })

})
