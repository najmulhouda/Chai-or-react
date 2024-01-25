import React, { useEffect, useState } from "react";
import appWriteService from "../appwrite/config";
import { Container, PostCard } from "../components";
function AllPosts() {
  const [post, setPost] = useState([]);
  useEffect(() => {}, []);
  appWriteService.getPosts([]).then((posts) => {
    if (posts) {
      setPost(posts.documents);
    }
  });

  return (
    <div className="py-8 w-full">
      <Container>
        <div className="flex flex-wrap">
          {post.map((post) => (
            <div key={post.$id} className="p-2 w1/4">
              <PostCard post={post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default AllPosts;
