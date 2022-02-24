const {Schema, model}=require('mongoose');

const userSchema=new Schema(
    {
        username:{
            type:String,
            unique:true,
            required:true,
        },
        email:{
            type:String,
            unique:true,
            required:true,
            match:
        },
        thoughts:{
            type:Schema.Types.ObjectId,
            ref:'Thought'
        },
        friends:{
            type:String,
            ref:'User'
        },

    }
);

userSchema.virtual(('friendCount').get => {
    return this.friends.length;
});

const User=model('User,UserSchema');

module.exports=User;