/**
 * HooksController
 *
 * @description :: Server-side logic for managing hooks
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	test: function(req, res){
		return res.send("Hello!");
	},
	kimono: function(req, res){
		var webhookName = req.get('X-Webhook-Name');
		if ('data.posted' === webhookName) {
		  	// do stuff

		   	return res.ok();;
		} else {
		  return res.ok();
		}
	}
};
