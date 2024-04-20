"use client";
import { ADD_AIDED, ADD_COUNTRY, ADD_GOVERNMENT, ADD_PRIVATE, ADD_STATE, DELETE_AIDED, DELETE_COUNTRY, DELETE_GOVERNMENT, DELETE_PRIVATE, DELETE_STATE, UPDATE_COLLEGE } from "@/graphql/mutations";
import { GET_COLLEGE } from "@/graphql/queries";
import { ICollege } from "@/typings";
import { useMutation, useQuery } from "@apollo/client";
import React, { useState } from "react";
type Props = {
	params: {
		id: string;
	};
};

const College = ({ params: { id } }: Props) => {
	const [title, setTitle] = useState("");
	const [url, setUrl] = useState("");
	
	const [name, setName] = useState("");
	const [namecountry, setNamecountry] = useState("");
	const [namegovernment, setNamegovernment] = useState("");
	const [nameprivatemnt, setNameprivatemnt] = useState("");
	const [nameaided, setNameaided] = useState("");
	
	const [description, setDescription] = useState("");
	const [descriptionst, setDescriptionst] = useState("");
	const [descriptioncountry, setDescriptioncountry] = useState("");
	const [descriptiongovernment, setDescriptiongovernment] = useState("");
	const [descriptionaided, setDescriptionaided] = useState("");
	const [descriptionprivatemnt, setDescriptionprivatemnt] = useState("");
	
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [location, setLocation] = useState("");

	const { data, loading, error } = useQuery(GET_COLLEGE, {
		variables: { id },
	});
	const [addState] = useMutation(ADD_STATE, {
		variables: { collegeId: id, name,descriptionst },
		refetchQueries: [{ query: GET_COLLEGE, variables: { id } }],
	});

	const [deleteState] = useMutation(DELETE_STATE, {
		refetchQueries: [{ query: GET_COLLEGE, variables: { id } }],
	});
	const [addGovernment] = useMutation(ADD_GOVERNMENT, {
		variables: { collegeId: id, namegovernment,descriptiongovernment },
		refetchQueries: [{ query: GET_COLLEGE, variables: { id } }],
	});

	const [deleteGovernment] = useMutation(DELETE_GOVERNMENT, {
		refetchQueries: [{ query: GET_COLLEGE, variables: { id } }],
	});
	const [addAided] = useMutation(ADD_AIDED, {
		variables: { collegeId: id, nameaided,descriptionaided },
		refetchQueries: [{ query: GET_COLLEGE, variables: { id } }],
	});

	const [deleteAided] = useMutation(DELETE_AIDED, {
		refetchQueries: [{ query: GET_COLLEGE, variables: { id } }],
	});
	const [addCountry] = useMutation(ADD_COUNTRY, {
		variables: { collegeId: id, namecountry,descriptioncountry },
		refetchQueries: [{ query: GET_COLLEGE, variables: { id } }],
	});

	const [deleteCountry] = useMutation(DELETE_COUNTRY, {
		refetchQueries: [{ query: GET_COLLEGE, variables: { id } }],
	});
	const [addPrivatemnt] = useMutation(ADD_PRIVATE, {
		variables: { collegeId: id, nameprivatemnt,descriptionprivatemnt },
		refetchQueries: [{ query: GET_COLLEGE, variables: { id } }],
	});

	const [deletePrivatemnt] = useMutation(DELETE_PRIVATE, {
		refetchQueries: [{ query: GET_COLLEGE, variables: { id } }],
	});

	const [updateCollege] = useMutation(UPDATE_COLLEGE, {
		variables: { id: id, title: title, image: url,description: description,email:email,phone:phone,location:location},
		refetchQueries: [{ query: GET_COLLEGE, variables: { id } }],
	});

	const college: ICollege = data?.college;

	const handleAddState = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (name === ""|| descriptionst === "" ) return alert("Please enter state name");
		addState({ variables: { collegeId: id, name,descriptionst } });
		setName("");
		setDescriptionst("");
	};
	const handleAddAided = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (nameaided === ""|| descriptionaided === "" ) return alert("Please enter Aided name");
		addAided({ variables: { collegeId: id, nameaided,descriptionaided } });
		setNameaided("");
		setDescriptionaided("");
	};
	const handleAddCountry = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (namecountry === ""|| descriptioncountry === "" ) return alert("Please enter Country name");
		addCountry({ variables: { collegeId: id, namecountry,descriptioncountry } });
		setNamecountry("");
		setDescriptioncountry("");
	};
	const handleAddPrivatemnt = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (nameprivatemnt === ""|| descriptionprivatemnt === "" ) return alert("Please enter Privatemnt name");
		addPrivatemnt({ variables: { collegeId: id, nameprivatemnt,descriptionprivatemnt } });
		setNameprivatemnt("");
		setDescriptionprivatemnt("");
	};
	const handleAddGovernment = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (namegovernment === ""|| descriptiongovernment === "" ) return alert("Please enter Government name");
		addGovernment({ variables: { collegeId: id, namegovernment,descriptiongovernment } });
		setNamegovernment("");
		setDescriptiongovernment("");
	};




	const handleUpdateCollege = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (title === "" || url === ""|| description === "" || email === "" || phone === "" || location === "") return alert("Please enter fields");
		updateCollege({ variables: { id: id, title: title, image: url } });
		setTitle("");
		setUrl("");
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
		<article className="max-w-5xl mx-auto text-white">
			<section className="flex gap-2 ">
				{college.image && (
					<img height={200} width={200} src={college.image} alt="" />
				)}

				<div className="p-2 flex flex-col">
					<h1 className="text-4xl ">Title : {college.title}</h1>

					<div className="flex gap-2">
						{college?.states?.map((state) => (
							<div
								key={state.id}
								className="flex items-center gap-2"
							>
								<h2 className="font-bold">{state?.name}</h2>
								<h2 className="font-bold">{state?.descriptionst}</h2>
								<div
									onClick={() =>
										deleteState({
											variables: {
												id: state.id,
											},
										})
									}
									color="yellow"
								/>
							
							</div>
						))}
					</div>
					<div className="flex gap-2">
						{college?.aideds?.map((aided) => (
							<div
								key={aided.id}
								className="flex items-center gap-2"
							>
								<h2 className="font-bold">{aided?.nameaided}</h2>
								<h2 className="font-bold">{aided?.descriptionaided}</h2>
								<div
									onClick={() =>
										deleteAided({
											variables: {
												id: aided.id,
											},
										})
									}
									color="yellow"
								/>
							
							</div>
						))}
					</div>
					<div className="flex gap-2">
						{college?.countrys?.map((country) => (
							<div
								key={country.id}
								className="flex items-center gap-2"					
							>
								    <h2 className="font-bold">{country?.namecountry}</h2>
					<h2 className="font-bold">{country?.descriptioncountry}</h2>
					<div
						onClick={() =>
							deleteCountry({
								variables: {
									id: country.id,
								},
							})					
						}
						color="yellow"
					/>
							
							</div>
						))}
					</div>


					<div className="flex gap-2">
						{college?.governments?.map((government) => (
							<div
								key={government.id}
								className="flex items-center gap-2"
							>
								    <h2 className="font-bold">{government?.namegovernment}</h2>
					<h2 className="font-bold">{government?.descriptiongovernment}</h2>
						<div
							onClick={() =>
								deleteCountry({
									variables: {
										id: government.id,
									},
								})
							}
							color="yellow"
						/>
							
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
								<div
									onClick={() =>
										deletePrivatemnt({
											variables: {	
												id: privatemnt.id,
											},
										})
									}
									color="yellow"
								/>	
							
							</div>
						))}
					</div>

					<p className="text-slate-400 ">
					{college.description}
					</p>
					{/* add state form */}
					<form onSubmit={handleAddState} className="mt-5 space-x-2">
						<input
							value={name}
							onChange={(e) => setName(e.target.value)}
							type="text"
							placeholder="Enter State"
							className="bg-transparent border p-2 mx-2"
						/>
								<input
							value={descriptionst}
							onChange={(e) =>setDescriptionst(e.target.value)}
							type="text"
							placeholder="Enter State Description"
							className="bg-transparent border p-2 mx-2"
						/>
						<button
							disabled={!name}
							className="border p-2 rounded-lg disabled:text-gray-500 disabled:cursor-not-allowed"
						>
							Add State
						</button>
					</form>
					{/* add Country form */}
					<form onSubmit={handleAddCountry} className="mt-5 space-y-2">
						<input
							value={namecountry}
							onChange={(e) => setNamecountry(e.target.value)}
							type="text"
							placeholder="Enter Country"
							className="bg-transparent border p-2 mx-2"
						/>
								<input
							value={descriptioncountry}
							onChange={(e) =>setDescriptioncountry(e.target.value)}
							type="text"
							placeholder="Enter Country Description"
							className="bg-transparent border p-2 mx-2"
						/>
						<button
							disabled={!name}
							className="border p-2 rounded-lg disabled:text-gray-500 disabled:cursor-not-allowed"
						>
							Add Country
						</button>
					</form>

					{/* add Aided form */}
					<form onSubmit={handleAddAided} className="mt-5 space-y-2">
						<input
							value={nameaided}
							onChange={(e) => setNameaided(e.target.value)}
							type="text"
							placeholder="Enter Aided"
							className="bg-transparent border p-2 mx-2"
						/>
								<input
							value={descriptionaided}
							onChange={(e) =>setDescriptionaided(e.target.value)}
							type="text"
							placeholder="Enter Aided Description"
							className="bg-transparent border p-2 mx-2"
						/>
						<button
							disabled={!name}
							className="border p-2 rounded-lg disabled:text-gray-500 disabled:cursor-not-allowed"
						>
							Add Aided
						</button>
					</form>
					{/* add Government form */}
					<form onSubmit={handleAddGovernment} className="mt-5 space-y-2">
						<input
							value={namegovernment}
							onChange={(e) => setNamegovernment(e.target.value)}
							type="text"
							placeholder="Enter Government"
							className="bg-transparent border p-2 mx-2"
						/>
								<input
							value={descriptiongovernment}
							onChange={(e) =>setDescriptiongovernment(e.target.value)}
							type="text"
							placeholder="Enter Government Description"
							className="bg-transparent border p-2 mx-2"
						/>
						<button
							disabled={!name}
							className="border p-2 rounded-lg disabled:text-gray-500 disabled:cursor-not-allowed"
						>
							Add Government
						</button>
					</form>

	               {/* add Privatemnt form */}
	              <form onSubmit={handleAddPrivatemnt} className="mt-5 space-y-2">
						<input
							value={nameprivatemnt}
							onChange={(e) => setNameprivatemnt(e.target.value)}
							type="text"
							placeholder="Enter Privatemnt"
							className="bg-transparent border p-2 mx-2"
						/>
								<input
							value={descriptionprivatemnt}
							onChange={(e) =>setDescriptionprivatemnt(e.target.value)}
							type="text"
							placeholder="Enter Privatemnt Description"
							className="bg-transparent border p-2 mx-2"
						/>
						<button
							disabled={!name}
							className="border p-2 rounded-lg disabled:text-gray-500 disabled:cursor-not-allowed"
						>
							Add Privatemnt
						</button>
					</form>



				</div>
			</section>
			{/* update form */}
			<form onSubmit={handleUpdateCollege} className=" flex-col gap-2 ">
				<input
					value={title}
					onChange={(e) => setTitle(e.target.value)}
					type="text"
					placeholder="Enter new title"
					className="bg-transparent border text-white p-2 rounded-lg"
				/>
				<input
					value={url}
					onChange={(e) => setUrl(e.target.value)}
					type="text"
					placeholder="new url"
					className="bg-transparent border text-white p-2 rounded-lg"
				/>
				<input
					value={description}
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

				<button className="bg-yellow-500 rounded-lg p-2">Update</button>
			</form>
		</article>
	);
};

export default College;