import "./index.css";

export default function ContactInfo({ info }) {
  return (
    <div className="contact">
      <div className="contact-info">
        <img className="contact__image" src={info.image} alt="Avatar"></img>
        <div className="contact-info__text">
          <h1 className="contact-info__name">Господар - {info.name}</h1>
          <div className="contact-info__sub-block">
            <span className="contact-info__sub-value">
              {info.phone} рейтинг
            </span>
            <span className="contact-info__sub-value">
              {info.response_time} відгуків
            </span>
            <span className="contact-info__sub-value">
              {info.response_rate}% швидкості відгуку
            </span>
          </div>
        </div>
      </div>
      <p className="contact-info__description">{info.info}</p>
    </div>
  );
}
