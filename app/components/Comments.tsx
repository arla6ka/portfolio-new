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
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [deviceId] = useLocalStorage('deviceId', crypto.randomUUID());
  const [hasCommented, setHasCommented] = useState(false);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('/api/notes');
        const data = await response.json();
        setComments(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error('Failed to fetch notes:', error);
        setComments([]);
      } finally {
        setIsLoading(false);
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
    <div className="p-4 sm:p-6 md:p-8 space-y-8 sm:space-y-12">
      {!hasCommented && (
        <motion.form
          onSubmit={handleSubmit}
          className="relative space-y-4 sm:space-y-6 p-4 sm:p-6 md:p-8 
                   bg-white/[0.03] rounded-xl sm:rounded-2xl border border-white/[0.05]
                   backdrop-blur-xl shadow-2xl"
        >
          <h3 
            className="font-overused text-[#fef4e4] text-lg sm:text-xl mb-4 sm:mb-6 tracking-tight"
          >
            Leave a Note
          </h3>
          
          <div className="space-y-3 sm:space-y-4">
            <div className="relative group">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                maxLength={50}
                required
                className="font-consolas w-full bg-white/[0.02] border border-white/10 
                         rounded-lg sm:rounded-xl px-4 py-3 sm:px-5 sm:py-4
                         text-[#fef4e4] placeholder:text-zinc-500 text-sm sm:text-base
                         focus:outline-none focus:border-[#fef4e4]/20 focus:bg-white/[0.03]
                         transition-all duration-300"
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
                className="font-consolas w-full bg-white/[0.02] border border-white/10 
                         rounded-lg sm:rounded-xl px-4 py-3 sm:px-5 sm:py-4
                         text-[#fef4e4] placeholder:text-zinc-500 text-sm sm:text-base
                         focus:outline-none focus:border-[#fef4e4]/20 focus:bg-white/[0.03]
                         transition-all duration-300"
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
                className="font-consolas w-full bg-white/[0.02] border border-white/10 
                         rounded-lg sm:rounded-xl px-4 py-3 sm:px-5 sm:py-4
                         text-[#fef4e4] placeholder:text-zinc-500 text-sm sm:text-base
                         focus:outline-none focus:border-[#fef4e4]/20 focus:bg-white/[0.03]
                         transition-all duration-300 resize-none"
              />
              <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100
                            bg-gradient-to-r from-[#fef4e4]/5 to-transparent
                            rounded-xl blur-xl transition-opacity duration-500" />
            </div>
          </div>

          {error && (
            <p className="text-red-400/80 text-xs sm:text-sm" 
               style={{ fontFamily: '"Consolas", monospace' }}>
              {error}
            </p>
          )}

          <motion.button
            type="submit"
            disabled={isLoading}
            className="font-consolas w-full bg-[#fef4e4]/[0.03] border border-[#fef4e4]/10 
                     text-[#fef4e4] rounded-lg sm:rounded-xl py-3 sm:py-4 px-4 sm:px-5
                     text-sm tracking-wide
                     hover:border-[#fef4e4]/20 hover:bg-[#fef4e4]/[0.05]
                     transition-all duration-300
                     disabled:opacity-50 disabled:cursor-not-allowed
                     backdrop-blur-xl"
            whileHover={{ scale: 1.0015 }}
            whileTap={{ scale: 0.995 }}
          >
            {isLoading ? 'Sending...' : 'Share Note'}
          </motion.button>
        </motion.form>
      )}

      <div className="space-y-4 sm:space-y-6">
        {isLoading ? (
          <div className="text-[#fef4e4]/60 text-center py-8 font-geist-mono">
            Loading comments...
          </div>
        ) : Array.isArray(comments) && comments.length > 0 ? (
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
                         border border-white/[0.05] rounded-xl sm:rounded-2xl 
                         p-4 sm:p-6
                         hover:border-white/[0.1] transition-all duration-500"
              >
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center 
                              gap-2 sm:gap-4 mb-3 sm:mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/[0.05] 
                                  border border-white/[0.08]
                                  flex items-center justify-center">
                      <span className="text-[#fef4e4]/60 text-base sm:text-lg">
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
                          className="text-[#fef4e4] font-medium tracking-wide text-sm sm:text-base"
                          style={{ fontFamily: '"Consolas", monospace' }}
                        >
                          {comment.name}
                        </span>
                        <svg 
                          className="w-3 h-3 sm:w-4 sm:h-4 text-[#fef4e4] opacity-40 
                                   group-hover/link:opacity-80 transition-opacity"
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
                  className="text-[#fef4e4]/80 leading-relaxed text-sm sm:text-base
                           pl-11 sm:pl-[52px]"
                  style={{ fontFamily: '"Consolas", monospace' }}
                >
                  {comment.message}
                </p>
              </motion.div>
            ))}
          </AnimatePresence>
        ) : (
          <div className="text-[#fef4e4]/60 text-center py-8 font-geist-mono">
            No comments yet. Be the first to leave a note!
          </div>
        )}
      </div>
    </div>
  );
};

export default Comments;