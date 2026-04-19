// BEGIN
const getChildren = (users) => {
    const childrenArr = users.map((user) => user.children);
    return childrenArr.flat();
};

export default getChildren;
// END