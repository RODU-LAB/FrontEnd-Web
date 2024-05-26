"use client";

import { useRecoilValue } from "recoil";
import { detailPostState } from "src/recoil/detailPostState";
import UpdatePost from "src/components/UpdatePost";

export default function EditPost({ params }: { params: { slug: string } }) {
  const post = useRecoilValue(detailPostState);
  return <UpdatePost loadData={post} status="edit" slugId={params.slug} />;
}
