var midi = require('midi')

var input = new midi.input()

input.on('message', (delta_T, message)=>{
	console.log(`d: ${delta_t}`)
	console.log(`m: ${message}`)
})

input.openVirtualPort('Virtual Input Port')

input.closePort()
