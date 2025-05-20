// import Image from "next/image";
import PageFiller from "@/components/PageFiller/page";
import styles from "./home.module.css";

import Review from "@/components/Reviews/page";
import HomepageAbout from "@/components/HomePageAbout/page";
import Homehero from "@/components/Hero/HomeHero";
// import HomePageIconRow from "@/components/HomePageIconRow/page";

export default function Home() {
  return (
    <main
      className={styles.main}
    >
      <Homehero/>
      <HomepageAbout/>
      <PageFiller/>
      <Review/>
    </main>
  );
}
