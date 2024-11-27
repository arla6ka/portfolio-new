"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocalStorage } from 'usehooks-ts';

interface Comment {
  _id: string;
  name: string;
  message: string;
  linkedIn: string;
  createdAt: string;
}

const Comments = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [linkedIn, setLinkedIn] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [deviceId] = useLocalStorage('deviceId', crypto.randomUUID());
  const [hasCommented, setHasCommented] = useState(false);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await fetch('/api/notes');
        const data = await response.json();
        setComments(data);
      } catch (error) {
        console.error('Failed to fetch notes:', error);
      }
    };

    fetchNotes();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (hasCommented) return;

    setIsLoading(true);
    setError('');

    try {
      const response = await fetch('/api/notes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, message, linkedIn, deviceId }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Failed to submit note');
      }

      const newNote = await response.json();
      setComments(prev => [newNote, ...prev]);
      setName('');
      setMessage('');
      setLinkedIn('');
      setHasCommented(true);
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Something went wrong');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-8 space-y-16">
      {!hasCommented && (
        <motion.form
          onSubmit={handleSubmit}
          className="relative space-y-6 p-8 bg-white/[0.03] rounded-2xl border border-white/[0.05]
                   backdrop-blur-xl shadow-2xl"
        >
          <h3 
            className="text-[#fef4e4] text-xl mb-6 tracking-tight"
            style={{ fontFamily: '"Overused Grotesk", sans-serif' }}
          >
            Leave a Note
          </h3>
          
          <div className="space-y-4">
            <div className="relative group">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                maxLength={50}
                required
                className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-5 py-4
                         text-[#fef4e4] placeholder:text-zinc-500
                         focus:outline-none focus:border-[#fef4e4]/20 focus:bg-white/[0.03]
                         transition-all duration-300"
                style={{ fontFamily: '"Consolas", monospace' }}
              />
              <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100
                            bg-gradient-to-r from-[#fef4e4]/5 to-transparent
                            rounded-xl blur-xl transition-opacity duration-500" />
            </div>

            <div className="relative group">
              <input
                type="url"
                value={linkedIn}
                onChange={(e) => setLinkedIn(e.target.value)}
                placeholder="Your LinkedIn URL"
                required
                className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-5 py-4
                         text-[#fef4e4] placeholder:text-zinc-500
                         focus:outline-none focus:border-[#fef4e4]/20 focus:bg-white/[0.03]
                         transition-all duration-300"
                style={{ fontFamily: '"Consolas", monospace' }}
              />
              <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100
                            bg-gradient-to-r from-[#fef4e4]/5 to-transparent
                            rounded-xl blur-xl transition-opacity duration-500" />
            </div>

            <div className="relative group">
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Share your thoughts..."
                maxLength={500}
                required
                rows={4}
                className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-5 py-4
                         text-[#fef4e4] placeholder:text-zinc-500
                         focus:outline-none focus:border-[#fef4e4]/20 focus:bg-white/[0.03]
                         transition-all duration-300 resize-none"
                style={{ fontFamily: '"Consolas", monospace' }}
              />
              <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100
                            bg-gradient-to-r from-[#fef4e4]/5 to-transparent
                            rounded-xl blur-xl transition-opacity duration-500" />
            </div>
          </div>

          {error && (
            <p className="text-red-400/80 text-sm" style={{ fontFamily: '"Consolas", monospace' }}>
              {error}
            </p>
          )}

          <motion.button
            type="submit"
            disabled={isLoading}
            className="w-full bg-[#fef4e4]/[0.03] border border-[#fef4e4]/10 
                     text-[#fef4e4] rounded-xl py-4 px-5
                     text-sm tracking-wide
                     hover:border-[#fef4e4]/20 hover:bg-[#fef4e4]/[0.05]
                     transition-all duration-300
                     disabled:opacity-50 disabled:cursor-not-allowed
                     backdrop-blur-xl"
            style={{ fontFamily: '"Consolas", monospace' }}
            whileHover={{ scale: 1.0015 }}
            whileTap={{ scale: 0.995 }}
          >
            {isLoading ? 'Sending...' : 'Share Note'}
          </motion.button>
        </motion.form>
      )}

      <div className="space-y-6">
        <AnimatePresence mode="popLayout">
          {comments.map((comment, index) => (
            <motion.div
              key={comment._id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group relative bg-white/[0.02] backdrop-blur-xl 
                       border border-white/[0.05] rounded-2xl p-6
                       hover:border-white/[0.1] transition-all duration-500"
            >
              <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100
                            bg-gradient-to-br from-[#fef4e4]/[0.07] to-transparent
                            rounded-2xl blur-2xl transition-opacity duration-500" />
              
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/[0.05] border border-white/[0.08]
                                flex items-center justify-center">
                    <span className="text-[#fef4e4]/60 text-lg">
                      {comment.name.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <div>
                    <a
                      href={comment.linkedIn}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="group/link flex items-center gap-2 hover:opacity-80 transition-opacity"
                    >
                      <span 
                        className="text-[#fef4e4] font-medium tracking-wide"
                        style={{ fontFamily: '"Consolas", monospace' }}
                      >
                        {comment.name}
                      </span>
                      <svg 
                        className="w-4 h-4 text-[#fef4e4] opacity-40 group-hover/link:opacity-80 transition-opacity"
                        viewBox="0 0 24 24" 
                        fill="currentColor"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                    <p 
                      className="text-xs text-[#fef4e4]/40 mt-0.5"
                      style={{ fontFamily: '"Consolas", monospace' }}
                    >
                      {new Date(comment.createdAt).toLocaleDateString('en-US', {
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </p>
                  </div>
                </div>
              </div>
              
              <p 
                className="text-[#fef4e4]/80 leading-relaxed pl-[52px]"
                style={{ fontFamily: '"Consolas", monospace' }}
              >
                {comment.message}
              </p>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Comments;