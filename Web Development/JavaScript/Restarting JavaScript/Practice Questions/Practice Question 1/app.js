const pen = {
  name: "Parker Jotter",
  color: "black",
  rating: 5,
  numberOfRatings: 7002,
  isDealOfTheDay: false,
  MRP: 285,
  discount: 5,
};

pen.sellingPrice = pen.MRP - (pen.MRP * pen.discount) / 100;
