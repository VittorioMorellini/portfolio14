export interface Principal {
    id: number;
    insertDate: string;
    updateDate: string;
    name: string | null;
    username: string | null;
    mail: string | null;
    password: string | null;
    phone: string | null;
    surname: string | null;
    address?: string;
    number?: string;
    cap?: string;
    city?: string;
    country?: string;
};
  