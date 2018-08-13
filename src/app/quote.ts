export class Quote {
  public showInfo: boolean;
    constructor(public id: number, public quote: string , public name: string, public user:string,
      
      
      public upVotes:number,public downVotes:number) {
      this.showInfo = false;
    }
}
