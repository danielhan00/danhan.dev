import Button from "./Button";
import Link from "next/link";

export interface HeaderProps {
  name?: string;
  style?: string;
}

// tester
export const Header: React.FC<HeaderProps> = ({ name, style, ...rest }) => {
  return (
    <header className={style}>
      <div className="flow-root">
        <p className="float-left text-green text-3xl">
          <Button
            type="text"
            name="logo"
            onClick={() => console.log("homepage nav")}
            href="/"
          >
            {"dh"}
          </Button>
        </p>
        <p className="float-right text-green text-3xl">
          <Button
            type="text"
            name="resume"
            onClick={() => console.log("resume click <3")}
            href="/Daniel_Han_Resume.pdf"
            newTab="_blank"
          >
            {"Resume"}
          </Button>
        </p>
      </div>
    </header>
  );
};
