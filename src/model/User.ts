import mongoose, { Document, Schema } from "mongoose";
export interface Message extends Document {
  content: string;
  createdAt: Date;
}

const MessageSchema: Schema<Message> = new Schema({
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now, required: true },
});

export interface User extends Document {
  userName: string;
  email: string;
  password: string;
  verifyCode: string;
  verifyCodeExpiry: Date;
  isVerified:boolean;
  isAcceptingMessage: boolean;
  messages: Message[];
}
const UserSchema: Schema<User> = new Schema({
  userName: {
    type: String,
    required: [true, "UserName is Reguired"],
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Email is Required"],
    unique: true,
    match: [
      /^[a-zA-Z0-9._%+-]+@([a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/,
      "Invalid Email",
    ],
  },
  password:{
               type:String,
               required:[true,"Password is Required"],
  },
  verifyCode: {
               type: String,
               required: [true, "Verify Code is Required"],
  },
  verifyCodeExpiry:{
               type:Date,
               required:[true,"Verify Code Expiry is Required"],
  },
  isVerified:{
               type:Boolean,
               default:false
  },
  isAcceptingMessage:{
               type:Boolean,
               default:true
  },
  messages:[MessageSchema]
});

const UserModel = (mongoose.models.User as mongoose.Model<User>) || mongoose.model<User>("User",UserSchema)

export default UserModel;