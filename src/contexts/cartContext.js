import { useState, useEffect, createContext } from 'react';

export const CartContext = createContext();

const CustomProvider = ({ children }) => {
    const [items, setItems] = useState([]);

    const [totalQ, setTotalQ] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        setTotalQ(items.reduce((sum, item) => sum + item.q, 0));
        setTotalPrice(items.reduce((sum, item) => sum + item.price * item.q, 0))
    }, [items]); 

    function addItem(id, q, title, price, description, image, category, discount) {
        setItems([
            ...items,
            {
                id: id,
                q: q,
                title: title,
                price: price / (discount + 1),
                description: description,
                image: image,
                category: category,
            },
        ]);
    }
    function removeItem(id) {
        setItems(items.filter(item => item.id !== id));
    }
    function clear() {
        setItems([]);
    }
    function isInCart(i) {
        return items.find(item => item.id === i);
    }

    return (
        <>
            <CartContext.Provider value={{ items, setItems, addItem, removeItem, clear, isInCart, totalPrice, totalQ }}>
                {children}
            </CartContext.Provider>
        </>
    );
};

export default CustomProvider;