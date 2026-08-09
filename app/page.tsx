import Image from "next/image";
import Link from "next/link";

export default function Home() {

  const recentblogs = [
    {
      blogName: "bitcoin showdown",
      blogImage: "/public/blog-banner.jpg",
      blogViews: 10
    },
    {
      blogName: "A new way to build smart contract",
      blogImage: "/public/blog-banner.jpg",
      blogViews: 40
    },
    {
      blogName: "Build a blog using nextjs",
      blogImage: "/public/blog-banner.jpg",
      blogViews: 60
    }
  ]
  
  return (
    <div>

        <main>

          <div>
            <div>
              <h1>Lyub12 Blogs</h1>
              <h2>read something, like and comment</h2>
              <div>
                <button>login</button>
                <button>register</button>
              </div>
            </div>
            <div>
              {/* Circle image */}
            </div>
          </div>

          <div>
            <h2>Featured Blog</h2>
            <article>
              <h2>My first blog</h2>
              <Image src="/public/blog-banner.jpg" alt="blog banner"  />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem modi, laudantium ipsum facilis aperiam dolore laborum tempora officia laboriosam aliquam cumque non cum eos nemo hic quos ad animi nostrum id. Itaque dolores velit accusamus perferendis non ipsa magnam illo. <Link href="/">Read more</Link></p>
              <div>
                <span>likes: <span>22</span></span>
                <span>dislikes: <span>2</span></span>
                <span>views: <span>44</span></span>
              </div>
            </article>
          </div>

          <div>
            <h2>Recent Blogs</h2>
            <div>
              {
                recentblogs.map((item) => (
                  <div key={crypto.randomUUID()}>
                    <h2>{item.blogName}</h2>
                    <div>
                      <Image src={item.blogImage} alt="blog image" />
                    </div>
                    <span>views: {item.blogViews}</span>
                    <Link href="/">view</Link>
                  </div>
                ))
              }
            </div>
          </div>

        </main>


    </div>
  );
}
