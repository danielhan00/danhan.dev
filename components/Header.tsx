import Button from "./Button";
import Link from "next/link";

export interface HeaderProps {
  name?: string;
}

// tester
export const Header: React.FC<HeaderProps> = ({ name, ...rest }) => {
  return (
    <header>
      {name}
      <ul>
        <li>
          <Button
            name="logo"
            onClick={() => console.log("homepage nav")}
            href="/"
            imageSRC="/danhanlogo.svg"
          ></Button>
        </li>
        <li>
          <Button
            name="resume"
            onClick={() => console.log("resume click <3")}
            href="/Daniel_Han_Resume.pdf"
            newTab="_blank"
          >
            {"Click here for my Resume <3"}
          </Button>
        </li>
      </ul>
    </header>
  );
};
