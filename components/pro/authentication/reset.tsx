export default function SectionReset() {
  return (
    <section className="block my-12">
      <div className="py-56 m-4 min-h-50-screen items-start rounded-xl p-0 relative overflow-hidden flex bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1497996541515-6549b145cd90?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80')]">
        <span className="absolute top-0 left-0 w-full h-full bg-center bg-cover opacity-60 bg-gradient-to-tl from-grey-900 to-slate-800" />
      </div>
      <div className="container mx-auto -mt-24">
          <div className="card relative z-10 w-1/3 mx-auto">
            <div className="card-header mx-4 -mt-6">
              <div className="shadow-pink pe-1 rounded-lg bg-pink-500 py-5">
                <h4 className="mt-2 mb-0 text-center font-bold text-white">Reset Password</h4>
                <p className="text-white/80 text-center text-sm">You will receive an e-mail in maximum 60 seconds</p>
              </div>
            </div>
            <div className="card-body">
              <div className="input-group input-group-static">
                <label>Email</label>
                <input type="text" className="form-control" placeholder="john@email.com" />
              </div>
              <button className="button button-pink w-full my-7">Sign In</button>
            </div>
          </div>
        </div>
    </section>
  )
}
