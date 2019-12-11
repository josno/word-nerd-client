const STORE = {
	entryinfo: {
		username: 'demo',
		password: 'demo123'
	},
	savedGames: [
		{
			game_id: 1,
			title: 'Animals',
			words: [
				'cat',
				'dog',
				'bird',
				'horse',
				'fish',
				'puppies',
				'pig',
				'tiger',
				'koala',
				'butterfly',
				'bear',
				'ardamillo'
			],
			date_created: new Date('December 17, 2019 03:24:00')
		},
		{
			game_id: 2,
			title: 'Colors',
			words: [
				'blue',
				'green',
				'red',
				'pink',
				'white',
				'purple',
				'fuschia',
				'yellow',
				'black',
				'gray',
				'rust',
				'silver',
				'gold'
			],
			date_created: new Date('September 4, 2018 13:30:00')
		}
	]
};

export default STORE;
