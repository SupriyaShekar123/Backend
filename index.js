const express = require("express");
const cors = require("cors");
app.use(cors());
const User = require("./models").user;
const toDoList = require("./models").todolists;
const app = express();
const PORT = process.env.PORT || 4000;

app.get("/users", async(req, res) => {
    const users = await User.findAll();
    console.log("what is users", users)
    res.send(users);
});

app.get("/todolists", async(req, res) => {
    const toDoLists = await toDoList.findAll();
    console.log("what are the todolists", toDoLists)
    res.send(toDoLists);
});

app.use(express.json());
app.post("/echo", (req, res) => {
    res.json(req.body);
});

app.post("/users", async(req, res, next) => {
    try {
        const user = await User.create(req.body);
        res.json(user);
    } catch (e) {
        next(e);
    }
});

app.post("/todolists", async(req, res, next) => {
    try {
        const todoLists = await toDoList.create(req.body);
        res.join(todoLists);
    } catch (error) {
        console.log(error);
    }
})

app.get("/users/:userId", async(req, res) => {
    try {
        const userId = (req.params.userId);
        const user = await User.findByPk(userId)
        if (!user) {
            res.status(404).send("User not found")
        } else {
            res.send(user);
        }
    } catch (error) {
        console.log(error)
    }

})

app.get("/todolists/:listId", async(req, res) => {
    try {
        const listId = (req.params.listId);
        const todolists = await toDoList.findByPk(listId)
        if (!todolists) {
            res.status(404).send("todolists not found")
        } else {
            res.send(todolists);
        }
    } catch (error) {
        console.log(error)
    }

})


app.put("/users/:userId", async(req, res, next) => {
    try {
        const userId = parseInt(req.params.userId);
        const userToUpdate = await User.findByPk(userId);
        if (!userToUpdate) {
            res.status(404).send("User not found");
        } else {
            const updatedUser = await userToUpdate.update(req.body);
            res.json(updatedUser);
        }
    } catch (e) {
        next(e);
    }
});

app.put("/todolists/:listId", async(req, res, next) => {
    try {
        const listId = parseInt(req.params.listId);
        const listsToUpdate = await toDoList.findByPk(listId);
        if (!listsToUpdate) {
            res.status(404).send("Lists not found");
        } else {
            const listsToUpdated = await listsToUpdate.update(req.body);
            res.json(listsToUpdated)
        }
    } catch (error) {
        next(error)
    }

})


app.get("/users/:userId/lists", async(req, res, next) => {
    try {
        const userId = parseInt(req.params.userId);
        const user = await User.findByPk(userId, {
            include: [TodoList],
        });
        if (user) {
            res.send(user.TodoLists);
        } else {
            res.status(404).send("User not found");
        }
    } catch (e) {
        next(e);
    }
});



app.listen(PORT, () => console.log(`Server started in port: ${PORT}`));