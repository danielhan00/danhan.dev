import Button from "./Button";

export interface HeaderProps {
  name?: string;
}

export const Header: React.FC<HeaderProps> = ({ name, ...rest }) => {
  return (
    <header>
      <ul>
        <li>
          <a className="Button" href="/">
            LOGO
          </a>
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
