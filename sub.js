#!/usr/bin/env node
import {createClient} from 'redis';
import boxen from 'boxen';
const listener = message => {
	console.log(boxen(message, {
		borderColor: 'green',
		borderStyle: 'round',
		padding: {
			left: 1, right: 1
		}
	}));
};

(async () => {
	const client = createClient({
		url: 'redis://localhost:6942'
	});

	await client.connect();
	console.log('connected');

	const subscriber = client.duplicate();
	await subscriber.connect();
	subscriber.subscribe('notify', listener);
	console.log('subscribed');
})();
