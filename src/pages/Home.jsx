import React from "react";
import Header from "../components/Header";
import StorePromotions from "../components/StorePromotions";
import RecommendedProducts from "../components/RecommendedProducts";
import PromotionalBanners from "../components/PromotionalBanners";
import AssistantChat from "../components/AssistantChat";

function Home({
  quantity,
  setQuantity,
  pricePerUnit,
  quickProducts,
  promotions,
  recommendedProducts, // cambiado de featuredProducts
}) {
  return (
    <>
      <Header
        quantity={quantity}
        setQuantity={setQuantity}
        pricePerUnit={pricePerUnit}
        quickProducts={quickProducts}
      />
      <StorePromotions promotions={promotions} />
      <RecommendedProducts recommendedProducts={recommendedProducts} />
      <AssistantChat />
    </>
  );
}

export default Home;
