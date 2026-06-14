export default function Bio() {
  return (
    <div className="win-content space-y-4 text-black">
      <p>
        Hey, I'm <span className="bg-[#000080] text-white px-1">darayut</span>
      </p>
      <p>
        I'm a <span className="bg-[#000080] text-white px-1">data scientist</span> based in Phnom Penh, currently working at a credit bureau where I build machine learning models to help banks and financial institutions make better decisions.
      </p>
      <p>
        I graduated with a Bachelor's degree in <span className="bg-[#000080] text-white px-1">IT Engineering</span> from the Royal University of Phnom Penh in 2026.
      </p>
      <p>
        I'm especially interested in deep learning and enjoy exploring new advancements in the field. I've worked on projects ranging from Khmer OCR to historical document reconstruction.
      </p>
      <p>
        Outside of coding, I like drawing and getting lost in good films.
      </p>
      <div className="flex flex-wrap gap-1 pt-3 mt-1 border-t border-[#e0e0e0]">
        {['Deep Learning', 'Computer Vision', 'NLP', 'Python', 'Khmer AI'].map(skill => (
          <span key={skill} className="win-tag">{skill}</span>
        ))}
      </div>
    </div>
  );
}
