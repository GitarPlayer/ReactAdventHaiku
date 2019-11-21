import Snowman from './snowman-02.svg';
import Bear from './bear.svg';
import Yule from './yule.svg';
import Bell from './bell.svg';

const doors = (() => {
  // create the array of days 1-25
  let doorArray = [
    {
      id: 1,
      image : Snowman,
      haiku: `school is 10 months long
      each day we learn something new
      school can help us grow`
    },
    {
      id: 2,
      image: Bear,
      haiku: "hallo"
    },
    {
      id: 3,
      image: Yule,
      haiku: "hallo"
    },
    {
      id: 4,
      image: Bell,
      haiku: "hallo"
    },
    {
      id: 5,
      image: Snowman,
      haiku: "hallo"
    },
    {
      id: 6,
      image: Bear,
      haiku: "hallo"
    },
    {
      id: 7,
      image: Yule,
      haiku: "hallo"

    },
    {
      id: 8,
      image: Bell,
      haiku: "hallo"
    },
    {
      id: 9,
      image: Snowman,
      haiku: "hallo"
    },
    {
      id: 10,
      image: Bear,
      haiku: "hallo"
    },
    {
      id: 11,
      image: Yule,
      haiku: "hallo"
    },
    {
      id: 12,
      image: Bell,
      haiku: "hallo"
    },
    {
      id: 13,
      image: Snowman,
      haiku: "hallo"
    },
    {
      id: 14,
      image: Bear,
      haiku: "hallo"
    },
    {
      id: 15,
      image: Yule,
      haiku: "hallo"
    },
    {
      id: 16,
      image: Bell,
      haiku: "hallo"
    },
    {
      id: 17,
      image: Snowman,
      haiku: "hallo"
    },
    {
      id: 18,
      image: Bear,
      haiku: "hallo"
    },
    {
      id: 19,
      image: Yule,
      haiku: "hallo"
    },
    {
      id: 20,
      image: Bell,
      haiku: "hallo"
    },
    {
      id: 21,
      image: Snowman,
      haiku: "hallo"
    },
    {
      id: 22,
      image: Bear,
      haiku: "hallo"
    },
    {
      id: 23,
      image: Yule,
      haiku: "hallo"
    },
    {
      id: 24,
      image: Bell,
      haiku: "hallo"
    },
    {
      id: 25,
      image: Snowman,
      haiku: "hallo"
    },
  ];

  // then shuffle the array
  let m = doorArray.length; //25
  let t;
  let i;

  while (m) {
    m--
    i = Math.floor(Math.random() * m);

    t = doorArray[m];
    doorArray[m] = doorArray[i];
    doorArray[i] = t;
  }

  return doorArray;

})();

export default doors;

