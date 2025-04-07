import Link from 'next/link';
import Image from "next/image";

export default function Header({ name }) {
  return (
    <header className="pt-20 pb-12">
      <Image src={"/newgc_green.png"} alt={"Green Cat Logo"} width={100} height={100} className="mx-auto mb-4" />
      <p className="text-2xl text-center dark:text-white">
        <Link href="/">{name}</Link>
      </p>
    </header>
  );
}
