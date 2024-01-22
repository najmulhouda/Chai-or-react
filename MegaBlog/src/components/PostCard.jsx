import React from "react";
import { Link } from "react-router-dom";
import appWriteService from "../appwrite/config";

function PostCard({ $id, title, featuredImage }) {
  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full rounded-xl p-4">
        <div className="w-full justify-center mb-4">
          <img
            src={appWriteService.getFileUrl(featuredImage)}
            alt={title}
            className="w-full object-cover rounded-xl"
          />
          <h2 className="text-xl font-bold">{title}</h2>
        </div>
      </div>
    </Link>
  );
}

export default PostCard;
