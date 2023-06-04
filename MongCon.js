const mongoose = require("mongoose");

function conectar() {
	mongoose
		.connect("mongodb+srv://Diego:2192@cluster0.9fbrugh.mongodb.net/?retryWrites=true&w=majority")
		.then(() => {
			console.log("conectados a la base de datos");
		})
		.catch((error) => {
			console.log("tu error es :" + error);
		});
}
