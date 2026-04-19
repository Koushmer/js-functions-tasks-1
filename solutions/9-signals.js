import get from 'lodash/get.js';

const freeEmailDomains = [
  'gmail.com',
  'yandex.ru',
  'hotmail.com',
  'yahoo.com',
];

// BEGIN
const getFreeDomCount = (emails) => {
  const result = {};
  
  emails.forEach((email) => {
    const parts = email.split('@');
    const dom = parts[1];

    if (freeEmailDomains.includes(dom)) {
      result[dom] = get(result, dom, 0) + 1;
    }
  });

  return result;
};

export default getFreeDomCount;
// END