/**
 * A deliberately dated salon homepage: system serif, tiny type, cramped
 * table layout, broken images, phone-only booking. Decorative only.
 */
export function SalonBefore() {
  return (
    <div
      aria-hidden="true"
      className="h-full bg-[#d9d7d2] p-[2.4cqw] font-[family-name:Times_New_Roman,Times,serif] text-[clamp(7px,1.55cqw,10px)] leading-[1.25] text-[#333]"
    >
      <div className="border-2 border-double border-[#8a8780] bg-[#efeee9] p-[1.6cqw]">
        {/* Header */}
        <div className="border-b border-[#8a8780] pb-[1.4cqw] text-center">
          <p className="text-[clamp(11px,3.6cqw,22px)] font-bold tracking-wide text-[#444] italic">
            ~ Juniper Hair Co. ~
          </p>
          <p className="mt-[0.4cqw]">Welcome to our Website!!! Serving the community since 2009</p>
        </div>

        {/* Nav */}
        <div className="mt-[1.2cqw] flex flex-wrap justify-center gap-[0.6cqw]">
          {["Home", "About Us", "Services", "Gallery", "Specials", "Contact", "Links"].map((item) => (
            <span
              key={item}
              className="border border-t-white border-r-[#777] border-b-[#777] border-l-white bg-[#cfcdc7] px-[1cqw] py-[0.3cqw] underline"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Scrolling notice */}
        <div className="mt-[1.2cqw] overflow-hidden border border-[#8a8780] bg-[#fffef9] px-[1cqw] py-[0.4cqw] whitespace-nowrap">
          *** NOW ACCEPTING NEW CLIENTS *** ASK ABOUT OUR SPRING SPECIALS *** GIFT CERTIFICATES AVAILABLE ***
        </div>

        {/* Body */}
        <div className="mt-[1.4cqw] grid grid-cols-[1.4fr_1fr] gap-[1.4cqw]">
          <div>
            <p className="font-bold underline">About Our Salon</p>
            <p className="mt-[0.6cqw]">
              Juniper Hair Co. has been proudly serving the area for over 15 years. We offer a full range of hair
              services for men, women and children including cuts, color, highlights, perms, extensions, waxing and
              more. Our friendly and experienced staff will make you feel right at home. Walk-ins welcome when
              available. Please call during business hours to schedule an appointment.
            </p>
            <p className="mt-[0.8cqw] font-bold underline">Services</p>
            <p className="mt-[0.6cqw]">
              Haircuts • Color • Highlights • Perms • Blowouts • Updos • Extensions • Waxing • Kids Cuts • Bridal •
              Please call for pricing.
            </p>
            <p className="mt-[0.8cqw]">
              Click <span className="underline">HERE</span> to download our Price List (PDF, 4.2 MB)
            </p>
          </div>
          <div className="flex flex-col gap-[1cqw]">
            {[0, 1].map((n) => (
              <div key={n} className="relative aspect-[4/3] border border-[#8a8780] bg-[#e4e2dc]">
                <span className="absolute inset-0 bg-[linear-gradient(to_top_right,transparent_calc(50%-0.5px),#8a8780,transparent_calc(50%+0.5px))]" />
                <span className="absolute inset-0 bg-[linear-gradient(to_top_left,transparent_calc(50%-0.5px),#8a8780,transparent_calc(50%+0.5px))]" />
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-[1.6cqw] border-t border-[#8a8780] pt-[1.2cqw] text-center">
          <p>
            To book call: <span className="font-bold">(555) 012-3456</span> &nbsp;|&nbsp; Mon–Sat 9am–6pm, Closed Sun
          </p>
          <div className="mt-[1cqw] flex items-center justify-center gap-[0.8cqw]">
            <span>You are visitor #</span>
            <span className="flex">
              {"004127".split("").map((d, i) => (
                <span key={i} className="border border-[#555] bg-[#222] px-[0.5cqw] font-mono text-[#ddd]">
                  {d}
                </span>
              ))}
            </span>
          </div>
          <p className="mt-[1cqw] text-[#777]">Last updated 03/14/2017 &nbsp; Best viewed in Internet Explorer</p>
        </div>
      </div>
    </div>
  );
}
