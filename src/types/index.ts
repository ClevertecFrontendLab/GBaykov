export type RecipeCardType = {
    id: string;
    category: {
        icon: string;
        value: string;
    };
    image: string;
    title: string;
    description: string;
    icons: { actionIcon: 'saved' | 'like'; value: string }[];
    recommendation?: {
        avatar: string;
        userName: string;
    };
};

export type AdditionalRecipe = {
    id: string;
    category: {
        icon: string;
        value: string;
    };
    title: string;
    description: string;
    icons: { actionIcon: 'saved' | 'like'; value: string }[];
};

export type RecipeCookStep = {
    stepNumber: number;
    description: string;
    image: string;
};

export type RecipeIngridient = {
    title: string;
    count: string;
    measureUnit: 'шт.' | 'мл' | 'по вкусу' | 'листов' | 'г' | 'зубчиков' | 'ч. л.';
};

export type Recipe = {
    id: string;
    title: string;
    description: string;
    category: string[];
    subcategory: string[];
    image: string;
    bookmarks: number;
    likes: number;
    date: string;
    time: string;
    portions?: number;
    nutritionValue: { calories: number; proteins: number; fats: number; carbohydrates: number };
    ingredients: RecipeIngridient[];
    steps: RecipeCookStep[];
    meat?: string;
    side?: string;
};
