export default function ContactForm() {
  return (
    <div className="contact-form">
      <form>
        <input type="text" name="name" placeholder="Name" />
        <input type="email" name="email" placeholder="Email" />
        <input type="text" name="message" placeholder="Message" />
        <button type="submit" className="primary-btn">Submit</button>
      </form>
    </div>
  );
}
