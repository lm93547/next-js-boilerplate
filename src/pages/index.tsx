import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.scss';

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
                  <span />
                  <span />
                  <span />
                </span>
              </div>
              <div id="navbarMenuHeroC" className="navbar-menu">
                <div className="navbar-end">
                  <a className="navbar-item is-active">
                    Home
                  </a>
                  <span className="navbar-item">
                    <a className="button is-dark">
                      <span>Button</span>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </header>
        </div>
        <div className="hero-body">
          <div className="container has-text-centered" />
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
