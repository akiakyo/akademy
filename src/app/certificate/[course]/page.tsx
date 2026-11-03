import type { Metadata } from "next";
import { NO_INDEX } from "@/lib/seo";
import { notFound } from "next/navigation";
import { CertificateView } from "@/components/CertificateView";
import { FocusHeader } from "@/components/Header";
import { COURSES, getCourse } from "@/content";

type Params = { params: Promise<{ course: string }> };

export const metadata: Metadata = { title: "Certificate", robots: NO_INDEX };
export const dynamicParams = false;

export function generateStaticParams() {
  return COURSES.map((c) => ({ course: c.slug }));
}

export default async function CertificatePage({ params }: Params) {
  const { course: c } = await params;
  const course = getCourse(c);
  if (!course) notFound();

  return (
    <div className="green-page">
      <FocusHeader back={`/learn/${course.slug}`} label="Back to course" />
      <main className="cert-page">
        <CertificateView courseSlug={course.slug} courseTitle={course.certificateName} />
      </main>
    </div>
  );
}
