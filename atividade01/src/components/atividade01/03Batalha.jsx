import React from 'react';

const Hero = ({name, img}) => {
    return (
        <div>
            <h1>{name}</h1>
            <img
                src={img} width={300}
                alt="Imagem do Herói"
            />
        </div>
    );
}

const Enemy = ({name, img}) => {
    return (
        <div>
            <h1>{name}</h1>
            <img
                src={img} width={300}
                alt="Imagem do Vilão"
            />
        </div>
    );
}

const Arena = ({arena, children}) => {
    console.log(children)
    const result = React.Children.map(children, (child, index) => {
        return React.cloneElement(child, {arena});
    });

    // Queria adicionar uma linha entre os elementos, mas não consegui :(
    // const result = React.Children.map(children, (child, index) => {
    //     const clone = (
    //         <div>
    //             {React.cloneElement(child, { arena })}
    //         </div>
    //         );
    //     if (index % 2 === 1) return React.cloneElement(clone, null, <hr />);
    //     return clone;
    //     }
    // );

    return (
        <div>
            <h1>{arena}</h1>
            {result}
        </div>
    );
}

const World = ({children}) => {
    return (
        <div>
            {children}
        </div>
    );
}

export {Arena, World, Hero, Enemy}