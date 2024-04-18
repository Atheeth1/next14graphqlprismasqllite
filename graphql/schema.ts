export const typeDefs = `#graphql 


    type College {
    id: ID!
    title: String
    image: String
    description: String
    email:String
    phone:String
    location:String
    createdAt: String
    updatedAt: String
   states: [State]
   countrys:[Country]
   governments:[Government]
   aideds:[Aided]
   privatemnts:[Privatemnt]
   college_Types:[College_Type]
  }

    type State {
    id: ID!
    name: String
    descriptionst:String
   collegeId: String
  }

  type Country {
    id: ID!
    name: String
    descriptionst:String
    collegeId: String
  }
  type Government {
    id: ID!
    name: String
   descriptionst:String
    collegeId: String
  }
  type Aided {
    id: ID!
    name: String
    descriptionst:String
    collegeId: String
  }
  type Privatemnt {
    id: ID!
    name: String
    descriptionst:String
    collegeId: String
  }
  type College_Type {
    id: ID!
    name: String
    descriptionst:String
    collegeId: String
  }

  type Query {
	 college(id: ID!):College 
   colleges: [College]
    states:[State]
    country:[Country]
    governments:[Government]
    aideds:[Aided]
    privatemnt:[Privatemnt]
    college_type:[College_Type]

  }

  type Mutation {
    addCollege (image:String, title:String,description:String,email:String,phone:String,location:String) :College
    updateCollege(id:ID!, title:String, image:String,description:String,email:String,phone:String,location:String) :College
    deleteCollege(id:ID!) :College

    addState(collegeId:ID!, name:String,descriptionst:String):State
    deleteState(id:ID!):State

    addPrivatemnt(collegeId:ID!, name:String,descriptionst:String):Privatemnt
    deletePrivatemnt(id:ID!):Privatemnt

    addAided(collegeId:ID!, name:String,descriptionst:String):Aided
    deleteAided(id:ID!):Aided

    addGovernment(collegeId:ID!, name:String,descriptionst:String):Government
    deleteGovernment(id:ID!):Government

  addCountry(collegeId:ID!, name:String,descriptionst:String):Country
    deleteCountry(id:ID!):Country

    addCollege_Type(collegeId:ID!, name:String,descriptionst:String):College_Type
    deleteCollege_Type(id:ID!):College_Type
  }
`;
