
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

const recentBlogs = [
  {
    id: "bitcoin-showdown",
    blogName: "Bitcoin Showdown",
    blogImage: "/blog-banner.jpg",
    blogViews: 10,
    category: "Crypto",
    description:
      "Exploring what's happening in the world of Bitcoin and where things could be heading next.",
  },
  {
    id: "new-way-smart-contract",
    blogName: "A New Way to Build Smart Contracts",
    blogImage: "/blog-banner.jpg",
    blogViews: 40,
    category: "Coding",
    description:
      "Taking a look at smart contract development and different ways to approach building on-chain.",
  },
  {
    id: "build-blog-nextjs",
    blogName: "Build a Blog Using Next.js",
    blogImage: "/blog-banner.jpg",
    blogViews: 60,
    category: "Coding",
    description:
      "A look at building a modern blog with Next.js, from the idea to the actual implementation.",
  },
];

const categories = ["Crypto", "Coding", "Gaming", "AI", "Technology"];

export default function Home() {
  return (
    <main className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroLabel}>
            <span className={styles.labelDot} />
            LYUB12 BLOGS
          </div>

          <h1>
            Ideas worth
            <span> exploring.</span>
          </h1>

          <p>
            A personal blog about coding, crypto, gaming, technology, and
            whatever else catches my curiosity.
          </p>

          <div className={styles.heroActions}>
            <Link href="/blogs" className={styles.primaryButton}>
              Start reading
              <span>→</span>
            </Link>

            <Link href="/about" className={styles.secondaryButton}>
              About the blog
            </Link>
          </div>
        </div>

        <div className={styles.heroVisual}>
          <div className={styles.heroOrb}>
            <div className={styles.orbInner}>
              <span>L12</span>
            </div>
          </div>

          <div className={styles.heroNote}>
            <span>✦</span>
            <div>
              <strong>Something interesting</strong>
              <p>is waiting to be discovered.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Topics */}
      <section className={styles.topicsSection}>
        <div className={styles.sectionHeading}>
          <div>
            <span className={styles.sectionLabel}>EXPLORE</span>
            <h2>Find something interesting.</h2>
          </div>

          <Link href="/blogs" className={styles.viewAll}>
            All posts <span>→</span>
          </Link>
        </div>

        <div className={styles.categories}>
          {categories.map((category) => (
            <Link
              key={category}
              href={`/blogs?category=${category.toLowerCase()}`}
              className={styles.category}
            >
              <span>{category}</span>
              <span className={styles.categoryArrow}>↗</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured */}
      <section className={styles.featuredSection}>
        <div className={styles.sectionHeading}>
          <div>
            <span className={styles.sectionLabel}>FEATURED</span>
            <h2>Worth a read.</h2>
          </div>
        </div>

        <article className={styles.featuredPost}>
          <Link
            href="/blogs/my-first-blog"
            className={styles.featuredImage}
          >
            <Image
              src="/blog-banner.jpg"
              alt="My First Blog"
              fill
              priority
              sizes="(max-width: 800px) 100vw, 58vw"
            />

            <div className={styles.imageOverlay}>
              <span>Read article →</span>
            </div>
          </Link>

          <div className={styles.featuredInfo}>
            <span className={styles.categoryTag}>CODING</span>

            <h3>
              <Link href="/blogs/my-first-blog">My First Blog</Link>
            </h3>

            <p>
              Welcome to Lyub12 Blogs. A place to explore the things I&apos;m
              learning, building, playing, researching, and thinking about.
            </p>

            <div className={styles.postMeta}>
              <span>♥ 22</span>
              <span>💬 2</span>
              <span>◉ 44 views</span>
            </div>

            <Link
              href="/blogs/my-first-blog"
              className={styles.articleLink}
            >
              Read the article
              <span>→</span>
            </Link>
          </div>
        </article>
      </section>

      {/* Recent */}
      <section className={styles.recentSection}>
        <div className={styles.sectionHeading}>
          <div>
            <span className={styles.sectionLabel}>LATEST</span>
            <h2>Recent posts.</h2>
          </div>

          <Link href="/blogs" className={styles.viewAll}>
            Browse all <span>→</span>
          </Link>
        </div>

        <div className={styles.blogGrid}>
          {recentBlogs.map((blog) => (
            <article key={blog.id} className={styles.blogCard}>
              <Link
                href={`/blogs/${blog.id}`}
                className={styles.blogImage}
              >
                <Image
                  src={blog.blogImage}
                  alt={blog.blogName}
                  fill
                  sizes="(max-width: 700px) 100vw, (max-width: 1050px) 50vw, 33vw"
                />
              </Link>

              <div className={styles.blogContent}>
                <div className={styles.cardTop}>
                  <span className={styles.categoryTag}>
                    {blog.category}
                  </span>

                  <span className={styles.views}>
                    ◉ {blog.blogViews}
                  </span>
                </div>

                <h3>
                  <Link href={`/blogs/${blog.id}`}>
                    {blog.blogName}
                  </Link>
                </h3>

                <p>{blog.description}</p>

                <Link
                  href={`/blogs/${blog.id}`}
                  className={styles.cardLink}
                >
                  Read post <span>→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Community CTA */}
      <section className={styles.community}>
        <div>
          <span className={styles.sectionLabel}>JOIN THE CONVERSATION</span>

          <h2>Have something to say?</h2>

          <p>
            Read the posts, leave a comment, share your thoughts, and become
            part of the conversation.
          </p>
        </div>

        <Link href="/register" className={styles.primaryButton}>
          Create an account
          <span>→</span>
        </Link>
      </section>
    </main>
  );
}

