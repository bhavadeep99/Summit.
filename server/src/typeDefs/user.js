import { gql } from "apollo-server-express";

export default gql`
  extend type Query {
    customer(id: ID!): Customer
    customers: [Customer!]!
    courses: [Course!]!
  }

  extend type Mutation {
    signUp(
      email: String!
      firstname: String!
      lastname: String!
      password: String!
    ): Customer

    createCourse(
      name: String!
      description: String!
      tagLine: String!
      courseImageURL: String!
      instructorImageURL: String!
      instructorName: String!
      numberOfLessons: String!
      videoURL: String!
      category: String!
      courseID: String!
    ): Course

    updateCourse(
      id: ID!
      name: String!
      description: String!
      tagLine: String!
      courseImageURL: String!
      instructorImageURL: String!
      instructorName: String!
      numberOfLessons: String!
      videoURL: String!
      category: String!
      courseID: String!
    ): Course
  }

  type Customer {
    id: ID!
    email: String!
    firstname: String!
    lastname: String!
    password: String!
    courses: [Course!]!
  }

  type Course {
    id: ID!
    name: String!
    description: String!
    tagLine: String!
    courseImageURL: String!
    instructorImageURL: String!
    instructorName: String!
    numberOfLessons: String!
    videoURL: String!
    category: String!
    courseID: String!
  }
`;
