const {Schema,model}=require('mongoose');
const {Schema,model,Types}=require('mongoose');
const Thought = model('Thought', ThoughtSchema)

const ReactionSchema=new Schema(
    {
        reactiondId: {
            type: Schema.Types.ObjectId,
            default:()=>new Types.ObjectId()
        },
        reactionBody:{
            type:Schema,
            required:true,
            maxlength:250
        },
        username:{
            type:String,
            required:true
        },
        createdAt:{
            type:Date,
            default:Date.now,
            get:createdAtValue => dateFormat(createdAtValue)
        }
    },
    {
        toJSON: {
            getters: true
        }
    }
);

const thoughtSchema = new Schema(
    {
        thoughtText:{
            type:String,
            require:true,
            maxlength:280
        },
        createdAt:{
            type:Date,
            default:Date.now,
            get:createdAtValue=>dateformat(createdAtValue),
            getter:true
        },
        username:{
            type:String,
            required:true
        },
        reactions:[ReactionSchema]
    }
)

module.exports=Thought;
