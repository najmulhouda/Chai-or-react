import { Account, Client } from "appwrite";
import config from "../config/config";


export class AuthService  {
    client = new Client()
    account;
    constructor() {
        this.client
            .setEndpoint(config.appWriteUrl) // Your API Endpoint
            .setProject(config.appWriteProjectId); // Your project ID
        this.account = new Account(this.client);
    }
}

const authService = new AuthService()

export default AuthService


