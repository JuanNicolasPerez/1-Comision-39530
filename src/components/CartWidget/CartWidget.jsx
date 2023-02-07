const CartWidget = ({cantcarrito}) => {
    return (
        <>
            <button className="btn"> 🛒 </button>
            <p>{cantcarrito}</p>
        </>
    );
}

export default CartWidget;
