import { MapPinLine } from "phosphor-react";
import { FormBody, FormContainer, FormHeader } from "./styles";
import { useTheme } from "styled-components";
import { IMaskInput } from 'react-imask';

export function Form() {
  const theme = useTheme();
  return (
    <FormContainer>
      <FormHeader>
        <MapPinLine size={22} color={theme["yellow-500"]} weight="bold" />
        <div>
          <span>Endereço de Entrega</span>
          <p>Informe o endereço onde deseja receber seu pedido</p>
        </div>
      </FormHeader>

      <FormBody>
        <form>
          <div >
            <IMaskInput
              className="narrow"
              mask="00000-000"
              placeholder="CEP"
              required
            />
          </div>
          <div>
            <input type="text" placeholder="Rua" required />
          </div>
          <div>
            <input type="text" placeholder="Número" required className="narrow" />
            <input type="text" placeholder="Complemento" />
          </div>
          <div>
            <input type="text" placeholder="Bairro" required className="narrow" />
            <input type="text" placeholder="Cidade" required />
            <input type="text" placeholder="UF" required className="Xnarrow" />
          </div>
        </form>
      </FormBody>
    </FormContainer>

  );
}