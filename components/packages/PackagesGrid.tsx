import { PackageCard } from "@/components/packages/PackageCard";
import type { DesertPackage } from "@/components/home/FeaturedPackagesSection";

export { PackageCard };

export function PackagesGrid({ packages }: { packages: DesertPackage[] }) {
  return (
    <section className="py-14 md:py-20">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {packages.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>
      </div>
    </section>
  );
}
