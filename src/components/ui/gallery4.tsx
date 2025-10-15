"use client";

import Icon from "@/components/ui/icon";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export interface Gallery4Item {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Gallery4Props {
  title?: string;
  description?: string;
  items: Gallery4Item[];
}

const Gallery4 = ({
  title = "Наши услуги",
  description = "Комплексная юридическая поддержка для вашего бизнеса",
  items,
}: Gallery4Props) => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!carouselApi) {
      return;
    }
    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
      setCurrentSlide(carouselApi.selectedScrollSnap());
    };
    updateSelection();
    carouselApi.on("select", updateSelection);
    return () => {
      carouselApi.off("select", updateSelection);
    };
  }, [carouselApi]);

  return (
    <section className="py-32 relative">
      <div className="container mx-auto relative z-10">
        <div className="mb-8 flex items-end justify-between md:mb-14 lg:mb-16">
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl font-medium md:text-4xl lg:text-5xl text-primary">
              {title}
            </h2>
            <p className="max-w-lg text-muted-foreground">{description}</p>
          </div>
          <div className="hidden shrink-0 gap-2 md:flex">
            <Button
              size="icon"
              variant="ghost"
              onClick={() => {
                carouselApi?.scrollPrev();
              }}
              disabled={!canScrollPrev}
              className="disabled:pointer-events-auto"
            >
              <Icon name="ArrowLeft" className="size-5" />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              onClick={() => {
                carouselApi?.scrollNext();
              }}
              disabled={!canScrollNext}
              className="disabled:pointer-events-auto"
            >
              <Icon name="ArrowRight" className="size-5" />
            </Button>
          </div>
        </div>
      </div>
      <div className="w-full">
        <Carousel
          setApi={setCarouselApi}
          opts={{
            breakpoints: {
              "(max-width: 768px)": {
                dragFree: true,
              },
            },
          }}
        >
          <CarouselContent className="ml-0 2xl:ml-[max(8rem,calc(50vw-700px))] 2xl:mr-[max(0rem,calc(50vw-700px))]">
            {items.map((item) => (
              <CarouselItem
                key={item.id}
                className="max-w-[320px] pl-[20px] lg:max-w-[360px]"
              >
                <div className="group rounded-xl">
                  <div className="group relative h-full min-h-[27rem] max-w-full overflow-hidden rounded-xl md:aspect-[5/4] lg:aspect-[16/9] backdrop-blur-xl bg-gradient-to-br from-white/80 to-white/60 border border-white/80 hover:shadow-2xl transition-all duration-300">
                    <div className="absolute inset-0 h-full bg-gradient-to-br from-primary/10 to-secondary/10" />
                    <div className="absolute inset-x-0 bottom-0 flex flex-col items-start p-6 md:p-8">
                      <div className="mb-6">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Icon name={item.icon as any} className="text-white" size={28} />
                        </div>
                      </div>
                      <div className="mb-2 pt-4 text-xl font-semibold md:mb-3 md:pt-4 lg:pt-4 text-primary">
                        {item.title}
                      </div>
                      <div className="mb-8 line-clamp-2 md:mb-12 lg:mb-9 text-muted-foreground">
                        {item.description}
                      </div>
                      <div className="flex items-center text-sm text-primary font-medium">
                        Подробнее{" "}
                        <Icon name="ArrowRight" className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="mt-8 flex justify-center gap-2">
          {items.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full transition-colors ${
                currentSlide === index ? "bg-primary" : "bg-primary/20"
              }`}
              onClick={() => carouselApi?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export { Gallery4 };
