export interface Content {
  feature_image: string;
  text: string;
  url: string;
}

export interface Props {
  title?: string;
  type: string;
  content: Content[];
  animated?: boolean;
  left?: boolean;
  variant?: string;
  hover?: boolean;
}

export interface ItemProps {
  item: string;
  variant?: string;
  hidden?: boolean;
  border?: boolean;
  style?: boolean;
  className?: string;
  link?: string;
}

export interface ElementProps {
  type: string;
  content: Content[];
  variant?: string;
}

export interface CardItemProps {
  title: string;
  image: string;
  url: string;
  hidden?: boolean;
  logo?: boolean;
}
