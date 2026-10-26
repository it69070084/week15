const foodList = [
  {
    name: "ข้าวมันไก่",
    desc: "น้ำจิ้มเด็ด น้ำซุปร้อนๆ หอมนุ่ม",
    price: "50-65",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPJGqep_3ExRtiz9zT2GyZawa1tjoUrW8yn63TbgNHjacZnfAKnTcVZoWN&s=10"
  },
  {
    name: "ก๋วยเตี๋ยวเรือ",
    desc: "เข้มข้น กลมกล่อม อร่อยไม่ต้องปรุงเพิ่ม",
    price: "45-60",
    image: "https://f.ptcdn.info/954/091/000/mswfc2mg1c13F8YiQ4i1aH-o.jpg"
  },
  {
    name: "ผัดไทยกุ้งสด",
    desc: "เส้นจันท์เหนียวนุ่ม ผัดซอสสูตรโบราณ",
    price: "60-80",
    image: "https://img.wongnai.com/p/1920x0/2019/05/04/15a588ebc226426f8ae18e2a6bc955f8.jpg"
  },
  {
    name: "ข้าวผัดกระเพราไข่ดาว",
    desc: "หอมกลิ่นกระเพราแท้ เผ็ดร้อนกำลังดี",
    price: "50-70",
    image: "https://www.unileverfoodsolutions.co.th/dam/global-ufs/mcos/SEA/calcmenu/recipes/TH-recipes/minced-pork-and-basil-fried-rice-with-lava-fried-egg/3be1b76f-ddbe-4f1c-a73c-0f894d66ba1c_header.jpg"
  },
  {
    name: "ส้มตำไทย ไก่ย่าง",
    desc: "แซ่บจัดจ้าน เปรี้ยวหวานครบรส พร้อมไก่ย่างหอมๆ",
    price: "80-120",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQV1BDsC-Z5tGUZIrYoUPU98GtqT64gHMbGtcSoLuDhBNqtFhTCwFgbTU&s=10"
  },
  {
    name: "ต้มยำกุ้งน้ำข้น",
    desc: "สมุนไพรจัดเต็ม กุ้งตัวโต รสชาติเข้มข้น",
    price: "120-180",
    image: "https://img.wongnai.com/p/1920x0/2017/10/19/75678af28e394fbfb473fa1b417a62fc.jpg"
  }
];

const foodImg = document.getElementById("food-img");
const foodName = document.getElementById("food-name");
const foodDesc = document.getElementById("food-desc");
const foodPrice = document.getElementById("food-price");
const randomBtn = document.getElementById("random-btn");

let currentIndex = 0;

function getRandomFood() {
  randomBtn.disabled = true;
  
  let randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * foodList.length);
  } while (randomIndex === currentIndex && foodList.length > 1);

  currentIndex = randomIndex;
  const selectedFood = foodList[currentIndex];

  foodImg.style.opacity = "0.3";

  setTimeout(() => {
    foodImg.src = selectedFood.image;
    foodName.textContent = selectedFood.name;
    foodDesc.textContent = selectedFood.desc;
    foodPrice.textContent = selectedFood.price;

    foodImg.style.opacity = "1";
    randomBtn.disabled = false;
  }, 200);
}

randomBtn.addEventListener("click", getRandomFood);