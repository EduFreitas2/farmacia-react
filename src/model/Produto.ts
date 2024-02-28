import Categoria from './Categoria';


export default interface Produto {
  id: number;
  descricao: string;
  foto: string;
  nome: string;
  preco: number;
  categoria: Categoria | null;
}