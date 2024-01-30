import { HeaderContainer, Location } from "./styles";
import logoCoffe from "../../assets/logo-coffe.svg";
import { MapPin, ShoppingCart } from 'phosphor-react'
import { useEffect, useState } from 'react';


interface AddressComponents {
  city?: string;
  state_code?: string;
}


export function Header() {
  const [userLocation, setUserLocation] = useState<string | null>(null);

  useEffect(() => {
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
      } else {
        setUserLocation(null);
      }
    };

    const showPosition = async (position: GeolocationPosition) => {
      const { latitude, longitude } = position.coords;
      try {
        const response = await fetch(
          `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=758afda42c664b3fbf0d70ae2a0898bf`
        );
        const data = await response.json();
        const addressComponents: AddressComponents = data.results[0]?.components || {};
        const { city, state_code } = addressComponents;
        setUserLocation(`${city || ''}, ${state_code || ''}`);
      } catch (error) {
        setUserLocation(null);
      }
    };

    getLocation();
  }, []);




  return (
    <HeaderContainer>
      <img src={logoCoffe} alt="" />
      <div>
        <Location>
          <MapPin size={22} weight="fill" />
          {userLocation ? (
            <span>{userLocation}</span>
          ) : (
            <span>Localização</span>
          )}
        </Location>
        <nav>
          <a>
            <ShoppingCart size={22} weight="fill" />
          </a>
        </nav>
      </div>
    </HeaderContainer>

  )
}