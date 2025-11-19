const paw = "/petmatch/icons/paw.svg";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer__text">Developed by Roei Baram</p>

      <div className="footer__year-wrap">
        <img src={paw} className="footer__paw" />

        <span className="footer__year">{new Date().getFullYear()}</span>

        <img src={paw} className="footer__paw" />
      </div>
    </footer>
  );
}
