import { Notebook } from './notebook.model';

export class User {
  _id: string;
  public nickname: string;
  public password: string;
  public notebook: Notebook;

  constructor(user?: any) {
    if (user) {
      let userObj: object = user || {};
      this._id = userObj['_id'];
      this.nickname = userObj['nickname'];
      this.password = userObj['password'];
      this.notebook = userObj['notebook'] ? new Notebook(userObj['notebook']) : null;
    }
  }
}