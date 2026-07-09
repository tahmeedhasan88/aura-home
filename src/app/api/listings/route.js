import { collections, dbConnect } from "@/app/lib/dbConnect"; 

export async function POST(req) {
  try {
    const listing = await req.json();

    const listingCollection = dbConnect(collections.LISTINGS);

    const exists = await listingCollection.findOne({
    homeId: listing.homeId,
    userEmail: listing.userEmail,
    });

    if (exists) {
    return Response.json({
    success: false,
    message: "Already added.",
    });
    }


    const result = await listingCollection.insertOne({
      ...listing,
      createdAt: new Date(),
    });

    return Response.json({
      success: true,
      insertedId: result.insertedId,
    });
  } catch (error) {
    return Response.json(
      {
        success: false,
        message: error.message,
      },
      {
        status: 500,
      }
    );
  }
}


export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);

    const email = searchParams.get("email");

    const listingCollection = dbConnect(collections.LISTINGS);

    const listings = await listingCollection
      .find({
        userEmail: email,
      })
      .toArray();

    return Response.json(listings);
  } catch (error) {
    return Response.json(
      {
        success: false,
        message: error.message,
      },
      {
        status: 500,
      }
    );
  }
}