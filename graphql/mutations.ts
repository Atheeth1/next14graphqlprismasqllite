import { gql } from "@apollo/client";

export const ADD_COLLEGE = gql`
	mutation AddCollege($image: String, $title: String, $description: String, $email: String,$phone: String, $location: String) {
		addCollege(image: $image, title: $title,description:$description,email:$email, phone:$phone,location:$location) {
			states {
				id
				name
				descriptionst
				collegeId
			}
			countrys {
				id
				namecountry
				descriptioncountry
				collegeId
			}
			governments {
				id
				name
				descriptionst
				collegeId
			}
			aideds {
				id
				nameaided
				descriptionaided
				collegeId
			}
			privatemnts {
				id
				nameprivatemnt
				descriptionprivatemnt
				collegeId
			}
			college_Types {
				id
				name
				descriptionst
				collegeId
			}
			createdAt
			id
			image
			title
			description
			email
			phone
			location
			updatedAt
		}
	}
`;

export const DELETE_COLLEGE = gql`
	mutation deleteCollege($id: ID!) {
		deleteCollege(id: $id) {
			id
			title
			image
			description
			email
			phone
			location
		}
	}
`;

export const UPDATE_COLLEGE = gql`
	mutation UpdateCollege($id: ID!, $title: String, $image: String,$description: String, $email: String,$phone: String, $location: String) {
		updateCollege(id: $id, title: $title, image: $image,description:$description,email:$email, phone:$phone,location:$location) {
			id
			image
			title
			description
			email
			phone
			location
		}
	}
`;

export const ADD_STATE= gql`
	mutation Mutation($collegeId: ID!, $name: String,$descriptionst: String) {
		addState(collegeId: $collegeId, name: $name,descriptionst:$descriptionst) {
			id
			name
			descriptionst
			collegeId
		}
	}
	
`;

export const DELETE_STATE = gql`
	mutation Mutation($id: ID!) {
		deleteState(id: $id) {
			id
			name
			descriptionst
			collegeId
		}
	}
`;


export const ADD_AIDED= gql`
	mutation Mutation($collegeId: ID!, $name: String,$descriptionst: String) {
		addAided(collegeId: $collegeId, name: $name,descriptionst:$descriptionst) {
			id
			nameaided
			descriptionaided
			collegeId
		}
	}
	
`;

export const DELETE_AIDED = gql`
	mutation Mutation($id: ID!) {
		deleteAided(id: $id) {
			id
			nameaided
			descriptionaided
			collegeId
		}
	}
`;

export const ADD_PRIVATE= gql`
	mutation Mutation($collegeId: ID!, $name: String,$descriptionst: String) {
		addPrivatemnt(collegeId: $collegeId, name: $name,descriptionst:$descriptionst) {
			id
			nameprivatemnt
			descriptionprivatemnt
			collegeId
		}
	}
	
`;

export const DELETE_PRIVATE = gql`
	mutation Mutation($id: ID!) {
		deletePrivatemnt(id: $id) {
			id
			nameprivatemnt
			descriptionprivatemnt
			collegeId
		}
	}
`;

export const ADD_COUNTRY= gql`
	mutation Mutation($collegeId: ID!, $name: String,$descriptionst: String) {
		addCountry(collegeId: $collegeId, name: $name,descriptionst:$descriptionst) {
			id
			namecountry
			descriptioncountry
			collegeId
		}
	}
	
`;

export const DELETE_COUNTRY = gql`
	mutation Mutation($id: ID!) {
		deleteCountry(id: $id) {
			id
			namecountry
			descriptioncountry
			collegeId
		}
	}
`;

export const ADD_GOVERNMENT= gql`
	mutation Mutation($collegeId: ID!, $ namegovernment: String,$descriptiongovernment: String) {
		addGovernment(collegeId: $collegeId, namegovernment: $namegovernment,descriptiongovernment:$descriptiongovernment) {
			id
			namegovernment
			descriptiongovernment
			collegeId
		}
	}
	
`;

export const DELETE_GOVERNMENT = gql`
	mutation Mutation($id: ID!) {
		deleteGovernment(id: $id) {
			id
			namegovernment
			descriptiongovernment
			collegeId
		}
	}
`;