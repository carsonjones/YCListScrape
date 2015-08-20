/**
 * HooksController
 *
 * @description :: Server-side logic for managing hooks
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	kimono: function(req, res){
		var webhookName = req.get('X-Webhook-Name');
		if ('data.posted' === webhookName) {
		  	// do stuff

		    return res.ok();
		  }, function (error) {
		      return res.negotiate(error);
		  });
		} else {
		  return res.ok();
		}
	}
};
