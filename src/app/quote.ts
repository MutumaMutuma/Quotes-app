export class Quote {
  public showInfo: boolean;
    constructor(public id: number, public quote: string , public name: string, public postDate:Date, public upVotes:number,public downVotes:number) {
      this.showInfo = false;
    }
}
