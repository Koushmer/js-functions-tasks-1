// BEGIN
export default (...dates) => {
    const result = dates.map((date) => new Date(...date).toDateString());
    return result;
};
// END