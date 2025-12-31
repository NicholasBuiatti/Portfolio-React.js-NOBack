const socialLinks = [
  {
    href: "https://www.instagram.com/buia93/",
    label: "Instagram",
    icon: "fa-brands fa-instagram",
  },
  {
    href: "https://github.com/NicholasBuiatti",
    label: "GitHub",
    icon: "fa-brands fa-github",
  },
  {
    href: "https://www.linkedin.com/in/nicholas-buiatti-43482821b/",
    label: "LinkedIn",
    icon: "fa-brands fa-linkedin",
  },
];

export const SocialLinks = ({
  iconSize = "text-4xl",
  hoverColor = "hover:text-gray-500",
  className = "",
}) => (
  <div className={className}>
    {socialLinks.map(({ href, label, icon }) => (
      <a key={label} href={href} aria-label={label}>
        <i className={`${icon} ${iconSize} ${hoverColor}`}></i>
      </a>
    ))}
  </div>
);
