import { DELETE_COLLEGE } from "@/graphql/mutations";
import { GET_COLLEGES } from "@/graphql/queries";
import { ICollege } from "@/typings";
import { useMutation } from "@apollo/client";
import Link from "next/link";
import React from "react";

export const BASE_URL = process.env.NEXT_PUBLIC_URL;

type Props = {
	college: ICollege;
};

export const College = ({ college }: Props) => {
	const [deleteCollege] = useMutation(DELETE_COLLEGE, {
		refetchQueries: [{ query: GET_COLLEGES }],
	});
	return (
		<article className="flex flex-col p-4  bg-slate-200 dark:bg-indigo-800 hover:scale-110 shadow-sm hover:shadow-lg hover:bg-slate-300 transition duration-300 ease-out text-red ">
			{/* image */}
			{college.image && (
				<div>
					<img
						src={college.image}
						alt={college.title}
						className="h-56 w-full object-contain rounded-t-lg shadow-md"
					/>
				</div>
			)}

			{/*title  */}
			<h1 className="font-bold text-xl my-2">{college.title}</h1>
			{/* description */}
			<p className="text-xs my-2 line-clamp-3">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
				ab recusandae repudiandae ratione quia voluptatibus tempora
				dolores, veritatis cum, soluta numquam voluptatum earum
				obcaecati illum dolor. Fuga incidunt maxime culpa.
			</p>
			{/* source and date */}
			<div className="flex justify-between italic	 ß text-xs mt-auto  text-slate-500">
				<p className="text-red text-lg">
					States :{college?.states.length}
				</p>
			</div>
			<Link
				href={`${BASE_URL}/college/${college.id}`}
				className="bg-orange-500 mt-5 p-2 rounded-lg"
			>
				Read More
			</Link>

			<button
				onClick={() => deleteCollege({ variables: { id: college.id } })}
				className="bg-red-500 mt-5 p-2 rounded-lg"
			>
				Delete
			</button>
		</article>
	);
};