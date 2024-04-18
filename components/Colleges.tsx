"use client";
import React, { FormEvent, useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { GET_COLLEGES } from "@/graphql/queries";

import { ICollege } from "@/typings";
import { College } from "./College";

import { ADD_COLLEGE } from "@/graphql/mutations";

export const Colleges = () => {
	const [title, setTitle] = useState("");
	const [image, setImage] = useState("");
	const [description, setDescription] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [location, setLocation] = useState("");
	const { data, loading, error } = useQuery(GET_COLLEGES);
	const [addCollege] = useMutation(ADD_COLLEGE, {
		variables: { image, title,description,email,phone,location },
		refetchQueries: [{ query: GET_COLLEGES }],
	});

	const colleges: ICollege[] = data?.colleges;

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (image === "" || title === "" || description === "" || email === "" || phone === "" || location === "") return alert("Enter fields");

		addCollege({ variables: { image, title, description,email,phone,location } });
		setTitle("");
		setImage("");
		setDescription("");
		setEmail("");
		setPhone("");
		setLocation("");

	};

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

	return (
		<div className="mt-5">
			<form onSubmit={handleSubmit} className="flex flex-col gap-2 my-5 space-y-3">
				<input
					value={title}
					onChange={(e) => setTitle(e.target.value)}
					type="text"
					placeholder="Enter title"
					className="bg-transparent border text-white p-2 rounded-lg"
				/>
				<input
					value={image}
					onChange={(e) => setImage(e.target.value)}
					type="text"
					placeholder="Enter Image url"
					className="bg-transparent border text-white p-2 rounded-lg"
				/>
				<input
					value={ description}
					onChange={(e) =>setDescription(e.target.value)}
					type="text"
					placeholder="Enter Description"
					className="bg-transparent border text-white p-2 rounded-lg"
				/>
				<input
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					type="text"
					placeholder="Enter Email"
					className="bg-transparent border text-white p-2 rounded-lg"
				/>
				<input
					value={phone}
					onChange={(e) => setPhone(e.target.value)}
					type="text"
					placeholder="Enter Phone"
					className="bg-transparent border text-white p-2 rounded-lg"
				/>
				<input
					value={location}
					onChange={(e) => setLocation(e.target.value)}
					type="text"
					placeholder="Enter Location"
					className="bg-transparent border text-white p-2 rounded-lg"
				/>
				<button className="bg-yellow-500 p-2 rounded-lg ">
					Add College
				</button>
			</form>
			<div className="grid grid-cols-4 gap-2">
				{colleges.map((college) => (
					<College key={college.id} college={college} />
				))}
			</div>
		</div>
	);
};