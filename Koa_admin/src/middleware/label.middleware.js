const labelService = require('../service/label.service')

const verifyLabelDoesExists =async (ctx,next)=>{
    const {labels} =  ctx.request.body
    let newLabels = []
    for (let item of labels.split(',')){
        const res1 = await labelService.doesItExist(item)
       if (res1.length === 0){
        const res2 =  await labelService.create(item)
           newLabels.push(res2.insertId)
       }else{
           newLabels.push(res1[0].id)
       }
    }
    ctx.labels = newLabels.toString()
    await next()
}

module.exports ={
    verifyLabelDoesExists
}