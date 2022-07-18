

var number = 0;
while (number < 50) {
  number++;
  let message = "";
  if (number % 3 === 0) message += "Frontend";
  if (number % 5 === 0) message += "Backend";
  console.log(message || number);

  const splitByNumber = {
    [Symbol.split](str) {
      let num = 1;
      let pos = 0;
      const result = [];
      while (pos < str.length) {
        const matchPos = str.indexOf(num, pos);
        if (matchPos === -1) {
          result.push(str.substring(pos));
          break;
        }
        result.push(str.substring(pos, matchPos));
        pos = matchPos + String(num).length;
        num++;
      }
      return result;
    },
  };

  const myString = message;
  console.log(myString.split(splitByNumber));
}


