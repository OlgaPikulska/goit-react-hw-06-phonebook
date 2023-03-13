import { ContactForm } from "./ContactForm";
import { Section } from "./Section";
import { Filter } from "./Filter";
import { ContactList } from "./ContactList";

export const App = () => {
  return (
    <>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        <Filter />
        <ContactList />
      </Section>
    </>
  );
};
