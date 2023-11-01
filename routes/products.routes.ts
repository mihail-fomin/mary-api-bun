import { Router } from 'express';
import { ProductController } from '../controllers';


const router: Router = Router();

router.post('/product', ProductController.createProduct)
router.get('/product', ProductController.getProducts)
router.get('/product/:id', ProductController.getOneProduct)
router.put('/product', ProductController.updateProduct)
router.delete('/product', ProductController.deleteProduct)


export default router