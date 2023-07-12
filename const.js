/**
 * store: 매장명
 * distance: 거리 (m)
 * time: 소요시간 (분) - 네이버 지도 기준. 부정확할수 있음. 1분은 더해야할듯?
 * foodType:
 */
const stores = [
  {
    name: "가람 부대찌개",
    distance: 277,
    time: 4,
    category: "한식",
    foods: [
      "부대찌개",
      "제육볶음",
      "김치찌개",
      "된장찌개",
      "삼겹살",
      "오징어볶음",
    ],
    menus: [
      {
        name: "가람 부대찌개",
        price: 9000,
      },
      {
        name: "양푼 돼지 김치찌개",
        price: 9000,
      },
      {
        name: "양푼 목살 된장찌개",
        price: 9000,
      },
      {
        name: "제육볶음",
        price: 9000,
      },
      {
        name: "오징어볶음",
        price: 9000,
      },
      {
        name: "고등어조림",
        price: 9000,
      },
      {
        name: "계란말이",
        price: 7000,
      },
    ],
    url: "https://naver.me/FArTA1Uj",
    thumbnail:
      "https://ldb-phinf.pstatic.net/20200405_203/1586090335160hoCb5_JPEG/bIqucamO3Y8sqamhhVyCE0EK.jpg",
    isRequest: false,
    x: 127.036839460179,
    y: 37.4955873603767,
  },
  {
    name: "강강술래",
    distance: 380,
    time: 5,
    category: "한식",
    foods: ["갈비탕", "육회비빔밥"],
    menus: [
      {
        name: "영양갈비탕",
        price: 13000,
      },
      {
        name: "영양전복갈비탕",
        price: 18000,
      },
      {
        name: "한우육회비빔밥",
        price: 13000,
      },
      {
        name: "육회돌솥비빔밥",
        price: 13000,
      },
    ],
    url: "https://naver.me/xpParhjK",
    thumbnail:
      "https://ldb-phinf.pstatic.net/20170411_7/1491882417891bxBsh_JPEG/2.jpg",
    isRequest: false,
    x: 127.039706,
    y: 37.4942104,
  },
  {
    name: "고갯마루",
    distance: 354,
    time: 7,
    category: "한식",
    foods: ["닭볶음탕", "오리주물럭"],
    menus: [
      {
        name: "오리주물럭",
        price: 35000,
      },
      {
        name: "닭도리탕 小",
        price: 30000,
      },
      {
        name: "닭도리탕 大",
        price: 45000,
      },
    ],
    url: "https://naver.me/5FeZmrBR",
    thumbnail:
      "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAzMjNfMjYy%2FMDAxNjc5NTQ1MjQ1ODYy.DtS0y-p963QG8c0hDs15PVrZR-XeMi3-2Iy5sFWK9VEg.SiCUToY5yKe2WAYPk0iWMPkin1ke2-rpFi0aDi62tYIg.JPEG.doe7%2F20230323_024006025_iOS.jpg",
    isRequest: false,
    x: 127.0394239,
    y: 37.4994045,
  },
  {
    name: "고끌림",
    distance: 543,
    time: 8,
    category: "육류",
    foods: ["고기", "소고기", "토시살", "갈비"],
    menus: [
      {
        name: "점심정식 (된장찌개 돼지불백세트?)",
        price: 9000,
      },
    ],
    url: "https://naver.me/5zoSxEVF",
    thumbnail:
      "https://ldb-phinf.pstatic.net/20230326_296/1679841401984Q3JmR_JPEG/1679841398620.jpg",
    isRequest: false,
    x: 127.03380168053761,
    y: 37.49761772513968,
  },
  {
    name: "그윽 떡볶이",
    distance: 459,
    time: 6,
    category: "분식",
    foods: ["떡볶이", "튀김"],
    menus: [
      {
        name: "차돌(우삼겹)떡볶이",
        price: 9000,
      },
      {
        name: "돈까스 떡볶이",
        price: 8500,
      },
      {
        name: "치킨떡볶이",
        price: 8000,
      },
      {
        name: "치즈떡볶이",
        price: 8000,
      },
      {
        name: "어묵떡볶이",
        price: 7000,
      },
      {
        name: "소세지떡볶이",
        price: 7500,
      },
      {
        name: "짜장떡볶이",
        price: 7000,
      },
      {
        name: "수제튀김(5EA)",
        price: 5500,
      },
      {
        name: "새우튀김",
        price: 5000,
      },
    ],
    url: "https://naver.me/5mYgLbEG",
    thumbnail:
      "https://ldb-phinf.pstatic.net/20190425_178/1556175949649AYpks_JPEG/lnjYq5vzJc5AkFvl149FxKUf.jpg",
    isRequest: false,
    x: 127.03435670285444,
    y: 37.49619928345658,
  },
  {
    name: "그옛날손짜장",
    distance: 277,
    time: 4,
    category: "중식",
    foods: ["짜장면", "짬뽕", "볶음밥", "탕수육"],
    menus: [
      {
        name: "손짜장",
        price: 8000,
      },
      {
        name: "손짬뽕",
        price: 8000,
      },
      {
        name: "볶음밥",
        price: 8000,
      },
      {
        name: "잡채밥",
        price: 9000,
      },
      {
        name: "탕수육 중",
        price: 30000,
      },
      {
        name: "간짜장",
        price: 9000,
      },
      {
        name: "짬뽕밥",
        price: 8000,
      },
      {
        name: "삼선짬뽕밥",
        price: 10000,
      },
      {
        name: "새우볶음밥",
        price: 10000,
      },
      {
        name: "삼선볶음밥",
        price: 10000,
      },
      {
        name: "사천탕면",
        price: 10000,
      },
      {
        name: "삼선짜장",
        price: 10000,
      },
      {
        name: "삼선짬뽕",
        price: 10000,
      },
      {
        name: "삼선우동",
        price: 10000,
      },
      {
        name: "송이덮밥",
        price: 9000,
      },
      {
        name: "마파덮밥",
        price: 9000,
      },
      {
        name: "잡탕밥",
        price: 15000,
      },
      {
        name: "수제군만두",
        price: 10000,
      },
      {
        name: "물만두",
        price: 7000,
      },
      {
        name: "쟁반짜장 대",
        price: 35000,
      },
      {
        name: "쟁반짜장 소",
        price: 25000,
      },
      {
        name: "탕수육 소",
        price: 20000,
      },
      {
        name: "사천탕수육 대",
        price: 35000,
      },
      {
        name: "사천탕수육 소",
        price: 25000,
      },
      {
        name: "깐풍기 대",
        price: 35000,
      },
      {
        name: "깐풍기 소",
        price: 25000,
      },
    ],
    url: "https://naver.me/FqSWh24g",
    thumbnail:
      "https://ldb-phinf.pstatic.net/20150831_107/1440992505631yqA3G_JPEG/106655557650467_0.jpg",
    isRequest: false,
    x: 127.036787,
    y: 37.495599,
  },
  {
    name: "김남완초밥집",
    distance: 277,
    time: 4,
    category: "일식",
    foods: ["초밥", "롤"],
    menus: [
      {
        name: "모듬초밥(12pcs)",
        price: 19000,
      },
      {
        name: "VIP초밥(12pcs)",
        price: 24000,
      },
      {
        name: "완초밥(12pcs)",
        price: 14000,
      },
      {
        name: "캘리포니아롤(8pcs)",
        price: 9000,
      },
      {
        name: "캘리포니아롤(4pcs)",
        price: 6000,
      },
      {
        name: "우동정식",
        price: 14000,
      },
    ],
    url: "https://naver.me/54VkoIK0",
    thumbnail:
      "https://ldb-phinf.pstatic.net/20200717_53/1594963097789d91rR_JPEG/jGnyNeAM3wcBh2mHs_kTeUhG.jpg",
    isRequest: false,
    x: 127.03488903154299,
    y: 37.49841492329631,
  },
  {
    name: "꾸우덕",
    distance: 561,
    time: 8,
    category: "이탈리아",
    foods: ["파스타", "리조또", "샐러드", "스테이크"],
    menus: [
      {
        name: "매콤크림파스타",
        price: 11900,
      },
      {
        name: "미트 로제 리조또",
        price: 11900,
      },
      {
        name: "새우 로제 리조또",
        price: 11900,
      },
      {
        name: "매콤 게살 크림 리조또",
        price: 12900,
      },
      {
        name: "베이컨 토마토 파스타",
        price: 11900,
      },
      {
        name: "미트 로제 파스타",
        price: 11900,
      },
      {
        name: "꾸우덕 카레 덮바",
        price: 11900,
      },
      {
        name: "살치살 스테이크 샐러드",
        price: 14300,
      },
      {
        name: "리코타 치즈 샐러드",
        price: 11800,
      },
      {
        name: "칠리새우 샐러드",
        price: 11800,
      },
      {
        name: "통삼겹 스테이크 샐러드",
        price: 10800,
      },
      {
        name: "케이준 치킨 샐러드",
        price: 9800,
      },
      {
        name: "버팔로 윙(4p)",
        price: 4500,
      },
      {
        name: "치킨텐더(4p)",
        price: 4500,
      },
    ],
    url: "https://naver.me/5Am9AAVh",
    thumbnail:
      "https://ldb-phinf.pstatic.net/20220905_108/1662369711542njzOC_JPEG/KakaoTalk_Photo_2022-09-05-18-21-01.jpeg",
    isRequest: false,
    x: 127.03371307228585,
    y: 37.49746423506613,
  },
  {
    name: "남도구들",
    distance: 206,
    time: 2,
    category: "한식",
    foods: ["한정식"],
    menus: [
      {
        name: "남도밥상",
        price: 10000,
      },
    ],
    url: "https://naver.me/5bXdMmeD",
    thumbnail:
      "https://ldb-phinf.pstatic.net/20200718_55/1595075824931xxMXs_JPEG/ss0duxJRJ5sFQ0LxNCQdGJzC.jpg",
    isRequest: false,
    x: 127.03750505822583,
    y: 37.4963756550507,
  },
  {
    name: "나이스샤워",
    distance: 630,
    time: 9,
    category: "일식",
    foods: ["텐동"],
    menus: [
      {
        name: "샤워텐동",
        price: 9900,
      },
      {
        name: "에비텐동",
        price: 12000,
      },
      {
        name: "아나고텐동",
        price: 14000,
      },
      {
        name: "스페셜 텐동",
        price: 16000,
      },
      {
        name: "The스페셜 텐동",
        price: 19000,
      },
      {
        name: "스페셜 모듬 튀김",
        price: 22000,
      },
      {
        name: "하이볼",
        price: 8000,
      },
    ],
    url: "https://naver.me/Gw5EBHjj",
    thumbnail:
      "https://ldb-phinf.pstatic.net/20220121_297/1642771320111SHadw_JPEG/1642771238485.jpg",
    isRequest: false,
    x: 127.032939006588,
    y: 37.49761205049322,
  },
  {
    name: "내가왕이라면",
    distance: 298,
    time: 4,
    category: "분식",
    foods: ["라면", "김밥", "떡볶이", "순대"],
    menus: [
      {
        name: "왕이라면",
        price: 3500,
      },
      {
        name: "왕이떡라면",
        price: 4000,
      },
      {
        name: "너구리",
        price: 4000,
      },
      {
        name: "치즈라면",
        price: 4000,
      },
      {
        name: "순두부라면",
        price: 5000,
      },
      {
        name: "진짬뽕",
        price: 6000,
      },
      {
        name: "부대라면",
        price: 6000,
      },
      {
        name: "왕이김밥",
        price: 3000,
      },
      {
        name: "참치김밥",
        price: 3500,
      },
      {
        name: "떡볶이",
        price: 4000,
      },
      {
        name: "순대",
        price: 4000,
      },
      {
        name: "라볶이",
        price: 6000,
      },
    ],
    url: "https://naver.me/F8KeaumB",
    thumbnail:
      "https://ldb-phinf.pstatic.net/20200718_61/1595075488668jGxmu_JPEG/z-gAr1BpIDWThq6CWy3l1Cgb.jpg",
    isRequest: false,
    x: 127.03784700000007,
    y: 37.49557599999989,
  },
  {
    name: "네모징어",
    distance: 320,
    time: 5,
    category: "해물",
    foods: ["백반", "오징어불고기백반", "오삼불고기백반", "낙지불고기백반"],
    menus: [
      {
        name: "오삼불고기백반",
        price: 11000,
      },
      {
        name: "오징어불고기백반",
        price: 11000,
      },
      {
        name: "낙지불고기백반",
        price: 12000,
      },
      {
        name: "갑오징어불고기백반",
        price: 13000,
      },
      {
        name: "새우튀김",
        price: 15000,
      },
      {
        name: "오징어튀김",
        price: 13000,
      },
    ],
    url: "https://naver.me/GnGCtiZV",
    thumbnail:
      "https://ldb-phinf.pstatic.net/20171108_74/1510118766422d3vKE_JPEG/u3JN2SB8vJOBXkmRP6R8SHx8.jpg",
    isRequest: false,
    x: 127.03639965821492,
    y: 37.49885757783401,
  },
  {
    name: "다돈식당",
    distance: 458,
    time: 6,
    category: "육류",
    foods: ["돈까스", "삼겹살"],
    menus: [
      {
        name: "상로스까스",
        price: 11500,
      },
      {
        name: "로스까스",
        price: 9500,
      },
      {
        name: "히레까스",
        price: 10500,
      },
      {
        name: "삼겹살160g",
        price: 16000,
      },
      {
        name: "특목살160g",
        price: 16000,
      },
    ],
    url: "https://naver.me/FqHJsH2I",
    thumbnail:
      "https://ldb-phinf.pstatic.net/20230305_10/1678021902525rKEza_JPEG/1678021010150.jpg",
    isRequest: false,
    x: 127.03748917062886,
    y: 37.49461552366746,
  },
  {
    name: "닭갈비두목",
    distance: 201,
    time: 2,
    category: "한식",
    foods: ["닭갈비", "부대찌개"],
    menus: [
      {
        name: "두목 닭갈비",
        price: 17000,
      },
      {
        name: "부두목 부대찌개",
        price: 12000,
      },
    ],
    url: "https://naver.me/FOvMoBF3",
    thumbnail:
      "https://ldb-phinf.pstatic.net/20190520_94/1558348494787npqGI_JPEG/2izsciVU5B9AKYFbo2juMROZ.jpg",
    isRequest: false,
    x: 127.0377029354211,
    y: 37.49628382698332,
  },
  {
    name: "담소",
    distance: 129,
    time: 1,
    category: "한식",
    foods: ["순대국", "육개장"],
    menus: [
      {
        name: "우 순대국",
        price: 8900,
      },
      {
        name: "일품 순대국",
        price: 8900,
      },
      {
        name: "담소 육개장",
        price: 9800,
      },
      {
        name: "우렁얼큰순두부",
        price: 8900,
      },
    ],
    url: "https://naver.me/5fnIShQZ",
    thumbnail:
      "https://ldb-phinf.pstatic.net/20190117_184/1547689407876kMcXO_JPEG/zBOQcZx-7OMW76tV7gBJZW2X.jpg",
    isRequest: false,
    x: 127.03880594115398,
    y: 37.49623564764579,
  },
  {
    name: "대게마을",
    distance: 202,
    time: 3,
    category: "일식",
    foods: ["초밥", "회덮밥"],
    menus: [
      {
        name: "테이블초밥",
        price: 12000,
      },
      {
        name: "테이블회덮밥",
        price: 12000,
      },
    ],
    url: "https://naver.me/5h3EYqka",
    thumbnail:
      "https://ldb-phinf.pstatic.net/20190521_230/1558441575878HGYRl_JPEG/YFwujIjs-Yueg_A6sFYodyYx.jpg",
    isRequest: false,
    x: 127.03746780169456,
    y: 37.49911813358017,
  },
  {
    name: "대낚식당",
    distance: 546,
    time: 7,
    category: "한식",
    foods: ["대창덮밥", "곱도리탕", "항정살덮밥"],
    menus: [
      {
        name: "대창덮밥",
        price: 12000,
      },
      {
        name: "항정살덮밥",
        price: 10000,
      },
      {
        name: "대낙덮밥",
        price: 10000,
      },
      {
        name: "삼낙덮밥",
        price: 9000,
      },
      {
        name: "갈비덮밥",
        price: 9000,
      },
      {
        name: "곱도리탕 2인",
        price: 29000,
      },
    ],
    url: "https://naver.me/xZDOmg3c",
    thumbnail:
      "https://ldb-phinf.pstatic.net/20190530_174/1559157242026RxkWG_JPEG/S_p7j2NPycLYSA_MJYnwuHbW.jpg",
    isRequest: false,
    x: 127.034488743589,
    y: 37.4945193837215,
  },
  {
    name: "돝고기",
    distance: 271,
    time: 4,
    category: "한식",
    foods: ["삼겹살", "목살", "제육쌈밥", "김치찌개", "육회비빔밥"],
    menus: [
      {
        name: "숙성 삼겹살 150g",
        price: 18000,
      },
      {
        name: "숙성 목살 150g",
        price: 18000,
      },
      {
        name: "제육쌈밥",
        price: 15000,
      },
      {
        name: "김치찌개",
        price: 10000,
      },
      {
        name: "한우 육회비빔밥",
        price: 15000,
      },
      {
        name: "크림볶음밥",
        price: 10000,
      },
    ],
    url: "https://naver.me/GC2uk2od",
    thumbnail:
      "https://ldb-phinf.pstatic.net/20230411_39/1681194555547HKjwC_JPEG/05.jpg",
    isRequest: false,
    x: 127.0362225,
    y: 37.49826649999999,
  },
  {
    name: "돈까스해",
    distance: 493,
    time: 6,
    category: "일식",
    foods: ["돈까스"],
    menus: [
      {
        name: "등심돈까스",
        price: 10000,
      },
      {
        name: "치즈돈까스",
        price: 13000,
      },
      {
        name: "매콤돈까스",
        price: 11000,
      },
      {
        name: "반반돈까스",
        price: 12000,
      },
      {
        name: "돈까스카레덮밥",
        price: 9000,
      },
      {
        name: "치킨카레덮밥",
        price: 10000,
      },
      {
        name: "생면모밀국수",
        price: 8500,
      },
      {
        name: "가츠오우동",
        price: 7500,
      },
    ],
    url: "https://naver.me/5JJcr6o3",
    thumbnail:
      "https://ldb-phinf.pstatic.net/20220922_52/1663852844621W6jWH_PNG/1663852226783.png",
    isRequest: false,
    x: 127.03789237689969,
    y: 37.49443018523537,
  },
  {
    name: "류경회관",
    distance: 411,
    time: 6,
    category: "",
    foods: [""],
    menus: [],
    url: "",
    thumbnail: "",
    isRequest: true,
    x: 0,
    y: 0,
  },
  {
    name: "마라공방",
    distance: 745,
    time: 14,
    category: "중식",
    foods: ["마라탕", "마라샹궈"],
    menus: [
      {
        name: "마라탕 100g",
        price: 1900,
      },
      {
        name: "마라반 100g",
        price: 2300,
      },
      {
        name: "마라샹궈 100g",
        price: 3300,
      },
      {
        name: "꿔바로우",
        price: 13000,
      },
      {
        name: "지삼선",
        price: 16000,
      },
      {
        name: "마파두부",
        price: 15000,
      },
      {
        name: "어향육슬",
        price: 19000,
      },
    ],
    url: "https://naver.me/xkxqp0lR",
    thumbnail:
      "https://ldb-phinf.pstatic.net/20190905_162/1567659402918JH0y4_JPEG/hXb_4CAIJ5l14Z87GW6_5Q0O.jpg",
    isRequest: false,
    x: 127.03665785888398,
    y: 37.50325700801841,
  },
  {
    name: "마포만두",
    distance: 202,
    time: 3,
    category: "분식",
    foods: ["만두", "김밥", "라면", "떡볶이", "순대"],
    menus: [
      {
        name: "갈비만두",
        price: 4000,
      },
      {
        name: "고기만두",
        price: 4000,
      },
      {
        name: "김치만두",
        price: 4000,
      },
      {
        name: "개성만두",
        price: 4500,
      },
      {
        name: "야채김밥",
        price: 3000,
      },
      {
        name: "참치김밥",
        price: 4000,
      },
      {
        name: "치즈김밥",
        price: 4000,
      },
      {
        name: "쌀떡볶이",
        price: 4000,
      },
      {
        name: "찹쌀순대",
        price: 4000,
      },
      {
        name: "라볶이",
        price: 5500,
      },
      {
        name: "라면",
        price: 4000,
      },
      {
        name: "치즈돈까스",
        price: 8500,
      },
      {
        name: "제육덮밥",
        price: 7500,
      },
    ],
    url: "https://naver.me/xH2niXdG",
    thumbnail:
      "https://ldb-phinf.pstatic.net/20220804_300/1659598584647QxEKB_JPEG/11CC14CC-1FAB-4668-85C9-B7DFD1F4D9EE.jpeg",
    isRequest: false,
    x: 127.03748861564716,
    y: 37.49910415554044,
  },
  {
    name: "만월",
    distance: 589,
    time: 10,
    category: "중식",
    foods: ["짜장면", "짬뽕", "탕수육", "볶음밥"],
    menus: [
      {
        name: "짜장면",
        price: 8000,
      },
      {
        name: "부추짜장면",
        price: 9000,
      },
      {
        name: "해물짬뽕면",
        price: 10000,
      },
      {
        name: "백짬뽕면",
        price: 10000,
      },
      {
        name: "새우볶음밥",
        price: 11000,
      },
      {
        name: "꽃빵튀김",
        price: 4000,
      },
      {
        name: "군만두",
        price: 6000,
      },
      {
        name: "탕수육 1인세트 (+7000원)",
        price: 7000,
      },
      {
        name: "군만두 1인세트 (+5000원)",
        price: 5000,
      },
    ],
    url: "https://naver.me/5kLXHafH",
    thumbnail:
      "https://ldb-phinf.pstatic.net/20200525_61/1590404140544cw4Wy_JPEG/wo2unNPvKz6aQUG4_oHnLZ0y.jpeg.jpg",
    isRequest: false,
    x: 127.04217471931199,
    y: 37.4999129601121,
  },
  {
    name: "맛과멋",
    distance: 314,
    time: 4,
    category: "한식",
    foods: ["등갈비찜"],
    menus: [],
    url: "https://naver.me/G9sy1wXI",
    thumbnail:
      "https://ldb-phinf.pstatic.net/20230628_160/1687955703139ROgxT_JPEG/1687924135220.jpg",
    isRequest: true,
    x: 127.0356753,
    y: 37.497811,
  },
  {
    name: "멘야유메미루",
    distance: 446,
    time: 6,
    category: "일식",
    foods: ["라멘", "마제소바", "마제메시"],
    menus: [
      {
        name: "마제소바",
        price: 11000,
      },
      {
        name: "카라이(매운) 마제소바",
        price: 12000,
      },
      {
        name: "마제메시 (밥)",
        price: 11000,
      },
      {
        name: "카라이(매운) 마제메시",
        price: 12000,
      },
    ],
    url: "https://naver.me/5CbCgmTX",
    thumbnail:
      "https://ldb-phinf.pstatic.net/20220114_67/16421214422504n4Q1_JPEG/20220114_095028.jpg",
    isRequest: false,
    x: 127.03528785203605,
    y: 37.49919553342727,
  },
  {
    name: "명문어가",
    distance: 445,
    time: 7,
    category: "",
    foods: [""],
    menus: [],
    url: "",
    thumbnail: "",
    isRequest: true,
    x: 127.03443221986088,
    y: 37.496325606258154,
  },
  {
    name: "바스버거",
    distance: 388,
    time: 6,
    category: "양식",
    foods: ["햄버거"],
    menus: [
      {
        name: "바스버거",
        price: 6800,
      },
      {
        name: "바스버거(더블)",
        price: 9600,
      },
      {
        name: "바스치킨버거",
        price: 7800,
      },
      {
        name: "하와이안버거",
        price: 8600,
      },
      {
        name: "더블베이컨치즈버거",
        price: 9600,
      },
      {
        name: "머쉬룸버거",
        price: 9800,
      },
      {
        name: "와사비마요쉬림프버거",
        price: 11000,
      },
      {
        name: "탐욕버거",
        price: 12800,
      },
      {
        name: "세트메뉴 추가 (+3500)",
        price: 3500,
      },
    ],
    url: "https://naver.me/xyUj2QWO",
    thumbnail:
      "https://ldb-phinf.pstatic.net/20220908_36/1662614221943ekC81_JPEG/1.jpg",
    isRequest: false,
    x: 127.03577117720009,
    y: 37.499683361291275,
  },
  {
    name: "방아다리",
    distance: 391,
    time: 6,
    category: "칼국수",
    foods: ["만두"],
    menus: [
      {
        name: "칼국수",
        price: 7500,
      },
      {
        name: "칼제비",
        price: 7500,
      },
    ],
    url: "https://naver.me/FBwJbFhy",
    thumbnail:
      "https://ldb-phinf.pstatic.net/20170914_265/1505348555148HcLKj_PNG/7n8y7vhEYfSbsEysoLD_CkNV.png",
    isRequest: false,
    x: 127.04065051741132,
    y: 37.49559464018707,
  },
  {
    name: "부어치킨",
    distance: 376,
    time: 5,
    category: "한식",
    foods: ["뷔페", "치킨"],
    menus: [
      {
        name: "점심뷔페",
        price: 8000,
      },
      {
        name: "크리스피",
        price: 15000,
      },
      {
        name: "양념치킨",
        price: 16000,
      },
      {
        name: "델리(간장)치킨",
        price: 16000,
      },
      {
        name: "파닭치킨",
        price: 17000,
      },
      {
        name: "갈릭치킨",
        price: 17000,
      },
      {
        name: "순살삼총사 (크리스피+양념+델리)",
        price: 28000,
      },
      {
        name: "골통삼총사 (크리스피+양념+델리)",
        price: 25000,
      },
    ],
    url: "https://naver.me/GUvtJRYz",
    thumbnail:
      "https://ldb-phinf.pstatic.net/20191209_290/1575881819005jPCys_JPEG/TcZvhT4wLLp4xTihZ5dKh-ze.jpg",
    isRequest: false,
    x: 127.03546132565417,
    y: 37.49840621569113,
  },
  {
    name: "분짜라붐",
    distance: 636,
    time: 12,
    category: "",
    foods: [""],
    menus: [],
    url: "",
    thumbnail: "",
    isRequest: true,
    x: 0,
    y: 0,
  },
  {
    name: "쁘라텟타이",
    distance: 694,
    time: 12,
    category: "태국",
    foods: ["똠양꿍", "뿌팟퐁커리", "팟타이"],
    menus: [
      {
        name: "팟타이",
        price: 17000,
      },
      {
        name: "뿌팟퐁커리",
        price: 28000,
      },
      {
        name: "텃만꿍 4p",
        price: 15000,
      },
      {
        name: "꾸아이띠아오",
        price: 14000,
      },
      {
        name: "까이 팟 맷마무엉",
        price: 26000,
      },
      {
        name: "비건 삐여우완",
        price: 26000,
      },
      {
        name: "똠양꿍",
        price: 17000,
      },
      {
        name: "쏨땀",
        price: 14000,
      },
      {
        name: "팍 붕 화이뎅",
        price: 14000,
      },
      {
        name: "팟 끄라파오 무쌉",
        price: 17000,
      },
      {
        name: "깽키여우완",
        price: 23000,
      },
    ],
    url: "https://naver.me/GGhWcuJJ",
    thumbnail:
      "https://ldb-phinf.pstatic.net/20210629_121/1624936585940uhGn9_PNG/ikDBpWTvEDJdpfs-1DgTG3BT.png",
    isRequest: false,
    x: 127.03435852934643,
    y: 37.50108573827306,
  },
  {
    name: "비비큐",
    distance: 64,
    time: 0,
    category: "치킨",
    foods: ["치킨"],
    menus: [
      {
        name: "황금올리브치킨",
        price: 20000,
      },
      {
        name: "핫황금올리브치킨 크리스피",
        price: 21000,
      },
      {
        name: "오리지날양념치킨",
        price: 21500,
      },
      {
        name: "황금올리브치킨 블랙페퍼",
        price: 21000,
      },
      {
        name: "황올 반 + 양념 반",
        price: 21000,
      },
      {
        name: "황올 반 + 크리스피 반",
        price: 21000,
      },
    ],
    url: "https://naver.me/G3JhPw7e",
    thumbnail:
      "https://ldb-phinf.pstatic.net/20221107_146/166782014865124wjI_PNG/1.png",
    isRequest: false,
    x: 127.03857394684246,
    y: 37.49676318040992,
  },
  {
    name: "사량도회",
    distance: 511,
    time: 9,
    category: "해물",
    foods: ["회", "회덮밥", "초밥", "알밥"],
    menus: [
      {
        name: "회정식",
        price: 25000,
      },
      {
        name: "초밥",
        price: 25000,
      },
      {
        name: "알밥",
        price: 10000,
      },
      {
        name: "회덮밥",
        price: 10000,
      },
      {
        name: "특 회덮밥",
        price: 12000,
      },
      {
        name: "고등어구이",
        price: 12000,
      },
      {
        name: "대구탕",
        price: 10000,
      },
      {
        name: "복지리",
        price: 18000,
      },
    ],
    url: "https://naver.me/x2PkLF2d",
    thumbnail:
      "https://ldb-phinf.pstatic.net/20150901_163/1441074923536p6Fpk_JPEG/166273564170756_0.jpeg",
    isRequest: false,
    x: 127.0417215,
    y: 37.4974562,
  },
  {
    name: "사보텐",
    distance: 284,
    time: 4,
    category: "일식",
    foods: ["돈까스", "나베"],
    menus: [
      {
        name: "로스카츠",
        price: 14500,
      },
      {
        name: "히레카츠",
        price: 16000,
      },
      {
        name: "제주흑돈카츠",
        price: 18500,
      },
      {
        name: "시그니처카츠",
        price: 17000,
      },
      {
        name: "더블업 모짜렐라 카츠",
        price: 18500,
      },
      {
        name: "카츠나베",
        price: 14500,
      },
      {
        name: "김치카츠나베",
        price: 15500,
      },
    ],
    url: "https://naver.me/54VLt4hV",
    thumbnail:
      "https://ldb-phinf.pstatic.net/20200607_138/1591494980330OPDop_JPEG/ylpDpZEQlVig3fmbdXEApoH0.jpeg.jpg",
    isRequest: false,
    x: 127.036646,
    y: 37.5000168,
  },
  {
    name: "삼식이 감자탕",
    distance: 271,
    time: 3,
    category: "한식",
    foods: ["감자탕", "뼈해장국"],
    menus: [
      {
        name: "뼈해장국",
        price: 10000,
      },
      {
        name: "감자탕 소",
        price: 35000,
      },
      {
        name: "감자탕 중",
        price: 40000,
      },
      {
        name: "감자탕 대",
        price: 44000,
      },
      {
        name: "김치뼈찜 중",
        price: 44000,
      },
      {
        name: "김치뼈찜 대",
        price: 48000,
      },
    ],
    url: "https://naver.me/G9ROtMgv",
    thumbnail:
      "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAzMDJfMTYg%2FMDAxNjc3NzM3MjEzOTky.XrS_Ydz8k1_-bx1_kNqSU3wxaL2sHNPbySdIxByNy9cg.WwMnK19u4jPmN2AQQb0JDh7nuIcuJZHRRPg8G9-_3bIg.JPEG.partnerdr%2FKakaoTalk_20230223_192737924_02.jpg",
    isRequest: false,
    x: 127.03697155256475,
    y: 37.495923517280254,
  },
  {
    name: "새마을식당",
    distance: 407,
    time: 6,
    category: "한식",
    foods: ["불고기", "김치찌개", "삼겹살", "목살"],
    menus: [
      {
        name: "열탄불고기",
        price: 10900,
      },
      {
        name: "7분돼지김치",
        price: 7000,
      },
      {
        name: "백밥",
        price: 9000,
      },
      {
        name: "항정살 150g",
        price: 11000,
      },
      {
        name: "한돈생오겹살 200g",
        price: 14000,
      },
      {
        name: "한돈생목살 200g",
        price: 13000,
      },
    ],
    url: "https://naver.me/G99pp1nU",
    thumbnail:
      "https://ldb-phinf.pstatic.net/20221024_7/1666592092076w71De_JPEG/image-3237667478663241106.jpg",
    isRequest: false,
    x: 127.0352875,
    y: 37.4985596,
  },
  {
    name: "샐리오",
    distance: 0,
    time: 0,
    category: "",
    foods: [""],
    menus: [],
    url: "",
    thumbnail: "",
    isRequest: true,
    x: 0,
    y: 0,
  },
  {
    name: "세겹",
    distance: 143,
    time: 1,
    category: "한식",
    foods: ["삼겹살"],
    menus: [
      {
        name: "고추장불고기",
        price: 9000,
      },
      {
        name: "차돌된장찌개",
        price: 9000,
      },
      {
        name: "세겹살",
        price: 18000,
      },
      {
        name: "천겹살",
        price: 19000,
      },
      {
        name: "가브리살",
        price: 18000,
      },
      {
        name: "특목살",
        price: 17000,
      },
    ],
    url: "https://naver.me/F1IeaG7o",
    thumbnail:
      "https://ldb-phinf.pstatic.net/20200704_58/15938372111725qg0r_JPEG/FuNi4fdL9-7vxR3B59vfrIuv.jpg",
    isRequest: false,
    x: 127.03826983698082,
    y: 37.496446238679916,
  },
  {
    name: "수미초밥",
    distance: 495,
    time: 6,
    category: "일식",
    foods: ["초밥", "롤"],
    menus: [
      {
        name: "스시특선",
        price: 13500,
      },
      {
        name: "회덮밥",
        price: 10000,
      },
      {
        name: "연어덮밥",
        price: 13000,
      },
    ],
    url: "https://naver.me/FKKxMCP3",
    thumbnail:
      "https://ldb-phinf.pstatic.net/20230216_20/1676559388843RnYaF_JPEG/1673586413518.jpg",
    isRequest: false,
    x: 127.03714939967001,
    y: 37.4943589996423,
  },
  {
    name: "슬로우캘리",
    distance: 502,
    time: 7,
    category: "",
    foods: [""],
    menus: [],
    url: "",
    thumbnail: "",
    isRequest: true,
    x: 0,
    y: 0,
  },
  {
    name: "시골집",
    distance: 449,
    time: 6,
    category: "한식",
    foods: ["제육", "백반", "김치찌개"],
    menus: [
      {
        name: "제육정식",
        price: 9000,
      },
      {
        name: "뚝불정식",
        price: 9000,
      },
      {
        name: "김치찌개",
        price: 9000,
      },
      {
        name: "오징어정식",
        price: 9000,
      },
      {
        name: "동태정식",
        price: 9000,
      },
      {
        name: "해물순두부찌개",
        price: 9000,
      },
    ],
    url: "https://naver.me/FJHDBems",
    thumbnail:
      "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxOTAyMThfMTM4%2FMDAxNTUwNDE2MjA3NTc5.omUDbTF3atkORWNonGE1l8LnKegcqK7sTmnaJPUfVx8g.BhUZzVL6bzSF9TSUyHzPUjbp-S9pvLlg-zDEFOf2ZfMg.JPEG.ykient%2FIMG_4386.JPG",
    isRequest: false,
    x: 127.03729700023399,
    y: 37.4947400012669,
  },
  {
    name: "싸다김밥",
    distance: 243,
    time: 3,
    category: "분식",
    foods: ["김밥", "라면", "돈까스", "오므라이스", "떡볶이", "튀김", "덮밥"],
    menus: [
      {
        name: "싸다김밥",
        price: 3500,
      },
      {
        name: "치즈김밥",
        price: 4500,
      },
      {
        name: "참치김밥",
        price: 4500,
      },
      {
        name: "돈까스김밥",
        price: 4500,
      },
      {
        name: "유부말이김밥",
        price: 5500,
      },
      {
        name: "돈까스",
        price: 8500,
      },
      {
        name: "치즈돈까스",
        price: 10000,
      },
      {
        name: "오므라이스",
        price: 8000,
      },
      {
        name: "떡갈비오므라이스",
        price: 9500,
      },
      {
        name: "모듬튀김",
        price: 6000,
      },
      {
        name: "즉석우동",
        price: 5500,
      },
      {
        name: "라면",
        price: 4000,
      },
      {
        name: "국물떡볶이",
        price: 5500,
      },
      {
        name: "카레덮밥",
        price: 7000,
      },
      {
        name: "치즈제육덮밥",
        price: 9500,
      },
      {
        name: "쌍둥이비빔밥",
        price: 7000,
      },
    ],
    url: "https://naver.me/5eTZba3n",
    thumbnail:
      "https://ldb-phinf.pstatic.net/20221219_300/16714371678900SF32_JPEG/KakaoTalk_20221219_170530760_01.jpg",
    isRequest: false,
    x: 127.0391543245912,
    y: 37.49548458135714,
  },
  {
    name: "안기덮밥마라탕",
    distance: 493,
    time: 6,
    category: "중식",
    foods: ["마라탕", "마라샹궈", "덮밥", "꿔바로우", "볶음면", "볶음밥"],
    menus: [
      {
        name: "마라탕",
        price: 10000,
      },
      {
        name: "마라샹궈 소",
        price: 16000,
      },
      {
        name: "마라샹궈 중",
        price: 21000,
      },
      {
        name: "마라샹궈 대",
        price: 25000,
      },
      {
        name: "지삼선 덮밥",
        price: 9000,
      },
      {
        name: "마파두부 덮밥",
        price: 8900,
      },
      {
        name: "피망소고기볶음덮밥",
        price: 9900,
      },
      {
        name: "어향육쓰 덮밥",
        price: 9900,
      },
      {
        name: "고추잡채 덮밥",
        price: 9900,
      },
      {
        name: "야채볶음면",
        price: 8000,
      },
      {
        name: "계란볶음면",
        price: 9000,
      },
      {
        name: "소고기 볶음면",
        price: 10000,
      },
      {
        name: "양고기 볶음면",
        price: 10000,
      },
      {
        name: "꿔바로우 10조각",
        price: 10000,
      },
      {
        name: "사천탕수육 중",
        price: 16000,
      },
    ],
    url: "https://naver.me/GeW0GB59",
    thumbnail:
      "https://ldb-phinf.pstatic.net/20210420_84/1618903863609k24QF_JPEG/dnX3QDnGjDDJbhzn-sRGaoRW.jpg",
    isRequest: false,
    x: 127.03507461908747,
    y: 37.49469451182887,
  },
  {
    name: "알엔",
    distance: 239,
    time: 3,
    category: "양식",
    foods: ["파스타", "리조또", "피자"],
    menus: [
      {
        name: "알리오 올리오",
        price: 9900,
      },
      {
        name: "봉골레 파스타",
        price: 10900,
      },
      {
        name: "베이컨 크림 파스타",
        price: 11900,
      },
      {
        name: "치킨 로제 파스타",
        price: 12900,
      },
      {
        name: "미트 토마토 리조또",
        price: 11900,
      },
      {
        name: "베이컨 크림 리조또",
        price: 11900,
      },
      {
        name: "치킨 로제 리조또",
        price: 13900,
      },
      {
        name: "콰트로 포르마지 피자",
        price: 13900,
      },
      {
        name: "페퍼로니 피자",
        price: 14900,
      },
      {
        name: "마르게리따 피자",
        price: 15900,
      },
    ],
    url: "https://naver.me/FYaGDrOr",
    thumbnail:
      "https://ldb-phinf.pstatic.net/20230405_52/16806592045366yd3o_PNG/rN.png",
    isRequest: false,
    x: 127.0364182,
    y: 37.4970078,
  },
  {
    name: "역삼정",
    distance: 152,
    time: 2,
    category: "한식",
    foods: ["삼겹살", "고추장불고기", "김치찌개"],
    menus: [
      {
        name: "매운맛갈비찜",
        price: 9000,
      },
      {
        name: "고추장불고기",
        price: 9000,
      },
      {
        name: "김치찌개",
        price: 9000,
      },
      {
        name: "순두부찌개",
        price: 9000,
      },
    ],
    url: "https://naver.me/xB4h97lg",
    thumbnail:
      "https://ldb-phinf.pstatic.net/20181106_262/1541470333951sP46I_JPEG/VIQdPXi7xgAnhqx1i8evwbD4.jpg",
    isRequest: false,
    x: 127.03755152539699,
    y: 37.49726368571698,
  },
  {
    name: "오무라안",
    distance: 522,
    time: 7,
    category: "일식",
    foods: [""],
    menus: [],
    url: "",
    thumbnail: "",
    isRequest: true,
    x: 0,
    y: 0,
  },
  {
    name: "오사무식당",
    distance: 513,
    time: 8,
    category: "일식",
    foods: [""],
    menus: [],
    url: "",
    thumbnail: "",
    isRequest: true,
    x: 0,
    y: 0,
  },
  {
    name: "온미반",
    distance: 419,
    time: 5,
    category: "한식",
    foods: ["곰탕"],
    menus: [],
    url: "",
    thumbnail: "",
    isRequest: true,
    x: 0,
    y: 0,
  },
  {
    name: "원당골",
    distance: 99,
    time: 0,
    category: "한식",
    foods: ["삼겹살"],
    menus: [
      {
        name: "오늘의 메뉴",
        price: 8500,
      },
      {
        name: "생삼겹살",
        price: 11000,
      },
    ],
    url: "https://naver.me/FgiSnKS5",
    thumbnail:
      "https://ldb-phinf.pstatic.net/20181106_140/1541471265456Pvkmx_JPEG/rVcWZvAB8BXcl_spkidz_B63.jpg",
    isRequest: false,
    x: 127.037841,
    y: 37.497005,
  },
  {
    name: "웨이웨이",
    distance: 526,
    time: 8,
    category: "중식",
    foods: [""],
    menus: [],
    url: "",
    thumbnail: "",
    isRequest: true,
    x: 0,
    y: 0,
  },
  {
    name: "육시리",
    distance: 109,
    time: 2,
    category: "육류",
    foods: [""],
    menus: [],
    url: "",
    thumbnail: "",
    isRequest: true,
    x: 0,
    y: 0,
  },
  {
    name: "이여곰탕",
    distance: 383,
    time: 6,
    category: "곰탕",
    foods: ["곰탕", "설렁탕"],
    menus: [],
    url: "",
    thumbnail: "",
    isRequest: true,
    x: 0,
    y: 0,
  },
  {
    name: "이태리 부대찌개",
    distance: 505,
    time: 8,
    category: "찌개",
    foods: ["부대찌개", "부대전골"],
    menus: [],
    url: "",
    thumbnail: "",
    isRequest: true,
    x: 0,
    y: 0,
  },
  {
    name: "이화수 전통육개장",
    distance: 392,
    time: 6,
    category: "육개장",
    foods: ["육개장"],
    menus: [],
    url: "",
    thumbnail: "",
    isRequest: true,
    x: 0,
    y: 0,
  },
  {
    name: "일미집",
    distance: 109,
    time: 1,
    category: "감자탕",
    foods: ["감자탕", "백반"],
    menus: [
      {
        name: "감자탕백반",
        price: 9000,
      },
      {
        name: "감자탕 소",
        price: 21000,
      },
      {
        name: "감자탕 중",
        price: 28000,
      },
      {
        name: "감자탕 대",
        price: 35000,
      },
    ],
    url: "https://naver.me/xuICKebC",
    thumbnail:
      "https://ldb-phinf.pstatic.net/20200518_159/1589788929262GsNTV_JPEG/YkoaVXXwlxf0CAN5Ic8CKIXe.jpg",
    isRequest: false,
    x: 127.03867207580787,
    y: 37.496580940988515,
  },
  {
    name: "장칼장",
    distance: 243,
    time: 3,
    category: "한식",
    foods: ["칼국수"],
    menus: [],
    url: "",
    thumbnail: "",
    isRequest: true,
    x: 0,
    y: 0,
  },
  {
    name: "짬뽕지존",
    distance: 658,
    time: 9,
    category: "중식",
    foods: ["짬뽕", "짜장면"],
    menus: [],
    url: "",
    thumbnail: "",
    isRequest: true,
    x: 0,
    y: 0,
  },
  {
    name: "조선파스타",
    distance: 480,
    time: 6,
    category: "파스타",
    foods: ["파스타"],
    menus: [],
    url: "",
    thumbnail: "",
    isRequest: true,
    x: 0,
    y: 0,
  },
  {
    name: "진궁",
    distance: 310,
    time: 5,
    category: "중식",
    foods: ["짬뽕", "짜장면", "볶음밥", "탕수육"],
    menus: [
      {
        name: "차돌박이짬뽕",
        price: 12000,
      },
      {
        name: "짜장면",
        price: 7000,
      },
      {
        name: "간짜장",
        price: 8000,
      },
      {
        name: "짬뽕",
        price: 8000,
      },
      {
        name: "쟁반짜장",
        price: 10000,
      },
      {
        name: "볶음짬뽕",
        price: 12000,
      },
      {
        name: "사천탕면",
        price: 11000,
      },
      {
        name: "기스면",
        price: 12000,
      },
      {
        name: "볶음밥",
        price: 8000,
      },
      {
        name: "새우볶음밥",
        price: 10000,
      },
      {
        name: "탕수육 소",
        price: 22000,
      },
      {
        name: "탕수육 중",
        price: 27000,
      },
      {
        name: "찹쌀탕수육 중",
        price: 30000,
      },
    ],
    url: "https://naver.me/GmFfMEZp",
    thumbnail:
      "https://ldb-phinf.pstatic.net/20200121_207/1579585890502BWexw_JPEG/YuGtdVbV-Pj4-ziCTSmHC1vL.jpg",
    isRequest: false,
    x: 127.0364805,
    y: 37.4990155,
  },
  {
    name: "차알",
    distance: 871,
    time: 16,
    category: "중식",
    foods: ["짜장면", "탕수육", "볶음밥", "마라탕", "마라샹궈"],
    menus: [
      {
        name: "삼선 짜장면",
        price: 8900,
      },
      {
        name: "차알 마라탕면",
        price: 12900,
      },
      {
        name: "차알 미엔",
        price: 12500,
      },
      {
        name: "차우멘",
        price: 12900,
      },
      {
        name: "차알 볶음밥",
        price: 8900,
      },
      {
        name: "오렌지 치킨",
        price: 19500,
      },
      {
        name: "차알 탕수육",
        price: 20000,
      },
      {
        name: "차알 마라샹궈",
        price: 23500,
      },
      {
        name: "레몬크림 쉬림프",
        price: 18900,
      },
      {
        name: "몽골리안비프",
        price: 24000,
      },
    ],
    url: "https://naver.me/GgekWeNV",
    thumbnail:
      "https://ldb-phinf.pstatic.net/20230424_135/1682318515054vX6Ec_PNG/%C2%F7%BE%CB%B7%CE%B0%ED_2023.png",
    isRequest: false,
    x: 127.0413566,
    y: 37.5028813,
  },
  {
    name: "천하돈까스",
    distance: 108,
    time: 1,
    category: "일식",
    foods: ["돈까스", "돈가츠", "돈부리", "카레", "우동"],
    menus: [
      {
        name: "로스가츠",
        price: 8500,
      },
      {
        name: "생선가츠",
        price: 11000,
      },
      {
        name: "치즈가츠",
        price: 11000,
      },
      {
        name: "치킨가츠",
        price: 9000,
      },
      {
        name: "히레가츠",
        price: 9000,
      },
      {
        name: "오야꼬동",
        price: 8500,
      },
      {
        name: "가츠동",
        price: 8500,
      },
      {
        name: "가츠카레",
        price: 9000,
      },
      {
        name: "에비카레",
        price: 10000,
      },
      {
        name: "우동",
        price: 8500,
      },
      {
        name: "에비우동",
        price: 9500,
      },
    ],
    url: "https://naver.me/Goz2eovw",
    thumbnail:
      "https://ldb-phinf.pstatic.net/20180802_140/1533180598254fMsm1_JPEG/xGrvgJiqESL7lggX6AUfQBX1.jpg",
    isRequest: false,
    x: 127.03772529924946,
    y: 37.49684565008701,
  },
  {
    name: "청담막식당",
    distance: 392,
    time: 6,
    category: "한식",
    foods: ["막국수", "정식", "돈까스", "규동"],
    menus: [
      {
        name: "돈까스 정식",
        price: 10000,
      },
      {
        name: "규동 정식",
        price: 10000,
      },
      {
        name: "카레 정식",
        price: 8000,
      },
      {
        name: "물막국수",
        price: 8000,
      },
      {
        name: "비빔막국수",
        price: 8000,
      },
      {
        name: "판모밀",
        price: 8000,
      },
      {
        name: "메밀전병",
        price: 5000,
      },
    ],
    url: "https://naver.me/GlV7GCyR",
    thumbnail:
      "https://ldb-phinf.pstatic.net/20221208_235/1670485768484U8c5E_JPEG/KakaoTalk_20221208_164331571_02.jpg",
    isRequest: false,
    x: 127.03578711457308,
    y: 37.498992441326344,
  },
  {
    name: "춘만두",
    distance: 545,
    time: 7,
    category: "",
    foods: [""],
    menus: [],
    url: "",
    thumbnail: "",
    isRequest: true,
    x: 0,
    y: 0,
  },
  {
    name: "타코벨",
    distance: 310,
    time: 5,
    category: "멕시코",
    foods: ["타코", "퀘사디아"],
    menus: [
      {
        name: "수프림 타코 세트",
        price: 8500,
      },
      {
        name: "트리플 치즈 퀘사디아 세트",
        price: 9000,
      },
      {
        name: "수프림 타코 보울 콤보",
        price: 8400,
      },
      {
        name: "더블 치즈 데커 타코 세트",
        price: 8700,
      },
      {
        name: "트리플 치즈 퀘사디아",
        price: 6900,
      },
      {
        name: "퀘사디아 세트",
        price: 8300,
      },
      {
        name: "크런치랩 세트",
        price: 7700,
      },
      {
        name: "그릴 브리또 세트",
        price: 8600,
      },
      {
        name: "프리미엄 나쵸",
        price: 7000,
      },
    ],
    url: "https://naver.me/GvkXF935",
    thumbnail:
      "https://ldb-phinf.pstatic.net/20191223_56/1577106229373Rm4Ji_JPEG/I8LhcD0g81JMTlYHp0_mhhew.jpg",
    isRequest: false,
    x: 127.0364681,
    y: 37.49905210000001,
  },
  {
    name: "텐핑거",
    distance: 252,
    time: 4,
    category: "햄버거",
    foods: ["햄버거", "샐러드"],
    menus: [
      {
        name: "백야드 스피니치",
        price: 7600,
      },
      {
        name: "트러플 비프",
        price: 6400,
      },
      {
        name: "스테이크 그릭",
        price: 7400,
      },
      {
        name: "그릭 비프",
        price: 6800,
      },
      {
        name: "알리오 리치",
        price: 6700,
      },
      {
        name: "스테이크 샐러드",
        price: 13900,
      },
      {
        name: "우삼겹 샐러드",
        price: 9600,
      },
      {
        name: "닭가슴살 샐러드",
        price: 8400,
      },
      {
        name: "아보카도 페타치즈 샐러드",
        price: 10800,
      },
      {
        name: "양송이 스프",
        price: 4200,
      },
      {
        name: "트러플 파다노 포테이토",
        price: 5600,
      },
    ],
    url: "https://naver.me/FQ5rJJfx",
    thumbnail:
      "https://ldb-phinf.pstatic.net/20220930_40/1664524135930Bbpa4_JPEG/%C8%AD%B8%E9_%C4%B8%C3%B3_2022-09-30_112601.jpg",
    isRequest: false,
    x: 127.03708712049159,
    y: 37.4991111277532,
  },
  {
    name: "토끼회관",
    distance: 475,
    time: 8,
    category: "일식",
    foods: ["덮밥"],
    menus: [
      {
        name: "간장 닭둥지덮밥",
        price: 9000,
      },
      {
        name: "매운 닭둥지덮밥",
        price: 9000,
      },
      {
        name: "돼지덮밥",
        price: 11000,
      },
      {
        name: "연어장덮밥",
        price: 15000,
      },
      {
        name: "생연어덮밥",
        price: 15000,
      },
    ],
    url: "https://naver.me/Gq1eNHAH",
    thumbnail:
      "https://ldb-phinf.pstatic.net/20220531_93/1653991731100OXveR_JPEG/5%C1%BE.jpg",
    isRequest: false,
    x: 127.0416040943174,
    y: 37.49781018392645,
  },
  {
    name: "파이어벨",
    distance: 1100,
    time: 19,
    category: "햄버거",
    foods: ["햄버거"],
    menus: [
      {
        name: "굿모닝치즈버거",
        price: 11900,
      },
      {
        name: "트위스트칠리버거",
        price: 11000,
      },
      {
        name: "BTD버거",
        price: 11900,
      },
      {
        name: "고메버거",
        price: 11900,
      },
      {
        name: "베버리힐즈 버거",
        price: 11900,
      },
      {
        name: "칠리킹 버거",
        price: 11500,
      },
      {
        name: "프렌치프라이",
        price: 7500,
      },
      {
        name: "스위트 포테이토",
        price: 11000,
      },
    ],
    url: "https://naver.me/xlWPdSPA",
    thumbnail:
      "https://ldb-phinf.pstatic.net/20210715_17/1626277909915yPtvs_JPEG/04bnns3wqLgdPt4AOxsWsYg1.jpg",
    isRequest: false,
    x: 127.0416919,
    y: 37.5035664,
  },
  {
    name: "핑크솔",
    distance: 399,
    time: 5,
    category: "이탈리아",
    foods: ["파스타", "리조또", "피자"],
    menus: [
      {
        name: "알리오 올리오",
        price: 18000,
      },
      {
        name: "할라피뇨 크림파스타",
        price: 19000,
      },
      {
        name: "봉골레",
        price: 20000,
      },
      {
        name: "쉬림프 로제 파스타",
        price: 22000,
      },
      {
        name: "해물 관자 리조또",
        price: 21000,
      },
      {
        name: "수비드 삼겹 깻잎 리조또",
        price: 22000,
      },
      {
        name: "마르게리따",
        price: 20000,
      },
      {
        name: "페페로니 피자",
        price: 23000,
      },
      {
        name: "콰트로 포르마지",
        price: 22000,
      },
      {
        name: "하와이안 피자",
        price: 22000,
      },
    ],
    url: "https://naver.me/xZDOBod8",
    thumbnail:
      "https://ldb-phinf.pstatic.net/20150911_223/1441968180811ksuWq_JPEG/SUBMIT_1430451170837_36561292.jpg",
    isRequest: false,
    x: 127.03488033614349,
    y: 37.49812400431692,
  },
  {
    name: "튜즈데이 버거 앤 윙",
    distance: 583,
    time: 8,
    category: "",
    foods: [""],
    menus: [],
    url: "",
    thumbnail: "",
    isRequest: true,
    x: 0,
    y: 0,
  },
  {
    name: "하노이스토리",
    distance: 399,
    time: 6,
    category: "베트남",
    foods: ["쌀국수", "분짜", "짜조"],
    menus: [
      {
        name: "소고기 쌀국수",
        price: 10000,
      },
      {
        name: "차돌 쌀국수",
        price: 13000,
      },
      {
        name: "분짜",
        price: 14000,
      },
      {
        name: "해물짜조",
        price: 6000,
      },
      {
        name: "고기짜조",
        price: 7000,
      },
    ],
    url: "https://naver.me/G0fJJpP2",
    thumbnail:
      "https://ldb-phinf.pstatic.net/20180426_73/1524705859668Nzevo_JPEG/b0eLjZ5tjZpFgE3rkXLJS42l.jpg",
    isRequest: false,
    x: 127.035810926676,
    y: 37.49872780663739,
  },
  {
    name: "한옥집김치찜",
    distance: 284,
    time: 4,
    category: "한식",
    foods: ["김치찌개", "반상", "정식", "제육"],
    menus: [
      {
        name: "한옥집 김치찜 반상",
        price: 9800,
      },
      {
        name: "치즈 달걀말이 반상",
        price: 10800,
      },
      {
        name: "수제 떡갈비 반상",
        price: 10800,
      },
      {
        name: "돼지 김치찌개 반상",
        price: 9800,
      },
      {
        name: "김치찜 달걀 정식",
        price: 13800,
      },
      {
        name: "김치찜 떡갈비 정식",
        price: 13800,
      },
      {
        name: "김치찜 제육 정식",
        price: 14800,
      },
      {
        name: "김치찜 불백 정식",
        price: 14800,
      },
    ],
    url: "https://naver.me/xB4sJAzu",
    thumbnail:
      "https://ldb-phinf.pstatic.net/20200722_192/1595394085848GgJOC_JPEG/7sGNXz0CUZyTji_S1kVzqYxT.jpg",
    isRequest: false,
    x: 127.0365456,
    y: 37.50002629999998,
  },
  {
    name: "호보식당",
    distance: 440,
    time: 6,
    category: "육류",
    foods: ["갈비", "정식", "삼겹살"],
    menus: [
      {
        name: "호보갈비정식",
        price: 13000,
      },
      {
        name: "제육정식",
        price: 10000,
      },
      {
        name: "마늘갈비 250g",
        price: 28000,
      },
      {
        name: "호보갈비 220g",
        price: 17000,
      },
      {
        name: "생삼겹살 160g",
        price: 16000,
      },
      {
        name: "생목살 160g",
        price: 16000,
      },
    ],
    url: "https://naver.me/IgTNTgk2",
    thumbnail:
      "https://ldb-phinf.pstatic.net/20200630_143/1593486659776CR8HY_JPEG/VRUThzVQoBc5Geqkrgcf9hS4.JPG.jpg",
    isRequest: false,
    x: 127.0346322720361,
    y: 37.498089738953894,
  },
  {
    name: "호천당",
    distance: 420,
    time: 6,
    category: "일식",
    foods: ["돈까스", "나베", "소바"],
    menus: [
      {
        name: "수제생돈까스",
        price: 10000,
      },
      {
        name: "김치가츠나베",
        price: 11500,
      },
      {
        name: "냉소바",
        price: 9500,
      },
      {
        name: "모짜렐라치즈돈까스",
        price: 12000,
      },
      {
        name: "점보세트(돈까스+소바or우동+찬류+장국)",
        price: 13000,
      },
    ],
    url: "https://naver.me/5LAMLSP8",
    thumbnail:
      "https://ldb-phinf.pstatic.net/20220509_235/16520563623923VOei_JPEG/%B8%DE%C0%CE01.JPG",
    isRequest: false,
    x: 127.03536062697601,
    y: 37.4990063440784,
  },
  {
    name: "홍낭자와 김도령",
    distance: 83,
    time: 0,
    category: "분식",
    foods: ["김밥", "떡볶이", "덮밥"],
    menus: [
      {
        name: "김도령김밥",
        price: 4500,
      },
      {
        name: "달걀듬뿍김밥",
        price: 5500,
      },
      {
        name: "치즈참치김밥",
        price: 6000,
      },
      {
        name: "노란키토김밥",
        price: 7000,
      },
      {
        name: "생연어키토김밥",
        price: 9000,
      },
      {
        name: "홍로제떡볶이",
        price: 16000,
      },
      {
        name: "홍치즈떡볶이",
        price: 16000,
      },
      {
        name: "제육덮밥",
        price: 9000,
      },
      {
        name: "닭갈비덮밥",
        price: 9000,
      },
      {
        name: "치킨가라아게덮밥",
        price: 8500,
      },
    ],
    url: "https://naver.me/x8lied4l",
    thumbnail:
      "https://ldb-phinf.pstatic.net/20201212_198/1607740990032mmdMh_JPEG/ch-Pnxqs6Qij1ov-mVIvMfaL.jpeg.jpg",
    isRequest: false,
    x: 127.0379902,
    y: 37.4980833,
  },
  {
    name: "홍수계찜닭",
    distance: 284,
    time: 4,
    category: "육류",
    foods: ["찜닭"],
    menus: [
      {
        name: "찜닭(소)",
        price: 26000,
      },
      {
        name: "찜닭(중)",
        price: 37000,
      },
      {
        name: "치즈찜닭(소)",
        price: 29000,
      },
      {
        name: "순살찜닭(소)",
        price: 30000,
      },
    ],
    url: "https://naver.me/FrKAlQQW",
    thumbnail:
      "https://ldb-phinf.pstatic.net/20181002_195/1538465532878b81Iw_JPEG/ssXTlHAJ4L0w7YjNV7zvhmli.jpg",
    isRequest: false,
    x: 127.0365953,
    y: 37.4999778,
  },
  {
    name: "후라토 식당",
    distance: 284,
    time: 4,
    category: "일식",
    foods: ["규카츠", "오므라이스"],
    menus: [
      {
        name: "규카츠",
        price: 18000,
      },
      {
        name: "오므라이스",
        price: 12000,
      },
      {
        name: "스테키 정식",
        price: 18000,
      },
    ],
    url: "https://naver.me/FUGkzYCm",
    thumbnail:
      "https://ldb-phinf.pstatic.net/20230103_269/1672711503234bfR7F_PNG/%BD%E6%B3%D7%C0%CF_%B4%EB%C7%A5%BB%E7%C1%F8.png",
    isRequest: false,
    x: 127.0365456,
    y: 37.5000263,
  },
  {
    name: "Chai797",
    distance: 284,
    time: 4,
    category: "중식",
    foods: ["짜장면", "짬뽕", "탕수육", "덮밥", "볶음밥"],
    menus: [
      {
        name: "삼선짜장면",
        price: 10500,
      },
      {
        name: "남자짜장",
        price: 15500,
      },
      {
        name: "삼선해물짬뽕",
        price: 15000,
      },
      {
        name: "고기짬뽕",
        price: 12500,
      },
      {
        name: "차이탕면",
        price: 11000,
      },
      {
        name: "탕수육",
        price: 34000,
      },
      {
        name: "토종 마늘볶음밥",
        price: 13500,
      },
      {
        name: "어향가지덮밥",
        price: 18000,
      },
    ],
    url: "https://naver.me/GsTOVZ4b",
    thumbnail:
      "https://ldb-phinf.pstatic.net/20180509_287/1525831124227YTGlU_JPEG/f3i2H4I3uPqR4UseyEhSX9Lq.JPG.jpg",
    isRequest: false,
    x: 127.0365953,
    y: 37.4999778,
  },
];

const cafes = [{ name: "투썸플레이스", distance: 35, time: 1 }];

const members = [
  "카이트",
  "에디",
  "노아",
  "샐리",
  "스카이",
  "주디",
  "데이브",
  "히나",
];

const 명령어 = {
  blocks: [
    {
      type: "section",
      text: {
        text: "[식당 목록]\n`.목록` - 전체 식당 목록\n`.목록 ${카테고리}` - 카테고리에 일치하는 식당 목록 (ex. `.목록 초밥`)",
        type: "mrkdwn",
      },
    },
    {
      type: "section",
      text: {
        text: "[식당 정보]\n`.${식당이름}` - 식당 정보 (ex. `.천하돈까스`)",
        type: "mrkdwn",
      },
    },
    {
      type: "section",
      text: {
        text: "[식당 랜덤]\n`.랜덤` - 근처 식당을 랜덤하게 추천\n`.랜덤 ${n}분` - n분 이내 식당을 랜덤하게 추천 (ex. `.랜덤 3분`)",
        type: "mrkdwn",
      },
    },
    {
      type: "section",
      text: {
        text: "[식당 추가 요청]\n`.추가 ${식당이름}` - 식당 추가 (ex. `.추가 다베식당`)",
        type: "mrkdwn",
      },
    },
    {
      type: "divider",
    },
    {
      type: "section",
      text: {
        text: "[사다리 타기]\n`.사다리`\n- 서비스개발팀 사다리 타기\n`.사다리 ${닉네임}/${닉네임}`\n- 미참석자 제외 사다리 타기 (ex `.사다리 데이브`, `.사다리 데이브/샐리`)",
        type: "mrkdwn",
      },
    },
  ],
};

const errorMessage = {
  blocks: [
    {
      type: "section",
      text: {
        text: "잘못된 명령어입니다.",
        type: "mrkdwn",
      },
    },
  ],
};

module.exports = {
  stores,
  cafes,
  members,
  명령어,
  errorMessage,
};
