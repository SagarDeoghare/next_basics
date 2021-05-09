import Link from "next/link";
const AppNavBar = () => {
  return (
    <div>
      <h1>My App Bar</h1>
      <li>
        <Link href={"/"}>
          <ul>Home</ul>
        </Link>
        <Link href={"/user"}>
          <ul>User</ul>
        </Link>
        <Link href={"/about"}>
          <ul>About</ul>
        </Link>
      </li>
    </div>
  );
};

export default AppNavBar;
