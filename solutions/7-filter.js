// BEGIN
const getChildrenFriends = (users) => {
    const friends = users.map((user) => user.friends).flat();
    return friends.filter((friend) => friend.gender === 'female');
};

export default getChildrenFriends;
// END