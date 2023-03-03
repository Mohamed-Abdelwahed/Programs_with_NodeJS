const yargs = require('yargs')
const inputDegrees = require('./App')


yargs.command({
    command:'add',
    describe:"add student degrees in seven subjscts",
    builder:{
        d1:{
            describe: 'first degree',
            demandOption: true,
            type: Number
        },
        d2:{
            describe: 'secound degree',
            demandOption: true,
            type: Number
        },
        d3:{
            describe: 'secound degree',
            demandOption: true,
            type: Number
        },
        d4:{
            describe: 'secound degree',
            demandOption: true,
            type: Number
        },
        d5:{
            describe: 'secound degree',
            demandOption: true,
            type: Number
        },
        d6:{
            describe: 'secound degree',
            demandOption: true,
            type: Number
        },
        d7:{
            describe: 'secound degree',
            demandOption: true,
            type: Number
        },

    },
    handler:(argv)=>{
         inputDegrees.inputDegrees(argv.d1 ,argv.d2 ,argv.d3 ,argv.d4 ,argv.d5 ,argv.d6 ,argv.d7)
    }
})



yargs.parse();