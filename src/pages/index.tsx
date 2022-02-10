import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
			</Head>
			<section className="hero is-fullheight">
				<div className="hero-head">
					<header className="navbar">
						<div className="container">
							<div className="navbar-brand">
								<a className="navbar-item">
									<img
										src="https://via.placeholder.com/250x300"
										alt="Logo"
									/>
								</a>
								<span
									className="navbar-burger"
									data-target="navbarMenuHeroC"
								>
									<span></span>
									<span></span>
									<span></span>
								</span>
							</div>
							<div id="navbarMenuHeroC" className="navbar-menu">
								<div className="navbar-end">
									<a className="navbar-item is-active">
										Docs
									</a>
									<a className="navbar-item">Community</a>
									<a className="navbar-item">About</a>
									<span className="navbar-item">
										<a className="button is-dark">
											<span>Launch App</span>
										</a>
									</span>
								</div>
							</div>
						</div>
					</header>
				</div>
				<div className="hero-body">
					<div className="container has-text-centered">
						<p className="title">Struct.fi Trading Protocol</p>
						<p className="subtitle">Swap, earn and build on the leading decentralized crypto protocol</p>
					</div>
				</div>
			</section>

			{/* <div className="hero-foot">
    <nav className="tabs is-boxed is-fullwidth">
      <div className="container">
        <ul>
          <li className="is-active"><a>Overview</a></li>
          <li><a>Modifiers</a></li>
          <li><a>Grid</a></li>
          <li><a>Elements</a></li>
          <li><a>Components</a></li>
          <li><a>Layout</a></li>
        </ul>
      </div>
    </nav>
  </div> */}
			<section className="hero is-danger is-fullheight">
				<div className="hero-body">
					<div className="">
						<p className="title">Fullheight hero</p>
						<p className="subtitle">Fullheight subtitle</p>
					</div>
				</div>
			</section>
		</>
	);
};

export default Home;
