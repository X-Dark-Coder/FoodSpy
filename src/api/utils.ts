export const randomChoice = (array: any[]) => {
    return array[Math.floor(Math.random() * array.length)];
};

export const randomNumber = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const shuffleArray = (array: any[]) => {
    return array.sort(() => 0.5 - Math.random());
};
