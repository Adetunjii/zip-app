
export interface ICustomer {
    id: string;
    fullName: string;
    phoneNumber: string;
    email: string;
    username: string;
    role: {
        id: string;
        roleName: string;
        createdAt: string;
    }
}