import mongoose from "mongoose";

const schema = mongoose.Schema;

const Post = new schema({
    name: { 
        type: String,
        required: true,
    },
    prompt: {
        type: String,
        required: true,

    },
    photo: {
        type: String,
        required: true,
    },

});

const PostSchema = mongoose.model('Post', Post);

export default PostSchema;
