import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Markdown from 'react-markdown';
import { motion } from 'motion/react';
import { POSTS, Post } from '../constants';
import { ArrowLeft } from 'lucide-react';

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

export default function PostDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [toc, setToc] = useState<TOCItem[]>([]);

  useEffect(() => {
    const foundPost = POSTS.find(p => p.slug === slug);
    if (foundPost) {
      setPost(foundPost);
      
      // Basic TOC generation by parsing markdown headers
      const lines = foundPost.content.split('\n');
      const headers: TOCItem[] = [];
      lines.forEach(line => {
        const match = line.match(/^(#{1,6})\s+(.*)$/);
        if (match) {
          const level = match[1].length;
          const text = match[2];
          const id = text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
          headers.push({ id, text, level });
        }
      });
      setToc(headers);
    }
  }, [slug]);

  if (!post) {
    return (
      <div className="pt-20 text-center font-mono">
        <p className="text-[var(--color-accent)]">[ 404: POST_NOT_FOUND ]</p>
        <Link to="/posts" className="mt-4 inline-block text-[var(--color-link)]">./back_to_list</Link>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-10 pb-20 relative flex flex-col lg:flex-row gap-12"
    >
      {/* Table of Contents - Sidebar on Desktop */}
      <aside className="lg:w-48 lg:sticky lg:top-24 h-fit border-l border-[var(--border-color)] pl-6 order-2 lg:order-1">
        <h4 className="text-[10px] text-[var(--text-dim)] uppercase tracking-widest mb-6">Table of Contents</h4>
        <nav className="space-y-4">
          {toc.map((item) => (
            <a 
              key={item.id}
              href={`#${item.id}`}
              className={`block text-[11px] hover:text-[var(--color-link)] transition-colors ${
                item.level === 1 ? 'font-bold text-[var(--color-text)]' : 
                item.level === 2 ? 'pl-2 text-[var(--text-primary)] opacity-80' : 
                'pl-4 text-[var(--text-dim)]'
              }`}
            >
              {item.text}
            </a>
          ))}
        </nav>
      </aside>

      <article className="flex-1 order-1 lg:order-2 max-w-2xl">
        <Link to="/posts" className="flex items-center gap-2 text-[var(--text-dim)] hover:text-[var(--color-link)] text-[10px] uppercase tracking-widest mb-10 transition-colors">
          <ArrowLeft size={12} />
          Back to repository
        </Link>

        <header className="mb-12 border-b border-[var(--border-color)] pb-8">
          <div className="text-[var(--color-accent)] text-[10px] mb-4 font-mono">
            FILE_ID: {post.id} | TIMESTAMP: {post.date}
          </div>
          <h1 className="text-3xl font-bold text-[var(--color-heading)] leading-tight mb-4">
            {post.title}
          </h1>
          <div className="flex gap-2">
            {post.tags.map(tag => (
              <span key={tag} className="text-[9px] bg-[var(--border-color)] px-2 py-0.5 text-[var(--text-dim)]">#{tag}</span>
            ))}
          </div>
        </header>

        <div className="markdown-body prose prose-invert max-w-none font-mono leading-relaxed text-sm">
          <Markdown
            components={{
              h1: ({ children }) => (
                <h1 id={String(children).toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')} className="text-xl font-bold text-[var(--color-title)] mt-12 mb-6 bg-[var(--color-title-bg)] px-2 py-1 inline-block">
                  {children}
                </h1>
              ),
              h2: ({ children }) => (
                <h2 id={String(children).toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')} className="text-lg font-bold text-[var(--color-heading)] mt-10 mb-4 border-b border-[var(--border-color)] pb-2 flex items-center gap-2">
                  <span className="opacity-40">{'>'}</span> {children}
                </h2>
              ),
              h3: ({ children }) => (
                <h3 id={String(children).toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')} className="text-md font-bold text-[var(--color-text)] mt-8 mb-3 opacity-90">
                  // {children}
                </h3>
              ),
              p: ({ children }) => <p className="mb-6 opacity-80">{children}</p>,
              ul: ({ children }) => <ul className="list-disc pl-6 mb-6 space-y-2 opacity-80">{children}</ul>,
              li: ({ children }) => <li>{children}</li>,
              code: ({ children }) => <code className="bg-[#282828] text-[var(--color-accent)] px-1 rounded">{children}</code>
            }}
          >
            {post.content}
          </Markdown>
        </div>
      </article>
    </motion.div>
  );
}
