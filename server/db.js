const Pool = require('pg').Pool

const pool = new Pool({
	user: process.env.DB_USER,
	password: process.env.DB_PASS,
	host: process.env.DB_HOST,
	port: process.env.DB_PORT,
	database: process.env.DB_NAME,
})

pool.connect((err, client, release) => {
	if (err) {
		return console.error('Error acquiring client', err.stack)
	}
	client.query('SELECT NOW()', (err, result) => {
		release()
		if (err) {
			return console.error('Error executing query', err.stack)
		}
		console.log('Success', result.rows)
	})
})
module.exports = pool
