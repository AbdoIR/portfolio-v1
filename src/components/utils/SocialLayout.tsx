import { IconType } from "react-icons";

type SocialProps = { url: string; Icon: IconType };

export default function SocialLayout({ url, Icon }: SocialProps) {
  return (
    <a href={url} className="social-layout">
      <Icon />
    </a>
  );
}
