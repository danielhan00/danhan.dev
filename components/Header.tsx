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
          <Link href="/">LOGO</Link>
        </li>
        <li>
          <Button
            name="resume"
            onClick={() => console.log("resume click <3")}
            href="/Daniel_Han_Resume.pdf"
          >
            {"My Resume"}
          </Button>
        </li>
      </ul>
    </header>
  );
};
