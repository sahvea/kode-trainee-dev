import React from 'react';

type Props = {
  year: number
}

const Divider: React.FC<Props> = ({ year }) => {
  return (
    <div className="divider">
      <p className="divider__year">{year}</p>
    </div>
  );
}

export default Divider;