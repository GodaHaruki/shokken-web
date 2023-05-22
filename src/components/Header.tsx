import { LoginedOr } from "../routing/Auth";

function Header(){
  return (
    <>
    <header className="sticky flex w-screen flex-wrap items-center justify-between bg-slate-500 py-2 text-white">
      <div className="ml-0 mr-auto">Shokken-web</div>
      <div className="mr-2 flex w-1/2 flex-wrap items-center justify-between">
        <div className="grid w-2/5 grid-flow-col">
          <div>
            <label htmlFor="search">aaa</label>
            <input id="search" type="text" autoComplete="text" />
          </div>
          <div>b</div>
          <div>c</div>
        </div>
        <div className="w-2/5">
        <LoginedOr or={<ul className="flex w-full justify-between">
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>}>
        <ul className="flex w-full justify-between">
          <li>Cart</li>
          <li>User</li>
        </ul>
        </LoginedOr>
        </div>  
      </div>
    </header>
    </>
  )
}

export default Header;