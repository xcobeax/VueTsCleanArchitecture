export class Role {
    private id_role: number;
    private role_name: string;
    private created_at: string;
    private updated_at: string;
    private access: object;

    constructor(id_role: number, role_name: string, created_at: string, updated_at: string, access: object) {
        this.id_role = id_role;
        this.role_name = role_name;
        this.created_at = created_at;
        this.updated_at = updated_at;
        this.access = access;
    }
}
export class Paginated {
    private from: number;
    private to: number;
    private last_page: number;
    private per_page: number;
    private total: number;

    constructor(from: number, to: number, last_page: number, per_page: number, total: number ) {
        this.from = from;
        this.to = to;
        this.last_page = last_page;
        this.per_page = per_page;
        this.total = total;
    }
}
