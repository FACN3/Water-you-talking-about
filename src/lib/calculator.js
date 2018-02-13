// userChoice is how many activities have been clicked

export default function calculator(data, userChoice) {
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
