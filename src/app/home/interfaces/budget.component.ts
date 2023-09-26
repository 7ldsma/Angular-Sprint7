export interface Budget {
    name?: string;
    client?: string;
    web?: {
        enabled: boolean;
        pages: number;
        languages: number
    };
    consultoria?: boolean;
    adds?: boolean;
    total?: number;
    fecha: Date;
}