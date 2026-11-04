import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PACKAGES_DATA } from "@/components/data/packages";
import { PackageHeroBanner } from "@/components/packages/inner/PackageHeroBanner";
import { PackageContent } from "@/components/packages/inner/PackageContent";
import { PackageSidebar } from "@/components/packages/inner/PackageSidebar";
import { OtherPackagesCarousel } from "@/components/packages/inner/OtherPackagesCarousel";
import { CtaSection } from "@/components/home/CtaSection";

// Next.js Cache Components / Instant Navigation config
export const instant = false;

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return PACKAGES_DATA.map((pkg) => ({
    slug: pkg.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const pkg = PACKAGES_DATA.find((p) => p.slug === slug);

  if (!pkg) {
    return {
      title: "Package Not Found | Abu Dhabi Desert Safari",
    };
  }

  return {
    title: `${pkg.title} | Abu Dhabi Desert Safari Packages`,
    description: pkg.subtitle,
    openGraph: {
      title: pkg.title,
      description: pkg.subtitle,
      images: [
        {
          url: pkg.image,
          alt: pkg.title,
        },
      ],
    },
  };
}

export default async function PackageDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const pkg = PACKAGES_DATA.find((p) => p.slug === slug);

  if (!pkg) {
    notFound();
  }

  // Other tours (excluding current package)
  const otherPackages = PACKAGES_DATA.filter((p) => p.slug !== pkg.slug);

  return (
    <main className="bg-white text-[#221C18]">
      {/* 1. Package Hero Banner matching Blog design */}
      <PackageHeroBanner pkg={pkg} />

      {/* 2. Package Body & Sticky Sidebar */}
      <section className="py-12 md:py-20">
        <div className="mx-auto max-w-[1200px] px-5 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <PackageContent pkg={pkg} />
            <PackageSidebar currentPackage={pkg} otherPackages={otherPackages.slice(0, 4)} />
          </div>
        </div>
      </section>

      {/* 3. Other Packages Carousel Section */}
      <OtherPackagesCarousel packages={otherPackages} />

      {/* 4. Bottom CTA Section */}
      <CtaSection />
    </main>
  );
}
