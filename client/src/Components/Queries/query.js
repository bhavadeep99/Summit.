import { gql } from "apollo-boost";

const getUsers = gql`
  {
    customers {
      id
      firstname
      lastname
      email
      password
    }
  }
`;

const getCourses = gql`
  {
    courses {
      id
      name
      description
      tagLine
      courseImageURL
      instructorImageURL
      instructorName
      numberOfLessons
      videoURL
      category
      courseID
    }
  }
`;

const addUserMutation = gql`
  mutation(
    $email: String!
    $firstname: String!
    $lastname: String!
    $password: String!
  ) {
    signUp(
      email: $email
      firstname: $firstname
      lastname: $lastname
      password: $password
    ) {
      id
      email
    }
  }
`;

const addCourseMutation = gql`
  mutation(
    $name: String!
    $description: String!
    $tagline: String!
    $courseImageURL: String!
    $instructorImageURL: String!
    $instructorName: String!
    $numberOfLessons: String!
    $videoURL: String!
    $category: String!
    $courseID: String!
  ) {
    createCourse(
      name: $name
      description: $description
      tagLine: $tagline
      courseImageURL: $courseImageURL
      instructorImageURL: $instructorImageURL
      instructorName: $instructorName
      numberOfLessons: $numberOfLessons
      videoURL: $videoURL
      category: $category
      courseID: $courseID
    ) {
      name
      description
      tagLine
      courseImageURL
      instructorImageURL
      instructorName
      numberOfLessons
      videoURL
      category
      courseID
    }
  }
`;

export { getUsers, addUserMutation, getCourses, addCourseMutation };
