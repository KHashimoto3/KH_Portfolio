import Link from "next/link";

export const PageHeader = () => {
  return (
    <header id="menu-header" className="menu-header dark:bg-gray-900">
      <div
        id="header-title"
        className="mx-3 w-1/4 font-bold cursor-pointer"
        onClick={() => (window.location.href = "/")}
      >
        <h1>B.Bのポートフォリオ</h1>
      </div>
      <div
        id="header-menu-item"
        className="space-x-10 mx-3 w-3/4 flex justify-end"
      >
        <Link href={"/activity"}>Activity</Link>
        <Link href={"/skills"}>My Skills</Link>
        <Link href={"/about-me"}>About Me</Link>
        <Link href={"/contact"}>Contact</Link>
      </div>
    </header>
  );
};
