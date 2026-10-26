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
    coverImage: string | null,
    publishData: Published
}

interface Published{
    isPublished: boolean,
    publishedDate: Date
}
