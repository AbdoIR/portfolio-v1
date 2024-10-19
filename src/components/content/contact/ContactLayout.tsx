import ContactForm from "./ContactForm";
import ContactInfos from "./ContactInfos";

export default function ContactLayout() {
  return (
    <div className="contact-section">
      <ContactInfos />
      <ContactForm />
    </div>
  );
}
