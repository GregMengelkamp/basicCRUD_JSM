import { v4 as uuid } from 'uuid';

let users = [];

export const getUsers = (req, res) => {
    console.log(`Users in the database: ${users}`);
    res.send(users);
}

export const createUser = (req, res) => {   
    const user = req.body;

    users.push({...user, id: uuid()});
    
    console.log(`User [${user.firstName}] added to the database.`);
    res.send(`User [${user.firstName}] added to the database.`);
};

export const getUser = (req, res) => {
    res.send(req.params.id)
};

export const deleteUser = (req, res) => { 
    users = users.filter((user) => user.id !== req.params.id);

    console.log(`User with id ${req.params.id} has been deleted`);
    res.send(`User with id ${req.params.id} has been deleted`);
};

export const updateUser =  (req,res) => {
    const user = users.find((user) => user.id === req.params.id);
    
    if (req.body.firstName) {user.firstName = req.body.firstName}
    if (req.body.lastName) {user.lastName = req.body.lastName}
    if (req.body.age) {user.age = req.body.age}

    console.log(`User with the id ${req.params.id} has been updated`)
    res.send(`User with the id ${req.params.id} has been updated`)
};