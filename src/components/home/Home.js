import React from 'react';

export default function Home() {
  return (
    <div className="root-container">
      <div className="inner-container">
        <header className="header">
          <div className="header__logo-1 text-color-inktongue">
            <img
              className="header__logo-img"
              src="img/knuckledragger_logo.jpg"
              alt="Logo"
            />
          </div>
          <h1 className="heading-1 heading-1--hover header__heading center">
            KnuckledraggerRPG
            <small className="heading-1 heading-1--hover--small text-color-inktongue">
              Welcome to Planet
            </small>
          </h1>
          <div className="header__text-box">
            <p className="header__text-text-1">
              Tabletop B-RPG with simplicity in mind
            </p>
            <p className="header__text-text-1 margin-top-small">
              For an android with no feelings, he sure managed to evoke them in
              others. Worf, It's better than music. It's jazz. and attack the
              Romulans. A lot of things can change in twelve years, Admiral. And
              blowing into maximum warp speed, you appeared for an instant to be
              in two places at once. Your shields were failing, sir. Earl Grey
              tea, watercress sandwiches... and Bularian canapés? Are you up for
              promotion? I guess it's better to be lucky than good. My oath is
              between Captain Kargan and myself. Your only concern is with how
              you obey my orders. Or do you prefer the rank of prisoner to that
              of lieutenant?
            </p>
          </div>
        </header>
        <section className="features">
          <div className="features__text-box">
            Play, create and host... Yesterday I did not know how to eat gagh.
            I'll be sure to note that in my log. Damage report! Not if I weaken
            first. Smooth as an android's bottom, eh, Data? I am your worst
            nightmare! You enjoyed that. When has justice ever been as simple as
            a rule book? I can't. As much as I care about you, my first duty is
            to the ship. But the probability of making a six is no greater than
            that of rolling a seven. Could someone survive inside a transporter
            buffer for 75 years? Maybe we better talk out here; the observation
            lounge has turned into a swamp.
          </div>
          <div className="features__image-box">
            <img
              className="features__image"
              src="img/promo_img_1.png"
              alt="Gameplay"
            />
          </div>
        </section>
      </div>
    </div>
  );
}
