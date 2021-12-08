"use strict";

import graph from "fbgraph";
import { Response, Request, NextFunction } from "express";
import { UserDocument } from "../models/User";
import { Post } from "../models/post.model"
import { uuid } from 'uuidv4';


/**
 * List of API examples.
 * @route GET /api
 */
export const getApi = async (req: Request, res: Response) => {
    console.log("calling getAllPosts")
    await Post.
        find({}).
        limit(100).exec().then(c => {
            res.json(c);
        })
};

//CRUD
//creating the post from json body
export const createPost = async (req: Request, res: Response) => {
    const user = req.user as UserDocument;
    console.log('user', user?.username)
    const username = user ? user.username : 'SYSTEM';
    const post = new Post({
        postId: uuid(),
        title: req.body.title,
        content: req.body.content,
        username: username
    });
    const getBackFromDb = await post.save();
    res.json(getBackFromDb);
};

export const updatePost = async (req: Request, res: Response) => {
    const user = req.user as UserDocument;
    console.log('user', user)
    const postId = req.params.postId;
    const toUpdatePost = await Post.findOne({ 'postId': postId }).exec();
    if (toUpdatePost) {
        const body = req.body;
        toUpdatePost.title = body.title ?? toUpdatePost.title;
        toUpdatePost.content = body.content ?? toUpdatePost.content;
        const getBackFromDb = await toUpdatePost.save();
        res.json(getBackFromDb);
    } else {
        res.json("No postId found");
    }
};

export const getOnePost = async (req: Request, res: Response) => {
    const user = req.user as UserDocument;
    console.log('user', user)
    const postId = req.params.postId;
    Post.findOne({ 'postId': postId }).exec().then(c => {

        res.json(c);
    })
};

export const getAllPostByUsername = async (req: Request, res: Response) => {
    const user = req.user as UserDocument;
    const username = user ? user.username : req.params.username;

    await Post.
        find({}).
        where('username').equals(username).
        limit(10).exec().then(c => {

            res.json(c);
        })
};

export const deletePost = async (req: Request, res: Response) => {
    const user = req.user as UserDocument;
    const postId = req.params.postId;

    await Post.findOneAndDelete({ 'postId': postId })
        .exec().then(c => {

            res.json(c);
        })
};

/**
 * Facebook API example.
 * @route GET /api/facebook
 */
export const getFacebook = (req: Request, res: Response, next: NextFunction) => {
    // const user = req.user as UserDocument;
    // const token = user.tokens.find((token: any) => token.kind === "facebook");
    // graph.setAccessToken(token.accessToken);
    // graph.get(`${user.facebook}?fields=id,name,email,first_name,last_name,gender,link,locale,timezone`, (err: Error, results: graph.FacebookUser) => {
    //     if (err) { return next(err); }
    //     res.render("api/facebook", {
    //         title: "Facebook API",
    //         profile: results
    //     });
    // });
};
