import {Router, Request, Response} from 'express';
import { mysqlDB } from '../shared/mysql-db';

const router = Router();

router.get('', (req: Request, res: Response) => {
    mysqlDB.query('select * from sc_user', (err, result)=>{
        res.json(result);
    });
});

export const UserController: Router = router;