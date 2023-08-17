export async function getCategories(): Promise<Category[]> {
  const response = await fetch("http://localhost:8000/categories", {
    next: {
      tags: ["categories"],
      //     revalidate: 1,
    },
    // cache: "no-store",
  });
  return response.json();
}

export async function ListCategories() {
  const categories = await getCategories();
  return (
    <ul>
      {categories.map((category) => (
        <li key={category.id}>{category.name}</li>
      ))}
    </ul>
  );
}

export default ListCategories;
