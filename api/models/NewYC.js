//Entry.js
//an entry from Kimono API to log to database

module.exports = {
	attributes: {
		//ex- 'NewYCList.com'
		name:{
			type:'string'
		},
		//ex- 88
		count:{
			type: 'float'
		},
		//ex- 'daily'
		frequency:{
			type: 'string'
		},
		//ex- 1
		version:{
			type: 'float'
		},
		//ex - true
		newdata:{
			type: 'boolean'
		},
		//ex - 'success'
		lastrunstatus:{
			type: 'string'
		},
		//ex - 'success'
		thisversionstatus:{
			type: 'string'
		},
		//ex - 'Thu Aug 20 2015 22:57:40 GMT+0000 (UTC)'
		nextrun:{
			type: 'string'
		},
		//ex - Wed Aug 19 2015 22:57:40 GMT+0000 (UTC)
		thisversionrun:{
			type: 'string'
		},
		//ex - [obj]
		results:{
			type: 'json',
    		required: false
		}
	}
}