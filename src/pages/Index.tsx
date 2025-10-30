import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AIToolsSection from "@/components/AIToolsSection";
import CoursesSection from "@/components/CoursesSection";
import MaterialsSection from "@/components/MaterialsSection";
import MethodologySection from "@/components/MethodologySection";
import ReviewsSection from "@/components/ReviewsSection";
import BlogSection from "@/components/BlogSection";
import ContactsSection from "@/components/ContactsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-purple-50/30 to-lavender-100/40">
      <Navigation />
      <HeroSection />
      <AIToolsSection />
      <CoursesSection />
      <MaterialsSection />
      <MethodologySection />
      <ReviewsSection />
      <BlogSection />
      <ContactsSection />
      <Footer />
    </div>
  );
};

export default Index;