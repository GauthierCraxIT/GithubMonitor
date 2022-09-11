import { Button } from "@mui/material";
import { FC } from "react";
import { Animal } from "./Test";

export interface AnimalProps {
    animal: Animal
    animalClicked: (animal: Animal) => void 
}

export const AnimalButton: FC<AnimalProps> = (props) => {
    return (
        <>
          {props.animal.id}
          {props.animal.title}
          <Button onClick={() => props.animalClicked(props.animal)}>CLICK ME</Button>
          <br />
          <br />
          <br />
        </>
    )
};