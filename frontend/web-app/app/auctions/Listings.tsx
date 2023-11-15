import React from "react";
import AuctionCard from "./AuctionCard";
import { Auction, PagedResult } from "@/types";

async function getData(): Promise<PagedResult<Auction>> {
  const res = await fetch("http://localhost:6001/search?pageSize=10");
  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }

  return res.json();
}

export default async function Listings() {
  const data = await getData();

  return (
    <div className="grid grid-cols-4 gap-6">
      {data &&
        data.results.map((auction) => (
          <AuctionCard key={auction.id} auction={auction} />
        ))}
    </div>
  );
}
