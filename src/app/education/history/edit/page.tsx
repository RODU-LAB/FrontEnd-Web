"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useRecoilValue, useResetRecoilState } from "recoil";
import { eduSessionAtom } from "src/recoil/eduSessionAtom";
import { detailApplicationAtom } from "src/recoil/detailApplicationAtom";

import isOverEduSession from "src/utils/isOverEduSession";

import UpdateApplication from "src/components/UpdateApplication";

export default function EduApplicationEdit() {
  const router = useRouter();
  const eduSession = useRecoilValue(eduSessionAtom);
  const detailApplication = useRecoilValue(detailApplicationAtom);
  const resetEditApplication = useResetRecoilState(detailApplicationAtom);
  const resetEduSession = useResetRecoilState(eduSessionAtom);

  useEffect(() => {
    if (!isOverEduSession(eduSession)) {
      resetEditApplication();
      resetEduSession();
      alert("세션이 만료되었습니다.");
      router.push("/education/history");
    }
  }, [eduSession, resetEditApplication, resetEduSession, router]);

  return <UpdateApplication data={detailApplication} session={eduSession.id} />;
}
