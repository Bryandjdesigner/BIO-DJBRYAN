
export interface MusicLink {
  id: string;
  platform: string;
  url: string;
  icon: string;
  color: string;
}

export interface SocialLink {
  id: string;
  platform: 'instagram' | 'twitter' | 'youtube' | 'tiktok' | 'facebook' | 'whatsapp';
  url: string;
}

export interface ArtistProfile {
  name: string;
  bio: string;
  profileImage: string;
  coverImage: string;
  featuredRelease?: {
    title: string;
    type: string; // 'Single', 'Album', 'EP'
    artwork: string;
    spotifyEmbedUrl?: string;
  };
  links: MusicLink[];
  socials: SocialLink[];
}
