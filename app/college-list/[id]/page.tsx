"use client";

import { GET_COLLEGE } from "@/graphql/queries";
import { ICollege } from "@/typings";
import { useQuery } from "@apollo/client";
import React from "react";
type Props = {
	params: {
		id: string;
	};
};

const College = ({ params: { id } }: Props) => {
	const { data, loading, error } = useQuery(GET_COLLEGE, {
		variables: { id },
	});
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

        const college: ICollege = data?.college;
        console.log("college data is");
        console.log(college);


	return (
		<article className="max-w-5xl mx-auto text-black">
			<section className="flex  flex-wrap gap-2 ">
            <h1 className="text-4xl ">{college.title}</h1>

				{college.image && (
					<img height={800} width={500} src={college.image} alt="" />
				)}


         <div className="p-2 flex flex-col">
				
					<div className="flex gap-2">
						{college?.states?.map((state) => (
							<div
								key={state.id}
								className="flex items-center gap-2"
							>
								<h2 className="font-bold">State:{state?.name}</h2>
								<h2 className="font-bold">{state?.descriptionst}</h2>
														
							</div>
						))}
					</div>
					<div className="flex gap-2">
						{college?.aideds?.map((aided) => (
							<div
								key={aided.id}
								className="flex items-center gap-2"
							>
								<h2 className="font-bold">Aided:{aided?.nameaided}</h2>
								<h2 className="font-bold">{aided?.descriptionaided}</h2>
															
							</div>
						))}
					</div>
					<div className="flex gap-2">
						{college?.countrys?.map((country) => (
							<div
								key={country.id}
								className="flex items-center gap-2"					
							>
								    <h2 className="font-bold">Country:{country?.namecountry}</h2>
					                <h2 className="font-bold">{country?.descriptioncountry}</h2>
					
							
							</div>
						))}
					</div>


					<div className="flex gap-2">
						{college?.governments?.map((government) => (
							<div
								key={government.id}
								className="flex items-center gap-2"
							>
								    <h2 className="font-bold">Government:{government?.namegovernment}</h2>
					<h2 className="font-bold">{government?.descriptiongovernment}</h2>
						
							
							</div>
						))}
					</div>

					<div className="flex gap-2">
						{college?.privatemnts?.map((privatemnt) => (
							<div
								key={privatemnt.id}
								className="flex items-center gap-2"
								>
								<h2 className="font-bold">{privatemnt?.nameprivatemnt}</h2>
								<h2 className="font-bold">{privatemnt?.descriptionstprivatemnt}</h2>
								
							</div>
						))}
					</div>
        </div>



					<p className="text-slate-400 ">
					{college.description}
					</p>
	

				
			</section>
			{/* update form */}
			
		</article>
	);
};

export default College;