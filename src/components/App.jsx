import { ContactForm } from "./ContactForm";
import { Section } from "./Section";
import { Filter } from "./Filter";

export const App = () => {
  return (
    <>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        <Filter />
      </Section>
    </>
  );
};
