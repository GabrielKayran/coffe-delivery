import { CoffeeCard } from "../../components/CoffeeCard";
import { Form } from "../../components/Form";
import { Payment } from "../../components/Payment";
import { CheckoutContainer, FormPayment, Titles } from "./styles";

export function Checkout() {
  return (
    <CheckoutContainer>
      <FormPayment>
        <Titles>
          Complete seu pedido
        </Titles>
        <Form />
        <Payment />
      </FormPayment>
      <div>
        <Titles>
          Cafés selecionados
        </Titles>
        <CoffeeCard />
      </div>
    </CheckoutContainer>
  );
}