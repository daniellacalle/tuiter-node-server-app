import mongoose from 'mongoose';
// need to put new before mongoose?
const schema = new mongoose.Schema({   tuit: String,
                                   likes: Number,
                                   liked: Boolean,
                               },
                               {collection: 'tuits'});
export default schema;