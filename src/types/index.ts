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
