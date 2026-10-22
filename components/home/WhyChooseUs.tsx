import { Clock3, MapPin, Users } from "lucide-react";

export function WhyChooseUs() {
  return (
    <section className="bg-[#F5F4F1] px-5 py-16 md:px-10 md:py-24">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-10 md:grid-cols-3 md:gap-12 lg:gap-16">
        {/* Item 1 */}
        <div className="flex flex-col items-start">
          <span className="mb-5 text-[#8B181B]">
            <MapPin size={36} strokeWidth={1.5} />
          </span>
          <h3 className="font-[family-name:var(--font-bebas)] text-3xl uppercase tracking-[0.03em] leading-none text-[#1E1E1E] md:text-4xl">
            Local knowledge
          </h3>
          <p className="mt-3 text-sm leading-6 text-[#666] md:text-base md:leading-6">
            Thoughtful recommendations from people who know the destination.
          </p>
        </div>

        {/* Item 2 */}
        <div className="flex flex-col items-start">
          <span className="mb-5 text-[#8B181B]">
            <Clock3 size={36} strokeWidth={1.5} />
          </span>
          <h3 className="font-[family-name:var(--font-bebas)] text-3xl uppercase tracking-[0.03em] leading-none text-[#1E1E1E] md:text-4xl">
            Smooth coordination
          </h3>
          <p className="mt-3 text-sm leading-6 text-[#666] md:text-base md:leading-6">
            Clear communication and travel details you can count on.
          </p>
        </div>

        {/* Item 3 */}
        <div className="flex flex-col items-start">
          <span className="mb-5 text-[#8B181B]">
            <Users size={36} strokeWidth={1.5} />
          </span>
          <h3 className="font-[family-name:var(--font-bebas)] text-3xl uppercase tracking-[0.03em] leading-none text-[#1E1E1E] md:text-4xl">
            Made for your group
          </h3>
          <p className="mt-3 text-sm leading-6 text-[#666] md:text-base md:leading-6">
            Options for families, solo travellers, students, and businesses.
          </p>
        </div>
      </div>
    </section>
  );
}
