import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { BlogPost } from "@/components/data/blogs";
import { Button } from "@/components/ui/Button";
import { WHATSAPP_URL } from "@/components/data/content";

export function BlogSidebar({
  relatedPosts,
  className = "",
}: {
  relatedPosts: BlogPost[];
  className?: string;
}) {
  return (
    <aside className={`lg:col-span-4 lg:sticky lg:top-28 space-y-8 ${className}`}>
      {/* Operator Quick Contact Card */}
      <div className="rounded-2xl border border-black/10 bg-[#FAF8F5] p-6">
        <span className="text-[12px] font-semibold text-[#B85D19]">
          Official Operator
        </span>
        <h4 className="font-[family-name:var(--font-bebas)] text-2xl uppercase tracking-wide text-black/90 mt-1">
          Abu Dhabi Desert Safari
        </h4>
        <p className="text-xs text-black/90 mt-2 leading-relaxed">
          Direct tour operator with private Land Cruiser fleet, certified desert marshals, and 5-star desert camp hospitality.
        </p>

        <div className="mt-5 space-y-2.5 border-t border-black/10 pt-4 text-xs font-semibold">
          <a
            href="tel:+971544278880"
            className="flex items-center gap-2 text-[#1E1E1E] hover:text-[#B85D19] transition-colors"
          >
            <Phone size={16} className="text-[#B85D19]" />
            <span className="text-sm underline">+971 54 427 8880</span>
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-[#1E1E1E] hover:text-[#25D366] transition-colors"
          >
            <FaWhatsapp size={16} className="text-[#075E54]" />
            <span className="text-sm underline">Instant WhatsApp Concierge</span>
          </a>
        </div>

        <div className="mt-5">
          <Button
            href="/packages"
            variant="outline"
            size="sm"
            className="w-full justify-center text-xs"
          >
            View All Packages
          </Button>
        </div>
      </div>

      {/* Related Articles Widget */}
      <div className="rounded-2xl border border-black/10 bg-white p-6">
        <h4 className="font-[family-name:var(--font-bebas)] text-2xl uppercase tracking-wide text-[#111]">
          Related Stories
        </h4>

        <div className="mt-4 space-y-4">
          {relatedPosts.map((related) => (
            <Link
              key={related.slug}
              href={`/blog/${related.slug}`}
              className="group flex gap-3 items-center"
            >
              <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg bg-[#2D241C]">
                <Image
                  src={related.image}
                  alt={related.title}
                  fill
                  sizes="64px"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div className="flex-1">
                <span className="text-[12px] font-semibold text-[#B85D19]">
                  {related.category}
                </span>
                <h5 className="text-xs font-bold text-[#1E1A17] line-clamp-2 mt-0.5 group-hover:text-[#B85D19] transition-colors">
                  {related.title}
                </h5>
                <span className="text-[11px] text-black/80 mt-1 block">
                  {related.readTime}
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-6 border-t border-black/10 pt-4">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#B85D19] hover:underline"
          >
            <span>Browse all stories</span>
            <ArrowRight size={13} />
          </Link>
        </div>
      </div>
    </aside>
  );
}
