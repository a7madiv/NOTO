import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Twitter, Mail } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { fadeIn, staggerContainer } from "../utils/animations";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  social: {
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
}

const teamMembers: TeamMember[] = [
  {
    name: "Ahmad Ibrahim",
    role: "Chief Technology Officer",
    image: "https://i.imgur.com/w3mYnoj.jpeg",
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "mailto:sarah@noto.com",
    },
  },
  {
    name: "Shatha Bitar",
    role: "Chief Medical Officer",
    image: "https://i.imgur.com/GF8Y2ti.jpeg",
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
  },
  {
    name: "Wasan Alqasem",
    role: "Head of Research",
    image: "https://i.imgur.com/xFIBIzy.jpeg",
    social: {
      linkedin: "https://linkedin.com",
      email: "mailto:maya@noto.com",
    },
  },
  {
    name: "Leen Shareef",
    role: "Product Director",
    image: "https://i.imgur.com/fHAk4Fa.png",
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "mailto:james@noto.com",
    },
  },
  {
    name: "Fairuz Jomaa",
    role: "Clinical Implementation Specialist",
    image: "https://i.imgur.com/cZaML6D.jpeg",
    social: {
      linkedin: "https://linkedin.com",
      email: "mailto:emma@noto.com",
    },
  },
];

const Team: React.FC = () => {
  const [ref, controls] = useScrollAnimation();

  return (
    <section id="team" className="bg-gray-900 py-24 px-4">
      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={controls}
        className="max-w-7xl mx-auto"
      >
        <motion.div variants={fadeIn} className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Meet Our Team</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Our diverse team of experts combines medical expertise with
            technological innovation to revolutionize healthcare documentation.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12">
          {teamMembers.map((member) => (
            <motion.div
              key={member.name}
              variants={fadeIn}
              whileHover={{ y: -8 }}
              className="flex flex-col items-center"
            >
              {/* Circular Profile Card */}
              <motion.div
                className="w-[200px] aspect-square rounded-full relative group
                         bg-white shadow-lg hover:shadow-xl transition-all duration-300
                         overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Full Circle Profile Image */}
                <div className="absolute inset-0">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  {/* Overlay for social icons */}
                  <div
                    className="absolute inset-0 bg-gradient-to-b from-transparent
                                to-black/50 opacity-0 group-hover:opacity-100
                                transition-opacity duration-300"
                  />
                </div>

                {/* Social Icons */}
                <div
                  className="absolute bottom-6 left-0 right-0 flex justify-center
                              gap-4 opacity-0 group-hover:opacity-100 transition-opacity
                              duration-300 transform translate-y-2
                              group-hover:translate-y-0"
                >
                  {member.social.linkedin && (
                    <motion.a
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-blue-400 transition-colors"
                      aria-label={`${member.name}'s LinkedIn profile`}
                    >
                      <Linkedin size={20} />
                    </motion.a>
                  )}
                  {member.social.twitter && (
                    <motion.a
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      href={member.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-blue-400 transition-colors"
                      aria-label={`${member.name}'s Twitter profile`}
                    >
                      <Twitter size={20} />
                    </motion.a>
                  )}
                  {member.social.email && (
                    <motion.a
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      href={member.social.email}
                      className="text-white hover:text-emerald-400 transition-colors"
                      aria-label={`Email ${member.name}`}
                    >
                      <Mail size={20} />
                    </motion.a>
                  )}
                </div>
              </motion.div>

              {/* Name and Role */}
              <div className="text-center mt-4">
                <h3 className="text-lg font-bold text-white tracking-tight">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-400 mt-1">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Team;
