interface User {
    id?: number,
    name?: string,
    date_created?: string,
    last_login?: string,
    inviter?: any[],
    is_staff?: boolean ,
    is_superuser?: boolean,
    is_active?: boolean,
    has_temp_password?: boolean,
    positions?: any[],
    email?: String
}