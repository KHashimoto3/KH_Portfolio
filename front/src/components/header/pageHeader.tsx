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
        <a href="#activity-pickup">Activity Pickup</a>
        <a href="#my-skills">My Skills</a>
        <a href="#about-me">About Me</a>
        <a href="#contact">Contact</a>
      </div>
    </header>
  );
};
