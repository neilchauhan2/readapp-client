import Head from "next/head";
import { useEffect, useState } from "react";
import axios from "axios";
import { Post } from "../types";
import PostCard from "../components/PostCard";
import useSWR from "swr";

export default function Home() {
  const { data: posts } = useSWR("/posts");

  return (
    <>
      <Head>
        <title>ReadApp: The front page of the internet.</title>
      </Head>
      <div className="container flex pt-4">
        {/* Posts */}
        <div className="w-160">
          {posts?.map((post) => (
            <PostCard post={post} key={post.identifier} />
          ))}
        </div>
        {/* Sidebar */}
      </div>
    </>
  );
}
