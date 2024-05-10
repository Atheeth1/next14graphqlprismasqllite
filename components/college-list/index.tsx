"use client";

import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
export const BASE_URL = process.env.NEXT_PUBLIC_URL;

export default function CollegeList({ collegeList }) {

  return (
    <>
      <div className="p-4 mx-auto lg:max-w-6xl md:max-w-4xl sm:max-w-full">
        <h2 className="text-4xl font-bold underline text-gray-800 text-center  mb-12">Colleges-list</h2>
        <h2 className="text-2xl font-bold text-red-800 text-center mb-12"><Link href={"/"}>Go Home</Link></h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {collegeList && collegeList.length > 0
            ? collegeList.map((college) => (
                <Link href={`${BASE_URL}/college-list/${college.id}`}>
                  <Card>
                    <CardContent className="bg-white rounded-md overflow-hidden shadow-md cursor-pointer hover:scale-[1.1] transition-all">
                      <div className="w-full aspect-w-16 aspect-h-8 lg:h-80">
                        <img
                          src={college.image}
                          alt={college.name}
                          className="h-full w-full object-cover object-top"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-lg font-bold text-gray-900">
                         Title: {college.title}
                        </h3>
                        <div className="mt-4 flex items-center flex-wrap gap-2">
                          <p className="text-lg text-gray-600">
                            Rating: {college.rating}
                          </p>
                         
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))
            : null}
        </div>
      </div>
    </>
  );
}