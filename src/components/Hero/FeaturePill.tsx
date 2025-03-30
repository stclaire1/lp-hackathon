import React from 'react';
import { Leaf } from 'lucide-react';

interface FeaturePillProps {
  text: string;
}

const FeaturePill: React.FC<FeaturePillProps> = ({ text }) => {
  return (
    <div className="invisible md:visible inline-flex items-center gap-2 feature-pill text-white text-sm py-2 px-4 rounded-full mt-10">
      <Leaf size={16} />
      <span>{text}</span>
    </div>
  );
};

export default FeaturePill;
