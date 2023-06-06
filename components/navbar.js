import { useRouter } from "next/router";
import Link from "next/link";
import { FaMusic } from "react-icons/fa";

const navigationRoutes = ["about", "education", "philosophy", "contact"];

const Navbar = () => {
  const router = useRouter();

  return (
    <div>
      <nav className="flex p-2">
        <div className="mr-auto">
          <Link href="/" className="text-2xl font-bold text-primary">
            SUN HA YOON
          </Link>
        </div>
        <div className="flex gap-2">
          {navigationRoutes.map((singleRoute) => (
            <NavigationLink
              key={singleRoute}
              href={`/${singleRoute}`}
              text={singleRoute}
              router={router}
            />
          ))}
        </div>
      </nav>
      {/* <hr className="bg-gradient-to-r from-primary to-neutral mb-8 h-1" /> */}
    </div>
  );
};

function NavigationLink({ href, text, router }) {
  const isActive = router.asPath === (href === "/about" ? "/" : href);

  return (
    <Link
      href={href === "/about" ? "/" : href}
      className="capitalize no-underline"
    >
      <span>{text}</span>
      {isActive && (
        <div className="relative">
          <FaMusic className="text-orange-400 absolute left-1/2 -translate-x-1/2 -translate-y-1/3" />
        </div>
      )}
    </Link>
  );
}

export default Navbar;
