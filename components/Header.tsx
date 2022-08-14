import Button from "./Button";
import Link from "next/link";

export interface HeaderProps {
  name?: string;
}

// tester
export const Header: React.FC<HeaderProps> = ({ name, ...rest }) => {
  return (
    <header>
      <ul>
        <li>
          <Button
            type="image"
            name="logo"
            onClick={() => console.log("homepage nav")}
            href="/"
            imageSRC="/danhanlogo.svg"
            height="200"
            width="200"
          ></Button>
        </li>
        <li>
          <Button
            type="text"
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
