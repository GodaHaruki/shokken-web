export function Login() {
  return (
    <>
      <div className="flex h-screen w-screen items-center justify-center bg-white text-sm">
        <div>
          <div className="text-center text-xl">
            Sign in to shokken
          </div>

          <form className="m-3 h-auto rounded-md border border-gray-300 p-3">
            <div className="my-2">
              <label htmlFor="email" className="mb-2 block">email address</label>
              <input id="email" type="email" className="input-bordered input input-sm w-full max-w-xs" />
            </div>

            <div className="my-3">
              <div className="relative mb-2 w-full">
                <label htmlFor="password" className="mb-2">password</label>
                <a href="" className="float-right">forgot a password?</a>
              </div>
              <input id="password" type="password" autoComplete="current-password" className="input-bordered input input-sm w-full max-w-xs" />

            </div>

            <button className="btn-primary btn-sm btn mt-2 w-full text-xs">login</button>
          </form>
        </div>
      </div>
    </>
  )
}