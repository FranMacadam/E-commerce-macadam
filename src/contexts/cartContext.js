import { useState, useEffect } from 'react';
import { Provider } from '../contexts/myContext'

const CartContext = ({ children }) => {
    const [items, setItems] = useState([]);

    const [totalQ, setTotalQ] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        setTotalQ(items.reduce((sum, item) => sum + item.stock, 0));
        setTotalPrice(items.reduce((sum, item) => sum + item.price * item.stock, 0))
    }, [items]);

    function addItem(id, stock, title, price, image, category) {
        setItems([
            ...items,
            {
                id: id,
                stock: stock,
                title: title,
                price: price,
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


    const valueContext = {
        items,
        setItems,
        addItem,
        removeItem,
        clear,
        isInCart,
        totalPrice,
        totalQ
    }

    return (
        <>
            <Provider value={valueContext}>
                {children}
            </Provider>
        </>
    );
};

export default CartContext;