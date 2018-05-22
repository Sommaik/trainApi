import * as express from 'express';
import * as bodyParser from 'body-parser';
import { Server } from 'http';
import * as cors from 'cors';
import { UserController } from './controllers/user';
import * as config from 'config';
import { LoginControler } from './controllers/login';

const app = express();
const server = new Server(app);
let port = server.listen(config.get("port"));
console.log(`server start on port ${port.address()["port"]}`);

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/api/v1/user', UserController);
app.use('/api/v1/login', LoginControler);
