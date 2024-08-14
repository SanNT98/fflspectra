const HTML_INFO = `<p>
Vầng quang phổ FFL được tạo dựng bởi 5 màu sắc: đỏ, vàng, lục, lam và tìm. Mỗi màu sắc lại mang trong mình những cá tính riêng, bản chất riêng. Những màu sắc đó chính là các bạn - những người đã gps phần thắp sáng FFL, để khoa thêm phần rực rỡ và lung linh. 
<br><br>Bạn có thắc mắc, màu sắc của chính bạn là màu gì không?
</p>`

const COLORS = [
    {
        name: "MÀU ĐỎ",
        image: "do.webp",
        class: "red-neon",
        sub: "Đam mê và nhiệt huyết",
        content: "<p>Bạn là ánh sáng màu đỏ tràn đầy năng lượng, nhiệt huyết và đam mê. Bạn là người sống hết mình, dám nghĩ, dám làm và luôn hướng tới những mục tiêu lớn.<br><br> bạn có khả năng trở thành người lãnh đạo tài ba, có khả năng truyền cảm hứng và thôi thúc người khác cùng chung mục tiêu. Ngoài ra, bạn còn rất yêu đời, lạc quan và luôn tìm kiếm những trải nghiệm mới mẻ.</p>",
    },
    {
        name: "MÀU VÀNG",
        image: "vang.webp",
        class: "yellow-neon",
        sub: "Tích cực và sáng tạo",
        content: "<p>Bạn là ánh sáng màu vàng lạc quan, vui vẻ và tràn đầy năng lượng tích cực. Bạn có trí tưởng tượng phong phú, khả năng sáng tạo tuyệt vời và luôn tìm kiếm những ý tưởng mới lạ.<br><br>Bạn có tâm hồn của một người nghệ sĩ, nhà thiết kế, là người có sự sáng tạo cao. Ngoài ra, bạn còn rất thông minh, nhanh nhẹn và có khả năng thích nghi tốt với những thay đổi.</p>",
    },
    {
        name: "MÀU LAM",
        image: "lam.webp",
        class: "blue-neon",
        sub: "Tin tưởng và trung thành",
        content: "<p>Bạn là ánh sáng màu lam, rất đáng tin cậy, trung thành và có trách nhiệm. Bạn là người luôn giữ lời hứa và luôn đặt lợi ích của tập thể lên trên lợi ích cá nhân.<br><br>Trong vòng tròn bạn bè, bạn là những người bạn tốt, người đồng nghiệp đáng tin cậy và những người lãnh đạo có tầm nhìn xa trông rộng. Ngoài ra, bạn còn có một bộ óc rất thông minh, nhạy bén và có khả năng giải quyết vấn đề tốt.</p>",
    },
    {
        name: "MÀU LỤC",
        image: "luc.webp",
        class: "green-neon",
        sub: "Bình yên và chữa lành",
        content: "<p>Bạn là ánh sáng màu lục, yêu thiên nhiên, sống hòa hợp với môi trường và có tâm hồn rất bình yên. Bạn là người biết cách cân bằng cuộc sống, không quá tham vọng và luôn tìm kiếm sự hài hòa trong mọi mối quan hệ. <br><br>Bạn là người rất kiên nhẫn, nhạy cảm và có lòng trắc ẩn. Có lẽ vì lí do đó mà có nhiều người bạn của bạn tìm đến bạn như một liều thuốc healing tâm hồn đó.</p>",
    },
    {
        name: "MÀU TÍM",
        image: "tim.webp",
        class: "purple-neon",
        sub: "Bí ẩn và sáng tạo",
        content: "<p>Bạn là ánh sáng màu tím, rất nhạy cảm, có trí tưởng tượng phong phú và rất quan tâm đến những điều huyền bí. Bạn là một cá thế độc lập, có cá tính riêng và luôn tìm kiếm những điều mới lạ. <br><br>Bạn có tâm hồn của một người nghệ sĩ, nhà thiết kế, là người có sự sáng tạo cao. Ngoài ra, bạn còn rất thông minh, nhanh nhẹn và có khả năng thích nghi tốt với những thay đổi.</p>",
    },
]

let STAGE = 1;
setTimeout(function () {
    document.getElementById('name-input').style.opacity = '1';
}, 1000);

const search = document.getElementById('search');
const button = document.getElementById('button');
const input = document.getElementById('input');
const button2 = document.getElementById('button-2');
const explore = document.getElementById('button-explore');

const handleButtonClick = event => {
    event.preventDefault();
    if (STAGE == 1) {
        document.getElementById('content').innerHTML = HTML_INFO;
        document.getElementById('button-text').innerHTML = "Khám phá màu của bạn!";
        refadeId('show-card');
        STAGE = 2;
    } else {
        const BOI = COLORS[stringToNumberInRange(input.value)];
        displayColor(BOI);
    }
};

const handleInputKeyDown = event => {
    if (event.keyCode === 13) {
        loading();
    }
};

const loading = () => {
    search.classList.add('loading');

    setTimeout(() => {
        search.classList.remove('loading');
        document.getElementById('name-input').style.display = 'none';
        document.getElementById('name').innerHTML = input.value;
        fadeId('show-card');
        fadeId('button-text');
    }, 500);
};

const displayColor = BOI => {
    const { name, class: colorClass, sub, content, image } = BOI;

    document.getElementById('ffl-text').style.display = 'none';
    document.getElementById('button-2').style.display = 'none';

    document.getElementById('note-text').classList.remove('yellow-neon');
    document.getElementById('center-text').classList.remove('yellow-neon');
    document.getElementById('sub-text').classList.remove('yellow-neon');

    document.getElementById('note-text').classList.add(colorClass);
    document.getElementById('center-text').classList.add(colorClass);
    document.getElementById('sub-text').classList.add(colorClass);

    document.getElementById('center-text').innerHTML = name;
    document.getElementById('sub-text').innerHTML = sub;
    document.getElementById('content').innerHTML = content;
    document.getElementById('center-image').src = `assets/${image}`;
    refadeId('show-card');
    fadeId('sub-text');
    fadeId('note-text');
    refadeId('center-text');
    refadeId('center-image');
};

button2.addEventListener('click', handleButtonClick);
button.addEventListener('click', loading);
input.addEventListener('keydown', handleInputKeyDown);

function removeAccents(str) {
    var AccentsMap = [
        "aàảãáạăằẳẵắặâầẩẫấậ",
        "AÀẢÃÁẠĂẰẲẴẮẶÂẦẨẪẤẬ",
        "dđ", "DĐ",
        "eèẻẽéẹêềểễếệ",
        "EÈẺẼÉẸÊỀỂỄẾỆ",
        "iìỉĩíị",
        "IÌỈĨÍỊ",
        "oòỏõóọôồổỗốộơờởỡớợ",
        "OÒỎÕÓỌÔỒỔỖỐỘƠỜỞỠỚỢ",
        "uùủũúụưừửữứự",
        "UÙỦŨÚỤƯỪỬỮỨỰ",
        "yỳỷỹýỵ",
        "YỲỶỸÝỴ"
    ];
    for (var i = 0; i < AccentsMap.length; i++) {
        var re = new RegExp('[' + AccentsMap[i].substr(1) + ']', 'g');
        var char = AccentsMap[i][0];
        str = str.replace(re, char);
    }
    return str.toLowerCase();
}
function stringToNumberInRange(str) {
    str = removeAccents(str)
    // Initialize sum of character codes
    let sum = 0;

    // Iterate through each character in the string
    for (let i = 0; i < str.length; i++) {
        // Add the Unicode code point of the current character to the sum
        sum += str.charCodeAt(i);
    }

    // Map the sum to a number in the range 0-4
    const numberInRange = sum % 5;

    return numberInRange;
}

function fadeId(id) {
    var element = document.getElementById(id);
    element.classList.remove('hidden');
    element.classList.add('visible');
}

function refadeId(id) {
    var element = document.getElementById(id);
    element.classList.remove('visible');
    element.classList.add('hidden');
    setTimeout(() => {
        element.classList.remove('hidden');
        element.classList.add('visible');
    }, 500)
}