export const typeDefs = `#graphql 
    type College {
    id: ID!
    title: String
    image: String
    createdAt: String
    updatedAt: String
   states: [State]
  }

    type State {
    id: ID!
    name: String
   collegeId: String
  }

  type Query {
	college(id: ID!):College 
   colleges: [College]

  }

  type Mutation {
    addCollege (image:String, title:String) :College
    updateCollege(id:ID!, title:String, image:String) :College
    deleteCollege(id:ID!) :College
    addState(collegeId:ID!, name:String):State
    deleteState(id:ID!):State
  }
`;