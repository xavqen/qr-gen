import { NextRequest, NextResponse } from "next/server";
import QRCode from "qrcode";

export async function POST(req: NextRequest) {
  try {
    const { content, fgColor, bgColor, size, level, logo } = await req.json();

    if (!content) {
      return NextResponse.json({ error: "Content is required" }, { status: 400 });
    }

    const options = {
      width: size || 300,
      margin: 2,
      color: {
        dark: fgColor || "#000000",
        light: bgColor || "#ffffff",
      },
      errorCorrectionLevel: level || "M",
    };

    const qrCodeDataURL = await QRCode.toDataURL(content, options);

    // If logo is provided, overlay it on the QR code
    if (logo) {
      const { createCanvas, loadImage } = await import("canvas");
      const qrImage = await loadImage(qrCodeDataURL);
      const canvas = createCanvas(qrImage.width, qrImage.height);
      const ctx = canvas.getContext("2d");

      // Draw QR code
      ctx.drawImage(qrImage, 0, 0);

      // Draw logo in center
      const logoSize = qrImage.width * 0.2;
      const logoX = (qrImage.width - logoSize) / 2;
      const logoY = (qrImage.height - logoSize) / 2;

      // White background for logo area
      ctx.fillStyle = bgColor || "#ffffff";
      ctx.fillRect(logoX - 5, logoY - 5, logoSize + 10, logoSize + 10);

      const logoImage = await loadImage(logo);
      ctx.drawImage(logoImage, logoX, logoY, logoSize, logoSize);

      const finalDataURL = canvas.toDataURL("image/png");
      return NextResponse.json({ qrCode: finalDataURL });
    }

    return NextResponse.json({ qrCode: qrCodeDataURL });
  } catch (error) {
    console.error("QR Generation Error:", error);
    return NextResponse.json(
      { error: "Failed to generate QR code" },
      { status: 500 }
    );
  }
}
