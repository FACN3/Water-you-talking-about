import data from './../fixtures/data';

// userChoice is how many activities have been clicked

function calculator(userChoice) {
  const output = {
    liters: 0,
    cost: 0,
  };

  Object.keys(userChoice).forEach((choice) => {
    data.activities.forEach((activity) => {
      if (activity.name === choice) {
        output.liters += activity.liters * userChoice[choice];
        output.cost += activity.cost * userChoice[choice];
      }
    });
  });

  return output;
}

export default calculator;
