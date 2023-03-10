import React, { useState } from "react";
import Header from "./layouts/Header";
import Section from "./layouts/Section";
import Footer from "./layouts/Footer";
import Card from "./layouts/Card";
import Cart from "./components/Cart";

import img1 from './assets/90322-00_EPIC-SW-CARB-BLUMRNO-CHRM_HERO.webp';
import img2 from './assets/90622-01_TARMAC-SL7-SW-DI2-REDTNT-METWHTSIL-BLK_HERO.webp';
import img3 from './assets/60719-003_HLMT_SW-EVADE-II-HLMT-ANGI-MIPS-CPSC-BLK-M_HERO.webp';
import img4 from './assets/61022-604_SHOE_SW-7-LACE-RD-SHOE-BLK-44_PAIR.webp';

const Shop = () => {
    const [items, setItems] = useState(
        [
            {
                id: 0,
                img: img1,
                title: 'S-Works Epic',
                description: 'You’re looking at the fastest XC bike in the world.',
                price: 12999,
                onSale: false,
                salePercentage: 0,
            },
            {
                id: 1,
                img: img2,
                title: 'S-Works Tarmac SL7',
                description: 'Climb on the lightest bike the UCI allows, then descend on the fastest.',
                price: 12999,
                onSale: false,
                salePercentage: 0,
            },
            {
                id: 2,
                img: img3,
                title: 'S-Works Evade II',
                description: 'For road race helmets, there’s nothing that can match this performance.',
                price: 330,
                onSale: false,
                salePercentage: 0,
            },
            {
                id: 3,
                img: img4,
                title: 'S-Works 7 Lace',
                description: 'S-Works 7 Lace marries classic style to race-winning heritage and performance.',
                price: 400,
                onSale: false,
                salePercentage: 0,
            },
        ]
    );

    const [cart, setCart] = useState(
        []
    );

    const clickHandler = (data, remove) => {
        console.log(data)
        const itemId = data.target.id;
        const uniqueItemId = data.target.attributes.getNamedItem('data-unique-item-id').value;

        console.log(itemId, uniqueItemId)

        if(remove) {
            console.log(remove)
            const index = cart.findIndex((element) => {
                console.log(element)
                return element.uniqueItemId === uniqueItemId;
            });

            console.log(index)
            setCart(prevState => {
                return prevState.filter((item) => (item.uniqueItemId !== uniqueItemId));
            })

        } else {
            setCart(prevState => {
                return [...prevState, {
                    id: itemId,
                    uniqueItemId: uniqueItemId,
                }]
            });

            console.log(cart)
        }

        console.log(cart)
    }

    return (
        <div className="shop">
            {console.log(cart)}
            <Header/>
            <Section className={'shop'}>
                {items.map((item) => {
                    return <Card key={item.id} id={item.id} className={'shop-card'} img={item.img} title={item.title} description={item.description} price={item.price} clickHandler={clickHandler}></Card>
                })}
            </Section>
            <Cart items={items} cart={cart} clickHandler={clickHandler}/>
            <Footer/>
        </div>
    )
}

export default Shop;