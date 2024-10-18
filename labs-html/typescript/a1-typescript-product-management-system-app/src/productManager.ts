
import { formdetails } from "./product"

export class Datadetails
{
    private details:formdetails[]=[];

    addData(detail:formdetails):void
    {
        
        this.details.push(detail);
    }

    listData():formdetails[]
    { 
        return this.details;
    }

    removeData(id:number):void
    {
        this.details=this.details.filter(detail=>detail.id!==id);
        console.log("product with id removed ",id);
    }

    searchData(id:number)
    { 
        console.log(this.details.find(detail=>detail.id=id));
       // console.log("particular id is searched i.e ",id);
        
    }

}