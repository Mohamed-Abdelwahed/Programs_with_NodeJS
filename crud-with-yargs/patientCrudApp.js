
const fs = require("fs");

const addPatientDetails = (id , fName , lName , condition , doctorName , age  , address )=>{

    const patientData = loadPatientData();

    const findDuplicatedData = patientData.filter(data=> data.id === id)

    if(findDuplicatedData.length === 0){
        patientData.push({
            id,
            fName,
            lName,
            condition,
            doctorName,
            age,
            address
        })
    
        savePatientData(patientData);
    }else{
        console.log("SAME PATIENT REGIDTER BEFORE : PLEASE ENTER ANOTHER");
    }

   

}//End Add new Patient

///////////////////////////////
//start Delete patient with id

const deletePatient = (id)=>{

   const allPatientData = loadPatientData();
    const saveAllPatientData = allPatientData.filter(element => element.id !== id);
    savePatientData(saveAllPatientData);

}

// way to load all needed patient Data

const loadPatientData = ()=>{
    try{
        const allPatientData = fs.readFileSync("patientData.json").toString();
        return JSON.parse(allPatientData);
    }catch{
        return []
    }
}

// way to save all patinet Data to Json

const savePatientData = (data)=>{
    const saveAllPatientData = JSON.stringify(data);
    fs.writeFileSync("patientData.json" , saveAllPatientData);
}

//export this modules to use in another file
module.exports = {
    addPatientDetails,
    deletePatient
}