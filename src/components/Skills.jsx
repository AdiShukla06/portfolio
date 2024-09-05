import React from "react";

function Skills() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
      <p>
        <strong className="text-green-500">Languages & Frameworks</strong>
        <br /> HTML, CSS, SASS, <span className="text-red-400">JavaScript</span>
        , TypeScript, <span className="text-red-400">React</span>, Redux,
        Python, TailwindCSS
      </p>
      <p>
        <strong className="text-green-500">Tools & Technologies</strong>
        <br /> Firebase, Appwrite,{" "}
        <span className="text-red-400">REST APIs</span>, Draft.js, TinyMCE,
        GSAP,
        <span className="text-red-400"> Framer Motion</span>, Shadcn, RadixUI
      </p>
      <p>
        <strong className="text-green-500">Version Control</strong>
        <br /> <span className="text-red-400">Git</span>, Github
      </p>
      <p>
        <strong className="text-green-500">Other</strong>
        <br /> <span className="text-red-400">AI/ML</span>, NLP, Image
        Processing, PostmanAPI
      </p>
      <p>
        <strong className="text-green-500">Soft skills</strong>
        <br /> Communication, Teamwork, Creativity,{" "}
        <span className="text-red-400">Leadership</span>
      </p>
    </div>
  );
}

export default Skills;
