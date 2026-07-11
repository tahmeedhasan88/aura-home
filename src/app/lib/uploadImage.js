export default async function uploadImage(file) {
  const formData = new FormData();

  formData.append("image", file);

  const res = await fetch("/api/upload-image", {
    method: "POST",
    body: formData,
  });

  if (!res.ok) {
    throw new Error("Image upload failed");
  }

  const data = await res.json();

  return data.imageUrl;
}