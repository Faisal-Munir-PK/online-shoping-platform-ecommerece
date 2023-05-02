export interface IUserLogin {
    email: string | null
    password: string | number | null
}

export interface IProfile {
    first_name: string
    last_name: string
    email: string
    phone: number | null
    password: string
    confirm_password?: string
}