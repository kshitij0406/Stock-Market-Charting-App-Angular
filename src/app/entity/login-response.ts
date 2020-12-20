export class LoginResponse {
    authenticationToken!: string;
    refreshToken!: string;
    expiesAt!: Date;
    username!: string;
}
