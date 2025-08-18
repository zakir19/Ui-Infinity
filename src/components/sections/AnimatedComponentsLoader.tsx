
import React, { useEffect } from 'react';
import ButtonPreview from '@/components/previews/ButtonPreview';
import CardPreview from '@/components/previews/CardPreview';
import ModalPreview from '@/components/previews/ModalPreview';
import FormPreview from '@/components/previews/FormPreview';
import NavigationPreview from '@/components/previews/NavigationPreview';
import LayoutPreview from '@/components/previews/LayoutPreview';
import FeedbackPreview from '@/components/previews/FeedbackPreview';
import EffectPreview from '@/components/previews/EffectPreview';
import TypographyComponents from '@/pages/TypographyComponents';
import GridComponents from '@/pages/GridComponents';
import ThreeDEffectsComponents from '@/pages/ThreeDEffectsComponents';

// This component doesn't render anything visible
// It preloads all component previews to ensure they're ready when needed
const AnimatedComponentsLoader = () => {
  useEffect(() => {
    // This could be used to preload any resources needed by the component previews
    // For now it's just a placeholder for future optimization
    console.log("Component previews are being prepared");
  }, []);

  return null;
};

// Export all component previews for use in the ComponentsShowcase
export {
  ButtonPreview,
  CardPreview,
  ModalPreview,
  FormPreview,
  NavigationPreview,
  LayoutPreview,
  FeedbackPreview,
  EffectPreview,
  TypographyComponents,
  GridComponents,
  ThreeDEffectsComponents
};

export default AnimatedComponentsLoader;
