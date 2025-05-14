
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Components from "./pages/Components";
import ButtonComponents from "./pages/ButtonComponents";
import CardComponents from "./pages/CardComponents";
import NavigationComponents from "./pages/NavigationComponents";
import FormComponents from "./pages/FormComponents";
import ModalComponents from "./pages/ModalComponents";
import LayoutComponents from "./pages/LayoutComponents";
import FeedbackComponents from "./pages/FeedbackComponents";
import EffectComponents from "./pages/EffectComponents";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/components" element={<Components />} />
          <Route path="/buttons" element={<ButtonComponents />} />
          <Route path="/cards" element={<CardComponents />} />
          <Route path="/navigation" element={<NavigationComponents />} />
          <Route path="/forms" element={<FormComponents />} />
          <Route path="/modals" element={<ModalComponents />} />
          <Route path="/layout" element={<LayoutComponents />} />
          <Route path="/feedback" element={<FeedbackComponents />} />
          <Route path="/effects" element={<EffectComponents />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
