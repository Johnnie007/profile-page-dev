export interface BookSeries{
    id: string,
    seriesName: string,
    books: Book[]
}

export interface Book {
    id: string,
    title: string
    category: string,
    details: string | null,
    format: string,
    price: string | null,
    inventory: number | null,
    printToOrderLink: string | null,
    pdfVersion: string | null,
    pages: number | null,
    cover: string | null,
    published: Published
}

interface Published{
    isPublished: boolean,
    publishedDate: Date
}
