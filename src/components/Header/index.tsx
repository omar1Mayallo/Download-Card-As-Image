import logo from "../../assets/logo.png";
import {FaGithub} from "react-icons/fa";
const Header = () => {
  return (
    <nav className="relative flex w-full flex-wrap items-center justify-between bg-neutral-0 py-2 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 lg:py-0">
      <div className="container flex w-full flex-wrap items-center justify-between px-3">
        <div>
          <img src={logo} alt="logo" loading="lazy" width={100} />
        </div>
        <a
          type="button"
          data-te-ripple-init
          data-te-ripple-color="light"
          href="https://github.com/omar1Mayallo/Download-Card-As-Image"
          target="_blank"
          rel="noreferrer"
          className="flex items-center rounded bg-neutral-800 px-4 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-50 shadow-[0_4px_9px_-4px_rgba(51,45,45,0.7)] transition duration-150 ease-in-out hover:bg-neutral-800 hover:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:bg-neutral-800 focus:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:outline-none focus:ring-0 active:bg-neutral-900 active:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] dark:bg-neutral-900 dark:shadow-[0_4px_9px_-4px_#030202] dark:hover:bg-neutral-900 dark:hover:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)] dark:focus:bg-neutral-900 dark:focus:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)] dark:active:bg-neutral-900 dark:active:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)]"
        >
          <FaGithub size={18} className="mr-1" />
          Github
        </a>
      </div>
    </nav>
  );
};

export default Header;
