"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePagination } from "@/hooks/usepagination";
import {
  ArrowRight, Clock, User, Search, BookOpen,
  TrendingUp, GraduationCap, Eye, Heart, MessageSquare,
  Tag, Rss, Star, ChevronRight, ChevronLeft, CalendarDays, Globe2,
  BadgeDollarSign, Building2, FileText
} from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: "easeOut" as const },
});

/* ── DATA ── */
const categories = [
  { label: "All Posts", icon: BookOpen, count: 24, color: "text-blue-600", bg: "bg-blue-50" },
  { label: "Study in Malaysia", icon: Globe2, count: 8, color: "text-green-600", bg: "bg-green-50" },
  { label: "Visa Guide", icon: FileText, count: 6, color: "text-rose-500", bg: "bg-rose-50" },
  { label: "University Tips", icon: GraduationCap, count: 5, color: "text-purple-600", bg: "bg-purple-50" },
  { label: "Scholarships", icon: BadgeDollarSign, count: 5, color: "text-amber-600", bg: "bg-amber-50" },
];

const featured = {
  title: "Complete Guide to Studying in Malaysia for Bangladeshi Students in 2025",
  excerpt: "Everything you need to know — from choosing a university to getting your student visa. The most comprehensive guide for Bangladeshi students looking to study in Malaysia this year.",
  author: "Rahim Chowdhury",
  date: "12 Jan 2025",
  readTime: "8 min read",
  views: "12.4K",
  likes: "348",
  comments: "52",
  category: "Study in Malaysia",
  img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1400&auto=format&fit=crop",
  slug: "complete-guide-studying-malaysia-2025",
};

const posts = [
  {
    title: "How to Apply for a Malaysia Student Visa (EMGS) — Step by Step",
    excerpt: "A detailed walkthrough of the EMGS student pass application process, from document preparation to visa collection.",
    author: "Tanvir Ahmed",
    authorImg: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop",
    date: "05 Feb 2025",
    readTime: "6 min read",
    views: "9.2K",
    category: "Visa Guide",
    img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=600&auto=format&fit=crop",
    slug: "malaysia-student-visa-emgs-guide",
    catColor: "bg-rose-50 text-rose-500",
  },
  {
    title: "Top 10 Universities in Malaysia for International Students",
    excerpt: "We rank the best Malaysian universities by international student satisfaction, global rankings, and course quality.",
    author: "Sumaiya Akter",
    authorImg: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=100&auto=format&fit=crop",
    date: "18 Jan 2025",
    readTime: "5 min read",
    views: "8.7K",
    category: "University Tips",
    img: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=600&auto=format&fit=crop",
    slug: "top-10-universities-malaysia-international-students",
    catColor: "bg-purple-50 text-purple-600",
  },
  {
    title: "Malaysia Government Scholarships for Bangladeshi Students 2025",
    excerpt: "Discover MIS, MTCP, and other fully funded scholarships available specifically for Bangladeshi students this year.",
    author: "Tasnim Begum",
    authorImg: "https://images.unsplash.com/photo-1598550880863-4e8aa3d0edb4?q=80&w=100&auto=format&fit=crop",
    date: "22 Jan 2025",
    readTime: "7 min read",
    views: "11.1K",
    category: "Scholarships",
    img: "https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?q=80&w=600&auto=format&fit=crop",
    slug: "malaysia-scholarships-bangladeshi-students-2025",
    catColor: "bg-amber-50 text-amber-600",
  },
  {
    title: "Cost of Living in Malaysia for Students — Full Breakdown",
    excerpt: "Monthly rent, food, transport, and entertainment costs — everything a student needs to budget for life in KL.",
    author: "Arman Hossain",
    authorImg: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop",
    date: "30 Jan 2025",
    readTime: "4 min read",
    views: "7.3K",
    category: "Study in Malaysia",
    img: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=600&auto=format&fit=crop",
    slug: "cost-of-living-malaysia-students",
    catColor: "bg-green-50 text-green-600",
  },
  {
    title: "IELTS vs TOEFL: Which English Test is Accepted in Malaysia?",
    excerpt: "Malaysian universities accept both IELTS and TOEFL. Here's how to decide which one is better for your application.",
    author: "Nadia Islam",
    authorImg: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=100&auto=format&fit=crop",
    date: "10 Feb 2025",
    readTime: "4 min read",
    views: "6.8K",
    category: "University Tips",
    img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=600&auto=format&fit=crop",
    slug: "ielts-vs-toefl-malaysia-universities",
    catColor: "bg-purple-50 text-purple-600",
  },
  {
    title: "Taylor's University vs Sunway University — Which Is Better?",
    excerpt: "A detailed comparison of two of Malaysia's most popular private universities, covering courses, fees, rankings and campus life.",
    author: "Sumaiya Akter",
    authorImg: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=100&auto=format&fit=crop",
    date: "15 Feb 2025",
    readTime: "6 min read",
    views: "5.9K",
    category: "University Tips",
    img: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=600&auto=format&fit=crop",
    slug: "taylors-vs-sunway-university-comparison",
    catColor: "bg-purple-50 text-purple-600",
  },
  {
    title: "APU Malaysia Review 2025: Is It Worth It for Bangladeshi Students?",
    excerpt: "An honest review of Asia Pacific University Malaysia — courses, fees, campus life, job placement, and student feedback.",
    author: "Rahim Chowdhury",
    authorImg: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=100&auto=format&fit=crop",
    date: "20 Feb 2025",
    readTime: "7 min read",
    views: "8.1K",
    category: "University Tips",
    img: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?q=80&w=600&auto=format&fit=crop",
    slug: "apu-malaysia-review-2025",
    catColor: "bg-purple-50 text-purple-600",
  },
  {
    title: "How to Write a Strong Personal Statement for Malaysian University",
    excerpt: "Step-by-step advice from our admissions team on writing a compelling personal statement that gets you accepted.",
    author: "Sumaiya Akter",
    authorImg: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=100&auto=format&fit=crop",
    date: "25 Feb 2025",
    readTime: "5 min read",
    views: "4.5K",
    category: "University Tips",
    img: "https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=600&auto=format&fit=crop",
    slug: "personal-statement-malaysian-university",
    catColor: "bg-purple-50 text-purple-600",
  },
  {
    title: "Student Accommodation in Malaysia: Dorms, Hostels & Apartments",
    excerpt: "A complete guide to finding safe, affordable accommodation near your university in Malaysia — with price comparisons.",
    author: "Arman Hossain",
    authorImg: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop",
    date: "01 Mar 2025",
    readTime: "5 min read",
    views: "6.2K",
    category: "Study in Malaysia",
    img: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=600&auto=format&fit=crop",
    slug: "student-accommodation-malaysia-guide",
    catColor: "bg-green-50 text-green-600",
  },
];

const trending = [
  { title: "Complete Guide to Studying in Malaysia 2025", views: "12.4K", slug: "complete-guide-studying-malaysia-2025" },
  { title: "Malaysia Scholarships for Bangladeshi Students", views: "11.1K", slug: "malaysia-scholarships-bangladeshi-students-2025" },
  { title: "APU Malaysia Review 2025", views: "8.1K", slug: "apu-malaysia-review-2025" },
  { title: "How to Apply for Malaysia Student Visa", views: "9.2K", slug: "malaysia-student-visa-emgs-guide" },
  { title: "Top 10 Universities in Malaysia", views: "8.7K", slug: "top-10-universities-malaysia-international-students" },
];

const tags = [
  "Malaysia", "Student Visa", "EMGS", "Scholarship", "Taylor's", "APU",
  "Sunway", "IELTS", "TOEFL", "KL", "Student Life", "Fees", "Admission", "2025",
];

export default function BlogPage() {
  const {
    currentPage,
    totalPages,
    paginate,
    handlePage,
    handlePrev,
    handleNext,
    isFirst,
    isLast,
    from,
    to,
  } = usePagination<typeof posts[0]>({ totalItems: posts.length, itemsPerPage: 4 });

  const paginatedPosts = paginate(posts);
  return (
    <div className="bg-white">

      {/* ════ HERO ════ */}
      <section className="relative pt-28 pb-16 overflow-hidden bg-white">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, #1e40af 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50 rounded-full blur-[140px] opacity-50 translate-x-1/3 -translate-y-1/3 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <motion.span {...fadeUp(0)} className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 px-4 py-1.5 rounded-[5px] text-xs font-bold uppercase tracking-widest mb-5 block w-fit">
            <BookOpen size={12} /> Aboard Study Blog
          </motion.span>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-10">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.08, ease: "easeOut" as const }}
                className="text-5xl sm:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.05]"
              >
                Tips, Guides &{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 text-blue-600">Insights</span>
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 10" fill="none">
                    <path d="M2 7C40 2 160 1 198 6" stroke="#BFDBFE" strokeWidth="4" strokeLinecap="round" />
                  </svg>
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" as const }}
                className="text-slate-500 text-[16px] leading-relaxed max-w-lg mt-4"
              >
                Expert advice on studying in Malaysia, visa applications, scholarships,
                and student life — written by our specialist team.
              </motion.p>
            </div>

            {/* Search */}
            <motion.div {...fadeUp(0.2)} className="w-full lg:w-80 flex-shrink-0">
              <div className="relative">
                <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input type="text" placeholder="Search articles..." className="w-full pl-11 pr-4 py-3.5 rounded-[5px] bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-50 outline-none text-sm font-medium text-slate-700 placeholder:text-slate-300 transition-all" />
              </div>
            </motion.div>
          </div>

          {/* Blog stats */}
          <motion.div {...fadeUp(0.25)} className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { icon: BookOpen, val: "24+", label: "Total Articles" },
              { icon: Eye, val: "80K+", label: "Monthly Readers" },
              { icon: GraduationCap, val: "4", label: "Categories" },
              { icon: Rss, val: "Weekly", label: "New Content" },
            ].map((s) => (
              <div key={s.label} className="flex items-center gap-3 bg-slate-50 border border-slate-100 rounded-[5px] px-4 py-3.5">
                <div className="w-8 h-8 rounded-[5px] bg-blue-50 flex items-center justify-center flex-shrink-0">
                  <s.icon size={14} className="text-blue-500" />
                </div>
                <div>
                  <p className="text-sm font-extrabold text-slate-800">{s.val}</p>
                  <p className="text-[11px] font-semibold text-slate-400">{s.label}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ════ CATEGORY FILTER ════ */}
      <div className="sticky top-[70px] z-30 bg-white border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="flex items-center gap-2 overflow-x-auto py-4 scrollbar-hide">
            {categories.map((cat, i) => (
              <button key={cat.label} className={`flex-shrink-0 flex items-center gap-2 px-4 py-2 rounded-[5px] text-sm font-bold transition-all duration-200 ${i === 0 ? "bg-blue-600 text-white shadow-md shadow-blue-500/20" : "bg-slate-50 text-slate-500 hover:bg-slate-100 border border-slate-100"}`}>
                <cat.icon size={13} />
                {cat.label}
                <span className={`text-[11px] px-1.5 py-0.5 rounded-[3px] font-bold ${i === 0 ? "bg-white/20 text-white" : "bg-slate-200 text-slate-500"}`}>{cat.count}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ════ FEATURED POST ════ */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <motion.p {...fadeUp()} className="text-xs font-bold text-blue-600 uppercase tracking-[0.18em] mb-6">⭐ Featured Article</motion.p>

          <motion.div {...fadeUp(0.1)}>
            <Link href={`/blog/${featured.slug}`} className="group relative grid grid-cols-1 lg:grid-cols-5 bg-white border border-slate-100 rounded-[5px] overflow-hidden hover:shadow-[0_24px_64px_rgba(0,0,0,0.1)] hover:border-slate-200 transition-all duration-300">
              <div className="lg:col-span-3 relative h-72 lg:h-auto overflow-hidden">
                <Image src={featured.img} alt={featured.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-slate-900/20" />
                <span className="absolute top-5 left-5 text-[11px] font-bold px-3 py-1 rounded-[5px] bg-green-50 text-green-600">{featured.category}</span>
              </div>

              <div className="lg:col-span-2 p-8 lg:p-12 flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-600 px-3 py-1 rounded-[5px] text-xs font-bold mb-5">
                    <Star size={11} /> Editor's Pick
                  </div>
                  <h2 className="text-2xl sm:text-[26px] font-extrabold text-slate-800 group-hover:text-blue-600 leading-snug mb-4 transition-colors duration-200">{featured.title}</h2>
                  <p className="text-slate-500 text-sm leading-relaxed">{featured.excerpt}</p>
                </div>

                <div className="mt-6">
                  <div className="flex flex-wrap gap-4 mb-5 text-[12px] text-slate-400 font-medium">
                    <span className="flex items-center gap-1"><User size={11} /> {featured.author}</span>
                    <span className="flex items-center gap-1"><CalendarDays size={11} /> {featured.date}</span>
                    <span className="flex items-center gap-1"><Clock size={11} /> {featured.readTime}</span>
                  </div>
                  <div className="flex items-center gap-4 text-[12px] text-slate-400 font-medium mb-6">
                    <span className="flex items-center gap-1"><Eye size={11} /> {featured.views} views</span>
                    <span className="flex items-center gap-1"><Heart size={11} /> {featured.likes}</span>
                    <span className="flex items-center gap-1"><MessageSquare size={11} /> {featured.comments}</span>
                  </div>
                  <span className="inline-flex items-center gap-2 text-blue-600 font-bold text-sm group-hover:gap-3 transition-all duration-200">
                    Read Article <ArrowRight size={15} />
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ════ MAIN CONTENT + SIDEBAR ════ */}
      <section className="pb-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* ── POSTS GRID ── */}
            <div className="lg:col-span-2">
              <motion.div {...fadeUp()} className="flex items-end justify-between mb-8 pt-14">
                <div>
                  <span className="text-xs font-bold text-blue-600 uppercase tracking-[0.18em]">Latest Posts</span>
                  <h2 className="text-2xl font-extrabold text-slate-900 mt-1">All Articles</h2>
                </div>
                <span className="text-xs text-slate-400 font-semibold">Showing {paginatedPosts.length} of {posts.length}</span>
              </motion.div>

              <div className="flex flex-col gap-5">
                {paginatedPosts.map((post, i) => (
                  <motion.div key={post.slug} {...fadeUp(i * 0.05)}>
                    <Link href={`/blog/${post.slug}`} className="group flex flex-col sm:flex-row bg-white border border-slate-100 rounded-[5px] overflow-hidden hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:border-slate-200 hover:-translate-y-0.5 transition-all duration-300">
                      {/* Thumbnail */}
                      <div className="relative w-full sm:w-52 h-48 sm:h-auto flex-shrink-0 overflow-hidden">
                        <Image src={post.img} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                        <span className={`absolute top-3 left-3 text-[10px] font-bold px-2 py-0.5 rounded-[3px] ${post.catColor}`}>{post.category}</span>
                      </div>

                      {/* Content */}
                      <div className="p-6 flex flex-col justify-between flex-1">
                        <div>
                          <h3 className="font-extrabold text-slate-800 group-hover:text-blue-600 text-[15px] leading-snug mb-2 transition-colors duration-200 line-clamp-2">{post.title}</h3>
                          <p className="text-slate-400 text-sm leading-relaxed line-clamp-2">{post.excerpt}</p>
                        </div>

                        <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-50">
                          <div className="flex items-center gap-2">
                            <div className="w-7 h-7 rounded-[5px] overflow-hidden ring-1 ring-black/5">
                              <Image src={post.authorImg} alt={post.author} width={28} height={28} className="object-cover" />
                            </div>
                            <div>
                              <p className="text-[12px] font-bold text-slate-700">{post.author}</p>
                              <div className="flex items-center gap-2 text-[11px] text-slate-400">
                                <span className="flex items-center gap-0.5"><Clock size={9} /> {post.readTime}</span>
                                <span>·</span>
                                <span className="flex items-center gap-0.5"><Eye size={9} /> {post.views}</span>
                              </div>
                            </div>
                          </div>
                          <ChevronRight size={16} className="text-slate-300 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-200" />
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex items-center justify-center gap-2 mt-10">
                {/* Prev */}
                <button
                  onClick={handlePrev}
                  disabled={isFirst}
                  className="flex items-center gap-1 px-3 h-9 rounded-[5px] text-sm font-bold bg-white border border-slate-200 text-slate-500 hover:border-blue-300 hover:text-blue-600 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
                >
                  <ChevronLeft size={14} /> Prev
                </button>

                {/* Page numbers */}
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => handlePage(page)}
                    className={`w-9 h-9 rounded-[5px] text-sm font-bold transition-all duration-200 ${
                      page === currentPage
                        ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                        : "bg-white border border-slate-200 text-slate-500 hover:border-blue-300 hover:text-blue-600"
                    }`}
                  >
                    {page}
                  </button>
                ))}

                {/* Next */}
                <button
                  onClick={handleNext}
                  disabled={isLast}
                  className="flex items-center gap-1 px-3 h-9 rounded-[5px] text-sm font-bold bg-white border border-slate-200 text-slate-500 hover:border-blue-300 hover:text-blue-600 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
                >
                  Next <ChevronRight size={14} />
                </button>
              </div>

              {/* Posts count info */}
              <p className="text-center text-xs text-slate-400 font-medium mt-3">
                Showing {from}–{to} of {posts.length} articles
              </p>
            </div>

            {/* ── SIDEBAR ── */}
            <div className="flex flex-col gap-6 pt-14">

              {/* Search */}
              <motion.div {...fadeUp(0.1)} className="bg-white border border-slate-100 rounded-[5px] p-5">
                <h3 className="text-sm font-extrabold text-slate-800 mb-4 uppercase tracking-wide">Search</h3>
                <div className="relative">
                  <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input type="text" placeholder="Search articles..." className="w-full pl-9 pr-4 py-2.5 rounded-[5px] bg-slate-50 border border-slate-200 focus:border-blue-500 outline-none text-sm font-medium text-slate-700 placeholder:text-slate-300 transition-all" />
                </div>
              </motion.div>

              {/* Categories */}
              <motion.div {...fadeUp(0.15)} className="bg-white border border-slate-100 rounded-[5px] p-5">
                <h3 className="text-sm font-extrabold text-slate-800 mb-4 uppercase tracking-wide">Categories</h3>
                <div className="flex flex-col gap-2">
                  {categories.map((cat) => (
                    <button key={cat.label} className="group flex items-center justify-between py-2.5 px-3 rounded-[5px] hover:bg-slate-50 transition-colors duration-150">
                      <div className="flex items-center gap-2.5">
                        <div className={`w-7 h-7 rounded-[5px] ${cat.bg} flex items-center justify-center`}>
                          <cat.icon size={13} className={cat.color} />
                        </div>
                        <span className="text-sm font-semibold text-slate-600 group-hover:text-slate-800">{cat.label}</span>
                      </div>
                      <span className="text-[11px] font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded-[3px]">{cat.count}</span>
                    </button>
                  ))}
                </div>
              </motion.div>

              {/* Trending */}
              <motion.div {...fadeUp(0.2)} className="bg-white border border-slate-100 rounded-[5px] p-5">
                <h3 className="text-sm font-extrabold text-slate-800 mb-4 uppercase tracking-wide flex items-center gap-2">
                  <TrendingUp size={14} className="text-blue-500" /> Trending
                </h3>
                <div className="flex flex-col gap-3">
                  {trending.map((t, i) => (
                    <Link key={t.slug} href={`/blog/${t.slug}`} className="group flex items-start gap-3">
                      <span className="text-2xl font-extrabold text-slate-100 group-hover:text-blue-100 leading-none flex-shrink-0 w-6 transition-colors">{String(i + 1).padStart(2, "0")}</span>
                      <div>
                        <p className="text-[13px] font-bold text-slate-700 group-hover:text-blue-600 leading-snug transition-colors line-clamp-2">{t.title}</p>
                        <span className="text-[11px] text-slate-400 flex items-center gap-1 mt-0.5"><Eye size={9} /> {t.views} views</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </motion.div>

              {/* Tags */}
              <motion.div {...fadeUp(0.25)} className="bg-white border border-slate-100 rounded-[5px] p-5">
                <h3 className="text-sm font-extrabold text-slate-800 mb-4 uppercase tracking-wide flex items-center gap-2">
                  <Tag size={13} className="text-blue-500" /> Popular Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <button key={tag} className="text-[12px] font-semibold text-slate-500 hover:text-blue-600 hover:bg-blue-50 bg-slate-50 border border-slate-100 hover:border-blue-200 px-3 py-1.5 rounded-[5px] transition-all duration-150">
                      {tag}
                    </button>
                  ))}
                </div>
              </motion.div>

              {/* CTA Card */}
              <motion.div {...fadeUp(0.3)} className="bg-blue-600 rounded-[5px] p-6 relative overflow-hidden">
                <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-white/5 pointer-events-none" />
                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-[5px] bg-white/15 flex items-center justify-center mb-4">
                    <GraduationCap size={20} className="text-white" />
                  </div>
                  <h3 className="text-white font-extrabold text-[15px] mb-2">Ready to Study in Malaysia?</h3>
                  <p className="text-blue-100 text-xs leading-relaxed mb-4">Get free guidance from our expert counsellors today.</p>
                  <Link href="/contact" className="group flex items-center gap-2 bg-white text-blue-600 hover:bg-blue-50 px-4 py-2.5 rounded-[5px] font-bold text-sm transition-all w-fit">
                    Free Consultation <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>

              {/* Newsletter */}
              <motion.div {...fadeUp(0.35)} className="bg-slate-900 rounded-[5px] p-6 relative overflow-hidden">
                <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-blue-600/10 pointer-events-none" />
                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-[5px] bg-blue-600/20 flex items-center justify-center mb-4">
                    <Rss size={18} className="text-blue-400" />
                  </div>
                  <h3 className="text-white font-extrabold text-[15px] mb-1">Weekly Newsletter</h3>
                  <p className="text-slate-400 text-xs leading-relaxed mb-4">Join 2,000+ students. Get weekly tips in your inbox.</p>
                  <input type="email" placeholder="your@email.com" className="w-full px-3.5 py-2.5 rounded-[5px] bg-white/10 border border-white/10 text-white placeholder:text-slate-500 text-sm outline-none focus:border-blue-500 transition-all mb-2" />
                  <button className="w-full py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm rounded-[5px] transition-all hover:-translate-y-0.5">
                    Subscribe Free
                  </button>
                </div>
              </motion.div>

            </div>
          </div>
        </div>
      </section>

    </div>
  );
}