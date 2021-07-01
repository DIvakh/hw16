const family = {
    mom: {
        name: 'Kate',
        age: 42,
        sister: { name: 'Jinny', age: 36, brother: { name: 'Stewart', age: 31 } },
    },
    dad: { name: 'Robert', age: 45, brother: { name: 'Peter', age: 39 } },
    son: { name: 'George', age: 16 },
};

function deepFreeze(obj) {
    Object.freeze(obj);
    for (const item in obj) {
        const value = obj[item];
        if (typeof value === 'object') {
            deepFreeze(value);
        }
    }
    return obj;
}

deepFreeze(family);