export interface NewCollection {
    id: number;
    title: string;
    price: number;
    image: string;
    category: string;
    colors: string[]
}

export type ReviewData = {
    id: number
    user: {
        name: string;
        jobTitle: string;
        company: string;
        avatar: string;
    };
    rating: number;
    product: {
        name: string;
        image: string;
    };
    review: {
        title: string;
        description: string;
    };
};