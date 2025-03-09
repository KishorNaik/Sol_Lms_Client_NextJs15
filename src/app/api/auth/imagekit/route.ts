import ImageKit from "imagekit";
import config from "@/lib/config";
import { NextResponse } from "next/server";

const imageKit = new ImageKit({
  publicKey: config.env.imageKit.publicKey,
  privateKey: config.env.imageKit.privateKey,
  urlEndpoint: config.env.imageKit.urlEndpoint,
});

export async function GET() {
  return NextResponse.json(imageKit.getAuthenticationParameters());
}
