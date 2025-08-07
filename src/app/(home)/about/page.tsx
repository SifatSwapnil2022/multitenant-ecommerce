// app/about/page.tsx or page.jsx for Next.js 13+/14
const teamMembers = [
  {
    name: "Sifatullah Sheikh",
    role: "Founder & CEO",
    image: "/team/sifatullah.jpg",
    bio: "Tech enthusiast with a vision to empower through innovation.",
  },
  {
    name: "Farhana Tasnim",
    role: "CTO",
    image: "/team/ayesha.jpg",
    bio: "Leads the engineering team with deep expertise in scalable systems.",
  },
  {
    name: "Apurbo Paul",
    role: "Lead Designer",
    image: "/team/tanvir.jpg",
    bio: "Creative mind behind our visual storytelling.",
  },
];

const Page = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero */}
      <section className="relative bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">About Us</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          We are a team of passionate innovators dedicated to building powerful digital solutions.
        </p>
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-white rounded-t-3xl"></div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Our Story</h2>
          <p className="text-lg text-gray-600">
            Founded in 2025, we began as a small group of developers and designers with big dreams. Over time, our
            commitment to quality and innovation has helped us grow into a leading digital solutions company.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Meet the Team</h2>
          <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
            {teamMembers.map((member, idx) => (
              <div
                key={idx}
                className="bg-gray-100 rounded-lg p-6 shadow hover:shadow-xl transition-shadow text-center"
              >
                
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-indigo-600 font-medium">{member.role}</p>
                <p className="text-sm text-gray-600 mt-2">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-600 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Join Our Journey</h2>
        <p className="text-lg mb-6">
          Whether you are a future team member, a partner, or a client, we’d love to collaborate with you.
        </p>
        <a
          href="/contact"
          className="bg-white text-indigo-600 font-semibold px-6 py-3 rounded-full hover:bg-indigo-100 transition"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
};

export default Page;
