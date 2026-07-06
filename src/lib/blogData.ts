export interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    content: string;
    category: string;
    date: string;
    readTime: string;
    image: string;
    alt: string;
    author: string;
    tags: string[];
}

export interface Hadith {
    text: string;
    source: string;
    narrator?: string;
}

export const hadithCollection: Hadith[] = [
    {
        text: "The best among you are those who have the best manners and character.",
        source: "Sahih Bukhari",
        narrator: "Narrated by Abdullah bin Amr"
    },
    {
        text: "None of you will have faith till he wishes for his (Muslim) brother what he likes for himself.",
        source: "Sahih Bukhari",
        narrator: "Narrated by Anas"
    },
    {
        text: "He who does not show mercy to our young ones or recognize the rights of our elders is not one of us.",
        source: "Sunan Abu Dawood",
        narrator: "Narrated by Abdullah ibn Amr"
    },
    {
        text: "A good word is a form of charity.",
        source: "Sahih Bukhari",
        narrator: "Narrated by Abu Huraira"
    },
    {
        text: "Cleanliness is half of faith.",
        source: "Sahih Muslim",
        narrator: "Narrated by Abu Malik Al-Ashari"
    }
];

export const blogPosts: BlogPost[] = [];

export const respectSectionData = {
    title: "Respect for Prophet Muhammad (S.A.W.W)",
    verse: {
        text: "Indeed, in the Messenger of Allah (S.A.W.W) you have an excellent example for whoever has hope in Allah and the Last Day and remembers Allah often.",
        reference: "Qur’an 33:21"
    },
    intro: "At **Umrah Cabs**, we believe that every journey of a pilgrim is sacred. In serving the guests of Allah, we draw inspiration from the noble character of Prophet Muhammad (S.A.W.W). His life was a beacon of mercy, humility, and respect — guiding us to treat every traveler with dignity, compassion, and care.",
    commitments: [
        {
            text: "Welcoming pilgrims with kindness and sincerity",
            icon: "Heart"
        },
        {
            text: "Ensuring comfort and safety as a reflection of his mercy",
            icon: "Shield"
        },
        {
            text: "Upholding honesty and trust in every service we provide",
            icon: "Handshake"
        }
    ],
    closing: "Through this, we strive to honor his legacy and remind ourselves that true respect is not only in words, but in living by his example."
};
