import bcrypt from 'bcryptjs'

export const users = [
    {
        name: 'Admin user',
        email: 'admin@email.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true,
    },
    {
        name: 'Sachin S',
        email: 'sachin@email.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: false,
    },
    {
        name: 'Chris G',
        email: 'chris@email.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: false,
    },
]
