import {Router, Request, Response} from 'express';
import { mysqlDB } from '../shared/mysql-db';
import { jwt } from '../shared/auth';

const router = Router();

router.get('', jwt.authenticate(), (req: Request, res: Response) => {
    mysqlDB.query('select * from sc_user', (err, result)=>{
        res.json(result);
    });
});

export const UserController: Router = router;