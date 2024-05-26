import { notFound } from "next/navigation";

import { eduDetailContents } from "src/data/eduDetailContents";
import DetailContent from "src/components/DetailContent";

export async function generateStaticParams() {
  return Object.keys(eduDetailContents).map((slug) => ({ slug }));
}

export default function DetailContentPage({
  params,
}: {
  params: { slug: string };
}) {
  const content = eduDetailContents[params.slug];

  if (!content) {
    notFound();
  }

  return <DetailContent content={content} />;
}
