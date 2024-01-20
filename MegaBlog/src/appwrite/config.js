import { Client, Databases, Query, Storage } from "appwrite";
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
    async getPost(slug) {
        try {
            return await this.database.getDocument(
                conf.appWriteDatabaseId,
                conf.appWriteCollectionId,
                slug
            )
        } catch (error) {
            console.log("Appwrite serive :: getPost :: error", error);
            return false
        }
    }
    async getPosts(queries = [Query.equal("status", "active")]) {
        try {
            return await this.database.listDocuments(
                conf.appWriteDatabaseId,
                conf.appWriteCollectionId,
                queries
            )
        } catch (error) {
            console.log("Appwrite serive :: getPosts :: error", error);
            return false
        }
        
    }
    //file upload service
    async uploadFile(file) {
        try {
            return await this.buket.createFile(
                conf.appWriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite serive :: uploadFile :: error", error);
            return false
        }
    }
    async deleteFile(fileId) {
        try {
            await this.buket.deleteFile(
                conf.appWriteBucketId,
                fileId
            )
            return true
        } catch (error) {
            console.log("Appwrite serive :: deleteFile :: error", error);
            return false
        }
    }
    
    getFilePreview(fileId) {
        this.buket.getFilePreview(
            conf.appWriteBucketId,
            fileId
        )
    }
}


const serive = new Service();       
export default Service;