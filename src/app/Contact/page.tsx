import NavLink from "../components/NavLink"; 

export default function ContactPage() {
  return (
    <section className="flex min-h-screen flex-col bg-[#121212] text-white">
      <div className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 mx-10">
        <div>
          <h1 className="text-2xl font-bold text-white my-2">Let&apos;s Connect</h1>
          <p className="text-[#ADB7BE] mb-4 max-w-md">
            I am currently seeking new opportunities to apply my frontend development skills and contribute to exciting projects. If you have any opportunities or collaborations in mind, feel free to reach out!
          </p>
          <div className="socials flex flex-row gap-2">
            <NavLink href="https://github.com/" title="Github" />
            <NavLink href="https://linkedin.com" title="LinkedIn" />
          </div>
        </div>
        <div>
          <form className="flex flex-col gap-3">
            <div>
              <label htmlFor="email" className="text-white block mb-1 text-sm font-medium">Your Email</label>
              <input type="email" id="email" required className="bg-[#18191E] border border-[#33353f] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5" placeholder="abc@gmail.com" />
            </div>
            <div>
              <label htmlFor="subject" className="text-white block mb-1 text-sm font-medium">Subject</label>
              <input type="text" id="subject" required className="bg-[#18191E] border border-[#33353f] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5" placeholder="just saying hi" />
            </div>
            <div>
              <label htmlFor="message" className="text-white block mb-1 text-sm font-medium">Message</label>
              <textarea name="message" id="message" className="bg-[#18191E] border border-[#33353f] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5" placeholder="let's talk about..." />
            </div>
            <button type="submit" className="bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-full py-3 px-4">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}
