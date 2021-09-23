import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<div className="container-fluid d-flex justify-content-between">
					<div>
						<a className="navbar-brand" href="#">
							La página de Prome
						</a>
					</div>
					<div>
						<div
							className="collapse navbar-collapse"
							id="navbarSupportedContent">
							<ul className="navbar-nav me-auto mb-2 mb-lg-0">
								<li className="nav-item">
									<a
										className="nav-link active"
										aria-current="page"
										href="#">
										Home
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#">
										Fans
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#">
										Tienda
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#">
										Contacto
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</nav>
			<div className="container">
				<div className="jumbotron">
					<h1 className="display-4">
						Hola, este es el blog de Prometeo!
					</h1>
					<p className="lead">
						Prometeo es el perro de Ch4rbo, su mejor amigo. Él
						siempre está listo para salir a bailar, dormir la
						siesta, comer chivitos, alentar a la selección Uruguaya
						e ir a la playa.
					</p>
					<hr className="my-4" />
					<p>
						Prometeo también es asesor de imagen y puedes
						contactarlo si lo deseas.
					</p>
					<a
						className="btn btn-primary btn-lg"
						href="#"
						role="button">
						Contactar a Prome
					</a>
				</div>

				<div className="container-fluid d-flex justify-content-between">
					<div className="card" style={{ width: "14.30rem" }}>
						<img
							src="https://i.ibb.co/MkGWpwF/a.jpg"
							className="card-img-top"
							alt="Prometeo facha"
						/>
						<div className="card-body">
							<h5 className="card-title">Prometeo facha</h5>
							<p className="card-text">
								Se viene la primavera y Prometeo lo sabe.
							</p>
							<a href="#" className="btn btn-primary">
								Lentes originales
							</a>
						</div>
					</div>

					<div className="card" style={{ width: "18.15rem" }}>
						<img
							src="https://i.ibb.co/QDQFtYC/b.jpg"
							className="card-img-top"
							alt="Prometeo ama su mantita"
						/>
						<div className="card-body">
							<h5 className="card-title">Ama a su mantita</h5>
							<p className="card-text">
								Mientras se van los fríos aprovecha a dormir la
								siesta.
							</p>
							<a href="#" className="btn btn-primary">
								Mantita autografiada
							</a>
						</div>
					</div>

					<div className="card" style={{ width: "18rem" }}>
						<img
							src="https://i.ibb.co/bFwYCSZ/c.jpg"
							className="card-img-top"
							alt="..."
						/>
						<div className="card-body">
							<h5 className="card-title">Paladar fino</h5>
							<p className="card-text">
								Fanático de los chivitos, sushi, pulpón e
								incluso la pizza.
							</p>
							<a href="#" className="btn btn-primary">
								Dieta oficial
							</a>
						</div>
					</div>

					<div className="card" style={{ width: "18rem" }}>
						<img
							src="https://i.ibb.co/9bKBTG3/d.jpg"
							className="card-img-top"
							alt="..."
						/>
						<div className="card-body">
							<h5 className="card-title">Fan #1 </h5>
							<p className="card-text">
								Nadie toca el control remoto cuando juega
								Uruguay.
							</p>
							<a href="#" className="btn btn-primary">
								Camiseta autografiada
							</a>
						</div>
					</div>
				</div>
			</div>
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<div className="container-fluid d-flex justify-content-between">
					<div>
						<a className="navbar-brand" href="#"></a>
					</div>
					<div></div>
				</div>
			</nav>
		</div>
	);
};

export default Home;
