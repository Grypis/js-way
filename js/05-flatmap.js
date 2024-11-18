/* const arr = [1, 2, [3, [4, [5], 6], 7], 8, 9];
const result = arr.flat(1);
console.log(result); */

const tweets = [
  {
    id: '000',
    likes: 5,
    tags: ['js', 'nodejs'],
  },
  {
    id: '000',
    likes: 5,
    tags: ['js', 'nodejs'],
  },
  {
    id: '000',
    likes: 5,
    tags: ['js', 'nodejs'],
  },
  {
    id: '000',
    likes: 5,
    tags: ['js', 'nodejs'],
  },
  {
    id: '000',
    likes: 5,
    tags: ['js', 'nodejs'],
  },
  {
    id: '000',
    likes: 5,
    tags: ['js', 'nodejs'],
  },
];
// const tags = tweets.map(tweet => tweet.tags).flat(1);
// console.log(tags);
const tags = tweets.flatMap(tweet => tweet.tags);
console.log(tags);
