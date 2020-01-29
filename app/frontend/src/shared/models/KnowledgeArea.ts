import { Lecturer } from './Lecturer';

export interface KnowledgeArea{
    id: number;
    name: string;
    lecturers: Array<Lecturer>
}