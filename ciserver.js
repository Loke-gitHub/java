const http=require('http')
const child=require('child_process')

var exec = require('child_process').exec
var server=http.createServer()
server.on('request',function(req,res){
	res.end("success!!")
	console.log("execFile")
	var ls = exec('bash cibuild.sh', function (error, stdout, stderr) {
		  if (error) {
		    console.log(error.stack);
		    console.log('Error code: ' + error.code);
		  }
		  console.log('Child Process STDOUT: ' + stdout);
		});
	
	
})

server.listen(3203,function(err){
	if(!err)
		console.log("server start at port:"+3203)
	
})
