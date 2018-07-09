import { Note } from './note.model';

export class Notebook {
  _id: string;
  public notes: Array<Note>;

  constructor(notebook?: any) {
    if (notebook) {
      let notebookObj: object = notebook || {};
      this._id = notebookObj['_id'];
      this.notes = (notebookObj['notes'] || []).map((note) => new Note(note));
    }
  }
}
