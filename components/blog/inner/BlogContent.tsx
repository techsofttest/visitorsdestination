import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { BlogPost } from "@/components/data/blogs";
import { Button } from "@/components/ui/Button";
import { WHATSAPP_URL } from "@/components/data/content";

export function BlogContent({ post }: { post: BlogPost }) {
  return (
    <article className="lg:col-span-8">
      {/* Back to Blog link */}
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-xs font-bold text-[#B85D19] hover:underline mb-6"
      >
        <ArrowLeft size={14} /> Back to all articles
      </Link>

      {/* Lead Intro Paragraph */}
      <div className="rounded-xl bg-[#FAF8F5] p-5 sm:p-6 mb-8">
        <p className="text-base sm:text-lg leading-relaxed text-[#2D241C] font-medium">
          {post.content.intro}
        </p>
      </div>

      {/* Article Main Image */}
      <div className="relative h-72 sm:h-96 w-full overflow-hidden rounded-2xl mb-10">
        <Image
          src={post.image}
          alt={post.title}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 800px"
          className="object-cover"
        />
      </div>

      {/* Article Structured Sections */}
      <div className="space-y-8 text-[#333333]">
        {post.content.sections.map((section, idx) => (
          <div key={idx} className="space-y-3">
            <h2 className="font-[family-name:var(--font-bebas)] text-2xl sm:text-3xl uppercase tracking-wide text-[#111111]">
              {section.heading}
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-[#444444]">
              {section.body}
            </p>

            {/* Bullet Points if present */}
            {section.bulletPoints && section.bulletPoints.length > 0 && (
              <ul className="mt-3 space-y-2 rounded-xl bg-[#FAF8F5] p-4 sm:p-5 border border-black/5">
                {section.bulletPoints.map((point, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#2D241C]">
                    <CheckCircle2 size={16} className="text-[#B85D19] shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}

        {/* Conclusion */}
        <div className="mt-10 pt-6 border-t border-black/10">
          <h3 className="font-[family-name:var(--font-bebas)] text-2xl uppercase tracking-wide text-[#111111] mb-2">
            Final Thoughts
          </h3>
          <p className="text-sm sm:text-base leading-relaxed text-[#444444]">
            {post.content.conclusion}
          </p>
        </div>
      </div>

      {/* Booking Quick Box */}
      <div className="mt-10 rounded-2xl bg-gradient-to-r from-[#1E1A17] to-[#2D241C] p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
        <div>
          <h4 className="font-[family-name:var(--font-bebas)] text-2xl uppercase tracking-wide text-white">
            Ready to Experience Abu Dhabi Desert?
          </h4>
          <p className="text-xs sm:text-sm text-white/80 mt-1 max-w-md">
            Speak directly with our local tour coordinators for instant bookings, custom timings, and exclusive group rates.
          </p>
        </div>
        <Button
          href={WHATSAPP_URL}
          isExternal
          variant="primary"
          size="md"
          showIcon
          className="whitespace-nowrap"
        >
          Book on WhatsApp
        </Button>
      </div>
    </article>
  );
}

