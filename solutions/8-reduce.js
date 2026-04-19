// BEGIN
export default (obj, prop) => {
    const result = {};

    obj.forEach((obj) => {
        const key = obj[prop];
        if (!result[key]) {
            result[key] = [];
        }
        result[key].push(obj);
    });
    return result;
}
// END