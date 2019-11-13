import express from 'express';
import Posts from '../controller/postcontroller';
import verify from '../middleware/verifyToken';
const router = express.Router();

router.get('/', (req, res, next) => {
    res.send('Welcome to my Blog');
});

router.post('/posts', verify, Posts.addPost);
router.get('/posts', Posts.getAllPost);
router.get('/:postId', Posts.getOne);
router.delete('/posts/:postId', Posts.deletePost);
router.patch('/posts/:postId', Posts.updatePost);

// router.get('/posts', (req, res, next) => {
//     res.send('Welcome to posts');
// });

// router.post('/posts', (req, res, next) => {
//     console.log(req.body);
// });


export default router;