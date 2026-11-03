import { SiteHeader } from "@/components/Header";
import { Bone, Loading } from "@/components/Skeleton";

export default function LoadingSearch() {
  return (
    <>
      <SiteHeader />
      <main className="wrap page">
        <Loading label="Searching" />
        <Bone w="38%" h={40} />
        <div className="skeleton-gap skeleton-panel"><Bone w="55%" h={18} /><Bone /><Bone w="70%" /></div>
        <div className="skeleton-gap skeleton-panel"><Bone w="45%" h={18} /><Bone /><Bone w="60%" /></div>
      </main>
    </>
  );
}
