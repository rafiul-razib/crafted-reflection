import { Fade, Slide } from "react-awesome-reveal";
import { Typewriter } from "react-simple-typewriter";

const About = () => {
  return (
    <div className="max-w-6xl mx-auto mt-16">
      <div className="text-center">
        <Slide>
          <span className="text-4xl text-red-600 my-8">
            <Typewriter
              words={["About Crafted Reflections"]}
              loop={5}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
              // onLoopDone={handleDone}
              // onType={handleType}
            />
          </span>
          {/* <h1 className="text-3xl font-bold">About Crafted Reflections</h1> */}
        </Slide>
        <Fade delay={1e3} cascade damping={1e-1}>
          <div className="my-6">
            <p>
              Welcome to Crafted Reflections, where creativity meets
              opportunity.
            </p>
            <p>
              Crafted Reflections is not just a marketplace; it's a community of
              artisans, makers, and creatives who are passionate about sharing
              their unique vision with the world. Our platform provides a space
              for talented individuals to showcase and sell their papercraft and
              glass artworks, connecting them with buyers who appreciate the
              beauty of handmade creations.
            </p>

            <p>
              Whether you're an established artist or just starting out, Crafted
              Reflections welcomes you to join our growing family. We believe
              that everyone deserves the chance to share their craft without
              barriers, which is why we offer free account registration for all
              artists. No hidden fees, no subscriptions – just pure creative
              freedom.
            </p>

            <p>
              Discover a diverse range of handmade treasures, from delicate
              papercut designs to stunning glass sculptures. Each piece tells a
              story, reflecting the skill, passion, and imagination of its
              creator. By supporting independent artists on Crafted Reflections,
              you're not just purchasing artwork – you're investing in a dream,
              a vision, and a journey.
            </p>

            <p>
              Join us in celebrating the art of craftsmanship and the power of
              creativity. Whether you're here to buy, sell, or simply be
              inspired, we invite you to explore Crafted Reflections and
              experience the magic of handmade artistry.
            </p>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default About;
