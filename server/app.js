const fastify = require("fastify")({ logger: { prettyPrint: true } });
const path = require("path");
const rollup = require("rollup");
const loadConfigFile = require("rollup/dist/loadConfigFile");

loadConfigFile(path.resolve(__dirname, "../rollup.config.js"), {format: "es"})
	.then(({options, warnings}) => {
		warnings.flush();
		options.map(async options => {
			const bundle = await rollup.rollup(options);
			options.output.map(bundle.write);
			rollup.rollup(options);
		});
	});

fastify.register(require("fastify-static"), {
	root: path.join(__dirname, "../public"),
	prefix: "/"
});

fastify.get("/server_route", (req, res) => {
	res.send("This is a server route!");
});

async function start() {
	let port = process.env.PORT || 3000;
	try {
		await fastify.listen(port);
	} catch (err) {
		fastify.log.error(err);
		process.exit(1);
	}
}
start();