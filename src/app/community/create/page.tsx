import UpdatePost from "src/components/UpdatePost";

export default function CreatePost({ params }: { params: { slug: string } }) {
  <UpdatePost loadData={{}} status="create" slugId={params.slug} />;
}
