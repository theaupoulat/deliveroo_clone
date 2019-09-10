import React from "react";

class Basket extends React.Component {
  render = () => {
    const { basket, addItem, removeItem } = this.props;

    let total = 0;

    // create displayed item names
    const basketElements = Object.keys(basket).map((curr, index) => {
      console.log(basket[curr]);
      total += Number(basket[curr].count * basket[curr].price);
      return (
        <div className="Cart--line" key={index}>
          <div className="Cart--counter">
            <span
              onClick={() => {
                removeItem(curr);
              }}
              style={{ flex: 1 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-plus-circle"
                style={{
                  width: 20,
                  height: 20,
                  cursor: "pointer",
                  color: "rgb(0, 206, 189)"
                }}
              >
                <circle cx={12} cy={12} r={10} />
                <line x1={8} y1={12} x2={16} y2={12} />
              </svg>
            </span>
            <span>{basket[curr].count}</span>
            <span
              style={{ flex: 1 }}
              onClick={() => {
                addItem(curr);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-plus-circle"
                style={{
                  width: 20,
                  height: 20,
                  cursor: "pointer",
                  color: "rgb(0, 206, 189)"
                }}
              >
                <circle cx={12} cy={12} r={10} />
                <line x1={12} y1={8} x2={12} y2={16} />
                <line x1={8} y1={12} x2={16} y2={12} />
              </svg>
            </span>
          </div>
          <span className="Cart--item-name">{curr}</span>
          <span className="Cart--amount">{basket[curr].price}</span>
        </div>
      );
    });

    console.log(total);

    return (
      <div className="Cart">
        {Object.keys(basket).length === 0 ? (
          <React.Fragment>
            <button className="disabled"> Valider mon panier</button>
            <span
              style={{
                margin: "auto"
              }}
            >
              Votre panier est vide
            </span>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <button> Valider mon panier</button>
            {basketElements}
            <div className="Cart--line">
              <span> Sous-total</span>
              <span> {total.toFixed(2)} €</span>
            </div>
            <div className="Cart--line">
              <span> Frais de livraison</span>
              <span> 2.50 €</span>
            </div>
            <div className="Cart--line ">
              <span className="total"> Total</span>
              <span className="total"> {(total + 2.5).toFixed(2)} €</span>
            </div>{" "}
          </React.Fragment>
        )}
      </div>
    );
  };
}

export default Basket;
