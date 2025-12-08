"use client";

import { useEffect, useRef, ReactNode } from "react";

type FadeInProps = {
    children: ReactNode;
    delay?: number;
    duration?: number;
    className?: string;
};

export function FadeIn({ children, delay = 0, duration = 0.6, className = "" }: FadeInProps) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        element.style.opacity = "1";
                        element.style.transform = "translateY(0)";
                    }
                });
            },
            { threshold: 0.1 }
        );

        observer.observe(element);

        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            className={className}
            style={{
                opacity: 0,
                transform: "translateY(20px)",
                transition: `opacity ${duration}s ease-out ${delay}s, transform ${duration}s ease-out ${delay}s`,
            }}
        >
            {children}
        </div>
    );
}

type StaggerChildrenProps = {
    children: ReactNode;
    staggerDelay?: number;
    className?: string;
};

export function StaggerChildren({ children, staggerDelay = 0.1, className = "" }: StaggerChildrenProps) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const childElements = Array.from(element.children) as HTMLElement[];

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        childElements.forEach((child, index) => {
                            setTimeout(() => {
                                child.style.opacity = "1";
                                child.style.transform = "translateY(0)";
                            }, index * staggerDelay * 1000);
                        });
                    }
                });
            },
            { threshold: 0.1 }
        );

        observer.observe(element);

        return () => observer.disconnect();
    }, [staggerDelay]);

    return (
        <div ref={ref} className={className}>
            {children}
        </div>
    );
}
