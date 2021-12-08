
import crypto from "crypto";
import mongoose, { Schema } from "mongoose";
import { User, UserDocument } from './User';

export type PostDocument = mongoose.Document & {
    postId: string;
    title: string;
    content: string;
    username: string;

    gravatar: (size: number) => string;
}

const postSchema = new mongoose.Schema<PostDocument>(
    {
        postId: { type: String, unique: true },
        title: String,
        content: String,
        username: String
    },
    { timestamps: true }
);

postSchema.pre("save", function save(next) {
    const post = this as PostDocument;
    return next();
});

/**
 * Helper method for getting user's gravatar.
 */
postSchema.methods.gravatar = function (size = 200) {
    if (!this.id) {
        return `https://gravatar.com/avatar/?s=${size}&d=retro`;
    }
    const md5 = crypto.createHash("md5").update(this.id).digest("hex");
    return `https://gravatar.com/avatar/${md5}?s=${size}&d=retro`;
};

export const Post = mongoose.model<PostDocument>("Post", postSchema);
