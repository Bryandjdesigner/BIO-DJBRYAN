
import React from 'react';
import { MusicLink } from '../types';
import Icon from './Icon';

interface LinkCardProps {
  link: MusicLink;
}

const LinkCard: React.FC<LinkCardProps> = ({ link }) => {
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group flex items-center justify-between p-4 mb-3 w-full glass rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-xl ${link.color}`}
    >
      <div className="flex items-center gap-4">
        <div className="bg-white/10 p-2 rounded-xl group-hover:bg-white/20 transition-colors">
          <Icon name={link.icon} className="text-white" />
        </div>
        <span className="font-semibold text-lg tracking-tight">{link.platform}</span>
      </div>
      <Icon name="external-link" size={16} className="opacity-40 group-hover:opacity-100 transition-opacity" />
    </a>
  );
};

export default LinkCard;
