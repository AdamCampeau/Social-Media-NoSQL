const {Schema,model,Types}=require('mongoose');
const moment=require('moment')

const reactSchema=new Schema({
    reactionId:{
        type:Types.ObjectId,
        default:new Types.ObjectId()
    },
    reactionText:{
        type:String,
        required:true,
        maxlength:250
    },
    username:{
        type:String,
        required:true
    },
    createTime:{
        type:Date,
        default:Date.now,
        get:(createTimeVal)=>moment(createTimeVal).format('MM DD,YYYY [at] hh:mm a')
    }
},
{
    toJson:{
        getters:true
    },
    id:false
});

module.exports=reactionSchema;