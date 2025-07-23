import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container. mx-auto">
      <div className="text-center space-y-2 text-white mt-20 px-4">
        <h1 className="text-5xl md:text-7xl lg:text-8xl gradient-title mb-3">Musseed</h1>


        <h2 className="text-3xl md:text-5xl lg:text-6xl gradient-title mb-4">Your Soundtrack to Feelings.</h2>
        <p className="lg:text-2xl text-muted-foreground">
          Document what you listen to, track how it makes you feel, and turn moments into melodies.
        </p>
        <div className="flex mt-6 justify-center items-center gap-4">
          <Link href={"/dashboard"}>
            <Button>
              Get Started
            </Button>
          </Link>
          <Link href={"/dashboard"}>
            <Button variant={"secondary"}>
              Learn More
            </Button>
          </Link>
        </div>
        <section className="my-3">

        </section>
      </div>


    </div>
  );
}
