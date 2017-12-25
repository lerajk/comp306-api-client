var mongoose = require( 'mongoose' );

/*****

var dbURI = 'mongodb://localhost/inventory';
mongoose.connect(dbURI);

mongoose.connection.on('connected', function () {
console.log('Mongoose connected to ' + dbURI);
});
mongoose.connection.on('error',function (err) {
console.log('Mongoose connection error: ' + err);
});

******/


var uristring = 
  process.env.MONGODB_URI || 
  'mongodb://localhost/inventory';

var theport = process.env.PORT || 5000;

// Makes connection asynchronously.  Mongoose will queue up database
// operations and release them when the connection is complete.
mongoose.connect(uristring, function (err, res) {
  if (err) { 
    console.log ('ERROR connecting to: ' + uristring + '. ' + err);
  } else {
    console.log ('Succeeded connected to: ' + uristring);
  }
}); 

//create schema for mongoose
var InventorySchema = mongoose.Schema({
	product: {
		type: String,
		index:true,
		required: true
	},
	price: {
		type: String,
		required: true
	},
	quantity: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	date: {
		type: String,
		required: true
	}
});

var inventory  = mongoose.model('Inventory', InventorySchema);

module.exports = inventory; 


//config variable for heroku: saleskb
//mongodb://heroku_xj9150l1:pkbk26uiqi2a3m9tbga0a8ngto@ds141082.mlab.com:41082/heroku_xj9150l1


//mongodb://lee:lee@ds135552.mlab.com:35552/kb