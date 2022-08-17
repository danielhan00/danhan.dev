import Button from "./Button";

export interface HeaderProps {
  name?: string;
  style?: string;
}

// tester
export const Header: React.FC<HeaderProps> = ({ name, style, ...rest }) => {
  return (
    <nav className="relative bg-blue-200 w-full flex-wrap items-center justify-between py-4 bg-gray-100 text-gray-500 hover:text-gray-700 focus:text-gray-700 shadow-lg">
      <div className="container-fluid w-full flex flex-wrap items-center space-x-96 pr-96 pl-96 justify-center px-6">
        <Button
          type="image"
          name="logo"
          onClick={() => console.log("homepage nav")}
          href="/"
          imageSRC="/danhanlogo.svg"
          height="90"
          width="90"
          style=""
        ></Button>
        <Button
          type="text"
          name="resume"
          onClick={() => console.log("resume click <3")}
          href="/Daniel_Han_Resume.pdf"
          newTab="_blank"
          style="text-white bg-gradient-to-br from-green to-blue-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-xl px-5 py-2.5 text-center mr-2 mb-2"
        >
          {"My Resume!"}
        </Button>
      </div>
    </nav>
  );
};

export default Header;
