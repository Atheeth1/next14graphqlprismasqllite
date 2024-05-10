import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="w-full bg-red min-h-screen">
      <Skeleton />
    </div>
  );
}
