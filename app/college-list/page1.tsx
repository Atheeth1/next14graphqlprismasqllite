"use client";


import React from 'react'
import { GET_COLLEGES } from "@/graphql/queries";
import { useQuery } from "@apollo/client";
import { ICollege } from "@/typings";
import { College } from '@/components/College';


const page = () => {

	const { data, loading, error } = useQuery(GET_COLLEGES);
	const colleges: ICollege[] = data?.colleges;

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
	console.log(colleges);

	return (
		<>
			<div className="grid grid-cols-4 gap-2">
				{colleges.map((college) => (
					<College key={college.id} college={college} />
				))}
			</div>
		</>

	)
}

export default page



// <colege-list recipeList={recipeList} />;