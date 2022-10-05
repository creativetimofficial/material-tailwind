export default function ComponentValidation() {
  return (
    <form id="form" className="form">
      <h2>Validation Form</h2>
      <div className="input-group-outline input-group mb-3">
        <label className="form-label">Username</label>
        <input type="text" className="form-control" id="username" />
        <small>Error Message</small>
      </div>
      <div className="input-group-outline input-group mb-3">
        <label className="form-label">Email</label>
        <input type="email" className="form-control" id="email" />
        <small>Error Message</small>
      </div>
      <div className="input-group-outline input-group mb-3">
        <label className="form-label">Password</label>
        <input
          type="password"
          className="form-control"
          id="password"
        />
        <small>Error Message</small>
      </div>
      <div className="input-group-outline input-group mb-3">
        <label className="form-label">Confirm Password</label>
        <input
          type="password"
          className="form-control"
          id="confirm_password"
        />
        <small>Error Message</small>
      </div>
      <button className="button button-pink">Submit</button>
    </form>
  )
}
