import { LoginedOr } from '../routing/Auth'

function Header() {
  return (
    <>
      <header className="sticky flex w-screen  flex-wrap items-center justify-between bg-slate-500 py-2 text-white">
        <div className="ml-0 h-full items-center mr-auto flex">
          <div className="mx-2">Shokken-web</div>
          <div className="flex flex-nowrap h-9">
            <input
              type="search"
              className="h-full w-full rounded-l-md text-gray-800 placeholder:px-4 placeholder:py-1 focus:outline-none"
              placeholder="search"
            />
            <button
              type="submit"
              className="w-fit px-2 flex items-center justify-center rounded-r-lg border-gray-300 border-l-2 bg-white text-white"
            >
              <svg
                className="fill-gray-500"
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fill-rule="evenodd"
                clip-rule="evenodd"
              >
                <path d="M15.853 16.56c-1.683 1.517-3.911 2.44-6.353 2.44-5.243 0-9.5-4.257-9.5-9.5s4.257-9.5 9.5-9.5 9.5 4.257 9.5 9.5c0 2.442-.923 4.67-2.44 6.353l7.44 7.44-.707.707-7.44-7.44zm-6.353-15.56c4.691 0 8.5 3.809 8.5 8.5s-3.809 8.5-8.5 8.5-8.5-3.809-8.5-8.5 3.809-8.5 8.5-8.5z" />
              </svg>
            </button>
          </div>
        </div>
        <div>
          <LoginedOr
            or={
              <ul className="flex w-full justify-between">
                <li>1</li>
                <li>2</li>
                <li>3</li>
              </ul>
            }
          >
            <ul className="flex w-full justify-between">
              <li>Cart</li>
              <li>User</li>
            </ul>
          </LoginedOr>
        </div>
      </header>
    </>
  )
}

export default Header
