import "./App.css";
import BackImg from "./assets/background.jpg";
import logo from "./assets/logo.png";
import { FaYoutube, FaTiktok, FaSpotify, FaInstagram } from "react-icons/fa";

interface Link {
  name: string;
  link: string;
}

function App() {
  const links: Link[] = [
    {
      name: "YouTube",
      link: "https://www.youtube.com/channel/UCsifJ_Z9OMAXwgcLpNpXaJA",
    },
    {
      name: "Spotify",
      link: "https://open.spotify.com/user/31atvlj3bvwjvep3bmrwqhxttla4",
    },
    {
      name: "Instagram",
      link: "https://www.instagram.com/_masalladeltelon_/",
    },
    {
      name: "TikTok",
      link: "https://www.tiktok.com/@masalladeltelonuce?_t=8dTO1RPzFHZ&_r=1",
    },
  ];
  return (
    <>
      <div
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${BackImg}), no-repeat center center fixed  `,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="h-screen w-full"
      >
        <div
          className="h-full w-full bg-cover flex flex-col gap-5 justify-center items-center z-10"
          // style={{
          //   background: `url(${logo}) repeat center center fixed`,
          //   backgroundSize: "cover",
          // }}
        >
          <div className="bg-white/70 p-10 rounded-2xl text-center text-[#0d0d0d]">
            <p className="text-xs">¡Bienvenidos a nuestro podcast!</p>
            <h1 className="text-4xl font-bold">"Mas Allá del Telón"</h1>
            <p className="text-sm">
              Relacionado con las Artes Escénicas de la facultad de Artes de la
              Universidad Central del Ecuador
            </p>
            <br />
            <p className="text-sm">SIGUENOS EN NUESTRAS REDES SOCIALES</p>

            <div className="flex justify-evenly items-center pt-5">
              {links.map((link) => (
                <a
                href={link.link}
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center justify-center gap-2 text-2xl hover:scale-110 transition-all"
                >
                  {link.name === "YouTube" && <FaYoutube />}
                  {link.name === "Spotify" && <FaSpotify />}
                  {link.name === "Instagram" && <FaInstagram />}
                  {link.name === "TikTok" && <FaTiktok />}
                </a>
              ))}
            </div>
          </div>
          <div className="bg-white/70 p-5 rounded-2xl text-center text-[#0d0d0d] font-semibold">
            <p className="text-xs text-[#0d0d0d]">
              Puesdes contactarnos en el siguiente correo:
              <a
                href="mailto:masalladeltelon286@gmail.com"
                className="text-purple-700"
              >
                masalladeltelon286@gmail.com
              </a>
            </p>
          </div>
              <img
                src={logo}
                className="w-[230px] h-[230px]"
                alt="logo"
              />
        </div>
      </div>
    </>
  );
}

export default App;
