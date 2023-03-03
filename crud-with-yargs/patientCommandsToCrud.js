const patientCrudApp = require("./patientCrudApp");
const yargs = require('yargs')


yargs.command({
    command:"add",
    describe:"this is command add to add patient data",
    builder:{
        fName:{
            describe: 'Patient first name',
            demandOption: true,
            type: 'string'
        },
        lName:{
            describe: 'patient last name',
            demandOption: true,
            type: 'string'
        },
        id:{
            describe: 'patient unique id',
            demandOption: true,
            type: 'string'
        },
        address:{
            describe: 'patient Address',
            demandOption: true,
            type: 'string'
        },
        doctorName:{
            describe: 'Doctor name',
            demandOption: true,
            type: 'string'
        },
        case:{
            describe: 'patient case',
            demandOption: true,
            type: 'string'
        },
        age:{
            describe: 'patient age',
            demandOption: false,
            type: Number
        }
    },
    handler(argv){
        return patientCrudApp.addPatientDetails(argv.id,argv.fName,argv.lName , argv.case ,argv.doctorName , argv.age  ,argv.address)
        // console.log("all data done");
    }
})

/////////////////////// yargs to delete paient with id
yargs.command({
    command:"delete",
    describe:"This is  way to delete patient with id",
    builder:{
        id:{
            describe: 'this patient id to delete',
            demandOption: true,
            type: 'string'
        }
    },
    handler:(arg)=>{
        console.log("Patient Deleted");
        patientCrudApp.deletePatient(arg.id)
    }
})

yargs.parse();