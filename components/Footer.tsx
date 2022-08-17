export interface FooterProps {
  name: string;
}

export const Footer = (props) => {
  return (
    <footer className="bg-peach w-full flex-wrap items-center justify-between py-4 border-4 font-con pt-8 pb-8 ">
      <p className="text-center">
        Built by Daniel Han :) <br />
        inspired by fellow Northeastern University Alum Brittany Chiang
      </p>
    </footer>
  );
};
