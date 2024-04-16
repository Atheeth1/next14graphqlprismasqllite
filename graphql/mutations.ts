import { gql } from "@apollo/client";

export const ADD_COLLEGE = gql`
	mutation AddCollege($image: String, $title: String) {
		addCollege(image: $image, title: $title) {
			states {
				id
				name
				collegeId
			}
			createdAt
			id
			image
			title
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
		}
	}
`;

export const UPDATE_COLLEGE = gql`
	mutation UpdateCollege($id: ID!, $title: String, $image: String) {
		updateCollege(id: $id, title: $title, image: $image) {
			id
			image
			title
		}
	}
`;

export const ADD_STATE = gql`
	mutation Mutation($collegeId: ID!, $name: String) {
		addState(collegeId: $collegeId, name: $name) {
			id
			name
			collegeId
		}
	}
`;

export const DELETE_STATE = gql`
	mutation Mutation($id: ID!) {
		deleteState(id: $id) {
			id
			name
			collegeId
		}
	}
`;