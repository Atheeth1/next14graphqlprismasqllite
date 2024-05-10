"use client";

import CollegeList from "@/components/recipe-list";
import { GET_COLLEGE } from "@/graphql/queries";
import { useQuery } from "@apollo/client";
import { ICollege } from "@/typings";
import CollegeDetailsItem from "@/components/college-details";

async function fetchRecipeDetails(currentCollegeId) {
	const { data, loading, error } = useQuery(GET_COLLEGE, { variables: { currentCollegeId } });

	return data?.college?.currentCollegeId;
	if (loading)
		return (
			<p className="text-white flex items-center justify-center">
				Loading ....

			</p>
		);
	if (error)
		return (
			<p className="text-white flex items-center justify-center">
				Oops! Something went wrong ....
			</p>
		);
	}
	
	export default async function CollegeDetails({ params }) {
		const getCollegeDetails = await fetchRecipeDetails(params?.id);


	return <CollegeDetailsItem getCollegeDetails={getCollegeDetails} />;
}
