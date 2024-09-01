import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faXTwitter,
  faYoutube,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import "./App.css";

function App() {
  return (
    <body className="h-screen bg-fuchsia-300 flex flex-col justify-center items-center content-center">
      <main
        id="mainCard"
        className="bg-slate-100 w-[80%] sm:w-1/2 lg:w-1/3 rounded-[30px] h-fit"
      >
        <div>
          <img
            src="https://avatarfiles.alphacoders.com/191/thumb-350-191504.webp"
            className="rounded-full m-auto mt-5 mb-5 w-1/2 lg:w-1/3"
          ></img>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-bold text-xl">Deyver Reyes</h1>
          <h3 className="italic text-md">@dyvrais</h3>
          <div className="flex justify-center mt-3 space-x-5">
            <FontAwesomeIcon
              className="text-2xl transition-all hover:scale-125"
              icon={faFacebook}
            />
            <FontAwesomeIcon
              className="text-2xl transition-all hover:scale-125"
              icon={faXTwitter}
            />
            <FontAwesomeIcon
              className="text-2xl transition-all hover:scale-125"
              icon={faYoutube}
            />
            <FontAwesomeIcon
              className="text-2xl transition-all hover:scale-125"
              icon={faLinkedin}
            />
          </div>
          <p className="p-6 lg:px-10 text-center text-sm md:text-base">
            Ad labore nulla velit consequat aliquip officia cupidatat ut. Id
            quis minim irure consectetur minim nostrud. Amet veniam aute ex ex
            nisi consectetur amet aliquip anim aute ut aliquip esse et. Do
            ullamco pariatur non fugiat consequat esse et duis sit pariatur amet
            enim laboris. Quis deserunt occaecat minim sint deserunt veniam.
            Laboris laborum adipisicing consequat nisi sunt nulla sit mollit
            incididunt exercitation.
          </p>
        </div>
        <div className="my-8 justify-center flex space-x-5">
          <button className="py-2 px-8 rounded-full border-2 bg-[rgba(44,212,22,0.95)] hover:bg-[rgba(22,175,2,0.95)] text-white">
            Follow
          </button>
          <button className="py-2 px-6 rounded-full border-2 border-[#2ede21] hover:bg-[rgba(52,228,30,0.5)]">
            Message
          </button>
        </div>
      </main>
    </body>
  );
}
export default App;
