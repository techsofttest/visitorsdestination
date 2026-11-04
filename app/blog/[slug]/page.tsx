import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BLOG_POSTS } from "@/components/data/blogs";
import { BlogHeroBanner } from "@/components/blog/inner/BlogHeroBanner";
import { BlogContent } from "@/components/blog/inner/BlogContent";
import { BlogSidebar } from "@/components/blog/inner/BlogSidebar";
import { CtaSection } from "@/components/home/CtaSection";

// Next.js Cache Components / Instant Navigation config
// Disables blocking dynamic shell fallback check for this route
export const instant = false;

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Article Not Found | Abu Dhabi Desert Safari",
    };
  }

  return {
    title: `${post.title} | Abu Dhabi Desert Safari Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [
        {
          url: post.image,
          alt: post.title,
        },
      ],
    },
  };
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  // Related posts (excluding current post)
  const relatedPosts = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <main className="bg-white text-[#221C18]">
      <BlogHeroBanner post={post} />

      {/* 2. Article Body & Sidebar Section */}
      <section className="py-12 md:py-20">
        <div className="mx-auto max-w-[1200px] px-5 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <BlogContent post={post} />
            <BlogSidebar relatedPosts={relatedPosts} />
          </div>
        </div>
      </section>

      {/* 3. Bottom CTA Section */}
      <CtaSection />
    </main>
  );
}
