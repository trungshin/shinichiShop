var product = [
    {
        "ID" : "1",
        "Image" : "https://ae01.alicdn.com/kf/HTB1R5SudQxz61VjSZFrq6xeLFXao/Logitech-wireless-mouse-G304-gaming-mouse-wireless-2-4Ghz-with-12000DPI-Optical-mouse-by-logitech-for.jpg_220x220xz.jpg_.webp",
        "Name" : "Logitech wireless mouse G304",
        "Price" : "US $39.17"
    },
    {
        "ID" : "2",
        "Image" : "https://ae01.alicdn.com/kf/He03f9cb4005f45ee989e8aae27086289K.jpg_220x220q90.jpg_.webp",
        "Name" : "Magnetic Cable Micro USB",
        "Price" : "US $0.69"
    },
    {
        "ID" : "3",
        "Image" : "https://salt.tikicdn.com/cache/200x200/ts/product/d9/69/42/11529bbb02e8c5e803570e86eabf3ba3.jpg",
        "Name" : "Mofii Wireless Keyboard And Mouse",
        "Price" : "US $16.32"
    },
    {
        "ID" : "4",
        "Image" : "https://ae01.alicdn.com/kf/Hc87caa0f90ce41e3a3bffdd229d330a1R.jpg_220x220q90.jpg_.webp",
        "Name" : "Air3 TWS V5.0 Wireless Stereo Bluetooth Earphones",
        "Price" : "US $12.77"
    },
    {
        "ID" : "5",
        "Image" : "https://ae01.alicdn.com/kf/H3f0041388dcc4e6da13a8babac3088bfj/M3-Smart-Tracker-Band-Wristband-Blood-Pressure-Heart-Rate-Monitor-Pedometer-Sports-Health-Fitness-Bracelet-For.jpg_220x220xz.jpg_.webp",
        "Name" : "M3 Smart Tracker Band Wristband",
        "Price" : "US $1.32 - 4.38"
    },
    {
        "ID" : "6",
        "Image" : "https://salt.tikicdn.com/cache/200x200/ts/product/e0/ab/3e/01ee615144aee3f0c0b31160e7b4b856.jpg",
        "Name" : "Programmable Music Robot",
        "Price" : "US $34.79"
    },
    {
        "ID" : "7",
        "Image" : "https://salt.tikicdn.com/cache/200x200/ts/product/1f/37/8e/ee53548f8638b5ff518ebf4bf4370faf.jpg",
        "Name" : "Bluetooth Gaming Controller",
        "Price" : "US $8.09"
    },
    {
        "ID" : "8",
        "Image" : "https://salt.tikicdn.com/cache/200x200/ts/product/7d/ab/0e/1f8f72a05b9df163871f140929038452.jpg",
        "Name" : "Smart Wireless WiFi Router",
        "Price" : "US $27.73"
    },
    {
        "ID" : "9",
        "Image" : "https://salt.tikicdn.com/cache/200x200/ts/product/0a/3b/ac/c6ac454fd1b4c424462f74e605a3537a.jpg",
        "Name" : "Xiaomi wireless backup battery",
        "Price" : "US $22.56"
    },
    {
        "ID" : "10",
        "Image" : "https://ae01.alicdn.com/kf/Hbeb75c7a78874ebcbe19cec584456302e/Huawei-Bluetooth-speaker-Portable-Wireless-Loudspeakers-For-Phone-Computer-Stereo-Music-surround-Waterproof-Outdoor-Speakers-Box.jpg_220x220xz.jpg_.webp",
        "Name" : "Huawei Bluetooth speaker Portable Wireless",
        "Price" : "US $23.65"
    },
    {
        "ID" : "11",
        "Image" : "https://salt.tikicdn.com/cache/200x200/ts/product/44/b0/8a/5c398fff0300666cec208ab773ea5d6e.jpg",
        "Name" : "Xiaomi Mi 9 Lite Phone",
        "Price" : "US $193.31"
    },
    {
        "ID" : "12",
        "Image" : "https://salt.tikicdn.com/cache/200x200/ts/product/52/69/70/056a48cb0c06f40a3f6d33a3bef49bec.jpg",
        "Name" : "iPad Air 10.5 Wi-Fi 64GB",
        "Price" : "US $536.00"
    }
];

for(var i = 0; i < product.length; ++i) {
    var product_div = document.createElement('div');
    product_div.classList.add('product');
    product_div.id = product[i].ID;

    var product_img = document.createElement('img');
    product_img.src = product[i].Image;
    product_img.id = product[i].ID;

    var product_h3 = document.createElement('h3');
    product_h3.classList.add('product_name');
    product_h3.id = product[i].ID;
    product_h3.appendChild(document.createTextNode(product[i].Name));

    var product_p = document.createElement('p');
    product_p.classList.add('product_price');
    product_p.id = product[i].ID;
    product_p.appendChild(document.createTextNode(product[i].Price));


    product_div.appendChild(product_img);
    product_div.appendChild(product_h3);
    product_div.appendChild(product_p);

    product_div.addEventListener("click", function(event) {
        localStorage.setItem("productID", event.target.id);
        window.open("Pages/ProductsPage/product1.html", "_self");
    });

    document.getElementById('productlist').appendChild(product_div);
}

/******************** SLIDESHOW ********************/
var ss_img = document.getElementById('slideshow-image');
var ss_img_list = [ 
    "https://genk.mediacdn.vn/thumb_w/640/2018/5/24/httpchannelvcmediavnprupload156201805img20180524092103530-15271318634142104549745.jpg",
    "https://ae01.alicdn.com/kf/H3896e5708e464a73bd94b9448a1a6ee3Q.png_.webp",
    "https://i2.wp.com/geoawesomeness.com/wp-content/uploads/2014/12/lbm.png?fit=525%2C394&ssl=1",
    "https://i1.wp.com/geoawesomeness.com/wp-content/uploads/2015/09/location-based-advertising-mobile.jpg?resize=665%2C310&ssl=1",
    "https://ae01.alicdn.com/kf/HTB1eNK8LpXXXXblXVXXq6xXFXXXl/205935023/HTB1eNK8LpXXXXblXVXXq6xXFXXXl.jpg",
    "https://ae01.alicdn.com/kf/H54c222837698444aac96474949ca4ec6u.png_.webp"
  ];

var ss_num = ss_img_list.length;
var ss_pos = 0;

ss_img.src = ss_img_list[ss_pos];

setInterval(ss_run, 3000);

function ss_run() {
    if(ss_pos == ss_num) {
    ss_pos = 0;
    }

    ss_img.src = ss_img_list[ss_pos];

    ++ss_pos;
}
