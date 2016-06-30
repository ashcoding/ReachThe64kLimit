fs = require('fs');
var limit = 65536;
var methods = 6553;
var finalText = '';
var logsIncluded = false

if(logsIncluded) {
	for(var i = 0; i < methods; i++) {


		var stringText = 'public void method' + i +'(){\n' +' Log.d(TAG, "Method '+i+' called");\n' +' method'+(i+1)+'();\n'+'}\n\n';
		finalText += stringText;

	}

	var stringText = 'public void method' + methods +'(){\n' +' Log.d(TAG, "Final method '+methods+' called");\n'+'}\n\n';
	finalText += stringText;
} else {
	for(var i = 0; i < methods; i++) {


		var stringText = 'public void method' + i +'(){\n' +' method'+(i+1)+'();\n'+'}\n\n';
		finalText += stringText;

	}

	var stringText = 'public void method' + methods +'(){\n' +' Log.d(TAG, "Final method '+methods+' called");\n'+'}\n\n';
	finalText += stringText;
}
fs.writeFile('methodsOver64k.txt', finalText, function (err) {
  if (err) return console.log(err);
  
});