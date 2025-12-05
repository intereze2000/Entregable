const BASE_URL = "https://6909e3a01a446bb9cc20761f.mockapi.io/entregable";

export const createProduct = async (productData) => {

  const response = await fetch(`${BASE_URL}/productos`, {
    method: "POST",
    headers: {
        "Content-Type": "application/json",        
    },
    body: JSON.stringify(productData),
  });
  
  if (!response.ok) {
    throw new Error("Error al crear el producto");
  }
  
  const data = await response.json();
  return data;
}

export const getProducts = async (category) => {
  // Use the /products resource on the mock API
  let url = `${BASE_URL}/productos`;
  if (category) {
    url = `${BASE_URL}/productos?categoria=${encodeURIComponent(category)}`;
  }

  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Error al obtener los productos");
  }

  const results = await res.json();
  return results;

};
//Traer un solo producto por su id
export const getProductById = async (id) => {
  const res = await fetch(`${BASE_URL}/productos/${id}`);
  if (!res.ok) {
    throw new Error("Error al obtener el producto");
  }
  return await res.json();
};
