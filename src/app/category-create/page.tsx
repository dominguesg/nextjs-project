import Link from "next/link";
import CategoryCreateForm from "../components/CreateCategoryForm";

export function CategoryCreatePage() {
  return (
    <div>
      <h1>Criar categoria</h1>
      <Link href="/categories" >Ir para Categorias</Link>
      <CategoryCreateForm />
    </div>
  );
}

export default CategoryCreatePage;
