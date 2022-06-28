import Image from "next/image";

const Footer = () => {
  return (
    <footer className="flex flex-1 py-8 border-t border-[#eaeaea] justify-center items-center">
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
        className="flex justify-center items-content-center item-center flex-grow-1"
      >
        Powered by{" "}
        <span className="h-4 ml-2">
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </span>
      </a>
    </footer>
  );
};

export default Footer;
