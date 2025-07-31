import { Router } from 'express'
import { ImageController } from '../controllers/imageController'


export class ImageRoutes {
    static get routes(): Router {
        const router= Router()
        const controller=new ImageController()
        
        router.post("/images", controller.upload);
        router.get("/files", controller.getListFiles);
        router.get("/files/:name", controller.download);
        return router
    }
    
}