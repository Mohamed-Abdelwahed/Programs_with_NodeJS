const fs = require('fs')

const inputDegrees = (d1,d2,d3,d4,d5,d6,d7)=>{
  
    const allData = loadData();
    const degSum = d1+d2+d3+d4+d5+d6+d7;
    const degAvg = Math.round((d1+d2+d3+d4+d5+d6+d7)/7);

    allData.push({
        d1,
        d2,
        d3,
        d4,
        d5,
        d6,
        d7,
        degAvg,
        degSum

    })

    saveStudentDegree(allData)

}

const loadData = ()=>{
    try{
        const allData = fs.readFileSync("studentSore.json").toString()
        return JSON.parse(allData)
    }catch{
        return []
    }
}


const saveStudentDegree = (allDegrees)=>{
        const allData = JSON.stringify(allDegrees)
        fs.writeFileSync("studentSore.json" , allData)
}



module.exports = {
    inputDegrees
}