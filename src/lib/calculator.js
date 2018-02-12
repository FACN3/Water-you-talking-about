// userChoice is how many activities have been clicked

export default function calculator(data, userChoice) {
  return Object.keys(userChoice).reduce(
    (acc, cur) => {
      data.activities.forEach((activity) => {
        if (activity.name === cur) {
          const liters = activity.liters * userChoice[cur];
          acc.liters += liters;
          const cost = activity.cost * userChoice[cur];
          acc.cost += cost;
        }
      });
      return acc;
    },
    { liters: 0, cost: 0 },
  );
}
