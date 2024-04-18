import { Context } from "@/pages/api/graphql";

export const resolvers = {
	Query: {
		//get college by id
		college: async (_parent: any, args: any, context: Context) => {
			return await context.prisma.college.findUnique({
				where: {
					id: args.id,
				},
			});
		},
		// get all colleges
		colleges: async (_parent: any, _args: any, context: Context) => {
			return await context.prisma.college.findMany({
				include: { state: true },
			});
		},
	},
	// nested resolve function to get state in colleges
	College: {
		states: async (parent: any, _args: any, context: Context) => {
			return await context.prisma.state.findMany({
				where: {
					collegeId: parent.id,
				},
			});
		},
		countrys: async (parent: any, _args: any, context: Context) => {
			return await context.prisma.country.findMany({
				where: {
					collegeId: parent.id,
				},
			});
		},

		governments: async (parent: any, _args: any, context: Context) => {
			return await context.prisma.government.findMany({
				where: {
					collegeId: parent.id,
				},
			});
		},

		aideds: async (parent: any, _args: any, context: Context) => {
			return await context.prisma.aided.findMany({
				where: {
					collegeId: parent.id,
				},
			});
		},

		privates: async (parent: any, _args: any, context: Context) => {
			return await context.prisma.private.findMany({
				where: {
					collegeId: parent.id,
				},
			});
		},

		college_Types: async (parent: any, _args: any, context: Context) => {
			return await context.prisma.college_Type.findMany({
				where: {
					collegeId: parent.id,
				},
			});
		},


	},
	Mutation: {
		// add college
		addCollege: async (_parent: any, args: any, context: Context) => {
			return await context.prisma.college.create({
				data: {
					title: args.title,
					image: args.image,
					description: args.description,
					email:args.email,
					phone:args.phone,
					location: args.location,
				},
			});
		},
		// update college
		updateCollege: async (_parent: any, args: any, context: Context) => {
			return await context.prisma.college.update({
				where: {
					id: args.id,
				},
				data: {
					title: args.title,
					image: args.image,
					description: args.description,
					email:args.email,
					phone:args.phone,
					location: args.location
				},
			});
		},

		// delete college
		deleteCollege: async (_parent: any, args: any, context: Context) => {
			return await context.prisma.college.delete({
				where: {
					id: args.id,
				},
			});
		},

		// State Mutations

		// add state
		addState: async (_parent: any, args: any, context: Context) => {
			return await context.prisma.state.create({
				data: {
					collegeId: args.collegeId,
					name: args.name,
					descriptionst: args.descriptionst,
				},
			});
		},
		// delete state
		deleteState: async (_parent: any, args: any, context: Context) => {
			return await context.prisma.state.delete({
				where: {
					id: args.id,
				},
			});
		},

		//Country Mutations

		// add Country
		addCountry: async (_parent: any, args: any, context: Context) => {
			return await context.prisma.country.create({
				data: {
					collegeId: args.collegeId,
					namecountry: args.namecountry,
					descriptioncountry: args.descriptioncountry,
				},
			});
		},
		// delete state
		deleteCountry: async (_parent: any, args: any, context: Context) => {
			return await context.prisma.country.delete({
				where: {
					id: args.id,
				},
			});
		},


	//Government Mutations

		// add Government
		addGovernment: async (_parent: any, args: any, context: Context) => {
			return await context.prisma.government.create({
				data: {
					collegeId: args.collegeId,
					namegovernment: args.namegovernment,
					descriptiongovernment: args.descriptiongovernment,
				},
			});
		},
		// delete state
		deleteGovernment: async (_parent: any, args: any, context: Context) => {
			return await context.prisma.government.delete({
				where: {
					id: args.id,
				},
			});
		},




	//Aided Mutations

		// add Aided
		addAided: async (_parent: any, args: any, context: Context) => {
			return await context.prisma.aided.create({
				data: {
					collegeId: args.collegeId,
					nameaided: args.nameaided,
					descriptionaided: args.descriptionaided,
				},
			});
		},
		// delete state
		deleteAided: async (_parent: any, args: any, context: Context) => {
			return await context.prisma.aided.delete({
				where: {
					id: args.id,
				},
			});
		},



						//Private Mutations

		// add Private
		addPrivate: async (_parent: any, args: any, context: Context) => {
			return await context.prisma.private.create({
				data: {
					collegeId: args.collegeId,
					nameprivate: args.nameprivate,
					descriptionprivate: args.descriptionprivate,
				},
			});
		},
		// delete state
		deletePrivate: async (_parent: any, args: any, context: Context) => {
			return await context.prisma.private.delete({
				where: {
					id: args.id,
				},
			});
		},


						//College_Type Mutations

		// add College_Type
		addCollege_Type: async (_parent: any, args: any, context: Context) => {
			return await context.prisma.college_Type.create({
				data: {
					collegeId: args.collegeId,
					name: args.name,
					descriptionst: args.descriptionst,
				},
			});
		},
		// delete College_Type
		deleteCollege_Type: async (_parent: any, args: any, context: Context) => {
			return await context.prisma.college_Type.delete({
				where: {
					id: args.id,
				},
			});
		},






	},
};