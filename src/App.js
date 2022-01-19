import logo from "./logo.svg";
import {
  EyeIcon,
  GlobeAltIcon,
  ScaleIcon,
  LightningBoltIcon,
  CogIcon,
  CakeIcon,
} from "@heroicons/react/outline";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./App.css";

function App() {
  const [count1, setCount1] = useState(randomIntFromInterval(1, 3));
  const [count2, setCount2] = useState(randomIntFromInterval(1, 3));
  const [count3, setCount3] = useState(randomIntFromInterval(1, 3));
  const [count4, setCount4] = useState(randomIntFromInterval(1, 3));
  const [count5, setCount5] = useState(randomIntFromInterval(1, 3));

  const [clicked1, setClicked1] = useState(false);
  const [clicked2, setClicked2] = useState(false);
  const [clicked3, setClicked3] = useState(false);
  const [clicked4, setClicked4] = useState(false);
  const [clicked5, setClicked5] = useState(false);

  function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const features = [
    {
      name: "Hoe het spel werkt",
      description:
        "Na een druk op een knop, 5 random cijfers te zien krijgen die elk een waardevhebben tussen 1 en 4",
      icon: GlobeAltIcon,
    },
    {
      name: "Regels",
      description: "Geen regels.",
      icon: ScaleIcon,
    },
    {
      name: "Puntengeving",
      description:
        "5 dezelfde cijfers: Gewonnen (5pt), 4 dezelfde cijfers: Gewonnen (4pt), 2-3 dezelfde cijfers: Gewonnen (2-3pt), <2 dezelfde cijfers: Verloren (-2pt), ",
      icon: LightningBoltIcon,
    },
    {
      name: "Technische details",
      description:
        "Cijfers worden gegenereerd door Math.floor() functie in Javascript",
      icon: CogIcon,
    },
  ];

  console.log(count1, count2, count3, count4, count5);

  return (
    <div className="bg-slate-600 select-none">
      <header className="p-3 bg-indigo-700 flex text-white justify-between items-center">
        <h2 className="text-xl font-semibold">Gok Spelletje</h2>
        <a
          href="https://github.com/rayorole/randomgame-school"
          target="_blank"
          className="px-3 py-1 flex justify-center items-center text-sm font-semibold bg-white text-indigo-500 hover:text-white hover:bg-indigo-500 hover:rounded-xl hover:animate-none transition duration-300 ease-in-out rounded-lg"
        >
          Bekijk code
          <EyeIcon className="h-5 w-5 ml-2" />
        </a>
      </header>
      <main className="bg-neutral-100 px-24 flex justify-center text-center">
        <div className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
                Gok Spelletje
              </h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Gemaakt door Ray Orolé
              </p>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                Hoe het spel werkt en wat de spelregels zijn lees je hieronder
              </p>
            </div>

            <div className="mt-10">
              <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                {features.map((feature) => (
                  <div key={feature.name} className="relative">
                    <dt>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                        <feature.icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                        {feature.name}
                      </p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500">
                      {feature.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </main>
      <div className="bg-neutral-100 p-24 text-center">
        <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
          Speel nu
        </h2>
        <div className="grid gap-5 grid-cols-5 grid-rows-1 my-10">
          <motion.div
            whileTap={{ scale: 0.8 }}
            onClick={() => setClicked1(!clicked1)}
            className=" bg-indigo-600 hover:bg-indigo-500 h-52 flex justify-center items-center rounded-xl flip">
              {
                clicked1 ? <CakeIcon className="h-16 w-16 text-white" /> : ''
              }
          </motion.div>
          <motion.div
            whileTap={{ scale: 0.8 }}
            onClick={() => setClicked2(!clicked2)}
            className=" bg-indigo-600 hover:bg-indigo-500 h-52 flex justify-center items-center rounded-xl flip">
              {
                clicked2 ? <CakeIcon className="h-16 w-16 text-white" /> : ''
              }
          </motion.div>
          <motion.div
            whileTap={{ scale: 0.8 }}
            onClick={() => setClicked3(!clicked3)}
            className=" bg-indigo-600 hover:bg-indigo-500 h-52 flex justify-center items-center rounded-xl flip">
              {
                clicked3 ? <CakeIcon className="h-16 w-16 text-white" /> : ''
              }
          </motion.div>
          <motion.div
            whileTap={{ scale: 0.8 }}
            onClick={() => setClicked4(!clicked4)}
            className=" bg-indigo-600 hover:bg-indigo-500 h-52 flex justify-center items-center rounded-xl flip">
              {
                clicked4 ? <CakeIcon className="h-16 w-16 text-white" /> : ''
              }
          </motion.div>
          <motion.div
            whileTap={{ scale: 0.8 }}
            onClick={() => setClicked5(!clicked1)}
            className=" bg-indigo-600 hover:bg-indigo-500 h-52 flex justify-center items-center rounded-xl flip">
              {
                clicked5 ? <CakeIcon className="h-16 w-16 text-white" /> : ''
              }
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default App;
