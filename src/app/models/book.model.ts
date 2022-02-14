export interface Book {
    bookName: string,
    author: string, 
    gender: GenderEnum, 
    publishingCompany: string,
    amount: number,
    id: number
}

export enum GenderEnum {
    ACAO = 1,
    FICCAO = 2,
    FANTASIA = 3,
    HISTORIA = 4,
    ROMANCE = 5,
    AUTO_AJUDA = 6,
    CUNIARIO = 7
}
    

