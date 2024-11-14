import bcrypt from 'bcryptjs';

const users = [
    {
        name: 'Adim user',
        email: 'admin@email.com',
        pasword: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'John Doe',
        email: 'John@email.com',
        pasword: bcrypt.hashSync('123456', 10),
        isAdmin: false
    },
    {
        name: 'Jane Doe',
        email: 'jane@email.com',
        pasword: bcrypt.hashSync('123456', 10),
        isAdmin: false
    },
];

export default users;