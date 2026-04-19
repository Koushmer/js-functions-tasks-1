const run = (text) => {
    // BEGIN
    const takeLast = (str, length) =>{
      if (str === '' || str.length < length) {
        return null;
      }

      const result = str.slice(-length);
      return result.split('').reverse().join('');
    };
    // END
  
    return takeLast(text, 4);
  };
  
export default run;