import styles from './index.module.scss';
import SignSVG from '../../../public/main-sign.svg';
import clsx from 'clsx';
import { LanguageSwitcher } from '@/shared/ui/LanguageSwitcher';
import { Old_Standard_TT } from 'next/font/google';
import Image from 'next/image';
import ElinaLogo from '../../../public/elina-logo.svg';
import first from '../../../public/Imagen20.jpg';
import second from '../../../public/Imagen8.jpg';
import third from '../../../public/Imagen16.jpg';
import four from '../../../public/Imagen23.jpg';
import five from '../../../public/Imagen35.jpg';
import six from '../../../public/Imagen36.jpg';
import mainImg from '../../../public/Imagen3.jpg';
import XSvg from '../../../public/x-svg.svg';
import InstSvg from '../../../public/inst-svg.svg';
import FBSvg from '../../../public/fb-svg.svg';

const OldStandardTT = Old_Standard_TT({ weight: '400', preload: false });

export const MainPage = () => {
  return (
    <div className={clsx(styles.mainPage)}>
      <section className={styles.firstSection}>
        <div className={clsx(styles.header)}>
          <LanguageSwitcher />
        </div>

        <div className={clsx(styles.mainContent)}>
          <h1 className={clsx(styles.title)}>
            We dive into the heart of Mexico, revealing the secrets of exquisite silver jewelry.
          </h1>
          <SignSVG className={clsx(styles.mainSvg)} />
        </div>
      </section>

      <section className={clsx(styles.secondSection)}>
        <h2 className={clsx(styles.subtitle)}>Our Legacy</h2>
        <p className={clsx(styles.subtitleDescription, [OldStandardTT.className])}>
          Every piece we create is steeped in a rich cultural history that’s as stunning as the jewelry itself. For
          centuries, Mexico’s master silversmiths have been weaving tales through sterling silver, and we’re honored to
          continue this time-honored tradition.
        </p>
      </section>

      <section className={clsx(styles.thirdSection)}>
        <div className={styles.photos}>
          <div className={clsx(styles.gridItem)}>
            <Image src={first} alt="production image" className={clsx(styles.photo)} />
            <div className={clsx(styles.photoText)}>
              <h3 className={clsx(styles.photoTitle, [OldStandardTT.className])}>Marvels</h3>
              <p className={clsx(styles.photoDescription, [OldStandardTT.className])}>
                Our collection offers a taste of Mexico&apos;s vibrant spirit and flair.
              </p>
            </div>
          </div>
          <div className={clsx(styles.gridItem)}>
            <Image src={second} alt="production image" className={clsx(styles.photo)} />
            <div className={clsx(styles.photoText)}>
              <h3 className={clsx(styles.photoTitle, [OldStandardTT.className])}>Authenticity</h3>
              <p className={clsx(styles.photoDescription, [OldStandardTT.className])}>
                Each item is crafted with the finest silver and bears the imprint of skilled artisans.
              </p>
            </div>
          </div>
          <div className={clsx(styles.gridItem)}>
            <Image src={third} alt="production image" className={clsx(styles.photo)} />
            <div className={clsx(styles.photoText)}>
              <h3 className={clsx(styles.photoTitle, [OldStandardTT.className])}>Universe</h3>
              <p className={clsx(styles.photoDescription, [OldStandardTT.className])}>
                We draw inspiration from the beauty of the cosmos, blending ancient tradition and modern design.
              </p>
            </div>
          </div>
          <div className={clsx(styles.gridItem)}>
            <Image src={four} alt="production image" className={clsx(styles.photo)} />
            <div className={clsx(styles.photoText)}>
              <h3 className={clsx(styles.photoTitle, [OldStandardTT.className])}>Fashion</h3>
              <p className={clsx(styles.photoDescription, [OldStandardTT.className])}>
                Ahead of trends, our pieces add a twist of sophistication to any look.
              </p>
            </div>
          </div>
          <div className={clsx(styles.gridItem)}>
            <Image src={five} alt="production image" className={clsx(styles.photo)} />
            <div className={clsx(styles.photoText)}>
              <h3 className={clsx(styles.photoTitle, [OldStandardTT.className])}>Craftsmanship</h3>
              <p className={clsx(styles.photoDescription, [OldStandardTT.className])}>
                Our workshop is a space where creativity, skill and silver intertwine.
              </p>
            </div>
          </div>
          <div className={clsx(styles.gridItem)}>
            <Image src={six} alt="production image" className={clsx(styles.photo)} />
            <div className={clsx(styles.photoText)}>
              <h3 className={clsx(styles.photoTitle, [OldStandardTT.className])}>Inspiration</h3>
              <p className={clsx(styles.photoDescription, [OldStandardTT.className])}>
                The city of Mexico, a cradle of art and culture, fuels our creativity.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={clsx(styles.fourSection)}>
        <h4 className={clsx(styles.fourSectionTitle)}>Get Sparked</h4>
        <p className={clsx(styles.fourSectionText, [OldStandardTT.className])}>
          Unleash your inner brilliance. Explore our catalog and step into the world of Silver Sparklers. Let’s start
          your journey today!
        </p>
        <button className={clsx(styles.contactButton, [OldStandardTT.className])}>Explore Collection</button>
      </section>

      <section className={clsx(styles.fiveSection)}>
        <h4 className={clsx(styles.fiveSectionTitle)}>
          Jewelry is like the perfect spice, it always complements what’s already there
        </h4>
        <Image src={mainImg} alt="all products" className={clsx(styles.mainPhoto)} />
      </section>

      <section className={clsx(styles.sixSection)}>
        <h4 className={clsx(styles.sixSectionTitle)}>Quick Questions</h4>
        <div className={clsx(styles.questions)}>
          <div className={clsx(styles.question)}>
            <h6 className={clsx(styles.sixSectionSubtitle, [OldStandardTT.className])}>Why choose Silver Sparklers?</h6>
            <p className={clsx(styles.sixSectionText, [OldStandardTT.className])}>
              Because we offer not just a piece of jewelry, but a piece of history, art, and culture.
            </p>
          </div>

          <div className={clsx(styles.question)}>
            <h6 className={clsx(styles.sixSectionSubtitle, [OldStandardTT.className])}>Why choose Silver Sparklers?</h6>
            <p className={clsx(styles.sixSectionText, [OldStandardTT.className])}>
              Because we offer not just a piece of jewelry, but a piece of history, art, and culture.
            </p>
          </div>

          <div className={clsx(styles.question)}>
            <h6 className={clsx(styles.sixSectionSubtitle, [OldStandardTT.className])}>Why choose Silver Sparklers?</h6>
            <p className={clsx(styles.sixSectionText, [OldStandardTT.className])}>
              Because we offer not just a piece of jewelry, but a piece of history, art, and culture.
            </p>
          </div>
        </div>
      </section>

      <footer className={clsx(styles.footer)}>
        <ElinaLogo className={clsx(styles.footerSvg)} />
        <div className={clsx(styles.societe)}>
          <XSvg />
          <InstSvg />
          <FBSvg />
        </div>
        <p className={clsx(styles.reserved, [OldStandardTT.className])}>© 2024 Elina Worbis, All Rights Reserved.</p>
      </footer>
    </div>
  );
};
