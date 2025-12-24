
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
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-900/20 rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-green-900/10 rounded-full blur-[120px] animate-float" style={{ animationDelay: '-3s' }} />
        <img 
          src={MOCK_ARTIST.coverImage} 
          className="w-full h-full object-cover opacity-20 filter grayscale"
          alt="Background"
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
      </div>

      <main className="w-full max-w-[500px] px-6 py-12 flex flex-col items-center">
        {/* Header Actions */}
        <div className="w-full flex justify-end mb-8">
          <button 
            onClick={handleShare}
            className="p-3 glass rounded-full hover:bg-white/10 transition-colors"
          >
            <Icon name="share" size={20} />
          </button>
        </div>

        {/* Profile Info */}
        <div className="flex flex-col items-center mb-6 text-center">
          <div className="relative mb-6">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-green-500 to-blue-500 rounded-full blur opacity-75 animate-pulse" />
            <img 
              src={MOCK_ARTIST.profileImage} 
              alt={MOCK_ARTIST.name} 
              className="relative w-32 h-32 rounded-full border-4 border-white/10 object-cover shadow-2xl"
            />
          </div>
          <h1 className="text-4xl font-black tracking-tighter mb-2 uppercase">
            {MOCK_ARTIST.name}
          </h1>
          <p className="text-white/60 text-lg font-medium leading-relaxed max-w-[340px] mb-4">
            {MOCK_ARTIST.bio}
          </p>
          
          {/* Greeting Box */}
          <div className="glass px-6 py-4 rounded-3xl mb-4 border-green-500/20">
            <p className="text-sm font-semibold text-white/90">
              👋 Bem-vindos ao meu canal oficial!
            </p>
            <p className="text-xs text-white/50 mt-1">
              Fique por dentro dos lançamentos ou peça seu orçamento abaixo.
            </p>
          </div>
        </div>

        {/* Featured Section with Preview and Platform Redirects */}
        <FeaturedRelease 
          release={MOCK_ARTIST.featuredRelease} 
          allLinks={MOCK_ARTIST.links}
        />

        {/* Links Section */}
        <div className="w-full space-y-4 mb-12">
          <div className="flex justify-between items-center mb-4 px-1">
             <h2 className="text-xs font-bold tracking-[0.2em] uppercase text-white/40">
              Todas as plataformas
            </h2>
            <span className="flex h-2 w-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>
          </div>
          
          {MOCK_ARTIST.links.map((link) => (
            <LinkCard key={link.id} link={link} />
          ))}
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mb-12">
          {MOCK_ARTIST.socials.map((social) => (
            <a 
              key={social.id} 
              href={social.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className={`p-3 glass rounded-2xl text-white/60 hover:text-white hover:scale-110 transition-all ${social.platform === 'whatsapp' ? 'bg-green-500/10 border-green-500/30 text-green-400' : ''}`}
            >
              <Icon name={social.platform} size={24} />
            </a>
          ))}
        </div>

        {/* Footer */}
        <footer className="text-center">
          <p className="text-white/20 text-[10px] font-bold tracking-widest uppercase flex items-center justify-center gap-2">
            Desenvolvido por <span className="text-white/40">Bio DJBRYAN</span>
          </p>
        </footer>
      </main>
    </div>
  );
};

export default App;
