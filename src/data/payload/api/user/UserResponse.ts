export interface GetUsersResponse {
    data: UserResponseData[];
}

interface UserResponseData {
    id: number;
    name: string;
    email: string;
    address: UserAddress;
    phone: string;
    city: string;
    createdAt: string;
    updatedAt: string;
}

interface UserAddress {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
}
