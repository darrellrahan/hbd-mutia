"use client";

import React, { useRef, useState } from "react";
import { useStateContext } from "../context/state";
import { TypeAnimation } from "react-type-animation";
import { Cake, SmileyWink, Star } from "@phosphor-icons/react";
import Snowfall from "react-snowfall";
import { Pacifico } from "next/font/google";

const pacifico = Pacifico({ weight: ["400"], subsets: ["latin"] });

function Third() {
  const { current, name } = useStateContext();
  const star1 = useRef<HTMLButtonElement>(null);
  const star2 = useRef<HTMLButtonElement>(null);
  const star3 = useRef<HTMLButtonElement>(null);
  const star4 = useRef<HTMLButtonElement>(null);
  const [starCount, setStarCount] = useState(4);
  const [sequenceDone, setSequenceDone] = useState({
    first: false,
    second: false,
    third: false,
    fourth: false,
  });

  return (
    <main
      className={`flex flex-col gap-10 items-center gap-4 p-8 duration-[2s] ease-linear ${
        current === "Third" ? "scale-100 h-fit" : "scale-0 h-0"
      }`}
    >
      {sequenceDone.fourth && <Snowfall />}
      <img
        src="/assets/alpaca.gif"
        alt="alpaca"
        width={150}
        height={150}
        className="rounded-full border-2 border-white p-4 shadow-[0_0_1.25rem_0_rgba(255,255,255)]"
      />
      {current === "Third" && (
        <TypeAnimation
          sequence={[
            1500,
            `Happy birthday, ${name} ✨`,
            () => {
              setSequenceDone({ ...sequenceDone, first: true });
            },
          ]}
          wrapper="div"
          cursor={true}
          className="font-bold"
        />
      )}
      <div
        className={`w-full rounded-tl-[30px] rounded-br-[30px] p-4 bg-[#373244] relative before:absolute before:-inset-2.5 before:border before:border-white before:rounded-tl-[30px] before:rounded-br-[30px] items-center justify-center duration-[1s] ease-linear ${
          sequenceDone.first ? "scale-100" : "scale-0"
        } ${starCount === 0 ? "h-fit block" : "h-40 flex"}`}
      >
        <SmileyWink className="absolute top-4 left-4" size={20} />
        {starCount === 0 && (
          <TypeAnimation
            sequence={[
              1500,
              "Tunggu...",
              1000,
              "Baca baik-baik yaaa",
              2500,
              "Yh hi mutia, hadeuh tua loe dah 18. nangis bgt bentar lagi 30 kwkwwk (apasi) makasii dah jadi temen ak selamat sejuta abad ini, jangan bosen bosen sm aku dong pls. sipaling sabar nungguin gueh yang super duper lelet ini. semoga makin cantik, makin sayang orang tua, lulus utbk, sama ga di phpin lagi wkwkwkwk. aku gatau mau ngucapin apaa, pengen malem-malem soalnya siapa tau jadi yang terakhir ngucapin ulang tahun. tapi aku gaakan pernah lupa koo. kita kadang jauh tapi kalo udah deket bisa cerita banyak hal, dan hal itu sangat jarang terjadi di hidup aku. aku banyak kurangnya, banyak buruknya juga tapi makasi dah sabar yaa, ga banyak orang bisa sesabar itu sama aku tapi kamu bisa. aku gabisa jadi teman atau sahabat terbaik kamu, tapi kalo kamu butuh aku, aku bakal selalu ada, kalo kamu minta tolong pasti aku bantuin, jangan pernah ragu untuk itu karena aku bakal selalu berusaha jadi yang terbaik untuk orang-orang terbaik yang ada di sekeliling aku. sekali lagi, selamat bertambah usia mutia 🫶🏻",
              () => {
                setSequenceDone({ ...sequenceDone, third: true });
              },
            ]}
            wrapper="div"
            cursor={true}
            className="mt-10"
          />
        )}
        {sequenceDone.third && (
          <TypeAnimation
            sequence={[
              1500,
              "Happy Level Up Day!",
              () => {
                setSequenceDone({ ...sequenceDone, fourth: true });
              },
            ]}
            wrapper="h3"
            cursor={true}
            className={`my-12 text-2xl text-center ${pacifico.className}`}
            speed={20}
          />
        )}
        <div
          className={`z-10 duration-300 ease-linear ${
            starCount > 0 ? "opacity-100 h-fit" : "opacity-0 h-0"
          }`}
        >
          {sequenceDone.first && (
            <TypeAnimation
              sequence={[
                1000,
                "Klik 4 bintang di bawah!",
                () => {
                  setSequenceDone({ ...sequenceDone, second: true });
                },
              ]}
              wrapper="h3"
              cursor={false}
            />
          )}
          <div
            className={`flex gap-4 justify-center mt-6 duration-300 ease-linear ${
              sequenceDone.second ? "opacity-100" : "opacity-0"
            }`}
          >
            <button
              onClick={() => {
                star1.current!.style.opacity = "0";
                setStarCount(starCount - 1);
              }}
              ref={star1}
              className="opacity-100 duration-300 ease-linear"
            >
              <Star size={28} color="#ffe234" weight="fill" />
            </button>
            <button
              onClick={() => {
                star2.current!.style.opacity = "0";
                setStarCount(starCount - 1);
              }}
              ref={star2}
              className="opacity-100 duration-300 ease-linear"
            >
              <Star size={28} color="#ffe234" weight="fill" />
            </button>
            <button
              onClick={() => {
                star3.current!.style.opacity = "0";
                setStarCount(starCount - 1);
              }}
              ref={star3}
              className="opacity-100 duration-300 ease-linear"
            >
              <Star size={28} color="#ffe234" weight="fill" />
            </button>
            <button
              onClick={() => {
                star4.current!.style.opacity = "0";
                setStarCount(starCount - 1);
              }}
              ref={star4}
              className="opacity-100 duration-300 ease-linear"
            >
              <Star size={28} color="#ffe234" weight="fill" />
            </button>
          </div>
        </div>
      </div>
      <a
        href="https://wa.me/6287822510722"
        target="_blank"
        className={`bg-[#373244] rounded-tl-[10px] rounded-br-[10px] border-2 border-white py-2 px-4 flex items-center gap-2 duration-[1s] ease-linear ${
          sequenceDone.fourth ? "scale-100" : "scale-0"
        }`}
      >
        <Cake size={16} weight="fill" color="#fff" />
        <span>Balas</span>
      </a>
    </main>
  );
}

export default Third;
