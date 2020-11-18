import React from 'react';
import LogoM from './logo.png'

export default function Logo({ fill }) {
  return (
    <img
      width="160"
      height="50"
      fill={'primary'}
      src={LogoM}
      alt="Logo Maria Claudia"
    />
  );
}