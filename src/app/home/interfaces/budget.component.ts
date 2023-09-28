export interface Budget {
    name?: string;
    client?: string;
    web?: boolean;
    consultoria?: boolean;
    adds?: boolean;
    total?: number;
    fecha: Date;
}


export interface Webservice {
    pages?: any;
    languages?: any;

}