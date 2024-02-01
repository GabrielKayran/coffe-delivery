import { Bank, CreditCard, CurrencyDollarSimple, Money } from "phosphor-react";
import { PaymentBody, PaymentContainer, PaymentHeader } from "./styles";
import { useTheme } from "styled-components";

export function Payment() {
  const theme = useTheme();
  return (
    <PaymentContainer>
      <PaymentHeader>
        <CurrencyDollarSimple size={22} color={theme["purple-500"]} />
        <div>
          <span>Pagamento</span>
          <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
        </div>
      </PaymentHeader>
      <PaymentBody>
        <button>
          <CreditCard size={16} color={theme["purple-500"]} />
          <span>Cartão de Crédito</span>
        </button>
        <button>
          <Bank size={16} color={theme["purple-500"]} />
          <span>Cartão de Débito</span>
        </button>
        <button>
          <Money size={16} color={theme["purple-500"]} />
          <span>Dinheiro</span>
        </button>
      </PaymentBody>
    </PaymentContainer>
  )
}