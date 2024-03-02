import React from "react";

type IconLinkProps = {
  icon: string;
  link: string;
};

const IconLink: React.FC<IconLinkProps> = ({ icon, link }) => {
  return (
    <div>
      {icon}
      <a href={link}>Ссылка слеш новость, текст новости </a>
    </div>
  );
};

const NewsBlock = () => {
  const links = [
    { icon: "⚡", link: "https://example.com/1" },
    { icon: "⭐", link: "https://example.com/2" },
    { icon: "⚙️", link: "https://example.com/3" },
    { icon: "🔗", link: "https://example.com/4" },
    { icon: "📌", link: "https://example.com/5" },
  ];

  return (
    <div>
      {links.map((link, index) => (
        <IconLink key={index} icon={link.icon} link={link.link} />
      ))}
    </div>
  );
};
export default NewsBlock;
