const Faq = () => {
  return (
    <div className="flex flex-col md:flex-row ">
      <div className="w-full md:w-1/2">
        <img src="/faq.jpg" alt="faq" className="w-full h-full object-cover" />
      </div>
      <div className="flex flex-col w-full md:w-1/2 p-10 bg-zinc-50 text-center justify-center">
        <h1 className="text-4xl font-bold">FAQ</h1>
        <div className="mt-5">
          <h3 className="text-2xl font-semibold">How do I book a session?</h3>
          <p className="mt-3 text-lg">
            You can book a session by contacting us through our email or phone
            number.
          </p>
        </div>
        <div className="mt-5">
          <h3 className="text-2xl font-semibold">
            How long does a session take?
          </h3>
          <p className="mt-3 text-lg">
            A session can take anywhere from 1 to 3 hours depending on the
            package you choose.
          </p>
        </div>
        <div className="mt-5">
          <h3 className="text-2xl font-semibold">Do you offer discounts?</h3>
          <p className="mt-3 text-lg">
            Yes, we offer discounts for returning customers and for referrals.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Faq;
