import Link from "next/link";

const Logo = () => {
  return (
    <div className=" h-4/5 relative cursor-pointer">
        <Link href="/">
            <img src="/img/logo/logo.png" className="h-full" alt="logo" />
        </Link>
    </div>
  )
}

export default Logo