import Link from "next/link";

export const BASE_URL = process.env.NEXT_PUBLIC_URL;

export default function Home() {
	return (
		<div className=" max-w-5xl mx-auto ">
				<Link
				href={`${BASE_URL}/dashboard`}
				className="bg-orange-500 mt-5 p-2 gap-3 rounded-lg">
				Dashboard
			</Link>
		</div>
	);
}