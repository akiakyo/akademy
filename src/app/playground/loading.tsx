import { SiteHeader } from "@/components/Header";
import { PlaygroundSkeleton } from "@/components/Skeleton";

export default function LoadingPlayground() {
  return (
    <>
      <SiteHeader />
      <main className="pg-page">
        <PlaygroundSkeleton />
      </main>
    </>
  );
}
