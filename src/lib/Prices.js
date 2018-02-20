export default function priceLogic(prices, userClick) {
  let info;
  prices.info.forEach((information) => {
    if (information.name === userClick) {
      info = information;
    }
  });
  return info;
}
