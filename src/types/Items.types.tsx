export type ItemsType = {
    id: number;
    name: string;
    year: number;
    color: string;
    pantone_value: string;
}
export type ErrorType = {
    loading: boolean;
    notFound: boolean;
    server: boolean;
}


type ModalProps = {
    isOpen: boolean;
    onClose: boolean;
    selected: object;
}