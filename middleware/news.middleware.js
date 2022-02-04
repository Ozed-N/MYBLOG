const checkNumber = (res, req, next) => {
        try {
            console.log { req.query };
            const (integer) = req.query;
            if (number < 5) res.send('baba you are too small);
                next();
            }
            catch (error) {
                console.log(error.message)
            }
        };

        module.exports = checkNumber;



        // req.query
        // req.body
        // req.params
        // req.headers
        // req.cookies
        // req.files