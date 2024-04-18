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
   privates:[Private]
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
    namecountry: String
    descriptioncountry:String
    collegeId: String
  }
  type Government {
    id: ID!
    namegovernment: String
    descriptiongovernment:String
    collegeId: String
  }
  type Aided {
    id: ID!
    nameaided: String
    descriptionaided:String
    collegeId: String
  }
  type Private {
    id: ID!
    nameprivate: String
    descriptionprivate:String
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
    private:[Private]
    college_type:[College_Type]

  }

  type Mutation {
    addCollege (image:String, title:String,description:String,email:String,phone:String,location:String) :College
    updateCollege(id:ID!, title:String, image:String,description:String,email:String,phone:String,location:String) :College
    deleteCollege(id:ID!) :College

    addState(collegeId:ID!, name:String,descriptionst:String):State
    deleteState(id:ID!):State

    addPrivate(collegeId:ID!, nameprivate:String,descriptionprivate:String):Private
    deletePrivate(id:ID!):Private

    addAided(collegeId:ID!, nameaided:String,descriptionaided:String):Aided
    deleteAided(id:ID!):Aided

    addGovernment(collegeId:ID!, namegovernment:String,descriptiongovernment:String):Government
    deleteGovernment(id:ID!):Government

  addCountry(collegeId:ID!, namecountry:String,descriptioncountry:String):Country
    deleteCountry(id:ID!):Country

    addCollege_Type(collegeId:ID!, name:String,descriptionst:String):College_Type
    deleteCollege_Type(id:ID!):College_Type
  }
`;
