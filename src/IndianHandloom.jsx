import React from "react";
import "./IndianHandloom.css";
import Product2 from "./Product2";
import Lehenga from "./assets/Lehenga.mp4";
import Sarees from "./assets/Sarees.mp4";
import KurtaPajama from "./assets/KurtaPajama.mp4";
import Salwarkameez from "./assets/Salwarkameez.mp4";
import Dupatta from "./assets/Dupatta.mp4";
import Printing from "./assets/Printing.mp4";
import Embrioidary from "./assets/Embrioidary.mp4";
import Dyeing from "./assets/Dyeing.mp4";
import Handloom from "./assets/Handloom.mp4";
import QUIZ from "./assets/QUIZ.png";
import { Link } from "react-router-dom";

function IndianHandloom() {
  return (
    <div className="indianHandloom">
      <div className="indianHandloom_container">
        <Link to="/Quiz">
          <img src={QUIZ} alt="Quiz" className="quiz_image" />
        </Link>

        <video
          src={Sarees}
          type="video/mp4"
          autoPlay
          muted
          loop
          className="indianHandloom_video"
        />

        <div className="indianHandloom_row">
          <Product2
            image="https://afbrand.s3.ap-south-1.amazonaws.com/images/items/Pari-Pink-Sophisticated-Kanjivaram-Silk-Saree-With-Pure-Zari-Weaving-1_9f37299.webp"
            type="Kanjivaram Saree"
            discount="5% to 15% off"
          />
          <Product2
            image="https://media.shopkund.com/media/catalog/product/cache/3/image/9df78eab33525d08d6e5fb8d27136e95/p/r/prt10241-1banarasi-silk-banarasi-saree-in-maroon-with-weaving-sr24575_1_.jpg"
            type="Banarasi Saree"
            discount="20% to 30% off"
          />
          <Product2
            image="https://static3.azafashions.com/tr:w-450/uploads/product_gallery/1654414-0048947001659947361.jpg"
            type="Chanderi Saree"
            discount="20% to 30% off"
          />
          <Product2
            image="https://5.imimg.com/data5/SELLER/Default/2023/2/QT/KF/YW/18451800/fancy-designer-bandhani-sarees.jpeg"
            type="Tussar Silk Saree"
            discount="20% to 30% off"
          />
          <Product2
            image="https://i.pinimg.com/736x/66/ae/e5/66aee5cfb5cc35c5066c2ee66e8fde2c.jpg"
            type="Bandhani Saree"
            discount="50-80% OFF"
          />
          <Product2
            image="https://medias.utsavfashion.com/media/catalog/product/cache/1/image/1000x/040ec09b1e35df139433887a97daa66f/h/a/handloom-cotton-tant-saree-in-navy-blue-v1-suua49.jpg"
            type="Paithani Saree"
            discount="5% to 15% off"
          />
          <Product2
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYjRdA8c_Je14jG-Z5zUg2VxeSzGsWf99W600zRDIryXJCOricHd8Tr8cTmNL-rqo7yQM&usqp=CAU"
            type="Kota Doria Saree"
            discount="50-80% OFF"
          />
          <Product2
            image="https://ik.imagekit.io/bhsa3gea8yj/products/tr:w-1200/2024/jan-24/Chanderi-Saree-with-Embroidery-work-In-Multicolour-Colour-SR05649168-A.jpg"
            type="Mysore Silk Saree"
            discount="5% to 15% off"
          />
          <Product2
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_19QIMtxytpCNiAEj538ZlNEAlH9FEDa80w&s"
            type="Pochampally Ikkat Saree"
            discount="50-80% OFF"
          />
          <Product2
            image="https://sereki.in/cdn/shop/products/DSC_8440.jpg?v=1634211034&width=1445"
            type="Kanjeevaram Silk Saree"
            discount="5% to 15% off"
          />
        </div>
        <video
          src={Lehenga}
          type="video/mp4"
          autoPlay
          muted
          loop
          className="indianHandloom_video"
        />

        <div className="indianHandloom_row">
          <Product2
            image="https://www.nitikagujral.com/cdn/shop/products/Deep-Red-Bridal-Lehenga-Choli-Set-1.jpg?v=1664880405"
            type="Bridal Lehenga"
            discount="40% to 60% off"
          />
          <Product2
            image="https://media.shopkund.com/media/catalog/product/cache/3/image/9df78eab33525d08d6e5fb8d27136e95/p/r/prt10241-1banarasi-silk-banarasi-saree-in-maroon-with-weaving-sr24575_1_.jpg"
            type="Party Wear Lehenga"
            discount="40% to 60% off"
          />
          <Product2
            image="https://static3.azafashions.com/tr:w-450/uploads/product_gallery/1654414-0048947001659947361.jpg"
            type="Festive Lehenga"
            discount="50-80% OFF"
          />
          <Product2
            image="https://5.imimg.com/data5/SELLER/Default/2023/2/QT/KF/YW/18451800/fancy-designer-bandhani-sarees.jpeg"
            type="Designer Lehenga"
            discount="40% to 60% off"
          />
          <Product2
            image="https://i.pinimg.com/736x/66/ae/e5/66aee5cfb5cc35c5066c2ee66e8fde2c.jpg"
            type="Silk Lehenga"
            discount="50-80% OFF"
          />
          <Product2
            image="https://medias.utsavfashion.com/media/catalog/product/cache/1/image/1000x/040ec09b1e35df139433887a97daa66f/h/a/handloom-cotton-tant-saree-in-navy-blue-v1-suua49.jpg"
            type="Chiffon Lehenga"
            discount="40% to 60% off"
          />
          <Product2
            image="https://i0.wp.com/utkalikaodisha.com/wp-content/uploads/2023/09/Utkalika__BS21__silk_set290_sowmyasri_side__2023-9-7-16-28-45__1200X1200.jpg?fit=1200%2C1200&ssl=1"
            type="Georgette Lehenga"
            discount="50-80% OFF"
          />
          <Product2
            image="https://ik.imagekit.io/bhsa3gea8yj/products/tr:w-1200/2024/jan-24/Chanderi-Saree-with-Embroidery-work-In-Multicolour-Colour-SR05649168-A.jpg"
            type="Velvet Lehenga"
            discount="40% to 60% off"
          />
          <Product2
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_19QIMtxytpCNiAEj538ZlNEAlH9FEDa80w&s"
            type="Lehenga Choli"
            discount="50-80% OFF"
          />
          <Product2
            image="https://sereki.in/cdn/shop/products/DSC_8440.jpg?v=1634211034&width=1445"
            type="Lehenga Saree"
            discount="40% to 60% off"
          />
        </div>
        <video
          src={KurtaPajama}
          type="video/mp4"
          autoPlay
          muted
          loop
          className="indianHandloom_video"
        />

        <div className="indianHandloom_row">
          <Product2
            image="https://afbrand.s3.ap-south-1.amazonaws.com/images/items/Pari-Pink-Sophisticated-Kanjivaram-Silk-Saree-With-Pure-Zari-Weaving-1_9f37299.webp"
            type="Cotton Kurta Pajama"
            discount="20% to 30% off"
          />
          <Product2
            image="https://media.shopkund.com/media/catalog/product/cache/3/image/9df78eab33525d08d6e5fb8d27136e95/p/r/prt10241-1banarasi-silk-banarasi-saree-in-maroon-with-weaving-sr24575_1_.jpg"
            type="Silk Kurta Pajama"
            discount="20% to 30% off"
          />
          <Product2
            image="https://static3.azafashions.com/tr:w-450/uploads/product_gallery/1654414-0048947001659947361.jpg"
            type="Pathani Kurta Pajama"
            discount="50-80% OFF"
          />
          <Product2
            image="https://5.imimg.com/data5/SELLER/Default/2023/2/QT/KF/YW/18451800/fancy-designer-bandhani-sarees.jpeg"
            type="Sherwani Kurta Pajama"
            discount="20% to 30% off"
          />
          <Product2
            image="https://i.pinimg.com/736x/66/ae/e5/66aee5cfb5cc35c5066c2ee66e8fde2c.jpg"
            type="Linen Kurta Pajama"
            discount="50-80% OFF"
          />
          <Product2
            image="https://medias.utsavfashion.com/media/catalog/product/cache/1/image/1000x/040ec09b1e35df139433887a97daa66f/h/a/handloom-cotton-tant-saree-in-navy-blue-v1-suua49.jpg"
            type="Embroidered Kurta Pajama"
            discount="20% to 30% off"
          />
          <Product2
            image="https://i0.wp.com/utkalikaodisha.com/wp-content/uploads/2023/09/Utkalika__BS21__silk_set290_sowmyasri_side__2023-9-7-16-28-45__1200X1200.jpg?fit=1200%2C1200&ssl=1"
            type="Printed Kurta Pajama"
            discount="50-80% OFF"
          />
          <Product2
            image="https://ik.imagekit.io/bhsa3gea8yj/products/tr:w-1200/2024/jan-24/Chanderi-Saree-with-Embroidery-work-In-Multicolour-Colour-SR05649168-A.jpg"
            type="Jodhpuri Kurta Pajama"
            discount="20% to 30% off"
          />
          <Product2
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_19QIMtxytpCNiAEj538ZlNEAlH9FEDa80w&s"
            type="Party Wear Kurta Pajama"
            discount="50-80% OFF"
          />
        </div>
        <video
          src={Salwarkameez}
          type="video/mp4"
          autoPlay
          muted
          loop
          className="indianHandloom_video"
        />

        <div className="indianHandloom_row">
          <Product2
            image="https://afbrand.s3.ap-south-1.amazonaws.com/images/items/Pari-Pink-Sophisticated-Kanjivaram-Silk-Saree-With-Pure-Zari-Weaving-1_9f37299.webp"
            type="Anarkali Salwar Kameez"
            discount="40% to 60% off"
          />
          <Product2
            image="https://media.shopkund.com/media/catalog/product/cache/3/image/9df78eab33525d08d6e5fb8d27136e95/p/r/prt10241-1banarasi-silk-banarasi-saree-in-maroon-with-weaving-sr24575_1_.jpg"
            type="Punjabi Salwar Kameez"
            discount="40% to 60% off"
          />
          <Product2
            image="https://static3.azafashions.com/tr:w-450/uploads/product_gallery/1654414-0048947001659947361.jpg"
            type="Palazzo Salwar Kameez"
            discount="50-80% OFF"
          />
          <Product2
            image="https://5.imimg.com/data5/SELLER/Default/2023/2/QT/KF/YW/18451800/fancy-designer-bandhani-sarees.jpeg"
            type="Churidar Salwar Kameez"
            discount="40% to 60% off"
          />
          <Product2
            image="https://i.pinimg.com/736x/66/ae/e5/66aee5cfb5cc35c5066c2ee66e8fde2c.jpg"
            type="Straight Cut Salwar Kameez"
            discount="50-80% OFF"
          />
          <Product2
            image="https://medias.utsavfashion.com/media/catalog/product/cache/1/image/1000x/040ec09b1e35df139433887a97daa66f/h/a/handloom-cotton-tant-saree-in-navy-blue-v1-suua49.jpg"
            type="Patiala Salwar Kameez"
            discount="40% to 60% off"
          />
          <Product2
            image="https://i0.wp.com/utkalikaodisha.com/wp-content/uploads/2023/09/Utkalika__BS21__silk_set290_sowmyasri_side__2023-9-7-16-28-45__1200X1200.jpg?fit=1200%2C1200&ssl=1"
            type="Sharara Salwar Kameez"
            discount="50-80% OFF"
          />
          <Product2
            image="https://ik.imagekit.io/bhsa3gea8yj/products/tr:w-1200/2024/jan-24/Chanderi-Saree-with-Embroidery-work-In-Multicolour-Colour-SR05649168-A.jpg"
            type="Abaya Style Salwar Kameez"
            discount="40% to 60% off"
          />
          <Product2
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_19QIMtxytpCNiAEj538ZlNEAlH9FEDa80w&s"
            type="Designer Salwar Kameez"
            discount="50-80% OFF"
          />
          <Product2
            image="https://sereki.in/cdn/shop/products/DSC_8440.jpg?v=1634211034&width=1445"
            type="Party Wear Salwar Kameez"
            discount="70% to 80% off"
          />
        </div>
        <video
          src={Dupatta}
          type="video/mp4"
          autoPlay
          muted
          loop
          className="indianHandloom_video"
        />

        <div className="indianHandloom_row">
          <Product2
            image="https://3.bp.blogspot.com/-
VRT2nD1Bp44/UZVEZeXJwSI/AAAAAAAAxOM/4f6T
8lXuYVU/s1600/Designer+Phulkari+Dupatta+2013.j
pg"
            type="Phulkari Dupatta"
            discount="70% to 80% off"
          />
          <Product2
            image="https://media.vogue.in/wpcontent/uploads/2020/11/Dupatta-BanarasiStyle.jpg"
            type="Banarasi Dupatta"
            discount="70% to 80% off"
          />
          <Product2
            image="https://cdn0.weddingwire.in/articles/images/9/3/9
/5/img_35939/bandhani-dupatta-sabyasachigreen.jpg"
            type="Bandhani Dupatta"
            discount="50-80% OFF"
          />
          <Product2
            image="https://cdns.faridagupta.com/media/catalog/produ
ct/full_image/1/_/1_165_2.jpg"
            type="Chiffon Dupatta"
            discount="70% to 80% off"
          />
          <Product2
            image="https://cdn.shopify.com/s/files/1/1073/2728/produ
cts/DB1587_2_1024x1024.jpg?v=1611300402"
            type="Georgette Dupatta"
            discount="50-80% OFF"
          />
          <Product2
            image="https://static3.azafashions.com/uploads/product_g
allery/1592271_2-0565562001580826482.jpg"
            type="Silk Dupatta"
            discount="70% to 80% off"
          />
          <Product2
            image="https://i.etsystatic.com/16963724/r/il/260fc9/2213
011164/il_794xN.2213011164_et7n.jpg"
            type="Net Dupatta"
            discount="50-80% OFF"
          />
          <Product2
            image="https://cdn.shopify.com/s/files/1/1073/2728/produ
cts/DB1419_314f03cf-7bbb-474f-8074-
a3ad561b5aaa_2048x2048.jpg?v=1602924966"
            type="Cotton Dupatta"
            discount="70% to 80% off"
          />
          <Product2
            image="https://cdn.exoticindia.com/shawls-2019/swq96-
oxbloodred_a01.jpg"
            type="Velvet Dupatta"
            discount="50-80% OFF"
          />
          <Product2
            image="https://tse4.mm.bing.net/th?id=OIP.kfoviy10d
w8lbTdVrpdN4QHaLO&pid=Api&P=0&h=180"
            type="Kanjivaram Dupatta"
            discount="70% to 80% off"
          />
        </div>
        <video
          src={Printing}
          type="video/mp4"
          autoPlay
          muted
          loop
          className="indianHandloom_video"
        />

        <div className="indianHandloom_row">
          <Product2
            image="https://anahytaarora.com/cdn/shop/files/ARV09344copy_1445x.jpg?v=1683107241"
            type="Block Printing"
            discount="20% to 30% off"
          />
          <Product2
            image="https://cdn.prod.website-files.com/5ccc8aa73871f9d12dc81c1b/631ba030306d523204feb5f1_RT_LifestyleShoot_Dec21-030.jpg"
            type="Screen Printing"
            discount="20% to 30% off"
          />
          <Product2
            image="https://d1xv5jidmf7h0f.cloudfront.net/circleone/images/products_gallery_images/Custom-Printed-T-Shirt-Round-Neck.jpg"
            type="Digital Printing"
            discount="50-80% OFF"
          />
          <Product2
            image="https://static1.squarespace.com/static/5a802676b7411c2497540b80/5a8036ffe4966bd4a41acddb/6142f44b8b2ce51b22e0de26/1631779785638/SPG%2BPRINTS%2B-%2BTEXINTEL%2B-%2BDIGITAL%2BTEXTILE%2BPRINTING.jpg?format=1500w"
            type="Rotary Printing"
            discount="20% to 30% off"
          />
          <Product2
            image="https://img2.tradewheel.com/uploads/images/products/2/8/the-bear-heat-transfer-printing-american-flag-for-jackets-jeans-t-shirt-clothing-large-patch1-0490789001621348995-300-.png.webp"
            type="Heat Transfer Printing"
            discount="50-80% OFF"
          />
          <Product2
            image="https://imprintsolution.co.in/wp-content/uploads/2021/02/sublimation-printing.jpg"
            type="Sublimation Printing"
            discount="20% to 30% off"
          />
          <Product2
            image="https://i0.wp.com/secondskinblog.com/wp-content/uploads/2016/07/stencil-printed-t-shirtgold.jpg?fit=684%2C1000&ssl=1"
            type="Stencil Printing"
            discount="50-80% OFF"
          />
          <Product2
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfBiPQ4kcp5xAL_aUo1VFzxe560CI7L-zt-g&s"
            type="Discharge Printing"
            discount="20% to 30% off"
          />
          <Product2
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxuewDiGz434hmrjinbNQBc9ucJCKp-9jOlg&s"
            type="Pigment Printing"
            discount="50-80% OFF"
          />
          <Product2
            image="https://static.wixstatic.com/media/4f8450_9cd7b2093d444a1fa5d1aa7db0e20320~mv2.jpeg/v1/fill/w_662,h_724,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/soundarya-digital-fabric-prints-brandingstyle-minimalist-professionalcontent-a-mock-up-of-.jpeg

"
            type="Reactive Printing"
            discount="20% to 30% off"
          />
        </div>
        <video
          src={Embrioidary}
          type="video/mp4"
          autoPlay
          muted
          loop
          className="indianHandloom_video"
        />

        <div className="indianHandloom_row">
          <Product2
            image="https://5.imimg.com/data5/SELLER/Default/2022/1/XW/RU/RE/145550161/zardozi-work-lehenga-500x500.jpg"
            type="Zardozi Embroidery"
            discount="Discount Info"
          />
          <Product2
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW-xmm52x6cB8YYuEueTSrxkN5DNHIvw7Euw&s"
            type="Chikankari Embroidery"
            discount="40% to 60% off"
          />
          <Product2
            image="https://i.pinimg.com/originals/3c/21/4d/3c214d60ad4dd167c2d810b93284c3a7.jpg"
            type="Kantha Embroidery"
            discount="50-80% OFF"
          />
          <Product2
            image="https://i.pinimg.com/236x/f5/98/3f/f5983fc7689061f6ee7428cd5d91062e.jpg"
            type="Phulkari Embroidery"
            discount="40% to 60% off"
          />
          <Product2
            image="https://sunasa.in/cdn/shop/files/hand-embroidery-kutch-mirror-work-banarasi-silk-red-bandhej-bridal-saree-online.jpg?v=1704108586"
            type="Mirror Work Embroidery"
            discount="50-80% OFF"
          />
          <Product2
            image="https://saffronthreadsclothing.com/cdn/shop/files/4335_1_1080x1440.png?v=1708425614"
            type="Kashida Embroidery"
            discount="40% to 60% off"
          />
          <Product2
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaXa2tlCaoXzODCcntxteZTj0tKiTnxesx0g&s"
            type="Aari Embroidery"
            discount="50-80% OFF"
          />
          <Product2
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmzOperf3PORNE5LfqlvSoT9Kl06oErMf5yw&s"
            type="Parsi Embroidery"
            discount="40% to 60% off"
          />
          <Product2
            image="https://www.meerasplussizestore.com/cdn/shop/products/Black-Kutch-AnarkaliSCL_3463.jpg?v=1681993244&width=2000"
            type="Kutch Embroidery"
            discount="50-80% OFF"
          />
          <Product2
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY_wD4eHlYpqBuQFHeD5Hz02U8qnZA01GQUA&s"
            type="Beadwork Embroidery"
            discount="40% to 60% off"
          />
        </div>
        <video
          src={Dyeing}
          type="video/mp4"
          autoPlay
          muted
          loop
          className="indianHandloom_video"
        />

        <div className="indianHandloom_row">
          <Product2
            image="https://www.javinishka.com/cdn/shop/products/PBP73414-Edit.jpg?v=1647497895"
            type="Tie and Dye"
            discount="40% to 60% off"
          />
          <Product2
            image="https://bongchong.in/wp-content/uploads/2023/06/IMG_3774_075914.webp"
            type="Batik Dyeing"
            discount="70% to 80% off"
          />
          <Product2
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjbn-UlYwTFF6iloo5W9bUKlEpwqZq3gn6TA&s"
            type="Shibori Dyeing"
            discount="50-80% OFF"
          />
          <Product2
            image="https://www.vanivrtti.com/cdn/shop/files/DSC_8171_f22db443-f74e-411c-b71b-51481bd6961d.jpg?v=1690903210&width=2048"
            type="Ikat Dyeing"
            discount="70% to 80% off"
          />
          <Product2
            image="https://sepiastories.in/wp-content/uploads/2023/10/BRITTO-ORGANIC-COTTON-OMBRE-DYE-SHIRT1.webp"
            type="Ombre Dyeing"
            discount="50-80% OFF"
          />
          <Product2
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHNDHIu5M7LdPibJwOF3v1IrP4OjBsyxzYZA&s"
            type="Space Dyeing"
            discount="70% to 80% off"
          />
          <Product2
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmZKug3gCawV5xawRkfmrnuAZ8EY8KsQmj6Q&s"
            type="Acid Dyeing"
            discount="50-80% OFF"
          />
          <Product2
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCfK4AVWB1-lxH5WsNjqppfG-00q-JHybzvw&s"
            type="Vat Dyeing"
            discount="70% to 80% off"
          />
          <Product2
            image="https://cdn.shopify.com/s/files/1/0240/6641/files/UNMZWB5_large.jpg?v=1536764885"
            type="Reactive Dyeing"
            discount="50-80% OFF"
          />
          <Product2
            image="https://5.imimg.com/data5/SELLER/Default/2021/10/NG/SP/WX/108789424/tie-dye-tshirt-250x250.jpeg
"
            type="Direct Dyeing"
            discount="70% to 80% off"
          />
        </div>
        <video
          src={Handloom}
          type="video/mp4"
          autoPlay
          muted
          loop
          className="indianHandloom_video"
        />

        <div className="indianHandloom_row">
          <Product2
            image="https://www.tilfi.com/cdn/shop/products/FES0008NavyBlue_Roja_PureKatanSilkKadwaMeenaJanglaSaree86_1200x.jpg?v=1700026119"
            type="Banarasi Handloom"
            discount="5% to 15% off"
          />
          <Product2
            image="https://www.modvey.com/media/catalog/product/cache/c91cdcd48cddd91e2230183b89321a6b/m/o/modrar21s09a.jpg"
            type="Chanderi Handloom"
            discount="Discount Info"
          />
          <Product2
            image="https://images.cbazaar.com/images/blue-handloom-silk-kanchipuram-saree-sasom700006-u.jpg"
            type="Kanchipuram Handloom"
            discount="50-80% OFF"
          />
          <Product2
            image="https://5.imimg.com/data5/ANDROID/Default/2022/6/FQ/QK/PV/106996089/product-jpeg-500x500.jpg"
            type="Pochampally Handloom"
            discount="5% to 15% off"
          />
          <Product2
            image="https://5.imimg.com/data5/SELLER/Default/2021/8/AB/TB/VI/84781820/bhagalpuri-handloom-silk-saree.jpg"
            type="Bhagalpuri Handloom"
            discount="50-80% OFF"
          />
          <Product2
            image="https://thenmozhidesigns.com/cdn/shop/files/UntitledCapture0048.webp?v=1692267095&width=1200"
            type="Mangalagiri Handloom"
            discount="5% to 15% off"
          />
          <Product2
            image="https://www.sundariihandmade.com/cdn/shop/products/diamondajrakhkotadoriasaree5.jpg?v=1650632887&width=1920"
            type="Kota Handloom"
            discount="50-80% OFF"
          />
          <Product2
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX5caikZsQ3HmO-sftwoYkySvHYAzPl2mWig&s"
            type="Jamdani Handloom"
            discount="5% to 15% off"
          />
          <Product2
            image="https://www.monastoor.com/wp-content/uploads/2022/07/CRIMSON-RED-Patola-silk-handloom-saree-1.jpeg"
            type="Patola Handloom"
            discount="50-80% OFF"
          />
          <Product2
            image="https://uppada.com/cdn/shop/files/Kalam_Left_2_2048x.jpg?v=1614831319"
            type="Uppada Handloom"
            discount="5% to 15% off"
          />
        </div>
      </div>
    </div>
  );
}

export default IndianHandloom;
