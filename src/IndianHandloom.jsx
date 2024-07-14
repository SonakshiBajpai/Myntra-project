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
// ... later in the JSX ...

function IndianHandloom() {
  return (
    <div className="home">
      <div className="home_container">
        <img src={QUIZ} alt="Quiz" className="quiz_image" />

        <video
          src={Sarees}
          type="video/mp4"
          autoPlay
          muted
          loop
          className="home_video"
        />

        <div className="home_row">
          <Product2 image="https://afbrand.s3.ap-south-1.amazonaws.com/images/items/Pari-Pink-Sophisticated-Kanjivaram-Silk-Saree-With-Pure-Zari-Weaving-1_9f37299.webp" />
          <Product2
            image="https://media.shopkund.com/media/catalog/product/cache/3/image/9df78eab33525d08d6e5fb8d27136e95/p/r/prt10241-1banarasi-silk-banarasi-saree-in-maroon-with-weaving-sr24575_1_.jpg"
            type="Another Product Type"
            discount="Discount Info"
          />
          <Product2
            image="https://static3.azafashions.com/tr:w-450/uploads/product_gallery/1654414-0048947001659947361.jpg"
            type="Women's Ethnic Wear"
            discount="50-80% OFF"
          />
          <Product2
            image="https://5.imimg.com/data5/SELLER/Default/2023/2/QT/KF/YW/18451800/fancy-designer-bandhani-sarees.jpeg"
            type="Another Product Type"
            discount="Discount Info"
          />
          <Product2
            image="https://i.pinimg.com/736x/66/ae/e5/66aee5cfb5cc35c5066c2ee66e8fde2c.jpg"
            type="Women's Ethnic Wear"
            discount="50-80% OFF"
          />
          <Product2
            image="https://medias.utsavfashion.com/media/catalog/product/cache/1/image/1000x/040ec09b1e35df139433887a97daa66f/h/a/handloom-cotton-tant-saree-in-navy-blue-v1-suua49.jpg"
            type="Another Product Type"
            discount="Discount Info"
          />
          <Product2
            image="https://i0.wp.com/utkalikaodisha.com/wp-content/uploads/2023/09/Utkalika__BS21__silk_set290_sowmyasri_side__2023-9-7-16-28-45__1200X1200.jpg?fit=1200%2C1200&ssl=1"
            type="Women's Ethnic Wear"
            discount="50-80% OFF"
          />
          <Product2
            image="https://ik.imagekit.io/bhsa3gea8yj/products/tr:w-1200/2024/jan-24/Chanderi-Saree-with-Embroidery-work-In-Multicolour-Colour-SR05649168-A.jpg"
            type="Another Product Type"
            discount="Discount Info"
          />
          <Product2
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_19QIMtxytpCNiAEj538ZlNEAlH9FEDa80w&s"
            type="Women's Ethnic Wear"
            discount="50-80% OFF"
          />
          <Product2
            image="https://sereki.in/cdn/shop/products/DSC_8440.jpg?v=1634211034&width=1445"
            type="Another Product Type"
            discount="Discount Info"
          />
          <Product2
            image="https://www.justphulkari.com/cdn/shop/products/IMG_4894_f51ced61-827b-4c8a-a307-86886d1445a7_grande.jpg?v=1603695450"
            type="Another Product Type"
            discount="Discount Info"
          />
          <Product2
            image="https://houseofelegance.in/cdn/shop/products/IkatSilkSaree1.webp?v=1674305111"
            type="Another Product Type"
            discount="Discount Info"
          />
          <Product2
            image="https://medias.utsavfashion.com/media/catalog/product/cache/1/image/1000x/040ec09b1e35df139433887a97daa66f/h/a/handloom-pure-silk-gadwal-saree-in-light-green-v1-smua203.jpg"
            type="Another Product Type"
            discount="Discount Info"
          />
          <Product2
            image="https://theindiacrafthouse.com/cdn/shop/products/BagruSanganeriBlockPrintedKotaSaree-PhoolBahar_WithoutBlousePiece_-BKICH19@2x.jpg"
            discount="Discount Info"
          />
        </div>

        <video
          src={Lehenga}
          type="video/mp4"
          autoPlay
          muted
          loop
          className="home_video"
        />

        <div className="home_row">
          <Product2
            image="https://5.imimg.com/data5/CG/BQ/MY-26152501/heavy-bridal-lehenga.jpeg"
            type="Another Product Type"
            discount="Discount Info"
          />
          <Product2
            image="https://i.etsystatic.com/24350686/r/il/8a5d96/306656320
0/il_1588xN.3066563200_3rog.jpg"
            type="Another Product Type"
            discount="Discount Info"
          />
          <Product2
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7yHkWtCPG-x4PAoUOpa28hmsJ1_nGCT3BsQ&s"
            type="Women's Ethnic Wear"
            discount="50-80% OFF"
          />
          <Product2
            image="https://assets.vogue.in/photos/5f6c7a4c10dbc0617e889b1
8/2:3/w_2732%2cc_limit/Shraddha%20Kapoor%20in%20Falg
uni%20Shane%20Peacock%20lehenga%20from%20India%20
Couture%20Week%202020.jpg"
            type="Another Product Type"
            discount="Discount Info"
          />
          <Product2
            image="http://hunardesigns.com/wpcontent/uploads/2016/11/5.jpg"
            type="Another Product Type"
            discount="Discount Info"
          />
          <Product2
            image="https://medias.utsavfashion.com/media/catalog/product/c
ache/1/image/500x/040ec09b1e35df139433887a97daa66f/e
/m/embroidered-chinon-chiffon-lehenga-in-sky-blue-v1-
lcz103.jpg"
            type="Women's Ethnic Wear"
            discount="50-80% OFF"
          />
          <Product2
            image="https://tse4.mm.bing.net/th?id=OIP.bQFSiCnkoZ13NRRZxd
W9agHaLH&pid=Api&P=0&h=180.jpg"
            type="Another Product Type"
            discount="Discount Info"
          />
          <Product2
            image="https://i.pinimg.com/originals/ab/99/1c/ab991c574c06269
189badf51b0a02c02.jpg"
            type="Another Product Type"
            discount="Discount Info"
          />
          <Product2
            image="https://www.omsara.co.uk/wp-content/uploads/4804.-1-1-
1595x2048.jpeg"
            type="Women's Ethnic Wear"
            discount="50-80% OFF"
          />
          <Product2
            image="https://getethnic.com/wpcontent/uploads/2020/06/11HJHJHJHJHJcrackjackphotograp
hy.jpg"
            type="Another Product Type"
            discount="Discount Info"
          />
        </div>

        <video
          src={KurtaPajama}
          type="video/mp4"
          autoPlay
          muted
          loop
          className="home_video"
        />

        <div className="home_row">
          <Product2
            image="https://tse3.mm.bing.net/th?id=OIP.q5HS7lsA9R2ayhDaBxYggHaKL&pid=Api&P=0&h=180"
            type="Another Product Type"
            discount="Discount Info"
          />
          <Product2
            image="https://images.wholesalesalwar.com/2020y/March/156
13/White-Silk-Festival-Wear-Printed-Work-KurtaPajama-With-Jacket-1414.jpg"
            type="Another Product Type"
            discount="Discount Info"
          />
          <Product2
            image="https://i.etsystatic.com/30848045/r/il/8cf101/35331636
72/il_570xN.3533163672_7lrn.jpg"
            type="Women's Ethnic Wear"
            discount="50-80% OFF"
          />
          <Product2
            image="https://www.parivarceremony.com/media/catalog/prod
uct/cache/62408a38a401bb86dbe3ed2f017b539f/p/1/p
1013mw21_1.jpg"
            type="Another Product Type"
            discount="Discount Info"
          />
          <Product2
            image="https://i.etsystatic.com/22388648/r/il/99ae9a/2588499
147/il_fullxfull.2588499147_p57q.jpg"
            type="Another Product Type"
            discount="Discount Info"
          />
          <Product2
            image="https://www.nihalfashions.com/blog/wpcontent/uploads/2010/12/Linen-Kurta-Pajama-NihalFashions.jpg"
            type="Women's Ethnic Wear"
            discount="50-80% OFF"
          />
          <Product2
            image="https://i.etsystatic.com/23727656/r/il/f9bcfc/24919001
01/il_fullxfull.2491900101_nff0.jpg"
            type="Another Product Type"
            discount="Discount Info"
          />
          <Product2
            image="https://images.wholesalesalwar.com/2020y/March/156
13/White-Silk-Festival-Wear-Printed-Work-KurtaPajama-With-Jacket-1414.jpg"
            type="Another Product Type"
            discount="Discount Info"
          />
          <Product2
            image=""
            type="https://i.etsystatic.com/25780805/r/il/2c3c80/3397815
105/il_1080xN.3397815105_1vc3.jpg"
            discount="50-80% OFF"
          />
          <Product2
            image="https://5.imimg.com/data5/SELLER/Default/2021/2/
CM/KB/YB/527778/fancy-wear-kurta-payjama1000x1000.jpg"
            type="Another Product Type"
            discount="Discount Info"
          />
        </div>

        <video
          src={Salwarkameez}
          type="video/mp4"
          autoPlay
          muted
          loop
          className="home_video"
        />

        <div className="home_row">
          <Product2
            image="https://path/to/another/image.jpg"
            type="Another Product Type"
            discount="Discount Info"
          />
          <Product2
            image="https://path/to/another/image.jpg"
            type="Another Product Type"
            discount="Discount Info"
          />
          <Product2 image="" type="Women's Ethnic Wear" discount="50-80% OFF" />
          <Product2
            image="https://path/to/another/image.jpg"
            type="Another Product Type"
            discount="Discount Info"
          />
          <Product2
            image="https://path/to/another/image.jpg"
            type="Another Product Type"
            discount="Discount Info"
          />
          <Product2 image="" type="Women's Ethnic Wear" discount="50-80% OFF" />
          <Product2
            image="https://path/to/another/image.jpg"
            type="Another Product Type"
            discount="Discount Info"
          />
          <Product2
            image="https://path/to/another/image.jpg"
            type="Another Product Type"
            discount="Discount Info"
          />
          <Product2 image="" type="Women's Ethnic Wear" discount="50-80% OFF" />
          <Product2
            image="https://path/to/another/image.jpg"
            type="Another Product Type"
            discount="Discount Info"
          />
        </div>

        <video
          src={Dupatta}
          type="video/mp4"
          autoPlay
          muted
          loop
          className="home_video"
        />

        <div className="home_row">
          <Product2
            image="https://path/to/another/image.jpg"
            type="Another Product Type"
            discount="Discount Info"
          />
          <Product2
            image="https://path/to/another/image.jpg"
            type="Another Product Type"
            discount="Discount Info"
          />
          <Product2 image="" type="Women's Ethnic Wear" discount="50-80% OFF" />
          <Product2
            image="https://path/to/another/image.jpg"
            type="Another Product Type"
            discount="Discount Info"
          />
          <Product2
            image="https://path/to/another/image.jpg"
            type="Another Product Type"
            discount="Discount Info"
          />
          <Product2 image="" type="Women's Ethnic Wear" discount="50-80% OFF" />
          <Product2
            image="https://path/to/another/image.jpg"
            type="Another Product Type"
            discount="Discount Info"
          />
          <Product2
            image="https://path/to/another/image.jpg"
            type="Another Product Type"
            discount="Discount Info"
          />
          <Product2 image="" type="Women's Ethnic Wear" discount="50-80% OFF" />
          <Product2
            image="https://path/to/another/image.jpg"
            type="Another Product Type"
            discount="Discount Info"
          />
        </div>

        <video
          src={Printing}
          type="video/mp4"
          autoPlay
          muted
          loop
          className="home_video"
        />

        <div className="home_row">
          <Product2
            image="https://i.etsystatic.com/10798058/r/il/e75f28/21
77327596/il_fullxfull.2177327596_26z9.jpg\"
            type="Another Product Type"
            discount="Discount Info"
          />
          <Product2
            image=" https://i.pinimg.com/originals/49/67/9b/49679b
cae6f31a90b02c3c36009386c6.jpg"
            type="Another Product Type"
            discount="Discount Info"
          />
          <Product2
            image="https://mymodernmet.com/wp/wpcontent/uploads/archive/K4JwzOWLqyJGLlXYX90
E_NoaRaviv14.jpg"
            type="Women's Ethnic Wear"
            discount="50-80% OFF"
          />
          <Product2
            image="https://mir-s3-cdncf.behance.net/projects/max_808/92ed3886883
079.Y3JvcCwzMTUyLDI0NjYsMCww.jpg"
            type="Another Product Type"
            discount="Discount Info"
          />
          <Product2
            image="https://i.pinimg.com/originals/2a/18/8e/2a188e
97b7c67d97dd7d1455fdf9108c.png"
            type="Another Product Type"
            discount="Discount Info"
          />
          <Product2
            image="https://tse2.mm.bing.net/th?id=OIP.7xpyAoZV0g
FJRHBPzxQZsQHaGy&pid=Api&P=0&h=180"
            type="Women's Ethnic Wear"
            discount="50-80% OFF"
          />
          <Product2
            image="https://tse4.explicit.bing.net/th?id=OIP.PLRMmx
1lGeOEGEGEIfTPGAHaJ4&pid=Api&P=0&h=180"
            type="Another Product Type"
            discount="Discount Info"
          />
          <Product2
            image=" https://i.pinimg.com/originals/0f/56/0a/0f560a5
b548bb5f0a45c36b91d89ad59.jpg"
            type="Another Product Type"
            discount="Discount Info"
          />
          <Product2
            image="https://4.imimg.com/data4/RX/JT/MY8175166/1-1000x1000.png"
            type="Women's Ethnic Wear"
            discount="50-80% OFF"
          />
          <Product2
            image=" https://i.pinimg.com/736x/6d/b7/65/6db765d
aac732b3a4e6bfb01535d2f3e.jpg"
            type="Another Product Type"
            discount="Discount Info"
          />
        </div>

        <video
          src={Embrioidary}
          type="video/mp4"
          autoPlay
          muted
          loop
          className="home_video"
        />

        <div className="home_row">
          <Product2
            image="https://5.imimg.com/data5/SELLER/Default/2022/1/XW/RU/RE/145550161/zardozi-work-lehenga-500x500.jpg"
            type="Another Product Type"
            discount="Discount Info"
          />
          <Product2
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW-xmm52x6cB8YYuEueTSrxkN5DNHIvw7Euw&s"
            type="Another Product Type"
            discount="Discount Info"
          />
          <Product2
            image="https://i.pinimg.com/originals/3c/21/4d/3c214d60ad4dd167c2d810b93284c3a7.jpg
"
            type="Women's Ethnic Wear"
            discount="50-80% OFF"
          />
          <Product2
            image="https://i.pinimg.com/236x/f5/98/3f/f5983fc7689061f6ee7428cd5d91062e.jpg"
            type="Another Product Type"
            discount="Discount Info"
          />
          <Product2
            image="https://sunasa.in/cdn/shop/files/hand-embroidery-kutch-mirror-work-banarasi-silk-red-bandhej-bridal-saree-online.jpg?v=17041085867"
            type="Another Product Type"
            discount="Discount Info"
          />
          <Product2 image="" type="Women's Ethnic Wear" discount="50-80% OFF" />
          <Product2
            image="https://saffronthreadsclothing.com/cdn/shop/files/4335_1_1080x1440.png?v=1708425614"
            type="Another Product Type"
            discount="Discount Info"
          />
          <Product2
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaXa2tlCaoXzODCcntxteZTj0tKiTnxesx0g&s"
            type="Another Product Type"
            discount="Discount Info"
          />
          <Product2 image="" type="Women's Ethnic Wear" discount="50-80% OFF" />
          <Product2
            image="https://path/to/another/image.jpg"
            type="Another Product Type"
            discount="Discount Info"
          />
        </div>

        <video
          src={Dyeing}
          type="video/mp4"
          autoPlay
          muted
          loop
          className="home_video"
        />

        <div className="home_row">
          <Product2
            image="https://path/to/another/image.jpg"
            type="Another Product Type"
            discount="Discount Info"
          />
          <Product2
            image="https://path/to/another/image.jpg"
            type="Another Product Type"
            discount="Discount Info"
          />
          <Product2 image="" type="Women's Ethnic Wear" discount="50-80% OFF" />
          <Product2
            image="https://path/to/another/image.jpg"
            type="Another Product Type"
            discount="Discount Info"
          />
          <Product2
            image="https://path/to/another/image.jpg"
            type="Another Product Type"
            discount="Discount Info"
          />
          <Product2 image="" type="Women's Ethnic Wear" discount="50-80% OFF" />
          <Product2
            image="https://path/to/another/image.jpg"
            type="Another Product Type"
            discount="Discount Info"
          />
          <Product2
            image="https://path/to/another/image.jpg"
            type="Another Product Type"
            discount="Discount Info"
          />
          <Product2 image="" type="Women's Ethnic Wear" discount="50-80% OFF" />
          <Product2
            image="https://path/to/another/image.jpg"
            type="Another Product Type"
            discount="Discount Info"
          />
        </div>

        <video
          src={Handloom}
          type="video/mp4"
          autoPlay
          muted
          loop
          className="home_video"
        />

        <div className="home_row">
          <Product2
            image="https://path/to/another/image.jpg"
            type="Another Product Type"
            discount="Discount Info"
          />
          <Product2
            image="https://path/to/another/image.jpg"
            type="Another Product Type"
            discount="Discount Info"
          />
          <Product2 image="" type="Women's Ethnic Wear" discount="50-80% OFF" />
          <Product2
            image="https://path/to/another/image.jpg"
            type="Another Product Type"
            discount="Discount Info"
          />
          <Product2
            image="https://path/to/another/image.jpg"
            type="Another Product Type"
            discount="Discount Info"
          />
          <Product2 image="" type="Women's Ethnic Wear" discount="50-80% OFF" />
          <Product2
            image="https://path/to/another/image.jpg"
            type="Another Product Type"
            discount="Discount Info"
          />
          <Product2
            image="https://path/to/another/image.jpg"
            type="Another Product Type"
            discount="Discount Info"
          />
          <Product2 image="" type="Women's Ethnic Wear" discount="50-80% OFF" />
          <Product2
            image="https://path/to/another/image.jpg"
            type="Another Product Type"
            discount="Discount Info"
          />
        </div>
      </div>
    </div>
  );
}

export default IndianHandloom;
