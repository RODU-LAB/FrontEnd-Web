import UpdatePost from "src/components/UpdatePost";

export default function CreatePost({ params }: { params: { slug: string } }) {
  return (
    <UpdatePost
      loadData={{
        ownerName: "",
        institution: "",
        phoneNumber: "",
        email: "",
        title: "",
        content: "",
        isLocked: false,
        password: "",
      }}
      status="create"
      slugId={params.slug}
    />
  );
}
