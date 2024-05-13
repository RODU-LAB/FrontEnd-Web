import { getAllPosts } from "src/api/post/postAPI";

export async function generateStaticParams() {
  const zeroResult = await getAllPosts(0);
  if (zeroResult && zeroResult.posts.length > 0) {
    const loadTotal = zeroResult.total;
    if (loadTotal > 10) {
      // (result.total.toString().length - 1) * 10
      const digit = Math.floor(loadTotal / 10);
      // 게시물이 10개씩 나오기 때문에, total이 20일 때 페이지는 1이다.
      // 페이지는 0부터 시작
      const page = loadTotal % 10 === 0 ? digit - 1 : digit;
      const afterResult = await getAllPosts(page);
      if (afterResult && afterResult.posts.length > 0) {
        const lastId = afterResult.posts.pop()!.id;
        return Array.from({ length: lastId }, (_, i) => ({
          id: String(i + 1),
        }));
      }
    } else {
      return Array.from({ length: loadTotal }, (_, i) => ({
        id: String(i + 1),
      }));
    }
  }
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
