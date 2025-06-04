import Link from 'next/link'
import Image from "next/image";

export default function BlogCard({ blog }) {
  return (
    <div className="blog-boxs">
      <div className="card bg-dark text-white h-100">
        <img
          src={blog?.image?.url}
          className="card-img-top rounded-none"
          alt={blog?.image?.alt || blog?.title}
          style={{ height: '160px', objectFit: 'cover' }}
        />
        <div className="card-body bg-black border-none d-flex flex-column">
          <small className="text-muted">
          <p>
            {new Date(blog.publishedDate).toLocaleDateString('en-US', {
              month: 'short',
              day: '2-digit',
              year: 'numeric',
            })}
            {blog.readTime ? ` • ${blog.readTime} min read` : ''}
          </p>
          </small>
          <h5 className="card-title">{blog?.title}</h5>
          <p className="card-text">
            {blog?.description}
          </p>
          <div className="mt-auto more-btn">
            <Link href={`/blog/${blog?.slug}`} className="btn btn-outline-light btn-sm mt-2">
              Read more 
              <Image 
                  src={"/images/icon/arrow_back.svg"}
                  width={5}
                  height={5}
                  alt={"Arrow Back"}
                  layout="responsive"
                />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
