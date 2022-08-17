import Button from "./Button";

export interface NavigationProps {
  name: string;
}

export const Navigation: React.FC<NavigationProps> = ({ name, ...rest }) => {
  return (
    <div className="container-fluid w-full flex flex-wrap items-center space-x-96 pr-96 pl-96 justify-center bg-sky-100 bg-cover">
      <div className="flex flex-wrap justify-center pb-16 w-full flex-wrap items-center">
        <div className="w-6/12 sm:w-4/12 px-6 align-middle">
          <img
            src="proPic.png"
            alt="..."
            className="shadow-lg rounded-full max-w-full h-auto align-middle border-4 border-slate-700"
          />
        </div>
        <ol className="pt-2">
          <li>
            <Button
              type="image"
              name="github"
              onClick={() => console.log("github click")}
              href="https://github.com/danielhan00"
              imageSRC="/github.svg"
              newTab="_blank"
              height="50"
              width="50"
            ></Button>
          </li>
          <li>
            <Button
              type="image"
              name="linkedin"
              onClick={() => console.log("linkedin click")}
              href="https://www.linkedin.com/in/danielhan00/"
              imageSRC="/linkedin.svg"
              newTab="_blank"
              height="50"
              width="50"
            ></Button>
          </li>
          <li>
            <Button
              type="image"
              name="email"
              onClick={() => console.log("email click")}
              href="mailto:danielhan00@gmail.com"
              imageSRC="/mail.svg"
              newTab="_blank"
              height="50"
              width="50"
            ></Button>
          </li>
          <li>
            <Button
              type="image"
              name="phone"
              onClick={() => console.log("phone click")}
              href="tel:215-801-5614"
              imageSRC="/phoneNum.svg"
              newTab="_blank"
              height="50"
              width="50"
            ></Button>
          </li>
        </ol>
      </div>
    </div>
  );
};
