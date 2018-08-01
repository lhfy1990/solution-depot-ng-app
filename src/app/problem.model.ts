import { Solution } from './solution.model';

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
      this.name = obj['name'];
      this.href = obj['href'];
      this.tags = obj['tags'] || [];
      this.abstract = obj['abstract'];
      this.assumptions = obj['assumptions'] || [];
      this.edgecases = obj['edgecases'] || [];
      this.solutions = (obj['solutions'] || []).map((solution) => new Solution(solution));;
      this.dtCreated = obj['dtCreated'];
      this.creator = obj['creator'];
      this.dtEdited = obj['dtEdited'];
      this.editor = obj['editor'];
    }
  }
}
