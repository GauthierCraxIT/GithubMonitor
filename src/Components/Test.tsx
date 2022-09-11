import { FC, useEffect, useState } from "react";
import { useGitHub } from "../Hooks/UseGitHub";
import { AnimalButton } from "./Animal";

export interface Animal {
    id: number
    title: string
}


const animals: Animal[] = [
    {
        id: 1,
        title: 'Dog'
    },
    {
        id: 2,
        title: 'Cat'
    },
    {
        id: 3,
        title: 'Jwakkes'
    },
];

export const Test: FC = () => {
    const [counter, setCounter] = useState(0);

    const test = useGitHub();
    
    useEffect(() => {
        test.fetchRepositories();
        console.log('called http');
    }, []);

    console.log('called');

    return (
        <>
            {animals.map(animal => (
                <AnimalButton key={animal.id} animal={animal} animalClicked={(animal) => console.log(animal)} />
            ))}
        </>
    )
};