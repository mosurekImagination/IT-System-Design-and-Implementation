import { KnowledgeArea } from './KnowledgeArea';

export interface Lecturer {
  id: number;
  name : string;
  surname: string;
  title: string;
  pesel: number;
  knowledgeArea : Array<KnowledgeArea>
}
