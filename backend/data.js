import bcrypt from 'bcrypt';

const data = {
    users: [
        {
            name: 'Manishankar Vakta',
            email: 'manishankarvakta@gmail.com',
            password: bcrypt.hashSync('12345', 8),
            type: 'admin',
            status: true
        },
        {
            name: 'Pos User',
            email: 'pos@gmail.com',
            password: bcrypt.hashSync('12345', 8),
            type: 'pos',
            status: true
        },
        {
            name: 'Manager',
            email: 'manager@gmail.com',
            password: bcrypt.hashSync('12345', 8),
            type: 'manager',
            status: true
        }
    ]
}



export default data;