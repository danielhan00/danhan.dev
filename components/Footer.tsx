export interface FooterProps {
  name: string;
}

export const Footer = (props) => {
  return (
    <footer className="mt-10 justify-center gap-2 text-center text-sm print:hidden md:mt-20">
      <p className="text-green">Built by Daniel Han :) WIP as of 8/16/22</p>
    </footer>
  );
};
