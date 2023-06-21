import takeAChance from './take-a-chance.js';
const tookAChance = takeAChance('Eugene Park');
tookAChance
  .then((string) => {
    console.log(string);
  })
  .catch((error) => {
    console.log(error.message);
  });
