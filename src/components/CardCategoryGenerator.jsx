import React from 'react';
import CardCategory from './CardCategory'; // Importa tu componente de card

const CardCategoryGenerator = () => {
    const numCards = 4; // Define la cantidad de cards que deseas generar

    // Función que genera las cards
    const renderCards = () => {
        let cardsArray = [];
        for (let i = 1; i <= numCards; i++) { // Comienza desde 1 hasta numCards
            cardsArray.push(<CardCategory key={i} cardNumber={i} />); // Genera cada card con una key única
        }
        return cardsArray;
    };

    return (
        <div className="flex flex-wrap items-center justify-center gap-10 py-10">
            {renderCards()}
        </div>
    );
};

export default CardCategoryGenerator;
