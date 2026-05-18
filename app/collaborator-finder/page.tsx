"use client";

import { useState } from "react";

import ResearcherCard from "./components/ResearcherCard";
import SearchResearcher from "./components/SearchResearcher";

const researchers = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    field: "Artificial Intelligence",
    university: "MIT",
    papers: 24,
    match: 92,
    skills: ["AI", "LLM", "Deep Learning"],
    avatar: "👩‍🔬",
  },

  {
    id: 2,
    name: "Prof. David Kim",
    field: "Cybersecurity",
    university: "Stanford",
    papers: 18,
    match: 87,
    skills: ["Security", "Blockchain", "Networks"],
    avatar: "👨‍💻",
  },

  {
    id: 3,
    name: "Dr. Emily Chen",
    field: "Natural Language Processing",
    university: "Oxford",
    papers: 31,
    match: 95,
    skills: ["NLP", "Transformers", "AI"],
    avatar: "👩‍🏫",
  },
];

export default function CollaboratorFinderPage() {

  const [search, setSearch] = useState("");

  const filteredResearchers = researchers.filter((researcher) => {

    const keyword = search.toLowerCase();

    return (
      researcher.name.toLowerCase().includes(keyword) ||
      researcher.field.toLowerCase().includes(keyword) ||
      researcher.skills.join(" ").toLowerCase().includes(keyword)
    );

  });

  return (
    <div
      className="
      min-h-screen
      bg-gradient-to-br
      from-slate-50
      to-blue-50
      p-8
      "
    >

      {/* HERO */}
      <div className="mb-10">

        <h1
          className="
          text-5xl
          font-extrabold
          bg-gradient-to-r
          from-blue-600
          to-indigo-600
          bg-clip-text
          text-transparent
          "
        >
          Collaborator Finder
        </h1>

        <p className="text-gray-600 mt-3 text-lg">
          Find researchers with similar interests and build research teams
        </p>

      </div>

      {/* SEARCH */}
      <div className="mb-8">
        <SearchResearcher
          search={search}
          setSearch={setSearch}
        />
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {filteredResearchers.map((researcher) => (
          <ResearcherCard
            key={researcher.id}
            researcher={researcher}
          />
        ))}

      </div>

    </div>
  );
}