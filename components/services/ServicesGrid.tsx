import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { WHATSAPP_URL, unsplash } from "@/components/data/content";

export interface ServiceItem {
  title: string;
  image: string;
  description: string;
}

export function ServiceCard({ service }: { service: ServiceItem }) {
  const imageSrc = service.image.startsWith("/")
    ? service.image
    : unsplash(service.image, 760);

  return (
    <article className="group relative flex h-[410px] w-full flex-col justify-end overflow-hidden rounded-xl bg-[#302B25] text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <Image
        src={imageSrc}
        alt={service.title}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 p-5 flex flex-col justify-end">
        <h3 className="font-[family-name:var(--font-bebas)] text-2xl uppercase tracking-wide leading-tight text-white transition-colors">
          {service.title}
        </h3>
        <p className="mt-2 min-h-[40px] text-xs leading-relaxed text-white/80 line-clamp-3">
          {service.description}
        </p>

        {/* Action Link: Full-width white button */}
        <div className="mt-2">
          <Button
            href={`${WHATSAPP_URL}&text=Hello%20Abu%20Dhabi%20Desert%20Safari%2C%20I%20am%20interested%20in%20${encodeURIComponent(
              service.title
            )}.`}
            isExternal
            variant="outline"
            size="sm"
            showIcon
            icon={
              <ArrowUpRight
                size={16}
                className="text-[#1A1613] transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:!text-white"
              />
            }
            iconPosition="right"
            className="w-full justify-between !rounded-lg !bg-white px-4 py-3 text-xs font-bold !text-black !border-transparent !hover:border-transparent hover:!bg-[#FDB414] hover:!text-white transition-colors shadow-xs"
          >
            <span>Enquire now</span>
          </Button>
        </div>
      </div>
    </article>
  );
}

export function ServicesGrid({ services }: { services: ServiceItem[] }) {
  return (
    <section className="py-14 md:py-20">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
