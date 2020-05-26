const User = require("./models").user;
//console.log("users", User)
const TodoItem = require("./models").todoItem;

async function usersData() {
    try {
        const allUsers = await User.findAll();
        console.log("The users are", allUsers)
        return allUsers.map(user => user.get({ plain: true }));

    } catch (error) {
        console.log("The error", error)
    }


}

usersData().then(result => console.log("Get Users", result))


async function AllTodoItems() {
    try {
        const allTodoItems = await TodoItem.findAll();
        return allTodoItems.map(item => item.get({ plain: true }));
    } catch (error) {
        console.log("The error of all Items is", error)
    }
}

AllTodoItems().then(result => console.log("The todolistItems", result));

async function userByPk(key) {
    try {
        const user = await User.findByPk(key);
        return user ? user.get({ plain: true }) : "Not found!";
    } catch (error) {

    }
}

//userByPk(2).then(result => console.log(result));

async function newUser({ name, email, phone }) {
    try {
        const newUser = await User.create({ name, email, phone });
        return newUser.get({ plain: true });
    } catch (error) {
        console.log(error)
    }
}

// newUser().then(result => console.log(result));

async function importantTodos() {
    try {


        const todos = await TodoItem.findAll({ where: { important: true } });
        return todos.map(todo => todo.get({ plain: true }));
    } catch (errror) {
        console.log(error)
    }
}

//importantTodos().then(result => console.log(result));