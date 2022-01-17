#!/usr/bin/env node
import {createClient} from 'redis';
const message = process.argv[2];

(async () => {
	const client = createClient({
		url: 'redis://localhost:6942'
	});

	await client.connect();
	await client.publish('notify', message);
	await client.quit();
})();
