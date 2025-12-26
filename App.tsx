
import React from 'react';
import { MOCK_ARTIST } from './constants';
import LinkCard from './components/LinkCard';
import FeaturedRelease from './components/FeaturedRelease';
import Icon from './components/Icon';

const App: React.FC = () => {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `Confira o perfil de ${MOCK_ARTIST.name}`,
        url: window.location.href,
      });
    } else {
      alert("Link copiado!");
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <div className="min-h-screen relative flex flex-col items-center">
      {/* Dynamic Aesthetic Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-purple-900/20 rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-green-900/15 rounded-full blur-[120px] animate-float" style={{ animationDelay: '-5s' }} />
        <img 
          src={MOCK_ARTIST.coverImage} 
          className="w-full h-full object-cover opacity-[0.15] filter grayscale scale-110"
          alt="Background"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/80 to-[#050505] backdrop-blur-[1px]" />
      </div>

      <main className="w-full max-w-[500px] px-6 py-12 flex flex-col items-center">
        {/* Header Actions */}
        <div className="w-full flex justify-end mb-8">
          <button 
            onClick={handleShare}
            className="p-3 glass rounded-full hover:bg-white/10 transition-all hover:rotate-12 active:scale-90"
          >
            <Icon name="share" size={20} />
          </button>
        </div>

        {/* Profile Info */}
        <div className="flex flex-col items-center mb-8 text-center">
          <div className="relative mb-8 p-1">
            {/* The "New" Better Colored Ring: A rotating neon conic gradient */}
            <div className="absolute inset-0 neon-border rounded-full animate-rotate-slow blur-[2px] opacity-80" />
            <div className="absolute inset-0 neon-border rounded-full animate-rotate-slow opacity-40 scale-110 blur-xl" />
            
            <div className="relative p-1 bg-[#050505] rounded-full">
              <img 
                src={MOCK_ARTIST.profileImage} 
                alt={MOCK_ARTIST.name} 
                className="w-32 h-32 rounded-full border-2 border-white/20 object-cover shadow-2xl relative z-10"
              />
            </div>
            
            {/* Professional Badge */}
            <div className="absolute -bottom-1 -right-1 z-20 bg-blue-500 text-white p-1 rounded-full border-2 border-[#050505] shadow-lg">
              <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
            </div>
          </div>

          <h1 className="text-4xl font-black tracking-tighter mb-2 uppercase bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
            {MOCK_ARTIST.name}
          </h1>
          <p className="text-white/60 text-lg font-medium leading-relaxed max-w-[340px] mb-6 italic">
            "{MOCK_ARTIST.bio}"
          </p>
          
          {/* Greeting Box - More Inviting */}
          <div className="glass px-8 py-4 rounded-[2rem] mb-4 border-white/5 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            <p className="text-sm font-bold text-white/90 relative z-10">
              👋 Bem-vindos ao meu Hub Oficial!
            </p>
            <p className="text-[10px] text-white/40 mt-1 font-bold uppercase tracking-widest relative z-10">
              Música • Eventos • Sets Exclusivos
            </p>
          </div>
        </div>

        {/* Featured Section */}
        <FeaturedRelease 
          release={MOCK_ARTIST.featuredRelease} 
          allLinks={MOCK_ARTIST.links}
        />

        {/* Links Section */}
        <div className="w-full space-y-4 mb-12">
          <div className="flex justify-between items-center mb-4 px-2">
             <h2 className="text-[10px] font-black tracking-[0.3em] uppercase text-white/30">
              Conecte-se comigo
            </h2>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold text-green-500/80">ONLINE</span>
              <span className="flex h-2 w-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>
            </div>
          </div>
          
          {MOCK_ARTIST.links.map((link) => (
            <LinkCard key={link.id} link={link} />
          ))}
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-5 mb-16">
          {MOCK_ARTIST.socials.map((social) => (
            <a 
              key={social.id} 
              href={social.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className={`p-4 glass rounded-[1.25rem] text-white/50 hover:text-white hover:scale-110 hover:-translate-y-1 transition-all duration-300 ${social.platform === 'whatsapp' ? 'bg-green-500/10 border-green-500/30 text-green-400/80 shadow-[0_0_15px_rgba(34,197,94,0.1)]' : ''}`}
            >
              <Icon name={social.platform} size={22} />
            </a>
          ))}
        </div>

        {/* Footer */}
        <footer className="text-center pb-8">
          <div className="h-px w-12 bg-white/10 mx-auto mb-6" />
          <p className="text-white/20 text-[9px] font-black tracking-[0.4em] uppercase flex items-center justify-center gap-2">
            DESIGNED FOR <span className="text-white/50">Bio DJBRYAN</span>
          </p>
        </footer>
      </main>
    </div>
  );
};

export default App;
