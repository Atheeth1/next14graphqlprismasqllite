import { gql } from "@apollo/client";

export const GET_COLLEGES = gql`
	query Colleges {
		colleges {
			id
			image
			title
			description
			email
			phone
			location
			createdAt
			updatedAt
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
				namegovernment
				descriptiongovernemnt
				collegeId
			}
			aideds {
				id
				nameaided
				descriptionaided
				collegeId
			}
			privates {
				id
				nameprivate
				descriptionprivate
				collegeId
			}
			college_Types {
				id
				name
				descriptionst
				collegeId
			}
		}
	}
`;

export const GET_COLLEGE = gql`
	query College($id: ID!) {
		college(id: $id) {
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
				namegovernment
				descriptiongovernment
				collegeId
			}
			aideds {
				id
				nameaided
				descriptionaided
				collegeId
			}
			privates {
				id
				nameprivate
				descriptionprivate
				collegeId
			}
			college_Types {
				id
				name
				descriptionst
				collegeId
			}
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