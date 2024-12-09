import express from 'express';
import bodyParser from 'body-parser';
import router from './routes';
import environment from './utils/environment';

const app = express();
const PORT = environment.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', router);

app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running on http://localhost:${PORT}`);
});