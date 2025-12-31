import PropTypes from "prop-types";
import { useFormStore } from "../store/uiStore";
import { useMessageStore } from "../features/messages/store";
import { motion } from "framer-motion";
import showAlert from "../components/ui/Alert";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import StartingPage from "../components/ui/StartingPage";
import Section from "../components/ui/Section";
import emailjs from "@emailjs/browser";

import Home1 from "../assets/ContactPhoto.png";

/* <a href={cv} download={cv} className='hover:scale-105'>
                <button className='text-3xl p-4 animate-pulse border-2 rounded-full'>CV</button>
            </a> */
const ContactMe = () => {
  const { resetForm } = useFormStore();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await emailjs.sendForm(
        "service_xacyk9u",
        "template_vruxxfo",
        e.target,
        "kVlateoXPr8zyzcre"
      );

      showAlert({
        icon: "success",
        title: "Messaggio inviato!",
        text: "Hai inviato il messaggio",
        footer: "Verrai ricontatto il prima possibile! GRAZIE",
      });
      resetForm();
      // e.target.reset();
    } catch (error) {
      showAlert({
        icon: "error",
        title: "Messaggio NON inviato",
        text: "Errore nell'invio del messaggio",
        footer: "Riprova o contattami a questa email exemple@hotmail.it",
      });
    }
  };

  return (
    <>
      <Section>
        <div className="max-w-6xl mx-auto">
          <StartingPage
            title="contact."
            semiTitle="Se hai domande, proposte o semplicemente vuoi fare due chiacchiere, non esitare a contattarmi."
            description={
              <div className="flex text-white">
                <div className="w-1/2">
                  <SocialLink
                    href="https://www.instagram.com/buia93/"
                    iconClass="fa-brands fa-instagram"
                    bgColor="bg-pink-500"
                    hoverBgColor="#e11d48"
                    label="Instagram"
                  />
                  <SocialLink
                    href="https://github.com/NicholasBuiatti"
                    iconClass="fa-brands fa-github"
                    bgColor="bg-gray-500"
                    hoverBgColor="#333"
                    label="GitHub"
                  />
                </div>
                <div className="w-1/2">
                  <SocialLink
                    href="https://www.linkedin.com/in/nicholas-buiatti-43482821b/"
                    iconClass="fa-brands fa-linkedin-in"
                    bgColor="bg-blue-500"
                    hoverBgColor="#2563eb"
                    label="LinkedIn"
                  />
                </div>
              </div>
            }
            image={<img src={Home1} alt="Contattami" />}
          />
        </div>
      </Section>

      <div className="p-10">
        <div className="max-w-6xl mx-auto">
          <form onSubmit={handleSubmit} className="container mx-auto my-16">
            <p className="text-3xl text-gray-600 mb-6">Mandami una email</p>
            <FormVisitors />
            <div className="text-end">
              <Button
                type="submit"
                text={"Invia"}
                variant={"secondary"}
                size="md"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

const FormVisitors = () => {
  const { formData, setValue } = useFormStore();

  return (
    <div className="flex flex-wrap">
      <div className="w-full md:w-1/2 p-1">
        <Input
          label="Nome*"
          name="name"
          value={formData.name || ""}
          onChange={(e) => setValue("name", e.target.value)}
          required
        />
        <Input
          label="Email*"
          type="email"
          name="email"
          value={formData.email || ""}
          onChange={(e) => setValue("email", e.target.value)}
          required
        />
      </div>
      <div className="w-full md:w-1/2 p-1">
        <Input
          label="Messaggio*"
          as="textarea"
          name="message"
          value={formData.message || ""}
          onChange={(e) => setValue("message", e.target.value)}
          rows={5}
          required
        />
      </div>
    </div>
  );
};

const SocialLink = ({
  href,
  iconClass,
  bgColor,
  hoverBgColor,
  label,
  textColor = "text-gray-400",
  hoverTextColor = "#e11d48",
}) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    <motion.div
      className="py-4 flex items-center cursor-pointer justify-center md:justify-start"
      whileHover="hover"
    >
      <motion.i
        className={`${iconClass} text-2xl rounded-full w-12 h-12 flex items-center justify-center ${bgColor}`}
        variants={{
          hover: { backgroundColor: hoverBgColor },
        }}
        inherit={true}
        transition={{ duration: 0.3 }}
      />
      <motion.span
        className={`text-sm ml-5 transition-colors duration-300 ${textColor}`}
        variants={{
          hover: { color: hoverTextColor },
        }}
        inherit={true}
        transition={{ duration: 0.3 }}
      >
        {label}
      </motion.span>
    </motion.div>
  </a>
);

SocialLink.propTypes = {
  href: PropTypes.string.isRequired,
  iconClass: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  hoverBgColor: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  textColor: PropTypes.string,
  hoverTextColor: PropTypes.string,
};

export default ContactMe;
