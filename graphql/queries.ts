import { gql } from "@apollo/client";

export const GET_COLLEGES = gql`
	query Colleges {
		colleges {
			id
			image
			createdAt
			title
			updatedAt
			states {
				id
				name
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
				collegeId
			}
			id
			image
			title
		}
	}
`;