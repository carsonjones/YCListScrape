/**
 * HooksController
 *
 * @description :: Server-side logic for managing hooks
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	test: function(req, res){
		return res.send('Hello!');
	},
	kimono: function(req, res){
		console.log('statusCode: ', res.statusCode);
  		
  		var requestJSON = req.body;

  		NewYC.create(requestJSON).exec(function createCB(err, created){
		  console.log('Created entry with name ' + created.name);
		});;

		return res.send('hey, thanks for the data!');

	}
};
