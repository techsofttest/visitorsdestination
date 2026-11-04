import type { Metadata } from "next";
import { BLOG_POSTS } from "@/components/data/blogs";
import { PageHeroBanner } from "@/components/global/PageHeroBanner";
import { FeaturedBlogCard } from "@/components/blog/FeaturedBlogCard";
import { BlogsGrid } from "@/components/blog/BlogsGrid";
import { CtaSection } from "@/components/home/CtaSection";

export const metadata: Metadata = {
  title: "Desert Travel Blog | Abu Dhabi Desert Safari Guides & Tips",
  description:
    "Discover insider travel tips, desert safari guides, packing essentials, cultural stories, and adventure inspiration from Abu Dhabi Desert Safari experts.",
};

export default function BlogsPage() {
  const mainBlog = BLOG_POSTS.find((b) => b.isMain) || BLOG_POSTS[0];
  const gridBlogs = BLOG_POSTS.filter((b) => b.slug !== mainBlog.slug);

  return (
    <main className="bg-white text-[#221C18]">
      {/* 1. Common Hero Banner */}
      <PageHeroBanner
        title="Blog"
        subtitle="Insider guides, travel tips, cultural insights, and stories from the golden dunes of Abu Dhabi."
        imageSrc="/banner/Golden Hour Camel Caravan.png"
      />

      {/* 2. Main / Featured Blog Section */}
      <FeaturedBlogCard blog={mainBlog} />

      {/* 3. Blogs Listing Grid (5 columns on large screens) */}
      <BlogsGrid blogs={gridBlogs} totalCount={BLOG_POSTS.length} />

      {/* 4. Bottom CTA Section */}
      <CtaSection />
    </main>
  );
}
