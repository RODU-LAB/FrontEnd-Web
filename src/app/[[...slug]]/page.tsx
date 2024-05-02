import "../../index.css";
import "../../styles/postsStyles.css";
import "../../styles/postStyles.css";
import "../../styles/modalStyles.css";
import "../../styles/makeNewApplication.css";
import "../../styles/retrieveStyles.css";
import { ClientOnly } from "./client";

export function generateStaticParams() {
  return [{ slug: [""] }];
}

export default function Page() {
  return <ClientOnly />; // We'll update this
}
