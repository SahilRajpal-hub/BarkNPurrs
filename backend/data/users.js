import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'user 1',
    email: 'user1@example.com',
    password: bcrypt.hashSync('12345', 10),
  },
  {
    name: 'User 2',
    email: 'user2@example.com',
    password: bcrypt.hashSync('1234', 10),
  },
]

export default users
