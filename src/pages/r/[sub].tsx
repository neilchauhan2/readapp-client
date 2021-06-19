import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import useSWR from "swr";
import PostCard from "../../components/PostCard";
import Sidebar from "../../components/Sidebar";

export default function Sub() {
  const router = useRouter();

  const subName = router.query.sub;

  const { data, error } = useSWR(subName ? `/subs/${subName}` : null);

  if (error) router.push("/");

  return (
    <div>
      <Head>{data && data.sub && <title>{data.sub?.title}</title>}</Head>
      {data && data.sub && (
        <>
          {/* Sub info */}
          <div>
            <div className="bg-blue-500">
              <div className="h-20 bg-blue-500"></div>
            </div>
            <div className="h-20 bg-white">
              <div className="container flex">
                <div className="absolute top-28">
                  <Image
                    src="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"
                    alt="Sub"
                    className="rounded-full cursor-pointer"
                    width={80}
                    height={80}
                  />
                </div>
                <div className="pt-1 pl-24">
                  <div className="flex items-center">
                    <h1 className="mb-1 text-2xl font-bold">
                      {data.sub.title}
                    </h1>
                  </div>
                  <p className="text-sm font-bold text-gray-500">
                    /r/{data.sub.name}
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Posts */}
          <div className="container flex pt-5">
            <div className="w-160">
              {data &&
                data.posts.map((post) => (
                  <PostCard key={post.identifier} post={post} />
                ))}
            </div>
            {data && data.sub && <Sidebar sub={data.sub} />}
          </div>
        </>
      )}
    </div>
  );
}
