import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="fixed shadow-sm text-white p-4 flex flex-row items-center justify-between w-full bg-white/10 backdrop-blur-sm z-50">
      <div className="flex items-center">
        <Link href="/" className="flex items-center">
          <Image
            src="/brand/logo-dark.svg"
            alt="Postly Logo"
            width={100}
            height={50}
            priority
          />
        </Link>
      </div>
      <div>
        <Link href="/">
          <h1 className="text-black font-bold text-center">Home</h1>
        </Link>
      </div>
    </header>
  );
};

export default Header;
