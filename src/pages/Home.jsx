import React from "react";
import Header from "../components/Header";
import Categories from "../components/Categories";
import FeaturedProducts from "../components/FeaturedProducts";
import PromotionalBanners from "../components/PromotionalBanners";
import AssistantChat from "../components/AssistantChat";

function Home({
  quantity,
  setQuantity,
  pricePerUnit,
  quickProducts,
  categories,
  featuredProducts,
}) {
  return (
    <>
      <Header
        quantity={quantity}
        setQuantity={setQuantity}
        pricePerUnit={pricePerUnit}
        quickProducts={quickProducts}
      />
      <Categories categories={categories} />
      <FeaturedProducts featuredProducts={featuredProducts} />
      <AssistantChat />
    </>
  );
}

export default Home;
