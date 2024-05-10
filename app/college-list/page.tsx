"use client";

import CollegeList from "@/components/college-list";
import { GET_COLLEGES } from "@/graphql/queries";
import { useQuery } from "@apollo/client";
import { ICollege } from "@/typings";
import { College } from '@/components/College';


async function fetchListOfRecipes() {
  const { data, loading, error } = useQuery(GET_COLLEGES);

  return data?.colleges;
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
	console.log(data);
}

export default async function Recipes() {



  const collegeList = await fetchListOfRecipes();
  return <CollegeList collegeList={collegeList} />;
}
