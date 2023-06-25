import Image from "next/image";
import { Post } from "../../service/posts";

interface Props {
  props: Post;
}

export default function Post({
  props: { title, path, date, description, category },
}: Props) {
  return (
    <div className="border-2 border-red-300 rounded-xl m-3">
      <Image
        src={`/images/posts/${path}.png`}
        alt={title}
        width={400}
        height={400}
        className="rounded-xl"
        // fill={true}
      />
      <div className="text-right font-extralight">{date}I</div>
      <div className="text-center font-bold text-xl">{title}</div>
      <div className="text-center">{description}</div>
      <div className="text-center">{category}</div>
      <div>{`/images/posts/${path}.png`}</div>
    </div>
  );
}
