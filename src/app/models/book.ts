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

interface MultimediaMetadata{
    image_public_id: string | null,
    secure_url: string | null,
    file_format: string | null,
    file_size_bytes: number | null
}

interface Published{
    isPublished: boolean,
    publishedDate: Date
}
