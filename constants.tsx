
import React from 'react';
import { ArtistProfile } from './types';

// Greeting message for the pre-filled WhatsApp link
const WHATSAPP_MESSAGE = encodeURIComponent("Olá DJ BRYAN! Vi seu perfil no Bio DJBRYAN e gostaria de entrar em contato para saber mais sobre seu trabalho.");

export const MOCK_ARTIST: ArtistProfile = {
  name: "DJ BRYAN",
  bio: "O melhor do Funk, Eletro e Open Format. Transformando sua noite em uma experiência inesquecível.",
  profileImage: "https://images.unsplash.com/photo-1571266028243-3716f02d2d2e?q=80&w=400&h=400&auto=format&fit=crop",
  coverImage: "https://images.unsplash.com/photo-1598387181032-a3103a2db5b3?q=80&w=1200&h=800&auto=format&fit=crop",
  featuredRelease: {
    title: "DJ BRYAN",
    type: "Novo Set / Single",
    artwork: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=600&h=600&auto=format&fit=crop",
    spotifyEmbedUrl: "https://open.spotify.com/embed/track/32xPLSqoGN6bng8gLyJdpL"
  },
  links: [
    {
      id: "w-direct",
      platform: "Contrate para seu Evento",
      url: `https://wa.me/5521965844958?text=${WHATSAPP_MESSAGE}`,
      icon: "whatsapp",
      color: "hover:bg-[#25D366]"
    },
    {
      id: "1",
      platform: "Spotify",
      url: "https://open.spotify.com/track/32xPLSqoGN6bng8gLyJdpL?si=OdwpMjJAQy6T40_KUrEnHw",
      icon: "spotify",
      color: "hover:bg-[#1DB954]"
    },
    {
      id: "2",
      platform: "Apple Music",
      url: "https://music.apple.com/br/artist/djbryan/1858000514?ls",
      icon: "music",
      color: "hover:bg-[#FC3C44]"
    },
    {
      id: "3",
      platform: "YouTube Music",
      url: "https://music.youtube.com/channel/UC3Q9KvTNrxwm3byUREgNAvA",
      icon: "play-circle",
      color: "hover:bg-[#FF0000]"
    },
    {
      id: "4",
      platform: "Deezer",
      url: "https://deezer.com",
      icon: "disc",
      color: "hover:bg-[#EF5466]"
    },
    {
      id: "5",
      platform: "Amazon Music",
      url: "https://music.amazon.com.br/artists/B095J7YNQN/djbryan?marketplaceId=ART4WZ8MWBX2Y&musicTerritory=BR&ref=dm_sh_ijIF4UxnzDKOX9b2uNH5wKhhR",
      icon: "amazon",
      color: "hover:bg-[#00A8E1]"
    }
  ],
  socials: [
    { id: "s1", platform: "instagram", url: "https://www.instagram.com/djbryanclub/" },
    { id: "s2", platform: "tiktok", url: "https://vm.tiktok.com/ZSHKu2QfNjuKn-eYyy1/" },
    { id: "s3", platform: "youtube", url: "https://youtube.com" },
    { id: "s4", platform: "whatsapp", url: `https://wa.me/5521965844958?text=${WHATSAPP_MESSAGE}` }
  ]
};
