import mongoose, { Document, Model, Schema } from 'mongoose';

export interface IBlogPost extends Document {
    slug: string;
    title: string;
    excerpt: string;
    content: string;
    author: string;
    category: string;
    date: Date;
    readTime: string;
    imageUrl: string;
    published: boolean;
    createdAt: Date;
    updatedAt: Date;
}

const blogPostSchema = new Schema<IBlogPost>({
    slug: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    excerpt: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: String, required: true },
    category: { type: String, required: true },
    date: { type: Date, required: true },
    readTime: { type: String, required: true },
    imageUrl: { type: String, required: true },
    published: { type: Boolean, default: false },
}, {
    timestamps: true
});

// Use existing model if it exists, otherwise create it
export const BlogPost: Model<IBlogPost> = mongoose.models.BlogPost || mongoose.model<IBlogPost>('BlogPost', blogPostSchema);
