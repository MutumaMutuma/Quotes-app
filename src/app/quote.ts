export class Quote {
  public showInfo: boolean;
    constructor(public id: number, public quote: string , public name: string) {
      this.showInfo = false;
    }
}
