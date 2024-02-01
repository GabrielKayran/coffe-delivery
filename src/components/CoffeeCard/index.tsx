import { Coffee, CoffeeButtons, CoffeeCardContainer, CoffeeImage, ConfirmButton, PurchaseDetails, RemoveButton } from "./styles";
import ImageCoffee from '/images/coffees/americano.png'
import { Trash } from "phosphor-react";
import { useTheme } from "styled-components";
import { QuantityInput } from "../QuantityInput";
import { useState } from "react";



export function CoffeeCard() {
  const [quantity, setQuantity] = useState(1)

  function incrementQuantity() {
    setQuantity((state) => state + 1)
  }

  function decrementQuantity() {
    if (quantity > 1) {
      setQuantity((state) => state - 1)
    }
  }


  const theme = useTheme();
  return (
    <CoffeeCardContainer>



      <Coffee>
        <CoffeeImage src={ImageCoffee} />
        <div>
          <h2>{'Expresso Tradicional'}</h2>
          <CoffeeButtons>
            <QuantityInput decrementQuantity={decrementQuantity} incrementQuantity={incrementQuantity} quantity={quantity} />
            <RemoveButton>

              <Trash
                size={16}
                color={theme["purple-500"]}
              />
              REMOVER
            </RemoveButton>
          </CoffeeButtons>
        </div>
        <p>{'R$ 9,90'}</p>
      </Coffee>

      <hr />
      <PurchaseDetails>
        <div>
          <span>Total de itens</span>
          <span>{'R$ 9,90'}</span>
        </div>
        <div>
          <span>Entrega</span>
          <span>{'R$ 3,50'}</span>
        </div>
        <div className="total">
          <span>Total</span>
          <span>{'R$ 13,40'}</span>
        </div>
      </PurchaseDetails>
      <ConfirmButton>
        CONFIRMAR PEDIDO
      </ConfirmButton>
    </CoffeeCardContainer>

  );
}