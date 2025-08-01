import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import { editorialTeam } from '../data/data';


export const EditorialTeam = () => {
  return (
    <div className="py-16 bg-gradient-to-b from-zinc-900 to-zinc-950 text-white">
      <h2 className="text-3xl font-bold text-center mb-12">Corpo Editorial</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 px-4 max-w-7xl mx-auto">
        {editorialTeam.map((editor, index) => (
          <motion.div
            key={editor.name}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            className="bg-zinc-800 rounded-xl overflow-hidden shadow-lg flex flex-col items-center text-center p-4 hover:shadow-xl transition"
          >
            <img
              src={editor.image}
              alt={editor.name}
              className="w-32 h-32 object-cover rounded-full shadow-md mb-4"
            />
            <h3 className="text-lg font-semibold">{editor.name}</h3>
            <p className="text-sm text-zinc-300 mb-4">{editor.role}</p>
            <div className="flex justify-center gap-4 text-zinc-400 text-lg">
              {editor.links.site && (
                <a href={editor.links.site} target="_blank" rel="noopener noreferrer">
                  <Icon icon='material-symbols:globe' className="hover:text-white transition" />
                </a>
              )}
              {editor.links.facebook && (
                <a href={editor.links.facebook} target="_blank" rel="noopener noreferrer">
                  <Icon icon='ic:baseline-facebook' className="hover:text-white transition" />
                </a>
              )}
              {editor.links.instagram && (
                <a href={editor.links.instagram} target="_blank" rel="noopener noreferrer">
                  <Icon icon='mdi:instagram' className="hover:text-white transition" />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
