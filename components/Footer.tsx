export interface FooterProps {
  name: string;
}

export const Footer = (props) => {
  return (
    <footer className="bg-peach w-full flex-wrap items-center justify-between py-4 border-4 font-con pt-8 pb-8 ">
      <p className="text-center">
        <a
          href="https://github.com/danielhan00/danhan.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green"
        >
          Built{" "}
        </a>
        by Daniel Han :) <br />
        inspired by fellow{" "}
        <a
          href="https://www.khoury.northeastern.edu/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green"
        >
          Northeastern University{" "}
        </a>
        Alum{" "}
        <a
          href="https://brittanychiang.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green"
        >
          Brittany Chiang
        </a>
      </p>
    </footer>
  );
};
