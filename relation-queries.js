const { user, todoitem, todolists } = require("./models");

async function listsWithUsers() {
    const lists = await todolists.findAll({
        include: [user],
    });

    return lists.map(list => list.get({ plain: true }));
}

//listsWithUsers().then(lists => console.log(lists));
//console.log("Users", user, todolists, todoitem)


async function getUsers() {
    const allUsers = await user.findAll(id, {
        include: { model: todolists, attributes: ["name"] },
    });
    return allUsers.map(user => user.get({ plain: true }));
}

//getUsers().then(users => console.log(users));


async function getUserWithList(id) {
    const result = await user.findByPk(id, { include: [todolists] });
    return result.get({ plain: true });
}

getUserWithList(2).then(user => console.log("user by id with lists", user));