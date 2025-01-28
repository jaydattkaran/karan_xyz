"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { ReactLenis } from "@studio-freight/react-lenis";
import "../index.css";
import About from './About'

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface CardProps {
    title: string;
    copy: string;
    index: number;
    language: string;
}

const Card = ({ title, copy, language, index }: CardProps) => {
    return (
        <div className="card" id={`card-${index + 1}`}>
            <div className="card-inner">
                <div className="card-content">
                    <h1>{title}</h1>
                    <p>{copy}</p>
                    <div className="language">{language}</div>
                </div>
                <div className="card-img">
                    <img src={`../../public/img${index + 2}.jpg`} alt={title} />
                </div>
            </div>
        </div>
    );
};

const Projects = () => {
    const cards = [
        {
            title: "Brand Foundation",
            copy: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nam tempore repudiandae labore reiciendis porro excepturi magnam iusto nostrum tenetur voluptas laboriosam, doloremque magni, recusandae exercitationem, voluptatibus earum? Tempora, dicta!",
            language: "nodejs - nextjs - typescript",
        },
        {
            title: "Brand Foundation",
            copy: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nam tempore repudiandae labore reiciendis porro excepturi magnam iusto nostrum tenetur voluptas laboriosam, doloremque magni, recusandae exercitationem, voluptatibus earum? Tempora, dicta!",
            language: "Nodejs - Nextjs - typescript",
        },
        {
            title: "Brand Foundation",
            copy: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nam tempore repudiandae labore reiciendis porro excepturi magnam iusto nostrum tenetur voluptas laboriosam, doloremque magni, recusandae exercitationem, voluptatibus earum? Tempora, dicta!",
            language: "Nodejs - Nextjs - typescript",
        },
        {
            title: "Brand Foundation",
            copy: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nam tempore repudiandae labore reiciendis porro excepturi magnam iusto nostrum tenetur voluptas laboriosam, doloremque magni, recusandae exercitationem, voluptatibus earum? Tempora, dicta!",
            language: "Nodejs - Nextjs - typescript",
        },
    ];

    const container = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const cards = gsap.utils.toArray<HTMLElement>(".card");

        if (cards.length > 0) {
            ScrollTrigger.create({
                trigger: cards[0],
                start: "top 35%",
                endTrigger: cards[cards.length - 1],
                end: "top 30%",
                pin: ".intro",
                pinSpacing: false,
            });

            cards.forEach((card, index) => {
                const isLastCard = index === cards.length - 1;
                const cardInner = card.querySelector(".card-inner");

                if (!isLastCard && cardInner) {
                    ScrollTrigger.create({
                        trigger: card,
                        start: "top 35%",
                        endTrigger: ".outro",
                        end: "top 65%",
                        pin: true,
                        pinSpacing: false,
                    });

                    gsap.to(cardInner, {
                        y: `-${(cards.length - index) * 14}vh`,
                        ease: "none",
                        scrollTrigger: {
                            trigger: card,
                            start: "top 35%",
                            endTrigger: ".outro",
                            end: "top 65%",
                            scrub: true,
                        },
                    });
                }
            });
        }

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, { scope: container });

    return (
        <ReactLenis root>
            <div className="app overflow-x-hidden" ref={container}>
                {/* <section className="hero">
                    <img src="../../public/img.jpg" alt="" />
                </section> */}
                <section className="intro">
                    <h1>
                        <About
                            hoverText="Not a decade, actually a university student who is just actively producing cool shit since 2022 and navigating to my career."
                            normalText="Over a decade of experience in interactive design and working with some of the most talented people in the business."
                        />
                    </h1>
                </section>
                <section className="cards">
                    {cards.map((card, index) => (
                        <Card key={index} {...card} index={index} />
                    ))}
                </section>
                <section className="outro">
                    <h1>
                        <About
                            hoverText="Not a decade, actually a university student who is just actively producing cool shit since 2022 and navigating to my career."
                            normalText="Over a decade of experience in interactive design and working with some of the most talented people in the business."
                        />
                    </h1>
                </section>
            </div>
        </ReactLenis>
    );
};

export default Projects;