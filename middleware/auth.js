/* This sends back the user's json web token so it can
be used on the front end and to access protected routes */

const jwt = require("jsonwebtoken");
const keys = require("../config/keys");

module.exports = function(req, res, next) {
	//Get token from header
	const token = req.header("x-auth-token");

	//Check if no token
	if (!token) {
		return res.status(401).json({ msg: "No token, authorization denied" });
	}

	//Verify token
	try {
		const decoded = jwt.verify(token, keys.jwtSecret);

		/* Decoded receives a user object because we added a 
        user object to our payload. Set req.user to that object
        so it can be used elsewhere in the application */
		req.user = decoded.user;
		next();
	} catch (err) {
		res.status(401).json({ msg: "Token is not valid" });
	}
};
