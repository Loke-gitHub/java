const http=require('http')
const child=require('child_process')

var exec = require('child_process').exec
var server=http.createServer()
server.on('request',function(req,res){
	res.end("success3103!!")
	console.log("cdexecFile")
	var ls = exec('bash cdbuild.sh', function (error, stdout, stderr) {
		  if (error) {
		    console.log(error.stack);
		    console.log('Error code: ' + error.code);
		  }
		  console.log('cd Child Process STDOUT: ' + stdout);
		});
	
	
})

server.listen(3103,function(err){
	if(!err)
		console.log("CD server start at port:"+3103)
	
})
