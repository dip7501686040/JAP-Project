import { Dispatch, SetStateAction } from "react";

export interface Product {
  id: number;
  code?: string; 
  name?: string;
  unit?: string;
  stock: number;
  deal?: number;
  free?: number;
  pur_deal?: number;
  pur_free?: number;
  cost?: number;
  mrp?: number;
  pur_rate?: number;
  rate?: number;
  company?: string;
  manufact?: string | null;
  rackno?: string | null;
  barcode?: string | null;
}
export interface HomePageProps {
  products: Product[];
}
export interface productCardProps {
  product: Product;
}

export interface ProductContext {
  searchTerm: string;
  setSearchTerm: Dispatch<SetStateAction<string>>;
}