export interface NavigationProps {
  name: string;
}

export const Navigation = (props) => {
  const githubLink = "https://github.com/danielhan00/";
  const linkedInLink = "https://www.linkedin.com/in/danielhan00/";
  const phoneNum = "+1 (215) 801-5614";
  const emailAddress = "danielhan00@gmail.com";

  return (
    <nav>
      navigation {githubLink} {linkedInLink}
      {phoneNum} {emailAddress}
    </nav>
  );
};
