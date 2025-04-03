import ContactForm from "../ui/ContactForm";
import Navbar from "../ui/Navbar";

function Contact() {
  return (
    <div className=" flex  bg-secondary-0">
      <div className="container xl:max-w-screen-xl mx-auto ">
        <Navbar />
        <ContactForm />
      </div>
    </div>
  );
}

export default Contact;
