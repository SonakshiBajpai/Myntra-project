import React from "react";
import "./AnimalWellfare.css"; // Import the AnimalWellfare.css file
import Animal from "./assets/Animal.png";
// import Animal2 from "./assets/Animal2.png";
import AnimalProduct from "./AnimalProduct";

const AnimalWellfare = () => {
  return (
    <div className="animal-wellfare-background">
      <div className="home">
        <div className="home_container">
          <h1 className="Heading">Animal Wellfare</h1>
          <img src={Animal} alt="Quiz" className="Animal" />
          <div className="home_row">
            <AnimalProduct
              image="https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/25956658/2023/11/20/23da6d75-46e4-4348-b304-bf18b368a5961700489851588KALINIBrownEthnicMotifsPrintFitFlareMidiDress1.jpg"
              type="Women's Ethnic Wear"
              discount="50-80% OFF"
            />
            <AnimalProduct
              image="https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/25641102/2023/10/26/1f85073d-72fd-485d-b85d-9263517ba6021698333032166HERENOWMenNavyBlueSlimFitOpaqueCasualShirt1.jpg"
              type="WHF Casual Wear"
              discount="50-80% OFF"
            />
            <AnimalProduct
              image="https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/22189730/2023/3/2/858c0038-f9d4-4974-a33c-33525d808f191677696376256MaschSportsMenBlueTrainingorGymT-shirt1.jpg"
              type="Men's Active Wear"
              discount="50-80% OFF"
            />
            <AnimalProduct
              image="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/26817166/2024/1/7/c78210f7-b237-4c94-bcbc-5d72bfdbbd671704614043252ATHLISISWomenBlackLightweightTrainingorGymSportyJacket1.jpg"
              type="Women's Active Wear"
              discount="50-80% OFF"
            />
            <AnimalProduct
              image="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/19449786/2022/8/9/8d120e00-456e-4c24-b046-6c4188a505591660050056484Dresses1.jpg"
              type="Western Wear"
              discount="50-80% OFF"
              link="/WesternWear"
            />

            <AnimalProduct
              image="https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/22371342/2023/7/1/29878c99-b4ce-4299-8ce3-4c0c8049db281688194391223-CHKOKKO-Women-Gym-Wear-Sports-Fitness-Regular-Fit-Track-Pant-14.jpg"
              type="Sports Wear"
              discount="50-80% OFF"
            />
          </div>
          <div className="home_row">
            <AnimalProduct
              image="https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/16414310/2021/12/7/8f8d7a05-132a-42bb-a730-3695a1e9c5291638886292380HammerBashOvertheEarWirelessBluetoothHeadphoneswithMicGrey1.jpg"
              type="HeadPhones and Speakers"
              discount="50-80% OFF"
            />
            <AnimalProduct
              image="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/29290842/2024/5/2/2e2cab4c-3172-46c7-be66-f478ab0beecd1714637430424PureCottonLunarNewYearPyjamaSet1.jpg"
              type="Lounge Wear"
              discount="50-80% OFF"
            />
            <AnimalProduct
              image="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/20308116/2022/10/7/c24a791e-8004-428c-b4a6-4ba5abdf5a411665133201940SoieBlackBra1.jpg"
              type="Inner Wear"
              discount="50-80% OFF"
            />
            <AnimalProduct
              image="https://assets.ajio.com/medias/sys_master/root/20230921/meKx/650c4c2bddf7791519efcd10/-473Wx593H-466612236-black-MODEL.jpg"
              type="Watches"
              discount="50-80% OFF"
            />
            <AnimalProduct
              image="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/11882762/2023/12/8/c1c956e8-5d69-428b-8a9d-46e5e06e99701702038809191-Park-Avenue-Men-Luxury-Grooming-Collection-Kit--Travel-Pouch-1.jpg"
              type="Grooming"
              discount="50-80% OFF"
            />
            <AnimalProduct
              image="https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/25853610/2023/11/11/762bcca7-204d-4d08-afe4-ab23ee80db021699674963240MakeupKit1.jpg"
              type="Beauty and Makeup"
              discount="50-80% OFF"
            />
          </div>
          <div className="home_row">
            <AnimalProduct
              image="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/29553912/2024/5/17/5f90bc0f-c248-4bff-8a88-54128a77c4a61715927218769HRXbyHrithikRoshanUnisexTexturedSneakers1.jpg"
              type="Men's Footwear"
              discount="50-80% OFF"
            />
            <AnimalProduct
              image="https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/24559994/2023/8/19/708f5b8f-add9-4467-b164-e77eb2b73f431692449464898ToyBalloonkidsGreenNetFitFlareMidiDress1.jpg"
              type="Kids Wear"
              discount="50-80% OFF"
            />
            <AnimalProduct
              image="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/28035472/2024/3/5/bbe3d24a-ffb0-45ca-94e6-34b5921b71e01709638518217GibelleWomenColourblockedOpenToeFlatswithBows1.jpg"
              type="Women's Footwear"
              discount="50-80% OFF"
            />
            <AnimalProduct
              image="https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/13220226/2020/12/12/469e3a56-1892-4cd2-85cd-24162f0d81dc1607768183245-NAPA-HIDE-RFID-Protected-Genuine-High-Quality-Leather-Wallet-1.jpg"
              type="Bags, Belts,Wallets"
              discount="50-80% OFF"
            />
            <AnimalProduct
              image="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/29525490/2024/6/6/225fb3fc-2a6e-4ca8-9b6c-382a3e53bbac1717649142189-Blissclub-Women-Herring-Bone-Textured-Tailored-Slim-Fit-Wrin-7.jpg"
              type="Office Wear"
              discount="50-80% OFF"
            />
            <AnimalProduct
              image="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/29102908/2024/4/23/c4ea899e-e1ad-470d-bcd6-4fbd902659f31713857185268JompersMenThreadWorkKurta1.jpg"
              type="Men's Ethnic Wear"
              discount="50-80% OFF"
            />
          </div>
          <div className="home_row">
            <AnimalProduct
              image="https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/24628924/2023/9/26/ab49a2f5-023c-4b50-8a94-5b0754660e161695710402332ParagonMenColourblockedLightweightQuick-DryAnti-SkidThongFli1.jpg"
              type="Flip-Flops"
              discount="50-80% OFF"
            />
            <AnimalProduct
              image="https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/20778404/2024/3/15/bcdec80b-4e4e-40be-bbd0-8c9ac081a4761710477420882-RESIST-EYEWEAR-Adults-Green-Lens--Gold-Toned-Aviator-Sunglas-6.jpg"
              type="Eyewear"
              discount="50-80% OFF"
            />
            <AnimalProduct
              image="https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/25976986/2023/11/29/6c57725f-8ef6-4064-af87-3d27dfdf94401701237604911-Zaveri-Pearls-Gold-Plated-Stone--Beads-Studded-Jewellery-Set-1.jpg"
              type="Jewellery"
              discount="50-80% OFF"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimalWellfare;
