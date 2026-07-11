import { collections, dbConnect } from "@/app/lib/dbConnect";
import { ObjectId } from "mongodb";

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

export async function DELETE(req) {
  try {
    const { listingId, homeId, email } = await req.json();
    const listingCollection = dbConnect(collections.LISTINGS);

    let deleteQuery = {};

    if (listingId) {
      try {
        deleteQuery = { _id: new ObjectId(listingId) };
      } catch {
        deleteQuery = { _id: listingId };
      }
    } else if (homeId) {
      deleteQuery = {
        homeId,
        userEmail: email,
      };
    }

    const result = await listingCollection.deleteOne(deleteQuery);

    if (result.deletedCount === 0) {
      return Response.json(
        {
          success: false,
          message: "Listing not found",
        },
        {
          status: 404,
        }
      );
    }

    return Response.json({ success: true, deletedCount: result.deletedCount });
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