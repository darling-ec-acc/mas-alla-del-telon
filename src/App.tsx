import "./App.css";
import BackImg from "./assets/background.jpg";
import loguito from "./assets/loguito.png";
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
      link: "https://instagram.com/mas_alladel_telon?igshid=YmM0MjE2YWMzOA==",
    },
    {
      name: "TikTok",
      link: "https://www.tiktok.com/@masalladeltelonuce?_t=8dTO1RPzFHZ&_r=1",
    },
  ];
  return (
    <div
      className="w-full h-screen"
      style={{
        backgroundImage: `url(${BackImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white !important",
      }}
    >
      <div className="w-full flex center justify-center">
        <div
          className="navbar"
          style={{
            maxWidth: "80rem",
          }}
        >
          <div className="flex-1">
            <p className="btn btn-ghost normal-case text-xl max-[414px]:hidden">
              Mas Allá Del Telón
            </p>
          </div>
          <div className="flex-none">
            <div className="dropdown dropdown-end">
              <div className="flex gap-2 center justify-center">
                {links.map((link) => (
                  <label tabIndex={0} className="btn btn-ghost btn-circle">
                    <a
                      href={link.link}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="flex items-center justify-center gap-2 text-3xl hover:scale-110 transition-all"
                    >
                      {link.name === "YouTube" && <FaYoutube />}
                      {link.name === "Spotify" && <FaSpotify />}
                      {link.name === "Instagram" && <FaInstagram />}
                      {link.name === "TikTok" && <FaTiktok />}
                    </a>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero min-h-screen w-full">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={loguito} className="max-w-sm" />
          <div className="w-full" style={{
            background: "rgba(0,0,0,0.4)",
            padding: "1rem",
            borderRadius: "1rem"
          }}>
            <h1 className="text-5xl font-bold">Mas Allá del telón</h1>
            <p className="py-6 text-2xl">
              Es un podcast de la Facultad de Artes relacionado con las Artes
              escénicas que promueve los procesos artísticos y creativos de la
              carrera.{" "}
              <a
                href="https://www.uce.edu.ec"
                target="_blank"
                rel="noreferrer noopener"
                className="hover:text-gray-200 hover:scale-110 transition-all font-medium"
              >
                (Universidad Central del Ecuador)
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
