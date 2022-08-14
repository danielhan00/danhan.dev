import Button from "./Button";

export interface NavigationProps {
  name: string;
}

export const Navigation: React.FC<NavigationProps> = ({ name, ...rest }) => {
  return (
    <ol>
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
  );
};
