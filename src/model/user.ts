import mongoose from 'mongoose'

interface UserAttrs{
    name: string,
    email: string,
    pass: string
}


interface UserModel extends mongoose.Model<UserDoc>{
    build(attrs: UserAttrs): UserDoc
}


interface UserDoc extends mongoose.Document, UserAttrs{
    name: string,
    email: string,
    pass: string,
    updatedAt: Date,
    createdAt: Date
}

const userSchema= new mongoose.Schema<UserDoc>(
    {
        name: String,
        email: String,
        pass: String
    },{
        toJSON:{
            transform(doc, ret){
                ret.id= ret._id;
                delete ret._id;
                delete ret.pass;
                delete ret.__V
            }
        },
        timestamps: true
    }
)

userSchema.statics.build= (attrs: UserAttrs)=>{
    return new User(attrs)
}

const User = mongoose.model<UserDoc, UserModel>("User", userSchema)

export{User}