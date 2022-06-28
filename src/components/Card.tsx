type CardProps = {
  href: string;
  title: string;
  description: string;
};

const Card: React.FC<CardProps> = ({ href, title, description }) => {
  return (
    <a
      href={href}
      className="m-4 p-6 text-left text-inherit no-underline border border-solid border-[#eaeaea] rounded-xl max-w-[300px] transition-colors hover:text-[#0070f3] hover:border-[#0070f3] focus:text-[#0070f3] focus:border-[#0070f3]  active:text-[#0070f3] active:border-[#0070f3]"
    >
      <h2 className="mb-4 text-2xl">{title} &rarr;</h2>

      <p className="m-0 text-xl">{description}</p>
    </a>
  );
};

export default Card;
