import { Account, Client, Id } from "appwrite";
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
    async createAccount(email, password , name) {
        try {   
            const useAccount = await this.account.create(Id.unique(), email, password, name);
            if (useAccount) {
                //call another method
                return this.login(email, password)
            } else {
                return useAccount
            }
        } catch (error) {
            throw error
        }
    }
    async login(email, password) {
        try {
            return await this.account.createEmailSession(email, password);
           
        } catch (error) {
            throw error
        }
    }
    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite service error :: getCurrentUser ::error", error)
        }
        return null
    }
    async logout() {
        try {
            return await this.account.deleteSession("current");
        } catch (error) {
            console.log("Appwrite service error :: logout ::error", error)
        }
    }


}

const authService = new AuthService()

export default AuthService
