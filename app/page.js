'use client';

import { useState } from 'react';

const content = {
  sr: {
    nav: {
      club: 'Klub',
      membership: 'Članstvo',
      apply: 'Prijava',
      label: 'Glavna navigacija',
    },
    hero: {
      eyebrow: 'Privatni klub snage za žene',
      title: 'Snaga, gracioznost, disciplina.',
      text: 'ÉLAN je privatni prostor za trening namenjen ženama koje žele da grade snagu u mirnom, fokusiranom i prefinjenom okruženju.',
      primary: 'Prijavi se za članstvo',
      secondary: 'Istraži klub',
    },
    statement: {
      kicker: 'ÉLAN metod',
      title: 'Snaga nije glasna. Ona se gradi.',
      text: 'ÉLAN je nastao za žene koje vrednuju disciplinu više od buke, preciznost više od haosa i snagu više od spoljašnjeg utiska. Privatni prostor za fokusiran trening, vođen napredak i visoke standarde.',
      note: 'Ograničeno članstvo. Prefinjen prostor. Ličan pristup.',
    },
    difference: {
      kicker: 'Standard',
      title: 'Drugačiji klub snage.',
      items: [
        {
          title: 'Privatno okruženje',
          text: 'Miran prostor za žene, osmišljen bez gužve, pritiska i ometanja.',
        },
        {
          title: 'Vođeni trening',
          text: 'Strukturisani treninzi usmereni na tehniku, progresiju i dugoročnu snagu.',
        },
        {
          title: 'Ograničeno članstvo',
          text: 'Broj članica je namerno ograničen kako bi se sačuvali kvalitet, privatnost i pažnja.',
        },
        {
          title: 'Prefinjeni standardi',
          text: 'Od prostora do pristupa treningu, svaki detalj je izgrađen oko fokusa i doslednosti.',
        },
      ],
    },
    membership: {
      kicker: 'Članstvo',
      title: 'Opcije članstva',
      note: 'Članstvo je moguće isključivo putem prijave.',
      items: [
        {
          name: 'Exclusive Membership',
          detail: 'Neograničen broj treninga',
          price: 'Od 450€ / mesečno',
          description:
            'Za članice koje žele potpun kontinuitet, fleksibilnost i najviši nivo pristupa klubu. Uključuje neograničene treninge u mirnom ritmu, sa prostorom za dosledan napredak i dugoročnu disciplinu.',
        },
        {
          name: 'Elite Package',
          detail: '12 treninga mesečno',
          price: 'Od 320€ / mesečno',
          description:
            'Uravnotežena opcija za žene koje žele strukturisan mesečni ritam. Dvanaest pažljivo vođenih termina pružaju dovoljno frekvencije za tehnički napredak, snagu i stabilnu rutinu.',
        },
        {
          name: 'Personal Training',
          detail: 'Individualni treninzi',
          price: 'Od 60€ / trening',
          description:
            'Individualan rad za specifične ciljeve, početak treninga ili usavršavanje tehnike. Svaki termin se prilagođava trenutnom nivou, fokusu i tempu članice.',
        },
      ],
    },
    space: {
      kicker: 'Prostor',
      title: 'Privatno. Fokusirano. Uzvišeno.',
      text: 'ÉLAN je osmišljen kao tiha alternativa tradicionalnoj teretani. Minimalan enterijer, kontrolisana atmosfera i ograničen broj članica stvaraju uslove za ozbiljan, dosledan rad.',
      panel: 'Privatni klub snage za žene',
    },
    audience: {
      kicker: 'Za koga',
      title: 'Za žene koje treniraju sa namerom.',
      text: 'ÉLAN je za žene koje žele snagu bez haosa, vođstvo bez pritiska i prostor u kome trening postaje deo smirenijeg, promišljenog načina života.',
      items: [
        'Za početnice koje žele sigurno vođstvo',
        'Za iskusne žene koje žele privatnost',
        'Za one koje biraju strukturu umesto improvizacije',
        'Za žene koje žele rezultat bez buke komercijalne teretane',
      ],
    },
    application: {
      kicker: 'Prijava',
      title: 'Prijavi se za članstvo.',
      text: 'Kako bi se očuvali kvalitet prostora i iskustvo treninga, ÉLAN prima članice kroz kratak proces prijave.',
      name: 'Ime',
      email: 'Email',
      focus: 'Trening fokus',
      submit: 'Zatraži informacije o članstvu',
    },
  },
  en: {
    nav: {
      club: 'Club',
      membership: 'Membership',
      apply: 'Apply',
      label: 'Main navigation',
    },
    hero: {
      eyebrow: 'Women’s Strength Private Club',
      title: 'Strength, Grace, Discipline.',
      text: 'ÉLAN is a private training space for women who want to build strength in a calm, focused and refined environment.',
      primary: 'Apply for Membership',
      secondary: 'Explore the Club',
    },
    statement: {
      kicker: 'ÉLAN Method',
      title: 'Strength is not loud. It is cultivated.',
      text: 'ÉLAN was created for women who value discipline over noise, precision over chaos, and strength over appearance. A private space designed for focused training, guided progress and elevated standards.',
      note: 'Limited membership. Refined space. Personal approach.',
    },
    difference: {
      kicker: 'The Standard',
      title: 'A different kind of strength club.',
      items: [
        {
          title: 'Private Environment',
          text: 'A calm, women-focused space designed without crowding, pressure or distraction.',
        },
        {
          title: 'Guided Training',
          text: 'Structured sessions focused on technique, progression and long-term strength.',
        },
        {
          title: 'Limited Membership',
          text: 'Membership is intentionally limited to preserve quality, privacy and attention.',
        },
        {
          title: 'Refined Standards',
          text: 'From the space to the training approach, every detail is built around focus and consistency.',
        },
      ],
    },
    membership: {
      kicker: 'Membership',
      title: 'Membership Options',
      note: 'Membership by application only.',
      items: [
        {
          name: 'Exclusive Membership',
          detail: 'Unlimited sessions',
          price: 'From 450€ / monthly',
          description:
            'For members who want full continuity, flexibility and the highest level of access to the club. Unlimited training supports steady progress, long-term discipline and a composed rhythm.',
        },
        {
          name: 'Elite Package',
          detail: '12 sessions per month',
          price: 'From 320€ / monthly',
          description:
            'A balanced option for women who want a structured monthly rhythm. Twelve guided sessions create the consistency needed for technique, strength and measured progression.',
        },
        {
          name: 'Personal Training',
          detail: '1-on-1 sessions',
          price: 'From 60€ / session',
          description:
            'Individual work for specific goals, training foundations or technical refinement. Each session is shaped around the member’s current level, focus and pace.',
        },
      ],
    },
    space: {
      kicker: 'The Space',
      title: 'Private. Focused. Elevated.',
      text: 'ÉLAN is designed as a quiet alternative to the traditional gym. Minimal interiors, controlled atmosphere and a limited number of members create the conditions for serious, consistent work.',
      panel: 'Women’s Strength Private Club',
    },
    audience: {
      kicker: 'For Whom',
      title: 'For women who train with intention.',
      text: 'ÉLAN is for women who want strength without chaos, guidance without pressure, and a space where training becomes part of a more composed lifestyle.',
      items: [
        'For beginners who want safe guidance',
        'For experienced women who want privacy',
        'For those who prefer structure over improvisation',
        'For women who want results without the noise of a commercial gym',
      ],
    },
    application: {
      kicker: 'Application',
      title: 'Apply for membership.',
      text: 'To preserve the quality of the space and the training experience, ÉLAN accepts members through a short application process.',
      name: 'Name',
      email: 'Email',
      focus: 'Training focus',
      submit: 'Request Membership Information',
    },
  },
};

export default function Home() {
  const [language, setLanguage] = useState('sr');
  const [activeMembership, setActiveMembership] = useState(0);
  const copy = content[language];
  const assetBasePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  const visualImage = `url('${assetBasePath}/elan-visual-reference.jpg')`;

  return (
    <main style={{ '--elan-image': visualImage }}>
      <header className="site-header" aria-label={copy.nav.label}>
        <a className="brand-mark" href="#top" aria-label="ÉLAN home">
          ÉLAN
        </a>
        <div className="header-actions">
          <nav>
            <a href="#club">{copy.nav.club}</a>
            <a href="#membership">{copy.nav.membership}</a>
            <a href="#apply">{copy.nav.apply}</a>
          </nav>
          <div className="language-switch" aria-label="Language switcher">
            <button
              type="button"
              className={language === 'sr' ? 'is-active' : ''}
              onClick={() => setLanguage('sr')}
            >
              SR
            </button>
            <button
              type="button"
              className={language === 'en' ? 'is-active' : ''}
              onClick={() => setLanguage('en')}
            >
              EN
            </button>
          </div>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero__image" aria-hidden="true" />
        <div className="hero__content">
          <p className="eyebrow">{copy.hero.eyebrow}</p>
          <h1>{copy.hero.title}</h1>
          <p>{copy.hero.text}</p>
          <div className="hero__actions">
            <a className="button button--dark" href="#apply">
              {copy.hero.primary}
            </a>
            <a className="button button--light" href="#club">
              {copy.hero.secondary}
            </a>
          </div>
        </div>
      </section>

      <section className="statement section-shell" id="club">
        <p className="section-kicker">{copy.statement.kicker}</p>
        <h2>{copy.statement.title}</h2>
        <p>{copy.statement.text}</p>
        <span>{copy.statement.note}</span>
      </section>

      <section className="difference section-shell">
        <div className="section-heading">
          <p className="section-kicker">{copy.difference.kicker}</p>
          <h2>{copy.difference.title}</h2>
        </div>
        <div className="feature-grid">
          {copy.difference.items.map((item) => (
            <article className="feature-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="membership section-shell" id="membership">
        <div className="membership__intro">
          <p className="section-kicker">{copy.membership.kicker}</p>
          <h2>{copy.membership.title}</h2>
          <p>{copy.membership.note}</p>
        </div>
        <div className="membership-list">
          {copy.membership.items.map((item, index) => {
            const isOpen = activeMembership === index;
            const panelId = `membership-panel-${index}`;

            return (
              <article className="membership-row" key={item.name}>
                <button
                  type="button"
                  className="membership-row__trigger"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setActiveMembership(isOpen ? null : index)}
                >
                  <div>
                    <h3>{item.name}</h3>
                    <p>{item.detail}</p>
                  </div>
                  <span className="membership-row__meta">
                    <strong>{item.price}</strong>
                    <span className="membership-row__arrow" aria-hidden="true" />
                  </span>
                </button>
                <div
                  className="membership-row__content"
                  id={panelId}
                  hidden={!isOpen}
                >
                  <p>{item.description}</p>
                </div>
            </article>
            );
          })}
        </div>
      </section>

      <section className="space">
        <div className="space__copy">
          <p className="section-kicker">{copy.space.kicker}</p>
          <h2>{copy.space.title}</h2>
          <p>{copy.space.text}</p>
        </div>
        <div className="space__panel" aria-hidden="true">
          <span>ÉLAN</span>
          <small>{copy.space.panel}</small>
        </div>
      </section>

      <section className="audience section-shell">
        <div className="section-heading">
          <p className="section-kicker">{copy.audience.kicker}</p>
          <h2>{copy.audience.title}</h2>
          <p>{copy.audience.text}</p>
        </div>
        <ul>
          {copy.audience.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="application" id="apply">
        <div className="application__copy">
          <p className="section-kicker">{copy.application.kicker}</p>
          <h2>{copy.application.title}</h2>
          <p>{copy.application.text}</p>
        </div>
        <form className="application-form">
          <label>
            {copy.application.name}
            <input type="text" name="name" autoComplete="name" />
          </label>
          <label>
            {copy.application.email}
            <input type="email" name="email" autoComplete="email" />
          </label>
          <label>
            {copy.application.focus}
            <textarea name="focus" rows="4" />
          </label>
          <button type="submit">{copy.application.submit}</button>
        </form>
      </section>
    </main>
  );
}
