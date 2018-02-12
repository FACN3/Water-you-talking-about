import data from './../fixtures/data.js';

const liter = 1;
const cost = liter * 0.0089;

// userChoice is how many activities have been clicked

function calculator(data, userChoice) {
  const output = {
    liters: 0,
    cost: 0,
  };

  for (var key in userChoice) {
    data.activities.forEach((activity) => {
      if (activity.name === key) {
        const liters = activity.liters * userChoice[key];
        output.liters += liters;
        const cost = activity.cost * userChoice[key];
        output.cost += cost;
      }
    });
  }
  return output;
}

export default calculator;
