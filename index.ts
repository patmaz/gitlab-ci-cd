import axios from 'axios';

axios('https://jsonplaceholder.typicode.com/todos/1').then(
    (res: any) => console.log(res.data)
);