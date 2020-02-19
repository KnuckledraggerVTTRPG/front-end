import React from 'react';

export default function Home() {
  return (
    <div className="root-container">
      <div className="inner-container">
        <header className="header">
          <div className="header__logo">
            <img
              className="header__logo-img"
              src="img/knuckledragger_logo.png"
              alt="Logo"
            />
          </div>
          <div className="header__heading-container">
            <div className="header__heading-container-text-container">
              <h1 className="heading-1 heading-1--hover center text-color-inktongue">
                Knuckledragger
                <small className="heading-1 heading-1--hover--small text-color-inktongue">
                  Welcome to Planet
                </small>
              </h1>
              <h2 className="heading-2 text-shadow-primary-blood text-color-inktongue">
                Fast-paced action mixed with the collective storytelling of
                TTRPGs to create a new immersive game experience.
              </h2>
              <p className="text-shadow-primary-blood margin-top-small text-color-inktongue">
                Played collaboratively like a traditional tabletop RPG, but
                built for virtual play, you get all of the benefits of the most
                in-depth rpgs without having to memorize complicated rulesets or
                track dozens of stats and mechanics. Where other virtual
                tabletops enable you to play games intended for in-person play,
                Knuckledragger is made to be played online, which enables us to
                weave all of the tools directly into the mechanics of the game.
              </p>
            </div>
          </div>
        </header>
        <section className="video">
          <div className="video__container">
            <iframe
              className="video__video"
              title="Demo"
              src="https://www.youtube.com/embed/tO6kdeqMvYg"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className="video__image-box">
            <img
              className="video__image-box--image"
              src="img/promo_img_1.png"
              alt="Gameplay"
            />
          </div>
        </section>
        <section className="features-1">
          <div className="features-1__text-box">
            <h2 className="heading-2 text-shadow-primary-blood text-color-inktongue">
              What makes us different?
            </h2>
            <ul className="features-1__ul margin-top-medium">
              <li className="features-1__li text-shadow-primary-blood text-color-inktongue">
                Intense combat system with simultaneous turns
              </li>
              <li className="features-1__li text-shadow-primary-blood text-color-inktongue">
                No more waiting for your turn or stopping to do math in the
                middle of a fight
              </li>
              <li className="features-1__li text-shadow-primary-blood text-color-inktongue">
                Vital statistics like ammo, weight and time are tracked for you
              </li>
              <li className="features-1__li text-shadow-primary-blood text-color-inktongue">
                Knuckledragger takes care of the minutae so you can focus on
                telling an amazing story
              </li>
              <li className="features-1__li text-shadow-primary-blood text-color-inktongue">
                Built-in generators and databases make campaigns unique and
                consistent
              </li>
              <li className="features-1__li text-shadow-primary-blood text-color-inktongue">
                Unique NPCs, items and locations can be made quickly and saved
                with full detail, ensuring gameplay is never stopped by
                something getting lost in the shuffle
              </li>
            </ul>
          </div>
          <div className="features-1__text-box">
            <h2 className="heading-2 text-shadow-primary-blood text-color-inktongue">
              Gameplay
            </h2>
            <p className="text-shadow-primary-blood text-color-inktongue margin-top-medium">
              While we're heavily inspired by Traditional Tabletop RPGs, the
              older tropes have been entirely rethought with new technology
              being utilized at the core of Knuckledragger.
            </p>
          </div>
        </section>
        <section className="features-2">
          <div className="features-2__text-box">
            <h2 className="heading-2 text-shadow-primary-blood text-color-inktongue">
              On the planet of Planet
            </h2>
            <p className="text-shadow-primary-blood text-color-inktongue margin-top-medium">
              On the once flourishing planet of Planet, a small handful of
              primitive, brutal races sat on the edge of civilization. One
              fateful day, visitors from a far away world arrived to spread
              their space age tech and peaceful ways. They were quickly
              slaughtered and looted for everything they brought. These species,
              now self-stylized as the High Races, quickly established dominant
              civilizations which had a massive impact on the developing Planet.
              Armed with tech far beyond their comprehension, these races could
              now pursue their goals at a scope previously unimaginable. The
              full world can be explored in Our Guidebook section.
            </p>
          </div>
        </section>
        <section className="features-2">
          <div className="features-2__text-box">
            <h2 className="heading-2 text-shadow-primary-blood text-color-inktongue">
              Goals
            </h2>
            <ul className="features-1__ul margin-top-medium">
              <li className="features-1__li text-shadow-primary-blood text-color-inktongue">
                Create a game which is immersive and constantly growing
              </li>
              <li className="features-1__li text-shadow-primary-blood text-color-inktongue">
                Make that game accessible to players of all kinds
              </li>
              <li className="features-1__li text-shadow-primary-blood text-color-inktongue">
                Create high-quality expansion material that makes our
                subscription the best value in the RPG world
              </li>
              <li className="features-1__li text-shadow-primary-blood text-color-inktongue">
                Foster an open and inviting community that will help us grow as
                we strive to give you the best possible game
              </li>
            </ul>
          </div>
        </section>
        <section className="features-2">
          <div className="features-1__text-box">
            <h2 className="heading-2 text-shadow-primary-blood text-color-inktongue">
              Check out more today!
            </h2>
            <p className="text-shadow-primary-blood text-color-inktongue margin-top-medium">
              Sign up below to start receiving the Knuckledragger newsletter or
              follow us on Facebook to stay up to date with all of our plans as
              we bring Knuckledragger to its full potential.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
