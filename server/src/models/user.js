import mongoose from "mongoose";
import { hash } from "bcryptjs";
import customer from "../typeDefs/user";

const customerSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      validate: {
        validator: email => Customer.dontExist({ email }),
        message: ({ value }) => `Email ${value} has already been taken.`
      }
    },
    firstname: String,
    lastname: String,
    password: String,
    courseId: String
  },
  {
    timestamps: true
  }
);

customerSchema.pre("save", async function() {
  if (this.isModified("password")) {
    this.password = await hash(this.password, 10);
  }
});

customerSchema.statics.dontExist = async function(options) {
  return (await this.where(options).countDocuments()) === 0;
};

const Customer = mongoose.model("Customer", customerSchema);

export default Customer;
