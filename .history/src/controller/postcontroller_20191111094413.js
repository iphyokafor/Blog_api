import express from 'express';
import Posts from '../model/Postmodel';

export default {
    addPost: async(req, res) => {
        const post = new Posts({
            title: req.body.title,
            description: req.body.description,
            image: req.body.image,
            author: req.body.author
        });

        try {
            const savedPost = await post.save();
            res.status(201).json({
                message: 'Post added succesfully',
                savedPost: savedPost
            });
        } catch (err) {
            res.json({
                message: err
            });
        }

    },
    getAllPost: async(req, res) => {
        try {
            const posts = await Posts.find();
            res.json(posts);
        } catch (err) {
            res.json({
                message: err
            });
        }
    },
    getOne: async(req, res) => {
        try {
            const post = await Posts.findById(req.params.postId);
            res.json(post);
        } catch (err) {
            res.json({
                message: err
            });
        }
    },
    deletePost: async(req, res) => {
        try {
            const removedPost = await Posts.remove({ _id: req.params.postId });
            res.json(removedPost);
        } catch (err) {
            res.json({
                message: err
            });
        }
    },
    updatePost: async(req, res) => {
        try {
            const updatedPost = await Posts.updateOne({ _id: req.params.postId }, { $set: { title: req.body.title, description: req.body.description } });
            res.json({
                message: 'Post updated successfully',
                updatedPost
            });
        } catch (err) {
            res.json({
                message: err
            });
        }
    }
}