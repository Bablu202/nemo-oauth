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
        <div className="z-[-1] relative border  border-custom-pri border-opacity-30 mr-4 rounded-lg shadow-lg snap-always snap-center cursor-pointer overflow-hidden">
          <div className="w-80 h-60 container ">
            <Image
              className="rounded-t-lg object-fill "
              src={post.imageURL}
              alt="Trip Image"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              priority
              loading="eager"
            />
            <div className=" text-white absolute bg-black/1 w-full h-full">
              <div className="absolute bg-gradient-to-b from-black/70 to-transparent w-full h-16" />
              <div className="absolute bottom-0 bg-gradient-to-t from-black/90 to-transparent w-full h-16" />

              {/* both image and text */}
              <div className="p-2 absolute flex flex-col w-full h-full">
                <div className="flex justify-between">
                  <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                  <div className="flex flex-col ">
                    <time
                      dateTime={post.startDate}
                      className="mb-1 text-xs text-gray-100"
                    >
                      {format(parseISO(post.startDate), "LLLL d, yyyy")}
                    </time>
                    <time
                      dateTime={post.returnDate}
                      className=" mb-1 text-xs text-gray-100 mr-auto"
                    >
                      {format(parseISO(post.returnDate), "LLLL d, yyyy")}
                    </time>
                  </div>
                </div>
                <div className="mt-auto text-sm">
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
      <div className="w-full">
        <h2 className="text-3xl font-bold text-left ">Trips we offer..</h2>
        <a href="#" className=" text-center   ">
          Fill the from, We will soon contact you Personally..!
        </a>
        <div className="overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory">
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
