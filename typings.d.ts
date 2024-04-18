import {State, College, Government, Private } from "@prisma/client";

interface ICollege extends College {
	states:State[];
	aideds:Aided[];
	governments:Government[];
	countrys:Covntry[];
	privatemnts:Privatemnt[];
	college_Types:College_Type[];
}
