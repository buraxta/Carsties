import Image from "next/image";
import React from "react";

type Props = {
  auction: any;
};

async function getData() {
  const res = await fetch("http://localhost:6001/search");
  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }

  return res.json();
}

export default async function AuctionCard({ auction }: Props) {
  return (
    <a href="#">
      <div className="w-full bg-gray-200 aspect-video rounded-lg overflow-hidden">
        <Image
          src={auction.imageUrl}
          alt="image"
          fill
          className="object-cover"
        />
      </div>
    </a>
  );
}
