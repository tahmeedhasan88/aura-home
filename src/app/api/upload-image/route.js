import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const formData = await request.formData();

    const image = formData.get("image");

    if (!image) {
      return NextResponse.json(
        {
          message: "Image is required",
        },
        {
          status: 400,
        }
      );
    }

    const body = new FormData();

    body.append("image", image);

    const response = await fetch(
      `https://api.imgbb.com/1/upload?key=${process.env.IMGBB_API_KEY}`,
      {
        method: "POST",
        body,
      }
    );

    const data = await response.json();

    if (!data.success) {
      return NextResponse.json(
        {
          message: "Image upload failed",
        },
        {
          status: 500,
        }
      );
    }

    return NextResponse.json({
      imageUrl: data.data.url,
    });
  } catch (error) {
    return NextResponse.json(
      {
        message: error.message,
      },
      {
        status: 500,
      }
    );
  }
}