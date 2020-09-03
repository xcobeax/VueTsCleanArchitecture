export interface GetRoleResponse {
    data: RoleResponseData[];
}

interface RoleResponseData {
    id_role: number;
    role_name: string;
    access: RoleAccess;
    created_at: string;
    updated_at: string;
}

interface RoleAccess {
    dashboard: boolean;
    user_list: boolean;
    notification: boolean;
}
