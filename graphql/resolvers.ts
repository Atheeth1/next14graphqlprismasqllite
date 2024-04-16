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
	// nested resolve function to get auhtors in colleges
	College: {
		states: async (parent: any, _args: any, context: Context) => {
			return await context.prisma.state.findMany({
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
	},
};