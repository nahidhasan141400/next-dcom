import Link from "next/link";

const Titel = ({ text }) => {
  return (
    <div className="mx-auto grid max-w-6xl  ">
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">{text}</a>
        </div>
        <div className="flex-none">
          <Link href='/' >
            <span className="cursor-pointer  hover:text-lime-600">
            see all
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Titel;
