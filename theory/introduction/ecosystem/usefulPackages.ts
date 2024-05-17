import {express} from 'express';
import {axios} from 'axios';

const app = express();

app.get('/users', async (req, res) => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        const users = response.data;
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch users' });
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});