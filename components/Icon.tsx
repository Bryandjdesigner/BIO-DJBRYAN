
import React from 'react';
import { 
  Music, 
  PlayCircle, 
  Disc, 
  Waves, 
  Instagram, 
  Twitter, 
  Youtube, 
  Music2, 
  Facebook,
  ExternalLink,
  Share2,
  Library,
  MessageCircle
} from 'lucide-react';

interface IconProps {
  name: string;
  className?: string;
  size?: number;
}

const Icon: React.FC<IconProps> = ({ name, className = "", size = 20 }) => {
  switch (name.toLowerCase()) {
    case 'spotify': return <Music className={className} size={size} />;
    case 'music': return <Music2 className={className} size={size} />;
    case 'play-circle': return <PlayCircle className={className} size={size} />;
    case 'disc': return <Disc className={className} size={size} />;
    case 'waves': return <Waves className={className} size={size} />;
    case 'amazon': return <Library className={className} size={size} />;
    case 'instagram': return <Instagram className={className} size={size} />;
    case 'twitter': return <Twitter className={className} size={size} />;
    case 'youtube': return <Youtube className={className} size={size} />;
    case 'tiktok': return <Music2 className={className} size={size} />;
    case 'whatsapp': return <MessageCircle className={className} size={size} />;
    case 'facebook': return <Facebook className={className} size={size} />;
    case 'external-link': return <ExternalLink className={className} size={size} />;
    case 'share': return <Share2 className={className} size={size} />;
    default: return <Music className={className} size={size} />;
  }
};

export default Icon;
