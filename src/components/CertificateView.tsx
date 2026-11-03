"use client";

import Link from "next/link";
import { useProgress } from "@/lib/store";
import { Icon } from "./Icon";

export function CertificateView({ courseSlug, courseTitle }: { courseSlug: string; courseTitle: string }) {
  const { certificates, name } = useProgress();
  const earned = certificates[courseSlug];

  return (
    <>
      <div className="cert-frame">
        <div className="cert">
          <div className="cert-logo">
            akademy<span>.</span>
          </div>
          <p className="cert-kicker">CERTIFICATE OF COMPLETION</p>
          <p>This certifies that</p>
          <p className="cert-name">{earned?.name || name || "[Student name]"}</p>
          <p>has completed the course and passed the final exam for</p>
          <p className="cert-course">{courseTitle}</p>
          <p className="cert-score">Final exam score: {earned ? earned.score : "[score]"}%</p>
          <div className="cert-foot">
            <div className="cert-sign">
              <strong>{earned?.date ?? "[Date issued]"}</strong>
              <span>Date</span>
            </div>
            <div className="seal">
              <b>A.</b>
              <small>CERTIFIED</small>
            </div>
            <div className="cert-sign right">
              <em>Aquio Fulgencio</em>
              <span>Founder, Akademy</span>
            </div>
          </div>
          <p className="cert-id">Certificate ID {earned?.id ?? "[AKD-XXXX-XXXX]"}</p>
        </div>
      </div>
      <div className="cert-actions">
        {earned ? (
          <button className="btn btn-chalk" onClick={() => window.print()}>
            <Icon name="print" size={16} />
            Print or save as PDF
          </button>
        ) : (
          <>
            <p>This is a sample. Pass the final exam to earn yours.</p>
            <Link href={`/learn/${courseSlug}/exam`} className="btn btn-chalk">
              <Icon name="certificate" size={16} />
              Take the final exam
            </Link>
          </>
        )}
      </div>
    </>
  );
}
