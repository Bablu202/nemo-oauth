import Link from "next/link";
import { compareDesc, format, parseISO } from "date-fns";
import { allPosts, Post } from "contentlayer/generated";
import { getMDXComponent } from "next-contentlayer/hooks";
import Image from "next/image";

function PostCard(post: Post) {
  const Content = getMDXComponent(post.body.code);

  return (
    <section className="py-2" id="trips">
      <Link href={post.url} legacyBehavior>
        <div className="border border-custom-pri border-opacity-30 flex-none w-64 mr-4 rounded-lg shadow-lg  snap-always snap-center cursor-pointer">
          <div className=" h-[28rem]">
            {/* both image and text */}
            <div className="overflow-hidden h-56 w-full object-center  ">
              <Image
                className="rounded-t-lg object-center "
                src={post.imageURL}
                alt="Trip Image"
                layout="responsive"
                width={500}
                height={500}
                priority
                loading="eager"
              />
            </div>
            <div className="p-4 ">
              <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
              <time
                dateTime={post.startDate}
                className="block mb-2 text-xs text-gray-600"
              >
                {format(parseISO(post.startDate), "LLLL d, yyyy")}
              </time>
              <time
                dateTime={post.returnDate}
                className="block mb-2 text-xs text-gray-600 mr-auto"
              >
                {format(parseISO(post.returnDate), "LLLL d, yyyy")}
              </time>
              <p>
                <strong>Duration:</strong> {post.duration}
              </p>
              <p>
                <strong>Status:</strong> {post.status}
              </p>
              <p>
                <strong>Price:</strong> {post.price}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </section>
  );
}

export default function AllTrips() {
  const posts = allPosts.sort((b, a) =>
    compareDesc(new Date(a.startDate), new Date(b.startDate))
  );

  return (
    <section className="max-w-6xl flex m-auto">
      <div className="w-full mx-5 lg:mx-10">
        <h2 className="text-3xl font-bold text-left ">Trips we offer..</h2>
        <a href="#" className=" text-center   ">
          Fill the from, We will soon contact you Personally..!
        </a>
        <div className=" overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory">
          <div className="flex">
            {posts.map((post, idx) => (
              <PostCard key={idx} {...post} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
