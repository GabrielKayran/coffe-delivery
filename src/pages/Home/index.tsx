import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import { Heading, HomeContainer, ImageCoffeContainer, Info } from "./styles";
import { useTheme } from "styled-components";

export default function Home() {
  const theme = useTheme();
  return (
    <HomeContainer>

      <Heading>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <span>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</span>


        <Info>
          <div>
            <ShoppingCart
              size={32}
              weight="fill"
              color={theme["gray-100"]}
              style={{ backgroundColor: theme["yellow-700"] }} />
            <span>Compra simples e segura</span>
          </div>

          <div>
            <Package
              size={32}
              weight="fill"
              color={theme["gray-100"]}
              style={{ backgroundColor: theme["brown-500"] }} />
            <span>Embalagem mantém o café intacto</span>
          </div>

          <div>
            <Timer
              size={32}
              weight="fill"
              color={theme["gray-100"]}
              style={{ backgroundColor: theme["yellow-500"] }} />
            <span>Entrega rápida e rastreada</span>
          </div>

          <div>
            <Coffee
              size={32}
              weight="fill"
              color={theme["gray-100"]}
              style={{ backgroundColor: theme["purple-500"] }} />
            <span>O café chega fresquinho até você</span>
          </div>
        </Info>
      </Heading>
      <ImageCoffeContainer>
        <img src="src\assets\coffe-image.svg" />
      </ImageCoffeContainer>
    </HomeContainer>
  );
}