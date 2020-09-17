import { mecab } from './mecab';

async function main() {
	const x = await mecab('本日は\n晴天なり', 'mecab', '/usr/lib/x86_64-linux-gnu/mecab/dic/mecab-ipadic-neologd');
	console.log(JSON.stringify(x, null, 2));
}

main();
