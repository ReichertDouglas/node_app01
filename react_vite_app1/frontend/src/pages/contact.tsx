import ContactForm from './forms/contactForm'

export default function ContactPage() {
  

  return (
    <div className="p-10">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-2xl text-center m-auto">
        <h1 className="text-3xl font-bold text-shadow-lg">
          Entre em contato conosco
        </h1>
        <p className="text-md mt-10">Será em prazer responder suas perguntas</p>
        <hr className="border-1 w-full"></hr>
        <ContactForm />
      </div>
    </div>
  );
}