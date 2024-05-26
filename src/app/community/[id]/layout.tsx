import { getAllPosts } from "src/api/post/postAPI";

export async function generateStaticParams() {
  const result = await getAllPosts(0);
  if (result && result.posts.length > 0) {
    const lastId = result.posts[0].id;
    return Array.from({ length: lastId }, (_, i) => ({
      id: String(i + 1),
    }));
  }
  return [];
}

export default function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { id: string };
}) {
  return <>{children}</>;
}
