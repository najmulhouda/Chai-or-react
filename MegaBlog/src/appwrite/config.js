import { Client, Databases, Storage } from "appwrite";
import conf from '../conf/conf.js';

export class Service {
    cliend = new Client();
    database;
    buket;
    storage;    
    constructor() {
        this.cliend
            .setEndpoint(conf.appWriteUrl)
            .setProject(conf.appWriteProjectId);
        this.database = new Databases(this.cliend);
        this.buket = new Storage(this.cliend);
       
    }
    async createPost({title, slug, content, usedId, featuredImage,status, }) {
        try {
            return await this.database.createDocument(
                conf.appWriteDatabaseId,
                conf.appWriteCollectionId,
                slug, 
                {title, content, usedId, featuredImage, status},
            )
        } catch (error) {
            console.log("Appwrite serive :: createPost :: error", error);
        }
    }
    async updatePost(slug,{title,  content, featuredImage,status, }) {
        try {
            return await this.database.updateDocument(
                conf.appWriteDatabaseId,
                conf.appWriteCollectionId,
                slug, 
                {title, content,  featuredImage, status},
            )
        } catch (error) {
            console.log("Appwrite serive :: upDatePost :: error", error);
        }
    }
    async deletePost(slug) {
        try {
             await this.database.deleteDocument(
                conf.appWriteDatabaseId,
                conf.appWriteCollectionId,
                slug
                
            )
            return true
        } catch (error) {
            console.log("Appwrite serive :: deletePost :: error", error);
            return false
        }

    }
}


const serive = new Service();       
export default Service;