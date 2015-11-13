/*
* writing controller for test
*/

exports.index = function(req,res){
	res.render('test',{
		title: 'Test Controller'
	})	
};