import imagenRegistro from '/src/assets/4W3BYZ3TVBGGNKU2S676KUCTME.jpg';

export default function LoginForm() {
  return (
    <>
      <section className="bg-body-tertiary d-flex justify-content-center align-items-center min-vh-100">
        <div className="card mb-5">
          <div className="row g-0 gap-3">
            <div className="col-md-6 bg-success">
              <img
                src={imagenRegistro}
                alt="imagen referencial zorro para registro de usuario"
                className="img-fluid rounded-start"
              />
            </div>
            <div className="col-md-5 mt-3">
              <h1 className="text-center">Iniciar Sesión</h1>
              <br></br>
              <form method="post" action="index.html">
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                  <div id="emailHelp" className="form-text">
                    No compartiremos tu correo con nadie más.
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Contraseña
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label className="form-check-label" htmlFor="exampleCheck1">
                    Recordar
                  </label>
                </div>
                <button type="submit" className="btn btn-primary">
                  Entrar
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
