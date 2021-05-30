export class Task {

   public id: number;
   public date: string;
   public done: boolean;
   public taskName: string;

   constructor(){
       console.log(this.taskName);
       console.log("done :");
       console.log(this.done);
   }
}
