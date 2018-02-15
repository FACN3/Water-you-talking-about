// userChoice is how many activities have been clicked

export default function calculatorLogic(data, userChoice) {
  return Object.keys(userChoice).reduce(
    (acc, cur) => {
      data.activities.forEach((activity) => {
        if (activity.name === cur) {
          acc.liters += activity.liters * userChoice[cur];
          acc.cost += activity.cost * userChoice[cur];
        }
      });
      return acc;
    },
    { liters: 0, cost: 0 },
  );
}
// .toPrecision(6) <= This limits the digits to 0.12345 (Don't delete, still need to figure out where to put it)