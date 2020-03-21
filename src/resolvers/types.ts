export interface Student {
  id: number;
  firstName: string;
  surname: string;
  avatar: string;
}

export interface BookEntry {
  subject: Subject;
  scores: number[];
  id: number;
}

export interface Subject {
  id: number;
  name: string;
}
