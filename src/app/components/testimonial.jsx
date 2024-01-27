function Testimonials() {
  const testimonialsData = [
    {
      id: 1,
      img: "/john doe.jpg",
      name: "John Doe",
      occupation: "Business Owner",
      comment:
        "We are incredibly pleased with the solar farm developed by Solar Era Solutions. It has not only reduced our energy costs but also made a positive impact on our commitment to sustainability. The entire process, from design to implementation, was seamless, and the team at Solar Era was professional and efficient.",
    },
    {
      id: 2,
      img: "/jane smith.jpg",
      name: "Jane Smith",
      occupation: "Homeowner",
      comment:
        "Choosing Solar Era Solutions for our residential solar project was the best decision we made. The team was attentive to our specific needs, and the customized system design perfectly fit our property. Our energy bills have significantly decreased, and we appreciate the ongoing support for efficient operation and maintenance.",
    },
    {
      id: 3,
      img: "/david johnson.jpg",
      name: "David Johnson",
      occupation: "Environmental Advocate",
      comment:
        "Solar Era Solutions exemplifies excellence in renewable energy solutions. Their commitment to environmental sustainability is evident in every project they undertake. I highly recommend Solar Era to anyone seeking reliable and eco-friendly solar solutions.",
    },
    {
      id: 4,
      img: "/emily brown.jpg",
      name: "Emily Brown",
      occupation: "Community Leader",
      comment:
        "Our community collaborated with Solar Era Solutions on a solar initiative, and the results exceeded our expectations. The team's dedication to community-centric solutions and their ability to address our unique needs have left a lasting positive impact. Solar Era is a trustworthy partner for sustainable energy projects.",
    },
    // Add more testimonies as needed
  ];

  return (
    <section id="testimonials" className="bg-gray-200 py-16">
      <div className="container mx-auto p-10">
        <h2 className="text-4xl font-bold mb-8 text-center">
          What Our Customers Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {testimonialsData.map((testimonial) => (
            <div
              key={testimonial.id}
              className="p-4 bg-white rounded-lg shadow-md"
            >
              <img
                src={testimonial.img}
                alt={`${testimonial.name}'s profile`}
                className="w-16 h-16 mb-4 rounded-full mx-auto"
              />
              <p className="mb-4 text-gray-600">{`"${testimonial.comment}"`}</p>
              <p className="text-lg font-bold">{testimonial.name}</p>
              <p className="text-sm text-gray-500">{testimonial.occupation}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
