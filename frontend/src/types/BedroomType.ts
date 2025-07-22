

export interface BedroomProps {
  id: string;
  title: string;
  description: string;
  descriptionLong: string;
  image: string;
  price: string;
}

export interface BedroomListProps {
  quartos: BedroomProps[];
}
