const translate = (a, b) => {
  return b;
};

const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const convertToCurrency = (money, currency, locale) => {
  try {
    return new Intl.NumberFormat(locale ? locale : 'de-DE', {
      style: 'currency',
      currency: locale ? currency : 'USD',
    }).format(money);
  } catch (error) {
    console.log(error);
    return money;
  }
};

export { sleep, translate, convertToCurrency };
