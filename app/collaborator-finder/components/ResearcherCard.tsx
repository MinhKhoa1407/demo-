"use client";

import SkillTags from "./SkillTags";
import MatchProgress from "./MatchProgress";

type Props = {
  researcher: {
    id: number;
    name: string;
    field: string;
    university: string;
    papers: number;
    match: number;
    skills: string[];
    avatar: string;
  };
};

export default function ResearcherCard({
  researcher,
}: Props) {

  return (
    <div
      className="
      bg-white
      rounded-3xl
      p-6
      shadow-md
      hover:shadow-2xl
      hover:-translate-y-1
      transition-all
      duration-300
      border
      border-gray-100
      "
    >

      {/* TOP */}
      <div className="flex items-start gap-4">

        <div
          className="
          w-16
          h-16
          rounded-full
          bg-blue-100
          flex
          items-center
          justify-center
          text-3xl
          "
        >
          {researcher.avatar}
        </div>

        <div>

          <h2 className="text-2xl font-bold text-gray-800">
            {researcher.name}
          </h2>

          <p className="text-blue-600 font-medium mt-1">
            {researcher.field}
          </p>

          <p className="text-gray-500 text-sm mt-1">
            {researcher.university}
          </p>

        </div>

      </div>

      {/* PAPERS */}
      <div className="mt-5">

        <p className="text-gray-600">
          Published Papers:
          <span className="font-bold text-gray-800 ml-2">
            {researcher.papers}
          </span>
        </p>

      </div>

      {/* SKILLS */}
      <SkillTags skills={researcher.skills} />

      {/* MATCH */}
      <MatchProgress match={researcher.match} />

      {/* BUTTON */}
      <button
        className="
        mt-6
        w-full
        py-3
        rounded-2xl
        bg-gradient-to-r
        from-blue-500
        to-indigo-600
        text-white
        font-semibold
        hover:opacity-90
        transition
        "
      >
        Connect
      </button>

    </div>
  );
}