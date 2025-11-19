import "./Preloader.css";

export default function Preloader() {
  return (
    <div className="preloader">
      <div className="circle-preloader"></div>
      <p className="preloader__text">Searching for dogs...</p>
    </div>
  );
}
