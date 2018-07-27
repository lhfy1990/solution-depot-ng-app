export class Problem {
  _id: string;
  public name: string;
  public href: string;
  public tags: Array<string>;
  public abstract: string;
  public assumptions: Array<string>;
  public edgecases: Array<string>;
  public solutions: Array<Solution>;
  public dtCreated: Date;
  public creator: string;
  public dtEdited: Date;
  public editor: string;

  constructor(problem?: any) {
    if (problem) {
      let obj: object = problem || {};
      this._id = obj['_id'];
      this.tags = obj['name'];
      this.tags = obj['href'];
      this.tags = obj['tags'] || [];
      this.tags = obj['abstract'];
      this.tags = obj['tags'];
      this.tags = obj['tags'];
      this.tags = obj['tags'];
    }
  }
}
