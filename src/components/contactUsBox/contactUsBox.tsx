import classes from "./contactUsBox.module.scss";

export function ContactUsBox() {
  return (
    <div className={classes.box}>
      <h1>contact us</h1>
      <p>Full name: Vereshchagin Nikolay</p>
      <p>
        Link to GitHub:{" "}
        <a href="https://github.com/Nikola-Ver">
          https://github.com/Nikola-Ver
        </a>
      </p>
      <p>Email: nikolveresh@gmail.com</p>
      <p>Mobile phone: +375 (29) 986-22-66</p>
    </div>
  );
}
