import { IoIosMail } from "react-icons/io";

export default function ContactInfos() {
  return (
    <div className="contact-infos">
      <h1>
        Contact <span>Me!</span>
      </h1>
      <div className="contact-mail">
        <IoIosMail />
        <div className="contact-mail-infos">
          <span>Mail</span>
          <p>abdoir192@gmail.com</p>
        </div>
      </div>
    </div>
  );
}
