import Image from "next/image"

 export const AboutMe = () => {
  return (
    <section id="about-me" className="min-h-screen py-16 px-4">
      <h2  className="text-3xl font-bold text-center mb-12">
        About Me
      </h2>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-6xl mx-auto">
        <div className="w-full md:w-1/2 items-center">
          <Image
            src="/images/image1.jpeg"
            alt="Your Name"
            width={400}
            height={400}
            className="rounded-full shadow-lg s"
            
          />
        </div>
        <div className="w-full md:w-1/2">
          <p className="text-lg leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam natus quo non, voluptatem omnis a fuga
            perferendis nobis perspiciatis quasi id architecto assumenda quidem fugit autem dolore ut corrupti
            temporibus. Sed vitae, quam dolorum obcaecati eum repellat, modi magnam nemo adipisci quas voluptatem. Quod
            quae corporis illo reprehenderit, amet deserunt.
          </p>
        </div>
      </div>
    </section>
    )}