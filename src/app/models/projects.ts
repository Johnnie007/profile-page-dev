import { MultimediaMetadata } from "./mulitmediaMetadata";

export interface Project{
    id: string,
    name: string,
    category: string,
    deployedDate: Date,
    externalLink: string,
    techStack: string[],
    imageMetaData: MultimediaMetadata | null
}