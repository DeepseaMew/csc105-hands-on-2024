import React from "react";
import { useParams, useSearchParams } from "react-router-dom";
import Navbar from "../components/Navbar";

const FavoriteDetailPage = () => {
  const { id } = useParams();
  const [searchParams] = useSearchParams();

  const query = searchParams.get("q");
  const size = searchParams.get("size");

  return (
    <div className="min-h-screen bg-slate-200">
      <Navbar />
      Your favourite post is <span className="font-bold mr-1">{query}</span>.
      Post ID is <span className="font-bold ml-1">{id}</span>. Size is{" "}
      <span className="font-bold ml-1">{size}</span>.
    </div>
  );
};

export default FavoriteDetailPage;
