import React from "react";
import { Pet } from "./Pet";
import "./pets.css";
import { pets } from "../../../dummyData";

export const Pets = () => {
  return (
    <div className="pets">
      <ul className="table-head">
        <li className="cell">Pet Image</li>
        <li className="cell">ID</li>
        <li className="cell">Breed</li>
        <li className="cell">Catergory</li>
        <li className="cell">Status</li>
      </ul>
      {pets.map((pet, i) => (
        <Pet
          image={pet.img}
          id={pet.id}
          breed={pet.breed}
          category={pet.category}
          status={pet.status}
          key={i}
        />
      ))}
    </div>
  );
};
