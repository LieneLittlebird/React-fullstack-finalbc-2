import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./tabs.css";
import { Link } from "react-router-dom";
import DeniV from "./Deni.jpg";
import Poster from "./Poster.jpg";
import Herbert from "./Herbert.jpg";
import Series from "./Series.jpg";

const AboutTabs = () => (
  <div>
    <Tabs id="about-tabs">
      <TabList id="about-tabs-list">
        <Tab>Dune 2021</Tab>
        <Tab>Frank Herbert</Tab>
        <Tab>Deni Villenueve</Tab>
        <Tab>Duniverse</Tab>
      </TabList>

      <TabPanel>
        <div id="tab-panel">
          <img src={Poster} alt="" id="tabs-img-dune" />
          <p className="tabs-p">
            <Link
              to="https://en.wikipedia.org/wiki/Dune_(2021_film)"
              className="tabs-link"
            >
              Dune
            </Link>
            is an upcoming science fiction film directed by Denis Villeneuve
            with a screenplay by Jon Spaihts, Villeneuve, and Eric Roth. The
            film is an international co-production of Canada, Hungary, the
            United Kingdom, and the United States. It is the first of a planned
            two-part adaptation of the 1965 novel of the same name by Frank
            Herbert, which will cover roughly the first half of the book. The
            film stars an ensemble cast including Timothée Chalamet, Rebecca
            Ferguson, Oscar Isaac, Josh Brolin, Stellan Skarsgård, Dave
            Bautista, Stephen McKinley Henderson, Zendaya, David Dastmalchian,
            Chang Chen, Sharon Duncan-Brewster, Charlotte Rampling, Jason Momoa,
            and Javier Bardem. Dune is scheduled to be released theatrically in
            the United States in IMAX and 3D on October 1, 2021, by Warner Bros.
            Pictures, as well as a month-long simultaneous release on the HBO
            Max streaming service.
          </p>
        </div>
      </TabPanel>
      <TabPanel>
        <div id="tab-panel">
          <img src={Herbert} alt="" id="tabs-img" />
          <p className="tabs-p">
            <Link
              to="https://en.wikipedia.org/wiki/Frank_Herbert"
              className="tabs-link"
            >
              Franklin Patrick Herbert Jr
            </Link>
            (October 8, 1920 – February 11, 1986) was an American
            science-fiction author best known for the 1965 novel Dune and its
            five sequels. Though he became famous for his novels, he also wrote
            short stories and worked as a newspaper journalist, photographer,
            book reviewer, ecological consultant, and lecturer. The Dune saga,
            set in the distant future, and taking place over millennia, explores
            complex themes, such as the long-term survival of the human species,
            human evolution, planetary science and ecology, and the intersection
            of religion, politics, economics and power in a future where
            humanity has long since developed interstellar travel and settled
            many thousands of worlds. Dune is the best-selling science fiction
            novel of all time, and the whole series is widely considered to be
            among the classics of the genre.
          </p>
        </div>
      </TabPanel>
      <TabPanel>
        <div id="tab-panel">
          <img src={DeniV} alt="" id="tabs-img" />
          <p className="tabs-p">
            <Link
              to="https://en.wikipedia.org/wiki/Frank_Herbert"
              className="tabs-link"
            >
              Denis Villeneuve
            </Link>{" "}
            OC CQ (French: [dəni vilnœv]; born October 3, 1967) is a French
            Canadian film director, producer, and screenwriter. He is a
            four-time recipient of the Canadian Screen Award (formerly Genie
            Award) for Best Direction, for Maelström in 2001, Polytechnique in
            2009, Incendies in 2011 and Enemy in 2013. The first three of these
            films also won the Canadian Screen Award for Best Motion Picture,
            while the latter was awarded the prize for best Canadian film of the
            year by the Toronto Film Critics Association. Internationally, he is
            known for directing several critically acclaimed films, including
            the thrillers Prisoners (2013) and Sicario (2015), as well as the
            science fiction films Arrival (2016) and Blade Runner 2049 (2017).
            For his work on Arrival, he received an Academy Award nomination for
            Best Director. He was awarded the prize of Filmmaker of the Decade
            by the Hollywood Critics Association in December 2019. His next
            film, Dune, based on Frank Herberts novel of the same name is
            scheduled to be released on October 1, 2021.
          </p>
        </div>
      </TabPanel>
      <TabPanel>
        <div id="tab-panel">
          <img src={Series} alt="" id="tabs-img" />
          <p className="tabs-p">
            <Link
              to="https://en.wikipedia.org/wiki/Dune_(franchise)"
              className="tabs-link"
            >
              Dune
            </Link>
            is a science fiction media franchise that originated with the 1965
            novel Dune by Frank Herbert and has continued to add new
            publications. Dune is frequently cited as the best selling science
            fiction novel in history. It won the inaugural Nebula Award for Best
            Novel in 1965 and the 1966 Hugo Award, and was later adapted into a
            1984 film and a 2000 television miniseries. Herbert wrote five
            sequels, and the first two were presented as a miniseries in 2003.
            The Dune universe has also inspired some traditional games and a
            series of video games. Since 2009, the names of planets from the
            Dune novels have been adopted for the real-world nomenclature of
            plains and other features on Saturns moon Titan. Frank Herbert died
            in 1986. Beginning in 1999, his son Brian Herbert and science
            fiction author Kevin J. Anderson published a number of prequel
            novels, as well as two which complete the original Dune series
            (Hunters of Dune in 2006 and Sandworms of Dune in 2007), partially
            based on Frank Herberts notes discovered a decade after his death
          </p>
        </div>
      </TabPanel>
    </Tabs>
  </div>
  // 1. Show/hide active tabs
);

export default AboutTabs;
