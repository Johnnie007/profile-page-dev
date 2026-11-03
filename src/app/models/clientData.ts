import { Book } from './book';
import { Project } from './projects';
import {UserDetails} from './userDetails'

export interface ClientData{
    userDetails: UserDetails,
    projects: Project[];
    books: Book[];
}