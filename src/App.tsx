import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { usePageTitle } from './hooks/usePageTitle';
import Index from './pages/Index';
import Components from './pages/Components';
import ButtonComponents from './pages/ButtonComponents';
import CardComponents from './pages/CardComponents';
import ModalComponents from './pages/ModalComponents';
import FormComponents from './pages/FormComponents';
import NavigationComponents from './pages/NavigationComponents';
import LayoutComponents from './pages/LayoutComponents';
import FeedbackComponents from './pages/FeedbackComponents';
import EffectComponents from './pages/EffectComponents';
import TypographyComponents from './pages/TypographyComponents';
import GridComponents from './pages/GridComponents';
import ThreeDEffectsComponents from './pages/ThreeDEffectsComponents';
import AnimationComponents from './pages/AnimationComponents';
import HoverComponents from './pages/HoverComponents';
import BackgroundComponents from './pages/BackgroundComponents';
import InputComponents from './pages/InputComponents';
import SliderComponents from './pages/SliderComponents';
import LoaderComponents from './pages/LoaderComponents';
import CustomUI from './pages/CustomUI';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';
import CardLibrary from './pages/CardLibrary';
import Preloader from './components/Preloader';
import PageTransition from './components/PageTransition';
import Cursor from './components/Cursor';
import ExperimentalLab from './pages/ExperimentalLab';
import { Toaster } from 'sonner';

function App() {
  usePageTitle('React Components');
  
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-pink-900 text-white">
        {/* Global overlays */}
        <Preloader />
        <PageTransition />
        <Cursor />
        <Toaster 
          position="top-right" 
          richColors 
          toastOptions={{
            style: {
              background: 'rgba(0, 0, 0, 0.9)',
              border: '1px solid rgba(168, 85, 247, 0.3)',
              backdropFilter: 'blur(10px)',
            },
          }}
        />
        
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/components" element={<Components />} />
          <Route path="/buttons" element={<ButtonComponents />} />
          <Route path="/cards" element={<CardComponents />} />
          <Route path="/card-library" element={<CardLibrary />} />
          <Route path="/modals" element={<ModalComponents />} />
          <Route path="/forms" element={<FormComponents />} />
          <Route path="/navigation" element={<NavigationComponents />} />
          <Route path="/layout" element={<LayoutComponents />} />
          <Route path="/feedback" element={<FeedbackComponents />} />
          <Route path="/effects" element={<EffectComponents />} />
          <Route path="/typography" element={<TypographyComponents />} />
          <Route path="/grids" element={<GridComponents />} />
          <Route path="/3d-effects" element={<ThreeDEffectsComponents />} />
          <Route path="/animation" element={<AnimationComponents />} />
          <Route path="/hover" element={<HoverComponents />} />
          <Route path="/backgrounds" element={<BackgroundComponents />} />
          <Route path="/inputs" element={<InputComponents />} />
          <Route path="/sliders" element={<SliderComponents />} />
          <Route path="/loaders" element={<LoaderComponents />} />
          <Route path="/custom-ui" element={<CustomUI />} />
          <Route path="/lab" element={<ExperimentalLab />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
