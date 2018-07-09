export class Note {
  _id: string;
  public text: string;
  public tags: Array<string>;
  public isPrivate: boolean;
  public reviewers: Array<string>;
  public dtCreated: Date;
  public creator: string;
  public dtEdited: Date;
  public editor: string;

  constructor(note?: any) {
    if (note) {
      let noteObj: object = note || {};
      this._id = noteObj['_id'];
      this.tags = noteObj['tags'];
      this.isPrivate = noteObj['isPrivate'];
      this.reviewers = noteObj['reviewers'];
      this.dtCreated = noteObj['dtCreated'];
      this.creator = noteObj['creator'];
      this.dtEdited = noteObj['dtEdited'];
      this.editor = noteObj['editor'];
    }
  }
}
