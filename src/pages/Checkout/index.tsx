import { CoffeeCard } from "../../components/CoffeeCard";
import { Form } from "../../components/Form";
import { Payment } from "../../components/Payment";
import { CheckoutContainer } from "./styles";

export function Checkout() {
  return (
    <CheckoutContainer>
      <div>
        <Form />
        <Payment />
      </div>
      <CoffeeCard />
    </CheckoutContainer>
  );
}