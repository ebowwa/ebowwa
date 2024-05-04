/**
 * v0 by Vercel.
 * @see https://v0.dev/t/lx4R3ouckNH
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
// 
import Link from "next/link";
import { ChurchIcon, HeartIcon, CalendarIcon } from "@/components/ui/icons";
import CoinScene from "@/components/three/assets/coin/CoinContainer";
import textData from "@public/html/homepage.json";
import { useViewportSize } from "@/components/utility/viewport/useViewportSize";

export default function LandingContainer() {
    const { width, height } = useViewportSize();

    return (
        <>
            <section
                className={`relative overflow-hidden ${width < 768 ? "h-[60vh]" : "h-[80vh]"
                    }`}
            >
                <img
                    alt="Church exterior"
                    className="h-full w-full object-cover object-center"
                    height={1080}
                    src="/images/church-exterior.jpg"
                    style={{
                        aspectRatio: "1920/1080",
                        objectFit: "cover",
                    }}
                    width={1920}
                />
                <div className="absolute inset-0 bg-gray-900/50" />
                <div className="absolute inset-0 flex flex-col items-center justify-center space-y-6 px-4 text-center text-white">
                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">{textData.welcomeTitle}</h1>
                    <p className="max-w-xl text-lg">{textData.welcomeDescription}</p>
                    <div className="flex items-center space-x-8">
                        <Link
                            className="inline-flex h-10 items-center justify-center rounded-md bg-white px-6 py-2 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900"
                            href="#"
                        >
                            {textData.learnMoreLabel}
                        </Link>
                        <div className="w-64 h-64">
                            <CoinScene />
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                        <div className="space-y-4">
                            <ChurchIcon className="h-12 w-12 text-gray-500" />
                            <h3 className="text-2xl font-bold">{textData.missionTitle}</h3>
                            <p className="text-gray-500">{textData.missionDescription}</p>
                        </div>
                        <div className="space-y-4">
                            <HeartIcon className="h-12 w-12 text-gray-500" />
                            <h3 className="text-2xl font-bold">{textData.valuesTitle}</h3>
                            <p className="text-gray-500">{textData.valuesDescription}</p>
                        </div>
                        <div className="space-y-4">
                            <CalendarIcon className="h-12 w-12 text-gray-500" />
                            <h3 className="text-2xl font-bold">{textData.eventsTitle}</h3>
                            <p className="text-gray-500">{textData.eventsDescription}</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-gray-100 py-16 md:py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid gap-10 md:grid-cols-2">
                        <div>
                            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{textData.communityTitle}</h2>
                            <p className="mt-4 text-gray-500">{textData.communityDescription}</p>
                            <Link
                                className="mt-6 inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
                                href="#"
                            >
                                {textData.exploreEventsLabel}
                            </Link>
                        </div>
                        <div>
                            <img
                                alt="Church interior"
                                className="h-full w-full rounded-lg object-cover object-center"
                                height={600}
                                src="/images/church-interior.jpg"
                                style={{
                                    aspectRatio: "800/600",
                                    objectFit: "cover",
                                }}
                                width={800}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}