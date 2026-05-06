// import { experience } from "@/app/data/experience";
// import { notFound } from "next/navigation";

// export default function Page({ params }: { params: { slug: string } }) {
//   const exp = experience.find((e) => e.slug === params.slug);

//   if (!exp) return notFound();

//   return (
//     <div className="min-h-screen bg-[#0a0a0a] text-white px-4 py-20">
//       <div className="max-w-4xl mx-auto">

//         <h1 className="text-4xl font-bold mb-2">{exp.role}</h1>

//         <p className="text-gray-400 mb-6">
//           {exp.company} • {exp.period}
//         </p>

//         <ul className="space-y-3 text-gray-300 list-disc ml-5 mb-10">
//           {exp.responsibilities.map((r, i) => (
//             <li key={i}>{r}</li>
//           ))}
//         </ul>

//         <div className="grid md:grid-cols-2 gap-6">
//           {exp.images.map((img, i) => (
//             <img
//               key={i}
//               src={img}
//               className="rounded-xl object-cover w-full h-64"
//             />
//           ))}
//         </div>

//       </div>
//     </div>
//   );
// }

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <div style={{ color: "white", padding: "50px" }}>
      slug: {params.slug}
    </div>
  );
}