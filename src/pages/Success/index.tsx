import { SuccessContainer, SuccessImageContainer, SuccessInfo } from "./styles";
import SuccessImage from "../../assets/success-image.svg";
import { Clock, CurrencyDollar, MapPin } from "phosphor-react";
import { useTheme } from "styled-components";


export function Success() {
  const theme = useTheme();
  return (
    <SuccessContainer>

      <div>
        <span>Agora é só aguardar que logo o café chegará até você</span>
        <SuccessInfo>
          <div>
            <MapPin
              size={32}
              weight="fill"
              color={theme["gray-100"]}
              style={{ backgroundColor: theme["purple-500"] }} />
            <span>
              Entrega em
              <strong >Rua João Daniel Martinelli, 102</strong>
              Farrapos - Porto Alegre, RS
            </span>
          </div>
          <div>
            <Clock
              size={32}
              weight="fill"
              color={theme["gray-100"]}
              style={{ backgroundColor: theme["yellow-500"] }} />
            <span>
              Previsão de entrega
              <strong>20min - 30 min</strong>
            </span>
          </div>
          <div>
            <CurrencyDollar size={32}
              color={theme["gray-100"]}
              style={{ backgroundColor: theme["yellow-700"] }} />
            <span>
              Pagamento na entrega
              <strong>
                Cartão de Crédito
              </strong>
            </span>
          </div>

        </SuccessInfo>


      </div>
      <SuccessImageContainer src={SuccessImage} alt="Imagem de sucesso na compra" />
    </SuccessContainer>
  );
}