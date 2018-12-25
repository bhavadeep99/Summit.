import Joi from "joi";
import mongoose from "mongoose";
import { UserInputError } from "apollo-server-express";
import { Customer } from "../models";
import { Signup } from "../schemas";
import { Course } from "../models";

export default {
  Query: {
    customers: (root, args, context, info) => {
      return Customer.find({});
    },
    customer: (root, { id }, context, info) => {
      if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new UserInputError(`${id} is not a valid user ID`);
      }
      return Customer.findById(id);
    },
    courses: (root, args, context, info) => {
      return Course.find({});
    }
  },
  Mutation: {
    signUp: async (root, args, context, info) => {
      await Joi.validate(args, Signup, { abortEarly: false });
      return Customer.create(args);
    },
    createCourse: (root, args, context, info) => {
      return Course.create(args);
    },
    updateCourse: (root, args, context, info) => {
      return Course.update(args);
    }
  }
};
