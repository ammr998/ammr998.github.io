import Link from "next/link";
import Image from "next/image";

interface CardProps {
  title: string;
  tagline: string;
  year: string;
  image: string;
  href: string;
}

export function Card({ title, tagline, year, image, href }: CardProps) {
  return (
    <Link href={href} className="group block">
      <article className="relative space-y-3">
        {/* Image Container */}
        <div className="aspect-[16/9] w-full overflow-hidden bg-neutral-200 rounded-md">
          <Image
            src={image}
            alt={title}
            width={800}
            height={450}
            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* Text Content */}
        <div className="flex justify-between items-start">
          <div className="space-y-1">
            <h3 className="text-lg font-medium text-neutral-200">
              {title}
            </h3>
            <p className="text-sm text-neutral-400">
              {tagline}
            </p>
          </div>
          <span className="text-sm text-neutral-400">
            {year}
          </span>
        </div>
      </article>
    </Link>
  );
} 