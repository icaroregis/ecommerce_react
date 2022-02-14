import React from 'react';

export default function Logo({ url, alt, width }) {
  return <img style={{ width: width }} src={url} alt={alt} />;
}
