
import React from 'react';
import { ArtistProfile, MusicLink } from '../types';
import Icon from './Icon';

interface FeaturedReleaseProps {
  release: ArtistProfile['featuredRelease'];
  allLinks: MusicLink[];
}

const FeaturedRelease: React.FC<FeaturedReleaseProps> = ({ release, allLinks }) => {
  if (!release) return null;

  // Filter for top platforms to show as quick-links. 
  // Removed Apple Music as requested by user.
  const quickLinks = allLinks.filter(l => 
    ['Spotify', 'YouTube Music'].includes(l.platform)
  );

  return (
    <div className="w-full glass rounded-[2.5rem] overflow-hidden mb-10 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] group">
      <div className="relative aspect-square sm:aspect-video overflow-hidden">
        <img 
          src={release.artwork} 
          alt={release.title} 
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-90" />
        
        <div className="absolute bottom-6 left-6 right-6">
          <div className="flex items-center gap-2 mb-3">
            <span className="flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
            <span className="text-[10px] font-black tracking-[0.3em] uppercase text-white/80">
              Destaque do DJ
            </span>
          </div>
          <h3 className="text-4xl font-black tracking-tighter mb-1 drop-shadow-lg">{release.title}</h3>
          <p className="text-white/60 font-medium tracking-wide uppercase text-xs">{release.type}</p>
        </div>
      </div>
      
      <div className="p-6 bg-black/20 backdrop-blur-xl">
        {release.spotifyEmbedUrl && (
          <div className="mb-6 rounded-2xl overflow-hidden bg-black/40 border border-white/5 shadow-inner">
             <iframe 
              src={release.spotifyEmbedUrl} 
              width="100%" 
              height="80" 
              frameBorder="0" 
              allowTransparency={true} 
              allow="encrypted-media"
              className="opacity-90 hover:opacity-100 transition-opacity"
            ></iframe>
          </div>
        )}

        <div className="space-y-3">
          <p className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em] mb-2 text-center">
            Ouça a versão completa
          </p>
          <div className={`grid ${quickLinks.length === 2 ? 'grid-cols-2' : 'grid-cols-3'} gap-3`}>
            {quickLinks.map((link) => (
              <a 
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-3 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 transition-all hover:-translate-y-1 active:scale-95 group/btn"
              >
                <Icon name={link.icon} className="mb-2 text-white/70 group-hover/btn:text-white transition-colors" size={24} />
                <span className="text-[10px] font-bold text-white/50 group-hover/btn:text-white uppercase truncate w-full text-center">
                  {link.platform.split(' ')[0]}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedRelease;
