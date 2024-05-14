import Link from "next/link";


export default function CollegeDetailsItem({ getCollegeDetails }) {
  return (
    <>
      <Link href={"/college-list"}>Go to College list</Link>
      <div className="p-6 lg:max-w-6xl max-w-2xl mx-auto">
        <div className="grid items-start grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="w-full lg:sticky top-0 sm:flex gap-2">
            <img
              src={getCollegeDetails?.image}
              alt={getCollegeDetails?.name}
              className="h-full w-full object-cover object-top"
            />
          </div>
          <div>
            <h2 className="text-3xl font-extrabold text-gray-950">
              {getCollegeDetails?.title}
            </h2>
            <div className="mt-5">
              <p className="text-xl text-gray-800">
                {getCollegeDetails?.description}
              </p>
            </div>
            <div className="mt-5">
              <h3 className="text-lg font-bold text-gray-700">College Details</h3>
              <ul className="space-y-3 list-disc mt-4 pl-4 text-sm text-gray-700">
                {getCollegeDetails?.map((college) => (
                  <li>{college}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
