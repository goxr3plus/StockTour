const translate = (a, b) => {
  return 'a';
};

const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export { sleep, translate };
