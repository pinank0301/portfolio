export const JsonLd = () => {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Pinank Trivedi",
        url: "https://pinank-trivedi.vercel.app/",
        jobTitle: "Software Developer",
        sameAs: [
            "https://github.com/pinank0301",
            "https://www.linkedin.com/in/pinank-trivedi/",
            "https://twitter.com/pinank_trivedi"
        ],
        description: "Full Stack Developer specializing in building digital products.",
        image: "https://pinank-trivedi.vercel.app/photo.png",
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
};
