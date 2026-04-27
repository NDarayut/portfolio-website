import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { POSTS } from '../constants';

export default function Posts() {
  return (
    <motion.section 
      id="posts" 
      className="space-y-8 pt-10 relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <div className="font-mono text-lg">
        <span className="text-[var(--color-heading)]">darayut</span>
        <span className="text-[var(--color-title)]">@portfolio</span>
        <span className="text-[var(--text-dim)]">:</span>
        <span className="text-[var(--color-text)]">~</span>
        <span className="text-[var(--text-dim)]">$</span>{' '}
        <span className="text-[var(--color-text)]">ls posts/ --detailed</span>
        <span className="text-[var(--color-heading)] cursor-blink">▌</span>
      </div>

      <div className="mt-8 space-y-6">
        {POSTS.map((post) => (
          <Link 
            key={post.id}
            to={`/posts/${post.slug}`}
            className="block group border-l-2 border-transparent hover:border-[var(--color-accent)] pl-4 py-1 transition-all"
          >
            <div className="flex items-center gap-3">
              <span className="text-[var(--text-dim)] text-[10px] hidden sm:inline">{post.date}</span>
              <h3 className="text-sm font-bold text-[var(--color-text)] group-hover:text-[var(--color-link)] transition-none flex items-center gap-2">
                <span className="opacity-40">{'>'}</span> {post.title}
              </h3>
            </div>
            <p className="mt-1 text-xs opacity-70 leading-relaxed font-mono pl-4 sm:pl-[85px]">
              {post.excerpt}
            </p>
            <div className="mt-2 flex gap-3 text-[10px] text-[var(--text-dim)] pl-4 sm:pl-[85px]">
              {post.tags.map(tag => (
                <span key={tag} className="border border-[var(--border-color)] px-1">[{tag}]</span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </motion.section>
  );
}
