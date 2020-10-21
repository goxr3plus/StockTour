const translate = (a, b) => {
  return b;
};

const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export { sleep, translate };
