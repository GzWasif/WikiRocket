"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function Search() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSearch("");
    router.push(`/${search}/`);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="w-50 flex justify-center items-center flex-col gap-y-2 md:justify-between md:flex-row"
    >
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="bg-white p-2 w-80 text-xl rounded-xl"
        placeholder="Search"
      />
      <button
        type="submit"
        className="p-2 w-20 text-base rounded-md bg-slate-300 ml-2 font-bold"
      >
        Search
      </button>
    </form>
  );
}
