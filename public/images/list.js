import Snowman from './snowman-02.svg';
import Bear from './bear.svg';
import Yule from './yule.svg';
import Bell from './bell.svg';

const doors = (() => {
	// create the array of days 1-25
	let doorArray = [
		{
			id: 1,
			image: Snowman,
			haiku: `There are only 1 types of people in the world
        Those who understand binary, and those who don't`
		},
		{
			id: 2,
			image: Bear,
			haiku: new Array(
				'There are only 2 types of people in the world:',
				"Those who understand binary, and those who don't"
			)
		},
		{
			id: 3,
			image: Yule,
			haiku: new Array(
				'There are only 3 types of people in the world:',
				"Those who understand binary, and those who don't"
			)
		},
		{
			id: 4,
			image: Bell,
			haiku: new Array(
				'There are only 4 types of people in the world:',
				"Those who understand binary, and those who don't"
			)
		},
		{
			id: 5,
			image: Snowman,
			haiku: new Array(
				'There are only 5 types of people in the world:',
				"Those who understand binary, and those who don't"
			)
		},
		{
			id: 6,
			image: Bear,
			haiku: new Array(
				'There are only 6 types of people in the world:',
				"Those who understand binary, and those who don't"
			)
		},
		{
			id: 7,
			image: Yule,
			haiku: new Array(
				'There are only 7 types of people in the world:',
				"Those who understand binary, and those who don't"
			)
		},
		{
			id: 8,
			image: Bell,
			haiku: new Array(
				'There are only 8 types of people in the world:',
				"Those who understand binary, and those who don't"
			)
		},
		{
			id: 9,
			image: Snowman,
			haiku: new Array(
				'There are only 9 types of people in the world:',
				"Those who understand binary, and those who don't"
			)
		},
		{
			id: 10,
			image: Bear,
			haiku: new Array(
				'There are only 10 types of people in the world:',
				"Those who understand binary, and those who don't"
			)
		},
		{
			id: 11,
			image: Yule,
			haiku: new Array(
				'There are only 11 types of people in the world:',
				"Those who understand binary, and those who don't"
			)
		},
		{
			id: 12,
			image: Bell,
			haiku: new Array(
				'There are only 12 types of people in the world:',
				"Those who understand binary, and those who don't"
			)
		},
		{
			id: 13,
			image: Snowman,
			haiku: new Array(
				'There are only 13 types of people in the world:',
				"Those who understand binary, and those who don't"
			)
		},
		{
			id: 14,
			image: Bear,
			haiku: new Array(
				'There are only 14 types of people in the world:',
				"Those who understand binary, and those who don't"
			)
		},
		{
			id: 15,
			image: Yule,
			haiku: new Array(
				'There are only 15 types of people in the world:',
				"Those who understand binary, and those who don't"
			)
		},
		{
			id: 16,
			image: Bell,
			haiku: new Array(
				'There are only 16 types of people in the world:',
				"Those who understand binary, and those who don't"
			)
		},
		{
			id: 17,
			image: Snowman,
			haiku: new Array(
				'There are only 17 types of people in the world:',
				"Those who understand binary, and those who don't"
			)
		},
		{
			id: 18,
			image: Bear,
			haiku: new Array(
				'There are only 18 types of people in the world:',
				"Those who understand binary, and those who don't"
			)
		},
		{
			id: 19,
			image: Yule,
			haiku: new Array(
				'There are only 19 types of people in the world:',
				"Those who understand binary, and those who don't"
			)
		},
		{
			id: 20,
			image: Bell,
			haiku: new Array(
				'There are only 20 types of people in the world:',
				"Those who understand binary, and those who don't"
			)
		},
		{
			id: 21,
			image: Snowman,
			haiku: new Array(
				'There are only 21 types of people in the world:',
				"Those who understand binary, and those who don't"
			)
		},
		{
			id: 22,
			image: Bear,
			haiku: new Array(
				'There are only 22 types of people in the world:',
				"Those who understand binary, and those who don't"
			)
		},
		{
			id: 23,
			image: Yule,
			haiku: new Array(
				'There are only 23 types of people in the world:',
				"Those who understand binary, and those who don't"
			)
		},
		{
			id: 24,
			image: Bell,
			haiku: new Array(
				'There are only 24 types of people in the world:',
				"Those who understand binary, and those who don't"
			)
		},
		{
			id: 25,
			image: Snowman,
			haiku: new Array(
				'There are only 25 types of people in the world:',
				"Those who understand binary, and those who don't"
			)
		}
	];

	// then shuffle the array
	// let m = doorArray.length; //25
	// let t;
	// let i;

	// while (m) {
	//   m--
	//   i = Math.floor(Math.random() * m);

	//   t = doorArray[m];
	//   doorArray[m] = doorArray[i];
	//   doorArray[i] = t;
	// }

	return doorArray;
})();

export default doors;
