import {Router, Request, Response} from 'express';
import * as excel from 'excel4node';
import {UserService} from '../shared/user';

const router: Router = Router();

router.get('/excel', (req:Request, res:Response) => {
    
    UserService.list( (err, result)=>{
        var wb = new excel.Workbook();
        var ws = wb.addWorksheet('All User');
        if(err){
            res.json(err);
        }else{
            for(let i=0; i<result.length; i++){
                ws.cell(i+1, 1 ).string(result[i].userCode);
                ws.cell(i+1, 2 ).string(result[i].userTitle);
                ws.cell(i+1, 3 ).string(result[i].userName);
                ws.cell(i+1, 4 ).string(result[i].userLastName);
                ws.cell(i+1, 5 ).string(result[i].userEmail);
                ws.cell(i+1, 6 ).string(result[i].userTel);
            }
            wb.write("issue.xlsx", res);
        }
        
    });
});

export const IssueController: Router = router;