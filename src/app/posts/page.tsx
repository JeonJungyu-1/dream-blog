import Post from "@/components/Post";
import { getPosts } from "../../../service/posts";

export default async function PostsPage() {
  const posts = await getPosts();

  return (
    <div className="flex flex-wrap justify-center">
      {posts.map((el, index) => (
        <Post key={index} props={el} />
      ))}
    </div>
  );
}
