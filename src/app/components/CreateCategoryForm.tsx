"use client";

import { FormEvent } from "react";

export async function CategoryCreateForm() {
  function onSubmit(event: FormEvent) {
    event.preventDefault();
    const name = document.querySelector<HTMLInputElement>("#name")!.value;
    console.log(name);

    fetch("http://localhost:3000/api/categories", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name }),
    });
  }

  return (
    <form onSubmit={onSubmit}>
      <input name="name" id="name" placeholder="name" className="text-black" />
      <br />
      <br />
      <br />
      <button type="submit">Criar</button>
    </form>
  );
}

export default CategoryCreateForm;
