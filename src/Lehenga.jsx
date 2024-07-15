import React from "react";
import "./Lehenga.css";
import Product from "./Product";

function Home() {
  return (
    <div className="homepage">
      <div className="homepage_container">
        <div className="homepage_row">
          <Product
            image="https://i.pinimg.com/736x/d4/b8/5d/d4b85d1c397c8db5c0041a8e68af4823.jpg"
            type="Women's Ethnic Wear"
            discount="50-80% OFF"
          />
          <Product
            image="https://i.pinimg.com/736x/b4/7f/cc/b47fcc8161526e6de2c74db991f3918d.jpg"
            type="WHF Casual Wear"
            discount="50-80% OFF"
          />
          <Product
            image="https://www.joshindia.com/cdn/shop/products/WhatsAppImage2022-08-17at5.34.58PM_1.jpg?v=1660743158"
            type="Men's Active Wear"
            discount="50-80% OFF"
          />
          <Product
            image="https://cdn.stylecaret.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/5/2/52749647835_e16c19559b_o.jpg"
            type="Women's Active Wear"
            discount="50-80% OFF"
            link="/IndianHandloomProductDetail" // Add the link prop here
          />
          <Product
            image="https://cdn.sareeka.com/image/cache/data2022/green-embroidered-net-lehenga-choli-233970-1000x1375.jpg"
            type="Western  Wear"
            discount="50-80% OFF"
          />
          <Product
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqRI4pnpy-1YdoucNP_cLbv8U24fFZPe1BwQ&s"
            type="Sports Wear"
            discount="50-80% OFF"
          />
        </div>
        <div className="homepage_row">
          <Product
            image="https://www.sairasboutique.net/cdn/shop/products/RoyalBlueDesignerHeavyEmbroideredBridalLehenga-Saira_sBoutique.jpg?v=1604207237"
            type="HeadPhones and Speakers"
            discount="50-80% OFF"
          />
          <Product
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw0BgygNq9c78GDp_4mYY1s1hrq50qBBOEFgPqGnZLJq5-OXNhFFVhkgcFgPWspTO-WH4&usqp=CAU"
            type="Lounge Wear"
            discount="50-80% OFF"
          />
          <Product
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThXitPYSFSxJMyKvvK1Wh019egq3ETxi5rJIY1-u-O9-aeAHBqbsxpqJ3hP5tsvtKapYA&usqp=CAU"
            type="Inner Wear"
            discount="50-80% OFF"
          />
          <Product
            image="https://assets.panashindia.com/media/catalog/product/1/9/1937lg07-2407.jpg"
            type="Watches"
            discount="50-80% OFF"
          />
          <Product
            image="https://i.etsystatic.com/21403563/r/il/09760e/4459810985/il_570xN.4459810985_sikq.jpg"
            type="Grooming"
            discount="50-80% OFF"
          />
          <Product
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI5iH0eexnxkaYYbESxJxX45G8RG4UVxR9hj4beTBgHe9TLIuwVF4x9TkvVdqMQVZJdZo&usqp=CAU"
            type="Beauty and Makeup"
            discount="50-80% OFF"
          />
        </div>
        <div className="homepage_row">
          <Product
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMZcaZnDY-y7dOIr8RCo8g-fbv-qZkQb0bZobbloWhT7Tu33inbjcKj5O_CjscsmeradM&usqp=CAU"
            type="Men's Footwear"
            discount="50-80% OFF"
          />
          <Product
            image="https://tirumaladesigners.in/cdn/shop/products/tirumala11nov0737copy.jpg?v=1669211662"
            type="Kids Wear"
            discount="50-80% OFF"
          />
          <Product
            image="https://5.imimg.com/data5/SELLER/Default/2022/9/BE/LH/NS/68860322/light-blue-net-lehenga-choli.png"
            type="Women's Footwear"
            discount="50-80% OFF"
          />
          <Product
            image="https://img.perniaspopupshop.com/catalog/product/m/h/MHRU082012_1.jpg?impolicy=detailimageprod"
            type="Bags, Belts,Wallets"
            discount="50-80% OFF"
          />
          <Product
            image="https://assets2.andaazfashion.com/media/catalog/product/cache/1/image/800x1200/a12781a7f2ccb3d663f7fd01e1bd2e4e/l/l/llcv01987-gray.jpg"
            type="Office Wear"
            discount="50-80% OFF"
          />
          <Product
            image="https://www.joshindia.com/cdn/shop/products/137263391_429067618218378_320129923705734233_n.jpg?v=1639208557"
            type="Men's Ethnic Wear"
            discount="50-80% OFF"
          />
        </div>
        <div className="homepage_row">
          <Product
            image="https://cdn.sareeka.com/image/cache/data2023/sea-green-trendy-lehenga-choli-263796-1000x1375.jpg"
            type="Jewellery"
            discount="50-80% OFF"
          />
          <Product
            image="https://www.sairasboutique.net/cdn/shop/products/TealBlueDesignerHeavyEmbroideredBridalLehenga-Saira_sBoutique_3.jpg?v=1667139137"
            type="Jewellery"
            discount="50-80% OFF"
          />
          <Product
            image="https://empress-clothing.com/cdn/shop/files/SEN2088.jpg?v=1692778109"
            type="Jewellery"
            discount="50-80% OFF"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
