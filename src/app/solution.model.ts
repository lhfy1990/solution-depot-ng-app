export class Solution {
  _id: string;
  public language: string;
  public code: string;
  public complexity: string;
  public explanation: string;
  public tags: Array<string>;
  public isPrivate: boolean;
  public reviewers: Array<string>;
  public dtCreated: Date;
  public creator: string;
  public dtEdited: Date;
  public editor: string;

  constructor(solution?: any) {
    if (solution) {
      let obj: object = solution || {};
      this._id = obj['_id'];
      this.language = obj['language'];
      this.code = obj['code'];
      this.complexity = obj['complexity'];
      this.explanation = obj['explanation'];
      this.tags = obj['tags'] || [];
      this.isPrivate = obj['isPrivate'];
      this.reviewers = obj['reviewers'] || [];
      this.dtCreated = obj['dtCreated'];
      this.creator = obj['creator'];
      this.dtEdited = obj['dtEdited'];
      this.editor = obj['editor'];
    }
  }
}
