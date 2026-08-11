export interface Book {
    id: string,
    title: string
    series: string,
    category: string,
    details: string | null,
    cost: string | null,
    releaseDate: Date | null,
    inventory: number | null,
    printToOrderLink: string | null,
    pages: number | null,
    image: string | null,
}
