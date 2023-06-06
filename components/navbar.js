import { useRouter } from "next/router";
import Link from "next/link";
import { FaMusic } from "react-icons/fa";

const navigationRoutes = ["about", "education", "contact"];

const Navbar = () => {
  const router = useRouter();

  return (
    <>
      <nav className="flex p-2.5">
        <div className="mr-auto">
          <Link href="/">SUN HA YOON</Link>
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
      <hr class="bg-gradient-to-r from-primary to-neutral mb-8 h-1" />
    </>
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
          <FaMusic className="text-orange-600 absolute left-1/2 -translate-x-1/2 -translate-y-2/4" />
        </div>
      )}
    </Link>
  );
}

export default Navbar;
