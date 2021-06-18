import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import useSWR from "swr";
import PostCard from "../../components/PostCard";

export default function Sub() {
  const router = useRouter();

  const subName = router.query.sub;

  const { data, error } = useSWR(subName ? `/subs/${subName}` : null);

  if (error) router.push("/");

  return (
    <div className="container flex pt-5">
      {data && data.sub && (
        <div className="w-160">
          {data &&
            data.posts.map((post) => (
              <PostCard key={post.identifier} post={post} />
            ))}
        </div>
      )}
    </div>
  );
}
