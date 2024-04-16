import {State, College } from "@prisma/client";

interface ICollege extends College {
	states:State[];
}