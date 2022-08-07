import { Link } from '@mui/material';
import React from 'react';

interface Props {
  location: { text: string, link: string }[];
  thisLocation: string;
}

export default function Location(props: Props) {
  const { location, thisLocation } = props;
  return (
    <div className="layout-center">
      <div className="location-wrap">
        <span className="home">
          <Link href="/">Home</Link>
        </span>
        {location
          && location.map((item, i) => (
            <span key={i}>
                            <Link href={item.link}>{item.text}</Link>
                          </span>
          ))}
        <strong className="b">{thisLocation}</strong>
      </div>
    </div>
  );
}
