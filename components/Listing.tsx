import React, {useState, useEffect} from "react";

export default function Listing() {
  const [listing, setListing] = useState(null);
  useEffect(() => {
    fetch('listings.json')
      .then((response) => response.json())
      .then((data) => setListing(data));
    // console.log(listing);
  }, []);
  return <div>{listing && <p>hi {listing.pricePerHour}</p>}</div>;
}