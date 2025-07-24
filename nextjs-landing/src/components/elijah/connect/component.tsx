// app/component.tsx
import { AvatarImage, AvatarFallback, Avatar } from "@/components/landing/ui/avatar";
import Link from "next/link";
// want to jsonify the data into its own file
export default function ProfileAvatar() {
  return (
    <section className="flex flex-col items-center justify-center gap-6 py-12 md:py-24 lg:py-32">
      <div className="flex flex-col items-center gap-4">
        <div className="relative">
          <Avatar className="h-24 w-24 md:h-32 md:w-32 z-10">
            <AvatarImage alt="@shadcn" src="/placeholder-avatar.jpg" />
            <AvatarFallback>EA</AvatarFallback>
          </Avatar>
          <div className="absolute -bottom-2 -right-2 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full p-1">
            <BadgeIcon className="h-6 w-6 text-white" />
          </div>
        </div>
        <div className="space-y-1 text-center">
          <h2 className="text-2xl font-bold md:text-3xl">Elijah Arbee</h2>
          <p className="text-gray-500 dark:text-gray-400">Self-Taught, Driven, </p>
          <div className="flex items-center justify-center gap-2 text-sm">
            <ThumbsUpIcon className="h-5 w-5 text-green-500" />
            <span className="font-medium">1.2M Likes</span>
            <HeartIcon className="h-5 w-5 text-red-500" />
            <span className="font-medium">500K Followers</span>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <Link aria-label="Twitter" href="#">
          <TwitterIcon className="h-6 w-6 text-[#1DA1F2] transition-colors hover:text-[#1DA1F2]/80 dark:text-[#1DA1F2] dark:hover:text-[#1DA1F2]/80" />
        </Link>
        <Link aria-label="LinkedIn" href="#">
          <LinkedinIcon className="h-6 w-6 text-[#0077B5] transition-colors hover:text-[#0077B5]/80 dark:text-[#0077B5] dark:hover:text-[#0077B5]/80" />
        </Link>
        <Link aria-label="GitHub" href="#">
          <GithubIcon className="h-6 w-6 text-[#333] transition-colors hover:text-[#333]/80 dark:text-[#333] dark:hover:text-[#333]/80" />
        </Link>
        <Link aria-label="Instagram" href="#">
          <InstagramIcon className="h-6 w-6 text-[#E1306C] transition-colors hover:text-[#E1306C]/80 dark:text-[#E1306C] dark:hover:text-[#E1306C]/80" />
        </Link>
      </div>
    </section>
  );
}

function BadgeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
    </svg>
  );
}

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function HeartIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function ThumbsUpIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 10v12" />
      <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
    </svg>
  );
}

function TwitterIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}