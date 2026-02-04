import Image from "next/image";
import aboutUsImage from "/public/images/homepage/bucc-about-us.jpg";

export default function AboutUs() {
  return (
    <section className="flex w-full items-center justify-center px-10 py-12 md:px-4 md:py-16">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 sm:px-10 md:grid-cols-2 md:gap-16">
          <div className="space-y-4">
            <div className="inline-block rounded-lg py-1 text-base text-primary font-semibold">
              About Our Club
            </div>
            <h2 className="text-3xl font-bold text-foreground">Master the Art of Argumentation</h2>
            <div className="space-y-4">
              <div className="flex flex-col gap-4">
                <p className="text-sm font-normal text-muted-foreground leading-relaxed">
                  The University Debate Club is a thriving community of passionate debaters, public speakers, and critical thinkers dedicated to advancing the art of argumentation. Our mission is to provide students with a platform to develop persuasive skills, engage in rigorous intellectual discourse, and compete at the highest levels of debate.
                </p>
                <p className="text-sm font-normal text-muted-foreground leading-relaxed">
                  We host a wide range of events including formal debate tournaments, workshops on rhetoric and argumentation, public speaking training, and networking opportunities with accomplished speakers and debate professionals. Our members have gone on to win regional and national debate competitions, establishing themselves as leaders in communication and critical thinking.
                </p>
                <p className="text-sm font-normal text-muted-foreground leading-relaxed">
                  Whether you&apos;re a seasoned competitor or just beginning your debate journey, our club provides the resources, mentorship, and community you need to excel. Join us as we explore complex issues, sharpen our analytical skills, and grow together in an environment that values intellectual rigor and respectful discourse.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-4 flex items-center justify-center">
            <div className="relative w-full max-w-[550px] overflow-hidden rounded-xl sm:h-[500px] md:h-[400px]">
              <Image
                src={aboutUsImage}
                placeholder="blur"
                width="550"
                height="310"
                alt="BUCC"
                className="h-full w-full rounded-xl object-cover object-center"
              />
              <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-gray-900/80 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                <div className="space-y-4 rounded-xl text-white">
                  <p className="md:3xl text-2xl">
                    Excellence through Debate, Excellence through Community
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
