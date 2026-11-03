import Link from "next/link";
import { Aky } from "@/components/Aky";
import { SiteHeader } from "@/components/Header";

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main className="wrap page prose">
        <Aky mood="sad" size={110} className="float-aky" />
        <h1>Page erased</h1>
        <p>Aky looked all over the board, but this page is not there. <Link href="/courses">Browse all courses</Link> instead.</p>
      </main>
    </>
  );
}
