import Image from "next/image";
import {
  HomeIcon,
  MagnifyingGlassIcon,
  PlusIcon,
  StarIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";

const Header = () => {
  return (
    <div className="sticky bg-[#040714] top-0 z-[1000] flex h-[72px] items-center px-10">
      <Image
        src="/images/logo.svg"
        width={80}
        height={80}
        className="cursor-pointer"
      />
      <div className="items-center hidden ml-10 space-x-6 md:flex">
        <Link href={"/"} className="nav-link group">
          <HomeIcon className="h-4" />
          <span className="span">Home</span>
        </Link>
        <Link href={"/"} className="nav-link group">
          <MagnifyingGlassIcon className="h-4" />
          <span className="span">Search</span>
        </Link>
        <Link href={"/"} className="nav-link group">
          <PlusIcon className="h-4" />
          <span className="span">Watchlist</span>
        </Link>
        <Link href={"/"} className="nav-link group">
          <StarIcon className="h-4" />
          <span className="span">Originals</span>
        </Link>
        <Link href={"/"} className="nav-link group">
          <Image
            src={"/images/movie-icon.svg"}
            className="h-5"
            width={20}
            height={20}
          />
          <span className="span">Movies</span>
        </Link>
        <Link href={"/"} className="nav-link group">
          <Image
            src={"/images/series-icon.svg"}
            className="h-5"
            width={20}
            height={20}
          />
          <span className="span">Series</span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
