import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import { CoffeeList, Content, Heading, HomeContainer, ImageCoffeContainer, Info } from "./styles";
import { useTheme } from "styled-components";
import { Card } from "../../components/Card";
import { coffees } from "../../../data.json"

export default function Home() {
  const theme = useTheme();
  return (
    <div>
      <HomeContainer>
        <Content>
          <div>
            <Heading>
              <h1>Encontre o café perfeito para qualquer hora do dia</h1>
              <span>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</span>

            </Heading>
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
          </div>

          <ImageCoffeContainer>
            <img src="src\assets\coffe-image.svg" />
          </ImageCoffeContainer>
        </Content>

      </HomeContainer>

      <CoffeeList>
        <h2>Nossos cafés</h2>
        <div>
          {coffees.map((coffee) => (
            <Card key={coffee.id} coffee={coffee} />
          ))}

        </div>
      </CoffeeList>

    </div>
  );
}