import { MultimediaMetadata } from "./mulitmediaMetadata"

export interface Book {
    seriesId: string,
    id: string,
    title: string
    category: string,
    details: string | null,
    format: string,
    price: string | null,
    inventory: number | null,
    printToOrder: string | null,
    pdf: string | null,
    numOfPages: number | null,
    coverImage: MultimediaMetadata | null,
    publishData: Published
}


interface Published{
    isPublished: boolean,
    published_date: Date | null
}
